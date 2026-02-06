const configAbility = {
  "fileName": "2023020_Modifiers",
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
      "for": "Monster_W2_Beast02_Edict",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
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
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W2_Beast02_Weak[<span class=\"descriptionNumberColor\">Exhaustion</span>]",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "Attack DMG End [Owner]"
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "Malefic Ape's Gusto has been exhausted.",
      "type": "Other",
      "effectName": "Exhaustion",
      "statusName": "Exhaustion"
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W2_Beast02_Bullet[<span class=\"descriptionNumberColor\">Gusto</span>]",
      "stackType": "Replace",
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
              "modifier": "Monster_APShow"
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
              "modifier": "Monster_APShow"
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Owner]"
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "Malefic Ape's current Gusto amount.",
      "type": "Other",
      "effectName": "Regenerate Gusto",
      "statusName": "Gusto"
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_Beast02_Attack_Sign[<span class=\"descriptionNumberColor\">Monitor</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "RemoveWhenCasterDead",
        "RemoveWhenOwnerUnselectable"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "When Put in Deathstate Limbo",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Player Team All}}"
                },
                "value1": "TeamCharacterCount",
                "compareType": ">=",
                "value2": 1
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
                      "modifier": "Monster_Beast02_Attack_Sign[<span class=\"descriptionNumberColor\">Monitor</span>]"
                    },
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "Marked by %CasterName for Monitoring.",
      "type": "Other",
      "effectName": "Monitor",
      "statusName": "Monitor"
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_W2_Beast02_BlockDamage[<span class=\"descriptionNumberColor\">Barrier</span>]",
      "counter": 1,
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "BlockDamageExcludeDot",
        "MuteBreak"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Set Hit-Class",
              "reset": true
            }
          ]
        },
        {
          "eventTrigger": "Take Damage End [Owner]: Hit"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Set Hit-Class"
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Damage was Blocked",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                }
              },
              "passed": [
                {
                  "name": "Define Modifier Variable",
                  "modifierName": null,
                  "function": "Add"
                }
              ]
            }
          ]
        }
      ],
      "useEntitySnapshot": true,
      "description": "Nullifies all DMG received except DoTs. This status is dispelled after being attacked.",
      "type": "Buff",
      "effectName": "Barrier",
      "statusName": "Barrier"
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_Standard_Layer_DamageUP[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "valueType": "Layer",
              "variableName": "MDF_Count",
              "multiplier": 1
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_DamageAddedRatio) || Variables[1] (MDF_Count) || MUL || RETURN",
                "displayLines": "(MDF_DamageAddedRatio * MDF_Count)",
                "constants": [],
                "variables": [
                  "MDF_DamageAddedRatio",
                  "MDF_Count"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_DamageAddedRatio",
        "MDF_MaxLayer"
      ],
      "latentQueue": [],
      "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_DamageAddedRatio</span> for up to <span class=\"descriptionNumberColor\">MDF_MaxLayer</span> stacks.",
      "type": "Buff",
      "effectName": "DMG Boost",
      "statusName": "DMG Boost",
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_W2_Beast02_Passive",
      "modifierFlags": [
        "MuteHitFly",
        "ListenBattleEventSkill"
      ],
      "execute": [
        {
          "eventTrigger": "When Put in Deathstate Limbo",
          "execute": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "variableName": "Beast02_Num_Flag",
              "context": "TargetEntity",
              "value": -1,
              "max": 10
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "Monster_Beast02_Attack_Sign[<span class=\"descriptionNumberColor\">Monitor</span>]",
              "onlyRemoveOwnersInstance": true
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Level Entity}}"
                },
                "value1": "Beast02_Num_Flag",
                "compareType": "=",
                "value2": 0,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "Monster_W2_Beast02_Edict"
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
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Skill Type",
                    "skillType": "Skill"
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
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "HaveBullet_Flag",
                        "invertCondition": true
                      },
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value": "HaveBullet_Flag"
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
                      }
                    ]
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "Bullet_Count",
                    "compareType": ">=",
                    "value2": 1
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Monster_Beast02_Attack_Sign[<span class=\"descriptionNumberColor\">Monitor</span>]",
                    "invertCondition": true,
                    "casterFilter": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    }
                  }
                ]
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "Monster_Beast02_Attack_Sign[<span class=\"descriptionNumberColor\">Monitor</span>]",
                  "onlyRemoveOwnersInstance": true
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Monster_Beast02_Attack_Sign[<span class=\"descriptionNumberColor\">Monitor</span>]"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Anyone]: End",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Monster_W2_Beast02_Bullet[<span class=\"descriptionNumberColor\">Gusto</span>]"
              },
              "ifTargetFound": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "HaveBullet_Flag"
                }
              ],
              "noTargetFound": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "Monster_W2_Beast02_Edict"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "HaveBullet_Flag",
                  "value": 1
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
                "value1": "Bullet_Count",
                "compareType": ">=",
                "value2": 1
              },
              "failed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "Monster_Beast02_Attack_Sign[<span class=\"descriptionNumberColor\">Monitor</span>]",
                  "onlyRemoveOwnersInstance": true
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
                "name": "Compare: Variable",
                "value1": "AIFlag",
                "compareType": "=",
                "value2": 8,
                "contextScope": "TargetEntity"
              },
              "passed": [
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
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "phase": "Phase0"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "End Broken State [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "Monster_W2_Beast02_Weak[<span class=\"descriptionNumberColor\">Exhaustion</span>]"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Monster_W2_Beast02_Weak[<span class=\"descriptionNumberColor\">Exhaustion</span>]"
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