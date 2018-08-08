// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('warehouse.pages.list.views');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('imatic.re_frame.form.subs');
goog.require('warehouse.util');
goog.require('warehouse.search.views');
goog.require('warehouse.component_import.views');
goog.require('warehouse.form');
warehouse.pages.list.views.form_fields = (function warehouse$pages$list$views$form_fields(p__12810){
var map__12811 = p__12810;
var map__12811__$1 = ((((!((map__12811 == null)))?(((((map__12811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12811.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12811):map__12811);
var field_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12811__$1,cljs.core.cst$kw$field_DASH_props);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,"Name: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [warehouse.form.field,(function (){var G__12813 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$component,cljs.core.cst$kw$input,cljs.core.cst$kw$path,cljs.core.cst$kw$name,cljs.core.cst$kw$field_DASH_props,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$text,cljs.core.cst$kw$name,"name"], null)], null);
return (field_props.cljs$core$IFn$_invoke$arity$1 ? field_props.cljs$core$IFn$_invoke$arity$1(G__12813) : field_props.call(null,G__12813));
})()], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,"Tags: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [warehouse.form.field,(function (){var G__12814 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$component,cljs.core.cst$kw$input,cljs.core.cst$kw$path,cljs.core.cst$kw$tags,cljs.core.cst$kw$field_DASH_props,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$text,cljs.core.cst$kw$name,"tags"], null)], null);
return (field_props.cljs$core$IFn$_invoke$arity$1 ? field_props.cljs$core$IFn$_invoke$arity$1(G__12814) : field_props.call(null,G__12814));
})()], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,"Amount: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [warehouse.form.field,(function (){var G__12815 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$component,cljs.core.cst$kw$input,cljs.core.cst$kw$path,cljs.core.cst$kw$amount,cljs.core.cst$kw$field_DASH_props,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$number,cljs.core.cst$kw$name,"amount"], null)], null);
return (field_props.cljs$core$IFn$_invoke$arity$1 ? field_props.cljs$core$IFn$_invoke$arity$1(G__12815) : field_props.call(null,G__12815));
})()], null)], null)], null)], null);
});
warehouse.pages.list.views.export$ = (function warehouse$pages$list$views$export(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$download,"warehouse_components.json",cljs.core.cst$kw$on_DASH_click,(function (e){
return e.currentTarget.href = cljs.core.deref((function (){var G__12816 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state_DASH_data_DASH_uri], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12816) : re_frame.core.subscribe.call(null,G__12816));
})());
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,"Export visible"], null)], null);
});
warehouse.pages.list.views.key__GT_label = (function warehouse$pages$list$views$key__GT_label(key){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"Name",cljs.core.cst$kw$tags,"Tags",cljs.core.cst$kw$amount,"Amount"], null),key);
});
warehouse.pages.list.views.key__GT_transformer = (function warehouse$pages$list$views$key__GT_transformer(key){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,cljs.core.cst$kw$tags)){
return (function (p1__12817_SHARP_){
return warehouse.util.array__GT_string(p1__12817_SHARP_);
});
} else {
return cljs.core.identity;
}
});
warehouse.pages.list.views.raw_property_view = (function warehouse$pages$list$views$raw_property_view(value,property){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$label,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(warehouse.pages.list.views.key__GT_label(property)),": "].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$value,(function (){var fexpr__12818 = warehouse.pages.list.views.key__GT_transformer(property);
return (fexpr__12818.cljs$core$IFn$_invoke$arity$1 ? fexpr__12818.cljs$core$IFn$_invoke$arity$1(value) : fexpr__12818.call(null,value));
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,property], null));
});
warehouse.pages.list.views.model__GT_view = (function warehouse$pages$list$views$model__GT_view(value){
if(cljs.core.set_QMARK_(value)){
return warehouse.util.array__GT_string(value);
} else {
return value;

}
});
warehouse.pages.list.views.raw_property_changeset_view = (function warehouse$pages$list$views$raw_property_changeset_view(values,property){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$label,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(warehouse.pages.list.views.key__GT_label(property)),": "].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$old,warehouse.pages.list.views.model__GT_view(cljs.core.first(values))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$new,warehouse.pages.list.views.model__GT_view(cljs.core.second(values))], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,property], null));
});
warehouse.pages.list.views.property_view = (function warehouse$pages$list$views$property_view(data,property){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$label,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(warehouse.pages.list.views.key__GT_label(property)),": "].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$value,(function (){var G__12820 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,property);
var fexpr__12819 = warehouse.pages.list.views.key__GT_transformer(property);
return (fexpr__12819.cljs$core$IFn$_invoke$arity$1 ? fexpr__12819.cljs$core$IFn$_invoke$arity$1(G__12820) : fexpr__12819.call(null,G__12820));
})()], null)], null);
});
warehouse.pages.list.views.item_view = (function warehouse$pages$list$views$item_view(data,editing){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,warehouse.pages.list.views.property_view(data,cljs.core.cst$kw$name),warehouse.pages.list.views.property_view(data,cljs.core.cst$kw$tags),warehouse.pages.list.views.property_view(data,cljs.core.cst$kw$amount),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (e){
cljs.core.reset_BANG_(editing,true);

return null;
})], null),"Edit"], null)], null);
});
warehouse.pages.list.views.item_edit_view = (function warehouse$pages$list$views$item_edit_view(data,editing,k){
var edited_item = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,cljs.core.cst$kw$tags,warehouse.util.array__GT_string(cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(data))));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [warehouse.form.form_fields,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,cljs.core.cst$kw$edit_DASH_component,cljs.core.cst$kw$initial_DASH_data,cljs.core.deref(edited_item)], null),warehouse.pages.list.views.form_fields], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$on_DASH_click,((function (edited_item){
return (function (e){
var G__12821_12823 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$item_DASH_save,k,cljs.core.deref((function (){var G__12822 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$imatic$re_DASH_frame$form$subs_SLASH_field_DASH_values,cljs.core.cst$kw$edit_DASH_component], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12822) : re_frame.core.subscribe.call(null,G__12822));
})())], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__12821_12823) : re_frame.core.dispatch.call(null,G__12821_12823));

cljs.core.reset_BANG_(editing,false);

return null;
});})(edited_item))
], null),"Save"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$on_DASH_click,((function (edited_item){
return (function (e){
cljs.core.reset_BANG_(editing,false);

return null;
});})(edited_item))
], null),"Cancel"], null)], null);
});
warehouse.pages.list.views.item = (function warehouse$pages$list$views$item(data,k){
var editing = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return ((function (editing){
return (function (data__$1,k__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,((cljs.core.deref(editing) === false)?warehouse.pages.list.views.item_view(data__$1,editing):warehouse.pages.list.views.item_edit_view(data__$1,editing,k__$1))], null);
});
;})(editing))
});
warehouse.pages.list.views.selected_components = (function warehouse$pages$list$views$selected_components(components){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"components-list"], null),(function (){var iter__4324__auto__ = (function warehouse$pages$list$views$selected_components_$_iter__12824(s__12825){
return (new cljs.core.LazySeq(null,(function (){
var s__12825__$1 = s__12825;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__12825__$1);
if(temp__5457__auto__){
var s__12825__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12825__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__12825__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__12827 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__12826 = (0);
while(true){
if((i__12826 < size__4323__auto__)){
var vec__12828 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__12826);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12828,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12828,(1),null);
cljs.core.chunk_append(b__12827,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"component"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [warehouse.pages.list.views.item,v,k], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(v)], null)));

var G__12835 = (i__12826 + (1));
i__12826 = G__12835;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12827),warehouse$pages$list$views$selected_components_$_iter__12824(cljs.core.chunk_rest(s__12825__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12827),null);
}
} else {
var vec__12831 = cljs.core.first(s__12825__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12831,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12831,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"component"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [warehouse.pages.list.views.item,v,k], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(v)], null)),warehouse$pages$list$views$selected_components_$_iter__12824(cljs.core.rest(s__12825__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(components);
})(),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$visibility,(cljs.core.truth_(cljs.core.deref((function (){var G__12834 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading_DASH_next_DASH_components], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12834) : re_frame.core.subscribe.call(null,G__12834));
})()))?"visible":"hidden")], null)], null),"Loading..."], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,"loading"], null))], null);
});
if((typeof warehouse !== 'undefined') && (typeof warehouse.pages !== 'undefined') && (typeof warehouse.pages.list !== 'undefined') && (typeof warehouse.pages.list.views !== 'undefined') && (typeof warehouse.pages.list.views.show_change_set !== 'undefined')){
} else {
warehouse.pages.list.views.show_change_set = (function (){var method_table__4414__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("warehouse.pages.list.views","show-change-set"),((function (method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__){
return (function (change_set){
return cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(change_set);
});})(method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__))
,cljs.core.cst$kw$default,hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
warehouse.pages.list.views.show_change_set.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$create,(function (p__12836,k){
var map__12837 = p__12836;
var map__12837__$1 = ((((!((map__12837 == null)))?(((((map__12837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12837.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12837):map__12837);
var change_set_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12837__$1,cljs.core.cst$kw$data);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$change_DASH_set,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (map__12837,map__12837__$1,change_set_data){
return (function (component,k__$1){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$component,(function (){var data = cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(component);
var metadata = cljs.core.cst$kw$metadata.cljs$core$IFn$_invoke$arity$1(component);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,["Name: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(metadata))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,"Data:",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (data,metadata,map__12837,map__12837__$1,change_set_data){
return (function (p__12839,kvs){
var vec__12840 = p__12839;
var k__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12840,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12840,(1),null);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k__$2,cljs.core.cst$kw$id))){
return warehouse.pages.list.views.raw_property_view(v,k__$2);
} else {
return null;
}
});})(data,metadata,map__12837,map__12837__$1,change_set_data))
,data)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (data,metadata,map__12837,map__12837__$1,change_set_data){
return (function (e){
var G__12843_12844 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$revert_DASH_change,cljs.core.cst$kw$create,metadata], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__12843_12844) : re_frame.core.dispatch.call(null,G__12843_12844));

return null;
});})(data,metadata,map__12837,map__12837__$1,change_set_data))
], null),"Revert"], null)], null);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,k__$1], null));
});})(map__12837,map__12837__$1,change_set_data))
,change_set_data,cljs.core.range.cljs$core$IFn$_invoke$arity$3(cljs.core.count(change_set_data),(0),(-1)))], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,k], null));
}));
warehouse.pages.list.views.show_change_set.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$update,(function (p__12845,k){
var map__12846 = p__12845;
var map__12846__$1 = ((((!((map__12846 == null)))?(((((map__12846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12846.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12846):map__12846);
var change_set_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12846__$1,cljs.core.cst$kw$data);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$change_DASH_set,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (map__12846,map__12846__$1,change_set_data){
return (function (component,k__$1){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$component,(function (){var data = cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(component);
var metadata = cljs.core.cst$kw$metadata.cljs$core$IFn$_invoke$arity$1(component);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,["Name: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(metadata))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,"Data:",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (data,metadata,map__12846,map__12846__$1,change_set_data){
return (function (p__12848,kvs){
var vec__12849 = p__12848;
var k__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12849,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12849,(1),null);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k__$2,cljs.core.cst$kw$id))){
return warehouse.pages.list.views.raw_property_changeset_view(v,k__$2);
} else {
return null;
}
});})(data,metadata,map__12846,map__12846__$1,change_set_data))
,data)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (data,metadata,map__12846,map__12846__$1,change_set_data){
return (function (e){
var G__12852_12853 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$revert_DASH_change,cljs.core.cst$kw$update,metadata,data], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__12852_12853) : re_frame.core.dispatch.call(null,G__12852_12853));

return null;
});})(data,metadata,map__12846,map__12846__$1,change_set_data))
], null),"Revert"], null)], null);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,k__$1], null));
});})(map__12846,map__12846__$1,change_set_data))
,change_set_data,cljs.core.range.cljs$core$IFn$_invoke$arity$3(cljs.core.count(change_set_data),(0),(-1)))], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,k], null));
}));
warehouse.pages.list.views.component_list = (function warehouse$pages$list$views$component_list(){
var adding = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var showing_changeset = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var new_item_initial_data = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"",cljs.core.cst$kw$tags,"",cljs.core.cst$kw$amount,(1)], null);
var new_item = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new_item_initial_data);
var visible_components = (function (){var G__12855 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scroll_DASH_visible_DASH_components], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12855) : re_frame.core.subscribe.call(null,G__12855));
})();
var change_sets = (function (){var G__12856 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$change_DASH_sets], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12856) : re_frame.core.subscribe.call(null,G__12856));
})();
var import_form_data = (function (){var G__12857 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$import_DASH_form], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12857) : re_frame.core.subscribe.call(null,G__12857));
})();
return ((function (adding,showing_changeset,new_item_initial_data,new_item,visible_components,change_sets,import_form_data){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [warehouse.search.views.search], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [warehouse.pages.list.views.export$], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [warehouse.component_import.views.import_button], null),((cljs.core.deref(adding) === false)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (adding,showing_changeset,new_item_initial_data,new_item,visible_components,change_sets,import_form_data){
return (function (e){
cljs.core.reset_BANG_(adding,true);

return null;
});})(adding,showing_changeset,new_item_initial_data,new_item,visible_components,change_sets,import_form_data))
], null),"Add new"], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (adding,showing_changeset,new_item_initial_data,new_item,visible_components,change_sets,import_form_data){
return (function (e){
cljs.core.reset_BANG_(showing_changeset,((cljs.core.deref(showing_changeset) === true)?false:true));

return null;
});})(adding,showing_changeset,new_item_initial_data,new_item,visible_components,change_sets,import_form_data))
], null),((cljs.core.deref(showing_changeset) === true)?"Hide changes":"Show changes")], null),(cljs.core.truth_(cljs.core.not_empty(cljs.core.deref(import_form_data)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [warehouse.component_import.views.import_form,cljs.core.deref(import_form_data)], null):null),((cljs.core.deref(adding) === true)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [warehouse.form.form_fields,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,cljs.core.cst$kw$new_DASH_component,cljs.core.cst$kw$initial_DASH_data,new_item_initial_data], null),warehouse.pages.list.views.form_fields], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$on_DASH_click,((function (adding,showing_changeset,new_item_initial_data,new_item,visible_components,change_sets,import_form_data){
return (function (e){
var G__12858_12860 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$item_DASH_create,cljs.core.deref((function (){var G__12859 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$imatic$re_DASH_frame$form$subs_SLASH_field_DASH_values,cljs.core.cst$kw$new_DASH_component], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12859) : re_frame.core.subscribe.call(null,G__12859));
})())], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__12858_12860) : re_frame.core.dispatch.call(null,G__12858_12860));

cljs.core.reset_BANG_(new_item,new_item_initial_data);

cljs.core.reset_BANG_(adding,false);

return null;
});})(adding,showing_changeset,new_item_initial_data,new_item,visible_components,change_sets,import_form_data))
], null),"Save"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$on_DASH_click,((function (adding,showing_changeset,new_item_initial_data,new_item,visible_components,change_sets,import_form_data){
return (function (e){
cljs.core.reset_BANG_(adding,false);

return null;
});})(adding,showing_changeset,new_item_initial_data,new_item,visible_components,change_sets,import_form_data))
], null),"Cancel"], null)], null):null),((cljs.core.deref(showing_changeset) === true)?(function (){var cs = cljs.core.deref(change_sets);
var k1 = cljs.core.range.cljs$core$IFn$_invoke$arity$3(cljs.core.count(cs),(0),(-1));
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (cs,k1,adding,showing_changeset,new_item_initial_data,new_item,visible_components,change_sets,import_form_data){
return (function (change_set_col,k2){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(warehouse.pages.list.views.show_change_set,change_set_col,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cs,k1,adding,showing_changeset,new_item_initial_data,new_item,visible_components,change_sets,import_form_data){
return (function (p1__12854_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(k2),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__12854_SHARP_)].join('');
});})(cs,k1,adding,showing_changeset,new_item_initial_data,new_item,visible_components,change_sets,import_form_data))
,cljs.core.range.cljs$core$IFn$_invoke$arity$3(cljs.core.count(change_set_col),(0),(-1))));
});})(cs,k1,adding,showing_changeset,new_item_initial_data,new_item,visible_components,change_sets,import_form_data))
,cs,k1);
})():null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [warehouse.pages.list.views.selected_components,cljs.core.deref(visible_components)], null)], null);
});
;})(adding,showing_changeset,new_item_initial_data,new_item,visible_components,change_sets,import_form_data))
});
