/* Do not edit this file to avoid losing your changes when upgrade the theme */
$.extend(!0,BT,{initProductTabs:function(t,i){var e,a=this;t.hasClass("has-available-data")&&("string"==typeof t?(e=t+" .tab-pane:first",t=$(t)):e=t.find(".tab-pane:first"),this.convertCurrencySilence(t.find("span.money")),this.initScrollingWindowTriggerOnce(t,"product-tabs_deal_slider_"+i,-170,function(){a.initDealCountdown(t),a.initSlider(e,!1,!1)}));this.initInfiniteScroll(t),0<t.find(this.selectors.waitingTabData).length&&a.initScrollingWindowTriggerOnce(t,"product-tabs_ajax_"+i,-450,function(){BT.renderSectionByAjaxApi(i,{},function(e){t.find(a.selectors.waitingTabData).each(function(){var t=$(this).parent();$(this).remove(),t.html("");var i=$("#"+t.attr("id"),e).parent()[0].outerHTML;a.afterLoadDynamicProductsAjaxInTab(t,i),BT.initSlider(t.parent(),!1,!1)}),BT.addProductMetaData(t,!0)})}),t.find('a[data-toggle="tab"]').on("shown.bs.tab",function(t){var i=$($(t.target).attr("href"));0<i.find(a.selectors.infiniteScroll.wait).length&&(i.find(a.selectors.infiniteScroll.wait).removeClass(a.selectors.infiniteScroll.wait.replace(".","")).addClass(a.selectors.infiniteScroll.button.replace(".","")),a.initInfiniteScroll(i)),Shopify.designMode&&(i.hasClass("opened")&&(BT.destroyDealCountdown(i),BT.destroySlider(i)),BT.initDealCountdown(i),BT.initSlider(i,!1,!1),i.addClass("opened"))})},unLoadProductTabs:function(t){var i=t.attr("data-section-id");this.destroyInfiniteScroll(t.attr("data-section-id")),this.destroyScrollingWindowTriggerOnce("product-tabs_ajax_"+i),this.destroyScrollingWindowTriggerOnce("product-tabs_deal_slider_"+i),this.destroyDealCountdown(t)}}),theme.productTabs={},theme.ProductTabsSection=function(t){this.wrap=$(t);var i=this.wrap.attr("data-section-id");BT.initProductTabs(this.wrap,i),BT.applyCustomColorSwatches(this.wrap)},theme.ProductTabsSection.prototype=_.assignIn({},theme.ProductTabsSection.prototype,{onBlockSelect:function(t){var i=$(t.target);i.hasClass("active")||$('a[href="#'+i.attr("id")+'"]').trigger("click");if(!BT.isInViewport(this.wrap,t.currentTarget.defaultView)){var e=this.wrap.offset().top-100;$("html, body").animate({scrollTop:e},400)}},onUnload:function(){BT.unLoadProductTabs(this.wrap),delete this.wrap}}),theme.sections.constructors["product-tabs"]=theme.ProductTabsSection;