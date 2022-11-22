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
                        key:monthindex,
                        value:month[monthindex]
                    };
                    aMonth.push(oObj);
                }
                this.getView().getModel("dataItems").setProperty("/Months",aMonth);

                const location= ["USA","CANADA","Mexico"];
                let aLocation=[];
                for (let locationindex = 0; locationindex < 3; locationindex++) {
                    const oObj={
                        key:locationindex,
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
                }
                ];
                this.getView().getModel("dataItems").setProperty("/Users",aUsers);


            },
            onSurveySubmit: function(){
                sap.m.MessageBox.success("Assessment created Successfully")
            }
        });
    });
