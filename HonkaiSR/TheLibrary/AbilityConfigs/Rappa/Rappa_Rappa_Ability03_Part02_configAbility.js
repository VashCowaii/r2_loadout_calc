const configAbility = {
  "fileName": "Rappa_Rappa_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "DV_StockTempCount"
      },
      "variableName": "_AMMO"
    },
    {
      "name": "Define Custom Variable",
      "value": 1,
      "variableName": "_AMMO_RELOADED"
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
        "displayLines": "3"
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
        "modifier": "<a class=\"gModGreen\" id=\"-1748394699\">Rappa_UltraMode</a>[<span class=\"descriptionNumberColor\">Nindō Supreme: Aishiteru</span>]"
      },
      "failed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1748394699\">Rappa_UltraMode</a>[<span class=\"descriptionNumberColor\">Nindō Supreme: Aishiteru</span>]",
          "valuePerStack": {
            "MDF_PropertyValue": {
              "displayLines": "0.5"
            },
            "MDF_PropertyValue2": {
              "displayLines": "0.3"
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
      "modifier": "<a class=\"gModGreen\" id=\"685299865\">Rappa_UltraMode_BanSKL02_ForCaster</a>"
    },
    {
      "name": "Inject Extra-Turn",
      "actionTag": null,
      "afterInjection": [],
      "priorityTag": "CharacterChainedSkill"
    },
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}