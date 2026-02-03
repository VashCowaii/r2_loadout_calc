const configAbility = {
  "fileName": "8013144_Modifiers",
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
      "for": "AML_Boss_BattleScore1",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "Pre-Death [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{All Team Members(Exclude Self)}}"
                },
                "value1": "TeamCharacterCount",
                "compareType": "=",
                "value2": 2
              },
              "passed": [
                {
                  "name": "Achievement",
                  "matchTags": true,
                  "relatedAchievements": [
                    {
                      "title": "Hit It Where It Hurts Most",
                      "desc": "Defeat the Antimatter Engine without defeating either of the Doomsday Beast's hands in Echo of War",
                      "rarity": "Low"
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Target Part 0}}"
                    },
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 2
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "AML_Boss_00_BattleScore2_Flag",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Achievement",
                  "matchTags": true,
                  "relatedAchievements": [
                    {
                      "title": "Cataclysm Disruptor",
                      "desc": "Prevent the Doomsday Beast from using Impending Doom in Echo of War",
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
      "for": "Enemy_W0_Boss_Part2_Ability11_Modifier",
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
              "modifier": "Monster_APShow"
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Target Part 0}}"
                },
                "value1": "_Part1_Alive",
                "compareType": "=",
                "value2": 1,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Target Part 1}}"
                  },
                  "modifier": "Enemy_W0_Boss_Charge_DisableAction"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Target Part 0}}"
                },
                "value1": "_Part3_Alive",
                "compareType": "=",
                "value2": 1,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Target Part 3}}"
                  },
                  "modifier": "Enemy_W0_Boss_Charge_DisableAction"
                }
              ]
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Monster_APShow"
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_AttackAddedRatio) || RETURN",
                "displayLines": "MDF_AttackAddedRatio",
                "constants": [],
                "variables": [
                  "MDF_AttackAddedRatio"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Target Part 0}}"
                },
                "value1": "_Part1_Alive",
                "compareType": "=",
                "value2": 1,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Target Part 1}}"
                  },
                  "modifier": "Enemy_W0_Boss_Charge_DisableAction"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Target Part 0}}"
                },
                "value1": "_Part3_Alive",
                "compareType": "=",
                "value2": 1,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Target Part 3}}"
                  },
                  "modifier": "Enemy_W0_Boss_Charge_DisableAction"
                }
              ]
            },
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "phase": "Phase2"
            }
          ]
        },
        {
          "eventTrigger": "Entity Death [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Enemy_W0_Boss_Part2_Ability11_Modifier"
              }
            }
          ]
        }
      ],
      "useEntitySnapshot": true,
      "stackData": [
        "MDF_AttackAddedRatio"
      ],
      "latentQueue": [
        "AML_Boss_00_BattleScore2_Flag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_W0_Boss_Charge_DisableAction",
      "modifierFlags": [
        "DisableAction"
      ],
      "stackData": [],
      "latentQueue": [
        "AML_Boss_00_BattleScore2_Flag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_W0_Boss_Part2_AttackUp_Ability08_Frensnel",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ],
      "useEntitySnapshot": true,
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_W0_Boss_Part2_AttackUp_Ability08_Effect",
      "modifierFlags": [
        "ListenBattleEventSkill"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        },
        {
          "eventTrigger": "Ability Use [Anyone]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Name",
                "skillName": "Skill10"
              }
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Anyone]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Name",
                "skillName": "Skill10"
              }
            }
          ]
        }
      ],
      "useEntitySnapshot": true,
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_W0_Boss_Part2_AttackUp_Ability07_Frensnel",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ],
      "useEntitySnapshot": true,
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_W0_Boss_Part2_AttackUp_Ability07_Effect",
      "modifierFlags": [
        "ListenBattleEventSkill"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        },
        {
          "eventTrigger": "Ability Use [Anyone]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Name",
                "skillName": "Skill10"
              }
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Anyone]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Name",
                "skillName": "Skill10"
              }
            }
          ]
        }
      ],
      "useEntitySnapshot": true,
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_W0_Boss_Part2_AttackUp[<span class=\"descriptionNumberColor\">Amplification</span>]",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Enemy_W0_Boss_Part2_AttackUp_Ability07_Effect"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Enemy_W0_Boss_Part2_AttackUp_Ability07_Frensnel"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Enemy_W0_Boss_Part2_AttackUp_Ability08_Effect"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Enemy_W0_Boss_Part2_AttackUp_Ability08_Frensnel"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Enemy_Monster_AML_Boss_Part2_Ability07"
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_AttackAddedRatio) || RETURN",
                "displayLines": "MDF_AttackAddedRatio",
                "constants": [],
                "variables": [
                  "MDF_AttackAddedRatio"
                ]
              }
            }
          ]
        }
      ],
      "useEntitySnapshot": true,
      "stackData": [
        "MDF_AttackAddedRatio"
      ],
      "latentQueue": [],
      "description": "ATK +<span class=\"descriptionNumberColor\">MDF_AttackAddedRatio</span>. Abilities are enhanced.",
      "type": "Buff",
      "effectName": "Amplification",
      "statusName": "Amplification"
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_WMonster_W0_Boss_Part_Passive_WeakPhysical",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Modify Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "valueList": [
                "Physical"
              ]
            },
            {
              "name": "Stack Element Resistance",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "resistArray": [
                {
                  "element": "Physical",
                  "value": 0
                },
                {
                  "element": "Fire",
                  "value": 0
                },
                {
                  "element": "Ice",
                  "value": 0
                },
                {
                  "element": "Thunder",
                  "value": 0
                },
                {
                  "element": "Wind",
                  "value": 0
                },
                {
                  "element": "Quantum",
                  "value": 0
                },
                {
                  "element": "Imaginary",
                  "value": 0
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_WMonster_W0_Boss_Part_Passive_WeakWind",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Modify Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "valueList": [
                "Wind"
              ]
            },
            {
              "name": "Stack Element Resistance",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "resistArray": [
                {
                  "element": "Physical",
                  "value": 0
                },
                {
                  "element": "Fire",
                  "value": 0
                },
                {
                  "element": "Ice",
                  "value": 0
                },
                {
                  "element": "Thunder",
                  "value": 0
                },
                {
                  "element": "Wind",
                  "value": 0
                },
                {
                  "element": "Quantum",
                  "value": 0
                },
                {
                  "element": "Imaginary",
                  "value": 0
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_WMonster_W0_Boss_Part_Passive_WeakFire",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Modify Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "valueList": [
                "Fire"
              ]
            },
            {
              "name": "Stack Element Resistance",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "resistArray": [
                {
                  "element": "Physical",
                  "value": 0
                },
                {
                  "element": "Fire",
                  "value": 0
                },
                {
                  "element": "Ice",
                  "value": 0
                },
                {
                  "element": "Thunder",
                  "value": 0
                },
                {
                  "element": "Wind",
                  "value": 0
                },
                {
                  "element": "Quantum",
                  "value": 0
                },
                {
                  "element": "Imaginary",
                  "value": 0
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_WMonster_W0_Boss_Part_Passive_WeakIce",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Modify Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "valueList": [
                "Ice"
              ]
            },
            {
              "name": "Stack Element Resistance",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "resistArray": [
                {
                  "element": "Physical",
                  "value": 0
                },
                {
                  "element": "Fire",
                  "value": 0
                },
                {
                  "element": "Ice",
                  "value": 0
                },
                {
                  "element": "Thunder",
                  "value": 0
                },
                {
                  "element": "Wind",
                  "value": 0
                },
                {
                  "element": "Quantum",
                  "value": 0
                },
                {
                  "element": "Imaginary",
                  "value": 0
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_Monster_AML_Boss_Part2_Ability07",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Exit Broken-State",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              }
            }
          ]
        }
      ],
      "useEntitySnapshot": true,
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_W0_Boss_Part2_OnPhase3SpeedUp[<span class=\"descriptionNumberColor\">Burst</span>]",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_SpeedAddedRatio) || RETURN",
                "displayLines": "MDF_SpeedAddedRatio",
                "constants": [],
                "variables": [
                  "MDF_SpeedAddedRatio"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_SpeedAddedRatio"
      ],
      "latentQueue": [],
      "description": "Speed increased.",
      "type": "Buff",
      "effectName": "SPD Boost",
      "statusName": "Burst"
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_AML_Boss_Part2_Ability11_ListenSelfDieModifier",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "When Put in Deathstate Limbo",
          "execute": [
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Target Part 0}}"
              },
              "phase": "Phase0"
            },
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Target Part 1}}"
              },
              "phase": "Phase0"
            },
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Target Part 3}}"
              },
              "phase": "Phase0"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "AML_Boss_00_BattleScore2_Flag"
      ]
    }
  ],
  "references": []
}