const compositeAbilityObject = {
  "fullCharacterName": "Destiny's Threads Forewoven",
  "trimCharacterName": "DestinysThreadsForewoven",
  "abilityList": [
    "DestinysThreadsForewoven_Ability21039"
  ],
  "abilityObject": {
    "DestinysThreadsForewoven_Ability21039": {
      "fileName": "DestinysThreadsForewoven_Ability21039",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "LC_21039_Main"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "LC_21039_Sub[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Damage",
                  "value": {
                    "operator": "Variables[0] (0.007999999) || Variables[1] (_Layer) || MUL || RETURN",
                    "displayLines": "(0.007999999 * _Layer)",
                    "constants": [],
                    "variables": [
                      0.007999999,
                      "_Layer"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_Damage",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (0.32) || RETURN",
                      "displayLines": "0.32",
                      "constants": [],
                      "variables": [
                        0.32
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Damage",
                      "value": {
                        "operator": "Variables[0] (0.32) || RETURN",
                        "displayLines": "0.32",
                        "constants": [],
                        "variables": [
                          0.32
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_Damage) || RETURN",
                    "displayLines": "MDF_Damage",
                    "constants": [],
                    "variables": [
                      "MDF_Damage"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_Damage</span>.",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "DMG Boost"
        },
        {
          "name": "Modifier Construction",
          "for": "LC_21039_Main",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": "Owner of this Modifier",
                  "variableName": "MDF_Target_Defence",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">DEFSUM</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_Layer",
                  "value": {
                    "operator": "Variables[0] (WHOLE) || Variables[1] (MDF_Target_Defence) || Variables[2] (100) || DIV || PARAM_1 || FUNCTION || RETURN",
                    "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">WHOLE</span>((MDF_Target_Defence / 100))",
                    "constants": [],
                    "variables": [
                      "WHOLE",
                      "MDF_Target_Defence",
                      100
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster",
                  "modifier": "LC_21039_Sub[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                  "valuePerStack": {
                    "_Layer": {
                      "operator": "Variables[0] (_Layer) || RETURN",
                      "displayLines": "_Layer",
                      "constants": [],
                      "variables": [
                        "_Layer"
                      ]
                    }
                  }
                }
              ]
            }
          ],
          "abilityValueChange": [
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Changes",
                  "execute": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": "Owner of this Modifier",
                      "variableName": "MDF_Target_Defence",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">DEFSUM</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_Layer",
                      "value": {
                        "operator": "Variables[0] (WHOLE) || Variables[1] (MDF_Target_Defence) || Variables[2] (100) || DIV || PARAM_1 || FUNCTION || RETURN",
                        "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">WHOLE</span>((MDF_Target_Defence / 100))",
                        "constants": [],
                        "variables": [
                          "WHOLE",
                          "MDF_Target_Defence",
                          100
                        ]
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Caster",
                      "modifier": "LC_21039_Sub[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                      "valuePerStack": {
                        "_Layer": {
                          "operator": "Variables[0] (_Layer) || RETURN",
                          "displayLines": "_Layer",
                          "constants": [],
                          "variables": [
                            "_Layer"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">DEFFlat</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Changes",
                  "execute": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": "Owner of this Modifier",
                      "variableName": "MDF_Target_Defence",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">DEFSUM</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_Layer",
                      "value": {
                        "operator": "Variables[0] (WHOLE) || Variables[1] (MDF_Target_Defence) || Variables[2] (100) || DIV || PARAM_1 || FUNCTION || RETURN",
                        "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">WHOLE</span>((MDF_Target_Defence / 100))",
                        "constants": [],
                        "variables": [
                          "WHOLE",
                          "MDF_Target_Defence",
                          100
                        ]
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Caster",
                      "modifier": "LC_21039_Sub[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                      "valuePerStack": {
                        "_Layer": {
                          "operator": "Variables[0] (_Layer) || RETURN",
                          "displayLines": "_Layer",
                          "constants": [],
                          "variables": [
                            "_Layer"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">DEFConverted</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Changes",
                  "execute": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": "Owner of this Modifier",
                      "variableName": "MDF_Target_Defence",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">DEFSUM</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_Layer",
                      "value": {
                        "operator": "Variables[0] (WHOLE) || Variables[1] (MDF_Target_Defence) || Variables[2] (100) || DIV || PARAM_1 || FUNCTION || RETURN",
                        "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">WHOLE</span>((MDF_Target_Defence / 100))",
                        "constants": [],
                        "variables": [
                          "WHOLE",
                          "MDF_Target_Defence",
                          100
                        ]
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Caster",
                      "modifier": "LC_21039_Sub[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                      "valuePerStack": {
                        "_Layer": {
                          "operator": "Variables[0] (_Layer) || RETURN",
                          "displayLines": "_Layer",
                          "constants": [],
                          "variables": [
                            "_Layer"
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
      ],
      "isLightcone": true,
      "desc": "Increases the wearer's Effect RES by #1[i]%. For every #2[i] of DEF the wearer has, increases the wearer's DMG dealt by #3[f1]%, up to a maximum DMG increase of #4[i]%.",
      "params": [
        [
          0.12,
          100,
          0.007999999,
          0.32
        ],
        [
          0.14,
          100,
          0.009,
          0.36
        ],
        [
          0.16,
          100,
          0.01,
          0.4
        ],
        [
          0.18,
          100,
          0.011,
          0.44
        ],
        [
          0.2,
          100,
          0.012,
          0.48
        ]
      ]
    }
  },
  "isLightcone": true
}