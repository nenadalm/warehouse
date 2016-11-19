(ns warehouse.notifications.subs
  (:require
    [re-frame.core :refer [reg-sub]]))

(reg-sub
  :notifications
  (fn
    [db _]
    (:notifications db)))

