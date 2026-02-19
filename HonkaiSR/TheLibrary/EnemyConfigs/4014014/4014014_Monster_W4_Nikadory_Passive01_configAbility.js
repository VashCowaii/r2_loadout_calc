const configAbility = {
  "fileName": "4014014_Monster_W4_Nikadory_Passive01",
  "skillTrigger": "Passive01",
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
      "modifier": "<a class=\"gModGreen\" id=\"-1727885089\">W4_Nikadory_BattleScore1</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1711107470\">W4_Nikadory_BattleScore2</a>"
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
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Enemy Team All(with Unselectable)}}"
        },
        "value1": "TeamCharacterCount",
        "compareType": ">=",
        "value2": 1,
        "conditions": {
          "name": "Enemy ID",
          "ID": 401402,
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "characterName": null,
          "isCompareUniqueID": true
        }
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"810487295\">Monster_W4_Nikadory_Part2Effect</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 4014016,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Victor, Acropolis, and Lord of Strife",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"191148502\">Monster_W4_Hearse_LockHPNikadory</a>"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1258691339\">Monster_W4_Nikadory_WithHearse</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 401402020,
            "target": {
              "name": "Target Name",
              "target": "{{Nikador - The Giver: Self}}"
            },
            "characterName": null
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"857944661\">Monster_W4_Nikadory_Main3</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Nikador - The Giver: Self}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1296909781\">Monster_W4_Hearse_Effect</a>"
            }
          ]
        }
      ],
      "failed": [
        {
          "name": "Boss Bar Display",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "display": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 4014011,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Savage God, Mad King, Incarnation of Strife",
            "isBaseCompare": true
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Enemy ID",
                "ID": 401401100,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": null,
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1803940540\">Monster_W4_Nikadory_Main</a>"
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Enemy ID",
                "ID": 4014014,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Savage God, Mad King, Incarnation of Strife",
                "isBaseCompare": true
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"810487295\">Monster_W4_Nikadory_Part2Effect</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-945349590\">Monster_W4_Nikadory_FullPhase1</a>"
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": 4014015,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": "Savage God, Mad King, Incarnation of Strife (Complete)",
                    "isBaseCompare": true
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2056345398\">Monster_W4_Nikadory_PartController_RLBoss</a>"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-994497740\">Monster_W4_Nikadory_RLBoss_Passive</a>",
                      "valuePerStack": {
                        "MDF_DamageUpRatio_PerLayer": {
                          "operator": "Variables[0] (UnusedUnderThisBase_307) || RETURN",
                          "displayLines": "UnusedUnderThisBase_307",
                          "constants": [],
                          "variables": [
                            "UnusedUnderThisBase_307"
                          ]
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-849627116\">Monster_W4_Nikadory_PartController</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 401401000,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": null
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"841167042\">Monster_W4_Nikadory_Main2</a>"
            }
          ]
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"965106610\">Monster_W4_Nikadory_Passive</a>",
      "valuePerStack": {
        "MDF_DamageResistance_PerLayer": {
          "operator": "Variables[0] ({[PassiveSkill01[4]]}) || RETURN",
          "displayLines": "{[PassiveSkill01[4]]}",
          "constants": [],
          "variables": [
            "{[PassiveSkill01[4]]}"
          ]
        },
        "MDF_ActionDelayRatio": {
          "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
          "displayLines": "{[PassiveSkill01[1]]}",
          "constants": [],
          "variables": [
            "{[PassiveSkill01[1]]}"
          ]
        },
        "MDF_CrackedDamage": {
          "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
          "displayLines": "{[PassiveSkill01[2]]}",
          "constants": [],
          "variables": [
            "{[PassiveSkill01[2]]}"
          ]
        },
        "MDF_CrackedDamageAfter": {
          "operator": "Variables[0] ({[PassiveSkill01[5]]}) || RETURN",
          "displayLines": "{[PassiveSkill01[5]]}",
          "constants": [],
          "variables": [
            "{[PassiveSkill01[5]]}"
          ]
        },
        "MDF_SPAddedRatio": {
          "operator": "Variables[0] ({[PassiveSkill01[3]]}) || RETURN",
          "displayLines": "{[PassiveSkill01[3]]}",
          "constants": [],
          "variables": [
            "{[PassiveSkill01[3]]}"
          ]
        },
        "MDF_EnhanceSPAddedRatio": {
          "operator": "Variables[0] ({[Skill05[3]]}) || RETURN",
          "displayLines": "{[Skill05[3]]}",
          "constants": [],
          "variables": [
            "{[Skill05[3]]}"
          ]
        },
        "MDF_MaxLayer": {
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
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1282910303\">Enemy_Heaven_StoneShieldController</a>",
      "valuePerStack": {
        "MDF_MaxLayer": {
          "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
          "displayLines": "{[PassiveSkill01[0]]}",
          "constants": [],
          "variables": [
            "{[PassiveSkill01[0]]}"
          ]
        },
        "MDF_CrackedEffect": {
          "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
          "displayLines": "{[PassiveSkill01[1]]}",
          "constants": [],
          "variables": [
            "{[PassiveSkill01[1]]}"
          ]
        },
        "MDF_CrackedDamage": {
          "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
          "displayLines": "{[PassiveSkill01[2]]}",
          "constants": [],
          "variables": [
            "{[PassiveSkill01[2]]}"
          ]
        },
        "MDF_DamageResistance": {
          "operator": "Variables[0] ({[PassiveSkill01[4]]}) || RETURN",
          "displayLines": "{[PassiveSkill01[4]]}",
          "constants": [],
          "variables": [
            "{[PassiveSkill01[4]]}"
          ]
        },
        "MDF_CrackedDamageAfter": {
          "operator": "Variables[0] ({[PassiveSkill01[5]]}) || RETURN",
          "displayLines": "{[PassiveSkill01[5]]}",
          "constants": [],
          "variables": [
            "{[PassiveSkill01[5]]}"
          ]
        },
        "MDF_ModifySP": {
          "operator": "Variables[0] ({[PassiveSkill01[3]]}) || RETURN",
          "displayLines": "{[PassiveSkill01[3]]}",
          "constants": [],
          "variables": [
            "{[PassiveSkill01[3]]}"
          ]
        }
      }
    }
  ],
  "whenAdded": [
    {
      "name": "IF",
      "conditions": {
        "name": "OR",
        "conditionList": [
          {
            "name": "Enemy ID",
            "ID": 4014014,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Savage God, Mad King, Incarnation of Strife",
            "isBaseCompare": true
          },
          {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Enemy Team All(with Unselectable)}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": ">=",
            "value2": 1,
            "conditions": {
              "name": "Enemy ID",
              "ID": 401402,
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "characterName": null,
              "isCompareUniqueID": true
            }
          }
        ]
      }
    }
  ],
  "references": []
}