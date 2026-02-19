const compositeAbilityObject = {
  "fullCharacterName": 2022080,
  "trimCharacterName": 2022080,
  "abilityList": [
    "2022080_Monster_W2_Xuanlu_01_Ability01_Part02_RL",
    "2022080_Monster_W2_Xuanlu_01_Ability01_Part01_RL",
    "2022080_Monster_W2_Xuanlu_01_Ability01_Part02",
    "2022080_Monster_W2_Xuanlu_01_Ability01_Part01",
    "2022080_Monster_W2_Xuanlu_01_PassiveAbility_Effect",
    "2022080_Monster_W2_Xuanlu_02_AbilityP03_Part02_RL",
    "2022080_Monster_W2_Xuanlu_02_AbilityP03_Part01_RL",
    "2022080_Monster_W2_Xuanlu_02_Ability03_Part02_RL",
    "2022080_Monster_W2_Xuanlu_02_Ability03_Part01_RL",
    "2022080_Monster_W2_Xuanlu_02_AbilityP03_Part02",
    "2022080_Monster_W2_Xuanlu_02_AbilityP03_Part01",
    "2022080_Monster_W2_Xuanlu_02_Ability03_Part02",
    "2022080_Monster_W2_Xuanlu_02_Ability03_Part01",
    "2022080_Monster_W2_Xuanlu_02_Ability02_Part02_RL",
    "2022080_Monster_W2_Xuanlu_02_Ability02_Part01_RL",
    "2022080_Monster_W2_Xuanlu_02_Ability02_Part02",
    "2022080_Monster_W2_Xuanlu_02_Ability02_Part01",
    "2022080_Monster_W2_Xuanlu_02_Ability01_Part02",
    "2022080_Monster_W2_Xuanlu_02_Ability01_Part01",
    "2022080_Monster_W2_Xuanlu_02_PassiveAbility_Initiate"
  ],
  "abilityObject": {
    "2022080_Monster_W2_Xuanlu_01_Ability01_Part02_RL": {
      "fileName": "2022080_Monster_W2_Xuanlu_01_Ability01_Part02_RL",
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
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] (UnusedUnderThisBase_3) || RETURN",
              "displayLines": "UnusedUnderThisBase_3",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_3"
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1794338335\">Standard_CTRL_Crazy</a>[<span class=\"descriptionNumberColor\">Outrage</span>]",
          "duration": {
            "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
            "displayLines": "{[Skill01[1]]}",
            "constants": [],
            "variables": [
              "{[Skill01[1]]}"
            ]
          },
          "baseChance": 1
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-868837614\">Standard_DOT_Poison</a>[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
          "duration": {
            "operator": "Variables[0] (UnusedUnderThisBase_301) || RETURN",
            "displayLines": "UnusedUnderThisBase_301",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_301"
            ]
          },
          "baseChance": {
            "operator": "Variables[0] (UnusedUnderThisBase_302) || RETURN",
            "displayLines": "UnusedUnderThisBase_302",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_302"
            ]
          },
          "valuePerStack": {
            "Modifier_Poison_DamagePercentage": {
              "operator": "Variables[0] (UnusedUnderThisBase_300) || RETURN",
              "displayLines": "UnusedUnderThisBase_300",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_300"
              ]
            }
          },
          "stackFlag": "CharacterSkill"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "2022080_Monster_W2_Xuanlu_01_Ability01_Part01_RL": {
      "fileName": "2022080_Monster_W2_Xuanlu_01_Ability01_Part01_RL",
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
          "ability": "Monster_W2_Xuanlu_01_Ability01_Part02_RL",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "2022080_Monster_W2_Xuanlu_01_Ability01_Part02": {
      "fileName": "2022080_Monster_W2_Xuanlu_01_Ability01_Part02",
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
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] (UnusedUnderThisBase_3) || RETURN",
              "displayLines": "UnusedUnderThisBase_3",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_3"
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1794338335\">Standard_CTRL_Crazy</a>[<span class=\"descriptionNumberColor\">Outrage</span>]",
          "duration": {
            "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
            "displayLines": "{[Skill01[1]]}",
            "constants": [],
            "variables": [
              "{[Skill01[1]]}"
            ]
          },
          "baseChance": 1
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "2022080_Monster_W2_Xuanlu_01_Ability01_Part01": {
      "fileName": "2022080_Monster_W2_Xuanlu_01_Ability01_Part01",
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
          "ability": "Monster_W2_Xuanlu_01_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "2022080_Monster_W2_Xuanlu_01_PassiveAbility_Effect": {
      "fileName": "2022080_Monster_W2_Xuanlu_01_PassiveAbility_Effect",
      "skillTrigger": "Passive02",
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
          "modifier": "<a class=\"gModGreen\" id=\"-911926523\">Enemy_W2_Xuanlu_01_GroundEffect</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-911926523\">Enemy_W2_Xuanlu_01_GroundEffect</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "2022080_Monster_W2_Xuanlu_02_AbilityP03_Part02_RL": {
      "fileName": "2022080_Monster_W2_Xuanlu_02_AbilityP03_Part02_RL",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
                  "displayLines": "{[Skill03[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill03[0]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        {
          "name": "Shot Fired"
        },
        "Trigger: Attack End",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1935319413\">Standard_DOT_Electric</a>[<span class=\"descriptionNumberColor\">Shock</span>]",
          "duration": {
            "operator": "Variables[0] (UnusedUnderThisBase_304) || RETURN",
            "displayLines": "UnusedUnderThisBase_304",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_304"
            ]
          },
          "baseChance": {
            "operator": "Variables[0] (UnusedUnderThisBase_305) || RETURN",
            "displayLines": "UnusedUnderThisBase_305",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_305"
            ]
          },
          "valuePerStack": {
            "Modifier_Electric_DamagePercentage": {
              "operator": "Variables[0] (UnusedUnderThisBase_303) || RETURN",
              "displayLines": "UnusedUnderThisBase_303",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_303"
              ]
            }
          },
          "stackFlag": "CharacterSkill"
        }
      ],
      "references": []
    },
    "2022080_Monster_W2_Xuanlu_02_AbilityP03_Part01_RL": {
      "fileName": "2022080_Monster_W2_Xuanlu_02_AbilityP03_Part01_RL",
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
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "ability": "Monster_W2_Xuanlu_02_AbilityP03_Part02_RL",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "2022080_Monster_W2_Xuanlu_02_Ability03_Part02_RL": {
      "fileName": "2022080_Monster_W2_Xuanlu_02_Ability03_Part02_RL",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
                  "displayLines": "{[Skill03[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill03[0]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        {
          "name": "Shot Fired"
        },
        "Trigger: Attack End",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1935319413\">Standard_DOT_Electric</a>[<span class=\"descriptionNumberColor\">Shock</span>]",
          "duration": {
            "operator": "Variables[0] (UnusedUnderThisBase_304) || RETURN",
            "displayLines": "UnusedUnderThisBase_304",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_304"
            ]
          },
          "baseChance": {
            "operator": "Variables[0] (UnusedUnderThisBase_305) || RETURN",
            "displayLines": "UnusedUnderThisBase_305",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_305"
            ]
          },
          "valuePerStack": {
            "Modifier_Electric_DamagePercentage": {
              "operator": "Variables[0] (UnusedUnderThisBase_303) || RETURN",
              "displayLines": "UnusedUnderThisBase_303",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_303"
              ]
            }
          },
          "stackFlag": "CharacterSkill"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "2022080_Monster_W2_Xuanlu_02_Ability03_Part01_RL": {
      "fileName": "2022080_Monster_W2_Xuanlu_02_Ability03_Part01_RL",
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
          "ability": "Monster_W2_Xuanlu_02_Ability03_Part02_RL",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "2022080_Monster_W2_Xuanlu_02_AbilityP03_Part02": {
      "fileName": "2022080_Monster_W2_Xuanlu_02_AbilityP03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
                  "displayLines": "{[Skill03[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill03[0]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        {
          "name": "Shot Fired"
        },
        "Trigger: Attack End"
      ],
      "references": []
    },
    "2022080_Monster_W2_Xuanlu_02_AbilityP03_Part01": {
      "fileName": "2022080_Monster_W2_Xuanlu_02_AbilityP03_Part01",
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
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "ability": "Monster_W2_Xuanlu_02_AbilityP03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "2022080_Monster_W2_Xuanlu_02_Ability03_Part02": {
      "fileName": "2022080_Monster_W2_Xuanlu_02_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
                  "displayLines": "{[Skill03[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill03[0]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        {
          "name": "Shot Fired"
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "2022080_Monster_W2_Xuanlu_02_Ability03_Part01": {
      "fileName": "2022080_Monster_W2_Xuanlu_02_Ability03_Part01",
      "childAbilityList": [
        "2022080_Monster_W2_Xuanlu_02_Ability03_Part01",
        "2022080_Monster_W2_Xuanlu_02_Ability03_Part02",
        "2022080_Monster_W2_Xuanlu_02_Ability03_Camera",
        "2022080_Monster_W2_Xuanlu_02_AbilityP03_Part01",
        "2022080_Monster_W2_Xuanlu_02_AbilityP03_Part02",
        "2022080_Monster_W2_Xuanlu_02_AbilityP03_Camera"
      ],
      "skillTrigger": "Skill03",
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
          "ability": "Monster_W2_Xuanlu_02_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "2022080_Monster_W2_Xuanlu_02_Ability02_Part02_RL": {
      "fileName": "2022080_Monster_W2_Xuanlu_02_Ability02_Part02_RL",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1848268909\">Enemy_W2_Xuanlu_02_Counter_RL</a>[<span class=\"descriptionNumberColor\">Retaliation</span>]"
        },
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1848268909\">Enemy_W2_Xuanlu_02_Counter_RL</a>[<span class=\"descriptionNumberColor\">Retaliation</span>]",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "Turn End [Anyone]",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "CounterCheck",
                  "value": 1
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Being Attacked End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Player Team"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "CounterCheck",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "NOT",
                        "condition": {
                          "name": "Has Param Flag",
                          "flagName": "IsFakeAvatarAttack"
                        }
                      },
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Currency Wars Full OffFieldList}}"
                        },
                        "mustBeAlive2": true,
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "CounterCheck"
                    },
                    {
                      "name": "Inject Ability Use",
                      "checkOverride": {
                        "name": "Condition Priority",
                        "overridePriority": "MonsterForceKill",
                        "condition": {
                          "name": "Compare: Ability Value",
                          "target": {
                            "name": "Target Sequence",
                            "Sequence": [
                              {
                                "name": "Target Name",
                                "target": "{{Enemy Team All}}"
                              },
                              {
                                "name": "Target Filter",
                                "conditions": {
                                  "name": "Check Boolean Value",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "value": "MonsterType_Xuanlu"
                                }
                              }
                            ]
                          },
                          "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                          "compareType": "<=",
                          "value2": 0
                        }
                      },
                      "abilityName": "Monster_W2_Xuanlu_02_AbilityP03_Part01_RL",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "priorityTag": "MonsterInsertAttackSelf",
                      "showInActionOrder": true,
                      "abortFlags": [
                        "DisableAction",
                        "STAT_CTRL",
                        "Break"
                      ],
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "When attacked by an enemy, deals DMG to that enemy.",
          "type": "Buff",
          "effectName": "Counter",
          "statusName": "Retaliation"
        }
      ]
    },
    "2022080_Monster_W2_Xuanlu_02_Ability02_Part01_RL": {
      "fileName": "2022080_Monster_W2_Xuanlu_02_Ability02_Part01_RL",
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
          "ability": "Monster_W2_Xuanlu_02_Ability02_Part02_RL",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "2022080_Monster_W2_Xuanlu_02_Ability02_Part02": {
      "fileName": "2022080_Monster_W2_Xuanlu_02_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2090846144\">Enemy_W2_Xuanlu_02_Counter</a>[<span class=\"descriptionNumberColor\">Retaliation</span>]"
        },
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2090846144\">Enemy_W2_Xuanlu_02_Counter</a>[<span class=\"descriptionNumberColor\">Retaliation</span>]",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "Turn End [Anyone]",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "CounterCheck",
                  "value": 1
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Being Attacked End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Player Team"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "CounterCheck",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "NOT",
                        "condition": {
                          "name": "Has Param Flag",
                          "flagName": "IsFakeAvatarAttack"
                        }
                      },
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Currency Wars Full OffFieldList}}"
                        },
                        "mustBeAlive2": true,
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "CounterCheck"
                    },
                    {
                      "name": "Inject Ability Use",
                      "checkOverride": {
                        "name": "Condition Priority",
                        "overridePriority": "MonsterForceKill",
                        "condition": {
                          "name": "Compare: Ability Value",
                          "target": {
                            "name": "Target Sequence",
                            "Sequence": [
                              {
                                "name": "Target Name",
                                "target": "{{Enemy Team All}}"
                              },
                              {
                                "name": "Target Filter",
                                "conditions": {
                                  "name": "Check Boolean Value",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "value": "MonsterType_Xuanlu"
                                }
                              }
                            ]
                          },
                          "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                          "compareType": "<=",
                          "value2": 0
                        }
                      },
                      "abilityName": "Monster_W2_Xuanlu_02_AbilityP03_Part01",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "priorityTag": "MonsterInsertAttackSelf",
                      "showInActionOrder": true,
                      "abortFlags": [
                        "DisableAction",
                        "STAT_CTRL",
                        "Break"
                      ],
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "When attacked by an enemy, deals DMG to that enemy.",
          "type": "Buff",
          "effectName": "Counter",
          "statusName": "Retaliation"
        }
      ]
    },
    "2022080_Monster_W2_Xuanlu_02_Ability02_Part01": {
      "fileName": "2022080_Monster_W2_Xuanlu_02_Ability02_Part01",
      "childAbilityList": [
        "2022080_Monster_W2_Xuanlu_02_Ability02_Part01",
        "2022080_Monster_W2_Xuanlu_02_Ability02_Part02",
        "2022080_Monster_W2_Xuanlu_02_Ability02_Camera"
      ],
      "skillTrigger": "Skill02",
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
          "ability": "Monster_W2_Xuanlu_02_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "2022080_Monster_W2_Xuanlu_02_Ability01_Part02": {
      "fileName": "2022080_Monster_W2_Xuanlu_02_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-924806619\">Enemy_W2_Xuanlu_02_Bonus</a>[<span class=\"descriptionNumberColor\">Engender</span>]",
          "duration": {
            "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
            "displayLines": "{[Skill01[1]]}",
            "constants": [],
            "variables": [
              "{[Skill01[1]]}"
            ]
          },
          "valuePerStack": {
            "MDF_AttackAddedRatio_PerLayer": {
              "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
              "displayLines": "{[Skill01[0]]}",
              "constants": [],
              "variables": [
                "{[Skill01[0]]}"
              ]
            }
          }
        },
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-924806619\">Enemy_W2_Xuanlu_02_Bonus</a>[<span class=\"descriptionNumberColor\">Engender</span>]",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_AttackAddedRatio_PerLayer) || RETURN",
                    "displayLines": "MDF_AttackAddedRatio_PerLayer",
                    "constants": [],
                    "variables": [
                      "MDF_AttackAddedRatio_PerLayer"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_AttackAddedRatio_PerLayer"
          ],
          "latentQueue": [],
          "description": "Increases ATK.",
          "type": "Buff",
          "effectName": "ATK Boost",
          "statusName": "Engender"
        }
      ]
    },
    "2022080_Monster_W2_Xuanlu_02_Ability01_Part01": {
      "fileName": "2022080_Monster_W2_Xuanlu_02_Ability01_Part01",
      "childAbilityList": [
        "2022080_Monster_W2_Xuanlu_02_Ability01_Part01",
        "2022080_Monster_W2_Xuanlu_02_Ability01_Part02",
        "2022080_Monster_W2_Xuanlu_02_Ability01_Camera"
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
          "ability": "Monster_W2_Xuanlu_02_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "2022080_Monster_W2_Xuanlu_02_PassiveAbility_Initiate": {
      "fileName": "2022080_Monster_W2_Xuanlu_02_PassiveAbility_Initiate",
      "skillTrigger": "Passive",
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
          "modifier": "<a class=\"gModGreen\" id=\"-2115008485\">Enemy_W2_Xuanlu_02_Break</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2115008485\">Enemy_W2_Xuanlu_02_Break</a>",
          "execute": [
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2090846144\">Enemy_W2_Xuanlu_02_Counter</a>[<span class=\"descriptionNumberColor\">Retaliation</span>]"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AIFlag",
                  "value": 1
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    }
  }
}