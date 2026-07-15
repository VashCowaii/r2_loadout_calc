const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 5012020,
  "trimCharacterName": 5012020,
  "abilityList": [
    "5012020_Modifiers",
    "5012020_Monster_W2_Beast01_05_AbilityP01_Initiate",
    "5012020_Monster_W2_Beast01_05_Ability02_Part02",
    "5012020_Monster_W2_Beast01_05_Ability02_Part01",
    "5012020_Monster_W2_Beast01_05_Ability01_Part02",
    "5012020_Monster_W2_Beast01_05_Ability01_Part01",
    "5012020_Handling",
    "5012020_Handling_OVERRIDE_501202002"
  ],
  "abilityObject": {
    "5012020_Modifiers": {
      "fileName": "5012020_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1776333049\">Enemy_W2_Beast01_05_HasBoss</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__7174242\">Enemy_W2_Beast01_05_BossEffect</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Monster Rank",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "compareType": ">=",
                    "value2": 3
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Enemy ID",
                            "ID": 101301,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "characterName": null,
                            "isCompareUniqueID": true
                          },
                          {
                            "name": "Enemy ID",
                            "ID": 102302,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "characterName": null,
                            "isCompareUniqueID": true
                          },
                          {
                            "name": "Enemy ID",
                            "ID": 803301,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "characterName": null,
                            "isCompareUniqueID": true
                          }
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2099149908\">Enemy_W2_Beast01_05_BossEffect02</a>",
          "stackType": "Replace",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Monster Rank",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "compareType": ">=",
                    "value2": 3
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"7174242\">Enemy_W2_Beast01_05_BossEffect</a>"
                }
              ]
            },
            {
              "eventTrigger": "Turn [Anyone]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_isBeingHit",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Turn [Anyone]: Start Pre-action Phase",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_isBeingHit",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"7174242\">Enemy_W2_Beast01_05_BossEffect</a>"
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
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_isBeingHit",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"7174242\">Enemy_W2_Beast01_05_BossEffect</a>"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Being Attacked [Owner]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_isBeingHit",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_isBeingHit",
                      "value": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Action Start [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"7174242\">Enemy_W2_Beast01_05_BossEffect</a>"
                }
              ]
            },
            {
              "eventTrigger": "Action Start [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_isBeingHit",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ultimate Prep-Phase [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_isBeingHit",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"7174242\">Enemy_W2_Beast01_05_BossEffect</a>"
                        }
                      ]
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
                    "value1": "MDF_isBeingHit",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"7174242\">Enemy_W2_Beast01_05_BossEffect</a>"
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
                    "value1": "MDF_isBeingHit",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"7174242\">Enemy_W2_Beast01_05_BossEffect</a>"
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
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1253957657\">Enemy_W2_Beast01_05_Boss</a>[<span class=\"descriptionNumberColor\">Fealty</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "description": "When a target with \"Fealty\" is attacked, the DMG from this attack will be transferred to the Security Doggo, and causes the target team to gain Punchline.",
          "type": "Buff",
          "effectName": "Fealty",
          "statusName": "Fealty",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1776333049\">Enemy_W2_Beast01_05_HasBoss</a>"
                }
              ]
            },
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
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
                        "value1": "MDF_isBeingHit",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Is Joint-Attack",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Share DMG Taken",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "state": "Mask_AliveOrLimbo",
                      "selfSplit": 0,
                      "targetSplit": 1
                    }
                  ]
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
                  "modifier": "<a class=\"gModGreen\" id=\"-2099149908\">Enemy_W2_Beast01_05_BossEffect02</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1776333049\">Enemy_W2_Beast01_05_HasBoss</a>"
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked [Owner]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_isBeingHit",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_isBeingHit",
                      "value": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked [Owner]: End",
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
                        "value1": "MDF_isBeingHit",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_AddedFlag",
                        "compareType": "=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Team Punchline Value",
                      "value": {
                        "operator": "Variables[0] (MDF_ElationPoint) || RETURN",
                        "displayLines": "MDF_ElationPoint",
                        "constants": [],
                        "variables": [
                          "MDF_ElationPoint"
                        ]
                      },
                      "adjustment": "Add"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_AddedFlag",
                      "value": 1
                    },
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
    "5012020_Monster_W2_Beast01_05_AbilityP01_Initiate": {
      "fileName": "5012020_Monster_W2_Beast01_05_AbilityP01_Initiate",
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
          "modifier": "<a class=\"gModGreen\" id=\"-867295363\">Monster_Standard_ConfineHit</a>"
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
    "5012020_Monster_W2_Beast01_05_Ability02_Part02": {
      "fileName": "5012020_Monster_W2_Beast01_05_Ability02_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1253957657\">Enemy_W2_Beast01_05_Boss</a>[<span class=\"descriptionNumberColor\">Fealty</span>]",
          "valuePerStack": {
            "MDF_ElationPoint": {
              "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
              "displayLines": "{[Skill02[0]]}",
              "constants": [],
              "variables": [
                "{[Skill02[0]]}"
              ]
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"7174242\">Enemy_W2_Beast01_05_BossEffect</a>"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "5012020_Monster_W2_Beast01_05_Ability02_Part01": {
      "fileName": "5012020_Monster_W2_Beast01_05_Ability02_Part01",
      "childAbilityList": [
        "5012020_Monster_W2_Beast01_05_Ability02_Camera",
        "5012020_Monster_W2_Beast01_05_Ability02_Part01",
        "5012020_Monster_W2_Beast01_05_Ability02_Part02"
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
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "ability": "Monster_W2_Beast01_05_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Ally Target",
        "targetIsVariable": true
      },
      "references": []
    },
    "5012020_Monster_W2_Beast01_05_Ability01_Part02": {
      "fileName": "5012020_Monster_W2_Beast01_05_Ability01_Part02",
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
            "DamageType": "Physical",
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
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "5012020_Monster_W2_Beast01_05_Ability01_Part01": {
      "fileName": "5012020_Monster_W2_Beast01_05_Ability01_Part01",
      "childAbilityList": [
        "5012020_Monster_W2_Beast01_05_Ability01_Camera",
        "5012020_Monster_W2_Beast01_05_Ability01_Part01",
        "5012020_Monster_W2_Beast01_05_Ability01_Part02"
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
          "ability": "Monster_W2_Beast01_05_Ability01_Part02",
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
    "5012020_Handling": {
      "fileName": "5012020_Handling",
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
          "options": [
            {
              "name": "HANDLER OPTION GROUP",
              "option": "Phase01",
              "goal": [
                {
                  "name": "HANDLER OPTION",
                  "option": "指挥",
                  "goal": [
                    {
                      "name": "Sequence Event",
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-1776333049\">Enemy_W2_Beast01_05_HasBoss</a>",
                            "invertCondition": true
                          },
                          "passed": [
                            {
                              "name": "Find New Target",
                              "from": {
                                "name": "Target Name",
                                "target": "{{Enemy Team All}}"
                              },
                              "maxTargets": 1,
                              "conditions": {
                                "name": "AND",
                                "conditionList": [
                                  {
                                    "name": "Compare: Monster Rank",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "compareType": "<=",
                                    "value2": 3
                                  },
                                  {
                                    "name": "Has Modifier",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "modifier": "<a class=\"gModGreen\" id=\"-1253957657\">Enemy_W2_Beast01_05_Boss</a>[<span class=\"descriptionNumberColor\">Fealty</span>]",
                                    "invertCondition": true
                                  },
                                  {
                                    "name": "Check Boolean Value",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "value": "UNKNOWN_OBJECT_BOOLEAN_-1541420090",
                                    "invertCondition": true
                                  },
                                  {
                                    "name": "Compare: Target",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "target2": {
                                      "name": "Target Name",
                                      "target": "{{Caster}}"
                                    },
                                    "invertCondition": true
                                  }
                                ]
                              },
                              "ifTargetFound": [
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
                                  "name": "Choose Ability Target",
                                  "skillName": "Skill02",
                                  "target": {
                                    "name": "Create Selection List",
                                    "passed": [
                                      {
                                        "name": "Select by Target Pool",
                                        "target": {
                                          "name": "Target Sequence",
                                          "Sequence": [
                                            {
                                              "name": "Target Name",
                                              "target": "{{Enemy Team All}} - {{Caster}}"
                                            },
                                            {
                                              "name": "Target Filter",
                                              "conditions": {
                                                "name": "AND",
                                                "conditionList": [
                                                  {
                                                    "name": "Compare: Monster Rank",
                                                    "target": {
                                                      "name": "Target Name",
                                                      "target": "{{Parameter Target}}"
                                                    },
                                                    "compareType": "<=",
                                                    "value2": 3
                                                  },
                                                  {
                                                    "name": "Check Boolean Value",
                                                    "target": {
                                                      "name": "Target Name",
                                                      "target": "{{Parameter Target}}"
                                                    },
                                                    "value": "UNKNOWN_OBJECT_BOOLEAN_-1541420090",
                                                    "invertCondition": true
                                                  }
                                                ]
                                              }
                                            }
                                          ]
                                        }
                                      },
                                      {
                                        "name": "Select by Modifier Name",
                                        "modifier": "<a class=\"gModGreen\" id=\"-1253957657\">Enemy_W2_Beast01_05_Boss</a>[<span class=\"descriptionNumberColor\">Fealty</span>]",
                                        "target": null,
                                        "invertCondition": true
                                      },
                                      {
                                        "name": "Select by Target Rank",
                                        "compareType": "Max"
                                      }
                                    ]
                                  }
                                },
                                {
                                  "name": "Use Ability Option",
                                  "skillName": "Skill02"
                                }
                              ],
                              "noTargetFound": [
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
                                  "name": "Use Ability Option",
                                  "skillName": "Skill01"
                                }
                              ]
                            }
                          ],
                          "failed": [
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
                              "name": "Use Ability Option",
                              "skillName": "Skill01"
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  "type": "DefaultDSE",
                  "check": [
                    {
                      "name": "Check Ability Use Condition",
                      "passedValue": 1,
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      }
                    }
                  ]
                }
              ],
              "type": "DefaultDSE",
              "check": [
                {
                  "name": "Check Ability Use Condition",
                  "passedValue": 1,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  }
                }
              ]
            }
          ]
        }
      ],
      "references": []
    },
    "5012020_Handling_OVERRIDE_501202002": {
      "fileName": "5012020_Handling_OVERRIDE_501202002",
      "abilityType": "Handling_501202002",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Action Handling",
          "options": [
            {
              "name": "HANDLER OPTION GROUP",
              "option": "Phase01",
              "goal": [
                {
                  "name": "HANDLER OPTION",
                  "option": "指挥",
                  "goal": [
                    {
                      "name": "Sequence Event",
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-1776333049\">Enemy_W2_Beast01_05_HasBoss</a>",
                            "invertCondition": true
                          },
                          "passed": [
                            {
                              "name": "Find New Target",
                              "from": {
                                "name": "Target Name",
                                "target": "{{Enemy Team All}}"
                              },
                              "maxTargets": 1,
                              "conditions": {
                                "name": "AND",
                                "conditionList": [
                                  {
                                    "name": "Compare: Monster Rank",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "compareType": "<=",
                                    "value2": 3
                                  },
                                  {
                                    "name": "Has Modifier",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "modifier": "<a class=\"gModGreen\" id=\"-1253957657\">Enemy_W2_Beast01_05_Boss</a>[<span class=\"descriptionNumberColor\">Fealty</span>]",
                                    "invertCondition": true
                                  },
                                  {
                                    "name": "Check Boolean Value",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "value": "UNKNOWN_OBJECT_BOOLEAN_-1541420090",
                                    "invertCondition": true
                                  },
                                  {
                                    "name": "Compare: Target",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "target2": {
                                      "name": "Target Name",
                                      "target": "{{Caster}}"
                                    },
                                    "invertCondition": true
                                  }
                                ]
                              },
                              "ifTargetFound": [
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
                                  "name": "Choose Ability Target",
                                  "skillName": "Skill02",
                                  "target": {
                                    "name": "Create Selection List",
                                    "passed": [
                                      {
                                        "name": "Select by Target Pool",
                                        "target": {
                                          "name": "Target Sequence",
                                          "Sequence": [
                                            {
                                              "name": "Target Name",
                                              "target": "{{Enemy Team All}} - {{Caster}}"
                                            },
                                            {
                                              "name": "Target Filter",
                                              "conditions": {
                                                "name": "AND",
                                                "conditionList": [
                                                  {
                                                    "name": "Compare: Monster Rank",
                                                    "target": {
                                                      "name": "Target Name",
                                                      "target": "{{Parameter Target}}"
                                                    },
                                                    "compareType": "<=",
                                                    "value2": 3
                                                  },
                                                  {
                                                    "name": "Check Boolean Value",
                                                    "target": {
                                                      "name": "Target Name",
                                                      "target": "{{Parameter Target}}"
                                                    },
                                                    "value": "UNKNOWN_OBJECT_BOOLEAN_-1541420090",
                                                    "invertCondition": true
                                                  }
                                                ]
                                              }
                                            }
                                          ]
                                        }
                                      },
                                      {
                                        "name": "Select by Modifier Name",
                                        "modifier": "<a class=\"gModGreen\" id=\"-1253957657\">Enemy_W2_Beast01_05_Boss</a>[<span class=\"descriptionNumberColor\">Fealty</span>]",
                                        "target": null,
                                        "invertCondition": true
                                      },
                                      {
                                        "name": "Select by Target Rank",
                                        "compareType": "Max"
                                      }
                                    ]
                                  }
                                },
                                {
                                  "name": "Use Ability Option",
                                  "skillName": "Skill02"
                                }
                              ],
                              "noTargetFound": [
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
                                  "name": "Use Ability Option",
                                  "skillName": "Skill01"
                                }
                              ]
                            }
                          ],
                          "failed": [
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
                              "name": "Use Ability Option",
                              "skillName": "Skill01"
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  "type": "DefaultDSE",
                  "check": [
                    {
                      "name": "Check Ability Use Condition",
                      "passedValue": 1,
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      }
                    }
                  ]
                }
              ],
              "type": "DefaultDSE",
              "check": [
                {
                  "name": "Check Ability Use Condition",
                  "passedValue": 1,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  }
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