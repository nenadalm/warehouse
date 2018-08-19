// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.search.views');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('warehouse.search.events');
goog.require('re_frame.core');
warehouse.search.views.search = (function warehouse$search$views$search(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,"Search: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"search",cljs.core.cst$kw$type,"search",cljs.core.cst$kw$on_DASH_change,(function (e){
var G__12587 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter_DASH_update,e.target.value], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__12587) : re_frame.core.dispatch.call(null,G__12587));
})], null)], null)], null);
});