const configAbility = {
  "fileName": "Yukong_Yukong_PassiveAbility01",
  "childAbilityList": [
    "Yukong_Yukong_PassiveAbility01"
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
      "modifier": "Yukong_Passive_Bonus[<span class=\"descriptionNumberColor\">Seven Layers, One Arrow</span>]",
      "valuePerStack": {
        "MDF_AddDamagePercentage": {
          "operator": "Variables[0] (0.8) || RETURN",
          "displayLines": "0.8",
          "constants": [],
          "variables": [
            0.8
          ]
        },
        "MDF_StanceBreakAddedRatio": {
          "operator": "Variables[0] (1) || RETURN",
          "displayLines": "1",
          "constants": [],
          "variables": [
            1
          ]
        }
      }
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": 0,
      "maximum": {
        "operator": "Variables[0] (2) || RETURN",
        "displayLines": "2",
        "constants": [],
        "variables": [
          2
        ]
      },
      "assignState": "True",
      "priorState": "Normal",
      "bar#": 3,
      "cooldown": 0
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Yukong_FlowerListen"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Modifier Holder}}"
      },
      "modifier": "Yukong_ServantFlowerListen"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Yukong_ServantFlowerListen",
      "execute": [
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Entity Type",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "type": "Memosprite"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "Yukong_Flower_ATK[<span class=\"descriptionNumberColor\">Roaring Bowstrings</span>]"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Yukong_Flower",
                      "valuePerStack": {
                        "MDF_AttackAddedRatio": {
                          "operator": "Variables[0] (0.8) || RETURN",
                          "displayLines": "0.8",
                          "constants": [],
                          "variables": [
                            0.8
                          ]
                        },
                        "MDF_Eidolon4AddedRatio": {
                          "operator": "Variables[0] (0.3) || RETURN",
                          "displayLines": "0.3",
                          "constants": [],
                          "variables": [
                            0.3
                          ]
                        },
                        "MDF_PointB3Amount": {
                          "operator": "Variables[0] (2) || RETURN",
                          "displayLines": "2",
                          "constants": [],
                          "variables": [
                            2
                          ]
                        },
                        "MDF_FromUltraMark": 0
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "Yukong_Flower_ATK_Crit[<span class=\"descriptionNumberColor\">Roaring Bowstrings</span>]"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Yukong_Flower",
                      "valuePerStack": {
                        "MDF_AttackAddedRatio": {
                          "operator": "Variables[0] (0.8) || RETURN",
                          "displayLines": "0.8",
                          "constants": [],
                          "variables": [
                            0.8
                          ]
                        },
                        "MDF_Eidolon4AddedRatio": {
                          "operator": "Variables[0] (0.3) || RETURN",
                          "displayLines": "0.3",
                          "constants": [],
                          "variables": [
                            0.3
                          ]
                        },
                        "MDF_PointB3Amount": {
                          "operator": "Variables[0] (2) || RETURN",
                          "displayLines": "2",
                          "constants": [],
                          "variables": [
                            2
                          ]
                        },
                        "MDF_FromUltraMark": 1
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Yukong's Flower Target}}"
                      },
                      "modifier": "Yukong_Flower_ATK_Crit[<span class=\"descriptionNumberColor\">Roaring Bowstrings</span>]",
                      "valuePerStack": {
                        "MDF_RealAttack": {
                          "operator": "Variables[0] (0.8) || RETURN",
                          "displayLines": "0.8",
                          "constants": [],
                          "variables": [
                            0.8
                          ]
                        },
                        "MDF_CritChanceUp": {
                          "operator": "Variables[0] (0.28) || RETURN",
                          "displayLines": "0.28",
                          "constants": [],
                          "variables": [
                            0.28
                          ]
                        },
                        "MDF_CritDamageUpRatio": {
                          "operator": "Variables[0] (0.65) || RETURN",
                          "displayLines": "0.65",
                          "constants": [],
                          "variables": [
                            0.65
                          ]
                        }
                      }
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
  ]
}