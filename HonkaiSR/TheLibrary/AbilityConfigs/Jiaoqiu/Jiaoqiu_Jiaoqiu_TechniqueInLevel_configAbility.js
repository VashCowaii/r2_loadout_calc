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
          "priorityLevel": -60,
          "execute": [
            {
              "name": "IF",
              "conditions": "Technique Modifies Current Wave",
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
                      "displayLines": "1"
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
                    "displayLines": "2"
                  },
                  "baseChance": {
                    "displayLines": "1"
                  },
                  "stackLimit": {
                    "displayLines": "_MaxLayer"
                  },
                  "valuePerStack": {
                    "DOT_Ratio": {
                      "displayLines": "SkillP01_DotRatio"
                    },
                    "AbilityRank_Eidolon2_P1_Ratio": {
                      "displayLines": "3"
                    },
                    "AbilityRank_Eidolon6_P3_DownRatio": {
                      "displayLines": "0.03"
                    },
                    "MDF_PropertyValue": {
                      "displayLines": "0.15"
                    },
                    "MDF_PropertyValue_2": {
                      "displayLines": "0.05"
                    }
                  },
                  "addStacksPerTrigger": 1
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