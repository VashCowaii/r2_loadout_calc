const configAbility = {
  "fileName": "5012100_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1664599275\">Enemy_W5_Magical_Passive_ChangeToRain</a>",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"222442080\">Enemy_W5_Magical_Passive_Sun</a>[<span class=\"descriptionNumberColor\">Sunny Day</span>]"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"726195692\">Enemy_W5_Magical_Passive_Rain</a>[<span class=\"descriptionNumberColor\">Rainy Day</span>]"
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (ModifierLayers) || RETURN",
                "displayLines": "ModifierLayers",
                "constants": [],
                "variables": [
                  "ModifierLayers"
                ]
              },
              "entityClass": "Enemy",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "maximum": {
                "operator": "Variables[0] (ModifierMaxLayers) || RETURN",
                "displayLines": "ModifierMaxLayers",
                "constants": [],
                "variables": [
                  "ModifierMaxLayers"
                ]
              },
              "assignState": "True",
              "state": "Normal",
              "trigger": "SpEff_Trigger"
            },
            "Modifier Deletes Itself"
          ],
          "priorityLevel": 100
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__222603007\">Enemy_W5_Magical_Passive_ChangeToSun</a>",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Inject Ability Use",
              "abilityName": "Monster_W5_Magical_ChangeToSun",
              "abilityTarget": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "priorityTag": "EnemyBuffSelf",
              "ownerState": "Mask_AliveOrLimbo",
              "showInActionOrder": true,
              "allowAbilityTriggers": false
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__222442080\">Enemy_W5_Magical_Passive_Sun</a>[<span class=\"descriptionNumberColor\">Sunny Day</span>]",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "Weather",
              "value": 1
            }
          ]
        }
      ],
      "description": "When receiving a killing blow, uses \"First Kiss ❤ Sunny Skies.\" At the start of the turn, enters the \"Rainy Day\" state.",
      "type": "Other",
      "effectName": "Sunny Day",
      "statusName": "Sunny Day"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__726195692\">Enemy_W5_Magical_Passive_Rain</a>[<span class=\"descriptionNumberColor\">Rainy Day</span>]",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "Weather",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "Trigger",
              "value": 0
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "Uses \"Gentle Rains ❤ How I Miss You\" when receiving a killing blow.",
      "type": "Other",
      "effectName": "Rainy Day",
      "statusName": "Rainy Day"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1018576515\">Enemy_W5_Magical_Passive</a>",
      "modifierFlags": [
        "KeepOnDeathrattle",
        "ListenBattleEventSkill"
      ],
      "execute": [
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "Weather",
                    "compareType": "=",
                    "value2": 0
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "Trigger",
                    "compareType": "=",
                    "value2": 0
                  },
                  {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Elation DMG"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  }
                ]
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"726195692\">Enemy_W5_Magical_Passive_Rain</a>[<span class=\"descriptionNumberColor\">Rainy Day</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"222442080\">Enemy_W5_Magical_Passive_Sun</a>[<span class=\"descriptionNumberColor\">Sunny Day</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"222603007\">Enemy_W5_Magical_Passive_ChangeToSun</a>"
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "Trigger",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"726195692\">Enemy_W5_Magical_Passive_Rain</a>[<span class=\"descriptionNumberColor\">Rainy Day</span>]"
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (ModifierLayers) || RETURN",
                "displayLines": "ModifierLayers",
                "constants": [],
                "variables": [
                  "ModifierLayers"
                ]
              },
              "entityClass": "Enemy",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "maximum": {
                "operator": "Variables[0] (ModifierMaxLayers) || RETURN",
                "displayLines": "ModifierMaxLayers",
                "constants": [],
                "variables": [
                  "ModifierMaxLayers"
                ]
              },
              "assignState": "True",
              "state": "Normal"
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Owner]: Start"
        },
        {
          "eventTrigger": "Ability Use [Anyone]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Type",
                "skillType": "Elation"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "Weather",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "Trigger",
                        "compareType": "=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"726195692\">Enemy_W5_Magical_Passive_Rain</a>[<span class=\"descriptionNumberColor\">Rainy Day</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"222442080\">Enemy_W5_Magical_Passive_Sun</a>[<span class=\"descriptionNumberColor\">Sunny Day</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"222603007\">Enemy_W5_Magical_Passive_ChangeToSun</a>"
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "Trigger",
                      "value": 1
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "Weather",
                "compareType": "=",
                "value2": 0
              }
            }
          ]
        },
        {
          "eventTrigger": "Enter Battle"
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ],
  "references": []
}