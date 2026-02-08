const configAbility = {
  "fileName": "2004014_Monster_W2_Kafka_AbilityIF01_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Enemy ID",
        "ID": {
          "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__19) || RETURN",
          "displayLines": "ENEMIES_OBJECT_UNUSED__19",
          "constants": [],
          "variables": [
            "ENEMIES_OBJECT_UNUSED__19"
          ]
        },
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "characterName": null
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-689878752\">Monster_W2_Kafka_IF03_SummonKillBonus01</a>[<span class=\"descriptionNumberColor\">Madden</span>]",
          "valuePerStack": {
            "MDF_KillBonus": {
              "operator": "Variables[0] ({[SkillIF01[2]]}) || RETURN",
              "displayLines": "{[SkillIF01[2]]}",
              "constants": [],
              "variables": [
                "{[SkillIF01[2]]}"
              ]
            }
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Enemy ID",
        "ID": {
          "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__21) || RETURN",
          "displayLines": "ENEMIES_OBJECT_UNUSED__21",
          "constants": [],
          "variables": [
            "ENEMIES_OBJECT_UNUSED__21"
          ]
        },
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "characterName": null
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-639545895\">Monster_W2_Kafka_IF03_SummonKillBonus02</a>[<span class=\"descriptionNumberColor\">Madden</span>]",
          "valuePerStack": {
            "MDF_KillBonus": {
              "operator": "Variables[0] ({[SkillIF01[2]]}) || RETURN",
              "displayLines": "{[SkillIF01[2]]}",
              "constants": [],
              "variables": [
                "{[SkillIF01[2]]}"
              ]
            }
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
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 2
          },
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1162350754\">Enemy_W2_Kafka_IF_EX04_Boss</a>"
          }
        ]
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target Count",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Minions}}"
            },
            "compareType": "=",
            "value2": 2,
            "livingTargets": true
          },
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Enemy ID",
                "ID": {
                  "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__20) || RETURN",
                  "displayLines": "ENEMIES_OBJECT_UNUSED__20",
                  "constants": [],
                  "variables": [
                    "ENEMIES_OBJECT_UNUSED__20"
                  ]
                },
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "characterName": null
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Enemy ID",
                "ID": {
                  "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__22) || RETURN",
                  "displayLines": "ENEMIES_OBJECT_UNUSED__22",
                  "constants": [],
                  "variables": [
                    "ENEMIES_OBJECT_UNUSED__22"
                  ]
                },
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "characterName": null
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Enemy ID",
            "ID": {
              "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__20) || RETURN",
              "displayLines": "ENEMIES_OBJECT_UNUSED__20",
              "constants": [],
              "variables": [
                "ENEMIES_OBJECT_UNUSED__20"
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
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "STAT_CTRL",
                    "invertCondition": true
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "DisableAction",
                    "invertCondition": true
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "Break",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-656323514\">Monster_W2_Kafka_IF03_SummonKillBonus03</a>[<span class=\"descriptionNumberColor\">Madden</span>]",
                  "valuePerStack": {
                    "MDF_KillBonus": {
                      "operator": "Variables[0] ({[SkillIF01[2]]}) || RETURN",
                      "displayLines": "{[SkillIF01[2]]}",
                      "constants": [],
                      "variables": [
                        "{[SkillIF01[2]]}"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Enemy ID",
            "ID": {
              "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__22) || RETURN",
              "displayLines": "ENEMIES_OBJECT_UNUSED__22",
              "constants": [],
              "variables": [
                "ENEMIES_OBJECT_UNUSED__22"
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
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "STAT_CTRL",
                    "invertCondition": true
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "DisableAction",
                    "invertCondition": true
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "Break",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-605990657\">Monster_W2_Kafka_IF03_SummonKillBonus04</a>[<span class=\"descriptionNumberColor\">Madden</span>]",
                  "valuePerStack": {
                    "MDF_KillBonus": {
                      "operator": "Variables[0] ({[SkillIF01[2]]}) || RETURN",
                      "displayLines": "{[SkillIF01[2]]}",
                      "constants": [],
                      "variables": [
                        "{[SkillIF01[2]]}"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        }
      ],
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": {
              "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__20) || RETURN",
              "displayLines": "ENEMIES_OBJECT_UNUSED__20",
              "constants": [],
              "variables": [
                "ENEMIES_OBJECT_UNUSED__20"
              ]
            },
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "characterName": null
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-656323514\">Monster_W2_Kafka_IF03_SummonKillBonus03</a>[<span class=\"descriptionNumberColor\">Madden</span>]",
              "valuePerStack": {
                "MDF_KillBonus": {
                  "operator": "Variables[0] ({[SkillIF01[2]]}) || RETURN",
                  "displayLines": "{[SkillIF01[2]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillIF01[2]]}"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": {
              "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__22) || RETURN",
              "displayLines": "ENEMIES_OBJECT_UNUSED__22",
              "constants": [],
              "variables": [
                "ENEMIES_OBJECT_UNUSED__22"
              ]
            },
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "characterName": null
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-605990657\">Monster_W2_Kafka_IF03_SummonKillBonus04</a>[<span class=\"descriptionNumberColor\">Madden</span>]",
              "valuePerStack": {
                "MDF_KillBonus": {
                  "operator": "Variables[0] ({[SkillIF01[2]]}) || RETURN",
                  "displayLines": "{[SkillIF01[2]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillIF01[2]]}"
                  ]
                }
              }
            }
          ]
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "HP_Bars_Remaining",
        "compareType": "=",
        "value2": 1
      },
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1162350754\">Enemy_W2_Kafka_IF_EX04_Boss</a>"
          }
        }
      ]
    }
  ],
  "references": []
}