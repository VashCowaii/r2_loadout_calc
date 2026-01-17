const configAbility = {
  "fileName": "ReforgedRemembrance_Ability23022",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "LC_23022_Main"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "LC_23022_ElectricFlag"
    },
    {
      "name": "Modifier Construction",
      "for": "LC_23022_BurnFlag"
    },
    {
      "name": "Modifier Construction",
      "for": "LC_23022_BleedFlag"
    },
    {
      "name": "Modifier Construction",
      "for": "LC_23022_PoisonFlag"
    },
    {
      "name": "Modifier Construction",
      "for": "LC_23022_Sub[<span class=\"descriptionNumberColor\">Prophet</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Attack Type",
                "attackTypes": [
                  "DOT"
                ]
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Defender",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                      "value": "-(MDF_PropertyValue2 * _layer)"
                    }
                  ]
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
              "variableName": "_layer",
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
                "operator": "Variables[0] (MDF_PropertyValue1) || Variables[1] (_layer) || MUL || RETURN",
                "displayLines": "(MDF_PropertyValue1 * _layer)",
                "constants": [],
                "variables": [
                  "MDF_PropertyValue1",
                  "_layer"
                ]
              }
            }
          ]
        }
      ],
      "description": "Each stack increases ATK by <span class=\"descriptionNumberColor\">MDF_PropertyValue1</span> and DoT dealt ignores <span class=\"descriptionNumberColor\">MDF_PropertyValue2</span> of the target's DEF, stacking up to <span class=\"descriptionNumberColor\">MDF_MaxLayer</span> time(s).",
      "type": "Buff",
      "effectName": "ATK Boost",
      "statusName": "Prophet",
      "stackLimit": 4
    },
    {
      "name": "Modifier Construction",
      "for": "LC_23022_Main",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
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
                      "target": "{{Ability Target TAKING DMG}}"
                    },
                    "flagName": "STAT_DOT_Poison"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "LC_23022_PoisonFlag",
                    "invertCondition": true,
                    "justAddedOrActive": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "LC_23022_PoisonFlag"
                },
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                      "value": "0.05"
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "LC_23022_Sub[<span class=\"descriptionNumberColor\">Prophet</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (4) || RETURN",
                    "displayLines": "4",
                    "constants": [],
                    "variables": [
                      4
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue1": {
                      "operator": "Variables[0] (0.05) || RETURN",
                      "displayLines": "0.05",
                      "constants": [],
                      "variables": [
                        0.05
                      ]
                    },
                    "MDF_PropertyValue2": {
                      "operator": "Variables[0] (0.072) || RETURN",
                      "displayLines": "0.072",
                      "constants": [],
                      "variables": [
                        0.072
                      ]
                    },
                    "MDF_MaxLayer": {
                      "operator": "Variables[0] (4) || RETURN",
                      "displayLines": "4",
                      "constants": [],
                      "variables": [
                        4
                      ]
                    }
                  },
                  "addStacksPerTrigger": 1
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Ability Target TAKING DMG}}"
                    },
                    "flagName": "STAT_DOT_Bleed"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "LC_23022_BleedFlag",
                    "invertCondition": true,
                    "justAddedOrActive": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "LC_23022_BleedFlag"
                },
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                      "value": "0.05"
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "LC_23022_Sub[<span class=\"descriptionNumberColor\">Prophet</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (4) || RETURN",
                    "displayLines": "4",
                    "constants": [],
                    "variables": [
                      4
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue1": {
                      "operator": "Variables[0] (0.05) || RETURN",
                      "displayLines": "0.05",
                      "constants": [],
                      "variables": [
                        0.05
                      ]
                    },
                    "MDF_PropertyValue2": {
                      "operator": "Variables[0] (0.072) || RETURN",
                      "displayLines": "0.072",
                      "constants": [],
                      "variables": [
                        0.072
                      ]
                    },
                    "MDF_MaxLayer": {
                      "operator": "Variables[0] (4) || RETURN",
                      "displayLines": "4",
                      "constants": [],
                      "variables": [
                        4
                      ]
                    }
                  },
                  "addStacksPerTrigger": 1
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Ability Target TAKING DMG}}"
                    },
                    "flagName": "STAT_DOT_Burn"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "LC_23022_BurnFlag",
                    "invertCondition": true,
                    "justAddedOrActive": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "LC_23022_BurnFlag"
                },
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                      "value": "0.05"
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "LC_23022_Sub[<span class=\"descriptionNumberColor\">Prophet</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (4) || RETURN",
                    "displayLines": "4",
                    "constants": [],
                    "variables": [
                      4
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue1": {
                      "operator": "Variables[0] (0.05) || RETURN",
                      "displayLines": "0.05",
                      "constants": [],
                      "variables": [
                        0.05
                      ]
                    },
                    "MDF_PropertyValue2": {
                      "operator": "Variables[0] (0.072) || RETURN",
                      "displayLines": "0.072",
                      "constants": [],
                      "variables": [
                        0.072
                      ]
                    },
                    "MDF_MaxLayer": {
                      "operator": "Variables[0] (4) || RETURN",
                      "displayLines": "4",
                      "constants": [],
                      "variables": [
                        4
                      ]
                    }
                  },
                  "addStacksPerTrigger": 1
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Ability Target TAKING DMG}}"
                    },
                    "flagName": "STAT_DOT_Electric"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "LC_23022_ElectricFlag",
                    "invertCondition": true,
                    "justAddedOrActive": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "LC_23022_ElectricFlag"
                },
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                      "value": "0.05"
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "LC_23022_Sub[<span class=\"descriptionNumberColor\">Prophet</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (4) || RETURN",
                    "displayLines": "4",
                    "constants": [],
                    "variables": [
                      4
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue1": {
                      "operator": "Variables[0] (0.05) || RETURN",
                      "displayLines": "0.05",
                      "constants": [],
                      "variables": [
                        0.05
                      ]
                    },
                    "MDF_PropertyValue2": {
                      "operator": "Variables[0] (0.072) || RETURN",
                      "displayLines": "0.072",
                      "constants": [],
                      "variables": [
                        0.072
                      ]
                    },
                    "MDF_MaxLayer": {
                      "operator": "Variables[0] (4) || RETURN",
                      "displayLines": "4",
                      "constants": [],
                      "variables": [
                        4
                      ]
                    }
                  },
                  "addStacksPerTrigger": 1
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
  "isLightcone": true,
  "desc": "Increases the wearer's Effect Hit Rate by #1[i]%. When the wearer deals DMG to an enemy inflicted with Wind Shear, Burn, Shock, or Bleed, each respectively grants 1 stack of Prophet, stacking up to #4[i] time(s). In a single battle, only 1 stack of Prophet can be granted for each type of DoT. Every stack of Prophet increases wearer's ATK by #2[i]% and enables the DoT dealt to ignore #3[f1]% of the target's DEF.",
  "params": [
    [
      0.4,
      0.05,
      0.072,
      4
    ],
    [
      0.45,
      0.06,
      0.078999996,
      4
    ],
    [
      0.5,
      0.07,
      0.086,
      4
    ],
    [
      0.55,
      0.08,
      0.093,
      4
    ],
    [
      0.6,
      0.09,
      0.1,
      4
    ]
  ]
}