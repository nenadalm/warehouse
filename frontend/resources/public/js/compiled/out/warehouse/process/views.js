// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.process.views');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('warehouse.process.events');
goog.require('warehouse.process.subs');
warehouse.process.views.process_data = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Title",(function (p1__14696_SHARP_){
return cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(p1__14696_SHARP_);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["State",(function (p1__14697_SHARP_){
return cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(p1__14697_SHARP_);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Created at",(function (p1__14698_SHARP_){
return cljs.core.cst$kw$created_DASH_at.cljs$core$IFn$_invoke$arity$1(p1__14698_SHARP_);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Finished at",(function (p1__14699_SHARP_){
return cljs.core.cst$kw$finished_DASH_at.cljs$core$IFn$_invoke$arity$1(p1__14699_SHARP_);
})], null)], null);
warehouse.process.views.process = (function warehouse$process$views$process(p){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,p__14704){
var vec__14705 = p__14704;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14705,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14705,(1),null);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p) : f.call(null,p))], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,i], null));
}),warehouse.process.views.process_data)], null);
});
warehouse.process.views.processes = (function warehouse$process$views$processes(){
var data = (function (){var G__14731 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$processes], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14731) : re_frame.core.subscribe.call(null,G__14731));
})();
return ((function (data){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table$processes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$thead,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (data){
return (function (i,p__14732){
var vec__14733 = p__14732;
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14733,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14733,(1),null);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,title], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,i], null));
});})(data))
,warehouse.process.views.process_data)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tbody,(function (){var iter__7460__auto__ = ((function (data){
return (function warehouse$process$views$processes_$_iter__14736(s__14737){
return (new cljs.core.LazySeq(null,((function (data){
return (function (){
var s__14737__$1 = s__14737;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__14737__$1);
if(temp__4657__auto__){
var s__14737__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14737__$2)){
var c__7458__auto__ = cljs.core.chunk_first(s__14737__$2);
var size__7459__auto__ = cljs.core.count(c__7458__auto__);
var b__14739 = cljs.core.chunk_buffer(size__7459__auto__);
if((function (){var i__14738 = (0);
while(true){
if((i__14738 < size__7459__auto__)){
var vec__14748 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7458__auto__,i__14738);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14748,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14748,(1),null);
cljs.core.chunk_append(b__14739,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [warehouse.process.views.process,p], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p)], null)));

var G__14754 = (i__14738 + (1));
i__14738 = G__14754;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14739),warehouse$process$views$processes_$_iter__14736(cljs.core.chunk_rest(s__14737__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14739),null);
}
} else {
var vec__14751 = cljs.core.first(s__14737__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14751,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14751,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [warehouse.process.views.process,p], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p)], null)),warehouse$process$views$processes_$_iter__14736(cljs.core.rest(s__14737__$2)));
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
return iter__7460__auto__((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(data) : cljs.core.deref.call(null,data)));
})()], null)], null);
});
;})(data))
});
