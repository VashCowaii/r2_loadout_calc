const configAbility = {
  "fileName": "4014036_Functions",
  "abilityType": "Char. Functions",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "length": 4,
  "parse": [
    {
      "name": "CharacterFunctions",
      "functionName": "TaskList_Monster_W4_Pollux_IF_Strengthen_EggAbsorb_FX",
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Enemy_W4_Pollux_IF_Strengthen[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]",
                "invertCondition": true
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Monster_W4_Pollux_EnergyBar"
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Enemy_W4_Pollux_IF_Strengthen_Break",
                "invertCondition": true
              }
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "TaskList_Monster_W4_Pollux_IF_Strengthen_EggAbsorb",
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Enemy_W4_Pollux_IF_Strengthen[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]",
                "invertCondition": true
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Monster_W4_Pollux_EnergyBar"
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Enemy_W4_Pollux_IF_Strengthen_Break",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (_EnergyValue) || RETURN",
                    "displayLines": "_EnergyValue",
                    "constants": [],
                    "variables": [
                      "_EnergyValue"
                    ]
                  },
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "maximum": 1
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "Monster_W4_Pollux_Strengthen_EggAbsorb_FX",
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Monster_W4_Pollux_Strengthen[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]",
                "invertCondition": true
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Monster_W4_Pollux_EnergyBar"
              }
            ]
          }
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "Monster_W4_Pollux_Strengthen_EggAbsorb",
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Monster_W4_Pollux_Strengthen[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]",
                "invertCondition": true
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Monster_W4_Pollux_EnergyBar"
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (_EnergyValue) || RETURN",
                "displayLines": "_EnergyValue",
                "constants": [],
                "variables": [
                  "_EnergyValue"
                ]
              },
              "entityClass": "Enemy",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "maximum": 1
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_Tutorial",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_Tutorial",
                  "value": 1
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "references": []
}