const configAbility = {
  "fileName": "Rappa_Rappa_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "variableName": "_AMMO",
      "value": {
        "operator": "Variables[0] (DV_StockTempCount) || RETURN",
        "displayLines": "DV_StockTempCount",
        "constants": [],
        "variables": [
          "DV_StockTempCount"
        ]
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "_AMMO_RELOADED",
      "value": 1
    },
    {
      "name": "Adjust Variable Value",
      "adjustmentType": "Overwrite Value",
      "variableName": "_AR_STATE_LIFETIME",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "value": {
        "operator": "Variables[0] (3) || RETURN",
        "displayLines": "3",
        "constants": [],
        "variables": [
          3
        ]
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "Rappa_UltraMode[<span class=\"descriptionNumberColor\">Nindō Supreme: Aishiteru</span>]"
      },
      "failed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Rappa_UltraMode[<span class=\"descriptionNumberColor\">Nindō Supreme: Aishiteru</span>]",
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (0.5) || RETURN",
              "displayLines": "0.5",
              "constants": [],
              "variables": [
                0.5
              ]
            },
            "MDF_PropertyValue2": {
              "operator": "Variables[0] (0.3) || RETURN",
              "displayLines": "0.3",
              "constants": [],
              "variables": [
                0.3
              ]
            }
          }
        }
      ]
    },
    {
      "name": "Update Energy",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "valuePercent": 1,
      "ofAbilitySplit": true,
      "isFixed": "* ERR"
    },
    {
      "name": "Update Ability Binding",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "abilityName": "Skill11",
      "skillSlot": "Basic ATK"
    },
    {
      "name": "Update Ability Enhance Button",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "display": "Show",
      "abilityName": "Basic ATK"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Rappa_UltraMode_BanSKL02_ForCaster"
    },
    {
      "name": "Inject Extra-Turn",
      "actionTag": null,
      "afterInjection": [],
      "priorityTag": "Character_HighPriorityAction"
    },
    "Trigger: Ability End"
  ],
  "references": []
}