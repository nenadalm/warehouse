(ns warehouse.indexeddb-test
  (:require
   [warehouse.indexeddb :as indexeddb]
   [cljs.test :refer-macros [deftest is testing use-fixtures async]]
   [cljs.core.async :refer [<!]])
  (:require-macros
   [cljs.core.async.macros :refer [go]]))

(def users [{:id 1
             :name "John Doe"
             :email "jd@example.com"
             :interests ["mountainboarding" "books"]}
            {:id 2
             :name "Stan Smith"
             :email "stan@example.com"
             :interests ["guns"]}
            {:id 3
             :name "Steve Smith"
             :email "steve.s@example.com"
             :interests ["fantasy" "boardgames"]}
            {:id 4
             :name "Flynn Carsen"
             :email "carsen@example.com"
             :interests ["library" "books" "artifacts"]}])

(defn user->record [user]
  (clj->js (assoc user
                  :keywords (concat [(:email user)]
                                    (map clojure.string/lower-case
                                         (clojure.string/split (:name user) #" "))
                                    (:interests user)))))

(defn on-upgrade [e]
  (let [db (.-target.result e)
        store (.createObjectStore db "user" #js {:keyPath "id"})]
    (doseq [user users]
      (.put store (user->record user)))
    (.createIndex store "by_keyword" "keywords" #js {:multiEntry true})))

(def db {:name "indexeddb_test"
         :version 1
         :on-upgrade on-upgrade})

(def test-data
  [{:name "select all keys"
    :query {:select :idb/key
            :from :user}
    :expected-result {:count 4 :data [1 2 3 4]}}
   {:name "select all values"
    :query {:select :idb/value
            :from :user}
    :expected-result {:count 4
                      :data [{:id 1
                              :name "John Doe"
                              :email "jd@example.com"
                              :interests ["mountainboarding" "books"]
                              :keywords ["jd@example.com" "john" "doe" "mountainboarding" "books"]}
                             {:id 2
                              :name "Stan Smith"
                              :email "stan@example.com"
                              :interests ["guns"]
                              :keywords ["stan@example.com" "stan" "smith" "guns"]}
                             {:id 3
                              :name "Steve Smith"
                              :email "steve.s@example.com"
                              :interests ["fantasy" "boardgames"]
                              :keywords ["steve.s@example.com" "steve" "smith" "fantasy" "boardgames"]}
                             {:id 4
                              :name "Flynn Carsen"
                              :email "carsen@example.com"
                              :interests ["library" "books" "artifacts"]
                              :keywords ["carsen@example.com" "flynn"  "carsen" "library" "books" "artifacts"]}]}}
   {:name "select all keys with offset"
    :query {:select :idb/key
            :from :user
            :offset 2}
    :expected-result {:count 4 :data [3 4]}}
   {:name "select all values with offset"
    :query {:select :idb/value
            :from :user
            :offset 2}
    :expected-result {:count 4
                      :data [{:id 3
                              :name "Steve Smith"
                              :email "steve.s@example.com"
                              :interests ["fantasy" "boardgames"]
                              :keywords ["steve.s@example.com" "steve" "smith" "fantasy" "boardgames"]}
                             {:id 4
                              :name "Flynn Carsen"
                              :email "carsen@example.com"
                              :interests ["library" "books" "artifacts"]
                              :keywords ["carsen@example.com" "flynn"  "carsen" "library" "books" "artifacts"]}]}}
   {:name "select all keys with limit"
    :query {:select :idb/key
            :from :user
            :limit 2}
    :expected-result {:count 4 :data [1 2]}}
   {:name "select all values with limit"
    :query {:select :idb/value
            :from :user
            :limit 2}
    :expected-result {:count 4
                      :data [{:id 1
                              :name "John Doe"
                              :email "jd@example.com"
                              :interests ["mountainboarding" "books"]
                              :keywords ["jd@example.com" "john" "doe" "mountainboarding" "books"]}
                             {:id 2
                              :name "Stan Smith"
                              :email "stan@example.com"
                              :interests ["guns"]
                              :keywords ["stan@example.com" "stan" "smith" "guns"]}]}}
   {:name "select all keys with offset and limit"
    :query {:select :idb/key
            :from :user
            :offset 1
            :limit 2}
    :expected-result {:count 4 :data [2 3]}}
   {:name "select all values with offset and limit"
    :query {:select :idb/value
            :from :user
            :offset 1
            :limit 2}
    :expected-result {:count 4
                      :data [{:id 2
                              :name "Stan Smith"
                              :email "stan@example.com"
                              :interests ["guns"]
                              :keywords ["stan@example.com" "stan" "smith" "guns"]}
                             {:id 3
                              :name "Steve Smith"
                              :email "steve.s@example.com"
                              :interests ["fantasy" "boardgames"]
                              :keywords ["steve.s@example.com" "steve" "smith" "fantasy" "boardgames"]}]}}
   {:name "select all keys with key `1` or `3` or `5`"
    :query {:select :idb/key
            :from :user
            :where '(in :idb/key [1 3 5])}
    :expected-result {:count 2
                      :data [1 3]}}
   {:name "select all values with key `1` or `3` or `5`"
    :query {:select :idb/value
            :from :user
            :where '(in :idb/key [1 3 5])}
    :expected-result {:count 2
                      :data [{:id 1,
                              :name "John Doe",
                              :email "jd@example.com",
                              :interests ["mountainboarding" "books"],
                              :keywords ["jd@example.com" "john" "doe" "mountainboarding" "books"]}
                             {:id 3,
                              :name "Steve Smith",
                              :email "steve.s@example.com",
                              :interests ["fantasy" "boardgames"],
                              :keywords ["steve.s@example.com" "steve" "smith" "fantasy" "boardgames"]}]}}
   ;; todo: more stuff on `in` (in `column` value)
])

(defn counter
  "Returns function that when called `n` times - calls `f`."
  [n f]
  (let [v (volatile! 0)]
    (fn []
      (vswap! v inc)
      (when (= n @v)
        (f)))))

(deftest query-test []
  (async done
         (let [done-single (counter (count test-data) done)]
           (doseq [data test-data]
             (let [ch (indexeddb/query db (:query data))]
               (go (is (= (:expected-result data)
                          (js->clj (<! ch) :keywordize-keys true))
                       (:name data))
                   (done-single)))))))
