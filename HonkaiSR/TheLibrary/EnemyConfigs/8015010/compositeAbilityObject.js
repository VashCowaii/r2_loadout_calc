const compositeAbilityObject = {
  "fullCharacterName": 8015010,
  "trimCharacterName": 8015010,
  "abilityList": [
    "8015010_Monster_AML_Boss_Insert02_Part02",
    "8015010_Monster_AML_Boss_Insert02_Part01",
    "8015010_Monster_AML_Boss_Insert_Part02",
    "8015010_Monster_AML_Boss_Insert_Part01",
    "8015010_Monster_AML_Boss_Passive03",
    "8015010_Monster_AML_Boss_Passive02",
    "8015010_Monster_AML_Boss_Passive01",
    "8015010_Monster_AML_Boss_Ability12_Part02",
    "8015010_Monster_AML_Boss_Ability12_Part01",
    "8015010_Monster_AML_Boss_Ability11_Part02",
    "8015010_Monster_AML_Boss_Ability11_Part01",
    "8015010_Monster_AML_Boss_Ability10_Part02",
    "8015010_Monster_AML_Boss_Ability10_Part01",
    "8015010_Monster_AML_Boss_Ability09_Part02",
    "8015010_Monster_AML_Boss_Ability09_Part01",
    "8015010_Monster_AML_Boss_Ability08_Part02",
    "8015010_Monster_AML_Boss_Ability08_Part01",
    "8015010_Monster_AML_Boss_Ability07_Part02",
    "8015010_Monster_AML_Boss_Ability07_Part01",
    "8015010_Monster_AML_Boss_Ability06_Part02",
    "8015010_Monster_AML_Boss_Ability06_Part01",
    "8015010_Monster_AML_Boss_Ability05_Part02",
    "8015010_Monster_AML_Boss_Ability05_Part01",
    "8015010_Monster_AML_Boss_Ability04_Part02",
    "8015010_Monster_AML_Boss_Ability04_Part01",
    "8015010_Monster_AML_Boss_Ability03_Part02",
    "8015010_Monster_AML_Boss_Ability03_Part01",
    "8015010_Monster_AML_Boss_Ability02_Part02",
    "8015010_Monster_AML_Boss_Ability02_Part01",
    "8015010_Monster_AML_Boss_Ability01_Part02",
    "8015010_Monster_AML_Boss_Ability01_Part01",
    "8015010_Monster_AML_Boss_Die_Camera",
    "8015010_Modifiers"
  ],
  "abilityObject": {
    "8015010_Monster_AML_Boss_Insert02_Part02": {
      "fileName": "8015010_Monster_AML_Boss_Insert02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_WMonster_W0_Boss_Unselectable[<span class=\"descriptionNumberColor\">Vestige Valor</span>]"
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
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "ListenAllDieController"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_AML_Boss_HitEffect"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Enemy_WMonster_W0_Boss_CharacterAdded",
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
                    "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                    "displayLines": "MDF_PropertyValue",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_WMonster_W0_Boss_NoSpeed",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;",
                  "value": 0
                }
              ]
            }
          ]
        }
      ]
    },
    "8015010_Monster_AML_Boss_Insert02_Part01": {
      "fileName": "8015010_Monster_AML_Boss_Insert02_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_AML_Boss_Insert02_Part02",
          "isTrigger": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_IsWeeklyBoss",
            "compareType": "=",
            "value2": 1,
            "contextScope": "TargetEntity"
          },
          "passed": [
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "phase": "Phase2"
            }
          ],
          "failed": [
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "phase": "Phase2"
            }
          ]
        },
        {
          "name": "Set Mapping Point",
          "point": "Origin",
          "mapTo": "HeadOrigin"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_AML_Boss_DamageTakenUp",
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] ({[PassiveSkill02[0]]}) || RETURN",
              "displayLines": "{[PassiveSkill02[0]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill02[0]]}"
              ]
            }
          }
        }
      ],
      "references": []
    },
    "8015010_Monster_AML_Boss_Insert_Part02": {
      "fileName": "8015010_Monster_AML_Boss_Insert_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_AML_Boss_HitEffect"
        },
        {
          "name": "Boss Bar Display",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "display": false
        },
        {
          "name": "Set Enemy Phase",
          "phase": 2
        },
        {
          "name": "Create Enemy as Body Part",
          "partName": "R_Hand",
          "value": {
            "operator": "Variables[0] (PartEntity1_MonsterID) || RETURN",
            "displayLines": "PartEntity1_MonsterID",
            "constants": [],
            "variables": [
              "PartEntity1_MonsterID"
            ]
          },
          "offset": -3
        },
        {
          "name": "Create Enemy as Body Part",
          "partName": "Middle",
          "value": {
            "operator": "Variables[0] (PartEntity2_MonsterID) || RETURN",
            "displayLines": "PartEntity2_MonsterID",
            "constants": [],
            "variables": [
              "PartEntity2_MonsterID"
            ]
          },
          "offset": -2,
          "type": 2
        },
        {
          "name": "Create Enemy as Body Part",
          "partName": "L_Hand",
          "value": {
            "operator": "Variables[0] (PartEntity3_MonsterID) || RETURN",
            "displayLines": "PartEntity3_MonsterID",
            "constants": [],
            "variables": [
              "PartEntity3_MonsterID"
            ]
          },
          "offset": -1,
          "type": 3
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Target Part 2}}"
          },
          "multiBase": 0
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Target Part 1}}"
          },
          "modifier": "Enemy_WMonster_W0_Boss_Sign_Part1"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Target Part 2}}"
          },
          "modifier": "Enemy_WMonster_W0_Boss_Sign_Part2"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Target Part 3}}"
          },
          "modifier": "Enemy_WMonster_W0_Boss_Sign_Part3"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_WMonster_W0_Boss_Unselectable[<span class=\"descriptionNumberColor\">Vestige Valor</span>]"
        }
      ],
      "references": []
    },
    "8015010_Monster_AML_Boss_Insert_Part01": {
      "fileName": "8015010_Monster_AML_Boss_Insert_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Set Mapping Point",
          "point": "Origin",
          "reset": true
        },
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "silent": true
        },
        {
          "name": "Animation Event",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "state": "Skill_Insert",
          "passed": [
            {
              "name": "Animation Task"
            },
            {
              "name": "Animation Task"
            },
            {
              "name": "Animation Task",
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Enemy_AML_Boss_HitEffect"
                }
              ]
            },
            {
              "name": "Animation Task"
            },
            {
              "name": "Animation Task"
            },
            {
              "name": "Animation Task",
              "passed": [
                {
                  "name": "Create Enemy as Body Part",
                  "partName": "R_Hand",
                  "value": {
                    "operator": "Variables[0] (PartEntity1_MonsterID) || RETURN",
                    "displayLines": "PartEntity1_MonsterID",
                    "constants": [],
                    "variables": [
                      "PartEntity1_MonsterID"
                    ]
                  },
                  "offset": -3
                },
                {
                  "name": "Create Enemy as Body Part",
                  "partName": "Middle",
                  "value": {
                    "operator": "Variables[0] (PartEntity2_MonsterID) || RETURN",
                    "displayLines": "PartEntity2_MonsterID",
                    "constants": [],
                    "variables": [
                      "PartEntity2_MonsterID"
                    ]
                  },
                  "offset": -2,
                  "type": 2
                },
                {
                  "name": "Create Enemy as Body Part",
                  "partName": "L_Hand",
                  "value": {
                    "operator": "Variables[0] (PartEntity3_MonsterID) || RETURN",
                    "displayLines": "PartEntity3_MonsterID",
                    "constants": [],
                    "variables": [
                      "PartEntity3_MonsterID"
                    ]
                  },
                  "offset": -1,
                  "type": 3
                },
                {
                  "name": "Action Advance/Delay",
                  "advanceType": "Set",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Target Part 2}}"
                  },
                  "multiBase": 0
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Target Part 1}}"
                  },
                  "modifier": "Enemy_WMonster_W0_Boss_Sign_Part1"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Target Part 2}}"
                  },
                  "modifier": "Enemy_WMonster_W0_Boss_Sign_Part2"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Target Part 3}}"
                  },
                  "modifier": "Enemy_WMonster_W0_Boss_Sign_Part3"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Enemy_WMonster_W0_Boss_Unselectable[<span class=\"descriptionNumberColor\">Vestige Valor</span>]"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Monster_ChangePhase"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Enemy_WMonster_W0_Boss_LockHP_1"
                }
              ]
            },
            {
              "name": "Animation Task"
            }
          ]
        },
        {
          "name": "Set Enemy Phase",
          "target": {
            "name": "Target Name",
            "target": "{{Target Part 1}}"
          },
          "phase": 2
        },
        {
          "name": "Set Enemy Phase",
          "target": {
            "name": "Target Name",
            "target": "{{Target Part 2}}"
          },
          "phase": 2
        },
        {
          "name": "Set Enemy Phase",
          "target": {
            "name": "Target Name",
            "target": "{{Target Part 3}}"
          },
          "phase": 2
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_AML_Boss_DamageTakenUp"
        },
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase0"
        },
        {
          "name": "Boss Bar Display",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "display": false
        }
      ],
      "references": []
    },
    "8015010_Monster_AML_Boss_Passive03": {
      "fileName": "8015010_Monster_AML_Boss_Passive03",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "8015010_Monster_AML_Boss_Passive02": {
      "fileName": "8015010_Monster_AML_Boss_Passive02",
      "childAbilityList": [
        "8015010_Monster_AML_Boss_Passive02"
      ],
      "skillTrigger": "PassiveSkill02",
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
          "modifier": "Enemy_WMonster_W0_Boss_Unselectable[<span class=\"descriptionNumberColor\">Vestige Valor</span>]"
        },
        {
          "name": "Assign Unique Name",
          "uniqueName": "AML_Boss_00",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_IsWeeklyBoss",
            "compareType": "=",
            "value2": 1,
            "contextScope": "TargetEntity"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Enemy_WMonster_W0_Boss_LockHP_1"
            }
          ],
          "failed": [
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "phase": "Phase_SpecialDieEffect"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_WMonster_W0_Boss_ListenAllPartDie"
        }
      ],
      "references": []
    },
    "8015010_Monster_AML_Boss_Passive01": {
      "fileName": "8015010_Monster_AML_Boss_Passive01",
      "childAbilityList": [
        "8015010_Monster_AML_Boss_Passive01",
        "8015010_Monster_AML_Boss_Insert_Part01",
        "8015010_Monster_AML_Boss_Insert_Part02",
        "8015010_Monster_AML_Boss_Ability01_Camera",
        "8015010_Monster_AML_Boss_Insert02_Part01",
        "8015010_Monster_AML_Boss_Insert02_Part02",
        "8015010_Monster_AML_Boss_Ability02_Camera"
      ],
      "skillTrigger": "PassiveSkill01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Set Enemy Phase"
        },
        {
          "name": "Create Enemy as Body Part",
          "partName": "R_Hand",
          "value": {
            "operator": "Variables[0] (PartEntity1_MonsterID) || RETURN",
            "displayLines": "PartEntity1_MonsterID",
            "constants": [],
            "variables": [
              "PartEntity1_MonsterID"
            ]
          },
          "offset": -3
        },
        {
          "name": "Create Enemy as Body Part",
          "partName": "Middle",
          "value": {
            "operator": "Variables[0] (PartEntity2_MonsterID) || RETURN",
            "displayLines": "PartEntity2_MonsterID",
            "constants": [],
            "variables": [
              "PartEntity2_MonsterID"
            ]
          },
          "offset": -2,
          "type": 2
        },
        {
          "name": "Create Enemy as Body Part",
          "partName": "L_Hand",
          "value": {
            "operator": "Variables[0] (PartEntity3_MonsterID) || RETURN",
            "displayLines": "PartEntity3_MonsterID",
            "constants": [],
            "variables": [
              "PartEntity3_MonsterID"
            ]
          },
          "offset": -1,
          "type": 3
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_AML_Boss_ChangeWeakness"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Target Part 1}}"
          },
          "modifier": "Enemy_WMonster_W0_Boss_Sign_Part1"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Target Part 2}}"
          },
          "modifier": "Enemy_WMonster_W0_Boss_Sign_Part2"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Target Part 3}}"
          },
          "modifier": "Enemy_WMonster_W0_Boss_Sign_Part3"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_AML_Boss_LockActionDelay"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Enemy_AML_Boss_LockActionDelay",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Block Advance/Delay Effects",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "whitelist": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "whitelistTag": "Mask_TurnBasedAdvance"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_AML_Boss_ChangeWeakness",
          "modifierFlags": [
            "MuteHitH",
            "MuteAttachWeakness"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueList": []
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "8015010_Monster_AML_Boss_Ability12_Part02": {
      "fileName": "8015010_Monster_AML_Boss_Ability12_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Looped Event",
          "maxLoops": 4,
          "Event": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Constants[0] (1) || Constants[1] (0.125) || MUL || RETURN",
                  "displayLines": "(1 * 0.125)",
                  "constants": [
                    1,
                    0.125
                  ],
                  "variables": []
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "12.5%"
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "AttackScaling": {
                "DamageType": "Imaginary",
                "Damage": {
                  "operator": "Constants[0] (1) || Constants[1] (0.125) || MUL || RETURN",
                  "displayLines": "(1 * 0.125)",
                  "constants": [
                    1,
                    0.125
                  ],
                  "variables": []
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "12.5%"
              }
            }
          ]
        },
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase0"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_W0_Boss_Part2_Ability11_Modifier"
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8015010_Monster_AML_Boss_Ability12_Part01": {
      "fileName": "8015010_Monster_AML_Boss_Ability12_Part01",
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
          "ability": "Monster_AML_Boss_Ability12_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8015010_Monster_AML_Boss_Ability11_Part02": {
      "fileName": "8015010_Monster_AML_Boss_Ability11_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_W0_Boss_Part2_Ability11_Modifier",
          "valuePerStack": {
            "MDF_AttackAddedRatio": 1
          }
        },
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase1"
        },
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Target Part 3}}"
          },
          "phase": "Phase1"
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8015010_Monster_AML_Boss_Ability11_Part01": {
      "fileName": "8015010_Monster_AML_Boss_Ability11_Part01",
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
          "ability": "Monster_AML_Boss_Ability11_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8015010_Monster_AML_Boss_Ability10_Part02": {
      "fileName": "8015010_Monster_AML_Boss_Ability10_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Looped Event",
          "maxLoops": 2,
          "Event": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Constants[0] (1) || Constants[1] (0.25) || MUL || RETURN",
                  "displayLines": "(1 * 0.25)",
                  "constants": [
                    1,
                    0.25
                  ],
                  "variables": []
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "25%"
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Imaginary",
                "Damage": {
                  "operator": "Constants[0] (1) || Constants[1] (0.25) || MUL || RETURN",
                  "displayLines": "(1 * 0.25)",
                  "constants": [
                    1,
                    0.25
                  ],
                  "variables": []
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "25%"
              }
            }
          ]
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8015010_Monster_AML_Boss_Ability10_Part01": {
      "fileName": "8015010_Monster_AML_Boss_Ability10_Part01",
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
          "ability": "Monster_AML_Boss_Ability10_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8015010_Monster_AML_Boss_Ability09_Part02": {
      "fileName": "8015010_Monster_AML_Boss_Ability09_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Target Part 1}}"
          },
          "modifier": "Enemy_W0_Boss_Part2_AttackUp[<span class=\"descriptionNumberColor\">Amplification</span>]",
          "duration": 1,
          "valuePerStack": {
            "MDF_AttackAddedRatio": 1
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Target Part 3}}"
          },
          "modifier": "Enemy_W0_Boss_Part2_AttackUp[<span class=\"descriptionNumberColor\">Amplification</span>]",
          "duration": 1,
          "valuePerStack": {
            "MDF_AttackAddedRatio": 1
          }
        },
        "Ability Start",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8015010_Monster_AML_Boss_Ability09_Part01": {
      "fileName": "8015010_Monster_AML_Boss_Ability09_Part01",
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
          "ability": "Monster_AML_Boss_Ability09_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8015010_Monster_AML_Boss_Ability08_Part02": {
      "fileName": "8015010_Monster_AML_Boss_Ability08_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8015010_Monster_AML_Boss_Ability08_Part01": {
      "fileName": "8015010_Monster_AML_Boss_Ability08_Part01",
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
          "ability": "Monster_AML_Boss_Ability08_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8015010_Monster_AML_Boss_Ability07_Part02": {
      "fileName": "8015010_Monster_AML_Boss_Ability07_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8015010_Monster_AML_Boss_Ability07_Part01": {
      "fileName": "8015010_Monster_AML_Boss_Ability07_Part01",
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
          "ability": "Monster_AML_Boss_Ability07_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8015010_Monster_AML_Boss_Ability06_Part02": {
      "fileName": "8015010_Monster_AML_Boss_Ability06_Part02",
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
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Constants[0] (1) || Constants[1] (0.5) || MUL || RETURN",
              "displayLines": "(1 * 0.5)",
              "constants": [
                1,
                0.5
              ],
              "variables": []
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "50%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Constants[0] (1) || Constants[1] (0.5) || MUL || RETURN",
              "displayLines": "(1 * 0.5)",
              "constants": [
                1,
                0.5
              ],
              "variables": []
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "50%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8015010_Monster_AML_Boss_Ability06_Part01": {
      "fileName": "8015010_Monster_AML_Boss_Ability06_Part01",
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
          "ability": "Monster_AML_Boss_Ability06_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8015010_Monster_AML_Boss_Ability05_Part02": {
      "fileName": "8015010_Monster_AML_Boss_Ability05_Part02",
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
            "DamageType": "Quantum",
            "Damage": {
              "displayLines": 1
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
    "8015010_Monster_AML_Boss_Ability05_Part01": {
      "fileName": "8015010_Monster_AML_Boss_Ability05_Part01",
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
          "ability": "Monster_AML_Boss_Ability05_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8015010_Monster_AML_Boss_Ability04_Part02": {
      "fileName": "8015010_Monster_AML_Boss_Ability04_Part02",
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
            "DamageType": "Quantum",
            "Damage": {
              "displayLines": 1
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
    "8015010_Monster_AML_Boss_Ability04_Part01": {
      "fileName": "8015010_Monster_AML_Boss_Ability04_Part01",
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
          "ability": "Monster_AML_Boss_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8015010_Monster_AML_Boss_Ability03_Part02": {
      "fileName": "8015010_Monster_AML_Boss_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Constants[0] (1) || Constants[1] (0.5) || MUL || RETURN",
              "displayLines": "(1 * 0.5)",
              "constants": [
                1,
                0.5
              ],
              "variables": []
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "50%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Constants[0] (1) || Constants[1] (0.5) || MUL || RETURN",
              "displayLines": "(1 * 0.5)",
              "constants": [
                1,
                0.5
              ],
              "variables": []
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "50%"
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "Standard_Confine[<span class=\"descriptionNumberColor\">Imprisonment</span>]",
          "duration": 1,
          "baseChance": 1,
          "immediateEffect": true,
          "valuePerStack": {
            "MDF_SpeedDownRatio": 1,
            "MDF_ActionDelayRatio": 1
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8015010_Monster_AML_Boss_Ability03_Part01": {
      "fileName": "8015010_Monster_AML_Boss_Ability03_Part01",
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
          "ability": "Monster_AML_Boss_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8015010_Monster_AML_Boss_Ability02_Part02": {
      "fileName": "8015010_Monster_AML_Boss_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8015010_Monster_AML_Boss_Ability02_Part01": {
      "fileName": "8015010_Monster_AML_Boss_Ability02_Part01",
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
          "ability": "Monster_AML_Boss_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8015010_Monster_AML_Boss_Ability01_Part02": {
      "fileName": "8015010_Monster_AML_Boss_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8015010_Monster_AML_Boss_Ability01_Part01": {
      "fileName": "8015010_Monster_AML_Boss_Ability01_Part01",
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
          "ability": "Monster_AML_Boss_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase2"
        }
      ],
      "references": []
    },
    "8015010_Monster_AML_Boss_Die_Camera": {
      "fileName": "8015010_Monster_AML_Boss_Die_Camera",
      "skillTrigger": "PassiveSkill05",
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
          "modifier": "Enemy_AML_Boss_Die_Camera"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Enemy_AML_Boss_Die_Camera",
          "execute": [
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Enemy_AML_Boss_Die_Camera"
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "8015010_Modifiers": {
      "fileName": "8015010_Modifiers",
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
          "for": "Enemy_AML_Boss_DamageTakenUp",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">EnemyVulnerability</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                    "displayLines": "MDF_PropertyValue",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyValue"
          ],
          "latentQueue": [
            "_IsWeeklyBoss"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_WMonster_W0_Boss_Sign_Part3",
          "modifierFlags": [],
          "execute": [
            {
              "eventTrigger": "When Put in Deathstate Limbo",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "_Part3_Alive"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "_Part3_Alive",
                  "value": 1
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_WMonster_W0_Boss_Sign_Part2",
          "modifierFlags": [],
          "execute": [
            {
              "eventTrigger": "When Put in Deathstate Limbo",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "_Part2_Alive"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "_Part2_Alive",
                  "value": 1
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_WMonster_W0_Boss_Sign_Part1",
          "modifierFlags": [],
          "execute": [
            {
              "eventTrigger": "When Put in Deathstate Limbo",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "_Part1_Alive"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "_Part1_Alive",
                  "value": 1
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_Monster_AML_Boss_Passive_WeakPhysical",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueList": [
                    "Physical"
                  ]
                },
                {
                  "name": "Stack Element Resistance",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "resistArray": [
                    {
                      "element": "Physical",
                      "value": 0
                    },
                    {
                      "element": "Fire",
                      "value": 0
                    },
                    {
                      "element": "Ice",
                      "value": 0
                    },
                    {
                      "element": "Thunder",
                      "value": 0
                    },
                    {
                      "element": "Wind",
                      "value": 0
                    },
                    {
                      "element": "Quantum",
                      "value": 0
                    },
                    {
                      "element": "Imaginary",
                      "value": 0
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_Monster_AML_Boss_Passive_WeakWind",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueList": [
                    "Wind"
                  ]
                },
                {
                  "name": "Stack Element Resistance",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "resistArray": [
                    {
                      "element": "Physical",
                      "value": 0
                    },
                    {
                      "element": "Fire",
                      "value": 0
                    },
                    {
                      "element": "Ice",
                      "value": 0
                    },
                    {
                      "element": "Thunder",
                      "value": 0
                    },
                    {
                      "element": "Wind",
                      "value": 0
                    },
                    {
                      "element": "Quantum",
                      "value": 0
                    },
                    {
                      "element": "Imaginary",
                      "value": 0
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_Monster_AML_Boss_Passive_WeakFire",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueList": [
                    "Fire"
                  ]
                },
                {
                  "name": "Stack Element Resistance",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "resistArray": [
                    {
                      "element": "Physical",
                      "value": 0
                    },
                    {
                      "element": "Fire",
                      "value": 0
                    },
                    {
                      "element": "Ice",
                      "value": 0
                    },
                    {
                      "element": "Thunder",
                      "value": 0
                    },
                    {
                      "element": "Wind",
                      "value": 0
                    },
                    {
                      "element": "Quantum",
                      "value": 0
                    },
                    {
                      "element": "Imaginary",
                      "value": 0
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_Monster_AML_Boss_Passive_WeakIce",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueList": [
                    "Ice"
                  ]
                },
                {
                  "name": "Stack Element Resistance",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "resistArray": [
                    {
                      "element": "Physical",
                      "value": 0
                    },
                    {
                      "element": "Fire",
                      "value": 0
                    },
                    {
                      "element": "Ice",
                      "value": 0
                    },
                    {
                      "element": "Thunder",
                      "value": 0
                    },
                    {
                      "element": "Wind",
                      "value": 0
                    },
                    {
                      "element": "Quantum",
                      "value": 0
                    },
                    {
                      "element": "Imaginary",
                      "value": 0
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_WMonster_W0_Boss_ListenAllPartDie",
          "execute": [
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{All Team Members(Exclude Self)}}"
                        },
                        "value1": "TeamCharacterCount",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "ListenAllDieController",
                        "compareType": "=",
                        "value2": 0,
                        "contextScope": "TargetEntity"
                      },
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
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "ListenAllDieController",
                      "value": 1
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_AML_Boss_Insert02_Part01",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "priorityTag": "MonsterChangePhase",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "_IsWeeklyBoss"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_WMonster_W0_Boss_LockHP_1",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Waiting for Healing in Limbo",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "LockHP_1_InsertController",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Set Enemy Phase",
                      "mode": "Inc"
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_AML_Boss_Insert_Part01",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "priorityTag": "MonsterChangePhase",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "LockHP_1_InsertController",
                      "value": 1
                    }
                  ]
                }
              ],
              "priorityLevel": -90
            }
          ],
          "stackData": [],
          "latentQueue": [
            "_IsWeeklyBoss"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_WMonster_W0_Boss_Unselectable[<span class=\"descriptionNumberColor\">Vestige Valor</span>]",
          "modifierFlags": [
            "Stealth",
            "BlockDamage",
            "Endurance"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                "Mark Entity as Non-Target(Unselectable)"
              ]
            }
          ],
          "useEntitySnapshot": true,
          "stackData": [],
          "latentQueue": [],
          "description": "Cannot be targeted until Disaster's Right Hand, Dawn's Left Hand, and Antimatter Engine have all been destroyed.",
          "type": "Buff",
          "statusName": "Vestige Valor"
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_AML_Boss_HitEffect",
          "execute": [
            {
              "eventTrigger": "Take Damage End [Owner]: Hit"
            }
          ],
          "stackData": [],
          "latentQueue": [
            "ListenAllDieController"
          ]
        }
      ],
      "references": []
    }
  }
}