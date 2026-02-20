const configAbility = {
  "fileName": "4032021_Monster_W4_FireProwler_IF_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
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
    "Trigger: Attack End",
    {
      "name": "Create Enemies",
      "refreshPositions": false,
      "enemyList": [
        {
          "name": "Create Enemy from Custom",
          "value": "SummonID_2",
          "summonLocation": "KeepOnFirst"
        },
        {
          "name": "Create Enemy from Custom",
          "value": "SummonID_2",
          "summonLocation": "KeepOnLast"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-557758203\">Enemy_W4_FireProwler_IF_Limit</a>[<span class=\"descriptionNumberColor\">Shackle Shatter</span>]",
        "invertCondition": true
      },
      "passed": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "conditions": {
            "name": "Enemy ID",
            "ID": {
              "operator": "Variables[0] (SummonID_2) || RETURN",
              "displayLines": "SummonID_2",
              "constants": [],
              "variables": [
                "SummonID_2"
              ]
            },
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": null
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
            },
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "phase": "Phase02_Still"
            },
            "Deleted bullshit"
          ]
        }
      ],
      "failed": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "conditions": {
            "name": "Enemy ID",
            "ID": {
              "operator": "Variables[0] (SummonID_2) || RETURN",
              "displayLines": "SummonID_2",
              "constants": [],
              "variables": [
                "SummonID_2"
              ]
            },
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": null
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
            },
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "phase": "Phase02"
            },
            "Deleted bullshit",
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2112039122\">Enemy_W4_FireProwler_01_IF_Activated02</a>[<span class=\"descriptionNumberColor\">Mutual Sacrifice</span>]"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"41194297\">Enemy_W4_FireProwler_01_IF_NextWave</a>"
            }
          ]
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": []
}