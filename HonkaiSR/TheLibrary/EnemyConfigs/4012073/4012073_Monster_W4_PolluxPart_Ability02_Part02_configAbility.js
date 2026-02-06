const configAbility = {
  "fileName": "4012073_Monster_W4_PolluxPart_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "ifTargetFound": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "value1": "CurrentHP%",
            "compareType": ">=",
            "value2": {
              "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
              "displayLines": "{[Skill02[2]]}",
              "constants": [],
              "variables": [
                "{[Skill02[2]]}"
              ]
            }
          },
          "passed": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
                  "displayLines": "{[Skill02[3]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill02[3]]}"
                  ]
                },
                "DamageFlat": {
                  "operator": "Variables[0] (_MaxHP) || Variables[1] ({[Skill02[1]]}) || MUL || RETURN",
                  "displayLines": "(_MaxHP * {[Skill02[1]]})",
                  "constants": [],
                  "variables": [
                    "_MaxHP",
                    "{[Skill02[1]]}"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ],
          "failed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                  "displayLines": "{[Skill02[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill02[0]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Ability Targets Adjacent(Blast)}}"
      },
      "ifTargetFound": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "value1": "CurrentHP%",
            "compareType": ">=",
            "value2": {
              "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
              "displayLines": "{[Skill02[2]]}",
              "constants": [],
              "variables": [
                "{[Skill02[2]]}"
              ]
            }
          },
          "passed": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
                  "displayLines": "{[Skill02[3]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill02[3]]}"
                  ]
                },
                "DamageFlat": {
                  "operator": "Variables[0] (_MaxHP) || Variables[1] ({[Skill02[1]]}) || MUL || RETURN",
                  "displayLines": "(_MaxHP * {[Skill02[1]]})",
                  "constants": [],
                  "variables": [
                    "_MaxHP",
                    "{[Skill02[1]]}"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ],
          "failed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                  "displayLines": "{[Skill02[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill02[0]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        }
      ]
    },
    "Trigger: Attack End",
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Target Left of Ability Target(ST)}}"
      },
      "maxTargets": 1
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Target Right of Ability Target(ST)}}"
      },
      "maxTargets": 1
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "Monster_W4_PolluxPart_Strengthen_EggAbsorb_FX"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "Monster_W4_PolluxPart_Strengthen_EggAbsorb"
    },
    "Trigger: Ability End"
  ],
  "references": []
}