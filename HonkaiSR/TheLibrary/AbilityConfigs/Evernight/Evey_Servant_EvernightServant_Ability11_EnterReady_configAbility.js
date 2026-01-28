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
      "functionName": "function_Evernight_Group_SizeControl_Perf"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "function_Evernight_Group_FollowControl_00"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster's Summoner}}"
        },
        "modifier": "Evernight_UltraMode[<span class=\"descriptionNumberColor\">Darkest Riddle</span>]"
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