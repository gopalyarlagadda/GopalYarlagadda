sap.ui.define([
	"sap/ui/core/mvc/Controller",
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
		
			oFormFragment = sap.ui.xmlfragment(this.getView().getId(), "gy.com.GopalYarlagadda.view.fragment." + sFragmentName);
		
			var myFragment = (this._formFragments[sFragmentName] = oFormFragment);
			return myFragment;
		},
		
		_showFormFragment : function (sFragmentName) {
			var oPage = this.getView().byId("idAppControl");
			
			oPage.removeAllContent();
			var oFrag = this._getFormFragment(sFragmentName);
			oPage.addContent(oFrag);
		},
		
		onPressHome: function(oEvent){
			//Highlight the selected button
			var homeBtn = oEvent.getSource();
			homeBtn.addStyleClass("headerBtnSelected");
			
			this._showFormFragment("Home");
		},
		
		onPressContact: function(oEvent){
			var projExpBtn = oEvent.getSource();
			projExpBtn.addStyleClass("headerBtnSelected");
			this._showFormFragment("Contact");
		},
		
		onPressRte: function(){
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("RichTextEditor", true);
		},
		
		onPressProjectExp: function(oEvent){
			//Highlight the selected button
			var projExpBtn = oEvent.getSource();
			projExpBtn.addStyleClass("headerBtnSelected");
			this._showFormFragment("ProjectExp");
		},
		onPressSkills: function(oEvent){
			var projExpBtn = oEvent.getSource();
			projExpBtn.addStyleClass("headerBtnSelected");
			this._showFormFragment("Skills");			
		},
		onPressSubmit: function(oEvent){
			var submBtn = oEvent.getSource();
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