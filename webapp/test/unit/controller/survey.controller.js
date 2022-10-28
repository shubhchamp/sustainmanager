/*global QUnit*/

sap.ui.define([
	"cprailsurvey/cprailmanager/controller/survey.controller"
], function (Controller) {
	"use strict";

	QUnit.module("survey Controller");

	QUnit.test("I should test the survey controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
