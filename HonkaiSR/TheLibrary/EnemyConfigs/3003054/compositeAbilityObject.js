const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 3003054,
  "trimCharacterName": 3003054,
  "abilityList": [
    "3003054_Modifiers",
    "3003054_Monster_W3_Figure_01_PassiveAbility_Initiate",
    "3003054_Monster_W3_Figure_01_Ability02_Part02_FateRin",
    "3003054_Monster_W3_Figure_01_Ability02_Part01_FateRin",
    "3003054_Monster_W3_Figure_01_Ability01_Part02_FateRin",
    "3003054_Monster_W3_Figure_01_Ability01_Part01_FateRin",
    "3003054_Handling"
  ],
  "abilityObject": {
    "3003054_Modifiers": {
      "fileName": "3003054_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-854770788\">W3_Figure_01_BattleScore1</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Achievement",
                  "relatedAchievements": [
                    {
                      "title": "Literary Fragment",
                      "desc": "After \"Present Inebriated in Revelry\" enters the Charging state, interrupt its Charging",
                      "rarity": "Low"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__723419042\">Enemy_W3_Figure_01_Electric</a>[<span class=\"descriptionNumberColor\">Carousal of Revelry</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "STAT_DOT",
            "STAT_DOT_Electric"
          ],
          "useEntitySnapshot": true,
          "description": "Takes Lightning DMG at the start of each turn for a certain number of turns. This effect can be stacked.",
          "type": "Debuff",
          "effectName": "Carousal of Revelry",
          "statusName": "Carousal of Revelry",
          "stackLimit": 1,
          "addStacksPerTrigger": 1,
          "execute": [
            {
              "eventTrigger": "Turn [Owner]: Pre-action Phase",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "Modifier_Electric_PoisonLayer",
                  "multiplier": 1
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Thunder",
                    "Damage": {
                      "operator": "Variables[0] (Modifier_Electric_DamagePercentage) || Variables[1] (Modifier_Electric_PoisonLayer) || MUL || RETURN",
                      "displayLines": "(Modifier_Electric_DamagePercentage * Modifier_Electric_PoisonLayer)",
                      "constants": [],
                      "variables": [
                        "Modifier_Electric_DamagePercentage",
                        "Modifier_Electric_PoisonLayer"
                      ]
                    },
                    "DamageFlat": {
                      "operator": "Variables[0] (Modifier_Electric_DamageValue) || RETURN",
                      "displayLines": "Modifier_Electric_DamageValue",
                      "constants": [],
                      "variables": [
                        "Modifier_Electric_DamageValue"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is NOT in Auto-Battle State"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "Modifier_Electric_PoisonLayer",
                  "multiplier": 1
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Thunder",
                    "Damage": {
                      "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (Modifier_Electric_DamagePercentage) || MUL || Variables[2] (Modifier_Electric_PoisonLayer) || MUL || RETURN",
                      "displayLines": "((DOT_TriggerRatio * Modifier_Electric_DamagePercentage) * Modifier_Electric_PoisonLayer)",
                      "constants": [],
                      "variables": [
                        "DOT_TriggerRatio",
                        "Modifier_Electric_DamagePercentage",
                        "Modifier_Electric_PoisonLayer"
                      ]
                    },
                    "DamageFlat": {
                      "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (Modifier_Electric_DamageValue) || MUL || RETURN",
                      "displayLines": "(DOT_TriggerRatio * Modifier_Electric_DamageValue)",
                      "constants": [],
                      "variables": [
                        "DOT_TriggerRatio",
                        "Modifier_Electric_DamageValue"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-578587123\">Enemy_W3_Figure_01_Poison</a>[<span class=\"descriptionNumberColor\">Carousal of Wantonness</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "STAT_DOT",
            "STAT_DOT_Poison"
          ],
          "useEntitySnapshot": true,
          "description": "Takes Wind DMG at the start of each turn for a certain number of turns. This effect can be stacked.",
          "type": "Debuff",
          "effectName": "Carousal of Wantonness",
          "statusName": "Carousal of Wantonness",
          "stackLimit": 5,
          "addStacksPerTrigger": 1,
          "execute": [
            {
              "eventTrigger": "Turn [Owner]: Pre-action Phase",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "Modifier_Poison_PoisonLayer",
                  "multiplier": 1
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Wind",
                    "Damage": {
                      "operator": "Variables[0] (Modifier_Poison_DamagePercentage) || Variables[1] (Modifier_Poison_PoisonLayer) || MUL || RETURN",
                      "displayLines": "(Modifier_Poison_DamagePercentage * Modifier_Poison_PoisonLayer)",
                      "constants": [],
                      "variables": [
                        "Modifier_Poison_DamagePercentage",
                        "Modifier_Poison_PoisonLayer"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "Modifier_Poison_PoisonLayer",
                  "multiplier": 1
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Wind",
                    "Damage": {
                      "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (Modifier_Poison_DamagePercentage) || MUL || Variables[2] (Modifier_Poison_PoisonLayer) || MUL || RETURN",
                      "displayLines": "((DOT_TriggerRatio * Modifier_Poison_DamagePercentage) * Modifier_Poison_PoisonLayer)",
                      "constants": [],
                      "variables": [
                        "DOT_TriggerRatio",
                        "Modifier_Poison_DamagePercentage",
                        "Modifier_Poison_PoisonLayer"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1565080492\">Monster_W3_Figure_01_DotMarkListener</a>[<span class=\"descriptionNumberColor\">My Cup Runneth Over</span>]",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "description": "About to use \"Wash Away All Sins For You\"",
          "type": "Other",
          "effectName": "Target Locked On",
          "statusName": "My Cup Runneth Over",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "STAT_DOT"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1920724212\">Monster_W3_Figure_01_DotMark</a>[<span class=\"descriptionNumberColor\">Target Locked On</span>]"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-854770788\">W3_Figure_01_BattleScore1</a>"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Anyone]",
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
                        "name": "Modifier Has Flag",
                        "flagName": "STAT_DOT"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1920724212\">Monster_W3_Figure_01_DotMark</a>[<span class=\"descriptionNumberColor\">Target Locked On</span>]"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Losing Modifier [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Current Action Holder Is",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "invertCondition": true
                  },
                  "passed": [
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
                        "modifier": "<a class=\"gModGreen\" id=\"-1920724212\">Monster_W3_Figure_01_DotMark</a>[<span class=\"descriptionNumberColor\">Target Locked On</span>]"
                      },
                      "noTargetFound": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "AIFlag",
                          "value": 7
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-854770788\">W3_Figure_01_BattleScore1</a>"
                        },
                        "Modifier Deletes Itself"
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1920724212\">Monster_W3_Figure_01_DotMark</a>[<span class=\"descriptionNumberColor\">Target Locked On</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "AttackSign"
          ],
          "description": "%CasterName will focus attacks on this target.",
          "type": "Other",
          "effectName": "Target Locked On",
          "statusName": "Target Locked On",
          "execute": [
            {
              "eventTrigger": "When Losing Modifier [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "flagName": "STAT_DOT",
                    "invertCondition": true
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ]
        }
      ],
      "references": []
    },
    "3003054_Monster_W3_Figure_01_PassiveAbility_Initiate": {
      "fileName": "3003054_Monster_W3_Figure_01_PassiveAbility_Initiate",
      "skillTrigger": "PassiveSkillInitiate",
      "abilityType": "Talent",
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
          "modifier": "<a class=\"gModGreen\" id=\"1166907060\">Enemy_Standard_MuteHitFly</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1035479687\">Monster_W3_Figure_01_Passive</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"455167654\">Enemy_W3_Figure_01_AudioControllerForChosenOne</a>"
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
          "for": "<a class=\"gModGreen\" id=\"mod__455167654\">Enemy_W3_Figure_01_AudioControllerForChosenOne</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-607059020\">Enemy_W3_DollElite_Commnon_TheChosenOne</a>[<span class=\"descriptionNumberColor\">Impresario</span>]"
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Losing Modifier [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-607059020\">Enemy_W3_DollElite_Commnon_TheChosenOne</a>[<span class=\"descriptionNumberColor\">Impresario</span>]"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1035479687\">Monster_W3_Figure_01_Passive</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1920724212\">Monster_W3_Figure_01_DotMark</a>[<span class=\"descriptionNumberColor\">Target Locked On</span>]",
                  "onlyRemoveOwnersInstance": true
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1565080492\">Monster_W3_Figure_01_DotMarkListener</a>[<span class=\"descriptionNumberColor\">My Cup Runneth Over</span>]"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "AIFlag",
                  "value": 7
                }
              ]
            }
          ]
        }
      ]
    },
    "3003054_Monster_W3_Figure_01_Ability02_Part02_FateRin": {
      "fileName": "3003054_Monster_W3_Figure_01_Ability02_Part02_FateRin",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Level Entity}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1093800042\">Modifier_Activity_FateRin_Ability_Challenge_4_3</a>"
          }
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "3003054_Monster_W3_Figure_01_Ability02_Part01_FateRin": {
      "fileName": "3003054_Monster_W3_Figure_01_Ability02_Part01_FateRin",
      "childAbilityList": [
        "3003054_Monster_W3_Figure_01_Ability02_Camera",
        "3003054_Monster_W3_Figure_01_Ability02_Part01_FateRin",
        "3003054_Monster_W3_Figure_01_Ability02_Part02_FateRin"
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
          "ability": "Monster_W3_Figure_01_Ability02_Part02_FateRin",
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
    "3003054_Monster_W3_Figure_01_Ability01_Part02_FateRin": {
      "fileName": "3003054_Monster_W3_Figure_01_Ability01_Part02_FateRin",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Level Entity}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1093800042\">Modifier_Activity_FateRin_Ability_Challenge_4_3</a>"
          }
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "3003054_Monster_W3_Figure_01_Ability01_Part01_FateRin": {
      "fileName": "3003054_Monster_W3_Figure_01_Ability01_Part01_FateRin",
      "childAbilityList": [
        "3003054_Monster_W3_Figure_01_Ability01_Camera",
        "3003054_Monster_W3_Figure_01_Ability01_Part01_FateRin",
        "3003054_Monster_W3_Figure_01_Ability01_Part02_FateRin"
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
          "ability": "Monster_W3_Figure_01_Ability01_Part02_FateRin",
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
    "3003054_Handling": {
      "fileName": "3003054_Handling",
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
              "value": "Common_SequenceThree_Phase01"
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
              "option": "UseSequenceSkill",
              "goal": [
                {
                  "name": "Sequence Event",
                  "passed": [
                    {
                      "name": "Use Sequence Ability Option"
                    }
                  ]
                }
              ],
              "type": "DefaultDSE",
              "check": [
                {
                  "name": "Sequence Ability Use Value",
                  "valueCheck": 1
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