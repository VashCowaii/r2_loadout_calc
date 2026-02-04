const configAbility = {
  "fileName": "1014013_Monster_W1_GS_Svarog_RL_Ability10_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "Phase1_PhaseFlag",
        "compareType": "=",
        "value2": 1,
        "contextScope": "TargetEntity"
      },
      "passed": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "Phase1_PhaseFlag"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Caster's Minions}}"
        },
        "value1": "TeamCharacterCount",
        "compareType": "<",
        "value2": 4
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "SummonMinions",
            "compareType": "=",
            "value2": 0,
            "contextScope": "TargetEntity"
          },
          "passed": [
            {
              "name": "Create Enemies",
              "delayPercent": 0.5,
              "enemyList": [
                {
                  "name": "Create Enemy from Custom",
                  "value": "Monster_SummonID2",
                  "summonLocation": "First"
                },
                {
                  "name": "Create Enemy from Custom",
                  "value": "Monster_SummonID2",
                  "summonLocation": "Last"
                },
                {
                  "name": "Create Enemy from Custom",
                  "value": "Monster_SummonID3",
                  "summonLocation": "AfterCaster"
                },
                {
                  "name": "Create Enemy from Custom",
                  "value": "Monster_SummonID3",
                  "summonLocation": "BeforeCaster"
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "SummonMinions",
                "compareType": "=",
                "value2": 1,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Looped Event",
                  "maxLoops": 4,
                  "Event": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Is Part Of Team Location",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "team": "Enemy Team",
                        "location": "Left"
                      },
                      "passed": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": 0.5,
                          "refreshPositions": false,
                          "enemyList": [
                            {
                              "name": "Create Enemy from Custom",
                              "value": "Monster_SummonID3",
                              "summonLocation": "First"
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": 0.5,
                          "refreshPositions": false,
                          "enemyList": [
                            {
                              "name": "Create Enemy from Custom",
                              "value": "Monster_SummonID3",
                              "summonLocation": "Last"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Looped Event",
                  "maxLoops": 4,
                  "Event": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Is Part Of Team Location",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "team": "Enemy Team",
                        "location": "Left"
                      },
                      "passed": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": 0.5,
                          "refreshPositions": false,
                          "enemyList": [
                            {
                              "name": "Create Enemy from Custom",
                              "value": "Monster_SummonID2",
                              "summonLocation": "First"
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": 0.5,
                          "refreshPositions": false,
                          "enemyList": [
                            {
                              "name": "Create Enemy from Custom",
                              "value": "Monster_SummonID2",
                              "summonLocation": "Last"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "Standard_Servant[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "Monster_W1_Svarog_RL_AttackUp[<span class=\"descriptionNumberColor\">DMG Boost</span>]"
          },
          "passed": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "AttackUpLayer",
              "modifierName": "Monster_W1_Svarog_RL_AttackUp[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
              "multiplier": 1
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "searchRandom": true,
              "conditions": {
                "name": "NOT",
                "condition": {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Monster_W1_Svarog_RL_AttackUp[<span class=\"descriptionNumberColor\">DMG Boost</span>]"
                }
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Monster_W1_Svarog_RL_AttackUp[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                  "valuePerStack": {
                    "MDF_DamageUpRatio_PerLayer": {
                      "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
                      "displayLines": "{[Skill06[0]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill06[0]]}"
                      ]
                    }
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (AttackUpLayer) || RETURN",
                    "displayLines": "AttackUpLayer",
                    "constants": [],
                    "variables": [
                      "AttackUpLayer"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "SummonMinions",
            "compareType": "=",
            "value2": 1,
            "contextScope": "TargetEntity"
          },
          "passed": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "SummonMinions"
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "SummonMinions",
              "context": "TargetEntity",
              "value": 1,
              "max": 2
            }
          ]
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": []
}