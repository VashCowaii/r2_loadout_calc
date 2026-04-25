const configAbility = {
  "fileName": "5024010_Monster_W5_Ripper_Passive01",
  "skillTrigger": "PassiveSkill01",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1570402941\">W5_Ripper_BattleScore1</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1520070084\">W5_Ripper_BattleScore2</a>"
    },
    {
      "name": "Boss Bar Display",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "display": true
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-764241521\">Monster_W5_Ripper_HeartEffectPrepare</a>"
    },
    {
      "name": "Assign Unique Name",
      "uniqueName": "Monster_W5_Ripper_00",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1728959136\">Monster_W5_Ripper_Passive</a>",
      "valuePerStack": {
        "MDF_TriggerSummonCount": {
          "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
          "displayLines": "{[PassiveSkill01[0]]}",
          "constants": [],
          "variables": [
            "{[PassiveSkill01[0]]}"
          ]
        }
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Check Boolean Value",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "value": "ENEMIES_OBJECT_UNUSED__246"
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 5024011,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Paramount Bliss Inverted: Illwish Archlotus"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"62518190\">Monster_W5_Ripper_Main</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"766895631\">Standard_Monster_Floating_DamageReduceController</a>",
              "valuePerStack": {
                "MDF_LockHpActionDecreaseRatio": {
                  "operator": "Variables[0] (UnusedUnderThisBase_599) || RETURN",
                  "displayLines": "UnusedUnderThisBase_599",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_599"
                  ]
                },
                "MDF_LockHpUpLimitRatio": {
                  "operator": "Variables[0] (UnusedUnderThisBase_598) || RETURN",
                  "displayLines": "UnusedUnderThisBase_598",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_598"
                  ]
                },
                "MDF_DamageReduceRatio": {
                  "operator": "Variables[0] (UnusedUnderThisBase_597) || RETURN",
                  "displayLines": "UnusedUnderThisBase_597",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_597"
                  ]
                },
                "MDF_LastLockHpRatio": {
                  "operator": "Variables[0] (UnusedUnderThisBase_596) || RETURN",
                  "displayLines": "UnusedUnderThisBase_596",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_596"
                  ]
                }
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"159168932\">Monster_W5_Ripper_Main_HPTrigger1</a>",
              "valuePerStack": {
                "MDF_HPTriggerRatio": 0.45,
                "MDF_HPTriggerCompareRatio": 0.4
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"209501789\">Monster_W5_Ripper_Main_HPTrigger2</a>",
              "valuePerStack": {
                "MDF_HPTriggerRatio": 0.15,
                "MDF_HPTriggerCompareRatio": 0.1
              }
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Enemy ID",
                "ID": 502401100,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": null
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "maxTargets": 1,
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Character ID",
                        "ID": 8009,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "{NICKNAME}"
                      },
                      {
                        "name": "Character ID",
                        "ID": 8010,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "{NICKNAME}"
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1116201071\">Monster_W5_Ripper_MainPerform</a>"
                    },
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "valuePercent": 1,
                      "isFixed": "(Fixed)"
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2042265236\">Monster_W5_Ripper_Main2</a>"
                }
              ]
            }
          ]
        }
      ],
      "failed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1759914466\">Monster_W5_Ripper_PartController</a>"
        }
      ]
    }
  ],
  "whenAdded": [],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}