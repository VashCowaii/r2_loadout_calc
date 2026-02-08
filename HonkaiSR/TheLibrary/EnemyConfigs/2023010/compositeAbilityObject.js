const compositeAbilityObject = {
  "fullCharacterName": 2023010,
  "trimCharacterName": 2023010,
  "abilityList": [
    "2023010_Monster_W2_Abomi04_Ability05_Part02",
    "2023010_Monster_W2_Abomi04_Ability05_Part01",
    "2023010_Monster_W2_Abomi04_Ability04_Part02",
    "2023010_Monster_W2_Abomi04_Ability04_Part01",
    "2023010_Monster_W2_Abomi04_Ability03_Part02",
    "2023010_Monster_W2_Abomi04_Ability03_Part01",
    "2023010_Monster_W2_Abomi04_Ability02_Part02",
    "2023010_Monster_W2_Abomi04_Ability02_Part01",
    "2023010_Monster_W2_Abomi04_Ability01_Part02",
    "2023010_Monster_W2_Abomi04_Ability01_Part01",
    "2023010_Monster_W2_Abomi04_PassiveAbility_Formation2",
    "2023010_Monster_W2_Abomi04_AbilityP01_Insert",
    "2023010_Monster_W2_Abomi04_AbilityP01",
    "2023010_Monster_W2_Abomi04_PassiveAbilityInitiate",
    "2023010_Monster_W2_Abomi04_PassiveAbility_DanHeng",
    "2023010_Modifiers"
  ],
  "abilityObject": {
    "2023010_Monster_W2_Abomi04_Ability05_Part02": {
      "fileName": "2023010_Monster_W2_Abomi04_Ability05_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"125847833\">Monster_W2_Abomi04_Command</a>"
        },
        "Ability Start",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-488885736\">Monster_W2_Abomi04_Attack_Sign</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{All Team Members(Exclude Self)}}"
                },
                "value1": "TeamCharacterCount",
                "compareType": "<=",
                "value2": 3
              },
              {
                "name": "Compare: Target Count SUM",
                "target": {
                  "name": "Target Name",
                  "target": "{{All Team Members(Exclude Self)}}"
                },
                "conditions": {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1533376830\">Monster_W2_Abomi01_Revive</a>[<span class=\"descriptionNumberColor\">Rebirth</span>]"
                }
              }
            ]
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-98608309\">Enemy_W2_Abomi04_HitToHeal_Effect</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{All Team Members(Exclude Self)}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": "<=",
            "value2": 3
          },
          "passed": [
            {
              "name": "Consume",
              "consumeFrom": "MaxHP",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "consumePercent": {
                "operator": "Variables[0] (UnusedUnderThisBase_45) || RETURN",
                "displayLines": "UnusedUnderThisBase_45",
                "constants": [],
                "variables": [
                  "UnusedUnderThisBase_45"
                ]
              },
              "consumeFloor": 1
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "team": "Enemy Team",
                "location": "Left"
              },
              "passed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": {
                    "operator": "Variables[0] (UnusedUnderThisBase_41) || RETURN",
                    "displayLines": "UnusedUnderThisBase_41",
                    "constants": [],
                    "variables": [
                      "UnusedUnderThisBase_41"
                    ]
                  },
                  "refreshPositions": false,
                  "enemyList": [
                    {
                      "name": "Create Enemy from Custom",
                      "value": "W2_Abomi04_00_SummonID",
                      "summonLocation": "First"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": {
                    "operator": "Variables[0] (UnusedUnderThisBase_41) || RETURN",
                    "displayLines": "UnusedUnderThisBase_41",
                    "constants": [],
                    "variables": [
                      "UnusedUnderThisBase_41"
                    ]
                  },
                  "refreshPositions": false,
                  "enemyList": [
                    {
                      "name": "Create Enemy from Custom",
                      "value": "W2_Abomi04_00_SummonID",
                      "summonLocation": "Last"
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
            "target": {
              "name": "Target Name",
              "target": "{{All Team Members(Exclude Self)}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": "<=",
            "value2": 3
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "team": "Enemy Team",
                "location": "Right"
              },
              "passed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": {
                    "operator": "Variables[0] (UnusedUnderThisBase_42) || RETURN",
                    "displayLines": "UnusedUnderThisBase_42",
                    "constants": [],
                    "variables": [
                      "UnusedUnderThisBase_42"
                    ]
                  },
                  "refreshPositions": false,
                  "enemyList": [
                    {
                      "name": "Create Enemy from Custom",
                      "value": "W2_Abomi04_00_SummonID",
                      "summonLocation": "Last"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": {
                    "operator": "Variables[0] (UnusedUnderThisBase_42) || RETURN",
                    "displayLines": "UnusedUnderThisBase_42",
                    "constants": [],
                    "variables": [
                      "UnusedUnderThisBase_42"
                    ]
                  },
                  "refreshPositions": false,
                  "enemyList": [
                    {
                      "name": "Create Enemy from Custom",
                      "value": "W2_Abomi04_00_SummonID",
                      "summonLocation": "First"
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
            "target": {
              "name": "Target Name",
              "target": "{{All Team Members(Exclude Self)}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": "<=",
            "value2": 3
          },
          "passed": [
            {
              "name": "Consume",
              "consumeFrom": "MaxHP",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "consumePercent": {
                "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                "displayLines": "{[Skill04[0]]}",
                "constants": [],
                "variables": [
                  "{[Skill04[0]]}"
                ]
              },
              "consumeFloor": 1
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "team": "Enemy Team",
                "location": "Left"
              },
              "passed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": {
                    "operator": "Variables[0] (UnusedUnderThisBase_43) || RETURN",
                    "displayLines": "UnusedUnderThisBase_43",
                    "constants": [],
                    "variables": [
                      "UnusedUnderThisBase_43"
                    ]
                  },
                  "refreshPositions": false,
                  "enemyList": [
                    {
                      "name": "Create Enemy from Custom",
                      "value": "W2_Abomi04_00_SummonID2",
                      "summonLocation": "First"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": {
                    "operator": "Variables[0] (UnusedUnderThisBase_43) || RETURN",
                    "displayLines": "UnusedUnderThisBase_43",
                    "constants": [],
                    "variables": [
                      "UnusedUnderThisBase_43"
                    ]
                  },
                  "refreshPositions": false,
                  "enemyList": [
                    {
                      "name": "Create Enemy from Custom",
                      "value": "W2_Abomi04_00_SummonID2",
                      "summonLocation": "Last"
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
            "target": {
              "name": "Target Name",
              "target": "{{All Team Members(Exclude Self)}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": "<=",
            "value2": 3
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "team": "Enemy Team",
                "location": "Right"
              },
              "passed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": {
                    "operator": "Variables[0] (UnusedUnderThisBase_44) || RETURN",
                    "displayLines": "UnusedUnderThisBase_44",
                    "constants": [],
                    "variables": [
                      "UnusedUnderThisBase_44"
                    ]
                  },
                  "refreshPositions": false,
                  "enemyList": [
                    {
                      "name": "Create Enemy from Custom",
                      "value": "W2_Abomi04_00_SummonID2",
                      "summonLocation": "Last"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": {
                    "operator": "Variables[0] (UnusedUnderThisBase_44) || RETURN",
                    "displayLines": "UnusedUnderThisBase_44",
                    "constants": [],
                    "variables": [
                      "UnusedUnderThisBase_44"
                    ]
                  },
                  "refreshPositions": false,
                  "enemyList": [
                    {
                      "name": "Create Enemy from Custom",
                      "value": "W2_Abomi04_00_SummonID2",
                      "summonLocation": "First"
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
            "name": "Compare: Target Count SUM",
            "target": {
              "name": "Target Name",
              "target": "{{All Team Members(Exclude Self)}}"
            },
            "conditions": {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1533376830\">Monster_W2_Abomi01_Revive</a>[<span class=\"descriptionNumberColor\">Rebirth</span>]"
            }
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-301445203\">Enemy_W2_Abomi04_HitToHeal</a>[<span class=\"descriptionNumberColor\">Draining Hit</span>]"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-453804030\">Enemy_W2_Abomi04_SummonedMinions</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-488885736\">Monster_W2_Abomi04_Attack_Sign</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
          "duration": 2
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "2023010_Monster_W2_Abomi04_Ability05_Part01": {
      "fileName": "2023010_Monster_W2_Abomi04_Ability05_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W2_Abomi04_Ability05_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "2023010_Monster_W2_Abomi04_Ability04_Part02": {
      "fileName": "2023010_Monster_W2_Abomi04_Ability04_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{All Team Members(Exclude Self)}}"
                },
                "value1": "TeamCharacterCount",
                "compareType": "<=",
                "value2": 3
              },
              {
                "name": "Compare: Target Count SUM",
                "target": {
                  "name": "Target Name",
                  "target": "{{All Team Members(Exclude Self)}}"
                },
                "conditions": {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1533376830\">Monster_W2_Abomi01_Revive</a>[<span class=\"descriptionNumberColor\">Rebirth</span>]"
                }
              }
            ]
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-98608309\">Enemy_W2_Abomi04_HitToHeal_Effect</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{All Team Members(Exclude Self)}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": "<=",
            "value2": 3
          },
          "passed": [
            {
              "name": "Consume",
              "consumeFrom": "MaxHP",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "consumePercent": {
                "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                "displayLines": "{[Skill04[0]]}",
                "constants": [],
                "variables": [
                  "{[Skill04[0]]}"
                ]
              },
              "consumeFloor": 1
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "team": "Enemy Team",
                "location": "Left"
              },
              "passed": [
                {
                  "name": "Create Enemies",
                  "refreshPositions": false,
                  "enemyList": [
                    {
                      "name": "Create Enemy from Custom",
                      "value": "W2_Abomi04_00_SummonID",
                      "summonLocation": "First"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Create Enemies",
                  "refreshPositions": false,
                  "enemyList": [
                    {
                      "name": "Create Enemy from Custom",
                      "value": "W2_Abomi04_00_SummonID",
                      "summonLocation": "Last"
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
            "target": {
              "name": "Target Name",
              "target": "{{All Team Members(Exclude Self)}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": "<=",
            "value2": 3
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "team": "Enemy Team",
                "location": "Right"
              },
              "passed": [
                {
                  "name": "Create Enemies",
                  "refreshPositions": false,
                  "enemyList": [
                    {
                      "name": "Create Enemy from Custom",
                      "value": "W2_Abomi04_00_SummonID",
                      "summonLocation": "Last"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Create Enemies",
                  "refreshPositions": false,
                  "enemyList": [
                    {
                      "name": "Create Enemy from Custom",
                      "value": "W2_Abomi04_00_SummonID",
                      "summonLocation": "First"
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
            "name": "Compare: Target Count SUM",
            "target": {
              "name": "Target Name",
              "target": "{{All Team Members(Exclude Self)}}"
            },
            "conditions": {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1533376830\">Monster_W2_Abomi01_Revive</a>[<span class=\"descriptionNumberColor\">Rebirth</span>]"
            }
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-301445203\">Enemy_W2_Abomi04_HitToHeal</a>[<span class=\"descriptionNumberColor\">Draining Hit</span>]"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-453804030\">Enemy_W2_Abomi04_SummonedMinions</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "2023010_Monster_W2_Abomi04_Ability04_Part01": {
      "fileName": "2023010_Monster_W2_Abomi04_Ability04_Part01",
      "childAbilityList": [
        "2023010_Monster_W2_Abomi04_Ability04_Camera",
        "2023010_Monster_W2_Abomi04_Ability04_Part01",
        "2023010_Monster_W2_Abomi04_Ability04_Part02"
      ],
      "skillTrigger": "Skill04",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W2_Abomi04_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "2023010_Monster_W2_Abomi04_Ability03_Part02": {
      "fileName": "2023010_Monster_W2_Abomi04_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Shot Fired"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] ({[Skill03[0]]}) || Constants[0] (0.1) || MUL || RETURN",
              "displayLines": "({[Skill03[0]]} * 0.1)",
              "constants": [
                0.1
              ],
              "variables": [
                "{[Skill03[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "10%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] ({[Skill03[0]]}) || Constants[0] (0.1) || MUL || RETURN",
              "displayLines": "({[Skill03[0]]} * 0.1)",
              "constants": [
                0.1
              ],
              "variables": [
                "{[Skill03[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "10%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] ({[Skill03[0]]}) || Constants[0] (0.1) || MUL || RETURN",
              "displayLines": "({[Skill03[0]]} * 0.1)",
              "constants": [
                0.1
              ],
              "variables": [
                "{[Skill03[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "10%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] ({[Skill03[0]]}) || Constants[0] (0.1) || MUL || RETURN",
              "displayLines": "({[Skill03[0]]} * 0.1)",
              "constants": [
                0.1
              ],
              "variables": [
                "{[Skill03[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "10%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] ({[Skill03[0]]}) || Constants[0] (0.1) || MUL || RETURN",
              "displayLines": "({[Skill03[0]]} * 0.1)",
              "constants": [
                0.1
              ],
              "variables": [
                "{[Skill03[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "10%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] ({[Skill03[0]]}) || Constants[0] (0.1) || MUL || RETURN",
              "displayLines": "({[Skill03[0]]} * 0.1)",
              "constants": [
                0.1
              ],
              "variables": [
                "{[Skill03[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "10%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] ({[Skill03[0]]}) || Constants[0] (0.1) || MUL || RETURN",
              "displayLines": "({[Skill03[0]]} * 0.1)",
              "constants": [
                0.1
              ],
              "variables": [
                "{[Skill03[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "10%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] ({[Skill03[0]]}) || Constants[0] (0.3) || MUL || RETURN",
              "displayLines": "({[Skill03[0]]} * 0.3)",
              "constants": [
                0.3
              ],
              "variables": [
                "{[Skill03[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "30%"
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
            "modifier": "<a class=\"gModGreen\" id=\"-301445203\">Enemy_W2_Abomi04_HitToHeal</a>[<span class=\"descriptionNumberColor\">Draining Hit</span>]"
          }
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "2023010_Monster_W2_Abomi04_Ability03_Part01": {
      "fileName": "2023010_Monster_W2_Abomi04_Ability03_Part01",
      "childAbilityList": [
        "2023010_Monster_W2_Abomi04_Ability03_Camera",
        "2023010_Monster_W2_Abomi04_Ability03_Part01",
        "2023010_Monster_W2_Abomi04_Ability03_Part02"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W2_Abomi04_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "2023010_Monster_W2_Abomi04_Ability02_Part02": {
      "fileName": "2023010_Monster_W2_Abomi04_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
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
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
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
        "Trigger: Ability End"
      ],
      "references": []
    },
    "2023010_Monster_W2_Abomi04_Ability02_Part01": {
      "fileName": "2023010_Monster_W2_Abomi04_Ability02_Part01",
      "childAbilityList": [
        "2023010_Monster_W2_Abomi04_Ability02_Camera",
        "2023010_Monster_W2_Abomi04_Ability02_Part01",
        "2023010_Monster_W2_Abomi04_Ability02_Part02"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W2_Abomi04_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "2023010_Monster_W2_Abomi04_Ability01_Part02": {
      "fileName": "2023010_Monster_W2_Abomi04_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
              "displayLines": "{[Skill01[0]]}",
              "constants": [],
              "variables": [
                "{[Skill01[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "2023010_Monster_W2_Abomi04_Ability01_Part01": {
      "fileName": "2023010_Monster_W2_Abomi04_Ability01_Part01",
      "childAbilityList": [
        "2023010_Monster_W2_Abomi04_Ability01_Camera",
        "2023010_Monster_W2_Abomi04_Ability01_Part01",
        "2023010_Monster_W2_Abomi04_Ability01_Part02"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W2_Abomi04_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "2023010_Monster_W2_Abomi04_PassiveAbility_Formation2": {
      "fileName": "2023010_Monster_W2_Abomi04_PassiveAbility_Formation2",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-502774281\">Enemy_W2_Abomi04_PassiveAbility_Formation2</a>"
        }
      ],
      "references": []
    },
    "2023010_Monster_W2_Abomi04_AbilityP01_Insert": {
      "fileName": "2023010_Monster_W2_Abomi04_AbilityP01_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-301445203\">Enemy_W2_Abomi04_HitToHeal</a>[<span class=\"descriptionNumberColor\">Draining Hit</span>]"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "scope": "TargetEntity",
          "variableName": "W2_Abomi04_00_InsertFlag"
        }
      ],
      "references": []
    },
    "2023010_Monster_W2_Abomi04_AbilityP01": {
      "fileName": "2023010_Monster_W2_Abomi04_AbilityP01",
      "childAbilityList": [
        "2023010_Monster_W2_Abomi04_AbilityP01",
        "2023010_Monster_W2_Abomi04_AbilityP01_Insert"
      ],
      "skillTrigger": "SkillP01",
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
          "modifier": "<a class=\"gModGreen\" id=\"378580326\">Enemy_W2_Abomi04_HitToHeal_Controller</a>"
        }
      ],
      "references": []
    },
    "2023010_Monster_W2_Abomi04_PassiveAbilityInitiate": {
      "fileName": "2023010_Monster_W2_Abomi04_PassiveAbilityInitiate",
      "skillTrigger": "PassiveSkillInitiate",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "W2_Abomi04_00_AICounter",
          "value": 1
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1019940220\">Enemy_Standard_HideMonsterHUD</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1166907060\">Enemy_Standard_MuteHitFly</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
        }
      ],
      "references": []
    },
    "2023010_Monster_W2_Abomi04_PassiveAbility_DanHeng": {
      "fileName": "2023010_Monster_W2_Abomi04_PassiveAbility_DanHeng",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1529984302\">Monster_W2_Abomi04_PassiveAbility_DanHeng</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1529984302\">Monster_W2_Abomi04_PassiveAbility_DanHeng</a>",
          "execute": [
            {
              "eventTrigger": "Got a Kill [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "2023010_Modifiers": {
      "fileName": "2023010_Modifiers",
      "abilityType": "Char. Modifiers",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-502774281\">Enemy_W2_Abomi04_PassiveAbility_Formation2</a>",
          "execute": [
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Related Summoned Entity",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Assign Target Battle-Location",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "row": 1
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-488885736\">Monster_W2_Abomi04_Attack_Sign</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
          "modifierFlags": [
            "TeamAction",
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "All enemies will focus attacks on this target.",
          "type": "Other",
          "effectName": "Lock On",
          "statusName": "Lock On"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__125847833\">Monster_W2_Abomi04_Command</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Team Action",
                  "conditionsActor": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team"
                      }
                    ]
                  },
                  "conditionsTarget": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-488885736\">Monster_W2_Abomi04_Attack_Sign</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
                  },
                  "abilityName": "Abomi04Command"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-453804030\">Enemy_W2_Abomi04_SummonedMinions</a>",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-98608309\">Enemy_W2_Abomi04_HitToHeal_Effect</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "flagName": "STAT_CTRL_Frozen"
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-301445203\">Enemy_W2_Abomi04_HitToHeal</a>[<span class=\"descriptionNumberColor\">Draining Hit</span>]",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-98608309\">Enemy_W2_Abomi04_HitToHeal_Effect</a>"
                }
              ]
            },
            {
              "eventTrigger": "Deal Damage End [Owner]: Hit",
              "execute": [
                {
                  "name": "Heal",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "healPercent": {
                    "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
                    "displayLines": "{[SkillP01[0]]}",
                    "constants": [],
                    "variables": [
                      "{[SkillP01[0]]}"
                    ]
                  },
                  "formula": "Heal from Target MaxHP"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "When there are other enemy targets with \"Rebirth\" remaining on the field, Disciples of Sanctus Medicus: Shape Shifter will have the following effect — restores its HP when its attack hits.",
          "type": "Buff",
          "effectName": "Draining Hit",
          "statusName": "Draining Hit"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__378580326\">Enemy_W2_Abomi04_HitToHeal_Controller</a>",
          "modifierFlags": [
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "W2_Abomi04_00_InsertFlag"
                }
              ]
            },
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1500255012\">TaskList_W2_Abomi04_HitToHeal_Controller_OnDieOrEscape</a>"
                }
              ]
            },
            {
              "eventTrigger": "Entity Left Battle [Anyone]",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1500255012\">TaskList_W2_Abomi04_HitToHeal_Controller_OnDieOrEscape</a>"
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]"
            },
            {
              "eventTrigger": "Ability Use [Anyone]: End",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1500255012\">TaskList_W2_Abomi04_HitToHeal_Controller_OnDieOrEscape</a>"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Anyone]"
            },
            {
              "eventTrigger": "When Losing Modifier [Anyone]",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1500255012\">TaskList_W2_Abomi04_HitToHeal_Controller_OnDieOrEscape</a>"
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__1500255012\">TaskList_W2_Abomi04_HitToHeal_Controller_OnDieOrEscape</a>",
              "parse": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "W2_Abomi04_00_InsertFlag",
                        "compareType": "=",
                        "value2": 0,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-301445203\">Enemy_W2_Abomi04_HitToHeal</a>[<span class=\"descriptionNumberColor\">Draining Hit</span>]"
                      },
                      {
                        "name": "Compare: Target Count SUM",
                        "target": {
                          "name": "Target Name",
                          "target": "{{All Team Members(Exclude Self)}}"
                        },
                        "conditions": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1533376830\">Monster_W2_Abomi01_Revive</a>[<span class=\"descriptionNumberColor\">Rebirth</span>]"
                        },
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "W2_Abomi04_00_InsertFlag",
                      "value": 1
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W2_Abomi04_AbilityP01_Insert",
                      "priorityTag": "MonsterChangeState",
                      "canHitNonTargets": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "references": []
    }
  }
}