(ns warehouse.search.events
  (:require
   [warehouse.index :as index]
   [warehouse.search.db :as search-db]
   [re-frame.core :refer [reg-cofx reg-event-fx inject-cofx reg-fx dispatch reg-event-db]]
   [warehouse.storage.indexeddb :as indexeddb]
   [cljs.core.async :refer [<!]])
  (:require-macros
   [cljs.core.async.macros :refer [go]]))

(reg-event-fx
 :filter-update
 (fn
   [{:keys [db]} [_ val]]
   {:db (assoc-in db [:filter :val] val)
    :update-filter val}))

(reg-fx
 :update-filter
 (fn [q]
   (go (dispatch [:filter-updated (<! (indexeddb/filter-ids q))]))))

(reg-event-fx
 :filter-updated
 (fn
   [{:keys [db]} [_ ids]]
   (let [eff {:db (assoc-in db [:filter :search] ids)}]
     (if (empty? (get-in db [:filter :val]))
       (assoc eff :load-components {:limit (get-in db [:infinite-scroll :records-per-page])
                                    :offset 0})
       (assoc eff :load-components-by-ids ids)))))

(reg-event-fx
 :filter-refresh
 (fn
   [{:keys [db]} _]
   {:dispatch [:filter-update (get-in db [:filter :val])]}))
