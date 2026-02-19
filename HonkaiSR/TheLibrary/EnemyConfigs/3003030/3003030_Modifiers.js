const configAbility = {
  "fileName": "3003030_Modifiers",
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
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1711322020\">Monster_W3_Figure_02_FireInHead</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1127149087\">Monster_W3_Figure_02_ChainMark4</a>",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1110371468\">Monster_W3_Figure_02_ChainMark3</a>",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1093593849\">Monster_W3_Figure_02_ChainMark2</a>",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1076816230\">Monster_W3_Figure_02_ChainMark1</a>",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-596409662\">Monster_W3_Figure_02_IsAiming</a>[<span class=\"descriptionNumberColor\">Shackle-Bearing Messenger</span>]",
      "stackType": "Replace",
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
          "eventTrigger": "Being Attacked End [Owner]",
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
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "phase": "Phase1"
            },
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "MarkCount"
      ],
      "description": "About to use Desmios Evangelion. The current DMG level is <span class=\"descriptionNumberColor\">MDF_DangerLevel</span>.",
      "type": "Other",
      "effectName": "Target Locked On",
      "statusName": "Shackle-Bearing Messenger",
      "stackLimit": 4,
      "addStacksPerTrigger": -1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-413256865\">Monster_W3_Figure_02_AimTarget</a>[<span class=\"descriptionNumberColor\">Target Locked On</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "RemoveWhenCasterDead",
        "AttackSign"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-596409662\">Monster_W3_Figure_02_IsAiming</a>[<span class=\"descriptionNumberColor\">Shackle-Bearing Messenger</span>]"
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
      ],
      "stackData": [],
      "latentQueue": [
        "MarkCount",
        "MDF_DangerLevel"
      ],
      "description": "%CasterName will focus attacks on this target.",
      "type": "Other",
      "effectName": "Target Locked On",
      "statusName": "Target Locked On"
    }
  ],
  "references": []
}