// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.pages.process.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('warehouse.pages.process.db');
goog.require('warehouse.util');
goog.require('re_frame.core');
var G__12882_12884 = cljs.core.cst$kw$current_DASH_datetime;
var G__12883_12885 = ((function (G__12882_12884){
return (function (cofx,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cofx,cljs.core.cst$kw$current_DASH_datetime,(new Date()).toLocaleString());
});})(G__12882_12884))
;
(re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2(G__12882_12884,G__12883_12885) : re_frame.core.reg_cofx.call(null,G__12882_12884,G__12883_12885));
/**
 * Create process model. Process is a map with keys: :title, :url, :type, :data, :name
 */
warehouse.pages.process.events.create_process = (function warehouse$pages$process$events$create_process(p__12886,p__12887){
var map__12888 = p__12886;
var map__12888__$1 = ((((!((map__12888 == null)))?(((((map__12888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12888.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12888):map__12888);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12888__$1,cljs.core.cst$kw$db);
var current_datetime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12888__$1,cljs.core.cst$kw$current_DASH_datetime);
var vec__12889 = p__12887;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12889,(0),null);
var process = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12889,(1),null);
var k = warehouse.util.next_key(cljs.core.cst$kw$processes.cljs$core$IFn$_invoke$arity$1(db));
var p = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(process,cljs.core.cst$kw$id,k,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$state,cljs.core.cst$kw$pending,cljs.core.cst$kw$created_DASH_at,current_datetime], 0));
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$processes,k], null),p),cljs.core.cst$kw$import_DASH_form),cljs.core.cst$kw$process,p], null);
});
var G__12893_12895 = cljs.core.cst$kw$process;
var G__12894_12896 = ((function (G__12893_12895){
return (function (process){
return (warehouse.pages.process.db.run_process.cljs$core$IFn$_invoke$arity$1 ? warehouse.pages.process.db.run_process.cljs$core$IFn$_invoke$arity$1(process) : warehouse.pages.process.db.run_process.call(null,process));
});})(G__12893_12895))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__12893_12895,G__12894_12896) : re_frame.core.reg_fx.call(null,G__12893_12895,G__12894_12896));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$process_DASH_create,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__12897 = cljs.core.cst$kw$current_DASH_datetime;
return (re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(G__12897) : re_frame.core.inject_cofx.call(null,G__12897));
})()], null),warehouse.pages.process.events.create_process);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$process_DASH_finished,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__12898 = cljs.core.cst$kw$current_DASH_datetime;
return (re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(G__12898) : re_frame.core.inject_cofx.call(null,G__12898));
})()], null),(function (p__12899,p__12900){
var map__12901 = p__12899;
var map__12901__$1 = ((((!((map__12901 == null)))?(((((map__12901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12901.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12901):map__12901);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12901__$1,cljs.core.cst$kw$db);
var current_datetime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12901__$1,cljs.core.cst$kw$current_DASH_datetime);
var vec__12902 = p__12900;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12902,(0),null);
var process_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12902,(1),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12902,(2),null);
var process = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$processes,process_id], null));
var updated_process = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(process,cljs.core.cst$kw$state,new_state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$finished_DASH_at,current_datetime], 0));
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$processes,process_id], null),updated_process)], null);
}));
