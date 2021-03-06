sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"com/sap/build/standard/untitledPrototype/model/models",
	"./model/errorHandling"
], function(UIComponent, Device, models, errorHandling) {
	"use strict";

	var navigationWithContext = {
		"estudiantesSet": {
			"Page2": "",
			"Page3": "",
			"Page4": "",
			"Page5": "",
			"Page10": ""
		},
		"AparatosSet": {
			"Page6": "",
			"Page7": ""
		},
		"HistorialSet": {
			"Page6": "Prestamo",
			"Page7": "Prestamo",
			"Page9": ""
		}
	};

	return UIComponent.extend("com.sap.build.standard.untitledPrototype.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// set the device model
			this.setModel(models.createDeviceModel(), "device");
			// set the FLP model
			this.setModel(models.createFLPModel(), "FLP");

			// set the dataSource model
			this.setModel(new sap.ui.model.json.JSONModel({
				"uri": "/sap/opu/odata/sap/SEPMRA_PROD_MAN/"
			}), "dataSource");

			// set application model
			var oApplicationModel = new sap.ui.model.json.JSONModel({});
			this.setModel(oApplicationModel, "applicationModel");

			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// delegate error handling
			errorHandling.register(this);

			// create the views based on the url/hash
			this.getRouter().initialize();
		},

		createContent: function() {
			var app = new sap.m.App({
				id: "App"
			});
			var appType = "App";
			var appBackgroundColor = "#FFFFFF";
			if (appType === "App" && appBackgroundColor) {
				app.setBackgroundColor(appBackgroundColor);
			}

			return app;
		},

		getNavigationPropertyForNavigationWithContext: function(sEntityNameSet, targetPageName) {
			var entityNavigations = navigationWithContext[sEntityNameSet];
			return entityNavigations == null ? null : entityNavigations[targetPageName];
		}

	});

});
