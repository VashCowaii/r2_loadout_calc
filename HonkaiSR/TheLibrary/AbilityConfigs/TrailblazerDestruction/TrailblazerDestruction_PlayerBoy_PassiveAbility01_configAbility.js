const configAbility = {
  "fileName": "TrailblazerDestruction_PlayerBoy_PassiveAbility01",
  "childAbilityList": [
    "TrailblazerDestruction_PlayerBoy_PassiveAbility01"
  ],
  "skillTrigger": "SkillP01",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "M_Player_PassiveAbility"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 4
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "PlayerBoy_Eidolon4_Break_Check"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 2
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "PlayerBoy_Eidolon2_Heal_Check"
        }
      ]
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "PlayerWarrior_SkilTree02_BreakDefUp[<span class=\"descriptionNumberColor\">Tenacity</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_DefenceAddedRatio) || Variables[1] (MDF_Layer) || MUL || RETURN",
                "displayLines": "(MDF_DefenceAddedRatio * MDF_Layer)",
                "constants": [],
                "variables": [
                  "MDF_DefenceAddedRatio",
                  "MDF_Layer"
                ]
              }
            }
          ]
        }
      ],
      "description": "Each stack increases DEF by <span class=\"descriptionNumberColor\">MDF_DefenceAddedRatio</span>, up to <span class=\"descriptionNumberColor\">MDF_Max_Layer</span> stack(s).",
      "type": "Buff",
      "effectName": "DEF Boost",
      "statusName": "Tenacity",
      "stackLimit": 3,
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "PlayerWarrior_Passive_BreakAtkUp[<span class=\"descriptionNumberColor\">Perfect Pickoff</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_AttackAddedRatio) || Variables[1] (MDF_Layer) || MUL || RETURN",
                "displayLines": "(MDF_AttackAddedRatio * MDF_Layer)",
                "constants": [],
                "variables": [
                  "MDF_AttackAddedRatio",
                  "MDF_Layer"
                ]
              }
            }
          ]
        }
      ],
      "description": "Each stack increases ATK by <span class=\"descriptionNumberColor\">MDF_AttackAddedRatio</span>, up to <span class=\"descriptionNumberColor\">MDF_Max_Layer</span> stack(s).",
      "type": "Buff",
      "effectName": "ATK Boost",
      "statusName": "Perfect Pickoff",
      "stackLimit": 3,
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "M_Player_PassiveAbility",
      "execute": [
        {
          "eventTrigger": "Got a Kill [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 6
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Max_Layer",
                  "value": {
                    "operator": "Variables[0] (2) || Variables[1] (MDF_Max_Layer) || ADD || RETURN",
                    "displayLines": "(2 + MDF_Max_Layer)",
                    "constants": [],
                    "variables": [
                      2,
                      "MDF_Max_Layer"
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "PlayerWarrior_Passive_BreakAtkUp[<span class=\"descriptionNumberColor\">Perfect Pickoff</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (2) || Variables[1] (MDF_Max_Layer) || ADD || RETURN",
                    "displayLines": "(2 + MDF_Max_Layer)",
                    "constants": [],
                    "variables": [
                      2,
                      "MDF_Max_Layer"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_AttackAddedRatio": {
                      "operator": "Variables[0] (0.2) || RETURN",
                      "displayLines": "0.2",
                      "constants": [],
                      "variables": [
                        0.2
                      ]
                    }
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Tenacity"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "PlayerWarrior_SkilTree02_BreakDefUp[<span class=\"descriptionNumberColor\">Tenacity</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (2) || Variables[1] (MDF_Max_Layer) || ADD || RETURN",
                        "displayLines": "(2 + MDF_Max_Layer)",
                        "constants": [],
                        "variables": [
                          2,
                          "MDF_Max_Layer"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_DefenceAddedRatio": {
                          "operator": "Variables[0] (0.1) || RETURN",
                          "displayLines": "0.1",
                          "constants": [],
                          "variables": [
                            0.1
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Caused Weakness Break [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_Max_Layer",
              "value": {
                "operator": "Variables[0] (2) || Variables[1] (MDF_Max_Layer) || ADD || RETURN",
                "displayLines": "(2 + MDF_Max_Layer)",
                "constants": [],
                "variables": [
                  2,
                  "MDF_Max_Layer"
                ]
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "PlayerWarrior_Passive_BreakAtkUp[<span class=\"descriptionNumberColor\">Perfect Pickoff</span>]",
              "stackLimit": {
                "operator": "Variables[0] (2) || Variables[1] (MDF_Max_Layer) || ADD || RETURN",
                "displayLines": "(2 + MDF_Max_Layer)",
                "constants": [],
                "variables": [
                  2,
                  "MDF_Max_Layer"
                ]
              },
              "valuePerStack": {
                "MDF_AttackAddedRatio": {
                  "operator": "Variables[0] (0.2) || RETURN",
                  "displayLines": "0.2",
                  "constants": [],
                  "variables": [
                    0.2
                  ]
                }
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Trace Activated",
                "conditionList": "Tenacity"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "PlayerWarrior_SkilTree02_BreakDefUp[<span class=\"descriptionNumberColor\">Tenacity</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (2) || Variables[1] (MDF_Max_Layer) || ADD || RETURN",
                    "displayLines": "(2 + MDF_Max_Layer)",
                    "constants": [],
                    "variables": [
                      2,
                      "MDF_Max_Layer"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_DefenceAddedRatio": {
                      "operator": "Variables[0] (0.1) || RETURN",
                      "displayLines": "0.1",
                      "constants": [],
                      "variables": [
                        0.1
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
    },
    {
      "name": "Modifier Construction",
      "for": "PlayerBoy_Eidolon4_Break_Check",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target TAKING DMG}}"
                },
                "flagName": "Break"
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateSUM</span>&nbsp;",
                      "value": "0.25"
                    }
                  ]
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
      "for": "PlayerBoy_Eidolon2_Heal_Check",
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
                    "name": "Has Weakness",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "DamageType": "Physical"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "IsAttack",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "HitPhy",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Attack Start [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "HitPhy",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "IsAttack",
              "value": 1
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "HitPhy",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Heal",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "healPercent": {
                    "operator": "Variables[0] (0.05) || RETURN",
                    "displayLines": "0.05",
                    "constants": [],
                    "variables": [
                      0.05
                    ]
                  }
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "variableName": "HitPhy",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "IsAttack",
              "value": 0
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}