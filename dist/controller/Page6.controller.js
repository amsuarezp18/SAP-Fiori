sap.ui.define(["sap/ui/core/mvc/Controller","sap/m/MessageBox","./utilities","sap/ui/core/routing/History"],function(e,t,n,i){"use strict";return e.extend("com.sap.build.standard.untitledPrototype.controller.Page6",{handleRouteMatched:function(e){var t="App60a5ae41f6baa2192b2067f0";var n={};if(e.mParameters.data.context){this.sContext=e.mParameters.data.context}else{if(this.getOwnerComponent().getComponentData()){var i=function(e){if(Object.keys(e).length!==0){for(var t in e){if(t!=="sourcePrototype"&&t.includes("Set")){return t+"("+e[t][0]+")"}}}};this.sContext=i(this.getOwnerComponent().getComponentData().startupParameters)}}if(!this.sContext){this.sContext="AparatosSet('1AP')"}var o;if(this.sContext){o={path:"/"+this.sContext,parameters:n};this.getView().bindObject(o)}},_onButtonPress:function(e){e=jQuery.extend(true,{},e);return new Promise(function(e){e(true)}).then(function(t){var n=e.getSource().getBindingContext();return new Promise(function(e){this.doNavigate("Page7",n,e,"")}.bind(this))}.bind(this)).then(function(e){if(e===false){return false}else{var t=this.getView(),n=this,i=true,o=[];if(o.length){i=this.handleChangeValuestate(o,t)}if(i){return new Promise(function(e,i){var o=n.oModel;var s=function(e){o.resetChanges();i(new Error(e))};if(o&&o.hasPendingChanges()){o.submitChanges({success:function(i){var r=i.__batchResponses[0];var a=r.__changeResponses&&r.__changeResponses[0];if(a&&a.data){var u=o.getKey(a.data);t.unbindObject();t.bindObject({path:"/"+u});if(window.history&&window.history.replaceState){window.history.replaceState(undefined,undefined,window.location.hash.replace(encodeURIComponent(n.sContext),encodeURIComponent(u)))}o.refresh();e()}else if(a&&a.response){s(a.message)}else if(!a&&r.response){s(r.message)}else{o.refresh();e()}},error:function(e){i(new Error(e.message))}})}else{e()}})}}}.bind(this)).catch(function(e){if(e!==undefined){t.error(e.message)}})},doNavigate:function(e,t,n,i){var o=t?t.getPath():null;var s=t?t.getModel():null;var r;if(o!==null&&o!==""){if(o.substring(0,1)==="/"){o=o.substring(1)}r=o.split("(")[0]}var a;var u=this.sMasterContext?this.sMasterContext:o;if(r!==null){a=i||this.getOwnerComponent().getNavigationPropertyForNavigationWithContext(r,e)}if(a!==null&&a!==undefined){if(a===""){this.oRouter.navTo(e,{context:o,masterContext:u},false)}else{s.createBindingContext(a,t,null,function(t){if(t){o=t.getPath();if(o.substring(0,1)==="/"){o=o.substring(1)}}else{o="undefined"}if(o==="undefined"){this.oRouter.navTo(e)}else{this.oRouter.navTo(e,{context:o,masterContext:u},false)}}.bind(this))}}else{this.oRouter.navTo(e)}if(typeof n==="function"){n()}},handleChangeValuestate:function(e,t){var n=true;if(e){e.forEach(function(e){var i=t.byId(e.id);if(i){i.setValueState("None");if(i.getValue()===""){i.setValueState("Error");n=false}else if(i.getDateValue&&!i._bValid){i.setValueState("Error");n=false}}})}return n},_onButtonPress1:function(e){var n=e.getSource().getBindingContext();return new Promise(function(e){this.doNavigate("Page5",n,e,"")}.bind(this)).catch(function(e){if(e!==undefined){t.error(e.message)}})},onInit:function(){this.oRouter=sap.ui.core.UIComponent.getRouterFor(this);this.oRouter.getTarget("Page6").attachDisplay(jQuery.proxy(this.handleRouteMatched,this));this.oModel=this.getOwnerComponent().getModel()},onExit:function(){var e=[{controlId:"sap_Responsive_Page_0-content-sap_m_VBox-1621476887110-items-build_simple_Table-1621538300218",groups:["items"]}];for(var t=0;t<e.length;t++){var n=this.getView().byId(e[t].controlId);if(n){for(var i=0;i<e[t].groups.length;i++){var o=e[t].groups[i];var s=n.getBindingInfo(o);if(s){var r=s.template;r.destroy()}}}}}})},true);