sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("gy.com.GopalYarlagadda.controller.App", {
		onInit: function() {
			this._showFormFragment("Home");
		},
		
		onExit : function () {
			for(var sPropertyName in this._formFragments) {
				if(!this._formFragments.hasOwnProperty(sPropertyName)) {
					return;
				}
		
				this._formFragments[sPropertyName].destroy();
				this._formFragments[sPropertyName] = null;
			}
		},
		_formFragments: {},
		_getFormFragment: function (sFragmentName) {
			var oFormFragment = this._formFragments[sFragmentName];
		
			if (oFormFragment) {
				return oFormFragment;
			}
		
			//oFormFragment = sap.ui.xmlfragment(this.getView().getId(), "gy.com.GopalYarlagadda.view." + sFragmentName);
			oFormFragment = sap.ui.xmlfragment(this.getView().getId(), "{i18n>viewNameSpace}" + sFragmentName);
		
			var myFragment = (this._formFragments[sFragmentName] = oFormFragment);
			return myFragment;
		},
		
		_showFormFragment : function (sFragmentName) {
			var oPage = this.getView().byId("idAppControl");
			
			oPage.removeAllContent();
			var oFrag = this._getFormFragment(sFragmentName);
			oPage.addContent(oFrag);
			//oFrag.placeAt("content");
		},
		
		onPressHome: function(oEvent){
			this._showFormFragment("Home");			
		},
		
		onPressProjectExp: function(oEvent){
			this._showFormFragment("ProjectExp");
		},
		onPressBack: function(){
			var oHist, sPrevHash, oRouter;
			oHist = sap.ui.core.routing.History.getInstance();
			sPrevHash = oHist.getPreviousHash();
			if(sPrevHash !== undefined){
				window.history.go(-1);
			}else{
				oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("App", true);
			}
		}
	});
});