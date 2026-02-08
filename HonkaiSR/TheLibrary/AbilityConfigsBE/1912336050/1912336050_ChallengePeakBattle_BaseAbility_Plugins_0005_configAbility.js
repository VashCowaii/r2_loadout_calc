const configAbility = {
  "fileName": "1912336050_ChallengePeakBattle_BaseAbility_Plugins_0005",
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
      "modifier": "<a class=\"gModGreen\" id=\"-2116993488\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0005</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1184857721\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0005_Halo</a>",
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable, exclude Netherwing)}}.[[removeBattleEvents]]"
              },
              {
                "name": "Target Filter",
                "conditions": {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-46685300\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0005_03</a>[<span class=\"descriptionNumberColor\">Power Surge</span>]",
                  "invertCondition": true
                }
              }
            ]
          },
          "modifier": "<a class=\"gModGreen\" id=\"-63462919\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0005_04</a>",
          "haloStatus": true,
          "valuePerStack": {
            "ChallengePeakBattle_Plugins_0005_ADF_1": {
              "operator": "Variables[0] (#ADF_1) || RETURN",
              "displayLines": "#ADF_1",
              "constants": [],
              "variables": [
                "#ADF_1"
              ]
            },
            "ChallengePeakBattle_Plugins_0005_ADF_2": {
              "operator": "Variables[0] (#ADF_2) || RETURN",
              "displayLines": "#ADF_2",
              "constants": [],
              "variables": [
                "#ADF_2"
              ]
            },
            "ChallengePeakBattle_Plugins_0005_ADF_3": {
              "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED_20) || RETURN",
              "displayLines": "ENEMIES_OBJECT_UNUSED_20",
              "constants": [],
              "variables": [
                "ENEMIES_OBJECT_UNUSED_20"
              ]
            }
          }
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-63462919\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0005_04</a>",
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
              "modifier": "<a class=\"gModGreen\" id=\"-46685300\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0005_03</a>[<span class=\"descriptionNumberColor\">Power Surge</span>]",
              "stackLimit": 999,
              "valuePerStack": {
                "ChallengePeakBattle_Plugins_0005_ADF_1": {
                  "operator": "Variables[0] (ChallengePeakBattle_Plugins_0005_ADF_1) || RETURN",
                  "displayLines": "ChallengePeakBattle_Plugins_0005_ADF_1",
                  "constants": [],
                  "variables": [
                    "ChallengePeakBattle_Plugins_0005_ADF_1"
                  ]
                },
                "ChallengePeakBattle_Plugins_0005_ADF_2": {
                  "operator": "Variables[0] (ChallengePeakBattle_Plugins_0005_ADF_2) || RETURN",
                  "displayLines": "ChallengePeakBattle_Plugins_0005_ADF_2",
                  "constants": [],
                  "variables": [
                    "ChallengePeakBattle_Plugins_0005_ADF_2"
                  ]
                }
              },
              "addStacksPerTrigger": {
                "operator": "Variables[0] (ChallengePeakBattle_Plugins_0005_ADF_3) || RETURN",
                "displayLines": "ChallengePeakBattle_Plugins_0005_ADF_3",
                "constants": [],
                "variables": [
                  "ChallengePeakBattle_Plugins_0005_ADF_3"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "ChallengePeakBattle_Plugins_0005_ADF_1",
        "ChallengePeakBattle_Plugins_0005_ADF_2",
        "ChallengePeakBattle_Plugins_0005_ADF_3"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-46685300\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0005_03</a>[<span class=\"descriptionNumberColor\">Power Surge</span>]",
      "stackType": "Replace",
      "execute": [
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKFlat</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (ChallengePeakBattle_Plugins_0005_ADF_2) || Variables[1] (MDF_Layer) || MUL || RETURN",
                "displayLines": "(ChallengePeakBattle_Plugins_0005_ADF_2 * MDF_Layer)",
                "constants": [],
                "variables": [
                  "ChallengePeakBattle_Plugins_0005_ADF_2",
                  "MDF_Layer"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "ChallengePeakBattle_Plugins_0005_ADF_1",
        "ChallengePeakBattle_Plugins_0005_ADF_2"
      ],
      "latentQueue": [],
      "description": "Each stack increases ATK by <span class=\"descriptionNumberColor\">ChallengePeakBattle_Plugins_0005_ADF_2</span>.",
      "type": "Other",
      "effectName": "ATK Boost",
      "statusName": "Power Surge",
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-29907681\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0005_02</a>[<span class=\"descriptionNumberColor\">Power Surge</span>]",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Attack Type",
                "attackTypes": [
                  "Basic ATK",
                  "Skill",
                  "Ultimate"
                ]
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                      "value": "ChallengePeakBattle_Plugins_0005_ADF_1"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "description": "Basic ATK, Skill, and Ultimate DMG dealt increase by <span class=\"descriptionNumberColor\">ChallengePeakBattle_Plugins_0005_ADF_1</span>.",
      "type": "Other",
      "statusName": "Power Surge"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2116993488\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0005</a>",
      "execute": [
        {
          "eventTrigger": "Entity Created [Anyone]",
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
                  "modifier": "<a class=\"gModGreen\" id=\"-29907681\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0005_02</a>[<span class=\"descriptionNumberColor\">Power Surge</span>]",
                  "valuePerStack": {
                    "ChallengePeakBattle_Plugins_0005_ADF_1": {
                      "operator": "Variables[0] (#ADF_1) || RETURN",
                      "displayLines": "#ADF_1",
                      "constants": [],
                      "variables": [
                        "#ADF_1"
                      ]
                    },
                    "ChallengePeakBattle_Plugins_0005_ADF_2": {
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
        },
        {
          "eventTrigger": "When Stacking Modifier Instance [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"922752745\">MissionBattleEvent60037_BE_Trigger</a>"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable, exclude Netherwing)}}.[[removeBattleEvents]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-46685300\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0005_03</a>[<span class=\"descriptionNumberColor\">Power Surge</span>]",
                  "stackLimit": 999,
                  "valuePerStack": {
                    "ChallengePeakBattle_Plugins_0005_ADF_1": {
                      "operator": "Variables[0] (#ADF_1) || RETURN",
                      "displayLines": "#ADF_1",
                      "constants": [],
                      "variables": [
                        "#ADF_1"
                      ]
                    },
                    "ChallengePeakBattle_Plugins_0005_ADF_2": {
                      "operator": "Variables[0] (#ADF_2) || RETURN",
                      "displayLines": "#ADF_2",
                      "constants": [],
                      "variables": [
                        "#ADF_2"
                      ]
                    }
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1184857721\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0005_Halo</a>",
                  "valuePerStack": {
                    "ChallengePeakBattle_Plugins_0005_ADF_1": {
                      "operator": "Variables[0] (#ADF_1) || RETURN",
                      "displayLines": "#ADF_1",
                      "constants": [],
                      "variables": [
                        "#ADF_1"
                      ]
                    },
                    "ChallengePeakBattle_Plugins_0005_ADF_2": {
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