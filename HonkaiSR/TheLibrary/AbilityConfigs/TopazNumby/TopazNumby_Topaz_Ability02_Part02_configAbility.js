const configAbility = {
  "fileName": "TopazNumby_Topaz_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "_damageStart"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-934416652\">M_Topaz_BPAbility_AddRegardAsAttackType</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Numby}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-934416652\">M_Topaz_BPAbility_AddRegardAsAttackType</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1833842659\">Topaz_BETargetTag</a>[<span class=\"descriptionNumberColor\">Proof of Debt</span>]",
      "valuePerStack": {
        "MDF_PropertyValue1_DamageAdd": {
          "displayLines": "0.5"
        },
        "MDF_PropertyValue3_InsertCriticalDamageAddRatio": {
          "displayLines": "0.25"
        },
        "MDF_PropertyValue4_InsertCriticalDamageAddLayer": 0,
        "MDF_PropertyValue5_InsertCriticalDamageAddMaxLayer": {
          "displayLines": "2"
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
        "modifier": "<a class=\"gModGreen\" id=\"1203060420\">Topaz_UltraEnhance</a>[<span class=\"descriptionNumberColor\">Windfall Bonanza!</span>]"
      }
    },
    {
      "name": "Update Energy",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "valuePercent": 1,
      "ofAbilitySplit": true,
      "isFixed": "* ERR"
    },
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Numby}}"
      },
      "inherentTarget": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "ability": "Topaz_BE_FirstAttack",
      "isTrigger": true
    },
    {
      "name": "WAIT FOR",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "_damageStart",
        "compareType": ">=",
        "value2": 1,
        "contextScope": "ContextCaster"
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
        "modifier": "<a class=\"gModGreen\" id=\"1203060420\">Topaz_UltraEnhance</a>[<span class=\"descriptionNumberColor\">Windfall Bonanza!</span>]"
      },
      "passed": [
        {
          "name": "Define Custom Variable with Modifier Values",
          "variableName": "CurEnhance",
          "modifierName": "<a class=\"gModGreen\" id=\"1203060420\">Topaz_UltraEnhance</a>[<span class=\"descriptionNumberColor\">Windfall Bonanza!</span>]",
          "multiplier": 1
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(CurEnhance - 1)"
          },
          "variableName": "CurEnhance"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "CurEnhance",
            "compareType": ">=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "displayLines": "CurEnhance"
              },
              "maximum": {
                "displayLines": "MaxEnhance"
              },
              "assignState": "True",
              "priorState": "Active",
              "bar#": 3,
              "cooldown": 0
            }
          ],
          "failed": [
            {
              "name": "Update Displayed Energy Bar",
              "value": 0,
              "maximum": {
                "displayLines": "MaxEnhance"
              },
              "assignState": "True",
              "priorState": "Normal",
              "bar#": 3,
              "cooldown": 0
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1213282515\">Topaz_BE_CriticalChance</a>"
        },
        {
          "name": "Looped Event",
          "maxLoops": 7,
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "displayLines": "(1.5 + 1.5)"
                },
                "HitSplit": 0.1,
                "Toughness": {
                  "displayLines": "ST Toughness Value"
                },
                "Tags": [
                  "Summon-Tag DMG"
                ],
                "attackType": "Skill"
              }
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "displayLines": "(1.5 + 1.5)"
            },
            "HitSplit": 0.3,
            "Toughness": {
              "displayLines": "ST Toughness Value"
            },
            "Tags": [
              "Summon-Tag DMG"
            ],
            "attackType": "Skill"
          }
        },
        {
          "name": "Trigger: Attack End",
          "fakeCharacterAttack": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Stonks Market"
          },
          "passed": [
            {
              "name": "Update Energy",
              "on": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": {
                "displayLines": "10"
              },
              "isFixed": "* ERR"
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
            "modifier": "<a class=\"gModGreen\" id=\"285365186\">Topaz_Bonus</a>"
          },
          "passed": [
            {
              "name": "Update Energy",
              "on": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": {
                "displayLines": "60"
              },
              "isFixed": "* ERR"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"285365186\">Topaz_Bonus</a>"
            }
          ]
        },
        {
          "name": "Define Modifier Variable",
          "modifierName": "<a class=\"gModGreen\" id=\"1203060420\">Topaz_UltraEnhance</a>[<span class=\"descriptionNumberColor\">Windfall Bonanza!</span>]",
          "function": "Add"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "CurEnhance",
            "compareType": ">=",
            "value2": 1,
            "contextScope": "ContextCaster"
          },
          "passed": [
            {
              "name": "Show Attack Count",
              "target": {
                "name": "Target Name",
                "target": "{{Numby}}"
              },
              "attackCountEnhanced": {
                "displayLines": "CurEnhance"
              },
              "show": true
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Numby}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1361568506\">Topaz_BE_UltraEnhance_ShowText</a>",
              "valuePerStack": {
                "ATKCount": {
                  "displayLines": "CurEnhance"
                }
              }
            }
          ],
          "failed": [
            {
              "name": "Show Attack Count",
              "target": {
                "name": "Target Name",
                "target": "{{Numby}}"
              }
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Numby}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1361568506\">Topaz_BE_UltraEnhance_ShowText</a>"
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1213282515\">Topaz_BE_CriticalChance</a>"
        }
      ],
      "failed": [
        {
          "name": "Looped Event",
          "maxLoops": 7,
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "displayLines": "(1.5 / 7)"
                },
                "Toughness": {
                  "displayLines": "(ST Toughness Value / 7)"
                },
                "Tags": [
                  "Summon-Tag DMG"
                ],
                "attackType": "Skill"
              }
            }
          ]
        },
        {
          "name": "Trigger: Attack End",
          "fakeCharacterAttack": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"285365186\">Topaz_Bonus</a>"
          },
          "passed": [
            {
              "name": "Update Energy",
              "on": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": {
                "displayLines": "60"
              },
              "isFixed": "* ERR"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"285365186\">Topaz_Bonus</a>"
            }
          ]
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "whenAdded": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1891120358\">Topaz_Ability02_SpecialMarkAdder</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__264491546\">Topaz_BETargetTagActive_BP</a>",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "ListenBattleEventSkill",
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "Ability Use [Anyone]: Start",
          "execute": [
            {
              "name": "Toggle Skill Mark"
            }
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Anyone]: Start",
          "execute": [
            {
              "name": "Toggle Skill Mark"
            }
          ]
        },
        {
          "eventTrigger": "Update Target Selected(UI) [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Target List Entities",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Player's Aim Target List}}"
                    },
                    "conditions": {
                      "name": "Compare: Target",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "target2": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    }
                  },
                  {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Current Action Owner}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  }
                ]
              },
              "passed": [
                {
                  "name": "Toggle Skill Mark",
                  "toggle": true,
                  "skillTypesAllow": [
                    "Skill"
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Toggle Skill Mark"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1891120358\">Topaz_Ability02_SpecialMarkAdder</a>",
      "latentQueue": [
        "_damageStart"
      ],
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE, with Unselectables)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"264491546\">Topaz_BETargetTagActive_BP</a>",
          "aliveOnly": "True",
          "haloStatus": true
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-934416652\">M_Topaz_BPAbility_AddRegardAsAttackType</a>",
      "latentQueue": [
        "_damageStart"
      ],
      "duration": 1,
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Attack-Type Extension",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "typeToExtend": "Skill"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Attack-Type Extension",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "typeToExtend": "Skill",
              "extendTypeTo": "Follow-up"
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Anyone]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-934416652\">M_Topaz_BPAbility_AddRegardAsAttackType</a>"
            }
          ]
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}