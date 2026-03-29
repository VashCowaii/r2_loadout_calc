const configAbility = {
  "fileName": "4034018_Monster_W4_FireProwler_Ability05_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "<a class=\"gModGreen\" id=\"33624492\">Enemy_W4_FireProwler_TimePower</a>[<span class=\"descriptionNumberColor\">Calamity Power</span>]",
        "compareType": ">",
        "value2": 0,
        "valueType": "Layer"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"33624492\">Enemy_W4_FireProwler_TimePower</a>[<span class=\"descriptionNumberColor\">Calamity Power</span>]",
          "addStacksPerTrigger": {
            "operator": "Variables[0] (AttackCount) || INVERT || Variables[1] ({[Skill05[0]]}) || DIV || RETURN",
            "displayLines": "(-AttackCount / {[Skill05[0]]})",
            "constants": [],
            "variables": [
              "AttackCount",
              "{[Skill05[0]]}"
            ]
          }
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": 0,
          "entityClass": "Enemy",
          "maximum": 0,
          "assignState": "True",
          "barType": "FireProwler",
          "trigger": "Step_01"
        },
        {
          "name": "Update Displayed Energy Bar",
          "entityClass": "Enemy",
          "barType": "FireProwler",
          "trigger": "NumChange_Purge"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "AttackCount",
            "compareType": "=",
            "value2": 2
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
                  "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                  "displayLines": "{[Skill05[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill05[1]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK"
              }
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
                  "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                  "displayLines": "{[Skill05[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill05[1]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK"
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "AttackCount",
            "compareType": "=",
            "value2": 4
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
                  "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                  "displayLines": "{[Skill05[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill05[1]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK"
              }
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
                  "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                  "displayLines": "{[Skill05[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill05[1]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK"
              }
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
                  "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                  "displayLines": "{[Skill05[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill05[1]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK"
              }
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
                  "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                  "displayLines": "{[Skill05[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill05[1]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK"
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "AttackCount",
            "compareType": ">=",
            "value2": 6
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
                  "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                  "displayLines": "{[Skill05[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill05[1]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK"
              }
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
                  "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                  "displayLines": "{[Skill05[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill05[1]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK"
              }
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
                  "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                  "displayLines": "{[Skill05[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill05[1]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK"
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "AttackCount",
                "compareType": "=",
                "value2": 8
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
                      "operator": "Variables[0] ({[Skill05[1]]}) || Constants[0] (2) || MUL || RETURN",
                      "displayLines": "({[Skill05[1]]} * 2)",
                      "constants": [
                        2
                      ],
                      "variables": [
                        "{[Skill05[1]]}"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK"
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
                  "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                  "displayLines": "{[Skill05[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill05[1]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK"
              }
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
                  "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                  "displayLines": "{[Skill05[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill05[1]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK"
              }
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
                  "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                  "displayLines": "{[Skill05[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill05[1]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK"
              }
            }
          ]
        },
        "Deleted bullshit",
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-331836241\">Monster_W4_FireProwler_MainStory_01</a>"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill05[2]]}) || RETURN",
              "displayLines": "{[Skill05[2]]}",
              "constants": [],
              "variables": [
                "{[Skill05[2]]}"
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
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-331836241\">Monster_W4_FireProwler_MainStory_01</a>"
          },
          "passed": [
            "Trigger: Ability End"
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
            },
            "Trigger: Ability End"
          ]
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "variableName": "AttackCount",
          "value": 0
        },
        "Deleted bullshit",
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-331836241\">Monster_W4_FireProwler_MainStory_01</a>"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill05[2]]}) || RETURN",
              "displayLines": "{[Skill05[2]]}",
              "constants": [],
              "variables": [
                "{[Skill05[2]]}"
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
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-331836241\">Monster_W4_FireProwler_MainStory_01</a>"
          },
          "passed": [
            "Trigger: Ability End"
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
            },
            "Trigger: Ability End"
          ]
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}