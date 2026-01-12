const configAbility = {
  "fileName": "March7thP_Modifiers",
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
      "for": "March7th_BPAbility_Shield[<span class=\"descriptionNumberColor\">Shield</span>]",
      "stackType": "Replace",
      "modifierFlags": [
        "Shield"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Set Shield State/Value"
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Shield",
              "target": "Owner of this Modifier"
            },
            {
              "name": "Set Shield State/Value",
              "reset": true
            }
          ]
        },
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_HealPercentage",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Heal",
                  "target": "Owner of this Modifier",
                  "healPercent": {
                    "operator": "Variables[0] (MDF_HealPercentage) || RETURN",
                    "displayLines": "MDF_HealPercentage",
                    "constants": [],
                    "variables": [
                      "MDF_HealPercentage"
                    ]
                  },
                  "healFlat": {
                    "operator": "Variables[0] (MDF_HealValue) || RETURN",
                    "displayLines": "MDF_HealValue",
                    "constants": [],
                    "variables": [
                      "MDF_HealValue"
                    ]
                  },
                  "formula": "Heal from Target MaxHP"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_AggroUp",
                "compareType": "=",
                "value2": 0
              },
              "failed": [
                {
                  "name": "Update Modifier Description",
                  "popUpText": "Gains a Shield that absorbs DMG, and greatly increases the chance to be attacked by enemies. While the Shield persists, enemy attacks will not reduce Shielded characters' HP."
                }
              ]
            },
            {
              "name": "Create Shield",
              "target": "Owner of this Modifier",
              "value": {
                "operator": "Variables[0] (MDF_ShieldValue) || RETURN",
                "displayLines": "MDF_ShieldValue",
                "constants": [],
                "variables": [
                  "MDF_ShieldValue"
                ]
              },
              "valuePercent": {
                "operator": "Variables[0] (MDF_ShieldPercentage) || RETURN",
                "displayLines": "MDF_ShieldPercentage",
                "constants": [],
                "variables": [
                  "MDF_ShieldPercentage"
                ]
              },
              "formula": "DEF Scaling (Shield)"
            },
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">Aggro%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_AggroUp) || RETURN",
                "displayLines": "MDF_AggroUp",
                "constants": [],
                "variables": [
                  "MDF_AggroUp"
                ]
              }
            }
          ]
        }
      ],
      "useEntitySnapshot": true,
      "stackData": [
        "MDF_HealPercentage",
        "MDF_HealValue",
        "MDF_ShieldPercentage",
        "MDF_ShieldValue",
        "MDF_AggroUp"
      ],
      "latentQueue": [],
      "description": "Gains a Shield that absorbs DMG. While the Shield persists, enemy attacks will not reduce Shielded characters' HP.",
      "type": "Buff",
      "effectName": "Shield",
      "statusName": "Shield"
    },
    {
      "name": "Modifier Construction",
      "for": "March7th_BPAbility_Shield_Counter",
      "execute": [
        {
          "eventTrigger": "Being Attacked Start [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Flag",
                    "target": "Owner of this Modifier",
                    "flagName": "Shield"
                  },
                  {
                    "name": "Is Part Of Team",
                    "target": "Use Prior Target(s) Defined",
                    "team": "TeamDark"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "March7th_Passive_CanAttack[<span class=\"descriptionNumberColor\">Counter</span>]",
                    "compareType": ">",
                    "value2": 0
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Use Prior Target(s) Defined",
                  "modifier": "March7th_BPAbility_Shield_Mark"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "March7th_BPAbility_Shield_Mark",
      "execute": [
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "Inject Ability Use",
              "abilityName": "Mar_7th_PassiveAbility01_InsertAbility",
              "abilitySource": "Caster",
              "abilityTarget": "Owner of this Modifier",
              "priorityTag": "AvatarInsertAttackSelf",
              "showInActionOrder": true,
              "abortFlags": [
                "DisableAction",
                "STAT_CTRL"
              ],
              "allowAbilityTriggers": false
            },
            {
              "name": "Remove Events/Bonuses",
              "to": "Owner of this Modifier",
              "modifier": "March7th_BPAbility_Shield_Mark",
              "onlyRemoveOwnersInstance": true
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Mar_7th_FrozenFlag",
      "execute": [
        {
          "eventTrigger": "When Modifier is Added [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target",
                "target": "Use Prior Target(s) Defined",
                "target2": "Owner of this Modifier"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": "Owner of this Modifier",
                    "flagName": "STAT_CTRL_Frozen"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "scope": "ContextCaster",
                      "variableName": "MDF_FrozenCount",
                      "value": {
                        "operator": "Variables[0] (MDF_FrozenCount) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(MDF_FrozenCount + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "MDF_FrozenCount"
                        ]
                      }
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
      "latentQueue": []
    }
  ],
  "references": []
}