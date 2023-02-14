sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,
	JSONModel) {
        "use strict";

        return Controller.extend("cprail.survey.cprailmanager.controller.survey", {
            onInit: function () {
                const oModel= new JSONModel();
                this.getView().setModel(oModel,"dataItems");
                this._setData();

            },
            _setData: function(){
                const aYear = [];
                for (let index = 1; index < 6; index++) {
                    const oObj={
                        key:`202${index}`,
                        value:`202${index}`
                    };
                    aYear.push(oObj);
                }
                this.getView().getModel("dataItems").setProperty("/Years",aYear);

                const month= ["January","February","March","April","May","June","July",
                "August","September","October","November","December"];
                let aMonth=[];
                for (let monthindex = 0; monthindex < 12; monthindex++) {
                    const oObj={
                        key:month[monthindex],
                        value:month[monthindex]
                    };
                    aMonth.push(oObj);
                }
                this.getView().getModel("dataItems").setProperty("/Months",aMonth);

                const location= ["USA","CANADA","Mexico"];
                let aLocation=[];
                for (let locationindex = 0; locationindex < 3; locationindex++) {
                    const oObj={
                        key:location[locationindex],
                        value:location[locationindex]
                    };
                    aLocation.push(oObj);
                }
                this.getView().getModel("dataItems").setProperty("/Locations",aLocation);

                let aUsers=[{
                    emailID:"smishra@convergentis.com",
                    Name:"Shubham Mishra"
                },
                {
                    emailID:"nbhandari@convergentis.com",
                    Name:"Nidhideep Bhandari"
                },
                {
                    emailID:"sshukla@convergentis.com",
                    Name:"Shivam Shukla"
                },
                {
                    emailID:"skumar@convergentis.com",
                    Name:"Sujit Kumar"
                },
                {
                    emailID:"bbraun@convergentis.com",
                    Name:"Brad Braun"
                },
                {
                    emailID:"demo@convergentis.com",
                    Name:"Demo User"
                }
                ];
                this.getView().getModel("dataItems").setProperty("/Users",aUsers);
                const aType = [{
                    key:"01",
                    value:"Emission"
                },
                {
                    key:"02",
                    value:"Waste"
                },
                {
                    key:"03",
                    value:"Water"
                }];
                this.getView().getModel("dataItems").setProperty("/Types",aType);


            },
            onSurveySubmit: function(){
                let sUsers="";
                this.byId("multiInput").getTokens().forEach(element => {
                    sUsers= sUsers? `${sUsers},${element.getKey()}`: element.getKey()
                });
                 const obj={
                    
                        "ReportYear": this.byId("Year").getSelectedKey(),
                        "ReportMonth": this.byId("month").getSelectedKey(),
                        "OfficeLocation":this.byId("office").getSelectedKey(),
                        "Users": sUsers,
                        "Type": this.byId("Type").getSelectedKey(),
                        "Status": "Open"
                 };
                 this.getView().getModel().create("/CreateAssessment",obj,{
                    success: function(){
                        sap.m.MessageBox.success("Assessment created Successfully")
                    },error: function(){
                        sap.m.MessageBox.success("Error while creating assessment")
                    }
                 })
                
            }
        });
    });
