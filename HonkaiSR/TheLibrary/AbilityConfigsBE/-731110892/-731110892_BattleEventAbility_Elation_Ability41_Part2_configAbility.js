const configAbility = {
  "fileName": "-731110892_BattleEventAbility_Elation_Ability41_Part2",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Looped Event",
      "maxLoops": 10,
      "execute": [
        {
          "name": "Random Event",
          "odds": [
            {
              "displayLines": "UnusedUnderThisBase_3388"
            },
            {
              "displayLines": "UnusedUnderThisBase_3383"
            }
          ],
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"247970287\">Bounce_SelectTarget</a>",
              "target": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "paramSequence": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "DamageFlat": {
                      "displayLines": 1
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Elation DMG"
                  }
                },
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "value": {
                    "displayLines": "UnusedUnderThisBase_3384"
                  },
                  "isFixed": "* ERR"
                }
              ]
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"247970287\">Bounce_SelectTarget</a>",
              "target": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "paramSequence": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "DamageElation": {
                      "displayLines": "UnusedUnderThisBase_3386"
                    },
                    "dmgFormula": "Elation Scaling",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Elation DMG"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "Trigger: Attack End",
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Aha Instant: Aha Battle Event}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"211849600\">MLevel_ElationBE_ActionStateFalse_02</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Aha Instant: Aha Battle Event}}"
        },
        "value1": "ElationTime_IsNoConsume",
        "compareType": "=",
        "value2": 1
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Aha Instant: Aha Battle Event}}"
          },
          "value": 0,
          "variableName": "ElationTime_IsNoConsume"
        }
      ],
      "failed": [
        {
          "name": "Adjust Team Punchline Value",
          "value": 0,
          "adjustment": "Set"
        }
      ]
    },
    {
      "name": "Define Custom Variable with Team Count",
      "variableName": "Elation_Character_Num",
      "readTarget": {
        "name": "Target Name",
        "target": "{{Elation: All Entities}}"
      },
      "living": true
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "Elation_Character_Num",
        "compareType": ">",
        "value2": 0
      },
      "passed": [
        {
          "name": "Adjust Team Punchline Value",
          "value": {
            "displayLines": "(Elation_Character_Num * 1)"
          },
          "adjustment": "Add"
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  }
}