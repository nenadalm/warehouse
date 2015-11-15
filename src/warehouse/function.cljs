(ns warehouse.function)

(defn get-updated-items
  [col1 col2]
  (if (= col1 col2)
    []
    (loop [k (keys col1)
           res {}]
      (if (empty? k)
        res
        (let [key (first k)]
          (if (and (contains? col2 key) (not= (get col1 key) (get col2 key)))
            (recur (rest k) (conj res {key (get col1 key)}))
            (recur (rest k) res)))))))

