const configAbility = {
  "fileName": "3003032_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__787345585\">Monster_W3_Figure_02_RLElite_ChargeLayer_DamageUP</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (ModifierLayers) || Variables[1] (MDF_AttackUPRatio) || MUL || RETURN",
                "displayLines": "(ModifierLayers * MDF_AttackUPRatio)",
                "constants": [],
                "variables": [
                  "ModifierLayers",
                  "MDF_AttackUPRatio"
                ]
              }
            }
          ]
        }
      ],
      "description": "Each stack increases ATK by <span class=\"descriptionNumberColor\">MDF_AttackUPRatio</span>.",
      "type": "Buff",
      "effectName": "ATK Boost",
      "statusName": "ATK Boost",
      "addStacksPerTrigger": -1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-826240284\">Monster_W3_Figure_02_RLElite_ChargeLayer</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Looped Event",
              "maxLoops": {
                "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                "displayLines": "{[Skill04[0]]}",
                "constants": [],
                "variables": [
                  "{[Skill04[0]]}"
                ]
              },
              "Event": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"787345585\">Monster_W3_Figure_02_RLElite_ChargeLayer_DamageUP</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
                  "valuePerStack": {
                    "MDF_AttackUPRatio": {
                      "operator": "Variables[0] ({[Skill04[1]]}) || RETURN",
                      "displayLines": "{[Skill04[1]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill04[1]]}"
                      ]
                    }
                  },
                  "addStacksPerTrigger": 1
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked End [Owner]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"787345585\">Monster_W3_Figure_02_RLElite_ChargeLayer_DamageUP</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]"
            },
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "ModifierLayers",
              "modifierName": "<a class=\"gModGreen\" id=\"787345585\">Monster_W3_Figure_02_RLElite_ChargeLayer_DamageUP</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
              "multiplier": 1
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "ModifierLayers",
                "compareType": "<",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"787345585\">Monster_W3_Figure_02_RLElite_ChargeLayer_DamageUP</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]"
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ],
      "stackData": [
        "#Skill04_P1_DamageUPLayer",
        "#Skill04_P2_DamageUPRatio"
      ],
      "latentQueue": [
        "MarkCount"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-918700562\">Monster_W3_Figure_02_RLElite_FireInHead</a>",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-473087873\">Monster_W3_Figure_02_RLElite_ChainMark4</a>",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-523420730\">Monster_W3_Figure_02_RLElite_ChainMark3</a>",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-506643111\">Monster_W3_Figure_02_RLElite_ChainMark2</a>",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-556975968\">Monster_W3_Figure_02_RLElite_ChainMark1</a>",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1156179234\">Monster_W3_Figure_02_RLElite_SharePreShow</a>",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "Action Choice Window [Owner]"
        },
        {
          "eventTrigger": "Ability Use [Owner]: End"
        },
        {
          "eventTrigger": "Ultimate Prep-Phase [Owner]"
        },
        {
          "eventTrigger": "Extra Action/Turn [Owner]: Start "
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2034637668\">Monster_W3_Figure_02_RLElite_IsAiming</a>[<span class=\"descriptionNumberColor\">Shackle-Bearing Messenger</span>]",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Constants[0] (4) || Variables[0] (Monster_W3_Figure_02_RLElite_AimTargetCount) || SUB || Constants[1] (1) || ADD || RETURN",
                "displayLines": "((4 - Monster_W3_Figure_02_RLElite_AimTargetCount) + 1)",
                "constants": [
                  4,
                  1
                ],
                "variables": [
                  "Monster_W3_Figure_02_RLElite_AimTargetCount"
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
              "modifier": "<a class=\"gModGreen\" id=\"1529042769\">Monster_W3_Figure_02_RLElite_AimTarget</a>[<span class=\"descriptionNumberColor\">Target Locked On</span>]"
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
                "operator": "Constants[0] (5) || Variables[0] (Monster_W3_Figure_02_RLElite_AimTargetCount) || SUB || RETURN",
                "displayLines": "(5 - Monster_W3_Figure_02_RLElite_AimTargetCount)",
                "constants": [
                  5
                ],
                "variables": [
                  "Monster_W3_Figure_02_RLElite_AimTargetCount"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Entity Death [Anyone]"
        },
        {
          "eventTrigger": "Being Attacked Start [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"787345585\">Monster_W3_Figure_02_RLElite_ChargeLayer_DamageUP</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "End_Flag",
                  "value": 1
                }
              ]
            }
          ]
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
                    "modifier": "<a class=\"gModGreen\" id=\"1529042769\">Monster_W3_Figure_02_RLElite_AimTarget</a>[<span class=\"descriptionNumberColor\">Target Locked On</span>]",
                    "invertCondition": true
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
                    "value1": "Monster_W3_Figure_02_RLElite_AimTargetCount",
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
                  "variableName": "Monster_W3_Figure_02_RLElite_AimTargetCount",
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
                  "modifier": "<a class=\"gModGreen\" id=\"1529042769\">Monster_W3_Figure_02_RLElite_AimTarget</a>[<span class=\"descriptionNumberColor\">Target Locked On</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2034637668\">Monster_W3_Figure_02_RLElite_IsAiming</a>[<span class=\"descriptionNumberColor\">Shackle-Bearing Messenger</span>]"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"787345585\">Monster_W3_Figure_02_RLElite_ChargeLayer_DamageUP</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]"
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "Monster_W3_Figure_02_AimTargetCount",
                  "value": {
                    "operator": "Variables[0] (Monster_W3_Figure_02_RLElite_AimTargetCount) || RETURN",
                    "displayLines": "Monster_W3_Figure_02_RLElite_AimTargetCount",
                    "constants": [],
                    "variables": [
                      "Monster_W3_Figure_02_RLElite_AimTargetCount"
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "ModifierLayers",
                  "modifierName": "<a class=\"gModGreen\" id=\"787345585\">Monster_W3_Figure_02_RLElite_ChargeLayer_DamageUP</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
                  "multiplier": 1
                },
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
                        "value1": "ModifierLayers",
                        "compareType": ">=",
                        "value2": 1
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
                      }
                    ]
                  },
                  "failed": [
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
                            "value1": "Target__Toughness",
                            "compareType": "=",
                            "value2": 0,
                            "invertCondition": true
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "End_Flag",
                            "compareType": "=",
                            "value2": 1
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "End_Flag",
                          "value": 0
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "ModifierLayers",
                  "value": 0
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
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"787345585\">Monster_W3_Figure_02_RLElite_ChargeLayer_DamageUP</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]"
              }
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-826240284\">Monster_W3_Figure_02_RLElite_ChargeLayer</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"787345585\">Monster_W3_Figure_02_RLElite_ChargeLayer_DamageUP</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]"
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
      "for": "<a class=\"gModGreen\" id=\"mod__1529042769\">Monster_W3_Figure_02_RLElite_AimTarget</a>[<span class=\"descriptionNumberColor\">Target Locked On</span>]",
      "counter": 4,
      "stackType": "Replace",
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
                "modifier": "<a class=\"gModGreen\" id=\"-2034637668\">Monster_W3_Figure_02_RLElite_IsAiming</a>[<span class=\"descriptionNumberColor\">Shackle-Bearing Messenger</span>]"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "Monster_W3_Figure_02_RLElite_AimTargetCount",
                  "context": "TargetEntity",
                  "value": -1,
                  "max": 4
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Constants[0] (4) || Variables[0] (Monster_W3_Figure_02_RLElite_AimTargetCount) || SUB || Constants[1] (1) || ADD || RETURN",
                    "displayLines": "((4 - Monster_W3_Figure_02_RLElite_AimTargetCount) + 1)",
                    "constants": [
                      4,
                      1
                    ],
                    "variables": [
                      "Monster_W3_Figure_02_RLElite_AimTargetCount"
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
                    "value1": "Monster_W3_Figure_02_RLElite_AimTargetCount",
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
                          "modifier": "<a class=\"gModGreen\" id=\"1529042769\">Monster_W3_Figure_02_RLElite_AimTarget</a>[<span class=\"descriptionNumberColor\">Target Locked On</span>]"
                        },
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "Monster_W3_Figure_02_RLElite_AimTargetCount",
                          "value": 1
                        },
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Constants[0] (4) || Variables[0] (Monster_W3_Figure_02_RLElite_AimTargetCount) || SUB || Constants[1] (1) || ADD || RETURN",
                            "displayLines": "((4 - Monster_W3_Figure_02_RLElite_AimTargetCount) + 1)",
                            "constants": [
                              4,
                              1
                            ],
                            "variables": [
                              "Monster_W3_Figure_02_RLElite_AimTargetCount"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-2034637668\">Monster_W3_Figure_02_RLElite_IsAiming</a>[<span class=\"descriptionNumberColor\">Shackle-Bearing Messenger</span>]",
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
                "operator": "Constants[0] (4) || Variables[0] (Monster_W3_Figure_02_RLElite_AimTargetCount) || SUB || Constants[1] (1) || ADD || RETURN",
                "displayLines": "((4 - Monster_W3_Figure_02_RLElite_AimTargetCount) + 1)",
                "constants": [
                  4,
                  1
                ],
                "variables": [
                  "Monster_W3_Figure_02_RLElite_AimTargetCount"
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
        "MDF_DangerLevel",
        "End_Flag"
      ],
      "description": "Locked on by %CasterName as their attack target.",
      "type": "Other",
      "effectName": "Target Locked On",
      "statusName": "Target Locked On"
    }
  ],
  "references": []
}