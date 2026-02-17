const configAbility = {
  "fileName": "3003043_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__1025576815\">Enemy_W3_Figure_RLElite_AttackUP</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "ModifierLayers",
              "multiplier": 1
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_AttackUPRatio) || Variables[1] (ModifierLayers) || MUL || RETURN",
                "displayLines": "(MDF_AttackUPRatio * ModifierLayers)",
                "constants": [],
                "variables": [
                  "MDF_AttackUPRatio",
                  "ModifierLayers"
                ]
              }
            }
          ]
        }
      ],
      "description": "For every target with Alien Dream, increase this unit's ATK by <span class=\"descriptionNumberColor\">MDF_AttackUPRatio</span>.",
      "type": "Buff",
      "effectName": "ATK Boost",
      "statusName": "ATK Boost"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1110187412\">Enemy_W3_Figure_RLElite_SuccessSleep</a>",
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
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
                  },
                  {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"2144716663\">Standard_CTRL_Sleep</a>[<span class=\"descriptionNumberColor\">Alien Dream</span>]"
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
                  "modifier": "<a class=\"gModGreen\" id=\"1025576815\">Enemy_W3_Figure_RLElite_AttackUP</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]"
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 4,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"2144716663\">Standard_CTRL_Sleep</a>[<span class=\"descriptionNumberColor\">Alien Dream</span>]"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "SleepNum",
                      "value": {
                        "operator": "Variables[0] (SleepNum) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(SleepNum + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "SleepNum"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1025576815\">Enemy_W3_Figure_RLElite_AttackUP</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
                  "valuePerStack": {
                    "MDF_AttackUPRatio": {
                      "operator": "Variables[0] ({[PassiveSkill02[0]]}) || RETURN",
                      "displayLines": "{[PassiveSkill02[0]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill02[0]]}"
                      ]
                    }
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (SleepNum) || RETURN",
                    "displayLines": "SleepNum",
                    "constants": [],
                    "variables": [
                      "SleepNum"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "SleepNum",
                  "value": 0
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Losing Modifier [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
                  },
                  {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"2144716663\">Standard_CTRL_Sleep</a>[<span class=\"descriptionNumberColor\">Alien Dream</span>]"
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
                  "modifier": "<a class=\"gModGreen\" id=\"1025576815\">Enemy_W3_Figure_RLElite_AttackUP</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]"
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 4,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"2144716663\">Standard_CTRL_Sleep</a>[<span class=\"descriptionNumberColor\">Alien Dream</span>]"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "SleepNum",
                      "value": {
                        "operator": "Variables[0] (SleepNum) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(SleepNum + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "SleepNum"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1025576815\">Enemy_W3_Figure_RLElite_AttackUP</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
                  "valuePerStack": {
                    "MDF_AttackUPRatio": {
                      "operator": "Variables[0] ({[PassiveSkill02[0]]}) || RETURN",
                      "displayLines": "{[PassiveSkill02[0]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill02[0]]}"
                      ]
                    }
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (SleepNum) || RETURN",
                    "displayLines": "SleepNum",
                    "constants": [],
                    "variables": [
                      "SleepNum"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "SleepNum",
                  "value": 0
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
      "for": "<a class=\"gModGreen\" id=\"mod__-316988116\">Monster_W3_Figure_RLElite_ChargeEffect</a>[<span class=\"descriptionNumberColor\">Holy Night</span>]",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "About to use \"Sleep In Heavenly Peace.\"",
      "type": "Other",
      "effectName": "Charging",
      "statusName": "Holy Night"
    }
  ],
  "references": []
}