const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 5024010,
  "trimCharacterName": 5024010,
  "abilityList": [
    "5024010_Monster_W5_Ripper_SpecialWin_Insert2",
    "5024010_Monster_W5_Ripper_SpecialWin_Insert1",
    "5024010_BattleEventAbility_TVBroadcast_Positive_Effect",
    "5024010_BattleEventAbility_TVBroadcast_Positive",
    "5024010_BattleEventAbility_TVBroadcast_Neutral_Effect",
    "5024010_BattleEventAbility_TVBroadcast_Neutral",
    "5024010_BattleEventAbility_TVBroadcast_Negative_Effect",
    "5024010_BattleEventAbility_TVBroadcast_Negative",
    "5024010_Monster_W5_Ripper_TriggerSummon",
    "5024010_Monster_W5_Ripper_FleshChange",
    "5024010_Monster_W5_Ripper_FleshBonus",
    "5024010_Monster_W5_Ripper_SummonMonster_Ability",
    "5024010_Monster_W5_Ripper_PassiveAbility_Insert",
    "5024010_Monster_W5_Ripper_Ability08_Part02",
    "5024010_Monster_W5_Ripper_Ability08_Part01",
    "5024010_Monster_W5_Ripper_Ability06_Part02",
    "5024010_Monster_W5_Ripper_Ability06_Part01",
    "5024010_Monster_W5_Ripper_Ability05_Part02",
    "5024010_Monster_W5_Ripper_Ability05_Part01",
    "5024010_Monster_W5_Ripper_Ability04_Part02",
    "5024010_Monster_W5_Ripper_Ability04_Part01",
    "5024010_Monster_W5_Ripper_Ability03_Part02",
    "5024010_Monster_W5_Ripper_Ability03_Part01",
    "5024010_Monster_W5_Ripper_Ability02_Part02",
    "5024010_Monster_W5_Ripper_Ability02_Part01",
    "5024010_Monster_W5_Ripper_Ability01_Part02",
    "5024010_Monster_W5_Ripper_Ability01_Part01",
    "5024010_Monster_W5_Ripper_Passive01",
    "5024010_Monster_W5_Ripper_PassiveAbility_BGM",
    "5024010_Modifiers"
  ],
  "abilityObject": {
    "5024010_Monster_W5_Ripper_SpecialWin_Insert2": {
      "fileName": "5024010_Monster_W5_Ripper_SpecialWin_Insert2",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "5024010_Monster_W5_Ripper_SpecialWin_Insert1": {
      "fileName": "5024010_Monster_W5_Ripper_SpecialWin_Insert1",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "5024010_BattleEventAbility_TVBroadcast_Positive_Effect": {
      "fileName": "5024010_BattleEventAbility_TVBroadcast_Positive_Effect",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Adjust Team Punchline Value",
          "value": {
            "operator": "Variables[0] (BattleEvent_P1_ADF) || RETURN",
            "displayLines": "BattleEvent_P1_ADF",
            "constants": [],
            "variables": [
              "BattleEvent_P1_ADF"
            ]
          },
          "adjustment": "Add"
        },
        {
          "name": "Action Advance/Delay",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team All}}.[[removeMemosprite]]"
          },
          "advanceType": "Set",
          "multiAdd": "(0 - BattleEvent_P2_ADF)"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}.[[removeMemosprite]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"365398491\">Standard_CriticalDamageUp</a>[<span class=\"descriptionNumberColor\">CRIT DMG Boost</span>]",
          "duration": 1,
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (BattleEvent_P4_ADF) || RETURN",
              "displayLines": "BattleEvent_P4_ADF",
              "constants": [],
              "variables": [
                "BattleEvent_P4_ADF"
              ]
            }
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-350128982\">Monster_W5_Ripper_MainBETrigger3</a>"
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-350128982\">Monster_W5_Ripper_MainBETrigger3</a>"
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "5024010_BattleEventAbility_TVBroadcast_Positive": {
      "fileName": "5024010_BattleEventAbility_TVBroadcast_Positive",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "multiBase": {
            "operator": "Variables[0] (#BattleEvent_P3_ADF) || RETURN",
            "displayLines": "#BattleEvent_P3_ADF",
            "constants": [],
            "variables": [
              "#BattleEvent_P3_ADF"
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1938760859\">Modifier_BattleEventAbility_TVBroadcast_Positive</a>"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "BattleEvent_P1_ADF",
          "value": {
            "operator": "Variables[0] (#BattleEvent_P1_ADF) || RETURN",
            "displayLines": "#BattleEvent_P1_ADF",
            "constants": [],
            "variables": [
              "#BattleEvent_P1_ADF"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "BattleEvent_P2_ADF",
          "value": {
            "operator": "Variables[0] (#BattleEvent_P2_ADF) || RETURN",
            "displayLines": "#BattleEvent_P2_ADF",
            "constants": [],
            "variables": [
              "#BattleEvent_P2_ADF"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "BattleEvent_P4_ADF",
          "value": {
            "operator": "Variables[0] (#BattleEvent_P4_ADF) || RETURN",
            "displayLines": "#BattleEvent_P4_ADF",
            "constants": [],
            "variables": [
              "#BattleEvent_P4_ADF"
            ]
          }
        },
        {
          "name": "Assign Unique Name",
          "uniqueName": "TVBroadcast_Positive",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1938760859\">Modifier_BattleEventAbility_TVBroadcast_Positive</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Inject Ability Use",
                  "condition": {
                    "name": "Insert Ability Condition",
                    "type": "AbilityOwnerInsertUnusedCount",
                    "typeValue": 1
                  },
                  "abilityName": "BattleEventAbility_TVBroadcast_Positive_Effect",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "priorityTag": "STAGE_Character",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": false
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Ability",
                  "abilityName": "BattleEventAbility_TVBroadcast_Positive_Effect"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "5024010_BattleEventAbility_TVBroadcast_Neutral_Effect": {
      "fileName": "5024010_BattleEventAbility_TVBroadcast_Neutral_Effect",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-333351363\">Monster_W5_Ripper_MainBETrigger2</a>"
          },
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Random Chance",
                "chance": 0.7
              }
            }
          ]
        },
        {
          "name": "Adjust Team Punchline Value",
          "value": {
            "operator": "Variables[0] (BattleEvent_P1_ADF) || RETURN",
            "displayLines": "BattleEvent_P1_ADF",
            "constants": [],
            "variables": [
              "BattleEvent_P1_ADF"
            ]
          },
          "adjustment": "Add"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-333351363\">Monster_W5_Ripper_MainBETrigger2</a>"
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-333351363\">Monster_W5_Ripper_MainBETrigger2</a>"
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "5024010_BattleEventAbility_TVBroadcast_Neutral": {
      "fileName": "5024010_BattleEventAbility_TVBroadcast_Neutral",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "multiBase": {
            "operator": "Variables[0] (#BattleEvent_P2_ADF) || RETURN",
            "displayLines": "#BattleEvent_P2_ADF",
            "constants": [],
            "variables": [
              "#BattleEvent_P2_ADF"
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"200611719\">Modifier_BattleEventAbility_TVBroadcast_Neutral</a>"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "BattleEvent_P1_ADF",
          "value": {
            "operator": "Variables[0] (#BattleEvent_P1_ADF) || RETURN",
            "displayLines": "#BattleEvent_P1_ADF",
            "constants": [],
            "variables": [
              "#BattleEvent_P1_ADF"
            ]
          }
        },
        {
          "name": "Assign Unique Name",
          "uniqueName": "TVBroadcast_Neutral",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__200611719\">Modifier_BattleEventAbility_TVBroadcast_Neutral</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Inject Ability Use",
                  "condition": {
                    "name": "Insert Ability Condition",
                    "type": "AbilityOwnerInsertUnusedCount",
                    "typeValue": 1
                  },
                  "abilityName": "BattleEventAbility_TVBroadcast_Neutral_Effect",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "priorityTag": "STAGE_Character",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": false
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Ability",
                  "abilityName": "BattleEventAbility_TVBroadcast_Neutral_Effect"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "5024010_BattleEventAbility_TVBroadcast_Negative_Effect": {
      "fileName": "5024010_BattleEventAbility_TVBroadcast_Negative_Effect",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Random Chance",
            "chance": 0.7
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}.[[removeMemosprite]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-958879550\">Monster_Standard_SpeedRatioDown</a>[<span class=\"descriptionNumberColor\">Slow</span>]",
          "duration": 2,
          "baseChance": 1,
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (BattleEvent_P1_ADF) || RETURN",
              "displayLines": "BattleEvent_P1_ADF",
              "constants": [],
              "variables": [
                "BattleEvent_P1_ADF"
              ]
            }
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-383684220\">Monster_W5_Ripper_MainBETrigger1</a>"
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-383684220\">Monster_W5_Ripper_MainBETrigger1</a>"
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "5024010_BattleEventAbility_TVBroadcast_Negative": {
      "fileName": "5024010_BattleEventAbility_TVBroadcast_Negative",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "multiBase": {
            "operator": "Variables[0] (#BattleEvent_P2_ADF) || RETURN",
            "displayLines": "#BattleEvent_P2_ADF",
            "constants": [],
            "variables": [
              "#BattleEvent_P2_ADF"
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-573307177\">Modifier_BattleEventAbility_TVBroadcast_Negative</a>"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "BattleEvent_P1_ADF",
          "value": {
            "operator": "Variables[0] (#BattleEvent_P1_ADF) || RETURN",
            "displayLines": "#BattleEvent_P1_ADF",
            "constants": [],
            "variables": [
              "#BattleEvent_P1_ADF"
            ]
          }
        },
        {
          "name": "Assign Unique Name",
          "uniqueName": "TVBroadcast_Negative",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-573307177\">Modifier_BattleEventAbility_TVBroadcast_Negative</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Inject Ability Use",
                  "condition": {
                    "name": "Insert Ability Condition",
                    "type": "AbilityOwnerInsertUnusedCount",
                    "typeValue": 1
                  },
                  "abilityName": "BattleEventAbility_TVBroadcast_Negative_Effect",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "priorityTag": "STAGE_Character",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": false
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Ability",
                  "abilityName": "BattleEventAbility_TVBroadcast_Negative_Effect"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "5024010_Monster_W5_Ripper_TriggerSummon": {
      "fileName": "5024010_Monster_W5_Ripper_TriggerSummon",
      "skillTrigger": "Skill07",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "Define Modifier-Specific Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifierName": "<a class=\"gModGreen\" id=\"1728959136\">Monster_W5_Ripper_Passive</a>",
          "variableName": "MDF_InsertCheck",
          "value": 0
        },
        {
          "name": "Define Modifier-Specific Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifierName": "<a class=\"gModGreen\" id=\"1728959136\">Monster_W5_Ripper_Passive</a>",
          "variableName": "MDF_CurrentCount",
          "value": 0
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": 0,
          "entityClass": "Enemy",
          "target": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "maximum": {
            "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
            "displayLines": "{[PassiveSkill01[0]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill01[0]]}"
            ]
          },
          "assignState": "True",
          "state": "Normal",
          "trigger": "SpEff_Trigger"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-98226572\">Monster_W5_Ripper_DamageTakenUp</a>[<span class=\"descriptionNumberColor\">Teasing</span>]",
          "duration": {
            "operator": "Variables[0] ({[PassiveSkill01[5]]}) || RETURN",
            "displayLines": "{[PassiveSkill01[5]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill01[5]]}"
            ]
          },
          "stackLimit": {
            "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
            "displayLines": "{[PassiveSkill01[2]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill01[2]]}"
            ]
          },
          "valuePerStack": {
            "MDF_DamageTakenUpRatio_PerLayer": {
              "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
              "displayLines": "{[PassiveSkill01[1]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill01[1]]}"
              ]
            }
          },
          "addStacksPerTrigger": 1
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1271467699\">Monster_W5_RipperPart_Bonus</a>[<span class=\"descriptionNumberColor\">Wicked Grin</span>]"
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1271467699\">Monster_W5_RipperPart_Bonus</a>[<span class=\"descriptionNumberColor\">Wicked Grin</span>]"
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "5024010_Monster_W5_Ripper_FleshChange": {
      "fileName": "5024010_Monster_W5_Ripper_FleshChange",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-2109211182\">Monster_W5_Ripper_Bonus</a>[<span class=\"descriptionNumberColor\">Inverted Severance</span>]",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ripper: Self}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-100211662\">Monster_W5_Ripper_AddFleshImmediately</a>"
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "5024010_Monster_W5_Ripper_FleshBonus": {
      "fileName": "5024010_Monster_W5_Ripper_FleshBonus",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Compare: Monster Rank",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "compareType": ">=",
            "value2": 4
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2073151026\">WMonster_W5_RipperPart_Bonus</a>",
              "stackLimit": {
                "operator": "Variables[0] (Buff_MaxLayer) || RETURN",
                "displayLines": "Buff_MaxLayer",
                "constants": [],
                "variables": [
                  "Buff_MaxLayer"
                ]
              },
              "valuePerStack": {
                "MDF_DamageUpRatio_PerLayer": {
                  "operator": "Variables[0] (Buff_DamageUpRatio) || RETURN",
                  "displayLines": "Buff_DamageUpRatio",
                  "constants": [],
                  "variables": [
                    "Buff_DamageUpRatio"
                  ]
                }
              }
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "5024010_Monster_W5_Ripper_SummonMonster_Ability": {
      "fileName": "5024010_Monster_W5_Ripper_SummonMonster_Ability",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "SummonLayer",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "SummonCount",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "DelayRatio",
          "value": 0
        },
        {
          "name": "Define Custom Variable with Modifier Values",
          "valueType": "Layer",
          "variableName": "SummonLayer",
          "modifierName": "<a class=\"gModGreen\" id=\"-287768944\">Monster_W5_Ripper_Summon</a>",
          "multiplier": 1
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "operator": "Variables[0] (SummonLayer) || RETURN",
            "displayLines": "SummonLayer",
            "constants": [],
            "variables": [
              "SummonLayer"
            ]
          },
          "Event": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Enemy Team All}}"
                },
                "value1": "TeamCharacterCount",
                "compareType": "<",
                "value2": 5
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "SummonCount",
                  "value": {
                    "operator": "Variables[0] (SummonCount) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(SummonCount + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "SummonCount"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "SummonCount",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "DelayRatio",
                      "value": 0.5
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "SummonCount",
                      "value": 0
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "DelayRatio",
                      "value": 1
                    }
                  ]
                },
                {
                  "name": "Create Enemies",
                  "delayPercent": {
                    "operator": "Variables[0] (DelayRatio) || RETURN",
                    "displayLines": "DelayRatio",
                    "constants": [],
                    "variables": [
                      "DelayRatio"
                    ]
                  },
                  "enemyList": [
                    {
                      "name": "Enemy Entry",
                      "enemyID": 5022010,
                      "locationType": "KeepOnEdge"
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Recently Summoned Enemies}}"
                  },
                  "variableName": "Buff_DamageUpRatio",
                  "value": {
                    "operator": "Variables[0] ({[PassiveSkill01[3]]}) || RETURN",
                    "displayLines": "{[PassiveSkill01[3]]}",
                    "constants": [],
                    "variables": [
                      "{[PassiveSkill01[3]]}"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Recently Summoned Enemies}}"
                  },
                  "variableName": "Buff_MaxLayer",
                  "value": {
                    "operator": "Variables[0] ({[PassiveSkill01[4]]}) || RETURN",
                    "displayLines": "{[PassiveSkill01[4]]}",
                    "constants": [],
                    "variables": [
                      "{[PassiveSkill01[4]]}"
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-287768944\">Monster_W5_Ripper_Summon</a>",
                  "addStacksPerTrigger": -1
                },
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "SummonLayer",
                  "modifierName": "<a class=\"gModGreen\" id=\"-287768944\">Monster_W5_Ripper_Summon</a>",
                  "multiplier": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "SummonLayer",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-287768944\">Monster_W5_Ripper_Summon</a>"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "5024010_Monster_W5_Ripper_PassiveAbility_Insert": {
      "fileName": "5024010_Monster_W5_Ripper_PassiveAbility_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "silent": true
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2073151026\">WMonster_W5_RipperPart_Bonus</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-329548690\">Monster_W5_Ripper_Parasitism</a>[<span class=\"descriptionNumberColor\">Happiness</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-693038758\">Monster_W5_Ripper_ChargeEffect</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 2
          },
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": ">",
                "value2": 2
              }
            }
          ]
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "multiBase": 0
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"542143301\">Monster_ChangePhase</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"127164036\">Monster_W5_Ripper_Endurance</a>"
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
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "InsertCheck",
          "value": 1
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
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Enemy ID",
                "ID": 5024012,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Paramount Bliss Inverted: Illwish Archlotus",
                "isBaseCompare": true,
                "invertCondition": true
              },
              {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": ">",
                "value2": 2
              }
            ]
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1759914466\">Monster_W5_Ripper_PartController</a>"
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "5024010_Monster_W5_Ripper_Ability08_Part02": {
      "fileName": "5024010_Monster_W5_Ripper_Ability08_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "5024010_Monster_W5_Ripper_Ability08_Part01": {
      "fileName": "5024010_Monster_W5_Ripper_Ability08_Part01",
      "childAbilityList": [
        "5024010_Monster_W5_Ripper_Ability08_Camera",
        "5024010_Monster_W5_Ripper_Ability08_Part01",
        "5024010_Monster_W5_Ripper_Ability08_Part02"
      ],
      "skillTrigger": "Skill08",
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
          "ability": "Monster_W5_Ripper_Ability08_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "5024010_Monster_W5_Ripper_Ability06_Part02": {
      "fileName": "5024010_Monster_W5_Ripper_Ability06_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"62518190\">Monster_W5_Ripper_Main</a>"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MainCount",
                "compareType": "=",
                "value2": 2
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MainCount",
                  "value": 3
                }
              ]
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-693038758\">Monster_W5_Ripper_ChargeEffect</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team(Exclude Memosprites)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1098328598\">Monster_W5_Ripper_Ability06_Mark</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1098328598\">Monster_W5_Ripper_Ability06_Mark</a>"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team(Exclude Memosprites)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1098328598\">Monster_W5_Ripper_Ability06_Mark</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1098328598\">Monster_W5_Ripper_Ability06_Mark</a>"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team(Exclude Memosprites)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1098328598\">Monster_W5_Ripper_Ability06_Mark</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1098328598\">Monster_W5_Ripper_Ability06_Mark</a>"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team(Exclude Memosprites)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1098328598\">Monster_W5_Ripper_Ability06_Mark</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1098328598\">Monster_W5_Ripper_Ability06_Mark</a>"
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
              "displayLines": "{[Skill06[0]]}",
              "constants": [],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "HitSplit": 0.07,
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
            "target": "{{Player Team All}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
              "displayLines": "{[Skill06[0]]}",
              "constants": [],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "HitSplit": 0.07,
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
            "target": "{{Player Team All}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
              "displayLines": "{[Skill06[0]]}",
              "constants": [],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "HitSplit": 0.07,
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
            "target": "{{Player Team All}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
              "displayLines": "{[Skill06[0]]}",
              "constants": [],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "HitSplit": 0.07,
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
            "target": "{{Player Team All}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
              "displayLines": "{[Skill06[0]]}",
              "constants": [],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "HitSplit": 0.07,
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
            "target": "{{Player Team All}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
              "displayLines": "{[Skill06[0]]}",
              "constants": [],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "HitSplit": 0.07,
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
            "target": "{{Player Team All}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
              "displayLines": "{[Skill06[0]]}",
              "constants": [],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "HitSplit": 0.07,
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
            "target": "{{Player Team All}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
              "displayLines": "{[Skill06[0]]}",
              "constants": [],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "HitSplit": 0.07,
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
            "target": "{{Player Team All}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
              "displayLines": "{[Skill06[0]]}",
              "constants": [],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "HitSplit": 0.07,
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
            "target": "{{Player Team All}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
              "displayLines": "{[Skill06[0]]}",
              "constants": [],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "HitSplit": 0.07,
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
            "target": "{{Player Team All}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
              "displayLines": "{[Skill06[0]]}",
              "constants": [],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "HitSplit": 0.07,
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
            "target": "{{Player Team All}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
              "displayLines": "{[Skill06[0]]}",
              "constants": [],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "HitSplit": 0.23,
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
            "modifier": "<a class=\"gModGreen\" id=\"1271467699\">Monster_W5_RipperPart_Bonus</a>[<span class=\"descriptionNumberColor\">Wicked Grin</span>]"
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}.[[removeMemosprite]]"
              },
              "ifTargetFound": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-2109211182\">Monster_W5_Ripper_Bonus</a>[<span class=\"descriptionNumberColor\">Inverted Severance</span>]",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-70072093\">Monster_W5_Ripper_Flesh</a>[<span class=\"descriptionNumberColor\">Happiness Puppet</span>]",
                      "duration": {
                        "operator": "Variables[0] ({[Skill06[1]]}) || RETURN",
                        "displayLines": "{[Skill06[1]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill06[1]]}"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_FleshElationPoint": {
                          "operator": "Variables[0] ({[Skill06[3]]}) || RETURN",
                          "displayLines": "{[Skill06[3]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill06[3]]}"
                          ]
                        },
                        "MDF_FleshExtraChance": {
                          "operator": "Variables[0] ({[Skill06[4]]}) || RETURN",
                          "displayLines": "{[Skill06[4]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill06[4]]}"
                          ]
                        },
                        "MDF_FleshExtraElationPoint": {
                          "operator": "Variables[0] ({[Skill06[5]]}) || RETURN",
                          "displayLines": "{[Skill06[5]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill06[5]]}"
                          ]
                        },
                        "MDF_AttackEnemyChance": {
                          "operator": "Variables[0] ({[PassiveSkill02[0]]}) || RETURN",
                          "displayLines": "{[PassiveSkill02[0]]}",
                          "constants": [],
                          "variables": [
                            "{[PassiveSkill02[0]]}"
                          ]
                        },
                        "MDF_DamagePercentage": {
                          "operator": "Variables[0] ({[PassiveSkill02[1]]}) || RETURN",
                          "displayLines": "{[PassiveSkill02[1]]}",
                          "constants": [],
                          "variables": [
                            "{[PassiveSkill02[1]]}"
                          ]
                        },
                        "MDF_MaxDamageRatio": {
                          "operator": "Variables[0] ({[PassiveSkill02[2]]}) || RETURN",
                          "displayLines": "{[PassiveSkill02[2]]}",
                          "constants": [],
                          "variables": [
                            "{[PassiveSkill02[2]]}"
                          ]
                        },
                        "MDF_MinDamageRatio": {
                          "operator": "Variables[0] ({[PassiveSkill02[3]]}) || RETURN",
                          "displayLines": "{[PassiveSkill02[3]]}",
                          "constants": [],
                          "variables": [
                            "{[PassiveSkill02[3]]}"
                          ]
                        },
                        "MDF_ExtraDamageMultiple": {
                          "operator": "Variables[0] ({[PassiveSkill02[4]]}) || RETURN",
                          "displayLines": "{[PassiveSkill02[4]]}",
                          "constants": [],
                          "variables": [
                            "{[PassiveSkill02[4]]}"
                          ]
                        },
                        "MDF_EnemyExtraDamageMultiple": {
                          "operator": "Variables[0] ({[PassiveSkill02[5]]}) || RETURN",
                          "displayLines": "{[PassiveSkill02[5]]}",
                          "constants": [],
                          "variables": [
                            "{[PassiveSkill02[5]]}"
                          ]
                        }
                      },
                      "success": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"34096710\">Monster_W5_Ripper_FleshEffect</a>",
                          "valuePerStack": {
                            "MDF_FleshElationPoint": {
                              "operator": "Variables[0] ({[Skill06[3]]}) || RETURN",
                              "displayLines": "{[Skill06[3]]}",
                              "constants": [],
                              "variables": [
                                "{[Skill06[3]]}"
                              ]
                            },
                            "MDF_FleshExtraChance": {
                              "operator": "Variables[0] ({[Skill06[4]]}) || RETURN",
                              "displayLines": "{[Skill06[4]]}",
                              "constants": [],
                              "variables": [
                                "{[Skill06[4]]}"
                              ]
                            },
                            "MDF_FleshExtraElationPoint": {
                              "operator": "Variables[0] ({[Skill06[5]]}) || RETURN",
                              "displayLines": "{[Skill06[5]]}",
                              "constants": [],
                              "variables": [
                                "{[Skill06[5]]}"
                              ]
                            },
                            "MDF_AttackEnemyChance": {
                              "operator": "Variables[0] ({[PassiveSkill02[0]]}) || RETURN",
                              "displayLines": "{[PassiveSkill02[0]]}",
                              "constants": [],
                              "variables": [
                                "{[PassiveSkill02[0]]}"
                              ]
                            },
                            "MDF_DamagePercentage": {
                              "operator": "Variables[0] ({[PassiveSkill02[1]]}) || RETURN",
                              "displayLines": "{[PassiveSkill02[1]]}",
                              "constants": [],
                              "variables": [
                                "{[PassiveSkill02[1]]}"
                              ]
                            },
                            "MDF_MaxDamageRatio": {
                              "operator": "Variables[0] ({[PassiveSkill02[2]]}) || RETURN",
                              "displayLines": "{[PassiveSkill02[2]]}",
                              "constants": [],
                              "variables": [
                                "{[PassiveSkill02[2]]}"
                              ]
                            },
                            "MDF_MinDamageRatio": {
                              "operator": "Variables[0] ({[PassiveSkill02[3]]}) || RETURN",
                              "displayLines": "{[PassiveSkill02[3]]}",
                              "constants": [],
                              "variables": [
                                "{[PassiveSkill02[3]]}"
                              ]
                            },
                            "MDF_ExtraDamageMultiple": {
                              "operator": "Variables[0] ({[PassiveSkill02[4]]}) || RETURN",
                              "displayLines": "{[PassiveSkill02[4]]}",
                              "constants": [],
                              "variables": [
                                "{[PassiveSkill02[4]]}"
                              ]
                            },
                            "MDF_EnemyExtraDamageMultiple": {
                              "operator": "Variables[0] ({[PassiveSkill02[5]]}) || RETURN",
                              "displayLines": "{[PassiveSkill02[5]]}",
                              "constants": [],
                              "variables": [
                                "{[PassiveSkill02[5]]}"
                              ]
                            }
                          },
                          "casterAssign": "TargetSelf"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1788107220\">Monster_W5_Ripper_Ability06_SpecialFlesh</a>",
                          "duration": {
                            "operator": "Variables[0] ({[Skill06[1]]}) || RETURN",
                            "displayLines": "{[Skill06[1]]}",
                            "constants": [],
                            "variables": [
                              "{[Skill06[1]]}"
                            ]
                          }
                        }
                      ]
                    }
                  ]
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
          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1098328598\">Monster_W5_Ripper_Ability06_Mark</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"62518190\">Monster_W5_Ripper_Main</a>"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MainCount",
                "compareType": "=",
                "value2": 3
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MainCount",
                  "value": 4
                }
              ]
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "5024010_Monster_W5_Ripper_Ability06_Part01": {
      "fileName": "5024010_Monster_W5_Ripper_Ability06_Part01",
      "childAbilityList": [
        "5024010_Monster_W5_Ripper_Ability06_Camera",
        "5024010_Monster_W5_Ripper_Ability06_Part01",
        "5024010_Monster_W5_Ripper_Ability06_Part02"
      ],
      "skillTrigger": "Skill06",
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
          "ability": "Monster_W5_Ripper_Ability06_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "5024010_Monster_W5_Ripper_Ability05_Part02": {
      "fileName": "5024010_Monster_W5_Ripper_Ability05_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"-693038758\">Monster_W5_Ripper_ChargeEffect</a>"
        },
        "Ability Start",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-693038758\">Monster_W5_Ripper_ChargeEffect</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "5024010_Monster_W5_Ripper_Ability05_Part01": {
      "fileName": "5024010_Monster_W5_Ripper_Ability05_Part01",
      "childAbilityList": [
        "5024010_Monster_W5_Ripper_Ability05_Camera",
        "5024010_Monster_W5_Ripper_Ability05_Part01",
        "5024010_Monster_W5_Ripper_Ability05_Part02"
      ],
      "skillTrigger": "Skill05",
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
          "ability": "Monster_W5_Ripper_Ability05_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "5024010_Monster_W5_Ripper_Ability04_Part02": {
      "fileName": "5024010_Monster_W5_Ripper_Ability04_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"62518190\">Monster_W5_Ripper_Main</a>"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MainCount",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MainCount",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemies by Aggro OR Random(Exclude Memosprites)}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-70072093\">Monster_W5_Ripper_Flesh</a>[<span class=\"descriptionNumberColor\">Happiness Puppet</span>]",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"497761584\">Monster_W5_Ripper_Ability04_Mark</a>"
            }
          ],
          "noTargetFound": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemies by Aggro OR Random(Exclude Memosprites)}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"497761584\">Monster_W5_Ripper_Ability04_Mark</a>"
                }
              ]
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
                "value2": 1
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"2042265236\">Monster_W5_Ripper_Main2</a>",
                "invertCondition": true
              }
            ]
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}.[[removeMemosprite]]"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"497761584\">Monster_W5_Ripper_Ability04_Mark</a>",
                    "invertCondition": true
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-70072093\">Monster_W5_Ripper_Flesh</a>[<span class=\"descriptionNumberColor\">Happiness Puppet</span>]",
                    "invertCondition": true
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
                  "modifier": "<a class=\"gModGreen\" id=\"497761584\">Monster_W5_Ripper_Ability04_Mark</a>"
                }
              ],
              "noTargetFound": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}.[[removeMemosprite]]"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"497761584\">Monster_W5_Ripper_Ability04_Mark</a>",
                    "invertCondition": true
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"497761584\">Monster_W5_Ripper_Ability04_Mark</a>"
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
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 2
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 5024012,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": "Paramount Bliss Inverted: Illwish Archlotus",
                    "isBaseCompare": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}.[[removeMemosprite]]"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"497761584\">Monster_W5_Ripper_Ability04_Mark</a>",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-70072093\">Monster_W5_Ripper_Flesh</a>[<span class=\"descriptionNumberColor\">Happiness Puppet</span>]",
                        "invertCondition": true
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
                      "modifier": "<a class=\"gModGreen\" id=\"497761584\">Monster_W5_Ripper_Ability04_Mark</a>"
                    }
                  ],
                  "noTargetFound": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}.[[removeMemosprite]]"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"497761584\">Monster_W5_Ripper_Ability04_Mark</a>",
                        "invertCondition": true
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"497761584\">Monster_W5_Ripper_Ability04_Mark</a>"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}.[[removeMemosprite]]"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"497761584\">Monster_W5_Ripper_Ability04_Mark</a>",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-70072093\">Monster_W5_Ripper_Flesh</a>[<span class=\"descriptionNumberColor\">Happiness Puppet</span>]",
                        "invertCondition": true
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
                      "modifier": "<a class=\"gModGreen\" id=\"497761584\">Monster_W5_Ripper_Ability04_Mark</a>"
                    }
                  ],
                  "noTargetFound": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}.[[removeMemosprite]]"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"497761584\">Monster_W5_Ripper_Ability04_Mark</a>",
                        "invertCondition": true
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"497761584\">Monster_W5_Ripper_Ability04_Mark</a>"
                        }
                      ]
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}.[[removeMemosprite]]"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"497761584\">Monster_W5_Ripper_Ability04_Mark</a>",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-70072093\">Monster_W5_Ripper_Flesh</a>[<span class=\"descriptionNumberColor\">Happiness Puppet</span>]",
                        "invertCondition": true
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
                      "modifier": "<a class=\"gModGreen\" id=\"497761584\">Monster_W5_Ripper_Ability04_Mark</a>"
                    }
                  ],
                  "noTargetFound": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}.[[removeMemosprite]]"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"497761584\">Monster_W5_Ripper_Ability04_Mark</a>",
                        "invertCondition": true
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"497761584\">Monster_W5_Ripper_Ability04_Mark</a>"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}.[[removeMemosprite]]"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"497761584\">Monster_W5_Ripper_Ability04_Mark</a>",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-70072093\">Monster_W5_Ripper_Flesh</a>[<span class=\"descriptionNumberColor\">Happiness Puppet</span>]",
                        "invertCondition": true
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
                      "modifier": "<a class=\"gModGreen\" id=\"497761584\">Monster_W5_Ripper_Ability04_Mark</a>"
                    }
                  ],
                  "noTargetFound": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}.[[removeMemosprite]]"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"497761584\">Monster_W5_Ripper_Ability04_Mark</a>",
                        "invertCondition": true
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"497761584\">Monster_W5_Ripper_Ability04_Mark</a>"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}.[[removeMemosprite]]"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"497761584\">Monster_W5_Ripper_Ability04_Mark</a>",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-70072093\">Monster_W5_Ripper_Flesh</a>[<span class=\"descriptionNumberColor\">Happiness Puppet</span>]",
                        "invertCondition": true
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
                      "modifier": "<a class=\"gModGreen\" id=\"497761584\">Monster_W5_Ripper_Ability04_Mark</a>"
                    }
                  ],
                  "noTargetFound": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}.[[removeMemosprite]]"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"497761584\">Monster_W5_Ripper_Ability04_Mark</a>",
                        "invertCondition": true
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"497761584\">Monster_W5_Ripper_Ability04_Mark</a>"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ripper: Skill03 Target}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
              "displayLines": "{[Skill04[0]]}",
              "constants": [],
              "variables": [
                "{[Skill04[0]]}"
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
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Ripper: Skill03 Target}}"
          },
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-70072093\">Monster_W5_Ripper_Flesh</a>[<span class=\"descriptionNumberColor\">Happiness Puppet</span>]",
                "invertCondition": true
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1788107220\">Monster_W5_Ripper_Ability06_SpecialFlesh</a>"
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable",
              "variableName": "ParasitismLayer",
              "value": 0
            },
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "valueType": "Layer",
              "variableName": "ParasitismLayer",
              "modifierName": "<a class=\"gModGreen\" id=\"-329548690\">Monster_W5_Ripper_Parasitism</a>[<span class=\"descriptionNumberColor\">Happiness</span>]",
              "multiplier": 1
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-329548690\">Monster_W5_Ripper_Parasitism</a>[<span class=\"descriptionNumberColor\">Happiness</span>]",
              "duration": {
                "operator": "Variables[0] ({[Skill04[2]]}) || RETURN",
                "displayLines": "{[Skill04[2]]}",
                "constants": [],
                "variables": [
                  "{[Skill04[2]]}"
                ]
              },
              "stackLimit": {
                "operator": "Variables[0] ({[Skill04[1]]}) || Variables[1] ({[Skill04[3]]}) || ADD || RETURN",
                "displayLines": "({[Skill04[1]]} + {[Skill04[3]]})",
                "constants": [],
                "variables": [
                  "{[Skill04[1]]}",
                  "{[Skill04[3]]}"
                ]
              },
              "valuePerStack": {
                "MDF_MaxLayer": {
                  "operator": "Variables[0] ({[Skill04[1]]}) || RETURN",
                  "displayLines": "{[Skill04[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill04[1]]}"
                  ]
                },
                "MDF_AddLayer": {
                  "operator": "Variables[0] ({[Skill04[3]]}) || RETURN",
                  "displayLines": "{[Skill04[3]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill04[3]]}"
                  ]
                },
                "MDF_SummonCount": {
                  "operator": "Variables[0] ({[Skill04[4]]}) || RETURN",
                  "displayLines": "{[Skill04[4]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill04[4]]}"
                  ]
                }
              },
              "addStacksPerTrigger": {
                "operator": "Variables[0] ({[Skill04[9]]}) || RETURN",
                "displayLines": "{[Skill04[9]]}",
                "constants": [],
                "variables": [
                  "{[Skill04[9]]}"
                ]
              }
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
            "modifier": "<a class=\"gModGreen\" id=\"62518190\">Monster_W5_Ripper_Main</a>"
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"497761584\">Monster_W5_Ripper_Ability04_Mark</a>"
              },
              "ifTargetFound": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "7023RoleID"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "7023RoleID"
                },
                {
                  "name": "Define Custom Variable with Varying Data",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "7023RoleID",
                  "value": "TargetCharacterID"
                },
                {
                  "name": "Define Custom Variable with Copy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variable": "7023RoleID",
                  "target2": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "variable2": "7023RoleID",
                  "scope": "TargetEntity"
                }
              ]
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"497761584\">Monster_W5_Ripper_Ability04_Mark</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"62518190\">Monster_W5_Ripper_Main</a>"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MainCount",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MainCount",
                  "value": 2
                }
              ]
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "5024010_Monster_W5_Ripper_Ability04_Part01": {
      "fileName": "5024010_Monster_W5_Ripper_Ability04_Part01",
      "childAbilityList": [
        "5024010_Monster_W5_Ripper_Ability04_Camera",
        "5024010_Monster_W5_Ripper_Ability04_Part01",
        "5024010_Monster_W5_Ripper_Ability04_Part02"
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
          "ability": "Monster_W5_Ripper_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}",
        "targetIsVariable": true
      },
      "references": []
    },
    "5024010_Monster_W5_Ripper_Ability03_Part02": {
      "fileName": "5024010_Monster_W5_Ripper_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "ParasitismCount"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-329548690\">Monster_W5_Ripper_Parasitism</a>[<span class=\"descriptionNumberColor\">Happiness</span>]"
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-70072093\">Monster_W5_Ripper_Flesh</a>[<span class=\"descriptionNumberColor\">Happiness Puppet</span>]"
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable",
              "variableName": "ParasitismCount",
              "value": {
                "operator": "Variables[0] (ParasitismCount) || Constants[0] (1) || ADD || RETURN",
                "displayLines": "(ParasitismCount + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "ParasitismCount"
                ]
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "ParasitismCount",
            "compareType": ">",
            "value2": 2
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
                "name": "AND",
                "conditionList": [
                  {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-329548690\">Monster_W5_Ripper_Parasitism</a>[<span class=\"descriptionNumberColor\">Happiness</span>]"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-70072093\">Monster_W5_Ripper_Flesh</a>[<span class=\"descriptionNumberColor\">Happiness Puppet</span>]"
                      }
                    ]
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1415873063\">Monster_W5_Ripper_Ability03_Mark</a>",
                    "invertCondition": true
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
                  "modifier": "<a class=\"gModGreen\" id=\"1415873063\">Monster_W5_Ripper_Ability03_Mark</a>"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "ParasitismCount",
                "compareType": ">=",
                "value2": 2
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
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-329548690\">Monster_W5_Ripper_Parasitism</a>[<span class=\"descriptionNumberColor\">Happiness</span>]"
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-70072093\">Monster_W5_Ripper_Flesh</a>[<span class=\"descriptionNumberColor\">Happiness Puppet</span>]"
                          }
                        ]
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1415873063\">Monster_W5_Ripper_Ability03_Mark</a>",
                        "invertCondition": true
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
                      "modifier": "<a class=\"gModGreen\" id=\"1415873063\">Monster_W5_Ripper_Ability03_Mark</a>"
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "ParasitismCount",
                "compareType": ">=",
                "value2": 3
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
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-329548690\">Monster_W5_Ripper_Parasitism</a>[<span class=\"descriptionNumberColor\">Happiness</span>]"
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-70072093\">Monster_W5_Ripper_Flesh</a>[<span class=\"descriptionNumberColor\">Happiness Puppet</span>]"
                          }
                        ]
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1415873063\">Monster_W5_Ripper_Ability03_Mark</a>",
                        "invertCondition": true
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
                      "modifier": "<a class=\"gModGreen\" id=\"1415873063\">Monster_W5_Ripper_Ability03_Mark</a>"
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "ParasitismCount",
                "compareType": ">=",
                "value2": 4
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
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-329548690\">Monster_W5_Ripper_Parasitism</a>[<span class=\"descriptionNumberColor\">Happiness</span>]"
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-70072093\">Monster_W5_Ripper_Flesh</a>[<span class=\"descriptionNumberColor\">Happiness Puppet</span>]"
                          }
                        ]
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1415873063\">Monster_W5_Ripper_Ability03_Mark</a>",
                        "invertCondition": true
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
                      "modifier": "<a class=\"gModGreen\" id=\"1415873063\">Monster_W5_Ripper_Ability03_Mark</a>"
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
                "name": "Compare: Variable",
                "value1": "ParasitismCount",
                "compareType": "=",
                "value2": 1
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
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-329548690\">Monster_W5_Ripper_Parasitism</a>[<span class=\"descriptionNumberColor\">Happiness</span>]"
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-70072093\">Monster_W5_Ripper_Flesh</a>[<span class=\"descriptionNumberColor\">Happiness Puppet</span>]"
                          }
                        ]
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1415873063\">Monster_W5_Ripper_Ability03_Mark</a>",
                        "invertCondition": true
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
                      "modifier": "<a class=\"gModGreen\" id=\"1415873063\">Monster_W5_Ripper_Ability03_Mark</a>"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "maxTargets": 1,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-329548690\">Monster_W5_Ripper_Parasitism</a>[<span class=\"descriptionNumberColor\">Happiness</span>]"
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-70072093\">Monster_W5_Ripper_Flesh</a>[<span class=\"descriptionNumberColor\">Happiness Puppet</span>]"
                          }
                        ]
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1415873063\">Monster_W5_Ripper_Ability03_Mark</a>",
                        "invertCondition": true
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
                      "modifier": "<a class=\"gModGreen\" id=\"1415873063\">Monster_W5_Ripper_Ability03_Mark</a>"
                    }
                  ]
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "maxTargets": 1,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-329548690\">Monster_W5_Ripper_Parasitism</a>[<span class=\"descriptionNumberColor\">Happiness</span>]"
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-70072093\">Monster_W5_Ripper_Flesh</a>[<span class=\"descriptionNumberColor\">Happiness Puppet</span>]"
                          }
                        ]
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1415873063\">Monster_W5_Ripper_Ability03_Mark</a>",
                        "invertCondition": true
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
                      "modifier": "<a class=\"gModGreen\" id=\"1415873063\">Monster_W5_Ripper_Ability03_Mark</a>"
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
            "value1": "ParasitismCount",
            "compareType": "=",
            "value2": 1
          },
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "ParasitismCount",
                "compareType": "=",
                "value2": 2
              }
            }
          ]
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "_MaxHP"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "SplitRatio",
          "value": {
            "operator": "Constants[0] (1) || Constants[1] (7) || DIV || RETURN",
            "displayLines": "(1 / 7)",
            "constants": [
              1,
              7
            ],
            "variables": []
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1415873063\">Monster_W5_Ripper_Ability03_Mark</a>"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Thunder",
                "DamageFlat": {
                  "operator": "Variables[0] (_MaxHP) || Variables[1] ({[Skill03[0]]}) || MUL || Variables[2] (SplitRatio) || MUL || RETURN",
                  "displayLines": "((_MaxHP * {[Skill03[0]]}) * SplitRatio)",
                  "constants": [],
                  "variables": [
                    "_MaxHP",
                    "{[Skill03[0]]}",
                    "SplitRatio"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1415873063\">Monster_W5_Ripper_Ability03_Mark</a>"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Thunder",
                "DamageFlat": {
                  "operator": "Variables[0] (_MaxHP) || Variables[1] ({[Skill03[0]]}) || MUL || Variables[2] (SplitRatio) || MUL || RETURN",
                  "displayLines": "((_MaxHP * {[Skill03[0]]}) * SplitRatio)",
                  "constants": [],
                  "variables": [
                    "_MaxHP",
                    "{[Skill03[0]]}",
                    "SplitRatio"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1415873063\">Monster_W5_Ripper_Ability03_Mark</a>"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Thunder",
                "DamageFlat": {
                  "operator": "Variables[0] (_MaxHP) || Variables[1] ({[Skill03[0]]}) || MUL || Variables[2] (SplitRatio) || MUL || RETURN",
                  "displayLines": "((_MaxHP * {[Skill03[0]]}) * SplitRatio)",
                  "constants": [],
                  "variables": [
                    "_MaxHP",
                    "{[Skill03[0]]}",
                    "SplitRatio"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1415873063\">Monster_W5_Ripper_Ability03_Mark</a>"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Thunder",
                "DamageFlat": {
                  "operator": "Variables[0] (_MaxHP) || Variables[1] ({[Skill03[0]]}) || MUL || Variables[2] (SplitRatio) || MUL || RETURN",
                  "displayLines": "((_MaxHP * {[Skill03[0]]}) * SplitRatio)",
                  "constants": [],
                  "variables": [
                    "_MaxHP",
                    "{[Skill03[0]]}",
                    "SplitRatio"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1415873063\">Monster_W5_Ripper_Ability03_Mark</a>"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Thunder",
                "DamageFlat": {
                  "operator": "Variables[0] (_MaxHP) || Variables[1] ({[Skill03[0]]}) || MUL || Variables[2] (SplitRatio) || MUL || RETURN",
                  "displayLines": "((_MaxHP * {[Skill03[0]]}) * SplitRatio)",
                  "constants": [],
                  "variables": [
                    "_MaxHP",
                    "{[Skill03[0]]}",
                    "SplitRatio"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1415873063\">Monster_W5_Ripper_Ability03_Mark</a>"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Thunder",
                "DamageFlat": {
                  "operator": "Variables[0] (_MaxHP) || Variables[1] ({[Skill03[0]]}) || MUL || Variables[2] (SplitRatio) || MUL || RETURN",
                  "displayLines": "((_MaxHP * {[Skill03[0]]}) * SplitRatio)",
                  "constants": [],
                  "variables": [
                    "_MaxHP",
                    "{[Skill03[0]]}",
                    "SplitRatio"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1415873063\">Monster_W5_Ripper_Ability03_Mark</a>"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Thunder",
                "DamageFlat": {
                  "operator": "Variables[0] (_MaxHP) || Variables[1] ({[Skill03[0]]}) || MUL || Variables[2] (SplitRatio) || MUL || RETURN",
                  "displayLines": "((_MaxHP * {[Skill03[0]]}) * SplitRatio)",
                  "constants": [],
                  "variables": [
                    "_MaxHP",
                    "{[Skill03[0]]}",
                    "SplitRatio"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK"
              }
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Heal",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "healPercent": {
            "operator": "Variables[0] ({[Skill03[1]]}) || Variables[1] (ParasitismCount) || MUL || RETURN",
            "displayLines": "({[Skill03[1]]} * ParasitismCount)",
            "constants": [],
            "variables": [
              "{[Skill03[1]]}",
              "ParasitismCount"
            ]
          },
          "formula": "Heal from Target MaxHP"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player & Enemy Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1415873063\">Monster_W5_Ripper_Ability03_Mark</a>"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "5024010_Monster_W5_Ripper_Ability03_Part01": {
      "fileName": "5024010_Monster_W5_Ripper_Ability03_Part01",
      "childAbilityList": [
        "5024010_Monster_W5_Ripper_Ability03_Camera",
        "5024010_Monster_W5_Ripper_Ability03_Part01",
        "5024010_Monster_W5_Ripper_Ability03_Part02"
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
          "ability": "Monster_W5_Ripper_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}",
        "targetIsVariable": true
      },
      "references": []
    },
    "5024010_Monster_W5_Ripper_Ability02_Part02": {
      "fileName": "5024010_Monster_W5_Ripper_Ability02_Part02",
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
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] (UnusedUnderThisBase_29) || RETURN",
              "displayLines": "UnusedUnderThisBase_29",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_29"
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
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "5024010_Monster_W5_Ripper_Ability02_Part01": {
      "fileName": "5024010_Monster_W5_Ripper_Ability02_Part01",
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
          "ability": "Monster_W5_Ripper_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "5024010_Monster_W5_Ripper_Ability01_Part02": {
      "fileName": "5024010_Monster_W5_Ripper_Ability01_Part02",
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
            "Trigger: Attack End"
          ]
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "5024010_Monster_W5_Ripper_Ability01_Part01": {
      "fileName": "5024010_Monster_W5_Ripper_Ability01_Part01",
      "childAbilityList": [
        "5024010_Monster_W5_Ripper_Ability01_Camera",
        "5024010_Monster_W5_Ripper_Ability01_Part01",
        "5024010_Monster_W5_Ripper_Ability01_Part02"
      ],
      "skillTrigger": "Skill01",
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
          "ability": "Monster_W5_Ripper_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      },
      "references": []
    },
    "5024010_Monster_W5_Ripper_Passive01": {
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
    },
    "5024010_Monster_W5_Ripper_PassiveAbility_BGM": {
      "fileName": "5024010_Monster_W5_Ripper_PassiveAbility_BGM",
      "childAbilityList": [
        "5024010_Monster_W5_Ripper_PassiveAbility_BGM"
      ],
      "skillTrigger": "Passive_BGM",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Stage Type",
                "stageType": "Challenge"
              },
              {
                "name": "Stage Type",
                "stageType": "VerseSimulation"
              },
              {
                "name": "Stage Type",
                "stageType": "StrongChallengeActivity"
              },
              {
                "name": "Stage Type",
                "stageType": "RogueRelic"
              },
              {
                "name": "Stage Type",
                "stageType": "GridFightActivity"
              }
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1024861\">Enemy_W5_Ripper_ResetStageBGM</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1024861\">Enemy_W5_Ripper_ResetStageBGM</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Varying Data",
                  "target": null,
                  "variableName": "MDF_WaveIndex",
                  "value": "CurWaveIndex"
                }
              ]
            },
            {
              "eventTrigger": "New Enemy Wave: Start",
              "execute": [
                {
                  "name": "Define Custom Variable with Varying Data",
                  "target": null,
                  "variableName": "MDF_WaveIndex2",
                  "value": "CurWaveIndex"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_WaveIndex",
                    "compareType": "NOT=",
                    "value2": {
                      "operator": "Variables[0] (MDF_WaveIndex2) || RETURN",
                      "displayLines": "MDF_WaveIndex2",
                      "constants": [],
                      "variables": [
                        "MDF_WaveIndex2"
                      ]
                    }
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "5024010_Modifiers": {
      "fileName": "5024010_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1275502108\">Monster_W5_Ripper_BattleScore2Count</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1951383355\">Monster_W5_Ripper_BattleScore1Count</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1520070084\">W5_Ripper_BattleScore2</a>",
          "execute": [
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1275502108\">Monster_W5_Ripper_BattleScore2Count</a>",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "relatedAchievements": [
                        {
                          "title": "Full Sanity",
                          "desc": "In the battle against \"Paramount Bliss Inverted: Illwish Archlotus,\" no characters were converted into Happiness Puppets by triggering \"Happiness\"",
                          "rarity": "Low"
                        }
                      ]
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
          "for": "<a class=\"gModGreen\" id=\"mod__1570402941\">W5_Ripper_BattleScore1</a>",
          "execute": [
            {
              "eventTrigger": "Entity Put Into Limbo [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target 2}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1374122123\">Monster_W5_Ripper_Crazy_CriticalAttackEffect</a>"
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "relatedAchievements": [
                        {
                          "title": "Marionette Evil",
                          "desc": "In the battle against \"Paramount Bliss Inverted: Illwish Archlotus,\" an ally character is converted into a \"Happiness Puppet,\" then deals \"Right on Target\" and defeats any target",
                          "rarity": "Low"
                        }
                      ]
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
          "for": "<a class=\"gModGreen\" id=\"mod__209501789\">Monster_W5_Ripper_Main_HPTrigger2</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_ActionCount",
                    "compareType": "=",
                    "value2": 2
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_ActionCount",
                      "value": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "HP Change [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": "<=",
                    "value2": {
                      "operator": "Variables[0] (MDF_HPTriggerCompareRatio) || RETURN",
                      "displayLines": "MDF_HPTriggerCompareRatio",
                      "constants": [],
                      "variables": [
                        "MDF_HPTriggerCompareRatio"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Action Advance/Delay",
                      "advanceType": "Set",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "set": 0
                    },
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_HPTriggerRatio",
            "MDF_HPTriggerCompareRatio"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__159168932\">Monster_W5_Ripper_Main_HPTrigger1</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_ActionCount",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_ActionCount",
                      "value": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "HP Change [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": "<=",
                    "value2": {
                      "operator": "Variables[0] (MDF_HPTriggerCompareRatio) || RETURN",
                      "displayLines": "MDF_HPTriggerCompareRatio",
                      "constants": [],
                      "variables": [
                        "MDF_HPTriggerCompareRatio"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Action Advance/Delay",
                      "advanceType": "Set",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "set": 0
                    },
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_HPTriggerRatio",
            "MDF_HPTriggerCompareRatio"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-350128982\">Monster_W5_Ripper_MainBETrigger3</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-333351363\">Monster_W5_Ripper_MainBETrigger2</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-383684220\">Monster_W5_Ripper_MainBETrigger1</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1116201071\">Monster_W5_Ripper_MainPerform</a>",
          "modifierFlags": [
            "STAT_ForceActionable"
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1617541886\">Monster_W5_Ripper_ForceAutoLock</a>",
          "modifierFlags": [
            "TauntForAutoLock"
          ],
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__132804093\">Monster_W5_Ripper_PlayerUltraAbility</a>",
          "execute": [
            {
              "eventTrigger": "Action Choice Window [Owner]",
              "execute": [
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valuePercent": 1,
                  "isFixed": "(Fixed)"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__344113408\">Monster_W5_Ripper_Protect_Weakness</a>[<span class=\"descriptionNumberColor\">Weakness Protected</span>]",
          "modifierFlags": [
            "MuteBreak"
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
                  "action": "Protected",
                  "valueList": [
                    "Physical",
                    "Fire",
                    "Ice",
                    "Thunder",
                    "Wind",
                    "Quantum",
                    "Imaginary"
                  ]
                }
              ]
            }
          ],
          "description": "While \"Paramount Bliss Inverted: Illwish Lotus\" is in the Charging state, this unit's Toughness cannot be reduced.",
          "type": "Other",
          "effectName": "Weakness Protected",
          "statusName": "Weakness Protected"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1295254977\">Monster_W5_Ripper_Main2_DamageUp</a>",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
                  "value": 1
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
                  "value": 3
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2100417822\">Monster_W5_Ripper_Main2_DisabltAction</a>",
          "modifierFlags": [
            "DisableAction"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-671604741\">Monster_W5_Ripper_Main2LockHP</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": 1.0011718e-7
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2042265236\">Monster_W5_Ripper_Main2</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase] [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1938760859\">Modifier_BattleEventAbility_TVBroadcast_Positive</a>"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-350128982\">Monster_W5_Ripper_MainBETrigger3</a>"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "Main2Check",
                        "compareType": "=",
                        "value2": 0
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
                            "name": "Character ID",
                            "ID": 8009,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "characterName": "{NICKNAME}"
                          },
                          "ifTargetFound": [
                            {
                              "name": "Action Advance/Delay",
                              "advanceType": "Set",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "set": 0
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1055849459\">Modifier_Story42_PlayerBoy_InsertAfterAbility</a>"
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1295254977\">Monster_W5_Ripper_Main2_DamageUp</a>"
                            }
                          ]
                        },
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Player Team All}}"
                          },
                          "maxTargets": 1,
                          "conditions": {
                            "name": "Character ID",
                            "ID": 8010,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "characterName": "{NICKNAME}"
                          },
                          "ifTargetFound": [
                            {
                              "name": "Action Advance/Delay",
                              "advanceType": "Set",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "set": 0
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"667898961\">Modifier_Story42_PlayerGirl_InsertAfterAbility</a>"
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1295254977\">Monster_W5_Ripper_Main2_DamageUp</a>"
                            }
                          ]
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Main2Check",
                          "value": 1
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Action Choice Window [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1055849459\">Modifier_Story42_PlayerBoy_InsertAfterAbility</a>"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"667898961\">Modifier_Story42_PlayerGirl_InsertAfterAbility</a>"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": 1.0011718e-7
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2100417822\">Monster_W5_Ripper_Main2_DisabltAction</a>"
                },
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
                      "modifier": "<a class=\"gModGreen\" id=\"-671604741\">Monster_W5_Ripper_Main2LockHP</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Locked HP Floor Reached [Owner]",
              "execute": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W5_Ripper_SpecialWin_Insert2",
                  "priorityTag": "EnemyPhaseChange",
                  "ownerState": "Mask_AliveOrLimbo",
                  "targetState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": false
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
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
                      {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Skill Type",
                            "skillType": "Basic ATK"
                          },
                          {
                            "name": "Skill Type",
                            "skillType": "Skill"
                          }
                        ]
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "Main2Check",
                        "compareType": ">",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "Main2Check",
                        "compareType": "=",
                        "value2": 1
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Skill Type",
                        "skillType": "Ultimate"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "MDF_TalkSentence_11_Check",
                        "compareType": "=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_TalkSentence_11_Check",
                      "value": 1
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2100417822\">Monster_W5_Ripper_Main2_DisabltAction</a>"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
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
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"159168932\">Monster_W5_Ripper_Main_HPTrigger1</a>",
                      "valuePerStack": {
                        "MDF_HPTriggerRatio": 0.25,
                        "MDF_HPTriggerCompareRatio": 0.2
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
                      {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Skill Type",
                            "skillType": "Basic ATK"
                          },
                          {
                            "name": "Skill Type",
                            "skillType": "Skill"
                          }
                        ]
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "Main2Check",
                        "compareType": ">",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "Main2Check",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Main2Check",
                          "value": 2
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
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "Main2Check",
                    "compareType": "=",
                    "value2": 4
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1116201071\">Monster_W5_Ripper_MainPerform</a>"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1055849459\">Modifier_Story42_PlayerBoy_InsertAfterAbility</a>"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"667898961\">Modifier_Story42_PlayerGirl_InsertAfterAbility</a>"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1295254977\">Monster_W5_Ripper_Main2_DamageUp</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Extra Action/Turn [Anyone]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "Main2Check",
                    "compareType": "=",
                    "value2": 3
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Main2Check",
                      "value": 4
                    },
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
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-671604741\">Monster_W5_Ripper_Main2LockHP</a>"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "Main2Check",
                    "compareType": "=",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Main2Check",
                      "value": 3
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
          "for": "<a class=\"gModGreen\" id=\"mod__62518190\">Monster_W5_Ripper_Main</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase] [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"200611719\">Modifier_BattleEventAbility_TVBroadcast_Neutral</a>"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-333351363\">Monster_W5_Ripper_MainBETrigger2</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Action Choice Window [Anyone]"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": 1.0011718e-7
                }
              ]
            },
            {
              "eventTrigger": "HP Change [Owner]",
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
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "CurrentHP%",
                        "compareType": "<=",
                        "value2": 0.3
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "CurrentHP%",
                        "compareType": ">",
                        "value2": 1.0011718e-7
                      }
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Locked HP Floor Reached [Owner]",
              "execute": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W5_Ripper_SpecialWin_Insert1",
                  "priorityTag": "EnemyPhaseChange",
                  "ownerState": "Mask_AliveOrLimbo",
                  "targetState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": false
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1788107220\">Monster_W5_Ripper_Ability06_SpecialFlesh</a>",
          "stackData": [],
          "latentQueue": [
            "MainCount"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1415873063\">Monster_W5_Ripper_Ability03_Mark</a>",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1098328598\">Monster_W5_Ripper_Ability06_Mark</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            }
          ],
          "stackData": [],
          "latentQueue": [
            "MainCount"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-98226572\">Monster_W5_Ripper_DamageTakenUp</a>[<span class=\"descriptionNumberColor\">Teasing</span>]",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "ModifierLayers",
                  "multiplier": 1
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_DamageTakenUpRatio_PerLayer) || Variables[1] (ModifierLayers) || MUL || RETURN",
                    "displayLines": "(MDF_DamageTakenUpRatio_PerLayer * ModifierLayers)",
                    "constants": [],
                    "variables": [
                      "MDF_DamageTakenUpRatio_PerLayer",
                      "ModifierLayers"
                    ]
                  }
                }
              ]
            }
          ],
          "useEntitySnapshot": true,
          "stackData": [
            "MDF_DamageTakenUpRatio_PerLayer"
          ],
          "latentQueue": [
            "MDF_InsertCheck"
          ],
          "description": "DMG received increases by <span class=\"descriptionNumberColor\">MDF_DamageTakenUpRatio_PerLayer</span>. This effect is stackable.",
          "type": "Debuff",
          "effectName": "Vulnerability",
          "statusName": "Teasing",
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1642182695\">Monster_W5_Ripper_Flesh_UITop</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-395596726\">Monster_W5_Ripper_Flesh_DisableAction</a>",
          "modifierFlags": [
            "DisableAction"
          ],
          "duration": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-70072093\">Monster_W5_Ripper_Flesh</a>[<span class=\"descriptionNumberColor\">Happiness Puppet</span>]",
          "stackType": "Prolong",
          "modifierFlags": [
            "STAT_CTRL",
            147,
            "AvatarBreak"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Define Modifier-Specific Variable",
                  "modifierName": "<a class=\"gModGreen\" id=\"-329548690\">Monster_W5_Ripper_Parasitism</a>[<span class=\"descriptionNumberColor\">Happiness</span>]",
                  "variableName": "MDF_SummonFlag",
                  "value": 1
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1642182695\">Monster_W5_Ripper_Flesh_UITop</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"34096710\">Monster_W5_Ripper_FleshEffect</a>"
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Disable Abilities",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "abilityTypes": [
                    "Ultimate"
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_FleshElationPoint",
            "MDF_FleshExtraChance",
            "MDF_FleshExtraElationPoint",
            "MDF_AttackEnemyChance",
            "MDF_DamagePercentage",
            "MDF_MaxDamageRatio",
            "MDF_MinDamageRatio",
            "MDF_ExtraDamageMultiple",
            "MDF_EnemyExtraDamageMultiple"
          ],
          "latentQueue": [
            "MainCount"
          ],
          "description": "Cannot take action. At the start of each turn, randomly enters either \"Outrage\" or \"Dominance\" state and gains Punchline. Has a chance to trigger \"Right on Target,\" granting allies more Punchline.",
          "type": "Debuff",
          "effectName": "Happiness Puppet",
          "statusName": "Happiness Puppet"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__34096710\">Monster_W5_Ripper_FleshEffect</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Ripper: Self}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1648139352\">Monster_W5_Ripper_MindControl</a>",
                  "valuePerStack": {
                    "MDF_FleshElationPoint": {
                      "operator": "Variables[0] (MDF_FleshElationPoint) || RETURN",
                      "displayLines": "MDF_FleshElationPoint",
                      "constants": [],
                      "variables": [
                        "MDF_FleshElationPoint"
                      ]
                    },
                    "MDF_FleshExtraChance": {
                      "operator": "Variables[0] (MDF_FleshExtraChance) || RETURN",
                      "displayLines": "MDF_FleshExtraChance",
                      "constants": [],
                      "variables": [
                        "MDF_FleshExtraChance"
                      ]
                    },
                    "MDF_FleshExtraElationPoint": {
                      "operator": "Variables[0] (MDF_FleshExtraElationPoint) || RETURN",
                      "displayLines": "MDF_FleshExtraElationPoint",
                      "constants": [],
                      "variables": [
                        "MDF_FleshExtraElationPoint"
                      ]
                    },
                    "MDF_AttackEnemyChance": {
                      "operator": "Variables[0] (MDF_AttackEnemyChance) || RETURN",
                      "displayLines": "MDF_AttackEnemyChance",
                      "constants": [],
                      "variables": [
                        "MDF_AttackEnemyChance"
                      ]
                    },
                    "MDF_DamagePercentage": {
                      "operator": "Variables[0] (MDF_DamagePercentage) || RETURN",
                      "displayLines": "MDF_DamagePercentage",
                      "constants": [],
                      "variables": [
                        "MDF_DamagePercentage"
                      ]
                    },
                    "MDF_MaxDamageRatio": {
                      "operator": "Variables[0] (MDF_MaxDamageRatio) || RETURN",
                      "displayLines": "MDF_MaxDamageRatio",
                      "constants": [],
                      "variables": [
                        "MDF_MaxDamageRatio"
                      ]
                    },
                    "MDF_MinDamageRatio": {
                      "operator": "Variables[0] (MDF_MinDamageRatio) || RETURN",
                      "displayLines": "MDF_MinDamageRatio",
                      "constants": [],
                      "variables": [
                        "MDF_MinDamageRatio"
                      ]
                    },
                    "MDF_ExtraDamageMultiple": {
                      "operator": "Variables[0] (MDF_ExtraDamageMultiple) || RETURN",
                      "displayLines": "MDF_ExtraDamageMultiple",
                      "constants": [],
                      "variables": [
                        "MDF_ExtraDamageMultiple"
                      ]
                    },
                    "MDF_EnemyExtraDamageMultiple": {
                      "operator": "Variables[0] (MDF_EnemyExtraDamageMultiple) || RETURN",
                      "displayLines": "MDF_EnemyExtraDamageMultiple",
                      "constants": [],
                      "variables": [
                        "MDF_EnemyExtraDamageMultiple"
                      ]
                    }
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_FleshElationPoint",
            "MDF_FleshExtraChance",
            "MDF_FleshExtraElationPoint",
            "MDF_AttackEnemyChance",
            "MDF_DamagePercentage",
            "MDF_MaxDamageRatio",
            "MDF_MinDamageRatio",
            "MDF_ExtraDamageMultiple",
            "MDF_EnemyExtraDamageMultiple"
          ],
          "latentQueue": [
            "MainCount"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-100211662\">Monster_W5_Ripper_AddFleshImmediately</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-70072093\">Monster_W5_Ripper_Flesh</a>[<span class=\"descriptionNumberColor\">Happiness Puppet</span>]",
                  "duration": {
                    "operator": "Variables[0] (FleshLifeTime) || RETURN",
                    "displayLines": "FleshLifeTime",
                    "constants": [],
                    "variables": [
                      "FleshLifeTime"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_FleshElationPoint": {
                      "operator": "Variables[0] (MDF_FleshElationPoint) || RETURN",
                      "displayLines": "MDF_FleshElationPoint",
                      "constants": [],
                      "variables": [
                        "MDF_FleshElationPoint"
                      ]
                    },
                    "MDF_FleshExtraChance": {
                      "operator": "Variables[0] (MDF_FleshExtraChance) || RETURN",
                      "displayLines": "MDF_FleshExtraChance",
                      "constants": [],
                      "variables": [
                        "MDF_FleshExtraChance"
                      ]
                    },
                    "MDF_FleshExtraElationPoint": {
                      "operator": "Variables[0] (MDF_FleshExtraElationPoint) || RETURN",
                      "displayLines": "MDF_FleshExtraElationPoint",
                      "constants": [],
                      "variables": [
                        "MDF_FleshExtraElationPoint"
                      ]
                    },
                    "MDF_AttackEnemyChance": {
                      "operator": "Variables[0] (MDF_AttackEnemyChance) || RETURN",
                      "displayLines": "MDF_AttackEnemyChance",
                      "constants": [],
                      "variables": [
                        "MDF_AttackEnemyChance"
                      ]
                    },
                    "MDF_DamagePercentage": {
                      "operator": "Variables[0] (MDF_DamagePercentage) || RETURN",
                      "displayLines": "MDF_DamagePercentage",
                      "constants": [],
                      "variables": [
                        "MDF_DamagePercentage"
                      ]
                    },
                    "MDF_MaxDamageRatio": {
                      "operator": "Variables[0] (MDF_MaxDamageRatio) || RETURN",
                      "displayLines": "MDF_MaxDamageRatio",
                      "constants": [],
                      "variables": [
                        "MDF_MaxDamageRatio"
                      ]
                    },
                    "MDF_MinDamageRatio": {
                      "operator": "Variables[0] (MDF_MinDamageRatio) || RETURN",
                      "displayLines": "MDF_MinDamageRatio",
                      "constants": [],
                      "variables": [
                        "MDF_MinDamageRatio"
                      ]
                    },
                    "MDF_ExtraDamageMultiple": {
                      "operator": "Variables[0] (MDF_ExtraDamageMultiple) || RETURN",
                      "displayLines": "MDF_ExtraDamageMultiple",
                      "constants": [],
                      "variables": [
                        "MDF_ExtraDamageMultiple"
                      ]
                    },
                    "MDF_EnemyExtraDamageMultiple": {
                      "operator": "Variables[0] (MDF_EnemyExtraDamageMultiple) || RETURN",
                      "displayLines": "MDF_EnemyExtraDamageMultiple",
                      "constants": [],
                      "variables": [
                        "MDF_EnemyExtraDamageMultiple"
                      ]
                    }
                  },
                  "casterAssign": "CasterSelf",
                  "success": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Ripper: Self}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1275502108\">Monster_W5_Ripper_BattleScore2Count</a>"
                    },
                    {
                      "name": "Define Modifier-Specific Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifierName": "<a class=\"gModGreen\" id=\"-329548690\">Monster_W5_Ripper_Parasitism</a>[<span class=\"descriptionNumberColor\">Happiness</span>]",
                      "variableName": "MDF_SummonFlag",
                      "value": 1
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-329548690\">Monster_W5_Ripper_Parasitism</a>[<span class=\"descriptionNumberColor\">Happiness</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"34096710\">Monster_W5_Ripper_FleshEffect</a>",
                      "valuePerStack": {
                        "MDF_FleshElationPoint": {
                          "operator": "Variables[0] (MDF_FleshElationPoint) || RETURN",
                          "displayLines": "MDF_FleshElationPoint",
                          "constants": [],
                          "variables": [
                            "MDF_FleshElationPoint"
                          ]
                        },
                        "MDF_FleshExtraChance": {
                          "operator": "Variables[0] (MDF_FleshExtraChance) || RETURN",
                          "displayLines": "MDF_FleshExtraChance",
                          "constants": [],
                          "variables": [
                            "MDF_FleshExtraChance"
                          ]
                        },
                        "MDF_FleshExtraElationPoint": {
                          "operator": "Variables[0] (MDF_FleshExtraElationPoint) || RETURN",
                          "displayLines": "MDF_FleshExtraElationPoint",
                          "constants": [],
                          "variables": [
                            "MDF_FleshExtraElationPoint"
                          ]
                        },
                        "MDF_AttackEnemyChance": {
                          "operator": "Variables[0] (MDF_AttackEnemyChance) || RETURN",
                          "displayLines": "MDF_AttackEnemyChance",
                          "constants": [],
                          "variables": [
                            "MDF_AttackEnemyChance"
                          ]
                        },
                        "MDF_DamagePercentage": {
                          "operator": "Variables[0] (MDF_DamagePercentage) || RETURN",
                          "displayLines": "MDF_DamagePercentage",
                          "constants": [],
                          "variables": [
                            "MDF_DamagePercentage"
                          ]
                        },
                        "MDF_MaxDamageRatio": {
                          "operator": "Variables[0] (MDF_MaxDamageRatio) || RETURN",
                          "displayLines": "MDF_MaxDamageRatio",
                          "constants": [],
                          "variables": [
                            "MDF_MaxDamageRatio"
                          ]
                        },
                        "MDF_MinDamageRatio": {
                          "operator": "Variables[0] (MDF_MinDamageRatio) || RETURN",
                          "displayLines": "MDF_MinDamageRatio",
                          "constants": [],
                          "variables": [
                            "MDF_MinDamageRatio"
                          ]
                        },
                        "MDF_ExtraDamageMultiple": {
                          "operator": "Variables[0] (MDF_ExtraDamageMultiple) || RETURN",
                          "displayLines": "MDF_ExtraDamageMultiple",
                          "constants": [],
                          "variables": [
                            "MDF_ExtraDamageMultiple"
                          ]
                        },
                        "MDF_EnemyExtraDamageMultiple": {
                          "operator": "Variables[0] (MDF_EnemyExtraDamageMultiple) || RETURN",
                          "displayLines": "MDF_EnemyExtraDamageMultiple",
                          "constants": [],
                          "variables": [
                            "MDF_EnemyExtraDamageMultiple"
                          ]
                        }
                      },
                      "casterAssign": "TargetSelf"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Modifier-Specific Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifierName": "<a class=\"gModGreen\" id=\"-329548690\">Monster_W5_Ripper_Parasitism</a>[<span class=\"descriptionNumberColor\">Happiness</span>]",
                      "variableName": "MDF_SummonFlag",
                      "value": 1
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-329548690\">Monster_W5_Ripper_Parasitism</a>[<span class=\"descriptionNumberColor\">Happiness</span>]"
                    }
                  ]
                },
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1116502173\">Monster_W5_Ripper_EnhanceImmediately</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Recently Summoned Enemies}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"523858959\">WMonster_W5_RipperPart_Enhance</a>"
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-709845994\">Monster_W5_Ripper_SummonImmediately</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Create Enemies",
                  "enemyList": [
                    {
                      "name": "Enemy Entry",
                      "enemyID": 5022010,
                      "locationType": "KeepOnEdge"
                    }
                  ]
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2110673178\">Monster_W5_Ripper_SummonMonster</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "LastModifierLayers",
                  "value": {
                    "operator": "Variables[0] (ModifierLayers) || RETURN",
                    "displayLines": "ModifierLayers",
                    "constants": [],
                    "variables": [
                      "ModifierLayers"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "ModifierLayers",
                  "multiplier": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "ModifierLayers",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (LastModifierLayers) || RETURN",
                      "displayLines": "LastModifierLayers",
                      "constants": [],
                      "variables": [
                        "LastModifierLayers"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Looped Event",
                      "maxLoops": {
                        "operator": "Variables[0] (ModifierLayers) || RETURN",
                        "displayLines": "ModifierLayers",
                        "constants": [],
                        "variables": [
                          "ModifierLayers"
                        ]
                      },
                      "Event": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Enemy Team All}}"
                                },
                                "value1": "TeamCharacterCount",
                                "compareType": "<",
                                "value2": 5
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "SummonOrder",
                                "compareType": "=",
                                "value2": 0
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "MDF_DelayRatio",
                                  "value": {
                                    "operator": "Variables[0] ({[Skill04[5]]}) || RETURN",
                                    "displayLines": "{[Skill04[5]]}",
                                    "constants": [],
                                    "variables": [
                                      "{[Skill04[5]]}"
                                    ]
                                  }
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "MDF_DelayRatio",
                                  "value": {
                                    "operator": "Variables[0] ({[Skill04[6]]}) || RETURN",
                                    "displayLines": "{[Skill04[6]]}",
                                    "constants": [],
                                    "variables": [
                                      "{[Skill04[6]]}"
                                    ]
                                  }
                                }
                              ]
                            },
                            {
                              "name": "Create Enemies",
                              "delayPercent": {
                                "operator": "Variables[0] (MDF_DelayRatio) || RETURN",
                                "displayLines": "MDF_DelayRatio",
                                "constants": [],
                                "variables": [
                                  "MDF_DelayRatio"
                                ]
                              },
                              "enemyList": [
                                {
                                  "name": "Enemy Entry",
                                  "enemyID": {
                                    "operator": "Variables[0] (SummonList_ADF_1) || RETURN",
                                    "displayLines": "SummonList_ADF_1",
                                    "constants": [],
                                    "variables": [
                                      "SummonList_ADF_1"
                                    ]
                                  },
                                  "locationType": "KeepOnEdge"
                                }
                              ]
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "SummonOrder",
                              "value": 1
                            },
                            {
                              "name": "Define Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Recently Summoned Enemies}}"
                              },
                              "variableName": "Buff_DamageUpRatio",
                              "value": {
                                "operator": "Variables[0] ({[PassiveSkill01[3]]}) || RETURN",
                                "displayLines": "{[PassiveSkill01[3]]}",
                                "constants": [],
                                "variables": [
                                  "{[PassiveSkill01[3]]}"
                                ]
                              }
                            },
                            {
                              "name": "Define Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Recently Summoned Enemies}}"
                              },
                              "variableName": "Buff_MaxLayer",
                              "value": {
                                "operator": "Variables[0] ({[PassiveSkill01[4]]}) || RETURN",
                                "displayLines": "{[PassiveSkill01[4]]}",
                                "constants": [],
                                "variables": [
                                  "{[PassiveSkill01[4]]}"
                                ]
                              }
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-2110673178\">Monster_W5_Ripper_SummonMonster</a>",
                              "addStacksPerTrigger": -1
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "ModifierLayers",
                                "compareType": "=",
                                "value2": 0
                              },
                              "passed": [
                                {
                                  "name": "Remove Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-2110673178\">Monster_W5_Ripper_SummonMonster</a>"
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2110673178\">Monster_W5_Ripper_SummonMonster</a>",
                  "addStacksPerTrigger": 0
                }
              ]
            }
          ],
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-287768944\">Monster_W5_Ripper_Summon</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "Turn [Action-End Phase] [Anyone]",
              "execute": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W5_Ripper_SummonMonster_Ability",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "priorityTag": "EnemyBuffOthers",
                  "allowAbilityTriggers": false
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "ModifierLayers",
                  "multiplier": 1
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2109211182\">Monster_W5_Ripper_Bonus</a>[<span class=\"descriptionNumberColor\">Inverted Severance</span>]",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_CriticalDamageUpRatio) || RETURN",
                    "displayLines": "MDF_CriticalDamageUpRatio",
                    "constants": [],
                    "variables": [
                      "MDF_CriticalDamageUpRatio"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "CRIT DMG increases by <span class=\"descriptionNumberColor\">MDF_CriticalDamageUpRatio</span> and becomes immune to the \"Happiness Puppet\" effect for the duration.",
          "type": "Buff",
          "effectName": "Inverted Severance",
          "statusName": "Inverted Severance"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-329548690\">Monster_W5_Ripper_Parasitism</a>[<span class=\"descriptionNumberColor\">Happiness</span>]",
          "stackType": "ReplaceButKeepLifeTime",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Add Ability",
                  "abilityName": "Monster_W5_Ripper_FleshChange"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "FleshLifeTime",
                  "value": {
                    "operator": "Variables[0] ({[Skill06[2]]}) || RETURN",
                    "displayLines": "{[Skill06[2]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill06[2]]}"
                    ]
                  }
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Buff_DamageUpRatio",
                  "value": {
                    "operator": "Variables[0] ({[PassiveSkill01[3]]}) || RETURN",
                    "displayLines": "{[PassiveSkill01[3]]}",
                    "constants": [],
                    "variables": [
                      "{[PassiveSkill01[3]]}"
                    ]
                  }
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Buff_MaxLayer",
                  "value": {
                    "operator": "Variables[0] ({[PassiveSkill01[4]]}) || RETURN",
                    "displayLines": "{[PassiveSkill01[4]]}",
                    "constants": [],
                    "variables": [
                      "{[PassiveSkill01[4]]}"
                    ]
                  }
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "MDF_FleshElationPoint",
                  "value": {
                    "operator": "Variables[0] ({[Skill06[3]]}) || RETURN",
                    "displayLines": "{[Skill06[3]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill06[3]]}"
                    ]
                  }
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "MDF_FleshExtraChance",
                  "value": {
                    "operator": "Variables[0] ({[Skill06[4]]}) || RETURN",
                    "displayLines": "{[Skill06[4]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill06[4]]}"
                    ]
                  }
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "MDF_FleshExtraElationPoint",
                  "value": {
                    "operator": "Variables[0] ({[Skill06[5]]}) || RETURN",
                    "displayLines": "{[Skill06[5]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill06[5]]}"
                    ]
                  }
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "MDF_AttackEnemyChance",
                  "value": {
                    "operator": "Variables[0] ({[PassiveSkill02[0]]}) || RETURN",
                    "displayLines": "{[PassiveSkill02[0]]}",
                    "constants": [],
                    "variables": [
                      "{[PassiveSkill02[0]]}"
                    ]
                  }
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "MDF_DamagePercentage",
                  "value": {
                    "operator": "Variables[0] ({[PassiveSkill02[1]]}) || RETURN",
                    "displayLines": "{[PassiveSkill02[1]]}",
                    "constants": [],
                    "variables": [
                      "{[PassiveSkill02[1]]}"
                    ]
                  }
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "MDF_MaxDamageRatio",
                  "value": {
                    "operator": "Variables[0] ({[PassiveSkill02[2]]}) || RETURN",
                    "displayLines": "{[PassiveSkill02[2]]}",
                    "constants": [],
                    "variables": [
                      "{[PassiveSkill02[2]]}"
                    ]
                  }
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "MDF_MinDamageRatio",
                  "value": {
                    "operator": "Variables[0] ({[PassiveSkill02[3]]}) || RETURN",
                    "displayLines": "{[PassiveSkill02[3]]}",
                    "constants": [],
                    "variables": [
                      "{[PassiveSkill02[3]]}"
                    ]
                  }
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "MDF_ExtraDamageMultiple",
                  "value": {
                    "operator": "Variables[0] ({[PassiveSkill02[4]]}) || RETURN",
                    "displayLines": "{[PassiveSkill02[4]]}",
                    "constants": [],
                    "variables": [
                      "{[PassiveSkill02[4]]}"
                    ]
                  }
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "MDF_EnemyExtraDamageMultiple",
                  "value": {
                    "operator": "Variables[0] ({[PassiveSkill02[5]]}) || RETURN",
                    "displayLines": "{[PassiveSkill02[5]]}",
                    "constants": [],
                    "variables": [
                      "{[PassiveSkill02[5]]}"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-70072093\">Monster_W5_Ripper_Flesh</a>[<span class=\"descriptionNumberColor\">Happiness Puppet</span>]",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Enemy Team All}}"
                        },
                        "value1": "TeamCharacterCount",
                        "compareType": ">=",
                        "value2": 5
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_AttackFlag",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-329548690\">Monster_W5_Ripper_Parasitism</a>[<span class=\"descriptionNumberColor\">Happiness</span>]",
                          "addStacksPerTrigger": {
                            "operator": "Variables[0] (MDF_AddLayer) || Constants[0] (1) || SUB || RETURN",
                            "displayLines": "(MDF_AddLayer - 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "MDF_AddLayer"
                            ]
                          }
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_AttackFlag",
                          "value": 0
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-329548690\">Monster_W5_Ripper_Parasitism</a>[<span class=\"descriptionNumberColor\">Happiness</span>]",
                          "addStacksPerTrigger": {
                            "operator": "Variables[0] (MDF_AddLayer) || RETURN",
                            "displayLines": "MDF_AddLayer",
                            "constants": [],
                            "variables": [
                              "MDF_AddLayer"
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_DieFlag",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-329548690\">Monster_W5_Ripper_Parasitism</a>[<span class=\"descriptionNumberColor\">Happiness</span>]",
                          "addStacksPerTrigger": -1
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_DieFlag",
                          "value": 0
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
                  "modifier": "<a class=\"gModGreen\" id=\"-2110673178\">Monster_W5_Ripper_SummonMonster</a>",
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (MDF_SummonCount) || RETURN",
                    "displayLines": "MDF_SummonCount",
                    "constants": [],
                    "variables": [
                      "MDF_SummonCount"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "SummonOrder",
                  "value": 0
                }
              ],
              "priorityLevel": 100
            },
            {
              "eventTrigger": "Turn [Action-End Phase]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "ModifierLayers",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                      "displayLines": "MDF_MaxLayer",
                      "constants": [],
                      "variables": [
                        "MDF_MaxLayer"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_ConversionFlag",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_ConversionFlag",
                          "value": 1
                        },
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_W5_Ripper_FleshChange",
                          "priorityTag": "EnemyBuffOthers",
                          "allowAbilityTriggers": false
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "LastModifierLayers",
                  "value": {
                    "operator": "Variables[0] (ModifierLayers) || RETURN",
                    "displayLines": "ModifierLayers",
                    "constants": [],
                    "variables": [
                      "ModifierLayers"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "ModifierLayers",
                  "multiplier": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "ModifierLayers",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                          "displayLines": "MDF_MaxLayer",
                          "constants": [],
                          "variables": [
                            "MDF_MaxLayer"
                          ]
                        }
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "LastModifierLayers",
                        "compareType": "<",
                        "value2": {
                          "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                          "displayLines": "MDF_MaxLayer",
                          "constants": [],
                          "variables": [
                            "MDF_MaxLayer"
                          ]
                        }
                      }
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "ModifierLayers",
                        "compareType": "<",
                        "value2": {
                          "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                          "displayLines": "MDF_MaxLayer",
                          "constants": [],
                          "variables": [
                            "MDF_MaxLayer"
                          ]
                        }
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "LastModifierLayers",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                          "displayLines": "MDF_MaxLayer",
                          "constants": [],
                          "variables": [
                            "MDF_MaxLayer"
                          ]
                        }
                      }
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "ModifierLayers",
                    "compareType": "=",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_Init",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_Init",
                          "value": 1
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "ModifierLayers",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2109211182\">Monster_W5_Ripper_Bonus</a>[<span class=\"descriptionNumberColor\">Inverted Severance</span>]",
                      "duration": {
                        "operator": "Variables[0] ({[Skill04[8]]}) || RETURN",
                        "displayLines": "{[Skill04[8]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill04[8]]}"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_CriticalDamageUpRatio": {
                          "operator": "Variables[0] ({[Skill04[7]]}) || RETURN",
                          "displayLines": "{[Skill04[7]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill04[7]]}"
                          ]
                        }
                      }
                    },
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Target Exists",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target 2}}"
                        }
                      },
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team"
                      },
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target 2}}"
                        },
                        "mustBeAlive2": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "<a class=\"gModGreen\" id=\"-329548690\">Monster_W5_Ripper_Parasitism</a>[<span class=\"descriptionNumberColor\">Happiness</span>]",
                        "compareType": "=",
                        "value2": 0,
                        "valueType": "Layer"
                      },
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-329548690\">Monster_W5_Ripper_Parasitism</a>[<span class=\"descriptionNumberColor\">Happiness</span>]",
                          "addStacksPerTrigger": -1
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "<a class=\"gModGreen\" id=\"-329548690\">Monster_W5_Ripper_Parasitism</a>[<span class=\"descriptionNumberColor\">Happiness</span>]",
                    "compareType": "=",
                    "value2": 0,
                    "valueType": "Layer"
                  },
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-329548690\">Monster_W5_Ripper_Parasitism</a>[<span class=\"descriptionNumberColor\">Happiness</span>]",
                      "addStacksPerTrigger": -1
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_MaxLayer",
            "MDF_AddLayer",
            "MDF_SummonCount"
          ],
          "latentQueue": [
            "MainCount",
            "ParasitismLayer"
          ],
          "description": "At the start of each turn, gains <span class=\"descriptionNumberColor\">MDF_AddLayer</span> stack(s). Loses 1 stack when an enemy summons \"Illwish Lotus\" or after attacking an enemy target, and loses an additional stack after eliminating an enemy target. At the end of the turn, if stacks are greater than or equal to <span class=\"descriptionNumberColor\">MDF_MaxLayer</span>, the character will be converted into a \"Happiness Puppet.\" When stacks reach <span class=\"descriptionNumberColor\">MDF_RemoveLayer</span>, this state is dispelled and the \"Inverted Severance\" effect is inflicted.",
          "type": "Other",
          "effectName": "Happiness",
          "statusName": "Happiness",
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__497761584\">Monster_W5_Ripper_Ability04_Mark</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "stackData": [],
          "latentQueue": [
            "MainCount"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-693038758\">Monster_W5_Ripper_ChargeEffect</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"344113408\">Monster_W5_Ripper_Protect_Weakness</a>[<span class=\"descriptionNumberColor\">Weakness Protected</span>]"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"344113408\">Monster_W5_Ripper_Protect_Weakness</a>[<span class=\"descriptionNumberColor\">Weakness Protected</span>]"
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__127164036\">Monster_W5_Ripper_Endurance</a>",
          "modifierFlags": [
            "Endurance"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Resistance",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "STAT_CTRL",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1759914466\">Monster_W5_Ripper_PartController</a>",
          "execute": [
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
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "InsertCheck",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
                        {
                          "name": "Dispel Debuffs",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "silent": true
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"127164036\">Monster_W5_Ripper_Endurance</a>"
                        },
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "InsertCheck"
                        },
                        {
                          "name": "Set Enemy Phase",
                          "mode": "Inc"
                        },
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_W5_Ripper_PassiveAbility_Insert",
                          "priorityTag": "EnemyPhaseChange",
                          "ownerState": "Mask_AliveOrLimbo",
                          "targetState": "Mask_AliveOrLimbo",
                          "allowAbilityTriggers": false
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "InsertCheck",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
                        {
                          "name": "Dispel Debuffs",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "silent": true
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"127164036\">Monster_W5_Ripper_Endurance</a>"
                        },
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "InsertCheck"
                        },
                        {
                          "name": "Set Enemy Phase",
                          "mode": "Inc"
                        },
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_W5_Ripper_PassiveAbility_Insert",
                          "priorityTag": "EnemyPhaseChange",
                          "ownerState": "Mask_AliveOrLimbo",
                          "targetState": "Mask_AliveOrLimbo",
                          "allowAbilityTriggers": false
                        }
                      ]
                    }
                  ]
                }
              ],
              "priorityLevel": -90
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2048207253\">Monster_W5_Ripper_Charm_Attack</a>",
          "execute": [
            {
              "eventTrigger": "Controlled Action [Owner]: End",
              "execute": [
                {
                  "name": "Adjust Team Punchline Value",
                  "value": {
                    "operator": "Variables[0] (MDF_FleshElationPoint) || RETURN",
                    "displayLines": "MDF_FleshElationPoint",
                    "constants": [],
                    "variables": [
                      "MDF_FleshElationPoint"
                    ]
                  },
                  "adjustment": "Add"
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__662835406\">Monster_W5_Ripper_Charm_CriticalAttack</a>",
          "execute": [
            {
              "eventTrigger": "Dealt Damage while Crowd/Mind Controlled [Anyone]"
            },
            {
              "eventTrigger": "Dealt Damage (END) while Crowd/Mind Controlled [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Living State",
                    "state": "Bit_Limbo",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "relatedAchievements": [
                        {
                          "title": "Marionette Evil",
                          "desc": "In the battle against \"Paramount Bliss Inverted: Illwish Archlotus,\" an ally character is converted into a \"Happiness Puppet,\" then deals \"Right on Target\" and defeats any target",
                          "rarity": "Low"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Controlled Action [Owner]: End",
              "execute": [
                {
                  "name": "Adjust Team Punchline Value",
                  "value": {
                    "operator": "Variables[0] (MDF_FleshExtraElationPoint) || RETURN",
                    "displayLines": "MDF_FleshExtraElationPoint",
                    "constants": [],
                    "variables": [
                      "MDF_FleshExtraElationPoint"
                    ]
                  },
                  "adjustment": "Add"
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1866931109\">Monster_W5_Ripper_Crazy_Attack</a>",
          "execute": [
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "Adjust Team Punchline Value",
                  "value": {
                    "operator": "Variables[0] (MDF_FleshElationPoint) || RETURN",
                    "displayLines": "MDF_FleshElationPoint",
                    "constants": [],
                    "variables": [
                      "MDF_FleshElationPoint"
                    ]
                  },
                  "adjustment": "Add"
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1374122123\">Monster_W5_Ripper_Crazy_CriticalAttackEffect</a>",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_EnemyExtraDamageMultiple) || RETURN",
                    "displayLines": "MDF_EnemyExtraDamageMultiple",
                    "constants": [],
                    "variables": [
                      "MDF_EnemyExtraDamageMultiple"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-656989940\">Monster_W5_Ripper_Crazy_CriticalAttack</a>",
          "execute": [
            {
              "eventTrigger": "Attacker Finalizes ATK Data",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Monster Rank",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "compareType": ">",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1374122123\">Monster_W5_Ripper_Crazy_CriticalAttackEffect</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Deal Damage End [Owner]: Hit"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1374122123\">Monster_W5_Ripper_Crazy_CriticalAttackEffect</a>",
                  "valuePerStack": {
                    "MDF_EnemyExtraDamageMultiple": {
                      "operator": "Variables[0] (MDF_EnemyExtraDamageMultiple) || RETURN",
                      "displayLines": "MDF_EnemyExtraDamageMultiple",
                      "constants": [],
                      "variables": [
                        "MDF_EnemyExtraDamageMultiple"
                      ]
                    }
                  }
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Monster Rank",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Attack Targets of Modifier Holder}}"
                    },
                    "compareType": ">",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "Adjust Team Punchline Value",
                      "value": {
                        "operator": "Variables[0] (MDF_FleshElationPoint) || RETURN",
                        "displayLines": "MDF_FleshElationPoint",
                        "constants": [],
                        "variables": [
                          "MDF_FleshElationPoint"
                        ]
                      },
                      "adjustment": "Add"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Adjust Team Punchline Value",
                      "value": {
                        "operator": "Variables[0] (MDF_FleshExtraElationPoint) || RETURN",
                        "displayLines": "MDF_FleshExtraElationPoint",
                        "constants": [],
                        "variables": [
                          "MDF_FleshExtraElationPoint"
                        ]
                      },
                      "adjustment": "Add"
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1374122123\">Monster_W5_Ripper_Crazy_CriticalAttackEffect</a>"
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1648139352\">Monster_W5_Ripper_MindControl</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{All Team Members(Exclude Self)}}"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_AttackEnemyChance",
                      "value": 1
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Random Chance",
                    "chance": {
                      "operator": "Variables[0] (MDF_AttackEnemyChance) || RETURN",
                      "displayLines": "MDF_AttackEnemyChance",
                      "constants": [],
                      "variables": [
                        "MDF_AttackEnemyChance"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Random Chance",
                        "chance": {
                          "operator": "Variables[0] (MDF_FleshExtraChance) || RETURN",
                          "displayLines": "MDF_FleshExtraChance",
                          "constants": [],
                          "variables": [
                            "MDF_FleshExtraChance"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1794338335\">Standard_CTRL_Crazy</a>[<span class=\"descriptionNumberColor\">Outrage</span>]",
                          "duration": 1,
                          "success": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-656989940\">Monster_W5_Ripper_Crazy_CriticalAttack</a>",
                              "valuePerStack": {
                                "MDF_FleshElationPoint": {
                                  "operator": "Variables[0] (MDF_FleshElationPoint) || RETURN",
                                  "displayLines": "MDF_FleshElationPoint",
                                  "constants": [],
                                  "variables": [
                                    "MDF_FleshElationPoint"
                                  ]
                                },
                                "MDF_FleshExtraElationPoint": {
                                  "operator": "Variables[0] (MDF_FleshExtraElationPoint) || RETURN",
                                  "displayLines": "MDF_FleshExtraElationPoint",
                                  "constants": [],
                                  "variables": [
                                    "MDF_FleshExtraElationPoint"
                                  ]
                                },
                                "MDF_EnemyExtraDamageMultiple": {
                                  "operator": "Variables[0] (MDF_EnemyExtraDamageMultiple) || RETURN",
                                  "displayLines": "MDF_EnemyExtraDamageMultiple",
                                  "constants": [],
                                  "variables": [
                                    "MDF_EnemyExtraDamageMultiple"
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
                              "modifier": "<a class=\"gModGreen\" id=\"-395596726\">Monster_W5_Ripper_Flesh_DisableAction</a>"
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
                          "modifier": "<a class=\"gModGreen\" id=\"-1794338335\">Standard_CTRL_Crazy</a>[<span class=\"descriptionNumberColor\">Outrage</span>]",
                          "duration": 1,
                          "success": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1866931109\">Monster_W5_Ripper_Crazy_Attack</a>",
                              "valuePerStack": {
                                "MDF_FleshElationPoint": {
                                  "operator": "Variables[0] (MDF_FleshElationPoint) || RETURN",
                                  "displayLines": "MDF_FleshElationPoint",
                                  "constants": [],
                                  "variables": [
                                    "MDF_FleshElationPoint"
                                  ]
                                },
                                "MDF_FleshExtraElationPoint": {
                                  "operator": "Variables[0] (MDF_FleshExtraElationPoint) || RETURN",
                                  "displayLines": "MDF_FleshExtraElationPoint",
                                  "constants": [],
                                  "variables": [
                                    "MDF_FleshExtraElationPoint"
                                  ]
                                },
                                "MDF_EnemyExtraDamageMultiple": {
                                  "operator": "Variables[0] (MDF_EnemyExtraDamageMultiple) || RETURN",
                                  "displayLines": "MDF_EnemyExtraDamageMultiple",
                                  "constants": [],
                                  "variables": [
                                    "MDF_EnemyExtraDamageMultiple"
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
                              "modifier": "<a class=\"gModGreen\" id=\"-395596726\">Monster_W5_Ripper_Flesh_DisableAction</a>"
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
                        "name": "Random Chance",
                        "chance": {
                          "operator": "Variables[0] (MDF_FleshExtraChance) || RETURN",
                          "displayLines": "MDF_FleshExtraChance",
                          "constants": [],
                          "variables": [
                            "MDF_FleshExtraChance"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1307984397\">Standard_MindControl</a>[<span class=\"descriptionNumberColor\">Dominated</span>]",
                          "duration": 1,
                          "valuePerStack": {
                            "MDF_MindControlDamagePercentage": {
                              "operator": "Variables[0] (MDF_ExtraDamageMultiple) || Variables[1] (MDF_DamagePercentage) || MUL || RETURN",
                              "displayLines": "(MDF_ExtraDamageMultiple * MDF_DamagePercentage)",
                              "constants": [],
                              "variables": [
                                "MDF_ExtraDamageMultiple",
                                "MDF_DamagePercentage"
                              ]
                            },
                            "MDF_MaxDamageRatio": {
                              "operator": "Variables[0] (MDF_MaxDamageRatio) || RETURN",
                              "displayLines": "MDF_MaxDamageRatio",
                              "constants": [],
                              "variables": [
                                "MDF_MaxDamageRatio"
                              ]
                            },
                            "MDF_MinDamageRatio": {
                              "operator": "Variables[0] (MDF_MinDamageRatio) || RETURN",
                              "displayLines": "MDF_MinDamageRatio",
                              "constants": [],
                              "variables": [
                                "MDF_MinDamageRatio"
                              ]
                            }
                          },
                          "casterAssign": "CasterSelf",
                          "success": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"662835406\">Monster_W5_Ripper_Charm_CriticalAttack</a>",
                              "valuePerStack": {
                                "MDF_FleshExtraElationPoint": {
                                  "operator": "Variables[0] (MDF_FleshExtraElationPoint) || RETURN",
                                  "displayLines": "MDF_FleshExtraElationPoint",
                                  "constants": [],
                                  "variables": [
                                    "MDF_FleshExtraElationPoint"
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
                              "modifier": "<a class=\"gModGreen\" id=\"-395596726\">Monster_W5_Ripper_Flesh_DisableAction</a>"
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
                          "modifier": "<a class=\"gModGreen\" id=\"-1307984397\">Standard_MindControl</a>[<span class=\"descriptionNumberColor\">Dominated</span>]",
                          "duration": 1,
                          "valuePerStack": {
                            "MDF_MindControlDamagePercentage": {
                              "operator": "Variables[0] (MDF_DamagePercentage) || RETURN",
                              "displayLines": "MDF_DamagePercentage",
                              "constants": [],
                              "variables": [
                                "MDF_DamagePercentage"
                              ]
                            },
                            "MDF_MaxDamageRatio": {
                              "operator": "Variables[0] (MDF_MaxDamageRatio) || RETURN",
                              "displayLines": "MDF_MaxDamageRatio",
                              "constants": [],
                              "variables": [
                                "MDF_MaxDamageRatio"
                              ]
                            },
                            "MDF_MinDamageRatio": {
                              "operator": "Variables[0] (MDF_MinDamageRatio) || RETURN",
                              "displayLines": "MDF_MinDamageRatio",
                              "constants": [],
                              "variables": [
                                "MDF_MinDamageRatio"
                              ]
                            }
                          },
                          "casterAssign": "CasterSelf",
                          "success": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-2048207253\">Monster_W5_Ripper_Charm_Attack</a>",
                              "valuePerStack": {
                                "MDF_FleshElationPoint": {
                                  "operator": "Variables[0] (MDF_FleshElationPoint) || RETURN",
                                  "displayLines": "MDF_FleshElationPoint",
                                  "constants": [],
                                  "variables": [
                                    "MDF_FleshElationPoint"
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
                              "modifier": "<a class=\"gModGreen\" id=\"-395596726\">Monster_W5_Ripper_Flesh_DisableAction</a>"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Turn End [Anyone]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1307984397\">Standard_MindControl</a>[<span class=\"descriptionNumberColor\">Dominated</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1794338335\">Standard_CTRL_Crazy</a>[<span class=\"descriptionNumberColor\">Outrage</span>]"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-70072093\">Monster_W5_Ripper_Flesh</a>[<span class=\"descriptionNumberColor\">Happiness Puppet</span>]"
                  }
                },
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [
            "MDF_FleshElationPoint",
            "MDF_FleshExtraChance",
            "MDF_FleshExtraElationPoint",
            "MDF_AttackEnemyChance",
            "MDF_DamagePercentage",
            "MDF_MaxDamageRatio",
            "MDF_MinDamageRatio",
            "MDF_ExtraDamageMultiple",
            "MDF_EnemyExtraDamageMultiple"
          ],
          "latentQueue": [
            "MainCount"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1092487556\">Monster_W5_Ripper_HeartEffect</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-764241521\">Monster_W5_Ripper_HeartEffectPrepare</a>",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1092487556\">Monster_W5_Ripper_HeartEffect</a>"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-359828555\">Monster_W5_Ripper_Pollen</a>[<span class=\"descriptionNumberColor\">Laughter's End</span>]",
          "description": "Triggers after <span class=\"descriptionNumberColor\">MDF_Count</span> more enemy targets are eliminated, increasing the DMG taken by all enemies and removing the \"Wicked Grin\" effect from \"Paramount Bliss Inverted: Illwish Archlotus.\"",
          "type": "Other",
          "statusName": "Laughter's End"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1728959136\">Monster_W5_Ripper_Passive</a>",
          "execute": [
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_CurrentCount",
                      "value": {
                        "operator": "Variables[0] (MDF_CurrentCount) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(MDF_CurrentCount + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "MDF_CurrentCount"
                        ]
                      }
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (MDF_CurrentCount) || RETURN",
                        "displayLines": "MDF_CurrentCount",
                        "constants": [],
                        "variables": [
                          "MDF_CurrentCount"
                        ]
                      },
                      "entityClass": "Enemy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "maximum": {
                        "operator": "Variables[0] (MDF_TriggerSummonCount) || RETURN",
                        "displayLines": "MDF_TriggerSummonCount",
                        "constants": [],
                        "variables": [
                          "MDF_TriggerSummonCount"
                        ]
                      },
                      "assignState": "True",
                      "state": "Normal"
                    },
                    {
                      "name": "Define Modifier-Specific Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifierName": "<a class=\"gModGreen\" id=\"-359828555\">Monster_W5_Ripper_Pollen</a>[<span class=\"descriptionNumberColor\">Laughter's End</span>]",
                      "variableName": "MDF_Count",
                      "value": {
                        "operator": "Variables[0] (MDF_TriggerSummonCount) || Variables[1] (MDF_CurrentCount) || SUB || RETURN",
                        "displayLines": "(MDF_TriggerSummonCount - MDF_CurrentCount)",
                        "constants": [],
                        "variables": [
                          "MDF_TriggerSummonCount",
                          "MDF_CurrentCount"
                        ]
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
                        "value1": "MDF_CurrentCount",
                        "compareType": "=",
                        "value2": {
                          "operator": "Variables[0] (MDF_TriggerSummonCount) || RETURN",
                          "displayLines": "MDF_TriggerSummonCount",
                          "constants": [],
                          "variables": [
                            "MDF_TriggerSummonCount"
                          ]
                        }
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "MDF_InsertCheck",
                        "compareType": "=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_InsertCheck",
                      "value": 1
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W5_Ripper_TriggerSummon",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "priorityTag": "EnemyBuffOthers",
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    },
                    {
                      "name": "Define Modifier-Specific Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifierName": "<a class=\"gModGreen\" id=\"-359828555\">Monster_W5_Ripper_Pollen</a>[<span class=\"descriptionNumberColor\">Laughter's End</span>]",
                      "variableName": "MDF_Count",
                      "value": {
                        "operator": "Variables[0] (MDF_TriggerSummonCount) || RETURN",
                        "displayLines": "MDF_TriggerSummonCount",
                        "constants": [],
                        "variables": [
                          "MDF_TriggerSummonCount"
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
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
                        "team": "Enemy Team"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Summoner of Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1728959136\">Monster_W5_Ripper_Passive</a>"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_OnceCheck",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_OnceCheck",
                      "value": 1
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": 0,
                      "entityClass": "Enemy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "maximum": {
                        "operator": "Variables[0] (MDF_TriggerSummonCount) || RETURN",
                        "displayLines": "MDF_TriggerSummonCount",
                        "constants": [],
                        "variables": [
                          "MDF_TriggerSummonCount"
                        ]
                      },
                      "assignState": "True",
                      "state": "Normal"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-359828555\">Monster_W5_Ripper_Pollen</a>[<span class=\"descriptionNumberColor\">Laughter's End</span>]",
                      "valuePerStack": {
                        "MDF_Count": {
                          "operator": "Variables[0] (MDF_TriggerSummonCount) || RETURN",
                          "displayLines": "MDF_TriggerSummonCount",
                          "constants": [],
                          "variables": [
                            "MDF_TriggerSummonCount"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "HP_Bars_Remaining",
                        "compareType": ">=",
                        "value2": 2
                      },
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "ENEMIES_OBJECT_UNUSED__246"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-693038758\">Monster_W5_Ripper_ChargeEffect</a>"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "AIFlag",
                      "value": 6
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "End Broken State [Owner]"
            }
          ],
          "stackData": [
            "MDF_TriggerSummonCount"
          ],
          "latentQueue": []
        }
      ],
      "references": []
    }
  }
}