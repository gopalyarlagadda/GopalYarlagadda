jQuery.sap.registerPreloadedModules({version:"2.0",name:"gy/com/GopalYarlagadda/Component-preload",modules:{"gy/com/GopalYarlagadda/Component.js":'sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","gy/com/GopalYarlagadda/model/models"],function(e,t,i){"use strict";return e.extend("gy.com.GopalYarlagadda.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments),this.getRouter().initialize(),this.setModel(i.createDeviceModel(),"device")}})});',"gy/com/GopalYarlagadda/controller/App.controller.js":'sap.ui.define(["sap/ui/core/mvc/Controller"],function(t){"use strict";return t.extend("gy.com.GopalYarlagadda.controller.App",{onInit:function(){this._showFormFragment("Home")},onExit:function(){for(var t in this._formFragments){if(!this._formFragments.hasOwnProperty(t))return;this._formFragments[t].destroy(),this._formFragments[t]=null}},_formFragments:{},_getFormFragment:function(t){var e=this._formFragments[t];return e||(e=sap.ui.xmlfragment(this.getView().getId(),"gy.com.GopalYarlagadda.view.fragment."+t),this._formFragments[t]=e)},_showFormFragment:function(t){var e=this.getView().byId("idAppControl");e.removeAllContent();var o=this._getFormFragment(t);e.addContent(o)},onPressHome:function(t){t.getSource().addStyleClass("headerBtnSelected"),this._showFormFragment("Home")},onPressContact:function(t){t.getSource().addStyleClass("headerBtnSelected"),this._showFormFragment("Contact")},onPressProjectExp:function(t){t.getSource().addStyleClass("headerBtnSelected"),this._showFormFragment("ProjectExp")},onPressSkills:function(t){t.getSource().addStyleClass("headerBtnSelected"),this._showFormFragment("Skills")},onPressSubmit:function(t){t.getSource()},onPressBack:function(){var t,e,o;t=sap.ui.core.routing.History.getInstance(),e=t.getPreviousHash(),void 0!==e?window.history.go(-1):(o=sap.ui.core.UIComponent.getRouterFor(this),o.navTo("App",!0))}})});',"gy/com/GopalYarlagadda/model/models.js":'sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel:function(){var i=new e(n);return i.setDefaultBindingMode("OneWay"),i}}});',"gy/com/GopalYarlagadda/util/HeaderUtil.js":'sap.ui.define([],function(){"use strict";return{updateHeaderButtonStyling:function(t){}}});',"gy/com/GopalYarlagadda/view/fragment/Contact.fragment.xml":'<core:FragmentDefinition\n\txmlns="sap.m"\n\txmlns:l="sap.ui.layout"\n\txmlns:f="sap.ui.layout.form"\n\txmlns:r="sap.ui.richtexteditor"\n\txmlns:core="sap.ui.core"><VBox class="sapUiSmallMargin"><f:Form id="contactForm"\n\t\t\teditable="true"><f:layout><f:ResponsiveGridLayout\n\t\t\t\t\tlabelSpanXL="3"\n\t\t\t\t\tlabelSpanL="3"\n\t\t\t\t\tlabelSpanM="3"\n\t\t\t\t\tlabelSpanS="12"\n\t\t\t\t\tadjustLabelSpan="false"\n\t\t\t\t\temptySpanXL="4"\n\t\t\t\t\temptySpanL="4"\n\t\t\t\t\temptySpanM="4"\n\t\t\t\t\temptySpanS="0"\n\t\t\t\t\tcolumnsXL="1"\n\t\t\t\t\tcolumnsL="1"\n\t\t\t\t\tcolumnsM="1"\n\t\t\t\t\tsingleContainerFullSize="false" /></f:layout><f:formContainers><f:FormContainer><f:title><core:Title text="Say Hello!"/></f:title><f:formElements><f:FormElement label="{i18n>nameLblTxt}"><f:fields><Input value="" id="name"/></f:fields></f:FormElement><f:FormElement label="{i18n>messageLblTxt}"><f:fields><r:RichTextEditor\tid="richEdit" \n\t\t\t\t\t\t\t\t\t\t\t\teditorType="TinyMCE4"  \n\t\t\t\t\t\t\t\t\t\t\t\twidth= "100%" \n\t\t\t\t\t\t\t\t\t\t\t\theight="500px"\n\t\t\t\t\t\t\t\t\t\t\t\tcustomToolbar= "true" \n\t\t\t\t\t\t\t\t\t\t\t\tshowGroupFont= "true"\t\n\t\t\t\t\t\t\t\t\t\t\t\tshowGroupLink= "true" \n\t\t\t\t\t\t\t\t\t\t\t\tshowGroupInsert= "true"\n\t\t\t\t\t\t\t\t\t\t\t\tplugins= "{[\'table\',\'media\']}"/></f:fields></f:FormElement><f:FormElement label="{i18n>emailLblTxt}"><f:fields><Input value="" id="email" required="true"><layoutData><l:GridData span="XL2 L3 M2 S4" /></layoutData></Input></f:fields></f:FormElement><f:FormElement label="{i18n>telLblTxt}"><f:fields><Input value=""><layoutData><l:GridData span="XL2 L3 M2 S4" /></layoutData></Input></f:fields></f:FormElement><f:FormElement label="{i18n>countryLblTxt}"><f:fields><Select id="country" selectedKey="EN"><items><core:Item text="{i18n>countryEngItem}" key="EN"/><core:Item text="{i18n>countrySctItem}" key="SC"/><core:Item text="{i18n>countryNIItem}" key="NI"/></items><layoutData><l:GridData span="XL2 L3 M2 S4" /></layoutData></Select></f:fields></f:FormElement></f:formElements></f:FormContainer></f:formContainers></f:Form><Button id="submitBtn" text="{i18n>submitText}" type="Emphasized" class="sapUI submitButtonContactForm" press="onPressSubmit"/><core:Fragment fragmentName="gy.com.GopalYarlagadda.view.fragment.SocialLinks" type="XML"/></VBox></core:FragmentDefinition>',"gy/com/GopalYarlagadda/view/fragment/Header.fragment.xml":'<core:FragmentDefinition\r\n   xmlns="sap.m"\r\n   xmlns:l="sap.ui.layout"\r\n   xmlns:core="sap.ui.core"><OverflowToolbar id="otb1"><ToolbarSpacer/><Button id="homeBtn" text="{i18n>homeText}" type="Transparent" class="OtbMenuButton Home headerBtnSelected" press="onPressHome"/><Button id="projExpBtn" text="{i18n>projExpText}" type="Transparent" class="OtbMenuButton ProjectExp" press="onPressProjectExp"/><Button id="skillsBtn" text="{i18n>skillsText}" type="Transparent" class="OtbMenuButton Skills"  press="onPressSkills"/><Button id="contactBtn" text="{i18n>contactText}" type="Transparent" class="OtbMenuButton Contact" press="onPressContact"/><ToolbarSpacer/></OverflowToolbar></core:FragmentDefinition>',"gy/com/GopalYarlagadda/view/fragment/Home.fragment.xml":'<core:FragmentDefinition\r\n   xmlns="sap.m"\r\n   xmlns:l="sap.ui.layout"\r\n   xmlns:core="sap.ui.core"><l:Grid \r\n\t\tbinding="{/Portfolio}"\r\n\t\thSpacing="0.5"\r\n\t\tdefaultSpan="L2 M6 S10"\r\n\t\tclass="sapUiSmallMargin ProjExpPage"><l:content><VBox class="column"><layoutData><l:GridData\r\n\t\t\t\t\t\tspan="L8 M8 S8"/></layoutData><Panel class="homeContentPanelTitle" headerText="{i18n>gyTitle}"><Image\r\n\t\t\t\t\t\tsrc="images/gy.jpg"\r\n\t\t\t\t\t\tdensityAware="false"\r\n\t\t\t\t\t\tclass="gyImage"><layoutData><FlexItemData growFactor="1" /></layoutData></Image><content><Text text="{i18n>homePageText}" class="homePageText"/></content></Panel></VBox></l:content></l:Grid></core:FragmentDefinition>',"gy/com/GopalYarlagadda/view/fragment/News.fragment.xml":'<core:FragmentDefinition\r\n   xmlns="sap.m"\r\n   xmlns:l="sap.ui.layout"\r\n   xmlns:core="sap.ui.core"><core:HTML content="&lt;div class=&quot;feedgrabbr_widget&quot; id=&quot;fgid_d21f5256621a18ecf4d2f9e36&quot;&gt;&lt;/div&gt;"/></core:FragmentDefinition>',"gy/com/GopalYarlagadda/view/fragment/ProjectExp.fragment.xml":'<core:FragmentDefinition\r\n   xmlns="sap.m"\r\n   xmlns:l="sap.ui.layout"\r\n   xmlns:core="sap.ui.core"><l:Grid \r\n\t\tbinding="{/portfolio}"\r\n\t\thSpacing="0.5"\r\n\t\tdefaultSpan="L2 M6 S10"\r\n\t\tclass="sapUiSmallMargin ProjExpPage"><l:content><VBox class="column"><layoutData><l:GridData\r\n\t\t\t\t\t\tspan="L8 M8 S8"/></layoutData><Panel headerText="Implementations"\r\n\t\t\t\t\t   width="100%"><Text text="Metropolitan Police services" class="projExpTitle nameTitle"/><Text text="SAP Portal Consultant" class="projExpDescription"/></Panel></VBox></l:content></l:Grid></core:FragmentDefinition>',"gy/com/GopalYarlagadda/view/fragment/SocialLinks.fragment.xml":'<core:FragmentDefinition\r\n   xmlns="sap.m"\r\n   xmlns:l="sap.ui.layout"\r\n   xmlns:core="sap.ui.core"><core:HTML content="&lt;div id=&quot;social&quot; class=&quot;social&quot;&gt;\r\n\t&lt;a class=&quot;link dribbble&quot; target=&quot;_blank data-tooltip=&quot;Follow me on Dribbble&quot; href=&quot;http://www.dribbble.com/gopalyarlagadda&quot;&gt;Dribbble&lt;/a&gt;\r\n\t&lt;a class=&quot;link twitter&quot; target=&quot;_blank data-tooltip=&quot;Follow me on Twitter&quot; href=&quot;https://twitter.com/gopalyarlagadda&quot;&gt;Twitter&lt;/a&gt;\r\n\t&lt;a class=&quot;link linkedin&quot; target=&quot;_blank data-tooltip=&quot;Follow me on Linkedin&quot; href=&quot;https://linkedin.com/in/gopal-yarlagadda-58396945&quot;&gt;Linkedin&lt;/a&gt;\r\n\t&lt;a class=&quot;link email&quot; target=&quot;_blank data-tooltip=&quot;Contact me via email&quot; href=&quot;mailto:mailyarlagadda@gmail.com&quot;&gt;Email&lt;/a&gt;\r\n&lt;/div&gt;"/></core:FragmentDefinition>',"gy/com/GopalYarlagadda/view/fragment/Weather.fragment.xml":'<core:FragmentDefinition\r\n   xmlns="sap.m"\r\n   xmlns:l="sap.ui.layout"\r\n   xmlns:core="sap.ui.core"><core:HTML content="&lt;a class=&quot;weatherwidget-io&quot; href=&quot;https://forecast7.com/en/51d51n0d13/london/&quot; data-label_1=&quot;LONDON&quot; data-label_2=&quot;WEATHER&quot; data-font=&quot;Arial&quot; data-icons=&quot;Climacons Animated&quot; data-days=&quot;3&quot; data-theme=&quot;pure&quot; &gt;LONDON WEATHER&lt;/a&gt;"/></core:FragmentDefinition>',"gy/com/GopalYarlagadda/view/App.view.xml":'<mvc:View \n\tcontrollerName="gy.com.GopalYarlagadda.controller.App" \n\txmlns:html="http://www.w3.org/1999/xhtml"\n\txmlns:mvc="sap.ui.core.mvc"\n\txmlns:core="sap.ui.core"\n\tdisplayBlock="true" \n\txmlns="sap.m"><App><pages><Page id="idAppControl"><content></content><headerContent><core:Fragment id="headerWidget" fragmentName="gy.com.GopalYarlagadda.view.fragment.Header" type="XML" /></headerContent></Page></pages></App></mvc:View>',"gy/com/GopalYarlagadda/i18n/i18n.properties":"title=Title\nappTitle=Gopal Y.\nappDescription=App Description\nhomeText=HOME\nprojExpText=PROJECTS\ncontactText=CONTACT\naboutText=ABOUT\nskillsText=SKILLS\neducationText=EDUCATION\ngyTitle=Gopal Yarlagadda\ngyIntro= \nhomePageText=SAP Certified Lead consultant with over 13 years of experience in working for wide range of clients and comfortable in engaging with stakeholders at all levels. Team player with excellent communication, analytical and stake holder management skills. Proactive team leader with multiple full lifecycle SAP global rollouts at leading companies.\\n\\nCertifications:\\n-> SAP Certified Application Associate - SAP FIORI (C_FIORDEV_20)\\nSkill set include the following:\\n------------------------------------------\\nSAP FIORI Development & Configuration, UI5 Development, HANA Development, Enterprise Portal\\nSAP Application Architecture\\nSAP Application Development\\nSAP HR ESS/MSS, HCM Processes & Forms\\nSAP WebDynpro for ABAP & Java, Floorplan Manager(FPM)\\nSAP ABAP/4 - SD/MM/FI/HR/SRM\\nJavaScript Frameworks (Dojo, dGrid, JQuery)\\nHTML5, CSS3\\n\nhomePageText=I'm an SAP UI Consultant born and raised in India. I currently work as a UI Design Consultant for Capita in London.\nnameLblTxt=Full Name\nemailLblTxt=Email Address\nmessageLblTxt=Message\nstreetLblTxt=Street\npostCodeLblTxt=Postcode\ncountryLblTxt=Country\ncountryEngItem=England\ncountrySctItem=Scotland\ncountryNIItem=Northern Ireland\ntelLblTxt=Telephone\nsubmitText=SUBMIT\n","gy/com/GopalYarlagadda/manifest.json":'{"_version":"1.8.0","sap.app":{"id":"gy.com.GopalYarlagadda","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"1.0.0"},"title":"{{appTitle}}","description":"{{appDescription}}","sourceTemplate":{"id":"ui5template.basicSAPUI5ApplicationProject","version":"1.40.12"}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true},"supportedThemes":["sap_hcb","sap_belize"]},"sap.ui5":{"rootView":{"viewName":"gy.com.GopalYarlagadda.view.App","type":"XML"},"dependencies":{"minUI5Version":"1.30.0","libs":{"sap.ui.layout":{},"sap.ui.core":{},"sap.m":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"gy.com.GopalYarlagadda.i18n.i18n"}}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","async":true,"viewPath":"gy.com.GopalYarlagadda.view","controlAggregation":"pages","controlId":"idAppControl","clearControlAggregation":false},"routes":[{"name":"RouteApp","pattern":"RouteApp","target":["TargetApp"]}],"targets":{"TargetApp":{"viewType":"XML","transition":"slide","clearControlAggregation":false,"viewName":"App"}}}}}'}});