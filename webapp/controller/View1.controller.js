sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, JSONModel) {
		"use strict";

		return Controller.extend("com.Hexaware.simpleform1.controller.View1", {
			onInit: function () {
				var oModel = new JSONModel(sap.ui.require.toUrl("sap/ui/demo/mock/supplier.json"));
				this.getView().setModel(oModel);
			    this.getView().bindElement("/SupplierCollection/0");

			}
		});
	});
