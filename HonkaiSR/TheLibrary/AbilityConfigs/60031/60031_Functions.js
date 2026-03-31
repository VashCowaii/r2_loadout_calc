const configAbility = {
  "fileName": "60031_Functions",
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
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1221521032\">BattleEvent_60031_Damage</a>",
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Irontomb: Core}}"
          },
          "maxTargets": 1,
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxHp",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": {
                  "name": "Damage Type Source",
                  "sourceType": {}
                },
                "DamageFlat": {
                  "operator": "Variables[0] (_MaxHp) || Variables[1] ({[Skill03[0]]}) || MUL || Constants[0] (5) || DIV || RETURN",
                  "displayLines": "((_MaxHp * {[Skill03[0]]}) / 5)",
                  "constants": [
                    5
                  ],
                  "variables": [
                    "_MaxHp",
                    "{[Skill03[0]]}"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "attackType": "True DMG"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Irontomb: Part 1}} + {{Irontomb: Part 2}}"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxHp",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": {
                  "name": "Damage Type Source",
                  "sourceType": {}
                },
                "DamageFlat": {
                  "operator": "Variables[0] (_MaxHp) || Variables[1] ({[Skill03[2]]}) || MUL || Constants[0] (5) || DIV || RETURN",
                  "displayLines": "((_MaxHp * {[Skill03[2]]}) / 5)",
                  "constants": [
                    5
                  ],
                  "variables": [
                    "_MaxHp",
                    "{[Skill03[2]]}"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "attackType": "True DMG"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-741050485\">BattleEvent_60031_Week_Damage</a>",
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Irontomb: Core}}"
          },
          "maxTargets": 1,
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxHp",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": {
                  "name": "Damage Type Source",
                  "sourceType": {}
                },
                "DamageFlat": {
                  "operator": "Variables[0] (_MaxHp) || Variables[1] ({[Skill03[0]]}) || MUL || Constants[0] (5) || DIV || RETURN",
                  "displayLines": "((_MaxHp * {[Skill03[0]]}) / 5)",
                  "constants": [
                    5
                  ],
                  "variables": [
                    "_MaxHp",
                    "{[Skill03[0]]}"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "attackType": "True DMG"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Irontomb: Part 1}}"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxHp",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": {
                  "name": "Damage Type Source",
                  "sourceType": {}
                },
                "DamageFlat": {
                  "operator": "Variables[0] (_MaxHp) || Variables[1] ({[Skill03[2]]}) || MUL || Constants[0] (5) || DIV || RETURN",
                  "displayLines": "((_MaxHp * {[Skill03[2]]}) / 5)",
                  "constants": [
                    5
                  ],
                  "variables": [
                    "_MaxHp",
                    "{[Skill03[2]]}"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "attackType": "True DMG"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Irontomb: Part 2}}"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxHp",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": {
                  "name": "Damage Type Source",
                  "sourceType": {}
                },
                "DamageFlat": {
                  "operator": "Variables[0] (_MaxHp) || Variables[1] ({[Skill03[2]]}) || MUL || Constants[0] (5) || DIV || RETURN",
                  "displayLines": "((_MaxHp * {[Skill03[2]]}) / 5)",
                  "constants": [
                    5
                  ],
                  "variables": [
                    "_MaxHp",
                    "{[Skill03[2]]}"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "attackType": "True DMG"
              }
            }
          ]
        }
      ]
    }
  ],
  "references": []
}