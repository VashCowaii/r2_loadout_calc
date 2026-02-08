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
      "modifier": "<a class=\"gModGreen\" id=\"-2029608096\">Yukong_Passive_Bonus</a>[<span class=\"descriptionNumberColor\">Seven Layers, One Arrow</span>]",
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
      "modifier": "<a class=\"gModGreen\" id=\"64466487\">Yukong_FlowerListen</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Modifier Holder}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1947872588\">Yukong_ServantFlowerListen</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1947872588\">Yukong_ServantFlowerListen</a>",
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
                    "modifier": "<a class=\"gModGreen\" id=\"432670237\">Yukong_Flower_ATK</a>[<span class=\"descriptionNumberColor\">Roaring Bowstrings</span>]"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1617821492\">Yukong_Flower</a>",
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
                    "modifier": "<a class=\"gModGreen\" id=\"1097783562\">Yukong_Flower_ATK_Crit</a>[<span class=\"descriptionNumberColor\">Roaring Bowstrings</span>]"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1617821492\">Yukong_Flower</a>",
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
                      "modifier": "<a class=\"gModGreen\" id=\"1097783562\">Yukong_Flower_ATK_Crit</a>[<span class=\"descriptionNumberColor\">Roaring Bowstrings</span>]",
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