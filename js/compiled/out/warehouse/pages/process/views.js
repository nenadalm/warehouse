// Compiled by ClojureScript 1.10.145 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.pages.process.views');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('warehouse.pages.process.events');
goog.require('warehouse.pages.process.subs');
warehouse.pages.process.views.process_data = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Title",(function (p1__19509_SHARP_){
return cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(p1__19509_SHARP_);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["State",(function (p1__19510_SHARP_){
return cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(p1__19510_SHARP_);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Created at",(function (p1__19511_SHARP_){
return cljs.core.cst$kw$created_DASH_at.cljs$core$IFn$_invoke$arity$1(p1__19511_SHARP_);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Finished at",(function (p1__19512_SHARP_){
return cljs.core.cst$kw$finished_DASH_at.cljs$core$IFn$_invoke$arity$1(p1__19512_SHARP_);
})], null)], null);
warehouse.pages.process.views.process = (function warehouse$pages$process$views$process(p){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,p__19513){
var vec__19514 = p__19513;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19514,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19514,(1),null);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p) : f.call(null,p))], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,i], null));
}),warehouse.pages.process.views.process_data)], null);
});
warehouse.pages.process.views.processes = (function warehouse$pages$process$views$processes(){
var data = (function (){var G__19517 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$processes], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19517) : re_frame.core.subscribe.call(null,G__19517));
})();
return ((function (data){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table$processes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$thead,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (data){
return (function (i,p__19518){
var vec__19519 = p__19518;
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19519,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19519,(1),null);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,title], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,i], null));
});})(data))
,warehouse.pages.process.views.process_data)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tbody,(function (){var iter__4292__auto__ = ((function (data){
return (function warehouse$pages$process$views$processes_$_iter__19522(s__19523){
return (new cljs.core.LazySeq(null,((function (data){
return (function (){
var s__19523__$1 = s__19523;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__19523__$1);
if(temp__5457__auto__){
var s__19523__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19523__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__19523__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__19525 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__19524 = (0);
while(true){
if((i__19524 < size__4291__auto__)){
var vec__19526 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__19524);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19526,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19526,(1),null);
cljs.core.chunk_append(b__19525,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [warehouse.pages.process.views.process,p], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p)], null)));

var G__19532 = (i__19524 + (1));
i__19524 = G__19532;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19525),warehouse$pages$process$views$processes_$_iter__19522(cljs.core.chunk_rest(s__19523__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19525),null);
}
} else {
var vec__19529 = cljs.core.first(s__19523__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19529,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19529,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [warehouse.pages.process.views.process,p], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p)], null)),warehouse$pages$process$views$processes_$_iter__19522(cljs.core.rest(s__19523__$2)));
}
} else {
return null;
}
break;
}
});})(data))
,null,null));
});})(data))
;
return iter__4292__auto__(cljs.core.deref(data));
})()], null)], null);
});
;})(data))
});
