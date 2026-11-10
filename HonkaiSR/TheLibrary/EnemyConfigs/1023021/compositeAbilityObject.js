const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 1023021,
  "trimCharacterName": 1023021,
  "abilityList": [
    "1023021_Modifiers",
    "1023021_Monster_W1_Mecha03_01_Passive01",
    "1023021_Monster_W1_Mecha03_01_Ability11_Part02",
    "1023021_Monster_W1_Mecha03_01_Ability11_Part01",
    "1023021_Monster_W1_Mecha03_01_Ability10_Part02",
    "1023021_Monster_W1_Mecha03_01_Ability10_Part01",
    "1023021_Monster_W1_Mecha03_01_Ability09_Part02",
    "1023021_Monster_W1_Mecha03_01_Ability09_Part01",
    "1023021_Monster_W1_Mecha03_01_Ability08_Part02",
    "1023021_Monster_W1_Mecha03_01_Ability08_Part01",
    "1023021_Monster_W1_Mecha03_01_Ability07_Part02",
    "1023021_Monster_W1_Mecha03_01_Ability07_Part01",
    "1023021_Monster_W1_Mecha03_01_Ability06_Part02",
    "1023021_Monster_W1_Mecha03_01_Ability06_Part01",
    "1023021_Monster_W1_Mecha03_01_Ability05_Part02",
    "1023021_Monster_W1_Mecha03_01_Ability05_Part01",
    "1023021_Monster_W1_Mecha03_01_Ability01_Part02",
    "1023021_Monster_W1_Mecha03_01_Ability01_Part01",
    "1023021_Handling"
  ],
  "abilityObject": {
    "1023021_Modifiers": {
      "fileName": "1023021_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1421560478\">Monster_W1_Mecha03_01_Sign</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "AttackSign"
          ],
          "description": "%CasterName will focus attacks on this target.",
          "type": "Other",
          "effectName": "Lock On",
          "statusName": "Lock On",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1705391722\">Monster_W1_Mecha03_01_Rage</a>[<span class=\"descriptionNumberColor\">Surpass</span>]",
          "description": "ATK +<span class=\"descriptionNumberColor\">MDF_AttackAddedRatio</span>.",
          "type": "Buff",
          "effectName": "ATK Greatly Boosted",
          "statusName": "Surpass",
          "duration": 1,
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"643096962\">Monster_W1_Mecha03_01_Effect</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
                }
              ]
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
                  "modifier": "<a class=\"gModGreen\" id=\"643096962\">Monster_W1_Mecha03_01_Effect</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                  "statValue": {
                    "displayLines": "MDF_AttackAddedRatio"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__643096962\">Monster_W1_Mecha03_01_Effect</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1790658643\">Monster_W1_Mecha03_01_Effect_Fail</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-168738441\">Monster_W1_Mecha03_01_Charge</a>",
          "duration": 1,
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                  "statValue": {
                    "displayLines": "Modifier_AttackAddedRatio"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-272775798\">Monster_W1_Mecha03_01_Bonus</a>",
          "duration": 1,
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                  "statValue": {
                    "displayLines": "MDF_AttackAddedRatio"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2015116315\">Monster_W1_Mecha03_01_Overheat</a>[<span class=\"descriptionNumberColor\">DEF Reduction</span>]",
          "description": "DEF -<span class=\"descriptionNumberColor\">MDF_DefenceAddedRatio</span>.",
          "type": "Debuff",
          "effectName": "DEF Reduction",
          "statusName": "DEF Reduction",
          "duration": 1,
          "execute": [
            {
              "eventTrigger": "Action Choice Window [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                  "statValue": {
                    "displayLines": "(0 - MDF_DefenceAddedRatio)"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1137901449\">Monster_W1_Mecha03_01_Frozen</a>[<span class=\"descriptionNumberColor\">Deep Freeze</span>]",
          "stackType": "Replace",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "description": "Reduces Ice RES by <span class=\"descriptionNumberColor\">MDF_IceResistanceRatio_PerLayer</span> and SPD by <span class=\"descriptionNumberColor\">MDF_SpeedAddedDelta_PerLayer</span>. Can stack up to <span class=\"descriptionNumberColor\">MDF_MaxLayer</span> time(s).",
          "type": "Debuff",
          "effectName": "Deep Freeze",
          "statusName": "Deep Freeze",
          "stackLimit": 5,
          "addStacksPerTrigger": {
            "displayLines": "ModifierStackLayer"
          },
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
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(0 - (MDF_IceResistanceRatio_PerLayer * ModifierLayers))"
                  },
                  "variableName": "MDF_IceResistanceRatio"
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceIceBonus</span>&nbsp;",
                  "statValue": {
                    "displayLines": "MDF_IceResistanceRatio"
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(0 - (MDF_SpeedAddedDelta_PerLayer * ModifierLayers))"
                  },
                  "variableName": "MDF_SpeedAddedDelta"
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
                  "statValue": {
                    "displayLines": "MDF_SpeedAddedDelta"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1506657871\">Monster_W1_Mecha03_01_Attack</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__488136598\">Monster_W1_Mecha03_01_Shield</a>",
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessReductionRES</span>&nbsp;",
                  "statValue": 0.5
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1053325166\">Monster_W1_Mecha03_01_Armor</a>",
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                  "statValue": {
                    "displayLines": "Modifier_DefenceAddedRatio"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__375705017\">Monster_W1_Mecha03_01_SummonMark</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-800128779\">Monster_W1_Mecha03_01_AOECount</a>[<span class=\"descriptionNumberColor\">Bitterly Cold</span>]",
          "description": "Unleashes <span class=\"descriptionNumberColor\">ModifierLayers</span> wave(s) of Blazing Freeze in the next action.",
          "type": "Other",
          "statusName": "Bitterly Cold",
          "stackLimit": 4,
          "addStacksPerTrigger": {
            "displayLines": "ModifierStackLayer"
          },
          "execute": [
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
          ]
        }
      ],
      "references": []
    },
    "1023021_Monster_W1_Mecha03_01_Passive01": {
      "fileName": "1023021_Monster_W1_Mecha03_01_Passive01",
      "childAbilityList": [
        "1023021_Monster_W1_Mecha03_01_Passive01"
      ],
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
          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-923896178\">Monster_W1_Mecha03_01_MureHitFly</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"703130049\">Monster_W1_Mecha03_01_AIChange</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1952827515\">Monster_W1_Mecha03_01_EffectCommon</a>"
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
          "for": "<a class=\"gModGreen\" id=\"mod__703130049\">Monster_W1_Mecha03_01_AIChange</a>",
          "execute": [
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1421560478\">Monster_W1_Mecha03_01_Sign</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
                  "onlyRemoveOwnersInstance": true
                }
              ]
            },
            {
              "eventTrigger": "End Broken State [Owner]",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "Monster_W1_Mecha03_01_AICounter_01",
                  "resetValue": 1,
                  "scope": "TargetEntity"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-923896178\">Monster_W1_Mecha03_01_MureHitFly</a>",
          "modifierFlags": [
            "MuteHitFly"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1952827515\">Monster_W1_Mecha03_01_EffectCommon</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]"
            },
            {
              "eventTrigger": "End Broken State [Owner]"
            }
          ]
        }
      ]
    },
    "1023021_Monster_W1_Mecha03_01_Ability11_Part02": {
      "fileName": "1023021_Monster_W1_Mecha03_01_Ability11_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "SummonMonsterEatCount",
            "compareType": "=",
            "value2": 1
          },
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "SummonMonsterEatCount",
                "compareType": "=",
                "value2": 2
              },
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "SummonMonsterEatCount",
                    "compareType": "=",
                    "value2": 3
                  },
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "SummonMonsterEatCount",
                        "compareType": "=",
                        "value2": 4
                      }
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
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "displayLines": "{[Skill11[0]]}"
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "SummonMonsterEatCount",
            "compareType": ">",
            "value2": 1
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "AttackScaling": {
                "DamageType": "Ice",
                "Damage": {
                  "displayLines": "{[Skill11[1]]}"
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
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "SummonMonsterEatCount",
            "compareType": ">",
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
                "DamageType": "Ice",
                "Damage": {
                  "displayLines": "{[Skill11[2]]}"
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
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "SummonMonsterEatCount",
            "compareType": ">",
            "value2": 3
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "AttackScaling": {
                "DamageType": "Ice",
                "Damage": {
                  "displayLines": "{[Skill11[3]]}"
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1137901449\">Monster_W1_Mecha03_01_Frozen</a>[<span class=\"descriptionNumberColor\">Deep Freeze</span>]",
          "baseChance": 1,
          "stackLimit": {
            "displayLines": "{[Skill06[3]]}"
          },
          "valuePerStack": {
            "MDF_IceResistanceRatio_PerLayer": {
              "displayLines": "{[Skill06[1]]}"
            },
            "MDF_SpeedAddedDelta_PerLayer": {
              "displayLines": "{[Skill06[0]]}"
            },
            "MDF_MaxLayer": {
              "displayLines": "{[Skill06[3]]}"
            }
          }
        },
        {
          "name": "Change Entity Turn-State",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase1"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "1023021_Monster_W1_Mecha03_01_Ability11_Part01": {
      "fileName": "1023021_Monster_W1_Mecha03_01_Ability11_Part01",
      "childAbilityList": [
        "1023021_Monster_W1_Mecha03_01_Ability11_Camera",
        "1023021_Monster_W1_Mecha03_01_Ability11_Part01",
        "1023021_Monster_W1_Mecha03_01_Ability11_Part02"
      ],
      "skillTrigger": "Skill11",
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
          "ability": "Monster_W1_Mecha03_01_Ability11_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "SummonMonsterEatCount",
            "compareType": ">",
            "value2": 1
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "SummonMonsterEatCount",
                "compareType": ">",
                "value2": 2
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "SummonMonsterEatCount",
                    "compareType": ">",
                    "value2": 3
                  }
                }
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "1023021_Monster_W1_Mecha03_01_Ability10_Part02": {
      "fileName": "1023021_Monster_W1_Mecha03_01_Ability10_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "value": 0,
          "variableName": "SummonMonsterEatCount"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "searchRandom": true,
          "ignoreParallelWarning": true,
          "ifTargetFound": [
            "Ability Start",
            {
              "name": "Mark Entity For Immediate Death",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            },
            {
              "name": "Force Entity Death",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(SummonMonsterEatCount + 1)"
              },
              "variableName": "SummonMonsterEatCount"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1705391722\">Monster_W1_Mecha03_01_Rage</a>[<span class=\"descriptionNumberColor\">Surpass</span>]",
          "duration": 1,
          "valuePerStack": {
            "MDF_AttackAddedRatio": {
              "displayLines": "{[Skill10[0]]}"
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-800128779\">Monster_W1_Mecha03_01_AOECount</a>[<span class=\"descriptionNumberColor\">Bitterly Cold</span>]",
          "duration": 1,
          "addStacksPerTrigger": {
            "displayLines": "SummonMonsterEatCount"
          }
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "1023021_Monster_W1_Mecha03_01_Ability10_Part01": {
      "fileName": "1023021_Monster_W1_Mecha03_01_Ability10_Part01",
      "childAbilityList": [
        "1023021_Monster_W1_Mecha03_01_Ability10_Camera",
        "1023021_Monster_W1_Mecha03_01_Ability10_Part01",
        "1023021_Monster_W1_Mecha03_01_Ability10_Part02"
      ],
      "skillTrigger": "Skill10",
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
          "ability": "Monster_W1_Mecha03_01_Ability10_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "1023021_Monster_W1_Mecha03_01_Ability09_Part02": {
      "fileName": "1023021_Monster_W1_Mecha03_01_Ability09_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Looped Event",
          "maxLoops": 10,
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Ice",
                "Damage": {
                  "displayLines": "({[Skill09[0]]} * 0.1)"
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "10%"
              }
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target List}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1137901449\">Monster_W1_Mecha03_01_Frozen</a>[<span class=\"descriptionNumberColor\">Deep Freeze</span>]",
          "baseChance": 1,
          "stackLimit": {
            "displayLines": "{[Skill06[3]]}"
          },
          "valuePerStack": {
            "MDF_IceResistanceRatio_PerLayer": {
              "displayLines": "{[Skill06[1]]}"
            },
            "MDF_SpeedAddedDelta_PerLayer": {
              "displayLines": "{[Skill06[0]]}"
            },
            "MDF_MaxLayer": {
              "displayLines": "{[Skill06[3]]}"
            }
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1705391722\">Monster_W1_Mecha03_01_Rage</a>[<span class=\"descriptionNumberColor\">Surpass</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1421560478\">Monster_W1_Mecha03_01_Sign</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
          "onlyRemoveOwnersInstance": true
        },
        {
          "name": "Change Entity Turn-State",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase1"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "1023021_Monster_W1_Mecha03_01_Ability09_Part01": {
      "fileName": "1023021_Monster_W1_Mecha03_01_Ability09_Part01",
      "childAbilityList": [
        "1023021_Monster_W1_Mecha03_01_Ability09_Camera",
        "1023021_Monster_W1_Mecha03_01_Ability09_Part01",
        "1023021_Monster_W1_Mecha03_01_Ability09_Part02"
      ],
      "skillTrigger": "Skill09",
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
          "ability": "Monster_W1_Mecha03_01_Ability09_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
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
    "1023021_Monster_W1_Mecha03_01_Ability08_Part02": {
      "fileName": "1023021_Monster_W1_Mecha03_01_Ability08_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{All Team Members}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": "<=",
            "value2": 1
          }
        },
        "Ability Start",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2015116315\">Monster_W1_Mecha03_01_Overheat</a>[<span class=\"descriptionNumberColor\">DEF Reduction</span>]",
          "valuePerStack": {
            "MDF_DefenceAddedRatio": {
              "displayLines": "{[Skill08[0]]}"
            }
          }
        },
        {
          "name": "Achievement",
          "matchTags": true,
          "relatedAchievements": [
            {
              "title": "Regurgitation",
              "desc": "Cause Frigid Prowler to fail to use Devour Otherling",
              "rarity": "Mid"
            }
          ]
        },
        {
          "name": "Change Entity Turn-State",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase1"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "1023021_Monster_W1_Mecha03_01_Ability08_Part01": {
      "fileName": "1023021_Monster_W1_Mecha03_01_Ability08_Part01",
      "childAbilityList": [
        "1023021_Monster_W1_Mecha03_01_Ability08_Camera",
        "1023021_Monster_W1_Mecha03_01_Ability08_Part01",
        "1023021_Monster_W1_Mecha03_01_Ability08_Part02"
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
          "ability": "Monster_W1_Mecha03_01_Ability08_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "1023021_Monster_W1_Mecha03_01_Ability07_Part02": {
      "fileName": "1023021_Monster_W1_Mecha03_01_Ability07_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 1023021,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Frigid Prowler (Bug)"
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "SummonMonsterEatCount"
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "searchRandom": true,
              "ifTargetFound": [
                "Ability Start",
                {
                  "name": "Mark Entity For Immediate Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                },
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(SummonMonsterEatCount + 1)"
                  },
                  "variableName": "SummonMonsterEatCount"
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1705391722\">Monster_W1_Mecha03_01_Rage</a>[<span class=\"descriptionNumberColor\">Surpass</span>]",
              "duration": 1,
              "valuePerStack": {
                "MDF_AttackAddedRatio": {
                  "displayLines": "{[Skill07[0]]}"
                }
              }
            }
          ],
          "failed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "ifTargetFound": [
                "Ability Start",
                {
                  "name": "Mark Entity For Immediate Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                },
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1705391722\">Monster_W1_Mecha03_01_Rage</a>[<span class=\"descriptionNumberColor\">Surpass</span>]",
              "duration": 1,
              "valuePerStack": {
                "MDF_AttackAddedRatio": {
                  "displayLines": "{[Skill07[0]]}"
                }
              }
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1421560478\">Monster_W1_Mecha03_01_Sign</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
          "counter": 1
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "1023021_Monster_W1_Mecha03_01_Ability07_Part01": {
      "fileName": "1023021_Monster_W1_Mecha03_01_Ability07_Part01",
      "childAbilityList": [
        "1023021_Monster_W1_Mecha03_01_Ability07_Camera",
        "1023021_Monster_W1_Mecha03_01_Ability07_Part01",
        "1023021_Monster_W1_Mecha03_01_Ability07_Part02"
      ],
      "skillTrigger": "Skill07",
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
          "ability": "Monster_W1_Mecha03_01_Ability07_Part02",
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
    "1023021_Monster_W1_Mecha03_01_Ability06_Part02": {
      "fileName": "1023021_Monster_W1_Mecha03_01_Ability06_Part02",
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
            "DamageType": "Ice",
            "Damage": {
              "displayLines": "({[Skill06[2]]} * 0.15)"
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "15%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "displayLines": "({[Skill06[2]]} * 0.15)"
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "15%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "displayLines": "({[Skill06[2]]} * 0.15)"
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "15%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "displayLines": "({[Skill06[2]]} * 0.15)"
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "15%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "displayLines": "({[Skill06[2]]} * 0.4)"
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "40%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1137901449\">Monster_W1_Mecha03_01_Frozen</a>[<span class=\"descriptionNumberColor\">Deep Freeze</span>]",
          "baseChance": 1,
          "stackLimit": {
            "displayLines": "{[Skill06[3]]}"
          },
          "valuePerStack": {
            "MDF_IceResistanceRatio_PerLayer": {
              "displayLines": "{[Skill06[1]]}"
            },
            "MDF_SpeedAddedDelta_PerLayer": {
              "displayLines": "{[Skill06[0]]}"
            },
            "MDF_MaxLayer": {
              "displayLines": "{[Skill06[3]]}"
            }
          }
        },
        {
          "name": "Change Entity Turn-State",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase1"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "1023021_Monster_W1_Mecha03_01_Ability06_Part01": {
      "fileName": "1023021_Monster_W1_Mecha03_01_Ability06_Part01",
      "childAbilityList": [
        "1023021_Monster_W1_Mecha03_01_Ability06_Camera",
        "1023021_Monster_W1_Mecha03_01_Ability06_Part01",
        "1023021_Monster_W1_Mecha03_01_Ability06_Part02"
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
          "ability": "Monster_W1_Mecha03_01_Ability06_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "1023021_Monster_W1_Mecha03_01_Ability05_Part02": {
      "fileName": "1023021_Monster_W1_Mecha03_01_Ability05_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Create Enemies",
          "delayPercent": 0.5,
          "enemyList": [
            {
              "name": "Create Enemy from Custom",
              "value": "Monster_SummonID",
              "summonLocation": "BeforeCaster"
            },
            {
              "name": "Create Enemy from Custom",
              "value": "Monster_SummonID",
              "summonLocation": "AfterCaster"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 1023021,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Frigid Prowler (Bug)"
          },
          "passed": [
            {
              "name": "Create Enemies",
              "delayPercent": 1.2,
              "enemyList": [
                {
                  "name": "Create Enemy from Custom",
                  "value": "Monster_SummonID",
                  "summonLocation": "First"
                },
                {
                  "name": "Create Enemy from Custom",
                  "value": "Monster_SummonID",
                  "summonLocation": "Last"
                }
              ]
            }
          ]
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
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "searchRandom": true,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"375705017\">Monster_W1_Mecha03_01_SummonMark</a>",
            "invertCondition": true
          }
        },
        "Ability Start",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "searchRandom": true,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"375705017\">Monster_W1_Mecha03_01_SummonMark</a>",
            "invertCondition": true
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "searchRandom": true,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"375705017\">Monster_W1_Mecha03_01_SummonMark</a>",
            "invertCondition": true
          }
        },
        {
          "name": "Change Entity Turn-State",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase1"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"375705017\">Monster_W1_Mecha03_01_SummonMark</a>"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "1023021_Monster_W1_Mecha03_01_Ability05_Part01": {
      "fileName": "1023021_Monster_W1_Mecha03_01_Ability05_Part01",
      "childAbilityList": [
        "1023021_Monster_W1_Mecha03_01_Ability05_A_Camera",
        "1023021_Monster_W1_Mecha03_01_Ability05_Part01",
        "1023021_Monster_W1_Mecha03_01_Ability05_Part02"
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
          "ability": "Monster_W1_Mecha03_01_Ability05_Part02",
          "isTrigger": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 1023021,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Frigid Prowler (Bug)"
          },
          "passed": [
            "Deleted bullshit"
          ],
          "failed": [
            "Deleted bullshit"
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
    "1023021_Monster_W1_Mecha03_01_Ability01_Part02": {
      "fileName": "1023021_Monster_W1_Mecha03_01_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Looped Event",
          "maxLoops": 5,
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Ice",
                "Damage": {
                  "displayLines": "({[Skill01[0]]} * 0.2)"
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "20%"
              }
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Change Entity Turn-State",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase1"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "1023021_Monster_W1_Mecha03_01_Ability01_Part01": {
      "fileName": "1023021_Monster_W1_Mecha03_01_Ability01_Part01",
      "childAbilityList": [
        "1023021_Monster_W1_Mecha03_01_Ability01_Camera",
        "1023021_Monster_W1_Mecha03_01_Ability01_Part01",
        "1023021_Monster_W1_Mecha03_01_Ability01_Part02"
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
          "ability": "Monster_W1_Mecha03_01_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
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
    "1023021_Handling": {
      "fileName": "1023021_Handling",
      "abilityType": "Handling",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Action Handling",
          "values": [
            {
              "name": "Define Handler String",
              "variableName": "CurrentPhase",
              "value": "Monster_W1_Mecha03_Phase01"
            },
            {
              "name": "Define Handler Boolean",
              "variableName": "ForbidClearSkillUseRecord",
              "value": true
            }
          ],
          "options": [
            {
              "name": "HANDLER OPTION",
              "optionName": "Decision01",
              "optionGoal": {
                "name": "Sequence Event",
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
                            "target": "{{All Team Members}}"
                          },
                          "value1": "TeamCharacterCount",
                          "compareType": "<=",
                          "value2": 4
                        },
                        {
                          "name": "Compare: Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster's Minions}}"
                          },
                          "value1": "TeamCharacterCount",
                          "compareType": "=",
                          "value2": 0
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
                        "variableName": "Monster_W1_Mecha03_01_AICounter_01",
                        "resetValue": 2,
                        "scope": "TargetEntity"
                      },
                      {
                        "name": "Declare Custom Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "variableName": "Monster_SummonFlag",
                        "resetValue": 1,
                        "scope": "TargetEntity"
                      },
                      {
                        "name": "Use Ability Option",
                        "skillName": "Skill05"
                      }
                    ],
                    "failed": [
                      {
                        "name": "Declare Custom Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "variableName": "Monster_W1_Mecha03_01_AICounter_01",
                        "resetValue": 2,
                        "scope": "TargetEntity"
                      },
                      {
                        "name": "Use Ability Option",
                        "skillName": "Skill01"
                      }
                    ]
                  }
                ]
              },
              "scoreType": "DefaultDSE",
              "optionWeight": 0.5,
              "optionCheck": [
                {
                  "name": "Check Ability Use Condition",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Monster_W1_Mecha03_01_AICounter_01",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "passedValue": 0.5
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "optionName": "Decision02",
              "optionGoal": {
                "name": "Sequence Event",
                "execute": [
                  {
                    "name": "Declare Custom Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "variableName": "Monster_W1_Mecha03_01_AICounter_01",
                    "resetValue": 3,
                    "scope": "TargetEntity"
                  },
                  {
                    "name": "Use Ability Option",
                    "skillName": "Skill06"
                  }
                ]
              },
              "scoreType": "DefaultDSE",
              "optionWeight": 0.5,
              "optionCheck": [
                {
                  "name": "Check Ability Use Condition",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Monster_W1_Mecha03_01_AICounter_01",
                    "compareType": "=",
                    "value2": 2,
                    "contextScope": "TargetEntity"
                  },
                  "passedValue": 0.5
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "optionName": "Decision03",
              "optionGoal": {
                "name": "Sequence Event",
                "execute": [
                  {
                    "name": "IF",
                    "conditions": {
                      "name": "Compare: Variable",
                      "value1": "Monster_SummonFlag",
                      "compareType": "=",
                      "value2": 1,
                      "contextScope": "TargetEntity"
                    },
                    "passed": [
                      {
                        "name": "Declare Custom Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "variableName": "Monster_SummonFlag",
                        "scope": "TargetEntity"
                      },
                      {
                        "name": "Declare Custom Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "variableName": "Monster_W1_Mecha03_01_AICounter_01",
                        "resetValue": 4,
                        "scope": "TargetEntity"
                      }
                    ],
                    "failed": [
                      {
                        "name": "Declare Custom Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "variableName": "Monster_W1_Mecha03_01_AICounter_01",
                        "resetValue": 8,
                        "scope": "TargetEntity"
                      }
                    ]
                  },
                  {
                    "name": "Use Ability Option",
                    "skillName": "Skill01"
                  }
                ]
              },
              "scoreType": "DefaultDSE",
              "optionWeight": 0.5,
              "optionCheck": [
                {
                  "name": "Check Ability Use Condition",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Monster_W1_Mecha03_01_AICounter_01",
                    "compareType": "=",
                    "value2": 3,
                    "contextScope": "TargetEntity"
                  },
                  "passedValue": 0.5
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "optionName": "Decision04",
              "optionGoal": {
                "name": "Sequence Event",
                "execute": [
                  {
                    "name": "IF",
                    "conditions": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
                    },
                    "passed": [
                      {
                        "name": "Declare Custom Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "variableName": "Monster_W1_Mecha03_01_AICounter_01",
                        "resetValue": 8,
                        "scope": "TargetEntity"
                      },
                      {
                        "name": "Use Ability Option",
                        "skillName": "Skill06"
                      }
                    ],
                    "failed": [
                      {
                        "name": "IF",
                        "conditions": {
                          "name": "Compare: Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster's Minions}}"
                          },
                          "value1": "TeamCharacterCount",
                          "compareType": "<",
                          "value2": 1
                        },
                        "passed": [
                          {
                            "name": "Declare Custom Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "variableName": "Monster_W1_Mecha03_01_AICounter_01",
                            "resetValue": 9,
                            "scope": "TargetEntity"
                          },
                          {
                            "name": "Use Ability Option",
                            "skillName": "Skill08"
                          }
                        ],
                        "failed": [
                          {
                            "name": "IF",
                            "conditions": {
                              "name": "Compare: Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster's Minions}}"
                              },
                              "value1": "TeamCharacterCount",
                              "compareType": "<=",
                              "value2": 2
                            },
                            "passed": [
                              {
                                "name": "Declare Custom Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                },
                                "variableName": "Monster_W1_Mecha03_01_AICounter_01",
                                "resetValue": 11,
                                "scope": "TargetEntity"
                              },
                              {
                                "name": "Use Ability Option",
                                "skillName": "Skill10"
                              }
                            ],
                            "failed": [
                              {
                                "name": "Declare Custom Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                },
                                "variableName": "Monster_W1_Mecha03_01_AICounter_01",
                                "resetValue": 11,
                                "scope": "TargetEntity"
                              },
                              {
                                "name": "Use Ability Option",
                                "skillName": "Skill10"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "scoreType": "DefaultDSE",
              "optionWeight": 0.5,
              "optionCheck": [
                {
                  "name": "Check Ability Use Condition",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Monster_W1_Mecha03_01_AICounter_01",
                    "compareType": "=",
                    "value2": 4,
                    "contextScope": "TargetEntity"
                  },
                  "passedValue": 0.5
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "optionName": "UseSkill01",
              "optionGoal": {
                "name": "Sequence Event",
                "execute": [
                  {
                    "name": "Declare Custom Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "variableName": "Monster_W1_Mecha03_01_AICounter_01",
                    "resetValue": 8,
                    "scope": "TargetEntity"
                  },
                  {
                    "name": "Use Ability Option",
                    "skillName": "Skill01"
                  }
                ]
              },
              "scoreType": "DefaultDSE",
              "optionWeight": 0.5,
              "optionCheck": [
                {
                  "name": "Check Ability Use Condition",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Monster_W1_Mecha03_01_AICounter_01",
                    "compareType": "=",
                    "value2": 9,
                    "contextScope": "TargetEntity"
                  },
                  "passedValue": 0.5
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "optionName": "UseSkill09",
              "optionGoal": {
                "name": "Sequence Event",
                "execute": [
                  {
                    "name": "Choose Ability Target",
                    "skillName": "Skill09",
                    "target": {
                      "name": "Select by Modifier Name",
                      "modifier": "<a class=\"gModGreen\" id=\"-1421560478\">Monster_W1_Mecha03_01_Sign</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
                      "target": null
                    }
                  },
                  {
                    "name": "Declare Custom Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "variableName": "Monster_W1_Mecha03_01_AICounter_01",
                    "resetValue": 8,
                    "scope": "TargetEntity"
                  },
                  {
                    "name": "Use Ability Option",
                    "skillName": "Skill09"
                  }
                ]
              },
              "scoreType": "DefaultDSE",
              "optionWeight": 0.5,
              "optionCheck": [
                {
                  "name": "Check Ability Use Condition",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Monster_W1_Mecha03_01_AICounter_01",
                    "compareType": "=",
                    "value2": 7,
                    "contextScope": "TargetEntity"
                  },
                  "passedValue": 0.5
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "optionName": "UseSkill09",
              "optionGoal": {
                "name": "Sequence Event",
                "execute": [
                  {
                    "name": "Declare Custom Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "variableName": "Monster_W1_Mecha03_01_AICounter_01",
                    "resetValue": 8,
                    "scope": "TargetEntity"
                  },
                  {
                    "name": "Use Ability Option",
                    "skillName": "Skill11"
                  }
                ]
              },
              "scoreType": "DefaultDSE",
              "optionWeight": 0.5,
              "optionCheck": [
                {
                  "name": "Check Ability Use Condition",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Monster_W1_Mecha03_01_AICounter_01",
                    "compareType": "=",
                    "value2": 11,
                    "contextScope": "TargetEntity"
                  },
                  "passedValue": 0.5
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "optionName": "UseSkill01",
              "optionGoal": {
                "name": "Sequence Event",
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
                            "target": "{{All Team Members}}"
                          },
                          "value1": "TeamCharacterCount",
                          "compareType": "<=",
                          "value2": 4
                        },
                        {
                          "name": "Compare: Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster's Minions}}"
                          },
                          "value1": "TeamCharacterCount",
                          "compareType": "=",
                          "value2": 0
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
                        "variableName": "Monster_W1_Mecha03_01_AICounter_01",
                        "resetValue": 3,
                        "scope": "TargetEntity"
                      },
                      {
                        "name": "Declare Custom Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "variableName": "Monster_SummonFlag",
                        "resetValue": 1,
                        "scope": "TargetEntity"
                      },
                      {
                        "name": "Use Ability Option",
                        "skillName": "Skill05"
                      }
                    ],
                    "failed": [
                      {
                        "name": "Declare Custom Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "variableName": "Monster_W1_Mecha03_01_AICounter_01",
                        "resetValue": 3,
                        "scope": "TargetEntity"
                      },
                      {
                        "name": "Use Ability Option",
                        "skillName": "Skill06"
                      }
                    ]
                  }
                ]
              },
              "scoreType": "DefaultDSE",
              "optionWeight": 0.5,
              "optionCheck": [
                {
                  "name": "Check Ability Use Condition",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Monster_W1_Mecha03_01_AICounter_01",
                    "compareType": "=",
                    "value2": 8,
                    "contextScope": "TargetEntity"
                  },
                  "passedValue": 0.5
                }
              ]
            }
          ]
        }
      ],
      "references": []
    }
  }
}