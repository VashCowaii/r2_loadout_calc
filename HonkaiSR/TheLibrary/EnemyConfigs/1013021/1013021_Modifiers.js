const configAbility = {
  "fileName": "1013021_Modifiers",
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
      "for": "W1_Mecha02_AttackBonus_Effect",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "W1_Mecha02_AttackBonus[<span class=\"descriptionNumberColor\">Charging</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "W1_Mecha02_AttackBonus_Effect"
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Monster_W1_Mecha03_RL_Revenge[<span class=\"descriptionNumberColor\">Obliteration Order</span>]"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "Buff_ModifierLayers",
              "multiplier": 1
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_PropertyValue",
              "value": {
                "operator": "Variables[0] (ModifierDamageUpValue) || Variables[1] (Buff_ModifierLayers) || MUL || RETURN",
                "displayLines": "(ModifierDamageUpValue * Buff_ModifierLayers)",
                "constants": [],
                "variables": [
                  "ModifierDamageUpValue",
                  "Buff_ModifierLayers"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                "displayLines": "MDF_PropertyValue",
                "constants": [],
                "variables": [
                  "MDF_PropertyValue"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "W1_Mecha02_AttackBonus_Effect"
            },
            "Modifier Deletes Itself"
          ]
        }
      ],
      "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">ModifierDamageUpValue</span>.",
      "type": "Buff",
      "effectName": "Charging",
      "statusName": "Charging",
      "duration": 1,
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "Sign_W1_Mecha02[<span class=\"descriptionNumberColor\">Lock On</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "RemoveWhenCasterDead",
        "AttackSign"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "%CasterName will focus attacks on this target.",
      "type": "Other",
      "effectName": "Lock On",
      "statusName": "Lock On"
    },
    {
      "name": "Modifier Construction",
      "for": "W1_Mecha02_ThunderDOT[<span class=\"descriptionNumberColor\">Bleed</span>]",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "modifierFlags": [
        "STAT_DOT",
        "STAT_DOT_Bleed"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "valueType": "Layer",
              "variableName": "Modifier_Layer",
              "multiplier": 1
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "Owner_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "AttackScaling": {
                "DamageType": "Physical",
                "DamageFlat": {
                  "operator": "Variables[0] (Owner_MaxHP) || Variables[1] (Modifier_Bleed_DamagePercentage) || MUL || Variables[2] (Modifier_Layer) || MUL || RETURN",
                  "displayLines": "((Owner_MaxHP * Modifier_Bleed_DamagePercentage) * Modifier_Layer)",
                  "constants": [],
                  "variables": [
                    "Owner_MaxHP",
                    "Modifier_Bleed_DamagePercentage",
                    "Modifier_Layer"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "DOT"
              }
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        },
        {
          "eventTrigger": "Custom Event",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "valueType": "Layer",
              "variableName": "Modifier_Layer",
              "multiplier": 1
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "Owner_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "AttackScaling": {
                "DamageType": "Physical",
                "DamageFlat": {
                  "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (Owner_MaxHP) || MUL || Variables[2] (Modifier_Bleed_DamagePercentage) || MUL || Variables[3] (Modifier_Layer) || MUL || RETURN",
                  "displayLines": "(((DOT_TriggerRatio * Owner_MaxHP) * Modifier_Bleed_DamagePercentage) * Modifier_Layer)",
                  "constants": [],
                  "variables": [
                    "DOT_TriggerRatio",
                    "Owner_MaxHP",
                    "Modifier_Bleed_DamagePercentage",
                    "Modifier_Layer"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "DOT"
              }
            }
          ]
        }
      ],
      "useEntitySnapshot": true,
      "stackData": [
        "Modifier_Bleed_DamagePercentage",
        "MDF_MaxLayer"
      ],
      "latentQueue": [
        "Mecha04_BattleScore2_Flag",
        "Monster_W1_Mecha04_00_InsertFlag",
        "Mecha04_EnemySelector"
      ],
      "description": "For a certain number of turns, receive Physical DMG based on Max HP at the beginning of each turn, stacking up to <span class=\"descriptionNumberColor\">MDF_MaxLayer</span> time(s).",
      "type": "Debuff",
      "effectName": "Bleed",
      "statusName": "Bleed",
      "duration": 3,
      "stackLimit": 5,
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_Mecha04_BattleScore1",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "Mecha04_BattleScore2_Flag"
            }
          ]
        },
        {
          "eventTrigger": "Pre-Death [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Mecha04_BattleScore2_Flag",
                "compareType": "=",
                "value2": 0,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Achievement",
                  "matchTags": true,
                  "relatedAchievements": [
                    {
                      "title": "The Limping Lupine",
                      "desc": "Defeat Automaton Direwolf without triggering Felling Order",
                      "rarity": "Low"
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
      "for": "Enemy_W1_Mecha04_ChainSawSpeedUpAgain",
      "execute": [
        {
          "eventTrigger": "Ability Use [Owner]: Start",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Enemy_W1_Mecha04_ChainSawSpeedUp"
            },
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "Monster_W1_Mecha04_00_InsertFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_W1_Mecha04_ChainSawSpeedUp",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "phase": "PhaseSpeedUp"
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "phase": "PhaseSpeedUp"
            }
          ]
        },
        {
          "eventTrigger": "When Modifier is Added [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "flagName": "STAT_Confine"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "flagName": "Break"
                  }
                ]
              },
              "passed": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "Monster_W1_Mecha04_00_InsertFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W1_Mecha04_RemoveAim",
      "execute": [
        {
          "eventTrigger": "Turn [Action-End Phase]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "Monster_W1_Mecha04_Sign01[<span class=\"descriptionNumberColor\">Lock On</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "Monster_W1_Mecha04_Sign02[<span class=\"descriptionNumberColor\">Lock On</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Enemy_W1_Mecha04_ChainSawSpeedUp"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "WMonster_W1_Mecha_02_AIFlag_P2",
              "value": 2
            },
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "Mecha04_BattleScore2_Flag",
        "Monster_W1_Mecha04_00_InsertFlag",
        "Mecha04_EnemySelector",
        "Mecha04_AttackCount"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W1_Mecha04_Sign02[<span class=\"descriptionNumberColor\">Lock On</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "RemoveWhenCasterDead",
        "AttackSign"
      ],
      "stackData": [],
      "latentQueue": [
        "Mecha04_Aim_Flag"
      ],
      "description": "%CasterName will focus attacks on this target.",
      "type": "Other",
      "effectName": "Lock On",
      "statusName": "Lock On"
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W1_Mecha04_Sign01[<span class=\"descriptionNumberColor\">Lock On</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "RemoveWhenCasterDead",
        "AttackSign"
      ],
      "stackData": [],
      "latentQueue": [
        "Mecha04_Aim_Flag"
      ],
      "description": "%CasterName will focus attacks on this target.",
      "type": "Other",
      "effectName": "Lock On",
      "statusName": "Lock On"
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W1_Mecha04_RemoveOneMore",
      "execute": [
        {
          "eventTrigger": "Action End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "WMonster_W1_Mecha_02_AIFlag_P2",
                    "compareType": "=",
                    "value2": 3,
                    "contextScope": "TargetEntity"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "Monster_W1_Mecha04_00_InsertFlag",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
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
                  "modifier": "OneMorePerTurn"
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "OneMorePerTurn"
                  },
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "OneMorePerTurn"
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
    }
  ],
  "references": []
}