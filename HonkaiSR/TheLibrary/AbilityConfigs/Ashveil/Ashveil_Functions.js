const configAbility = {
  "fileName": "Ashveil_Functions",
  "abilityType": "Char. Functions",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "length": 4,
  "parse": [
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__1726722231\">Ashveil_TryInsert</a>",
      "parse": [
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
                "modifier": "<a class=\"gModGreen\" id=\"-1584183733\">Ashveil_PassiveFlag</a>",
                "invertCondition": true
              },
              {
                "name": "Target is Unselectable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ashveil: Parasite Target}}"
                },
                "source": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "invertCondition": true
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "flagName": "STAT_CTRL",
                "invertCondition": true
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "flagName": "DisableAction",
                "invertCondition": true
              }
            ]
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "Inject Ability Use",
                  "condition": {
                    "name": "Insert Ability Condition",
                    "type": "AbilityOwnerInsertUnusedCount",
                    "typeValue": 1
                  },
                  "abilityName": "Ashveil_Insert_SelectTargetSelf",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "priorityTag": "CharacterAttackFromSelf",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "abortFlags": [
                    "STAT_CTRL",
                    "DisableAction"
                  ],
                  "allowAbilityTriggers": false
                }
              ],
              "noTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"532779389\">Ashveil_InsertCheckSelf</a>"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-469638766\">Ashveil_TryInsert_Enhance</a>",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Target is Unselectable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ashveil: Parasite Target}}"
                },
                "source": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "invertCondition": true
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "flagName": "STAT_CTRL",
                "invertCondition": true
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "flagName": "DisableAction",
                "invertCondition": true
              }
            ]
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "Inject Ability Use",
                  "condition": {
                    "name": "Insert Ability Condition",
                    "type": "AbilityOwnerInsertUnusedCount",
                    "typeValue": 1
                  },
                  "abilityName": "Ashveil_Insert_SelectTargetSelf_Enhance",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "priorityTag": "CharacterAttackFromSelf",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "abortFlags": [
                    "STAT_CTRL",
                    "DisableAction"
                  ],
                  "allowAbilityTriggers": false
                }
              ],
              "noTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"972275728\">Ashveil_InsertCheckSelf_Enhance</a>"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__212291347\">Ashveil_DebuffRemove</a>",
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1185293706\">Ashveil_Ability02_Debuff</a>[<span class=\"descriptionNumberColor\">Bait</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1185293706\">Ashveil_Ability02_Debuff</a>[<span class=\"descriptionNumberColor\">Bait</span>]",
          "valuePerStack": {
            "MDF_DefenceDownTemp": {
              "operator": "Variables[0] (0.4) || RETURN",
              "displayLines": "0.4",
              "constants": [],
              "variables": [
                0.4
              ]
            },
            "MDF_AllDamageTypeResistenceDownTemp": {
              "operator": "Variables[0] (0.2) || RETURN",
              "displayLines": "0.2",
              "constants": [],
              "variables": [
                0.2
              ]
            }
          }
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-178840964\">Ashveil_Ability02_DebuffTransfer</a>",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target Count SUM",
            "target": {
              "name": "Target Name",
              "target": "{{Enemy Team All}}"
            },
            "conditions": {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1185293706\">Ashveil_Ability02_Debuff</a>[<span class=\"descriptionNumberColor\">Bait</span>]"
            },
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All(with Unselectable)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1185293706\">Ashveil_Ability02_Debuff</a>[<span class=\"descriptionNumberColor\">Bait</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All(with Unselectable)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1362659531\">Ashveil_ParasiteDebuffForShow</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All(with Unselectable)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1576406867\">Ashveil_ParasiteDebuffForShow_InsertAbility</a>"
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}.[[sortByHPCurrent]]"
              },
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1185293706\">Ashveil_Ability02_Debuff</a>[<span class=\"descriptionNumberColor\">Bait</span>]",
                  "valuePerStack": {
                    "MDF_DefenceDownTemp": {
                      "operator": "Variables[0] (0.4) || RETURN",
                      "displayLines": "0.4",
                      "constants": [],
                      "variables": [
                        0.4
                      ]
                    },
                    "MDF_AllDamageTypeResistenceDownTemp": {
                      "operator": "Variables[0] (0.2) || RETURN",
                      "displayLines": "0.2",
                      "constants": [],
                      "variables": [
                        0.2
                      ]
                    }
                  }
                },
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
                        "modifier": "<a class=\"gModGreen\" id=\"-1584183733\">Ashveil_PassiveFlag</a>",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"874485230\">Ashveil_PassiveFlag_Enhance</a>",
                        "invertCondition": true
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
                      "modifier": "<a class=\"gModGreen\" id=\"1362659531\">Ashveil_ParasiteDebuffForShow</a>"
                    }
                  ]
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