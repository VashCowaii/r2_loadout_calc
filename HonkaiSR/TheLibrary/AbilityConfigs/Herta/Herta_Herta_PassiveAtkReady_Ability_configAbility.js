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
      "value": 0,
      "variableName": "Herta_Count_Insert"
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
      "execute": [
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(Herta_Count - 1)"
          },
          "variableName": "Herta_Count"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(Scoring_Herta_Count + 1)"
          },
          "variableName": "Scoring_Herta_Count"
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
                "displayLines": "5"
              },
              "valuePerStack": {
                "MDF_CriticalChance": {
                  "displayLines": "0.03"
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
                  "displayLines": "0.1"
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
              "displayLines": "0.4"
            },
            "Toughness": {
              "displayLines": "AOE Toughness Value"
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
            "conditions": {
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
              "variableName": "Herta_Count",
              "scope": "TargetEntity"
            },
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "Scoring_Herta_Count"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "Herta_Count_ATK",
              "scope": "TargetEntity"
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
                  "variableName": "Herta_Count_ATK",
                  "scope": "TargetEntity"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "Herta_Count",
                  "scope": "TargetEntity"
                },
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "Scoring_Herta_Count"
                },
                "Trigger: Skip Death Handling",
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "Herta_Count",
                  "scope": "TargetEntity"
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
      "stackData": [
        "SkillRank_Rank04_P1_DamagePercentage"
      ],
      "latentQueue": [
        "Herta_Count_Insert"
      ],
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
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1736222640\">Herta_AbilityEidolon2_CriticalChance</a>[<span class=\"descriptionNumberColor\">CRIT Rate Boost</span>]",
      "stackType": "ReplaceByCaster",
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
      "addStacksPerTrigger": 1,
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
                "displayLines": "(MDF_CriticalChance * MDF_Count)"
              }
            }
          ]
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  }
}