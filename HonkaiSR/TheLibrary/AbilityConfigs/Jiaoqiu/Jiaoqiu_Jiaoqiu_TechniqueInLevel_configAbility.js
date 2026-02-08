const configAbility = {
  "fileName": "Jiaoqiu_Jiaoqiu_TechniqueInLevel",
  "childAbilityList": [
    "Jiaoqiu_Jiaoqiu_TechniqueInLevel"
  ],
  "skillTrigger": "SkillMaze",
  "abilityType": "Technique",
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
      "modifier": "<a class=\"gModGreen\" id=\"174080663\">StageAbility_Maze_Jiaoqiu_Modifier</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__174080663\">StageAbility_Maze_Jiaoqiu_Modifier</a>",
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Technique Modifies Current Wave"
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "Damage": {
                      "operator": "Variables[0] (1) || RETURN",
                      "displayLines": "1",
                      "constants": [],
                      "variables": [
                        1
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Technique"
                  }
                },
                "Trigger: Attack End",
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2104919447\">Jiaoqiu_Debuff_Flavor</a>[<span class=\"descriptionNumberColor\">Ashen Roast</span>]",
                  "duration": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  },
                  "baseChance": {
                    "operator": "Variables[0] (1) || RETURN",
                    "displayLines": "1",
                    "constants": [],
                    "variables": [
                      1
                    ]
                  },
                  "stackLimit": {
                    "operator": "Variables[0] (_MaxLayer) || RETURN",
                    "displayLines": "_MaxLayer",
                    "constants": [],
                    "variables": [
                      "_MaxLayer"
                    ]
                  },
                  "valuePerStack": {
                    "DOT_Ratio": {
                      "operator": "Variables[0] (SkillP01_DotRatio) || RETURN",
                      "displayLines": "SkillP01_DotRatio",
                      "constants": [],
                      "variables": [
                        "SkillP01_DotRatio"
                      ]
                    },
                    "AbilityRank_Eidolon2_P1_Ratio": {
                      "operator": "Variables[0] (3) || RETURN",
                      "displayLines": "3",
                      "constants": [],
                      "variables": [
                        3
                      ]
                    },
                    "AbilityRank_Eidolon6_P3_DownRatio": {
                      "operator": "Variables[0] (0.03) || RETURN",
                      "displayLines": "0.03",
                      "constants": [],
                      "variables": [
                        0.03
                      ]
                    },
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (0.15) || RETURN",
                      "displayLines": "0.15",
                      "constants": [],
                      "variables": [
                        0.15
                      ]
                    },
                    "MDF_PropertyValue_2": {
                      "operator": "Variables[0] (0.05) || RETURN",
                      "displayLines": "0.05",
                      "constants": [],
                      "variables": [
                        0.05
                      ]
                    }
                  },
                  "addStacksPerTrigger": 1
                }
              ]
            }
          ],
          "priorityLevel": -60
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}