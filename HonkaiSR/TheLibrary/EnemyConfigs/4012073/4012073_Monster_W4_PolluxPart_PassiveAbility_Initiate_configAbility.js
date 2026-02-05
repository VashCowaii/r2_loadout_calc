const configAbility = {
  "fileName": "4012073_Monster_W4_PolluxPart_PassiveAbility_Initiate",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Deleted bullshit",
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Monster_W4_PolluxPart_Status"
    },
    {
      "name": "Change Character Transformation",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "phase": "Phase1"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Monster_W4_PolluxPart_Status",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Lock HP",
              "threshold": 0.0000010000076
            }
          ]
        },
        {
          "eventTrigger": "Deal Damage End [Owner]: Any",
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
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Monster_W4_Pollux_ThirstBlood[<span class=\"descriptionNumberColor\">Hastened Death</span>]",
                    "invertCondition": true
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
                  "modifier": "Monster_W4_Pollux_ThirstBlood[<span class=\"descriptionNumberColor\">Hastened Death</span>]",
                  "valuePerStack": {
                    "MDF_DamagePercentage": {
                      "operator": "Variables[0] (ThirstBlood_Dot_DamagePercentage) || RETURN",
                      "displayLines": "ThirstBlood_Dot_DamagePercentage",
                      "constants": [],
                      "variables": [
                        "ThirstBlood_Dot_DamagePercentage"
                      ]
                    },
                    "MDF_DamageHpAddedRatio": {
                      "operator": "Variables[0] (ThirstBlood_DamageHpAddedRatio) || RETURN",
                      "displayLines": "ThirstBlood_DamageHpAddedRatio",
                      "constants": [],
                      "variables": [
                        "ThirstBlood_DamageHpAddedRatio"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Copy",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "variable": "#PassiveSkill01_P1_ThirstBlood_DamageHpAddedRatio",
              "target2": null,
              "variable2": "ThirstBlood_DamageHpAddedRatio"
            },
            {
              "name": "Define Custom Variable with Copy",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "variable": "#PassiveSkill01_P2_ThirstBlood_Dot_DamagePercentage",
              "target2": null,
              "variable2": "ThirstBlood_Dot_DamagePercentage"
            }
          ]
        },
        {
          "eventTrigger": "Pre-Death [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "Monster_W4_PolluxPart_Shield[<span class=\"descriptionNumberColor\">Overdue Obituary</span>]"
              }
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster's Summoner}}"
                    },
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 3
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster's Summoner}}"
                    },
                    "modifier": "Monster_W4_Pollux_RLBoss_Status"
                  }
                ]
              },
              "failed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Monster_W4_PolluxPart_Shield[<span class=\"descriptionNumberColor\">Overdue Obituary</span>]"
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