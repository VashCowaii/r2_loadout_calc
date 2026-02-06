const configAbility = {
  "fileName": "4012077_Monster_W4_PolluxPart_IF_Ability02_L_Part02",
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
        },
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
              "operator": "Variables[0] (_MaxHP) || Variables[1] ({[Skill02[2]]}) || MUL || RETURN",
              "displayLines": "(_MaxHP * {[Skill02[2]]})",
              "constants": [],
              "variables": [
                "_MaxHP",
                "{[Skill02[2]]}"
              ]
            },
            "dmgFormulaFinal": "Converted DMG Base",
            "Toughness": null,
            "Tags": null,
            "behaviorTag": "DirectlyLoseHpHit",
            "attackType": "Basic ATK"
          }
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
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
              "displayLines": "{[Skill02[1]]}",
              "constants": [],
              "variables": [
                "{[Skill02[1]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
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
              "operator": "Variables[0] (_MaxHP) || Variables[1] ({[Skill02[3]]}) || MUL || RETURN",
              "displayLines": "(_MaxHP * {[Skill02[3]]})",
              "constants": [],
              "variables": [
                "_MaxHP",
                "{[Skill02[3]]}"
              ]
            },
            "dmgFormulaFinal": "Converted DMG Base",
            "Toughness": null,
            "Tags": null,
            "behaviorTag": "DirectlyLoseHpHit",
            "attackType": "Basic ATK"
          }
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
      "functionName": "TaskList_Monster_W4_Pollux_IF_Strengthen_EggAbsorb_FX"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "TaskList_Monster_W4_Pollux_IF_Strengthen_EggAbsorb"
    },
    "Trigger: Ability End"
  ],
  "references": []
}