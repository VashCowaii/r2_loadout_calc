const configAbility = {
  "fileName": "1912336050_ChallengePeakBattle_BaseAbility_0015",
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
      "modifier": "<a class=\"gModGreen\" id=\"-170245100\">Modifier_ChallengePeakBattle_BaseAbility_0015</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1480313555\">Modifier_ChallengePeakBattle_BaseAbility_0015_02</a>[<span class=\"descriptionNumberColor\">Honing the Blade</span>]",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (ChallengePeakBattle_0015_ADF_2) || INVERT || Variables[1] (MDF_Layer) || MUL || RETURN",
                "displayLines": "(-ChallengePeakBattle_0015_ADF_2 * MDF_Layer)",
                "constants": [],
                "variables": [
                  "ChallengePeakBattle_0015_ADF_2",
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
                "value1": "MDF_Layer",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                "Modifier Deletes Itself"
              ]
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
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "type": "Memosprite"
                  },
                  {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}.[[getMemosprite]]"
                    }
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "MDF_Layer",
                  "multiplier": 1
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1480313555\">Modifier_ChallengePeakBattle_BaseAbility_0015_02</a>[<span class=\"descriptionNumberColor\">Honing the Blade</span>]",
                  "valuePerStack": {
                    "ChallengePeakBattle_0015_ADF_1": {
                      "operator": "Variables[0] (ChallengePeakBattle_0015_ADF_1) || RETURN",
                      "displayLines": "ChallengePeakBattle_0015_ADF_1",
                      "constants": [],
                      "variables": [
                        "ChallengePeakBattle_0015_ADF_1"
                      ]
                    },
                    "ChallengePeakBattle_0015_ADF_2": {
                      "operator": "Variables[0] (ChallengePeakBattle_0015_ADF_2) || RETURN",
                      "displayLines": "ChallengePeakBattle_0015_ADF_2",
                      "constants": [],
                      "variables": [
                        "ChallengePeakBattle_0015_ADF_2"
                      ]
                    }
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (MDF_Layer) || RETURN",
                    "displayLines": "MDF_Layer",
                    "constants": [],
                    "variables": [
                      "MDF_Layer"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Skill Point Changes",
          "execute": [
            {
              "name": "Define Custom Variable with SkillPoint Changes",
              "variableName": "MDF_BPCost"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "MDF_BPCost",
                    "compareType": "<",
                    "value2": 0
                  },
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_Layer",
                    "compareType": ">=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "Looped Event",
                  "maxLoops": {
                    "operator": "Variables[0] (MDF_BPCost) || INVERT || RETURN",
                    "displayLines": "-MDF_BPCost",
                    "constants": [],
                    "variables": [
                      "MDF_BPCost"
                    ]
                  },
                  "Event": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1480313555\">Modifier_ChallengePeakBattle_BaseAbility_0015_02</a>[<span class=\"descriptionNumberColor\">Honing the Blade</span>]",
                      "valuePerStack": {
                        "ChallengePeakBattle_0015_ADF_1": {
                          "operator": "Variables[0] (ChallengePeakBattle_0015_ADF_1) || RETURN",
                          "displayLines": "ChallengePeakBattle_0015_ADF_1",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0015_ADF_1"
                          ]
                        },
                        "ChallengePeakBattle_0015_ADF_2": {
                          "operator": "Variables[0] (ChallengePeakBattle_0015_ADF_2) || RETURN",
                          "displayLines": "ChallengePeakBattle_0015_ADF_2",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0015_ADF_2"
                          ]
                        }
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}.[[getMemosprite]]"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1480313555\">Modifier_ChallengePeakBattle_BaseAbility_0015_02</a>[<span class=\"descriptionNumberColor\">Honing the Blade</span>]",
                      "valuePerStack": {
                        "ChallengePeakBattle_0015_ADF_1": {
                          "operator": "Variables[0] (ChallengePeakBattle_0015_ADF_1) || RETURN",
                          "displayLines": "ChallengePeakBattle_0015_ADF_1",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0015_ADF_1"
                          ]
                        },
                        "ChallengePeakBattle_0015_ADF_2": {
                          "operator": "Variables[0] (ChallengePeakBattle_0015_ADF_2) || RETURN",
                          "displayLines": "ChallengePeakBattle_0015_ADF_2",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0015_ADF_2"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "description": "Each stack reduces CRIT DMG by <span class=\"descriptionNumberColor\">ChallengePeakBattle_0015_ADF_2</span>. Each time any ally consumes 1 Skill Point, 1 stack of this effect is removed.",
      "type": "Other",
      "statusName": "Honing the Blade",
      "addStacksPerTrigger": -1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-170245100\">Modifier_ChallengePeakBattle_BaseAbility_0015</a>",
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
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "type": "Character"
                  },
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
                  "modifier": "<a class=\"gModGreen\" id=\"1480313555\">Modifier_ChallengePeakBattle_BaseAbility_0015_02</a>[<span class=\"descriptionNumberColor\">Honing the Blade</span>]",
                  "valuePerStack": {
                    "ChallengePeakBattle_0015_ADF_1": {
                      "operator": "Variables[0] (#ADF_1) || RETURN",
                      "displayLines": "#ADF_1",
                      "constants": [],
                      "variables": [
                        "#ADF_1"
                      ]
                    },
                    "ChallengePeakBattle_0015_ADF_2": {
                      "operator": "Variables[0] (#ADF_2) || RETURN",
                      "displayLines": "#ADF_2",
                      "constants": [],
                      "variables": [
                        "#ADF_2"
                      ]
                    }
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (#ADF_1) || RETURN",
                    "displayLines": "#ADF_1",
                    "constants": [],
                    "variables": [
                      "#ADF_1"
                    ]
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