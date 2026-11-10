const configAbility = {
  "fileName": "JingYuan_JingYuan_TechniqueInLevel",
  "childAbilityList": [
    "JingYuan_JingYuan_TechniqueInLevel"
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
      "modifier": "<a class=\"gModGreen\" id=\"1753288775\">StageAbility_Maze_JingYuan_Modifier</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1753288775\">StageAbility_Maze_JingYuan_Modifier</a>",
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "priorityLevel": -80,
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
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2081826421\">JingYuan_BattleEvent_ATKCount</a>[<span class=\"descriptionNumberColor\">Prana Extirpated</span>]",
                  "stackLimit": {
                    "displayLines": "10"
                  },
                  "addStacksPerTrigger": {
                    "displayLines": "3"
                  }
                },
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "EnergyBar_ATKCount",
                  "modifierName": "<a class=\"gModGreen\" id=\"2081826421\">JingYuan_BattleEvent_ATKCount</a>[<span class=\"descriptionNumberColor\">Prana Extirpated</span>]",
                  "multiplier": 1
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(EnergyBar_ATKCount + EnergyBar_UltraATKCount)"
                  },
                  "variableName": "EnergyBar_ATKCountSum"
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "displayLines": "EnergyBar_ATKCountSum"
                  },
                  "maximum": {
                    "displayLines": "10"
                  },
                  "assignState": "True",
                  "priorState": "Normal",
                  "bar#": 4,
                  "cooldown": 0
                },
                {
                  "name": "Show Attack Count",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Jing Yuan: Lightning Lord}}"
                  },
                  "attackCount": {
                    "displayLines": "EnergyBar_ATKCount"
                  },
                  "attackCountEnhanced": {
                    "displayLines": "EnergyBar_UltraATKCount"
                  },
                  "show": true
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Jing Yuan: Lightning Lord}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1141770667\">JingYuan_BattleEvent_ATKCountShowText</a>",
                  "valuePerStack": {
                    "ATKCount": {
                      "displayLines": "EnergyBar_ATKCount"
                    }
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Jing Yuan: Lightning Lord}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1762822846\">JingYuan_BattleEvent_SpeedUp</a>",
                  "stackLimit": {
                    "displayLines": "(10 - 3)"
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "displayLines": "10"
                    }
                  },
                  "addStacksPerTrigger": {
                    "displayLines": "3"
                  }
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
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  }
}