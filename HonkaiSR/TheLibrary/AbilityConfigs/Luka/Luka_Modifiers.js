const configAbility = {
  "fileName": "Luka_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__7293019\">ADV_StageAbility_Maze_Luka</a>",
      "counter": 1,
      "stackType": "Merge"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1202378594\">Luka_DOT_Tear</a>[<span class=\"descriptionNumberColor\">Bleed</span>]",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "modifierFlags": [
        "STAT_DOT",
        "STAT_DOT_Bleed"
      ],
      "useEntitySnapshot": true,
      "description": "Takes Physical DMG at the start of each turn for a certain number of turns.",
      "type": "Debuff",
      "effectName": "Bleed",
      "statusName": "Bleed",
      "stackLimit": 1,
      "addStacksPerTrigger": 1,
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "variableName": "MDF_TargetMaxHP",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable with Stat",
              "variableName": "MDF_CasterAttack",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Snapshot Stat Source}}"
              },
              "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_TargetMaxHP",
                "compareType": ">=",
                "value2": {
                  "displayLines": "((MDF_CasterAttack * Modifier_Tear_MaxPercentage) / Modifier_Tear_DamageRatio)"
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(MDF_CasterAttack * Modifier_Tear_MaxPercentage)"
                  },
                  "variableName": "MDF_DamageValue"
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(MDF_TargetMaxHP * Modifier_Tear_DamageRatio)"
                  },
                  "variableName": "MDF_DamageValue"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Turn [Owner]: Pre-action Phase",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "variableName": "MDF_TargetMaxHP",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable with Stat",
              "variableName": "MDF_CasterAttack",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Snapshot Stat Source}}"
              },
              "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_TargetMaxHP",
                "compareType": ">=",
                "value2": {
                  "displayLines": "((MDF_CasterAttack * Modifier_Tear_MaxPercentage) / Modifier_Tear_DamageRatio)"
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(MDF_CasterAttack * Modifier_Tear_MaxPercentage)"
                  },
                  "variableName": "MDF_DamageValue"
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(MDF_TargetMaxHP * Modifier_Tear_DamageRatio)"
                  },
                  "variableName": "MDF_DamageValue"
                }
              ]
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "AttackScaling": {
                "DamageType": "Physical",
                "DamageFlat": {
                  "displayLines": "MDF_DamageValue"
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "DOT"
              }
            }
          ]
        },
        {
          "eventTrigger": "Custom Event",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "variableName": "MDF_TargetMaxHP",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable with Stat",
              "variableName": "MDF_CasterAttack",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Snapshot Stat Source}}"
              },
              "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_TargetMaxHP",
                "compareType": ">=",
                "value2": {
                  "displayLines": "((MDF_CasterAttack * Modifier_Tear_MaxPercentage) / Modifier_Tear_DamageRatio)"
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(MDF_CasterAttack * Modifier_Tear_MaxPercentage)"
                  },
                  "variableName": "MDF_DamageValue"
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(MDF_TargetMaxHP * Modifier_Tear_DamageRatio)"
                  },
                  "variableName": "MDF_DamageValue"
                }
              ]
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "AttackScaling": {
                "DamageType": "Physical",
                "DamageFlat": {
                  "displayLines": "(DOT_TriggerRatio * MDF_DamageValue)"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-752941063\">Luka_MazeBullet</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Adjust Variable Value",
              "adjustmentType": "Overwrite Value",
              "variableName": "BulletCount",
              "on": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": 2
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "displayLines": "BulletCount"
              },
              "maximum": {
                "displayLines": "4"
              },
              "assignState": "True",
              "priorState": "Normal",
              "bar#": 3,
              "cooldown": 0
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-811741616\">Luka_Eidolon4</a>[<span class=\"descriptionNumberColor\">Never Turning Back</span>]",
      "stackType": "ReplaceByCaster",
      "description": "ATK +<span class=\"descriptionNumberColor\">MDF_AttackAdded</span>.",
      "type": "Buff",
      "effectName": "ATK Boost",
      "statusName": "Never Turning Back",
      "addStacksPerTrigger": 1,
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
              "variableName": "MDF_Layer",
              "multiplier": 1
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(0.05 * MDF_Layer)"
              },
              "variableName": "MDF_AttackAdded"
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
              "statValue": {
                "displayLines": "MDF_AttackAdded"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-711075902\">Luka_Eidolon2</a>",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Hit",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Weakness",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "DamageType": "Physical"
                  },
                  {
                    "name": "Skill Type",
                    "skillType": "Skill"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1275149529\">Luka_ReloadBullet</a>",
                  "valuePerStack": {
                    "MDF_AddValue": {
                      "displayLines": "1"
                    }
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
      "for": "<a class=\"gModGreen\" id=\"mod__-632542414\">Luka_Eidolon1_Sub</a>[<span class=\"descriptionNumberColor\">Fighting Endlessly</span>]",
      "stackType": "ReplaceByCaster",
      "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "DMG Boost",
      "statusName": "Fighting Endlessly",
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "statValue": {
                "displayLines": "MDF_PropertyValue"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1275149529\">Luka_ReloadBullet</a>",
      "stackData": [
        "MDF_AddValue"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "BulletCount",
                "compareType": ">=",
                "value2": 3
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(4 - BulletCount)"
                  },
                  "variableName": "MDF_AddValue"
                }
              ]
            },
            {
              "name": "Looped Event",
              "maxLoops": {
                "displayLines": "MDF_AddValue"
              },
              "execute": [
                {
                  "name": "Adjust Variable Value",
                  "adjustmentType": "Add to Value (Default)",
                  "variableName": "BulletCount",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 4
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-811741616\">Luka_Eidolon4</a>[<span class=\"descriptionNumberColor\">Never Turning Back</span>]",
                      "stackLimit": {
                        "displayLines": "4"
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue2": {
                          "displayLines": "0.05"
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Trace Activated",
                "conditionList": "Cycle Braking"
              },
              "passed": [
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": {
                    "displayLines": "(3 * MDF_AddValue)"
                  },
                  "isFixed": "* ERR"
                }
              ]
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "displayLines": "BulletCount"
              },
              "maximum": {
                "displayLines": "4"
              },
              "assignState": "True",
              "priorState": "Normal",
              "bar#": 3,
              "cooldown": 0
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "BulletCount",
                "compareType": "<",
                "value2": 2
              },
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1816734330\">Luka_ChangeAttack</a>"
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "displayLines": "BulletCount"
                  },
                  "maximum": {
                    "displayLines": "4"
                  },
                  "assignState": "True",
                  "priorState": "Active",
                  "bar#": 3,
                  "cooldown": 0
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
      "for": "<a class=\"gModGreen\" id=\"mod__1778825870\">Luka_AllDamageTypeTakenRatio</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
      "stackType": "ReplaceByCaster",
      "description": "Increases DMG taken by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Debuff",
      "effectName": "Vulnerability",
      "statusName": "Vulnerability",
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
              "statValue": {
                "displayLines": "MDF_PropertyValue"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1816734330\">Luka_ChangeAttack</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Update Ability Binding",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "abilityName": "Skill01",
              "skillSlot": "Basic ATK"
            },
            {
              "name": "Update Ability Enhance Button",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "display": "Hide",
              "abilityName": "Basic ATK"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Update Ability Binding",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "abilityName": "Skill11",
              "skillSlot": "Basic ATK"
            },
            {
              "name": "Update Ability Enhance Button",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "display": "Show",
              "abilityName": "Basic ATK"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1297657953\">Luka_Passive</a>",
      "execute": [
        {
          "eventTrigger": "Action Choice Window [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "BulletCount",
                "compareType": "<",
                "value2": 2
              },
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1816734330\">Luka_ChangeAttack</a>"
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "displayLines": "BulletCount"
                  },
                  "maximum": {
                    "displayLines": "4"
                  },
                  "assignState": "True",
                  "priorState": "Active",
                  "bar#": 3,
                  "cooldown": 0
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "references": []
}