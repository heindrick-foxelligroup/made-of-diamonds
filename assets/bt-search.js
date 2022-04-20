/* Do not edit this file to avoid losing your changes when upgrade the theme */
var BTSearch={selectors:{filterLink:".cf__link",items:".search__items",itemsInner:".products",modeLink:".ct__mode__link",pagination:".pagination",scrollBtn:".collection__scroll",grid:".grid",item:".grid__item"},options:{clickEvent:"click",ajaxView:"ajax"},data:{},ignoreViewParam:function(t){return""!=t&&(t=t.replace(/\?view=ajax\"/g,'"').replace(/\?view=ajax\&/g,"?").replace(/\&view=ajax/g,"")),t},updateHtml:function(t){var e=this.selectors;$(e.items+" "+e.grid).html($(e.items+" "+e.grid,t).html()),BtCurrency.convertSilence(shopCurrency,BtCurrency.currentCurrency,$(e.items).find("span.money")),BT.applyCustomColorSwatches(e.items+" "+e.grid),BT.reLoadReview(e.grid),0<$(e.pagination).length&&$(e.pagination).html($(e.pagination,t).html())},initAjaxLinkEvent:function(){var n=this;$(document).on(this.options.clickEvent,this.selectors.filterLink,function(t){t.preventDefault(),BT.showLoadingFull();var i=$(this).attr("href");BT.callAjax(i,"GET",{view:n.options.ajaxView},null,function(t){n.updateHtml(t),BT.hideLoadingFull();try{var e=window.location.protocol+"//"+window.location.host+n.ignoreViewParam(i);window.history.replaceState({path:e},"",e)}catch(t){console.log(t)}})})},initViewModeEvent:function(){var a=this;$(document).on(this.options.clickEvent,this.selectors.modeLink,function(t){if(t.preventDefault(),!$(this).hasClass("active")){var e;if($(this).parent().hasClass("ct__mode__grid-mobile")){e=$(".ct__mode__grid-list");var i=$(this).attr("data-mode");$('.ct__mode__grid-desktop [data-mode="'+i+'"]').parent().addClass("active")}else e=$(this).parent().siblings(".active:not(.ct__mode__grid-mobile)"),$(this).parent().hasClass("ct__mode__grid-desktop")?$(".ct__mode__grid-mobile").addClass("active").children().attr("data-mode",$(this).attr("data-mode")):$(".ct__mode__grid-mobile").removeClass("active");var n=e.children(a.selectors.modeLink).attr("data-mode");e.removeClass("active"),$(this).parent().addClass("active"),$(a.selectors.items).find(a.selectors.grid).removeClass(n).addClass($(this).attr("data-mode"))}})},destroyInfiniteScroll:function(){BT.destroyInfiniteScroll("collection-template")},initInfiniteScrollSearch:function(t){this.destroyInfiniteScroll(),BT.initInfiniteScroll(t)},init:function(){this.initAjaxLinkEvent(),this.initViewModeEvent()}};theme.SearchTemplateSection=function(t){var e=this.$container=$(t);BtCurrency.convertSilence(shopCurrency,BtCurrency.currentCurrency,e.find("span.money")),BT.applyCustomColorSwatches(e),BTSearch.initInfiniteScrollSearch(e)},theme.SearchTemplateSection.prototype=_.assignIn({},theme.SearchTemplateSection.prototype,{onUnload:function(){BTSearch.destroyInfinityScroll()}}),BTSearch.init(),theme.sections.constructors["search-template"]=theme.SearchTemplateSection;