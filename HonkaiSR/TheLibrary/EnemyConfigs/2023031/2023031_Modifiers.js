const configAbility = {
  "fileName": "2023031_Modifiers",
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
      "for": "Monster_XP_Elite02_02_RLElite_TryAddDirtyHP",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "flagName": "ImmuneDebuff"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Standard_BlackBlood[<span class=\"descriptionNumberColor\">Prana-Siphoned</span>]",
                  "duration": {
                    "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                    "displayLines": "{[Skill05[1]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill05[1]]}"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_DirtyHPRatio": 0.1
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Monster_XP_Elite02_02_RLElite_TryAddDirtyHP"
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
      "for": "Monster_XP_Elite02_02_RLElite_DirtyHPListener",
      "stackType": "Replace",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "MDF_CurrentDirtyHPRatio"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "MDF_MaxDirtyHPRatio",
              "value": {
                "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
                "displayLines": "{[SkillP01[0]]}",
                "constants": [],
                "variables": [
                  "{[SkillP01[0]]}"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "MDF_CurrentDirtyHPRatio",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPBlock%</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "MDF_CurrentDirtyHPRatio",
              "value": {
                "operator": "Variables[0] (MDF_DirtyHPAddedRatio) || RETURN",
                "displayLines": "MDF_DirtyHPAddedRatio",
                "constants": [],
                "variables": [
                  "MDF_DirtyHPAddedRatio"
                ]
              },
              "max": {
                "operator": "Variables[0] (MDF_MaxDirtyHPRatio) || RETURN",
                "displayLines": "MDF_MaxDirtyHPRatio",
                "constants": [],
                "variables": [
                  "MDF_MaxDirtyHPRatio"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "Standard_BlackBlood[<span class=\"descriptionNumberColor\">Prana-Siphoned</span>]"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "flagName": "ImmuneDebuff"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_CurrentDirtyHPRatio",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPBlock%</span>&nbsp;"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Standard_BlackBlood[<span class=\"descriptionNumberColor\">Prana-Siphoned</span>]",
                      "duration": {
                        "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                        "displayLines": "{[Skill05[1]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill05[1]]}"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_DirtyHPRatio": {
                          "operator": "Variables[0] (MDF_CurrentDirtyHPRatio) || RETURN",
                          "displayLines": "MDF_CurrentDirtyHPRatio",
                          "constants": [],
                          "variables": [
                            "MDF_CurrentDirtyHPRatio"
                          ]
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Standard_BlackBlood[<span class=\"descriptionNumberColor\">Prana-Siphoned</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Standard_BlackBlood[<span class=\"descriptionNumberColor\">Prana-Siphoned</span>]",
                      "duration": {
                        "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                        "displayLines": "{[Skill05[1]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill05[1]]}"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_DirtyHPRatio": {
                          "operator": "Variables[0] (MDF_CurrentDirtyHPRatio) || RETURN",
                          "displayLines": "MDF_CurrentDirtyHPRatio",
                          "constants": [],
                          "variables": [
                            "MDF_CurrentDirtyHPRatio"
                          ]
                        }
                      }
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Standard_BlackBlood[<span class=\"descriptionNumberColor\">Prana-Siphoned</span>]",
                  "duration": {
                    "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                    "displayLines": "{[Skill05[1]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill05[1]]}"
                    ]
                  },
                  "baseChance": {
                    "operator": "Variables[0] ({[Skill05[2]]}) || RETURN",
                    "displayLines": "{[Skill05[2]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill05[2]]}"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_DirtyHPRatio": {
                      "operator": "Variables[0] (MDF_CurrentDirtyHPRatio) || RETURN",
                      "displayLines": "MDF_CurrentDirtyHPRatio",
                      "constants": [],
                      "variables": [
                        "MDF_CurrentDirtyHPRatio"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked Start [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "Standard_BlackBlood[<span class=\"descriptionNumberColor\">Prana-Siphoned</span>]"
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 2023031,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "The Ascended (Bug)"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable with HP%",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_HPRatioBeforeAttacked"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked End [Owner] [ADV?]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "Standard_BlackBlood[<span class=\"descriptionNumberColor\">Prana-Siphoned</span>]"
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 2023031,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "The Ascended (Bug)"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable with HP%",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_HPRatioAfterAttacked"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_CurrentDirtyHPRatio",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPBlock%</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_CurrentDirtyHPRatio",
                  "value": {
                    "operator": "Variables[0] (MDF_HPRatioAfterAttacked) || Variables[1] (MDF_HPRatioBeforeAttacked) || SUB || RETURN",
                    "displayLines": "(MDF_HPRatioAfterAttacked - MDF_HPRatioBeforeAttacked)",
                    "constants": [],
                    "variables": [
                      "MDF_HPRatioAfterAttacked",
                      "MDF_HPRatioBeforeAttacked"
                    ]
                  },
                  "max": {
                    "operator": "Variables[0] (MDF_MaxDirtyHPRatio) || RETURN",
                    "displayLines": "MDF_MaxDirtyHPRatio",
                    "constants": [],
                    "variables": [
                      "MDF_MaxDirtyHPRatio"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "Monster_XP_Elite02_02_RLElite_TryAddDirtyHP"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Standard_BlackBlood[<span class=\"descriptionNumberColor\">Prana-Siphoned</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Standard_BlackBlood[<span class=\"descriptionNumberColor\">Prana-Siphoned</span>]",
                      "duration": {
                        "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                        "displayLines": "{[Skill05[1]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill05[1]]}"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_DirtyHPRatio": {
                          "operator": "Variables[0] (MDF_CurrentDirtyHPRatio) || RETURN",
                          "displayLines": "MDF_CurrentDirtyHPRatio",
                          "constants": [],
                          "variables": [
                            "MDF_CurrentDirtyHPRatio"
                          ]
                        }
                      }
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Monster_XP_Elite02_02_RLElite_TryAddDirtyHP"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Custom Event",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "MDF_DirtyHPAddFlag",
              "value": 1
            }
          ]
        }
      ],
      "stackData": [
        "MDF_DirtyHPAddedRatio"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_XP_Elite02_02_RLElite_ChargeEffect[<span class=\"descriptionNumberColor\">Japa</span>]",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            "Modifier Deletes Itself",
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Monster_XP_Elite02_02_RLElite_ChargeEffect[<span class=\"descriptionNumberColor\">Japa</span>]"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "AIFlag"
      ],
      "description": "Uses Black Prana's Snare on all targets during the next action.",
      "type": "Buff",
      "effectName": "Japa",
      "statusName": "Japa"
    }
  ],
  "references": []
}