const configAbility = {
  "fileName": "TopazNumby_Topaz_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "variableName": "_damageStart",
      "value": 0
    },
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "M_Topaz_BPAbility_AddRegardAsAttackType"
    },
    {
      "name": "Add Events/Bonuses",
      "to": "Numby",
      "modifier": "M_Topaz_BPAbility_AddRegardAsAttackType"
    },
    {
      "name": "Add Events/Bonuses",
      "to": "Single Target (Primary)",
      "modifier": "Topaz_BETargetTag[<span class=\"descriptionNumberColor\">Proof of Debt</span>]",
      "valuePerStack": {
        "MDF_PropertyValue1_DamageAdd": {
          "operator": "Variables[0] (0.5) || RETURN",
          "displayLines": "0.5",
          "constants": [],
          "variables": [
            0.5
          ]
        },
        "MDF_PropertyValue3_InsertCriticalDamageAddRatio": {
          "operator": "Variables[0] (0.25) || RETURN",
          "displayLines": "0.25",
          "constants": [],
          "variables": [
            0.25
          ]
        },
        "MDF_PropertyValue4_InsertCriticalDamageAddLayer": 0,
        "MDF_PropertyValue5_InsertCriticalDamageAddMaxLayer": {
          "operator": "Variables[0] (2) || RETURN",
          "displayLines": "2",
          "constants": [],
          "variables": [
            2
          ]
        }
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": "Caster",
        "modifier": "Topaz_UltraEnhance[<span class=\"descriptionNumberColor\">Windfall Bonanza!</span>]"
      }
    },
    {
      "name": "Update Energy",
      "on": "Caster",
      "valuePercent": 1,
      "ofAbilitySplit": true,
      "isFixed": "* ERR"
    },
    {
      "name": "Trigger Ability",
      "from": "Numby",
      "inherentTarget": "Single Target (Primary)",
      "ability": "Topaz_BE_FirstAttack",
      "isTrigger": true
    },
    {
      "name": "WAIT FOR",
      "condition": {
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
        "target": "Caster",
        "modifier": "Topaz_UltraEnhance[<span class=\"descriptionNumberColor\">Windfall Bonanza!</span>]"
      },
      "passed": [
        {
          "name": "Define Custom Variable with Modifier Values",
          "variableName": "CurEnhance",
          "modifierName": "Topaz_UltraEnhance[<span class=\"descriptionNumberColor\">Windfall Bonanza!</span>]",
          "multiplier": 1
        },
        {
          "name": "Define Custom Variable",
          "variableName": "CurEnhance",
          "value": {
            "operator": "Variables[0] (CurEnhance) || Constants[0] (1) || SUB || RETURN",
            "displayLines": "(CurEnhance - 1)",
            "constants": [
              1
            ],
            "variables": [
              "CurEnhance"
            ]
          }
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
                "operator": "Variables[0] (CurEnhance) || RETURN",
                "displayLines": "CurEnhance",
                "constants": [],
                "variables": [
                  "CurEnhance"
                ]
              },
              "maximum": {
                "operator": "Variables[0] (MaxEnhance) || RETURN",
                "displayLines": "MaxEnhance",
                "constants": [],
                "variables": [
                  "MaxEnhance"
                ]
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
                "operator": "Variables[0] (MaxEnhance) || RETURN",
                "displayLines": "MaxEnhance",
                "constants": [],
                "variables": [
                  "MaxEnhance"
                ]
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
          "to": "Caster",
          "modifier": "Topaz_BE_CriticalChance"
        },
        {
          "name": "Looped Event",
          "maxLoops": 7,
          "Event": [
            {
              "name": "ATK Scaling DMG",
              "target": "Single Target (Primary)",
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "operator": "Variables[0] (1.5) || Variables[1] (1.5) || ADD || RETURN",
                  "displayLines": "(1.5 + 1.5)",
                  "constants": [],
                  "variables": [
                    1.5,
                    1.5
                  ]
                },
                "HitSplit": 0.1,
                "Toughness": {
                  "operator": "Variables[0] (ST Toughness Value) || RETURN",
                  "displayLines": "ST Toughness Value",
                  "constants": [],
                  "variables": [
                    "ST Toughness Value"
                  ]
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
          "target": "Single Target (Primary)",
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] (1.5) || Variables[1] (1.5) || ADD || RETURN",
              "displayLines": "(1.5 + 1.5)",
              "constants": [],
              "variables": [
                1.5,
                1.5
              ]
            },
            "HitSplit": 0.3,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
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
              "on": "Caster",
              "value": {
                "operator": "Variables[0] (10) || RETURN",
                "displayLines": "10",
                "constants": [],
                "variables": [
                  10
                ]
              },
              "isFixed": "* ERR"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": "Caster",
            "modifier": "Topaz_Bonus"
          },
          "passed": [
            {
              "name": "Update Energy",
              "on": "Caster",
              "value": {
                "operator": "Variables[0] (60) || RETURN",
                "displayLines": "60",
                "constants": [],
                "variables": [
                  60
                ]
              },
              "isFixed": "* ERR"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": "Caster",
              "modifier": "Topaz_Bonus"
            }
          ]
        },
        {
          "name": "Define Modifier Variable",
          "modifierName": "Topaz_UltraEnhance[<span class=\"descriptionNumberColor\">Windfall Bonanza!</span>]",
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
              "name": "Show Attack Time",
              "enhanced": {
                "operator": "Variables[0] (CurEnhance) || RETURN",
                "displayLines": "CurEnhance",
                "constants": [],
                "variables": [
                  "CurEnhance"
                ]
              },
              "on": null,
              "show": true
            },
            {
              "name": "Add Events/Bonuses",
              "to": "Numby",
              "modifier": "Topaz_BE_UltraEnhance_ShowText",
              "valuePerStack": {
                "ATKCount": {
                  "operator": "Variables[0] (CurEnhance) || RETURN",
                  "displayLines": "CurEnhance",
                  "constants": [],
                  "variables": [
                    "CurEnhance"
                  ]
                }
              }
            }
          ],
          "failed": [
            {
              "name": "Show Attack Time",
              "on": null,
              "show": false
            },
            {
              "name": "Remove Events/Bonuses",
              "to": "Numby",
              "modifier": "Topaz_BE_UltraEnhance_ShowText"
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": "Caster",
          "modifier": "Topaz_BE_CriticalChance"
        }
      ],
      "failed": [
        {
          "name": "Looped Event",
          "maxLoops": 7,
          "Event": [
            {
              "name": "ATK Scaling DMG",
              "target": "Single Target (Primary)",
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "operator": "Variables[0] (1.5) || Constants[0] (7) || DIV || RETURN",
                  "displayLines": "(1.5 / 7)",
                  "constants": [
                    7
                  ],
                  "variables": [
                    1.5
                  ]
                },
                "Toughness": {
                  "operator": "Variables[0] (ST Toughness Value) || Constants[0] (7) || DIV || RETURN",
                  "displayLines": "(ST Toughness Value / 7)",
                  "constants": [
                    7
                  ],
                  "variables": [
                    "ST Toughness Value"
                  ]
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
            "target": "Caster",
            "modifier": "Topaz_Bonus"
          },
          "passed": [
            {
              "name": "Update Energy",
              "on": "Caster",
              "value": {
                "operator": "Variables[0] (60) || RETURN",
                "displayLines": "60",
                "constants": [],
                "variables": [
                  60
                ]
              },
              "isFixed": "* ERR"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": "Caster",
              "modifier": "Topaz_Bonus"
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
      "to": "Caster",
      "modifier": "Topaz_Ability02_SpecialMarkAdder"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Topaz_BETargetTagActive_BP",
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
                    "name": "Compare: Target Count SUM",
                    "target": "Current Visual Target(All)",
                    "conditions": {
                      "name": "Compare: Target",
                      "target": "Owner of this Modifier",
                      "target2": "Use Prior Target(s) Defined"
                    }
                  },
                  {
                    "name": "Compare: Target",
                    "target": "Current Action Owner",
                    "target2": "Caster"
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
      "for": "Topaz_Ability02_SpecialMarkAdder",
      "stackData": [],
      "latentQueue": [
        "_damageStart"
      ],
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": "All Hostile Entities (AOE)(ALL)",
          "modifier": "Topaz_BETargetTagActive_BP",
          "aliveOnly": "True",
          "haloStatus": true
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "M_Topaz_BPAbility_AddRegardAsAttackType",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Attack-Type Extension",
              "target": "Owner of this Modifier",
              "typeToExtend": "Skill",
              "isRemove": true
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Attack-Type Extension",
              "target": "Owner of this Modifier",
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
              "to": "Owner of this Modifier",
              "modifier": "M_Topaz_BPAbility_AddRegardAsAttackType"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "_damageStart"
      ],
      "duration": 1
    }
  ]
}