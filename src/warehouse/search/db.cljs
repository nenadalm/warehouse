(ns warehouse.search.db
  (:require
    lunr))

(def index (.lunr js/window (fn [])))

(defn initialize [properties]
  (doseq [property properties]
    (.field index property)))

(defn update-index [documents]
  (doseq [document documents]
    (.update index (clj->js document))))

