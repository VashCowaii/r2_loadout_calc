const configAbility = {
  "fileName": "1912336050_ChallengePeakBattle_EnhancedAbility_0001",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1732969362\">Modifier_ChallengePeakBattle_EnhancedAbility_0001</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-681980542\">Modifier_ChallengePeakBattle_EnhancedAbility_0001_03</a>[<span class=\"descriptionNumberColor\">Resilient Armor+</span>]",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "Being Toughness Bar Reset [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": null,
                "compareType": ">",
                "value2": 0,
                "valueType": "Layer"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-681980542\">Modifier_ChallengePeakBattle_EnhancedAbility_0001_03</a>[<span class=\"descriptionNumberColor\">Resilient Armor+</span>]"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "MDF_Layer",
              "multiplier": 1
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (ChallengePeakBattle_0001_ADF_2) || Variables[1] (MDF_Layer) || MUL || RETURN",
                "displayLines": "(ChallengePeakBattle_0001_ADF_2 * MDF_Layer)",
                "constants": [],
                "variables": [
                  "ChallengePeakBattle_0001_ADF_2",
                  "MDF_Layer"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": null,
                "compareType": "<=",
                "value2": 0,
                "valueType": "Layer"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-681980542\">Modifier_ChallengePeakBattle_EnhancedAbility_0001_03</a>[<span class=\"descriptionNumberColor\">Resilient Armor+</span>]"
                }
              ]
            }
          ]
        }
      ],
      "description": "Each stack reduces DMG taken by <span class=\"descriptionNumberColor\">ChallengePeakBattle_0001_ADF_2</span>. Loses 1 stack of \"Resilient Armor+\" each time Toughness is reduced to 0.",
      "type": "Other",
      "statusName": "Resilient Armor+",
      "addStacksPerTrigger": -1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-665202923\">Modifier_ChallengePeakBattle_EnhancedAbility_0001_02</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-681980542\">Modifier_ChallengePeakBattle_EnhancedAbility_0001_03</a>[<span class=\"descriptionNumberColor\">Resilient Armor+</span>]",
              "stackLimit": {
                "operator": "Variables[0] (ChallengePeakBattle_0001_ADF_1) || RETURN",
                "displayLines": "ChallengePeakBattle_0001_ADF_1",
                "constants": [],
                "variables": [
                  "ChallengePeakBattle_0001_ADF_1"
                ]
              },
              "valuePerStack": {
                "ChallengePeakBattle_0001_ADF_1": {
                  "operator": "Variables[0] (ChallengePeakBattle_0001_ADF_1) || RETURN",
                  "displayLines": "ChallengePeakBattle_0001_ADF_1",
                  "constants": [],
                  "variables": [
                    "ChallengePeakBattle_0001_ADF_1"
                  ]
                },
                "ChallengePeakBattle_0001_ADF_2": {
                  "operator": "Variables[0] (ChallengePeakBattle_0001_ADF_2) || RETURN",
                  "displayLines": "ChallengePeakBattle_0001_ADF_2",
                  "constants": [],
                  "variables": [
                    "ChallengePeakBattle_0001_ADF_2"
                  ]
                }
              },
              "addStacksPerTrigger": {
                "operator": "Variables[0] (ChallengePeakBattle_0001_ADF_1) || RETURN",
                "displayLines": "ChallengePeakBattle_0001_ADF_1",
                "constants": [],
                "variables": [
                  "ChallengePeakBattle_0001_ADF_1"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Enemy HP Phased",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-681980542\">Modifier_ChallengePeakBattle_EnhancedAbility_0001_03</a>[<span class=\"descriptionNumberColor\">Resilient Armor+</span>]"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-681980542\">Modifier_ChallengePeakBattle_EnhancedAbility_0001_03</a>[<span class=\"descriptionNumberColor\">Resilient Armor+</span>]",
              "stackLimit": {
                "operator": "Variables[0] (ChallengePeakBattle_0001_ADF_1) || RETURN",
                "displayLines": "ChallengePeakBattle_0001_ADF_1",
                "constants": [],
                "variables": [
                  "ChallengePeakBattle_0001_ADF_1"
                ]
              },
              "valuePerStack": {
                "ChallengePeakBattle_0001_ADF_1": {
                  "operator": "Variables[0] (ChallengePeakBattle_0001_ADF_1) || RETURN",
                  "displayLines": "ChallengePeakBattle_0001_ADF_1",
                  "constants": [],
                  "variables": [
                    "ChallengePeakBattle_0001_ADF_1"
                  ]
                },
                "ChallengePeakBattle_0001_ADF_2": {
                  "operator": "Variables[0] (ChallengePeakBattle_0001_ADF_2) || RETURN",
                  "displayLines": "ChallengePeakBattle_0001_ADF_2",
                  "constants": [],
                  "variables": [
                    "ChallengePeakBattle_0001_ADF_2"
                  ]
                }
              },
              "addStacksPerTrigger": {
                "operator": "Variables[0] (ChallengePeakBattle_0001_ADF_1) || RETURN",
                "displayLines": "ChallengePeakBattle_0001_ADF_1",
                "constants": [],
                "variables": [
                  "ChallengePeakBattle_0001_ADF_1"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1732969362\">Modifier_ChallengePeakBattle_EnhancedAbility_0001</a>",
      "execute": [
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-665202923\">Modifier_ChallengePeakBattle_EnhancedAbility_0001_02</a>",
                  "valuePerStack": {
                    "ChallengePeakBattle_0001_ADF_1": {
                      "operator": "Variables[0] (#ADF_1) || RETURN",
                      "displayLines": "#ADF_1",
                      "constants": [],
                      "variables": [
                        "#ADF_1"
                      ]
                    },
                    "ChallengePeakBattle_0001_ADF_2": {
                      "operator": "Variables[0] (#ADF_2) || RETURN",
                      "displayLines": "#ADF_2",
                      "constants": [],
                      "variables": [
                        "#ADF_2"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}