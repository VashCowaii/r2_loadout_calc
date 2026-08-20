const configAbility = {
  "fileName": "4014034_Monster_W4_Pollux_Ability05_Part02_FateRin",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable with Stat",
      "target": {
        "name": "Add Target by Unique Identifier",
        "identifier": "Activity_FateRin_BigTurn_LightTeamAgent"
      },
      "variableName": "_TargetCurrentHp",
      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
    },
    "Ability Start",
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Pollux Slumber Target 1}}"
      },
      "ifTargetFound": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "DamageFlat": {
              "operator": "Variables[0] (_TargetCurrentHp) || Variables[1] ({[Skill05[0]]}) || MUL || Constants[0] (4) || DIV || RETURN",
              "displayLines": "((_TargetCurrentHp * {[Skill05[0]]}) / 4)",
              "constants": [
                4
              ],
              "variables": [
                "_TargetCurrentHp",
                "{[Skill05[0]]}"
              ]
            },
            "cantKill": true,
            "dmgFormulaFinal": "Converted DMG Base",
            "HitSplit": 0.25,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Pollux Slumber Target 2}}"
      },
      "ifTargetFound": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "DamageFlat": {
              "operator": "Variables[0] (_TargetCurrentHp) || Variables[1] ({[Skill05[0]]}) || MUL || Constants[0] (4) || DIV || RETURN",
              "displayLines": "((_TargetCurrentHp * {[Skill05[0]]}) / 4)",
              "constants": [
                4
              ],
              "variables": [
                "_TargetCurrentHp",
                "{[Skill05[0]]}"
              ]
            },
            "cantKill": true,
            "dmgFormulaFinal": "Converted DMG Base",
            "HitSplit": 0.25,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Pollux Slumber Target 1}}"
      },
      "ifTargetFound": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "DamageFlat": {
              "operator": "Variables[0] (_TargetCurrentHp) || Variables[1] ({[Skill05[0]]}) || MUL || Constants[0] (4) || DIV || RETURN",
              "displayLines": "((_TargetCurrentHp * {[Skill05[0]]}) / 4)",
              "constants": [
                4
              ],
              "variables": [
                "_TargetCurrentHp",
                "{[Skill05[0]]}"
              ]
            },
            "cantKill": true,
            "dmgFormulaFinal": "Converted DMG Base",
            "HitSplit": 0.25,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Pollux Slumber Target 2}}"
      },
      "ifTargetFound": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "DamageFlat": {
              "operator": "Variables[0] (_TargetCurrentHp) || Variables[1] ({[Skill05[0]]}) || MUL || Constants[0] (4) || DIV || RETURN",
              "displayLines": "((_TargetCurrentHp * {[Skill05[0]]}) / 4)",
              "constants": [
                4
              ],
              "variables": [
                "_TargetCurrentHp",
                "{[Skill05[0]]}"
              ]
            },
            "cantKill": true,
            "dmgFormulaFinal": "Converted DMG Base",
            "HitSplit": 0.25,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Pollux Slumber Target 1}} + {{Pollux Slumber Target 2}}"
      },
      "ifTargetFound": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "DamageFlat": {
              "operator": "Variables[0] (_TargetCurrentHp) || Variables[1] ({[Skill05[0]]}) || MUL || Constants[0] (4) || DIV || RETURN",
              "displayLines": "((_TargetCurrentHp * {[Skill05[0]]}) / 4)",
              "constants": [
                4
              ],
              "variables": [
                "_TargetCurrentHp",
                "{[Skill05[0]]}"
              ]
            },
            "cantKill": true,
            "dmgFormulaFinal": "Converted DMG Base",
            "HitSplit": 0.25,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Pollux Slumber Target 2}}"
      },
      "ifTargetFound": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "DamageFlat": {
              "operator": "Variables[0] (_TargetCurrentHp) || Variables[1] ({[Skill05[0]]}) || MUL || Constants[0] (4) || DIV || RETURN",
              "displayLines": "((_TargetCurrentHp * {[Skill05[0]]}) / 4)",
              "constants": [
                4
              ],
              "variables": [
                "_TargetCurrentHp",
                "{[Skill05[0]]}"
              ]
            },
            "cantKill": true,
            "dmgFormulaFinal": "Converted DMG Base",
            "HitSplit": 0.25,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Pollux Slumber Target 1}}"
      },
      "ifTargetFound": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "DamageFlat": {
              "operator": "Variables[0] (_TargetCurrentHp) || Variables[1] ({[Skill05[0]]}) || MUL || Constants[0] (4) || DIV || RETURN",
              "displayLines": "((_TargetCurrentHp * {[Skill05[0]]}) / 4)",
              "constants": [
                4
              ],
              "variables": [
                "_TargetCurrentHp",
                "{[Skill05[0]]}"
              ]
            },
            "cantKill": true,
            "dmgFormulaFinal": "Converted DMG Base",
            "HitSplit": 0.25,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        }
      ]
    },
    "Trigger: Attack End",
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-825507006\">Monster_W4_Pollux_Strengthen_FateRin</a>"
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}