const configAbility = {
  "fileName": "4032070_Monster_W4_IronTombCorePart_01_PassiveAbility03",
  "skillTrigger": "PassiveSkill03",
  "abilityType": "Skill",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Irontomb: Core}}"
        },
        "value1": "HP_Bars_Remaining",
        "compareType": "=",
        "value2": 1
      },
      "failed": [
        {
          "name": "UI Display Event",
          "popUpText": "A Fool's Defiance"
        }
      ]
    },
    "Deleted bullshit",
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Irontomb: Core}}"
        },
        "value1": "HP_Bars_Remaining",
        "compareType": "=",
        "value2": 1
      },
      "failed": [
        {
          "name": "Define Custom Variable with Copy",
          "target": {
            "name": "Target Name",
            "target": "{{Irontomb: Core}}"
          },
          "variable": "AIFlag",
          "target2": null,
          "variable2": "_TempAIFlag"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "AIFlag",
          "value": {
            "operator": "Variables[0] (_TempAIFlag) || RETURN",
            "displayLines": "_TempAIFlag",
            "constants": [],
            "variables": [
              "_TempAIFlag"
            ]
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"2061848542\">W4_IronTombCorePart_01_Recover</a>"
        },
        {
          "name": "Heal",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "healPercent": 1,
          "formula": "Heal from Target MaxHP"
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": []
}