const configAbility = {
  "fileName": "JingYuan_JingYuan_TechniqueInLevel",
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
      "to": "Caster",
      "modifier": "StageAbility_Maze_JingYuan_Modifier"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "StageAbility_Maze_JingYuan_Modifier",
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Technique Modifies Current Wave"
                  },
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
                  "to": "Caster",
                  "modifier": "JingYuan_BattleEvent_ATKCount[<span class=\"descriptionNumberColor\">Prana Extirpated</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (10) || RETURN",
                    "displayLines": "10",
                    "constants": [],
                    "variables": [
                      10
                    ]
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (3) || RETURN",
                    "displayLines": "3",
                    "constants": [],
                    "variables": [
                      3
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "EnergyBar_ATKCount",
                  "modifierName": "JingYuan_BattleEvent_ATKCount[<span class=\"descriptionNumberColor\">Prana Extirpated</span>]",
                  "multiplier": 1
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "EnergyBar_ATKCountSum",
                  "value": {
                    "operator": "Variables[0] (EnergyBar_ATKCount) || Variables[1] (EnergyBar_UltraATKCount) || ADD || RETURN",
                    "displayLines": "(EnergyBar_ATKCount + EnergyBar_UltraATKCount)",
                    "constants": [],
                    "variables": [
                      "EnergyBar_ATKCount",
                      "EnergyBar_UltraATKCount"
                    ]
                  }
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (EnergyBar_ATKCountSum) || RETURN",
                    "displayLines": "EnergyBar_ATKCountSum",
                    "constants": [],
                    "variables": [
                      "EnergyBar_ATKCountSum"
                    ]
                  },
                  "maximum": {
                    "operator": "Variables[0] (10) || RETURN",
                    "displayLines": "10",
                    "constants": [],
                    "variables": [
                      10
                    ]
                  },
                  "assignState": "True",
                  "priorState": "Normal",
                  "bar#": 4,
                  "cooldown": 0
                },
                {
                  "name": "Show Attack Time",
                  "time": {
                    "operator": "Variables[0] (EnergyBar_ATKCount) || RETURN",
                    "displayLines": "EnergyBar_ATKCount",
                    "constants": [],
                    "variables": [
                      "EnergyBar_ATKCount"
                    ]
                  },
                  "enhanced": {
                    "operator": "Variables[0] (EnergyBar_UltraATKCount) || RETURN",
                    "displayLines": "EnergyBar_UltraATKCount",
                    "constants": [],
                    "variables": [
                      "EnergyBar_UltraATKCount"
                    ]
                  },
                  "on": null,
                  "show": true
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster's own Created Battle Event/Summon",
                  "modifier": "JingYuan_BattleEvent_ATKCountShowText",
                  "valuePerStack": {
                    "ATKCount": {
                      "operator": "Variables[0] (EnergyBar_ATKCount) || RETURN",
                      "displayLines": "EnergyBar_ATKCount",
                      "constants": [],
                      "variables": [
                        "EnergyBar_ATKCount"
                      ]
                    }
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster's own Created Battle Event/Summon",
                  "modifier": "JingYuan_BattleEvent_SpeedUp",
                  "stackLimit": {
                    "operator": "Variables[0] (10) || Variables[1] (3) || SUB || RETURN",
                    "displayLines": "(10 - 3)",
                    "constants": [],
                    "variables": [
                      10,
                      3
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (10) || RETURN",
                      "displayLines": "10",
                      "constants": [],
                      "variables": [
                        10
                      ]
                    }
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (3) || RETURN",
                    "displayLines": "3",
                    "constants": [],
                    "variables": [
                      3
                    ]
                  }
                }
              ]
            }
          ],
          "priorityLevel": -80
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}