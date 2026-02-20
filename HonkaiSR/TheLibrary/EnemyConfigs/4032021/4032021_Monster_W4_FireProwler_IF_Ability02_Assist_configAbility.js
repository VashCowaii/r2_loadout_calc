const configAbility = {
  "fileName": "4032021_Monster_W4_FireProwler_IF_Ability02_Assist",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Deleted bullshit",
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 1
          },
          {
            "name": "Enemy ID",
            "ID": 4034018,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "???",
            "isBaseCompare": true,
            "invertCondition": true
          }
        ]
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1028185089\">Enemy_AML_Minion02_01_RallyHP_Controller_V2</a>",
          "valuePerStack": {
            "MDF_RallyTransferRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_356) || RETURN",
              "displayLines": "UnusedUnderThisBase_356",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_356"
              ]
            },
            "MDF_Rally_HealPercentage": {
              "operator": "Variables[0] (UnusedUnderThisBase_354) || RETURN",
              "displayLines": "UnusedUnderThisBase_354",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_354"
              ]
            },
            "MDF_Rally_Strongth_AllDamageTypeAddedRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_355) || RETURN",
              "displayLines": "UnusedUnderThisBase_355",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_355"
              ]
            }
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "OR",
        "conditionList": [
          {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 2
          },
          {
            "name": "Enemy ID",
            "ID": 4034018,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "???",
            "isBaseCompare": true
          }
        ]
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1028185089\">Enemy_AML_Minion02_01_RallyHP_Controller_V2</a>",
          "valuePerStack": {
            "MDF_RallyTransferRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_353) || RETURN",
              "displayLines": "UnusedUnderThisBase_353",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_353"
              ]
            },
            "MDF_Rally_HealPercentage": {
              "operator": "Variables[0] (UnusedUnderThisBase_354) || RETURN",
              "displayLines": "UnusedUnderThisBase_354",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_354"
              ]
            },
            "MDF_Rally_Strongth_AllDamageTypeAddedRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_355) || RETURN",
              "displayLines": "UnusedUnderThisBase_355",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_355"
              ]
            }
          }
        }
      ]
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "AttackScaling": {
        "DamageType": "Physical",
        "Damage": {
          "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
          "displayLines": "{[Skill02[0]]}",
          "constants": [],
          "variables": [
            "{[Skill02[0]]}"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "Skill02_Assist_Damage"
    },
    {
      "name": "Define Custom Variable with Copy",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-2020453285\">Enemy_W4_FireProwler_01_DamageValue</a>",
      "variable": "MDF_Skill02",
      "target2": null,
      "variable2": "Skill02_Assist_Damage"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Compare: Variable",
            "value1": "Skill02_AssistCount",
            "compareType": "=",
            "value2": 1
          }
        ]
      },
      "passed": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (Skill02_Assist_Damage) || RETURN",
              "displayLines": "Skill02_Assist_Damage",
              "constants": [],
              "variables": [
                "Skill02_Assist_Damage"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "50%"
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Compare: Variable",
            "value1": "Skill02_AssistCount",
            "compareType": "=",
            "value2": 2
          }
        ]
      },
      "passed": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (Skill02_Assist_Damage) || RETURN",
              "displayLines": "Skill02_Assist_Damage",
              "constants": [],
              "variables": [
                "Skill02_Assist_Damage"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "50%"
          }
        }
      ]
    },
    "Trigger: Attack End"
  ],
  "references": []
}