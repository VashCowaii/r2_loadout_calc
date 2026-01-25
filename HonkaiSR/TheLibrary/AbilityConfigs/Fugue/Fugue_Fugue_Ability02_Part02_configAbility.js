const configAbility = {
  "fileName": "Fugue_Fugue_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Fugue_BPAbilityBonusListen[<span class=\"descriptionNumberColor\">Torrid Scorch</span>]"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
      },
      "modifier": "Fugue_BPAbility[<span class=\"descriptionNumberColor\">Foxian Prayer</span>]"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
      },
      "modifier": "Fugue_BPAbility_Eidolon1[<span class=\"descriptionNumberColor\">Foxian Prayer</span>]"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
      },
      "modifier": "Fugue_BPAbility_Eidolon4[<span class=\"descriptionNumberColor\">Foxian Prayer</span>]"
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": 3,
      "maximum": 3,
      "assignState": "True",
      "priorState": "Active",
      "bar#": 3,
      "cooldown": 0
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Fugue_BPAbilityBonusListen[<span class=\"descriptionNumberColor\">Torrid Scorch</span>]",
      "duration": {
        "operator": "Variables[0] (3) || RETURN",
        "displayLines": "3",
        "constants": [],
        "variables": [
          3
        ]
      },
      "valuePerStack": {
        "MDF_Chance": {
          "operator": "Variables[0] (1) || RETURN",
          "displayLines": "1",
          "constants": [],
          "variables": [
            1
          ]
        },
        "MDF_DefenceDownRatio": {
          "operator": "Variables[0] (0.18) || RETURN",
          "displayLines": "0.18",
          "constants": [],
          "variables": [
            0.18
          ]
        },
        "MDF_LifeTime": {
          "operator": "Variables[0] (2) || RETURN",
          "displayLines": "2",
          "constants": [],
          "variables": [
            2
          ]
        }
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 6
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Fugue_Eidolon6_Listen"
        }
      ],
      "failed": [
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
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "Fugue_BPAbility_Eidolon4[<span class=\"descriptionNumberColor\">Foxian Prayer</span>]",
              "valuePerStack": {
                "MDF_BreakDamageAdd": {
                  "operator": "Variables[0] (0.3) || RETURN",
                  "displayLines": "0.3",
                  "constants": [],
                  "variables": [
                    0.3
                  ]
                },
                "MDF_StanceBreakAddRatio": {
                  "operator": "Variables[0] (0.5) || RETURN",
                  "displayLines": "0.5",
                  "constants": [],
                  "variables": [
                    0.5
                  ]
                },
                "MDF_Chance": {
                  "operator": "Variables[0] (1) || RETURN",
                  "displayLines": "1",
                  "constants": [],
                  "variables": [
                    1
                  ]
                },
                "MDF_DefenceDownRatio": {
                  "operator": "Variables[0] (0.18) || RETURN",
                  "displayLines": "0.18",
                  "constants": [],
                  "variables": [
                    0.18
                  ]
                },
                "MDF_BreakDamageAddedRatio": {
                  "operator": "Variables[0] (0.2) || RETURN",
                  "displayLines": "0.2",
                  "constants": [],
                  "variables": [
                    0.2
                  ]
                },
                "MDF_LifeTime": {
                  "operator": "Variables[0] (2) || RETURN",
                  "displayLines": "2",
                  "constants": [],
                  "variables": [
                    2
                  ]
                },
                "MDF_PropertyRatio": {
                  "operator": "Variables[0] (0.5) || RETURN",
                  "displayLines": "0.5",
                  "constants": [],
                  "variables": [
                    0.5
                  ]
                }
              }
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 1
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "modifier": "Fugue_BPAbility_Eidolon1[<span class=\"descriptionNumberColor\">Foxian Prayer</span>]",
                  "valuePerStack": {
                    "MDF_BreakDamageAdd": {
                      "operator": "Variables[0] (0.3) || RETURN",
                      "displayLines": "0.3",
                      "constants": [],
                      "variables": [
                        0.3
                      ]
                    },
                    "MDF_StanceBreakAddRatio": {
                      "operator": "Variables[0] (0.5) || RETURN",
                      "displayLines": "0.5",
                      "constants": [],
                      "variables": [
                        0.5
                      ]
                    },
                    "MDF_Chance": {
                      "operator": "Variables[0] (1) || RETURN",
                      "displayLines": "1",
                      "constants": [],
                      "variables": [
                        1
                      ]
                    },
                    "MDF_DefenceDownRatio": {
                      "operator": "Variables[0] (0.18) || RETURN",
                      "displayLines": "0.18",
                      "constants": [],
                      "variables": [
                        0.18
                      ]
                    },
                    "MDF_LifeTime": {
                      "operator": "Variables[0] (2) || RETURN",
                      "displayLines": "2",
                      "constants": [],
                      "variables": [
                        2
                      ]
                    },
                    "MDF_PropertyRatio": {
                      "operator": "Variables[0] (0.5) || RETURN",
                      "displayLines": "0.5",
                      "constants": [],
                      "variables": [
                        0.5
                      ]
                    }
                  }
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "modifier": "Fugue_BPAbility[<span class=\"descriptionNumberColor\">Foxian Prayer</span>]",
                  "valuePerStack": {
                    "MDF_BreakDamageAdd": {
                      "operator": "Variables[0] (0.3) || RETURN",
                      "displayLines": "0.3",
                      "constants": [],
                      "variables": [
                        0.3
                      ]
                    },
                    "MDF_Chance": {
                      "operator": "Variables[0] (1) || RETURN",
                      "displayLines": "1",
                      "constants": [],
                      "variables": [
                        1
                      ]
                    },
                    "MDF_DefenceDownRatio": {
                      "operator": "Variables[0] (0.18) || RETURN",
                      "displayLines": "0.18",
                      "constants": [],
                      "variables": [
                        0.18
                      ]
                    },
                    "MDF_LifeTime": {
                      "operator": "Variables[0] (2) || RETURN",
                      "displayLines": "2",
                      "constants": [],
                      "variables": [
                        2
                      ]
                    },
                    "MDF_PropertyRatio": {
                      "operator": "Variables[0] (0.5) || RETURN",
                      "displayLines": "0.5",
                      "constants": [],
                      "variables": [
                        0.5
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
      "name": "Update Energy",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "valuePercent": 1,
      "ofAbilitySplit": true,
      "isFixed": "* ERR"
    },
    "Trigger: Ability End"
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Fugue_BPAbility_Eidolon4[<span class=\"descriptionNumberColor\">Foxian Prayer</span>]",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "Unknow",
      "modifierFlags": [
        "RemoveWhenCasterDead",
        "ListenBattleEventSkill",
        "ForceStanceDamage"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 6
              },
              "failed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Fugue_BPAbilityBonusListen[<span class=\"descriptionNumberColor\">Torrid Scorch</span>]"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Break DMG"
                    ]
                  }
                ]
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakMulti</span>&nbsp;",
                      "value": "MDF_BreakDamageAddedRatio"
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
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakEfficiency</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_StanceBreakAddRatio) || RETURN",
                "displayLines": "MDF_StanceBreakAddRatio",
                "constants": [],
                "variables": [
                  "MDF_StanceBreakAddRatio"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_BreakDamageAdd) || RETURN",
                "displayLines": "MDF_BreakDamageAdd",
                "constants": [],
                "variables": [
                  "MDF_BreakDamageAdd"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessReductionForced%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyRatio) || RETURN",
                "displayLines": "MDF_PropertyRatio",
                "constants": [],
                "variables": [
                  "MDF_PropertyRatio"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_BreakDamageAdd",
        "MDF_StanceBreakAddRatio",
        "MDF_Chance",
        "MDF_DefenceDownRatio",
        "MDF_BreakDamageAddedRatio",
        "MDF_LifeTime",
        "MDF_PropertyRatio"
      ],
      "latentQueue": [],
      "description": "Break DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_BreakDamageAddedRatio</span>, Weakness Break Efficiency increases by <span class=\"descriptionNumberColor\">MDF_StanceBreakAddRatio</span>, and Break Effect increases by <span class=\"descriptionNumberColor\">MDF_BreakDamageAdd</span>. Can also reduce Toughness when attacking enemies that don't have the corresponding Weakness Type, with the effect equivalent to <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span> of the original Toughness Reduction value. This cannot stack with other Toughness Reduction effects that also ignore Weakness Type.",
      "type": "Buff",
      "effectName": "Foxian Prayer",
      "statusName": "Foxian Prayer"
    },
    {
      "name": "Modifier Construction",
      "for": "Fugue_BPAbility_Eidolon1[<span class=\"descriptionNumberColor\">Foxian Prayer</span>]",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "Unknow",
      "modifierFlags": [
        "RemoveWhenCasterDead",
        "ListenBattleEventSkill",
        "ForceStanceDamage"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Fugue_BPAbilityBonusListen[<span class=\"descriptionNumberColor\">Torrid Scorch</span>]"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakEfficiency</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_StanceBreakAddRatio) || RETURN",
                "displayLines": "MDF_StanceBreakAddRatio",
                "constants": [],
                "variables": [
                  "MDF_StanceBreakAddRatio"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_BreakDamageAdd) || RETURN",
                "displayLines": "MDF_BreakDamageAdd",
                "constants": [],
                "variables": [
                  "MDF_BreakDamageAdd"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessReductionForced%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyRatio) || RETURN",
                "displayLines": "MDF_PropertyRatio",
                "constants": [],
                "variables": [
                  "MDF_PropertyRatio"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_BreakDamageAdd",
        "MDF_StanceBreakAddRatio",
        "MDF_Chance",
        "MDF_DefenceDownRatio",
        "MDF_LifeTime",
        "MDF_PropertyRatio"
      ],
      "latentQueue": [],
      "description": "Weakness Break Efficiency increases by <span class=\"descriptionNumberColor\">MDF_StanceBreakAddRatio</span>. Break Effect increases by <span class=\"descriptionNumberColor\">MDF_BreakDamageAdd</span>. Can also reduce Toughness when attacking enemies that don't have the corresponding Weakness Type, with the effect equivalent to <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span> of the original Toughness Reduction value. This cannot stack with other Toughness Reduction effects that also ignore Weakness Type.",
      "type": "Buff",
      "effectName": "Foxian Prayer",
      "statusName": "Foxian Prayer"
    },
    {
      "name": "Modifier Construction",
      "for": "Fugue_BPAbility[<span class=\"descriptionNumberColor\">Foxian Prayer</span>]",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "Unknow",
      "modifierFlags": [
        "RemoveWhenCasterDead",
        "ListenBattleEventSkill",
        "ForceStanceDamage"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Fugue_BPAbilityBonusListen[<span class=\"descriptionNumberColor\">Torrid Scorch</span>]"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_BreakDamageAdd) || RETURN",
                "displayLines": "MDF_BreakDamageAdd",
                "constants": [],
                "variables": [
                  "MDF_BreakDamageAdd"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessReductionForced%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyRatio) || RETURN",
                "displayLines": "MDF_PropertyRatio",
                "constants": [],
                "variables": [
                  "MDF_PropertyRatio"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_BreakDamageAdd",
        "MDF_Chance",
        "MDF_DefenceDownRatio",
        "MDF_LifeTime",
        "MDF_PropertyRatio"
      ],
      "latentQueue": [],
      "description": "Break Effect increases by <span class=\"descriptionNumberColor\">MDF_BreakDamageAdd</span>. Can also reduce Toughness when attacking enemies that don't have the corresponding Weakness Type, with the effect equivalent to <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span> of the original Toughness Reduction value. This cannot stack with other Toughness Reduction effects that also ignore Weakness Type.",
      "type": "Buff",
      "effectName": "Foxian Prayer",
      "statusName": "Foxian Prayer"
    },
    {
      "name": "Modifier Construction",
      "for": "Fugue_BPAbilityBonusListen[<span class=\"descriptionNumberColor\">Torrid Scorch</span>]",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Update Displayed Energy Bar",
              "value": 0,
              "maximum": 3,
              "assignState": "True",
              "priorState": "Normal",
              "bar#": 3,
              "cooldown": 0
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
              },
              "modifier": "Fugue_BPAbility[<span class=\"descriptionNumberColor\">Foxian Prayer</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
              },
              "modifier": "Fugue_BPAbility_Eidolon1[<span class=\"descriptionNumberColor\">Foxian Prayer</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
              },
              "modifier": "Fugue_BPAbility_Eidolon4[<span class=\"descriptionNumberColor\">Foxian Prayer</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Fugue_Eidolon6_Listen"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "Fugue_Skill11_Flag",
              "value": 0
            },
            {
              "name": "Update Ability Binding",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "abilityName": "Skill01",
              "skillSlot": "Basic ATK"
            },
            {
              "name": "Update Ability Enhance Button",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "display": "Hide",
              "abilityName": "Basic ATK"
            }
          ]
        },
        {
          "eventTrigger": "Action Phase Start [Owner][?]",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "LifeTime",
              "variableName": "Skill02_EnergyBarCount",
              "modifierName": "Fugue_BPAbilityBonusListen[<span class=\"descriptionNumberColor\">Torrid Scorch</span>]",
              "multiplier": 1
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (Skill02_EnergyBarCount) || RETURN",
                "displayLines": "Skill02_EnergyBarCount",
                "constants": [],
                "variables": [
                  "Skill02_EnergyBarCount"
                ]
              },
              "maximum": 3,
              "assignState": "True",
              "priorState": "Active",
              "bar#": 3,
              "cooldown": 0
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Update Ability Binding",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "abilityName": "Skill11",
              "skillSlot": "Basic ATK"
            },
            {
              "name": "Update Ability Enhance Button",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "display": "Show",
              "abilityName": "Basic ATK"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "Fugue_Skill11_Flag",
              "value": 1
            }
          ]
        }
      ],
      "stackData": [
        "MDF_Chance",
        "MDF_DefenceDownRatio",
        "MDF_LifeTime"
      ],
      "latentQueue": [],
      "description": "The Basic ATK \"Radiant Streak\" is enhanced to \"Fiery Caress\" that can deal Blast DMG. Every time an ally target with \"Foxian Prayer\" attacks, Fugue has a <span class=\"descriptionNumberColor\">MDF_Chance</span> base chance to reduce the attacked enemy target's DEF by <span class=\"descriptionNumberColor\">MDF_DefenceDownRatio</span>, lasting for <span class=\"descriptionNumberColor\">MDF_LifeTime</span> turn(s).",
      "type": "Other",
      "statusName": "Torrid Scorch"
    }
  ]
}