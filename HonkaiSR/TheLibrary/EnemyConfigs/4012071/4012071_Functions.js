const configAbility = {
  "fileName": "4012071_Functions",
  "abilityType": "Char. Functions",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "length": 2,
  "parse": [
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__1740422599\">Monster_W4_PolluxPart_Strengthen_EggAbsorb_FX</a>",
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
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
                "modifier": "<a class=\"gModGreen\" id=\"1709215218\">Monster_W4_Pollux_Strengthen</a>[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]",
                "invertCondition": true
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"2086497725\">Monster_W4_Pollux_EnergyBar</a>"
              }
            ]
          }
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__965791908\">Monster_W4_PolluxPart_Strengthen_EggAbsorb</a>",
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
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
                "modifier": "<a class=\"gModGreen\" id=\"1709215218\">Monster_W4_Pollux_Strengthen</a>[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]",
                "invertCondition": true
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"2086497725\">Monster_W4_Pollux_EnergyBar</a>"
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Copy",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "variable": "_EnergyValue",
              "target2": null,
              "variable2": "_EnergyValue"
            },
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
  ],
  "references": []
}