$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("feature/TechFios_Login.feature");
formatter.feature({
  "line": 2,
  "name": "Validate Techfios Login Page Functionality",
  "description": "",
  "id": "validate-techfios-login-page-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@End2End"
    }
  ]
});
formatter.scenarioOutline({
  "line": 15,
  "name": "User should be able to login with validate credentials(Making Variables work as Placeholders)",
  "description": "",
  "id": "validate-techfios-login-page-functionality;user-should-be-able-to-login-with-validate-credentials(making-variables-work-as-placeholders)",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@Scenario2"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "User enters the \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User should be able to see the DashBoard Page",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "validate-techfios-login-page-functionality;user-should-be-able-to-login-with-validate-credentials(making-variables-work-as-placeholders);",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 19,
      "id": "validate-techfios-login-page-functionality;user-should-be-able-to-login-with-validate-credentials(making-variables-work-as-placeholders);;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123"
      ],
      "line": 20,
      "id": "validate-techfios-login-page-functionality;user-should-be-able-to-login-with-validate-credentials(making-variables-work-as-placeholders);;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6829909500,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the Techfios Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.User_is_on_the_Techfios_Login_Page()"
});
formatter.result({
  "duration": 1304115600,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "User should be able to login with validate credentials(Making Variables work as Placeholders)",
  "description": "",
  "id": "validate-techfios-login-page-functionality;user-should-be-able-to-login-with-validate-credentials(making-variables-work-as-placeholders);;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@End2End"
    },
    {
      "line": 14,
      "name": "@Scenario2"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "User enters the \"demo@techfios.com\" and \"abc123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User should be able to see the DashBoard Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 17
    },
    {
      "val": "abc123",
      "offset": 41
    }
  ],
  "location": "StepDef.user_enters_the_and(String,String)"
});
formatter.result({
  "duration": 2359485100,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_should_be_able_to_see_the_DashBoard_Page()"
});
formatter.result({
  "duration": 8730700,
  "status": "passed"
});
formatter.after({
  "duration": 697061500,
  "status": "passed"
});
});