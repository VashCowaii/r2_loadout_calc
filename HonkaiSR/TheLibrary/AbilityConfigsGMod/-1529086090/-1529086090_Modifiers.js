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
      "for": "MAssistant_Trigger_OnAfterTechniqueUsage",
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
              "modifierName": "MAssistant_Trigger_OnAfterTechniqueUsage",
              "function": "Add"
            }
          ],
          "priorityLevel": -55
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "MAssistant_Trigger_AvatarHPLoss_Add",
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
              "modifierName": "MAssistant_Trigger_AvatarHPLoss",
              "function": "Add"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "MAssistant_Trigger_AvatarHPLoss",
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
              "modifier": "MAssistant_Trigger_AvatarHPLoss_Add"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "MAssistant_Trigger_AllEnemyBeingHitByFire",
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
                  "modifierName": "MAssistant_Trigger_AllEnemyBeingHitByFire",
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
      "for": "MAssistant_Trigger_EnemyStatusChangeToBurn",
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
                  "modifierName": "MAssistant_Trigger_EnemyStatusChangeToBurn",
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
      "for": "MAssistant_Trigger_EnemyDelayChange",
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
                  "modifierName": "Assistant_EnemyDelayChange",
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