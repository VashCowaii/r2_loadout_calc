const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 3003034,
  "trimCharacterName": 3003034,
  "abilityList": [
    "3003034_Modifiers",
    "3003034_Monster_W3_Figure_02_PassiveAbility_Initiate",
    "3003034_Monster_W3_Figure_02_Ability05_Part02_FateRin",
    "3003034_Monster_W3_Figure_02_Ability05_Part01_FateRin",
    "3003034_Monster_W3_Figure_02_Ability04_Part02_FateRin",
    "3003034_Monster_W3_Figure_02_Ability04_Part01_FateRin",
    "3003034_Monster_W3_Figure_02_Ability01_Part02",
    "3003034_Monster_W3_Figure_02_Ability01_Part01",
    "3003034_Handling"
  ],
  "abilityObject": {
    "3003034_Modifiers": {
      "fileName": "3003034_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1606294659\">W3_Figure_02_BattleScore1</a>",
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
                  "variableName": "W3_Figure_02_BattleScore1_Flag1"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "W3_Figure_02_BattleScore1_Flag2"
                }
              ]
            },
            {
              "eventTrigger": "Action Phase Start [Owner][?]",
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
                        "value1": "W3_Figure_02_BattleScore1_Flag1",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "Monster_W3_Figure_02_AimTargetCount",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Sequence",
                          "Sequence": [
                            {
                              "name": "Target Name",
                              "target": "{{Player Team All}}"
                            },
                            {
                              "name": "Target Filter",
                              "conditions": {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"-413256865\">Monster_W3_Figure_02_AimTarget</a>[<span class=\"descriptionNumberColor\">Target Locked On</span>]"
                              }
                            }
                          ]
                        },
                        "type": "Memosprite",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "W3_Figure_02_BattleScore1_Flag1",
                      "value": 0
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "W3_Figure_02_BattleScore1_Flag2",
                      "value": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Action End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "W3_Figure_02_BattleScore1_Flag2",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "relatedAchievements": [
                        {
                          "title": "Passion Play",
                          "desc": "Use one character to take all DMG from \"Past Confined and Caged\"'s ability, \"Desmios Evangelion\" without being knocked down",
                          "rarity": "Low"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "W3_Figure_02_BattleScore1_Flag2",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "type": "Memosprite",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "W3_Figure_02_BattleScore1_Flag2",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1711322020\">Monster_W3_Figure_02_FireInHead</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1127149087\">Monster_W3_Figure_02_ChainMark4</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1110371468\">Monster_W3_Figure_02_ChainMark3</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1093593849\">Monster_W3_Figure_02_ChainMark2</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1076816230\">Monster_W3_Figure_02_ChainMark1</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-596409662\">Monster_W3_Figure_02_IsAiming</a>[<span class=\"descriptionNumberColor\">Shackle-Bearing Messenger</span>]",
          "stackType": "Replace",
          "description": "About to use Desmios Evangelion. The current DMG level is <span class=\"descriptionNumberColor\">MDF_DangerLevel</span>.",
          "type": "Other",
          "effectName": "Target Locked On",
          "statusName": "Shackle-Bearing Messenger",
          "stackLimit": 4,
          "addStacksPerTrigger": -1,
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Constants[0] (4) || Variables[0] (Monster_W3_Figure_02_AimTargetCount) || SUB || Constants[1] (1) || ADD || RETURN",
                    "displayLines": "((4 - Monster_W3_Figure_02_AimTargetCount) + 1)",
                    "constants": [
                      4,
                      1
                    ],
                    "variables": [
                      "Monster_W3_Figure_02_AimTargetCount"
                    ]
                  },
                  "entityClass": "Enemy",
                  "assignState": "False",
                  "state": "Active"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-413256865\">Monster_W3_Figure_02_AimTarget</a>[<span class=\"descriptionNumberColor\">Target Locked On</span>]",
                  "onlyRemoveOwnersInstance": true
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_DangerLevel",
                  "value": {
                    "operator": "Constants[0] (5) || Variables[0] (Monster_W3_Figure_02_AimTargetCount) || SUB || RETURN",
                    "displayLines": "(5 - Monster_W3_Figure_02_AimTargetCount)",
                    "constants": [
                      5
                    ],
                    "variables": [
                      "Monster_W3_Figure_02_AimTargetCount"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Entity Death [Anyone]"
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
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-413256865\">Monster_W3_Figure_02_AimTarget</a>[<span class=\"descriptionNumberColor\">Target Locked On</span>]",
                        "invertCondition": true,
                        "casterFilter": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      },
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Player Team"
                      },
                      {
                        "name": "Target is Unselectable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "invertCondition": true
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
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "Target__Toughness",
                        "compareType": "=",
                        "value2": 0,
                        "invertCondition": true
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "Monster_W3_Figure_02_AimTargetCount",
                        "compareType": "<",
                        "value2": 4
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "Monster_W3_Figure_02_AimTargetCount",
                      "context": "TargetEntity",
                      "value": 1,
                      "max": 4
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-413256865\">Monster_W3_Figure_02_AimTarget</a>[<span class=\"descriptionNumberColor\">Target Locked On</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-596409662\">Monster_W3_Figure_02_IsAiming</a>[<span class=\"descriptionNumberColor\">Shackle-Bearing Messenger</span>]"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "AIFlag",
                  "value": 7
                },
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "advanceType": "Delay",
                  "multiAdd": 0.5
                },
                {
                  "name": "Change Entity Turn-State",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "phase": "Phase1"
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-413256865\">Monster_W3_Figure_02_AimTarget</a>[<span class=\"descriptionNumberColor\">Target Locked On</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "AttackSign"
          ],
          "latentQueue": [
            "MDF_DangerLevel"
          ],
          "description": "%CasterName will focus attacks on this target.",
          "type": "Other",
          "effectName": "Target Locked On",
          "statusName": "Target Locked On",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-596409662\">Monster_W3_Figure_02_IsAiming</a>[<span class=\"descriptionNumberColor\">Shackle-Bearing Messenger</span>]"
                      },
                      {
                        "name": "Check Modifier Death Source",
                        "source": "CasterDead",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "Monster_W3_Figure_02_AimTargetCount",
                      "context": "TargetEntity",
                      "value": -1,
                      "max": 4
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Constants[0] (4) || Variables[0] (Monster_W3_Figure_02_AimTargetCount) || SUB || Constants[1] (1) || ADD || RETURN",
                        "displayLines": "((4 - Monster_W3_Figure_02_AimTargetCount) + 1)",
                        "constants": [
                          4,
                          1
                        ],
                        "variables": [
                          "Monster_W3_Figure_02_AimTargetCount"
                        ]
                      },
                      "entityClass": "Enemy",
                      "assignState": "True",
                      "state": "Active"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Monster_W3_Figure_02_AimTargetCount",
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
                          "searchRandom": true,
                          "maxTargets": 1,
                          "ifTargetFound": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-413256865\">Monster_W3_Figure_02_AimTarget</a>[<span class=\"descriptionNumberColor\">Target Locked On</span>]"
                            },
                            {
                              "name": "Declare Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "scope": "TargetEntity",
                              "variableName": "Monster_W3_Figure_02_AimTargetCount",
                              "value": 1
                            },
                            {
                              "name": "Update Displayed Energy Bar",
                              "value": {
                                "operator": "Constants[0] (4) || Variables[0] (Monster_W3_Figure_02_AimTargetCount) || SUB || Constants[1] (1) || ADD || RETURN",
                                "displayLines": "((4 - Monster_W3_Figure_02_AimTargetCount) + 1)",
                                "constants": [
                                  4,
                                  1
                                ],
                                "variables": [
                                  "Monster_W3_Figure_02_AimTargetCount"
                                ]
                              },
                              "entityClass": "Enemy",
                              "assignState": "True",
                              "state": "Active"
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
                          "modifier": "<a class=\"gModGreen\" id=\"-596409662\">Monster_W3_Figure_02_IsAiming</a>[<span class=\"descriptionNumberColor\">Shackle-Bearing Messenger</span>]",
                          "addStacksPerTrigger": 1
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
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Constants[0] (4) || Variables[0] (Monster_W3_Figure_02_AimTargetCount) || SUB || Constants[1] (1) || ADD || RETURN",
                    "displayLines": "((4 - Monster_W3_Figure_02_AimTargetCount) + 1)",
                    "constants": [
                      4,
                      1
                    ],
                    "variables": [
                      "Monster_W3_Figure_02_AimTargetCount"
                    ]
                  },
                  "entityClass": "Enemy",
                  "assignState": "True",
                  "state": "Active"
                }
              ]
            },
            {
              "eventTrigger": "Unselectable Adjustment [Owner]: Start",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__561371368\">Monster_W3_Figure_02_BreakController</a>",
          "execute": [
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Sub-Target in HP-Share Group",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
                      },
                      {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "AIFlag",
                            "compareType": "=",
                            "value2": 5
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "AIFlag",
                            "compareType": "=",
                            "value2": 6
                          }
                        ]
                      }
                    ]
                  },
                  "passed": [
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
        }
      ],
      "references": []
    },
    "3003034_Monster_W3_Figure_02_PassiveAbility_Initiate": {
      "fileName": "3003034_Monster_W3_Figure_02_PassiveAbility_Initiate",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1711322020\">Monster_W3_Figure_02_FireInHead</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"561371368\">Monster_W3_Figure_02_BreakController</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"308616063\">Enemy_W3_Figure_02_AudioControllerForChosenOne</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1606294659\">W3_Figure_02_BattleScore1</a>"
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
          "for": "<a class=\"gModGreen\" id=\"mod__308616063\">Enemy_W3_Figure_02_AudioControllerForChosenOne</a>",
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
        }
      ]
    },
    "3003034_Monster_W3_Figure_02_Ability05_Part02_FateRin": {
      "fileName": "3003034_Monster_W3_Figure_02_Ability05_Part02_FateRin",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
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
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "3003034_Monster_W3_Figure_02_Ability05_Part01_FateRin": {
      "fileName": "3003034_Monster_W3_Figure_02_Ability05_Part01_FateRin",
      "childAbilityList": [
        "3003034_Monster_W3_Figure_02_Ability05_Camera",
        "3003034_Monster_W3_Figure_02_Ability05_Part01_FateRin",
        "3003034_Monster_W3_Figure_02_Ability05_Part02_FateRin"
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
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "ability": "Monster_W3_Figure_02_Ability05_Part02_FateRin",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target",
        "targetIsVariable": true,
        "maxTargets": 4
      },
      "references": []
    },
    "3003034_Monster_W3_Figure_02_Ability04_Part02_FateRin": {
      "fileName": "3003034_Monster_W3_Figure_02_Ability04_Part02_FateRin",
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
          "modifier": "<a class=\"gModGreen\" id=\"1849920114\">Monster_W3_Figure_02_IsAiming_FateRin</a>[<span class=\"descriptionNumberColor\">Shackle-Bearing Messenger</span>]"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1849920114\">Monster_W3_Figure_02_IsAiming_FateRin</a>[<span class=\"descriptionNumberColor\">Shackle-Bearing Messenger</span>]",
          "description": "About to use \"Desmios Evangelion.\"",
          "type": "Other",
          "effectName": "Shackle-Bearing Messenger",
          "statusName": "Shackle-Bearing Messenger"
        }
      ]
    },
    "3003034_Monster_W3_Figure_02_Ability04_Part01_FateRin": {
      "fileName": "3003034_Monster_W3_Figure_02_Ability04_Part01_FateRin",
      "childAbilityList": [
        "3003034_Monster_W3_Figure_02_Ability04_Camera",
        "3003034_Monster_W3_Figure_02_Ability04_Part01_FateRin",
        "3003034_Monster_W3_Figure_02_Ability04_Part02_FateRin"
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
          "ability": "Monster_W3_Figure_02_Ability04_Part02_FateRin",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}",
        "targetIsVariable": true
      },
      "references": []
    },
    "3003034_Monster_W3_Figure_02_Ability01_Part02": {
      "fileName": "3003034_Monster_W3_Figure_02_Ability01_Part02",
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
    "3003034_Monster_W3_Figure_02_Ability01_Part01": {
      "fileName": "3003034_Monster_W3_Figure_02_Ability01_Part01",
      "childAbilityList": [
        "3003034_Monster_W3_Figure_02_Ability01_Camera",
        "3003034_Monster_W3_Figure_02_Ability01_Part01",
        "3003034_Monster_W3_Figure_02_Ability01_Part02"
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
          "ability": "Monster_W3_Figure_02_Ability01_Part02",
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
    "3003034_Handling": {
      "fileName": "3003034_Handling",
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