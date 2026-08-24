const configAbility = {
  "fileName": "4014034_Monster_W4_Pollux_Ability06_Part02_FateRin",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Define Custom Variable",
      "variableName": "IsNeedFade",
      "value": 1
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"599310144\">Monster_W4_Pollux_FX_Ground</a>"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "ifTargetFound": [
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
            "DamageFlat": {
              "operator": "Variables[0] (_MaxHP) || Variables[1] ({[Skill06[0]]}) || MUL || Constants[0] (4) || DIV || Constants[1] (2) || DIV || RETURN",
              "displayLines": "(((_MaxHP * {[Skill06[0]]}) / 4) / 2)",
              "constants": [
                4,
                2
              ],
              "variables": [
                "_MaxHP",
                "{[Skill06[0]]}"
              ]
            },
            "dmgFormulaFinal": "Converted DMG Base",
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "25%"
          }
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "ifTargetFound": [
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
            "DamageFlat": {
              "operator": "Variables[0] (_MaxHP) || Variables[1] ({[Skill06[0]]}) || MUL || Constants[0] (4) || DIV || Constants[1] (2) || DIV || RETURN",
              "displayLines": "(((_MaxHP * {[Skill06[0]]}) / 4) / 2)",
              "constants": [
                4,
                2
              ],
              "variables": [
                "_MaxHP",
                "{[Skill06[0]]}"
              ]
            },
            "dmgFormulaFinal": "Converted DMG Base",
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "25%"
          }
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "ifTargetFound": [
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
            "DamageFlat": {
              "operator": "Variables[0] (_MaxHP) || Variables[1] ({[Skill06[0]]}) || MUL || Constants[0] (4) || DIV || Constants[1] (2) || DIV || RETURN",
              "displayLines": "(((_MaxHP * {[Skill06[0]]}) / 4) / 2)",
              "constants": [
                4,
                2
              ],
              "variables": [
                "_MaxHP",
                "{[Skill06[0]]}"
              ]
            },
            "dmgFormulaFinal": "Converted DMG Base",
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "25%"
          }
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "ifTargetFound": [
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
            "DamageFlat": {
              "operator": "Variables[0] (_MaxHP) || Variables[1] ({[Skill06[0]]}) || MUL || Constants[0] (4) || DIV || Constants[1] (2) || DIV || RETURN",
              "displayLines": "(((_MaxHP * {[Skill06[0]]}) / 4) / 2)",
              "constants": [
                4,
                2
              ],
              "variables": [
                "_MaxHP",
                "{[Skill06[0]]}"
              ]
            },
            "dmgFormulaFinal": "Converted DMG Base",
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "25%"
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
      "modifier": "<a class=\"gModGreen\" id=\"599310144\">Monster_W4_Pollux_FX_Ground</a>"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "IsNeedFade",
      "value": 0
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}