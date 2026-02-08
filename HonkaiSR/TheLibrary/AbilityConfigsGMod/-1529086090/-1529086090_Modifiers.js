const configAbility = {
  "fileName": "-1529086090_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-675119017\">MAssistant_Trigger_OnAfterTechniqueUsage</a>",
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Inject Ability Use",
              "abilityID": {
                "operator": "Variables[0] (MDF_AssistantAbilityKey) || RETURN",
                "displayLines": "MDF_AssistantAbilityKey",
                "constants": [],
                "variables": [
                  "MDF_AssistantAbilityKey"
                ]
              },
              "isAssistantAbility": true,
              "abilityTarget": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "abortFlags": [
                "STAT_CTRL",
                "DisableAction"
              ],
              "allowAbilityTriggers": false
            },
            {
              "name": "Define Modifier Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifierName": "<a class=\"gModGreen\" id=\"-675119017\">MAssistant_Trigger_OnAfterTechniqueUsage</a>",
              "function": "Add"
            }
          ],
          "priorityLevel": -55
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1160127394\">MAssistant_Trigger_AvatarHPLoss_Add</a>",
      "execute": [
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "Inject Ability Use",
              "abilityID": {
                "operator": "Variables[0] (MDF_AssistantAbilityKey) || RETURN",
                "displayLines": "MDF_AssistantAbilityKey",
                "constants": [],
                "variables": [
                  "MDF_AssistantAbilityKey"
                ]
              },
              "isAssistantAbility": true,
              "abilitySource": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "abilityTarget": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "abortFlags": [
                "STAT_CTRL",
                "DisableAction"
              ],
              "allowAbilityTriggers": false
            },
            {
              "name": "Define Modifier Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifierName": "<a class=\"gModGreen\" id=\"-926207822\">MAssistant_Trigger_AvatarHPLoss</a>",
              "function": "Add"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-926207822\">MAssistant_Trigger_AvatarHPLoss</a>",
      "counter": 2,
      "execute": [
        {
          "eventTrigger": "Attack Start [Owner]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1160127394\">MAssistant_Trigger_AvatarHPLoss_Add</a>"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1695634808\">MAssistant_Trigger_AllEnemyBeingHitByFire</a>",
      "counter": 2,
      "execute": [
        {
          "eventTrigger": "Weakness Break [Anyone]",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Modifier Holder's Hostile Entities(AOE)}}"
              },
              "searchRandom": true,
              "maxTargets": 5,
              "conditions": {
                "name": "NOT",
                "condition": {
                  "name": "Is Character Weakness Activated",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                }
              },
              "noTargetFound": [
                {
                  "name": "Inject Ability Use",
                  "abilityID": {
                    "operator": "Variables[0] (MDF_AssistantAbilityKey) || RETURN",
                    "displayLines": "MDF_AssistantAbilityKey",
                    "constants": [],
                    "variables": [
                      "MDF_AssistantAbilityKey"
                    ]
                  },
                  "isAssistantAbility": true,
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "abortFlags": [
                    "STAT_CTRL",
                    "DisableAction"
                  ],
                  "allowAbilityTriggers": false
                },
                {
                  "name": "Define Modifier Variable",
                  "modifierName": "<a class=\"gModGreen\" id=\"1695634808\">MAssistant_Trigger_AllEnemyBeingHitByFire</a>",
                  "function": "Add"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-600408678\">MAssistant_Trigger_EnemyStatusChangeToBurn</a>",
      "counter": 2,
      "execute": [
        {
          "eventTrigger": "When Modifier is Added [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "STAT_DOT_Burn"
                  },
                  {
                    "name": "NOT",
                    "condition": {
                      "name": "Is Teammate",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    }
                  }
                ]
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "abilityID": {
                    "operator": "Variables[0] (MDF_AssistantAbilityKey) || RETURN",
                    "displayLines": "MDF_AssistantAbilityKey",
                    "constants": [],
                    "variables": [
                      "MDF_AssistantAbilityKey"
                    ]
                  },
                  "isAssistantAbility": true,
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "abortFlags": [
                    "STAT_CTRL",
                    "DisableAction"
                  ],
                  "allowAbilityTriggers": false
                },
                {
                  "name": "Define Modifier Variable",
                  "modifierName": "<a class=\"gModGreen\" id=\"-600408678\">MAssistant_Trigger_EnemyStatusChangeToBurn</a>",
                  "function": "Add"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1782995181\">MAssistant_Trigger_EnemyDelayChange</a>",
      "counter": 1,
      "execute": [
        {
          "eventTrigger": "When Modifier is Added [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "STAT_SpeedDown"
                  },
                  {
                    "name": "NOT",
                    "condition": {
                      "name": "Is Teammate",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    }
                  }
                ]
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "abilityID": {
                    "operator": "Variables[0] (MDF_AssistantAbilityKey) || RETURN",
                    "displayLines": "MDF_AssistantAbilityKey",
                    "constants": [],
                    "variables": [
                      "MDF_AssistantAbilityKey"
                    ]
                  },
                  "isAssistantAbility": true,
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "abortFlags": [
                    "STAT_CTRL",
                    "DisableAction"
                  ],
                  "allowAbilityTriggers": false
                },
                {
                  "name": "Define Modifier Variable",
                  "modifierName": "<a class=\"gModGreen\" id=\"-743590988\">Assistant_EnemyDelayChange</a>",
                  "function": "Add"
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