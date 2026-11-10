const configAbility = {
  "fileName": "Sparxie_Functions",
  "abilityType": "Char. Functions",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "length": 8,
  "parse": [
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__1081099960\">Sparxie_ElationAbility_Aoe</a>",
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "AttackScaling": {
            "DamageType": "Fire",
            "DamageElation": {
              "displayLines": "0.5"
            },
            "dmgFormula": "Elation Scaling",
            "Toughness": {
              "displayLines": "AOE Toughness Value"
            },
            "Tags": null,
            "attackType": "Elation DMG",
            "EnergyGainPercent": "100%"
          }
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1984031563\">Sparxie_ElationAbility_Single</a>",
      "parse": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"247970287\">Bounce_SelectTarget</a>",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "paramSequence": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Fire",
                "DamageElation": {
                  "displayLines": "0.25"
                },
                "dmgFormula": "Elation Scaling",
                "Toughness": {
                  "displayLines": "ST Toughness Value"
                },
                "Tags": null,
                "attackType": "Elation DMG"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-758227528\">Sparxie_Ability02_MinorPrize</a>",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-673955819\">Sparxie_Ability02_MustGrandPrize</a>",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(Sparxie_Skill02_MinorPrizeChance - 1)"
              },
              "variableName": "Sparxie_Skill02_MinorPrizeChance"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(Sparxie_Skill02_MinorPrizeGetNum + 1)"
              },
              "variableName": "Sparxie_Skill02_MinorPrizeGetNum"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "Sparxie_Skill02_GrandPrizeChance",
                    "compareType": "<=",
                    "value2": 0
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "Sparxie_Skill02_MinorPrizeChance",
                    "compareType": "<=",
                    "value2": 0
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "3"
                  },
                  "variableName": "Sparxie_Skill02_GrandPrizeChance"
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(28 - Sparxie_Skill02_GrandPrizeChance)"
                  },
                  "variableName": "Sparxie_Skill02_MinorPrizeChance"
                }
              ]
            }
          ]
        },
        {
          "name": "UI Display Event (On Entity)",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "popUpText": "Unreal Banger"
        },
        {
          "name": "Adjust Team Punchline Value",
          "value": {
            "displayLines": "1"
          },
          "adjustment": "Add"
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1163871467\">Sparxie_Ability02_GrandPrize</a>",
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2022669679\">Sparxie_Ability02_Count</a>",
          "addStacksPerTrigger": 1
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-673955819\">Sparxie_Ability02_MustGrandPrize</a>",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(Sparxie_Skill02_GrandPrizeChance - 1)"
              },
              "variableName": "Sparxie_Skill02_GrandPrizeChance"
            },
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "Sparxie_Skill02_MinorPrizeGetNum"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "Sparxie_Skill02_GrandPrizeChance",
                    "compareType": "<=",
                    "value2": 0
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "Sparxie_Skill02_MinorPrizeChance",
                    "compareType": "<=",
                    "value2": 0
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "3"
                  },
                  "variableName": "Sparxie_Skill02_GrandPrizeChance"
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(28 - Sparxie_Skill02_GrandPrizeChance)"
                  },
                  "variableName": "Sparxie_Skill02_MinorPrizeChance"
                }
              ]
            }
          ]
        },
        {
          "name": "UI Display Event (On Entity)",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "popUpText": "Straight Fire"
        },
        {
          "name": "Skill Points Modification",
          "adjustmentValue": {
            "displayLines": "2"
          },
          "adjustmentType": "+"
        },
        {
          "name": "Adjust Team Punchline Value",
          "value": {
            "displayLines": "2"
          },
          "adjustment": "Add"
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__767923714\">Sparxie_Ability02_Effect</a>",
      "parse": []
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__132499687\">Sparxie_Ability21_Effect</a>",
      "parse": []
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-514028922\">Sparxie_Ability11_Effect_V1</a>",
      "parse": []
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__1607821938\">Sparxie_Ability11_Effect</a>",
      "parse": []
    }
  ],
  "references": []
}