const configAbility = {
  "fileName": "61006_HeliobusActionAbilitySetBoom_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Deleted bullshit",
    {
      "name": "UI Display Event",
      "popUpText": "Edict: Quincunx Smite"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"694207004\">Modifier_HeliobusActionAbilitySetBoom_Listener</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1380032969\">Modifier_HeliobusActionAbilitySetBoom_Boom</a>[<span class=\"descriptionNumberColor\">Quincunx Smite</span>]",
      "stackLimit": {
        "operator": "Variables[0] (#BattleEvent_P1_ADF) || RETURN",
        "displayLines": "#BattleEvent_P1_ADF",
        "constants": [],
        "variables": [
          "#BattleEvent_P1_ADF"
        ]
      }
    },
    "Trigger: Ability End"
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1931166042\">Modifier_HeliobusActionAbilitySetBoom_BoomReady</a>",
      "modifierFlags": [
        "KeepOnDeathrattle",
        "Deathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Add Ability",
              "abilityName": "HeliobusActionAbilitySetBoom_Deathrattle"
            }
          ]
        },
        {
          "eventTrigger": "Was Killed (Queued) [Owner]",
          "execute": [
            {
              "name": "Inject Ability Use",
              "abilityName": "HeliobusActionAbilitySetBoom_Deathrattle",
              "abilityTarget": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "priorityTag": "EnemyDeathEffect",
              "ownerState": "Mask_AliveOrLimbo",
              "targetState": "Mask_AliveOrLimbo",
              "canHitNonTargets": true,
              "allowAbilityTriggers": false
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1380032969\">Modifier_HeliobusActionAbilitySetBoom_Boom</a>[<span class=\"descriptionNumberColor\">Quincunx Smite</span>]",
      "stackType": "ReplaceByCaster",
      "description": "After being attacked, deals DMG to the unit with this effect, and targets adjacent to that unit.",
      "type": "Debuff",
      "effectName": "Quincunx Smite",
      "statusName": "Quincunx Smite",
      "addStacksPerTrigger": 1,
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
              "modifier": "<a class=\"gModGreen\" id=\"-208900353\">Modifier_HeliobusActionAbilitySetBoom_BoomMarkOff</a>"
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
              "modifier": "<a class=\"gModGreen\" id=\"-208900353\">Modifier_HeliobusActionAbilitySetBoom_BoomMarkOff</a>"
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Battle Event ID",
                "ID": 61006,
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                }
              },
              "failed": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "_BombCountLayer",
                  "multiplier": 1
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1931166042\">Modifier_HeliobusActionAbilitySetBoom_BoomReady</a>",
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (_BombCountLayer) || RETURN",
                    "displayLines": "_BombCountLayer",
                    "constants": [],
                    "variables": [
                      "_BombCountLayer"
                    ]
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1380032969\">Modifier_HeliobusActionAbilitySetBoom_Boom</a>[<span class=\"descriptionNumberColor\">Quincunx Smite</span>]"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Anyone]: Start",
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
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Player's Aim Target List}}"
                    },
                    "mustBeAlive2": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Toggle Skill Mark",
                  "toggle": true
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
      "for": "<a class=\"gModGreen\" id=\"mod__-208900353\">Modifier_HeliobusActionAbilitySetBoom_BoomMarkOff</a>",
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
          "eventTrigger": "Update Target Selected(UI) [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Player's Aim Target List}}"
                    },
                    "mustBeAlive2": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Toggle Skill Mark"
                }
              ],
              "failed": [
                {
                  "name": "Toggle Skill Mark",
                  "toggle": true
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__694207004\">Modifier_HeliobusActionAbilitySetBoom_Listener</a>",
      "modifierFlags": [
        "ListenBattleEventSkill"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "InsertFlag"
            }
          ]
        },
        {
          "eventTrigger": "Action End [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "InsertFlag",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "includeDyingTargets": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1931166042\">Modifier_HeliobusActionAbilitySetBoom_BoomReady</a>",
                    "justAddedOrActive": true
                  },
                  "ifTargetFound": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "HeliobusActionAbilitySetBoom_Boom",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "priorityTag": "CharacterAttackFromSelf",
                      "canHitNonTargets": true,
                      "valuePerStack": {
                        "Damage": {
                          "operator": "Variables[0] (#BattleEvent_P2_ADF) || RETURN",
                          "displayLines": "#BattleEvent_P2_ADF",
                          "constants": [],
                          "variables": [
                            "#BattleEvent_P2_ADF"
                          ]
                        },
                        "AdjoinDamage": {
                          "operator": "Variables[0] (#BattleEvent_P3_ADF) || RETURN",
                          "displayLines": "#BattleEvent_P3_ADF",
                          "constants": [],
                          "variables": [
                            "#BattleEvent_P3_ADF"
                          ]
                        },
                        "AdditionRatio": {
                          "operator": "Variables[0] (#BattleEvent_P4_ADF) || RETURN",
                          "displayLines": "#BattleEvent_P4_ADF",
                          "constants": [],
                          "variables": [
                            "#BattleEvent_P4_ADF"
                          ]
                        },
                        "_MaxLayer": {
                          "operator": "Variables[0] (#BattleEvent_P5_ADF) || RETURN",
                          "displayLines": "#BattleEvent_P5_ADF",
                          "constants": [],
                          "variables": [
                            "#BattleEvent_P5_ADF"
                          ]
                        }
                      },
                      "allowAbilityTriggers": false
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "InsertFlag",
                      "value": 1
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Anyone]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "InsertFlag",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "includeDyingTargets": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1931166042\">Modifier_HeliobusActionAbilitySetBoom_BoomReady</a>",
                    "justAddedOrActive": true
                  },
                  "ifTargetFound": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "HeliobusActionAbilitySetBoom_Boom",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "priorityTag": "CharacterAttackFromSelf",
                      "canHitNonTargets": true,
                      "valuePerStack": {
                        "Damage": {
                          "operator": "Variables[0] (#BattleEvent_P2_ADF) || RETURN",
                          "displayLines": "#BattleEvent_P2_ADF",
                          "constants": [],
                          "variables": [
                            "#BattleEvent_P2_ADF"
                          ]
                        },
                        "AdjoinDamage": {
                          "operator": "Variables[0] (#BattleEvent_P3_ADF) || RETURN",
                          "displayLines": "#BattleEvent_P3_ADF",
                          "constants": [],
                          "variables": [
                            "#BattleEvent_P3_ADF"
                          ]
                        },
                        "AdditionRatio": {
                          "operator": "Variables[0] (#BattleEvent_P4_ADF) || RETURN",
                          "displayLines": "#BattleEvent_P4_ADF",
                          "constants": [],
                          "variables": [
                            "#BattleEvent_P4_ADF"
                          ]
                        },
                        "_MaxLayer": {
                          "operator": "Variables[0] (#BattleEvent_P5_ADF) || RETURN",
                          "displayLines": "#BattleEvent_P5_ADF",
                          "constants": [],
                          "variables": [
                            "#BattleEvent_P5_ADF"
                          ]
                        }
                      },
                      "allowAbilityTriggers": false
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "InsertFlag",
                      "value": 1
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Anyone]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "InsertFlag",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "includeDyingTargets": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1931166042\">Modifier_HeliobusActionAbilitySetBoom_BoomReady</a>",
                    "justAddedOrActive": true
                  },
                  "ifTargetFound": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "HeliobusActionAbilitySetBoom_Boom",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "priorityTag": "CharacterAttackFromSelf",
                      "canHitNonTargets": true,
                      "valuePerStack": {
                        "Damage": {
                          "operator": "Variables[0] (#BattleEvent_P2_ADF) || RETURN",
                          "displayLines": "#BattleEvent_P2_ADF",
                          "constants": [],
                          "variables": [
                            "#BattleEvent_P2_ADF"
                          ]
                        },
                        "AdjoinDamage": {
                          "operator": "Variables[0] (#BattleEvent_P3_ADF) || RETURN",
                          "displayLines": "#BattleEvent_P3_ADF",
                          "constants": [],
                          "variables": [
                            "#BattleEvent_P3_ADF"
                          ]
                        },
                        "AdditionRatio": {
                          "operator": "Variables[0] (#BattleEvent_P4_ADF) || RETURN",
                          "displayLines": "#BattleEvent_P4_ADF",
                          "constants": [],
                          "variables": [
                            "#BattleEvent_P4_ADF"
                          ]
                        },
                        "_MaxLayer": {
                          "operator": "Variables[0] (#BattleEvent_P5_ADF) || RETURN",
                          "displayLines": "#BattleEvent_P5_ADF",
                          "constants": [],
                          "variables": [
                            "#BattleEvent_P5_ADF"
                          ]
                        }
                      },
                      "allowAbilityTriggers": false
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "InsertFlag",
                      "value": 1
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
  "targetObjectData": {
    "primaryTarget": "All Enemy Team Members"
  }
}