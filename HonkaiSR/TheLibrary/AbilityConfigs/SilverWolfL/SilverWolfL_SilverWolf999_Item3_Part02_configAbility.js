const configAbility = {
  "fileName": "SilverWolfL_SilverWolf999_Item3_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "scope": "ContextCaster",
      "variableName": "_Item3_AchievementFlag",
      "value": 1
    },
    {
      "name": "UI Display Event",
      "popUpText": "Funky Munch Bean"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"-2134200315\">SilverWolf999_Item3_AfterBox</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Active: Fast-Forward Animations"
      }
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"918776177\">SilverWolf999_Item3_Finish</a>"
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  }
}