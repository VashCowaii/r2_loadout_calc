const configAbility = {
  "fileName": "Evey_Servant_EvernightServant_Ability11_EnterReady",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable (VFX)",
      "variableName": "Is_S11_Ready",
      "value": 1
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"294638745\">function_Evernight_Group_SizeControl_Perf</a>"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"-1711321550\">function_Evernight_Group_FollowControl_00</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster's Summoner}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-889130257\">Evernight_UltraMode</a>[<span class=\"descriptionNumberColor\">Darkest Riddle</span>]"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "_TriggerNormal_Cutin",
        "compareType": "=",
        "value2": 1
      },
      "passed": [
        {
          "name": "UI Display Event",
          "popUpText": "With Me, This Night"
        },
        {
          "name": "Define Custom Variable (VFX)",
          "variableName": "_TriggerNormal_Cutin",
          "value": 0
        }
      ]
    }
  ],
  "references": []
}