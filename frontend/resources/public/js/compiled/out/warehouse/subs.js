// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.subs');
goog.require('cljs.core');
goog.require('warehouse.util');
goog.require('re_frame.core');
var G__15369_15371 = cljs.core.cst$kw$show_DASH_nav;
var G__15370_15372 = ((function (G__15369_15371){
return (function (db,_){
return cljs.core.cst$kw$show_DASH_nav.cljs$core$IFn$_invoke$arity$1(db);
});})(G__15369_15371))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__15369_15371,G__15370_15372) : re_frame.core.reg_sub.call(null,G__15369_15371,G__15370_15372));
var G__15374_15376 = cljs.core.cst$kw$visible_DASH_components;
var G__15375_15377 = ((function (G__15374_15376){
return (function (db,_){
if(clojure.string.blank_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$val], null)))){
return cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(db);
} else {
return cljs.core.select_keys(cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(db),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__15374_15376){
return (function (p1__15373_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__15373_SHARP_,"ref");
});})(G__15374_15376))
,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$search], null))));
}
});})(G__15374_15376))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__15374_15376,G__15375_15377) : re_frame.core.reg_sub.call(null,G__15374_15376,G__15375_15377));
var G__15378_15380 = cljs.core.cst$kw$active_DASH_tab;
var G__15379_15381 = ((function (G__15378_15380){
return (function (db,_){
return cljs.core.cst$kw$page.cljs$core$IFn$_invoke$arity$1(db);
});})(G__15378_15380))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__15378_15380,G__15379_15381) : re_frame.core.reg_sub.call(null,G__15378_15380,G__15379_15381));
var G__15382_15384 = cljs.core.cst$kw$state;
var G__15383_15385 = ((function (G__15382_15384){
return (function (db,_){
return db;
});})(G__15382_15384))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__15382_15384,G__15383_15385) : re_frame.core.reg_sub.call(null,G__15382_15384,G__15383_15385));
var G__15386_15388 = cljs.core.cst$kw$state_DASH_data_DASH_uri;
var G__15387_15389 = ((function (G__15386_15388){
return (function (db,_){
return [cljs.core.str("data:text/json;charset=utf-8,"),cljs.core.str(window.encodeURIComponent(JSON.stringify(cljs.core.clj__GT_js(warehouse.util.state__GT_document(db)))))].join('');
});})(G__15386_15388))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__15386_15388,G__15387_15389) : re_frame.core.reg_sub.call(null,G__15386_15388,G__15387_15389));
var G__15390_15392 = cljs.core.cst$kw$change_DASH_sets;
var G__15391_15393 = ((function (G__15390_15392){
return (function (db,_){
return cljs.core.cst$kw$change_DASH_sets.cljs$core$IFn$_invoke$arity$1(db);
});})(G__15390_15392))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__15390_15392,G__15391_15393) : re_frame.core.reg_sub.call(null,G__15390_15392,G__15391_15393));