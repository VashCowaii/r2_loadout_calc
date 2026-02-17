const configAbility = {
  "fileName": "3013012_Monster_W3_Dinosaur_01_Ability07_Part02_IF",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Define Custom Variable with Modifier Values",
      "valueType": "Layer",
      "variableName": "MDF_Growth_Layer",
      "modifierName": "<a class=\"gModGreen\" id=\"-1395319081\">Enemy_W3_Dinosaur_01_Standard_Growth</a>[<span class=\"descriptionNumberColor\">Obscure Blaze</span>]",
      "multiplier": 1
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Monster_W3_Dinosaur_01_Skill07_CurrentHitCount_i",
      "value": 0
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Monster_W3_Dinosaur_01_Skill07_HitCount",
      "value": {
        "operator": "Variables[0] (MDF_Growth_Layer) || Variables[1] ({[Skill07[1]]}) || ADD || RETURN",
        "displayLines": "(MDF_Growth_Layer + {[Skill07[1]]})",
        "constants": [],
        "variables": [
          "MDF_Growth_Layer",
          "{[Skill07[1]]}"
        ]
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Monster_W3_Dinosaur_01_Skill07_SumTime",
      "value": 0.3
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Monster_W3_Dinosaur_01_Skill07_DeltaTime",
      "value": {
        "operator": "Variables[0] (Monster_W3_Dinosaur_01_Skill07_HitCount) || Variables[1] (Monster_W3_Dinosaur_01_Skill07_SumTime) || Constants[0] (1) || SUB || DIV || RETURN",
        "displayLines": "(Monster_W3_Dinosaur_01_Skill07_HitCount / (Monster_W3_Dinosaur_01_Skill07_SumTime - 1))",
        "constants": [
          1
        ],
        "variables": [
          "Monster_W3_Dinosaur_01_Skill07_HitCount",
          "Monster_W3_Dinosaur_01_Skill07_SumTime"
        ]
      }
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1974630244\">Enemy_W3_Dinosaur_01_Ability07_HitTag</a>"
    },
    {
      "name": "Define Custom Variable with Modifier Values",
      "valueType": "Layer",
      "variableName": "MonsterAssistBuff_IF",
      "modifierName": "<a class=\"gModGreen\" id=\"-130810153\">Monster_W3_Dinosaur_01_MonsterAssistBonus</a>[<span class=\"descriptionNumberColor\">Terrathorn</span>]",
      "multiplier": 1
    },
    {
      "name": "Looped Event",
      "maxLoops": {
        "operator": "Variables[0] (Monster_W3_Dinosaur_01_Skill07_SumTime) || RETURN",
        "displayLines": "Monster_W3_Dinosaur_01_Skill07_SumTime",
        "constants": [],
        "variables": [
          "Monster_W3_Dinosaur_01_Skill07_SumTime"
        ]
      },
      "Event": [
        {
          "name": "Random Event",
          "odds": [
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1
          ],
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "EffRandomYaw",
              "value": 30
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "EffRandomYaw",
              "value": 60
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "EffRandomYaw",
              "value": 90
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "EffRandomYaw",
              "value": 120
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "EffRandomYaw",
              "value": 150
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "EffRandomYaw",
              "value": 180
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "EffRandomYaw",
              "value": 210
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "EffRandomYaw",
              "value": 240
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "EffRandomYaw",
              "value": 270
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "EffRandomYaw",
              "value": 300
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "EffRandomYaw",
              "value": 330
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "EffRandomYaw",
              "value": 360
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Monster_W3_Dinosaur_01_Skill07_CurrentHitCount_i_Eff_Loop",
          "value": {
            "operator": "Variables[0] (Monster_W3_Dinosaur_01_Skill07_CurrentHitCount_i) || Constants[0] (3) || MOD || RETURN",
            "displayLines": "(Monster_W3_Dinosaur_01_Skill07_CurrentHitCount_i % 3)",
            "constants": [
              3
            ],
            "variables": [
              "Monster_W3_Dinosaur_01_Skill07_CurrentHitCount_i"
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Monster_W3_Dinosaur_01_Skill07_CurrentHitCount_i_Eff_Loop",
            "compareType": "=",
            "value2": 0
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Monster_W3_Dinosaur_01_Skill07_CurrentHitCount_i",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemies by Aggro OR Random}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Player Team All}}"
                        },
                        "value1": "TeamCharacterCount",
                        "compareType": "=",
                        "value2": 1,
                        "conditions": {
                          "name": "Living State",
                          "state": "Mask_AliveOnly",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          }
                        }
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1974630244\">Enemy_W3_Dinosaur_01_Ability07_HitTag</a>",
                        "invertCondition": true
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1974630244\">Enemy_W3_Dinosaur_01_Ability07_HitTag</a>"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1974630244\">Enemy_W3_Dinosaur_01_Ability07_HitTag</a>"
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Quantum",
                        "Damage": {
                          "operator": "Variables[0] ({[Skill07[0]]}) || RETURN",
                          "displayLines": "{[Skill07[0]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill07[0]]}"
                          ]
                        },
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Basic ATK",
                        "EnergyGainPercent": "100%"
                      }
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Quantum",
                        "Damage": {
                          "operator": "Variables[0] ({[Skill07[2]]}) || Variables[1] (MonsterAssistBuff_IF) || MUL || RETURN",
                          "displayLines": "({[Skill07[2]]} * MonsterAssistBuff_IF)",
                          "constants": [],
                          "variables": [
                            "{[Skill07[2]]}",
                            "MonsterAssistBuff_IF"
                          ]
                        },
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Basic ATK"
                      }
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Player Team All}}"
                        },
                        "value1": "TeamCharacterCount",
                        "compareType": "=",
                        "value2": 1,
                        "conditions": {
                          "name": "Living State",
                          "state": "Mask_AliveOnly",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          }
                        }
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1974630244\">Enemy_W3_Dinosaur_01_Ability07_HitTag</a>",
                        "invertCondition": true
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1974630244\">Enemy_W3_Dinosaur_01_Ability07_HitTag</a>"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1974630244\">Enemy_W3_Dinosaur_01_Ability07_HitTag</a>"
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Quantum",
                        "Damage": {
                          "operator": "Variables[0] ({[Skill07[0]]}) || RETURN",
                          "displayLines": "{[Skill07[0]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill07[0]]}"
                          ]
                        },
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Basic ATK",
                        "EnergyGainPercent": "100%"
                      }
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Quantum",
                        "Damage": {
                          "operator": "Variables[0] ({[Skill07[2]]}) || Variables[1] (MonsterAssistBuff_IF) || MUL || RETURN",
                          "displayLines": "({[Skill07[2]]} * MonsterAssistBuff_IF)",
                          "constants": [],
                          "variables": [
                            "{[Skill07[2]]}",
                            "MonsterAssistBuff_IF"
                          ]
                        },
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Basic ATK"
                      }
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
            "name": "Compare: Variable",
            "value1": "Monster_W3_Dinosaur_01_Skill07_CurrentHitCount_i_Eff_Loop",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Player Team All}}"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": "=",
                    "value2": 1,
                    "conditions": {
                      "name": "Living State",
                      "state": "Mask_AliveOnly",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    }
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1974630244\">Enemy_W3_Dinosaur_01_Ability07_HitTag</a>",
                    "invertCondition": true
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1974630244\">Enemy_W3_Dinosaur_01_Ability07_HitTag</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1974630244\">Enemy_W3_Dinosaur_01_Ability07_HitTag</a>"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill07[0]]}) || RETURN",
                      "displayLines": "{[Skill07[0]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill07[0]]}"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK",
                    "EnergyGainPercent": "100%"
                  }
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill07[2]]}) || Variables[1] (MonsterAssistBuff_IF) || MUL || RETURN",
                      "displayLines": "({[Skill07[2]]} * MonsterAssistBuff_IF)",
                      "constants": [],
                      "variables": [
                        "{[Skill07[2]]}",
                        "MonsterAssistBuff_IF"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK"
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
            "value1": "Monster_W3_Dinosaur_01_Skill07_CurrentHitCount_i_Eff_Loop",
            "compareType": "=",
            "value2": 2
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Player Team All}}"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": "=",
                    "value2": 1,
                    "conditions": {
                      "name": "Living State",
                      "state": "Mask_AliveOnly",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    }
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1974630244\">Enemy_W3_Dinosaur_01_Ability07_HitTag</a>",
                    "invertCondition": true
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1974630244\">Enemy_W3_Dinosaur_01_Ability07_HitTag</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1974630244\">Enemy_W3_Dinosaur_01_Ability07_HitTag</a>"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill07[0]]}) || RETURN",
                      "displayLines": "{[Skill07[0]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill07[0]]}"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK",
                    "EnergyGainPercent": "100%"
                  }
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill07[2]]}) || Variables[1] (MonsterAssistBuff_IF) || MUL || RETURN",
                      "displayLines": "({[Skill07[2]]} * MonsterAssistBuff_IF)",
                      "constants": [],
                      "variables": [
                        "{[Skill07[2]]}",
                        "MonsterAssistBuff_IF"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "Monster_W3_Dinosaur_01_Skill07_CurrentHitCount_i",
          "context": "TargetEntity",
          "value": 1,
          "max": 100
        }
      ]
    },
    "Trigger: Attack End",
    "Trigger: Ability End"
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1974630244\">Enemy_W3_Dinosaur_01_Ability07_HitTag</a>",
      "stackData": [],
      "latentQueue": [
        "Monster_W3_Dinosaur_01_Skill07_DeltaTime",
        "EffRandomYaw",
        "Monster_W3_Dinosaur_01_Skill07_CurrentHitCount_i_Eff_Loop"
      ]
    }
  ]
}