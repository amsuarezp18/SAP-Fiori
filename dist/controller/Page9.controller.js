sap.ui.define(["sap/ui/core/mvc/Controller","sap/m/MessageBox","./utilities","sap/ui/core/routing/History"],function(t,e,n,o){"use strict";return t.extend("com.sap.build.standard.untitledPrototype.controller.Page9",{handleRouteMatched:function(t){var e="App60a5ae41f6baa2192b2067f0";var n={};if(t.mParameters.data.context){this.sContext=t.mParameters.data.context}else{if(this.getOwnerComponent().getComponentData()){var o=function(t){if(Object.keys(t).length!==0){for(var e in t){if(e!=="sourcePrototype"&&e.includes("Set")){return e+"("+t[e][0]+")"}}}};this.sContext=o(this.getOwnerComponent().getComponentData().startupParameters)}}if(!this.sContext){this.sContext="HistorialSet('H1')"}var i;if(this.sContext){i={path:"/"+this.sContext,parameters:n};this.getView().bindObject(i)}},_onButtonPress:function(t){var n=t.getSource().getBindingContext();return new Promise(function(t){this.doNavigate("Page5",n,t,"")}.bind(this)).catch(function(t){if(t!==undefined){e.error(t.message)}})},doNavigate:function(t,e,n,o){var i=e?e.getPath():null;var s=e?e.getModel():null;var r;if(i!==null&&i!==""){if(i.substring(0,1)==="/"){i=i.substring(1)}r=i.split("(")[0]}var a;var u=this.sMasterContext?this.sMasterContext:i;if(r!==null){a=o||this.getOwnerComponent().getNavigationPropertyForNavigationWithContext(r,t)}if(a!==null&&a!==undefined){if(a===""){this.oRouter.navTo(t,{context:i,masterContext:u},false)}else{s.createBindingContext(a,e,null,function(e){if(e){i=e.getPath();if(i.substring(0,1)==="/"){i=i.substring(1)}}else{i="undefined"}if(i==="undefined"){this.oRouter.navTo(t)}else{this.oRouter.navTo(t,{context:i,masterContext:u},false)}}.bind(this))}}else{this.oRouter.navTo(t)}if(typeof n==="function"){n()}},onInit:function(){this.oRouter=sap.ui.core.UIComponent.getRouterFor(this);this.oRouter.getTarget("Page9").attachDisplay(jQuery.proxy(this.handleRouteMatched,this))},onExit:function(){var t=[{controlId:"sap_Responsive_Page_0-content-sap_m_VBox-1621543017792-items-build_simple_Table-2",groups:["items"]}];for(var e=0;e<t.length;e++){var n=this.getView().byId(t[e].controlId);if(n){for(var o=0;o<t[e].groups.length;o++){var i=t[e].groups[o];var s=n.getBindingInfo(i);if(s){var r=s.template;r.destroy()}}}}}})},true);