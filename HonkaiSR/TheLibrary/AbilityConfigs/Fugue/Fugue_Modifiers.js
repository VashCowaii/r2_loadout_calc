const configAbility = {
  "fileName": "Fugue_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1133976141\">ADV_StageAbility_Fugue_BeforeBattleStunListener</a>",
      "onBattlePrep": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target List}}"
          },
          "modifier": null,
          "ID": "122501(SkillMaze)",
          "counter": 1,
          "duration": {
            "displayLines": "10"
          },
          "conditions": {
            "name": "Has Flag",
            "flagName": "Stun"
          }
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2046983228\">ADV_StageAbility_Maze_Fugue</a>",
      "counter": 1,
      "stackType": "Replace",
      "modifierFlags": [
        "Stun"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-74108309\">Fugue_PassiveAbility_ElementDamage</a>",
      "stackType": "Replace",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"2132906314\">DealSuperBreakDamage_DamagePerformance</a>",
              "target": {
                "name": "Target Name",
                "target": "{{Attack Targets of Modifier Holder}}"
              },
              "variables": {
                "DamagePercentage": {
                  "displayLines": "MDF_SuperBreakDamagePercentage"
                }
              },
              "damageSequence": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1466558420\">PursuedDamage_PerformanceDelay</a>",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": "ReadTargetType",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      }
                    },
                    "DamageBreak": {
                      "displayLines": "value_0_DamagePercentage"
                    },
                    "dmgFormula": "Break DMG Scaling",
                    "dmgFormulaFinal": "Pure (No DMG%)",
                    "Toughness": null,
                    "Tags": [
                      "Super Break"
                    ],
                    "attackType": "Break DMG"
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
      "for": "<a class=\"gModGreen\" id=\"mod__2001305717\">Fugue_PassiveAbility_ListenBreakDamage</a>",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "RemoveWhenCasterDead",
        "STAT_SuperBreakBuff"
      ],
      "execute": [
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "priorityLevel": 100,
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-74108309\">Fugue_PassiveAbility_ElementDamage</a>",
              "valuePerStack": {
                "MDF_SuperBreakDamagePercentage": {
                  "displayLines": "MDF_PassiveDamage2"
                }
              },
              "casterAssign": "TargetSelf"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1376045581\">Fugue_Ability03_WeakType_BUFF</a>",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "ForceStanceDamage"
      ],
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessReductionForced%</span>&nbsp;",
              "value": {
                "displayLines": "FUGUE_OBJECT_UNUSED_1"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__873674204\">Fugue_StancePreview</a>",
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "skillType": "Ultimate",
        "toughnessForcedReductionPreview": {
          "displayLines": "FUGUE_OBJECT_UNUSED_1"
        },
        "showAsForcedReduction": true
      }
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-375769760\">Fugue_DefenceDown</a>[<span class=\"descriptionNumberColor\">Virtue Beckons Bliss</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "DEF_DOWN"
      ],
      "description": "DEF decreases by <span class=\"descriptionNumberColor\">MDF_DefenceDownRatio</span>.",
      "type": "Debuff",
      "effectName": "DEF Reduction",
      "statusName": "Virtue Beckons Bliss",
      "execute": [
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "Adjust Target Stats",
              "modifiedValuesArray": [
                {
                  "on": "Defender",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                  "value": "(0 - MDF_DefenceDownRatio)"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__915939939\">Fugue_Eidolon2_PreShow</a>",
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "target": {
          "name": "Target Name",
          "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
        },
        "skillType": [
          "Ultimate"
        ],
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": {
            "displayLines": "-0.24"
          }
        }
      }
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__696396442\">Fugue_Eidolon6_Listen</a>",
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members with Unselectables}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1216788746\">Fugue_BPAbility_Eidolon4</a>[<span class=\"descriptionNumberColor\">Foxian Prayer</span>]",
          "aliveOnly": "True",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_BreakDamageAdd": {
              "displayLines": "0.3"
            },
            "MDF_StanceBreakAddRatio": {
              "displayLines": "0.5"
            },
            "MDF_Chance": {
              "displayLines": "1"
            },
            "MDF_DefenceDownRatio": {
              "displayLines": "0.18"
            },
            "MDF_BreakDamageAddedRatio": {
              "displayLines": "0.2"
            },
            "MDF_LifeTime": {
              "displayLines": "2"
            },
            "MDF_PropertyRatio": {
              "displayLines": "0.5"
            }
          }
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1774454693\">Fugue_RedStance</a>[<span class=\"descriptionNumberColor\">Cloudflame Luster</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "description": "When initial Toughness is reduced to 0, \"Cloudflame Luster\" can continue to be reduced. When \"Cloudflame Luster\" is reduced to 0, the enemy will receive Weakness Break DMG again.",
      "type": "Other",
      "effectName": "Cloudflame Luster",
      "statusName": "Cloudflame Luster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "variableName": "MDF_CurMaxStance2",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "warningType": "MaxToughness",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(MDF_CurMaxStance2 * MDF_RedStanceRatio)"
              },
              "variableName": "MDF_RedStance_First"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_RedStance_First",
                "compareType": "<=",
                "value2": 0
              },
              "failed": [
                {
                  "name": "Stack Exo-Toughness",
                  "exoPercent": {
                    "displayLines": "MDF_RedStanceRatio"
                  },
                  "exoFlat": 0
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked [Owner]: Start",
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
                    "modifier": "<a class=\"gModGreen\" id=\"-1216788746\">Fugue_BPAbility_Eidolon4</a>[<span class=\"descriptionNumberColor\">Foxian Prayer</span>]"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1132900651\">Fugue_BPAbility_Eidolon1</a>[<span class=\"descriptionNumberColor\">Foxian Prayer</span>]"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"647019371\">Fugue_BPAbility</a>[<span class=\"descriptionNumberColor\">Foxian Prayer</span>]"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-375769760\">Fugue_DefenceDown</a>[<span class=\"descriptionNumberColor\">Virtue Beckons Bliss</span>]",
                  "duration": {
                    "displayLines": "2"
                  },
                  "baseChance": {
                    "displayLines": "1"
                  },
                  "valuePerStack": {
                    "MDF_DefenceDownRatio": {
                      "displayLines": "0.18"
                    }
                  }
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