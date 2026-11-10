const configAbility = {
  "fileName": "4062021_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__1128925615\">Enemy_W2_Beast01_04_AbilityP02_GoldBlood_DOT</a>[<span class=\"descriptionNumberColor\">Hemotort Corruption</span>]",
      "stackType": "Multiple",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "modifierFlags": [
        "STAT_DOT",
        "CanBeAddedToServant",
        "CanListenServantCallback"
      ],
      "useEntitySnapshot": true,
      "description": "Take a set amount of <span class=\"descriptionNumberColor\">MDF_DamageValue</span> Imaginary DMG at the beginning of the turn.",
      "type": "Debuff",
      "effectName": "Hemotort Corruption",
      "statusName": "Hemotort Corruption",
      "duration": 1,
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": "Is NOT in Auto-Battle State"
            }
          ]
        },
        {
          "eventTrigger": "Turn [Owner]: Pre-action Phase",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "AttackScaling": {
                "DamageType": "Imaginary",
                "DamageFlat": {
                  "displayLines": "MDF_DamageValue"
                },
                "dmgFormulaFinal": "Converted DMG Base",
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
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "AttackScaling": {
                "DamageType": "Imaginary",
                "DamageFlat": {
                  "displayLines": "(DOT_TriggerRatio * MDF_DamageValue)"
                },
                "dmgFormulaFinal": "Converted DMG Base",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1221492183\">Enemy_W2_Beast01_04_AbilityP02_GoldBlood_DamageCalculator</a>",
      "useEntitySnapshot": true,
      "execute": [
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Current Action Holder's Team",
                "team": "Enemy Team"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Damage Data",
                  "variableName": "_Damage",
                  "scope": "ContextModifier",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "ContextModifier",
                  "value": {
                    "displayLines": "(_TotalDamage + _Damage)"
                  },
                  "variableName": "_TotalDamage"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "_TotalDamage",
                    "compareType": ">",
                    "value2": 0,
                    "contextScope": "ContextModifier"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1779981114\">Enemy_W2_Beast01_04_AbilityP02_GoldBlood_BeHit</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked [Owner]: Start",
          "execute": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "ContextModifier",
              "value": 0,
              "variableName": "_TotalDamage"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1779981114\">Enemy_W2_Beast01_04_AbilityP02_GoldBlood_BeHit</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-689374795\">Enemy_W2_Beast01_04_AbilityP02_GoldBlood_Attacked</a>"
            }
          ]
        },
        {
          "eventTrigger": "Attack Start [Anyone]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "ContextModifier",
              "value": 0,
              "variableName": "_TotalDamage"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1779981114\">Enemy_W2_Beast01_04_AbilityP02_GoldBlood_BeHit</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-689374795\">Enemy_W2_Beast01_04_AbilityP02_GoldBlood_Attacked</a>"
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked [Owner]: End",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-689374795\">Enemy_W2_Beast01_04_AbilityP02_GoldBlood_Attacked</a>"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-689374795\">Enemy_W2_Beast01_04_AbilityP02_GoldBlood_Attacked</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1779981114\">Enemy_W2_Beast01_04_AbilityP02_GoldBlood_BeHit</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-771052398\">Enemy_W2_Beast01_04_AbilityP02_GoldBlood_Enhance</a>[<span class=\"descriptionNumberColor\">Hemotort Stain</span>]",
      "stackType": "Replace",
      "description": "After attacking, applies \"Hemotort Corruption\" based on the amount of DMG taken (not offset by Shield) to the selected characters.",
      "type": "Other",
      "effectName": "Hemotort Stain",
      "statusName": "Hemotort Stain",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1221492183\">Enemy_W2_Beast01_04_AbilityP02_GoldBlood_DamageCalculator</a>"
            }
          ]
        },
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Part Of",
                    "target1": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                    }
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1221492183\">Enemy_W2_Beast01_04_AbilityP02_GoldBlood_DamageCalculator</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Attack Action Completed [Owner]",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1779981114\">Enemy_W2_Beast01_04_AbilityP02_GoldBlood_BeHit</a>"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-689374795\">Enemy_W2_Beast01_04_AbilityP02_GoldBlood_Attacked</a>"
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Define Custom Variable with Copy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1221492183\">Enemy_W2_Beast01_04_AbilityP02_GoldBlood_DamageCalculator</a>",
                  "variable": "_TotalDamage",
                  "target2": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variable2": "TargetTotalDamage",
                  "scope": "ContextModifier"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1128925615\">Enemy_W2_Beast01_04_AbilityP02_GoldBlood_DOT</a>[<span class=\"descriptionNumberColor\">Hemotort Corruption</span>]",
                  "valuePerStack": {
                    "MDF_DamageValue": {
                      "displayLines": "(TargetTotalDamage * MDF_GoldBloodDOTDamageRatio)"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1786069431\">Enemy_W2_Beast01_04_AbilityP02_DeathRattle</a>",
      "modifierFlags": [
        "Deathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "Was Killed (Queued) [Owner]",
          "execute": [
            {
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "silent": true
            },
            {
              "name": "Mark Entity For Immediate Death"
            },
            {
              "name": "Inject Ability Use",
              "abilityName": "Monster_W2_Beast01_04_AbilityP02_InsertAbility_Part01",
              "priorityTag": "EnemyDeathEffect",
              "ownerState": "Mask_AliveOrLimbo",
              "targetState": "Mask_AliveOrLimbo",
              "canHitNonTargets": true,
              "showInActionOrder": true,
              "allowAbilityTriggers": false
            }
          ]
        }
      ]
    }
  ],
  "references": []
}