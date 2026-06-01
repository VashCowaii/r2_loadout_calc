const configAbility = {
  "fileName": "DanHengIL_DanHengIL_Ability11_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "variableName": "Flag_AttackCount",
      "value": 0
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] (2.6) || RETURN",
          "displayLines": "2.6",
          "constants": [],
          "variables": [
            2.6
          ]
        },
        "HitSplit": 0.33,
        "Toughness": {
          "operator": "Variables[0] (ST Toughness Value) || RETURN",
          "displayLines": "ST Toughness Value",
          "constants": [],
          "variables": [
            "ST Toughness Value"
          ]
        },
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Flag_AttackCount",
      "value": {
        "operator": "Variables[0] (Flag_AttackCount) || Constants[0] (1) || ADD || RETURN",
        "displayLines": "(Flag_AttackCount + 1)",
        "constants": [
          1
        ],
        "variables": [
          "Flag_AttackCount"
        ]
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] (2.6) || RETURN",
          "displayLines": "2.6",
          "constants": [],
          "variables": [
            2.6
          ]
        },
        "HitSplit": 0.33,
        "Toughness": {
          "operator": "Variables[0] (ST Toughness Value) || RETURN",
          "displayLines": "ST Toughness Value",
          "constants": [],
          "variables": [
            "ST Toughness Value"
          ]
        },
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Flag_AttackCount",
      "value": {
        "operator": "Variables[0] (Flag_AttackCount) || Constants[0] (1) || ADD || RETURN",
        "displayLines": "(Flag_AttackCount + 1)",
        "constants": [
          1
        ],
        "variables": [
          "Flag_AttackCount"
        ]
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] (2.6) || RETURN",
          "displayLines": "2.6",
          "constants": [],
          "variables": [
            2.6
          ]
        },
        "HitSplit": 0.34,
        "Toughness": {
          "operator": "Variables[0] (ST Toughness Value) || RETURN",
          "displayLines": "ST Toughness Value",
          "constants": [],
          "variables": [
            "ST Toughness Value"
          ]
        },
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "Define Custom Variable",
      "variableName": "Flag_AttackCount",
      "value": {
        "operator": "Variables[0] (Flag_AttackCount) || Constants[0] (1) || ADD || RETURN",
        "displayLines": "(Flag_AttackCount + 1)",
        "constants": [
          1
        ],
        "variables": [
          "Flag_AttackCount"
        ]
      }
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1633577543\">DanHengIL_BPCost_1</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1683910400\">DanHengIL_BPCost_2</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1667132781\">DanHengIL_BPCost_3</a>"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "EXSkill01",
      "value": 0
    },
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}