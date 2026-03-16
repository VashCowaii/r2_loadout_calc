const configAbility = {
  "fileName": "70001_BattleEventAbility_Elation_Ability41_Part2",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Looped Event",
      "maxLoops": 10,
      "Event": [
        {
          "name": "Random Event",
          "odds": [
            {
              "operator": "Variables[0] ({[Skill41[2]]}) || RETURN",
              "displayLines": "{[Skill41[2]]}",
              "constants": [],
              "variables": [
                "{[Skill41[2]]}"
              ]
            },
            {
              "operator": "Variables[0] ({[Skill41[3]]}) || RETURN",
              "displayLines": "{[Skill41[3]]}",
              "constants": [],
              "variables": [
                "{[Skill41[3]]}"
              ]
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
                    "operator": "Variables[0] ({[Skill41[4]]}) || RETURN",
                    "displayLines": "{[Skill41[4]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill41[4]]}"
                    ]
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
                      "operator": "Variables[0] ({[Skill41[1]]}) || RETURN",
                      "displayLines": "{[Skill41[1]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill41[1]]}"
                      ]
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
          "variableName": "ElationTime_IsNoConsume",
          "value": 0
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
      "target": {
        "name": "Target Name",
        "target": "{{Elation: Player Team with Unselectables}} + {{Elation: Currency Wars Full OffFieldList}} - {{Elation: OffField Sparxie}}"
      },
      "variableName": "Elation_Character_Num",
      "livingTargets": true
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
            "operator": "Variables[0] (Elation_Character_Num) || Constants[0] (1) || MUL || RETURN",
            "displayLines": "(Elation_Character_Num * 1)",
            "constants": [
              1
            ],
            "variables": [
              "Elation_Character_Num"
            ]
          },
          "adjustment": "Add"
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": []
}