const configAbility = {
  "fileName": "Aglaea_Aglaea_TechniqueInLevel",
  "childAbilityList": [
    "Aglaea_Aglaea_TechniqueInLevel"
  ],
  "skillTrigger": "SkillMaze",
  "abilityType": "Technique",
  "energy": null,
  "toughnessList": [
    20,
    0,
    0
  ],
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          "Technique Modifies Current Wave",
          {
            "name": "Compare: Variable",
            "value1": "Wave Count",
            "compareType": "=",
            "value2": 1
          }
        ]
      },
      "passed": [
        {
          "name": "Summon Memosprite",
          "memoID": 11402,
          "valuePerStack": {
            "_PointB3Layer": {
              "displayLines": "_EnergyReduce"
            },
            "Ability11_DamagePercentage": {
              "displayLines": "2"
            },
            "Ability11_DamagePercentageAD": {
              "displayLines": "0.9"
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"755493734\">Aglaea_Ability02_ChangeSkill</a>"
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1050397411\">StageAbility_Maze_Aglaea_Modifier</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1050397411\">StageAbility_Maze_Aglaea_Modifier</a>",
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "priorityLevel": -60,
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  "Technique Modifies Current Wave",
                  {
                    "name": "Compare: Variable",
                    "value1": "Wave Count",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": {
                    "displayLines": "30"
                  },
                  "isFixed": "* ERR"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Thunder",
                    "Damage": {
                      "displayLines": "1"
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Technique",
                    "EnergyGainPercent": "100%"
                  }
                },
                "Trigger: Attack End",
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"216440055\">Aglaea_GoldenSword_Mark</a>[<span class=\"descriptionNumberColor\">Seam Stitch</span>]",
                      "valuePerStack": {
                        "BombDamagePercentage": {
                          "displayLines": "0.3"
                        },
                        "_SpRecover": {
                          "displayLines": "20"
                        },
                        "MDF_PropertyValue": {
                          "displayLines": "0.3"
                        },
                        "MDF_PropertyValue2": {
                          "displayLines": "0.15"
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  }
}