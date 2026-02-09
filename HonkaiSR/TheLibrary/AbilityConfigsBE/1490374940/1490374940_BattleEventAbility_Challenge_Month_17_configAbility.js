const configAbility = {
  "fileName": "1490374940_BattleEventAbility_Challenge_Month_17",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1170455479\">Modifier_BattleEventAbility_Challenge_Month_17</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-737870742\">Modifier_BattleEventAbility_Challenge_Month_17_Sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Joint-Attack",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                }
              },
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Enemy Team All}}"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": ">=",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "Share DMG Taken",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder's Team Members(Exclude Self)}}"
                      },
                      "selfSplit": 1,
                      "targetSplit": {
                        "operator": "Variables[0] (ADF_1) || RETURN",
                        "displayLines": "ADF_1",
                        "constants": [],
                        "variables": [
                          "ADF_1"
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "description": "When receiving DMG, all other enemy targets receive DMG equal to <span class=\"descriptionNumberColor\">#BattleEvent_P1_ADF</span> of the original DMG.",
      "type": "Debuff",
      "effectName": "Memory Imprint",
      "statusName": "Memory Imprint"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1170455479\">Modifier_BattleEventAbility_Challenge_Month_17</a>",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-737870742\">Modifier_BattleEventAbility_Challenge_Month_17_Sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]"
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Compare: Monster Rank",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "compareType": ">=",
                "value2": 3
              },
              "ifTargetFound": [
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "inherentTarget": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "ability": "BattleEventAbility_Camear_SelectDarkTeamEntity",
                  "isTrigger": true
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-737870742\">Modifier_BattleEventAbility_Challenge_Month_17_Sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]",
                  "valuePerStack": {
                    "ADF_1": {
                      "operator": "Variables[0] (#BattleEvent_P1_ADF) || RETURN",
                      "displayLines": "#BattleEvent_P1_ADF",
                      "constants": [],
                      "variables": [
                        "#BattleEvent_P1_ADF"
                      ]
                    },
                    "ADF_2": {
                      "operator": "Variables[0] (#BattleEvent_P2_ADF) || RETURN",
                      "displayLines": "#BattleEvent_P2_ADF",
                      "constants": [],
                      "variables": [
                        "#BattleEvent_P2_ADF"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Compare: Monster Rank",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "compareType": ">=",
                "value2": 3
              },
              "ifTargetFound": [
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "inherentTarget": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "ability": "BattleEventAbility_Camear_AllDarkTeam",
                  "isTrigger": true
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-737870742\">Modifier_BattleEventAbility_Challenge_Month_17_Sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]",
                  "valuePerStack": {
                    "ADF_1": {
                      "operator": "Variables[0] (#BattleEvent_P1_ADF) || RETURN",
                      "displayLines": "#BattleEvent_P1_ADF",
                      "constants": [],
                      "variables": [
                        "#BattleEvent_P1_ADF"
                      ]
                    },
                    "ADF_2": {
                      "operator": "Variables[0] (#BattleEvent_P2_ADF) || RETURN",
                      "displayLines": "#BattleEvent_P2_ADF",
                      "constants": [],
                      "variables": [
                        "#BattleEvent_P2_ADF"
                      ]
                    }
                  }
                }
              ]
            }
          ],
          "priorityLevel": -90
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}