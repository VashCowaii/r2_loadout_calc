const configAbility = {
  "fileName": "Herta_Herta_PassiveAtkReady_Ability",
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
      "modifier": "<a class=\"gModGreen\" id=\"1076207439\">Herta_Passive_Flag</a>"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Herta_Count_Insert",
      "value": 0
    },
    {
      "name": "UI Display Event",
      "popUpText": "Fine, I'll Do It Myself"
    },
    "Deleted bullshit",
    "Deleted bullshit",
    {
      "name": "Looped Event",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Compare: Variable",
            "value1": "Herta_Count",
            "compareType": ">",
            "value2": 0
          },
          {
            "name": "Enemies Still Alive",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            }
          }
        ]
      },
      "Event": [
        {
          "name": "Define Custom Variable",
          "variableName": "Herta_Count",
          "value": {
            "operator": "Variables[0] (Herta_Count) || Constants[0] (1) || SUB || RETURN",
            "displayLines": "(Herta_Count - 1)",
            "constants": [
              1
            ],
            "variables": [
              "Herta_Count"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Scoring_Herta_Count",
          "value": {
            "operator": "Variables[0] (Scoring_Herta_Count) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "(Scoring_Herta_Count + 1)",
            "constants": [
              1
            ],
            "variables": [
              "Scoring_Herta_Count"
            ]
          }
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
              "modifier": "<a class=\"gModGreen\" id=\"1736222640\">Herta_AbilityEidolon2_CriticalChance</a>[<span class=\"descriptionNumberColor\">CRIT Rate Boost</span>]",
              "stackLimit": {
                "operator": "Variables[0] (5) || RETURN",
                "displayLines": "5",
                "constants": [],
                "variables": [
                  5
                ]
              },
              "valuePerStack": {
                "MDF_CriticalChance": {
                  "operator": "Variables[0] (0.03) || RETURN",
                  "displayLines": "0.03",
                  "constants": [],
                  "variables": [
                    0.03
                  ]
                }
              }
            }
          ]
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
              "modifier": "<a class=\"gModGreen\" id=\"1482818607\">Herta_AbilityEidolon4_DamageUp</a>",
              "valuePerStack": {
                "AbilityRank_Eidolon4_P1_DamagePercentage": {
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
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] (0.4) || RETURN",
              "displayLines": "0.4",
              "constants": [],
              "variables": [
                0.4
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (AOE Toughness Value) || RETURN",
              "displayLines": "AOE Toughness Value",
              "constants": [],
              "variables": [
                "AOE Toughness Value"
              ]
            },
            "Tags": null,
            "attackType": "Follow-up",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "NOT",
            "condition": {
              "name": "Enemies Still Alive",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              }
            }
          },
          "passed": [
            "Trigger: Attack End",
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1482818607\">Herta_AbilityEidolon4_DamageUp</a>"
            },
            "Deleted bullshit",
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "Herta_Count"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "Scoring_Herta_Count",
              "value": 0
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "Herta_Count_ATK"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-256958111\">Herta_Passive_ATK</a>"
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "Herta_Count",
                    "compareType": "=",
                    "value2": 0
                  }
                ]
              },
              "passed": [
                "Trigger: Attack End",
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1482818607\">Herta_AbilityEidolon4_DamageUp</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-256958111\">Herta_Passive_ATK</a>"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Herta_Count_ATK"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Herta_Count"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "Scoring_Herta_Count",
                  "value": 0
                },
                "Trigger: Skip Death Handling",
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Herta_Count"
                }
              ],
              "failed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1482818607\">Herta_AbilityEidolon4_DamageUp</a>"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1076207439\">Herta_Passive_Flag</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1482818607\">Herta_AbilityEidolon4_DamageUp</a>",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Hit",
          "execute": [
            {
              "name": "Adjust Target Stats",
              "modifiedValuesArray": [
                {
                  "on": "Attacker",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": "SkillRank_Rank04_P1_DamagePercentage"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "SkillRank_Rank04_P1_DamagePercentage"
      ],
      "latentQueue": [
        "Herta_Count_Insert"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1736222640\">Herta_AbilityEidolon2_CriticalChance</a>[<span class=\"descriptionNumberColor\">CRIT Rate Boost</span>]",
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
              "variableName": "MDF_Count",
              "multiplier": 1
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_CriticalChance) || Variables[1] (MDF_Count) || MUL || RETURN",
                "displayLines": "(MDF_CriticalChance * MDF_Count)",
                "constants": [],
                "variables": [
                  "MDF_CriticalChance",
                  "MDF_Count"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_CriticalChance"
      ],
      "latentQueue": [
        "Herta_Count_Insert"
      ],
      "description": "Each stack increases CRIT rate by <span class=\"descriptionNumberColor\">MDF_CriticalChance</span>, up to 5 stacks.",
      "type": "Buff",
      "effectName": "CRIT Rate Boost",
      "statusName": "CRIT Rate Boost",
      "addStacksPerTrigger": 1
    }
  ]
}