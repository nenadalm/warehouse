// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('warehouse.subs');
goog.require('warehouse.events');
goog.require('re_frame.core');
goog.require('warehouse.views');
goog.require('warehouse.index');
warehouse.core.main = (function warehouse$core$main(){
secretary.core.dispatch_BANG_(location.hash);

window.addEventListener("hashchange",(function (e){
return secretary.core.dispatch_BANG_(location.hash);
}));

var G__16900_16903 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$initialize_DASH_db], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__16900_16903) : re_frame.core.dispatch_sync.call(null,G__16900_16903));

var G__16901_16904 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [warehouse.views.page], null);
var G__16902_16905 = document.getElementById("app");
(reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__16901_16904,G__16902_16905) : reagent.core.render_component.call(null,G__16901_16904,G__16902_16905));

return warehouse.index.initialize();
});
