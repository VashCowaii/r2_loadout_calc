const configAbility = {
  "fileName": "Yukong_Yukong_Ability02_AddFlower",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable with Added Value",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "YuKong_Flower_Count",
      "context": "TargetEntity",
      "value": {
        "operator": "Variables[0] (2) || RETURN",
        "displayLines": "2",
        "constants": [],
        "variables": [
          2
        ]
      },
      "max": {
        "operator": "Variables[0] (2) || RETURN",
        "displayLines": "2",
        "constants": [],
        "variables": [
          2
        ]
      }
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": {
        "operator": "Variables[0] (YuKong_Flower_Count) || RETURN",
        "displayLines": "YuKong_Flower_Count",
        "constants": [],
        "variables": [
          "YuKong_Flower_Count"
        ]
      },
      "maximum": {
        "operator": "Variables[0] (2) || RETURN",
        "displayLines": "2",
        "constants": [],
        "variables": [
          2
        ]
      },
      "assignState": "True",
      "priorState": "Active",
      "bar#": 3,
      "cooldown": 0
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{All Team Members with Unselectables}}"
      },
      "modifier": "Yukong_Flower",
      "valuePerStack": {
        "MDF_AttackAddedRatio": {
          "operator": "Variables[0] (0.8) || RETURN",
          "displayLines": "0.8",
          "constants": [],
          "variables": [
            0.8
          ]
        },
        "MDF_Eidolon4AddedRatio": {
          "operator": "Variables[0] (0.3) || RETURN",
          "displayLines": "0.3",
          "constants": [],
          "variables": [
            0.3
          ]
        },
        "MDF_PointB3Amount": {
          "operator": "Variables[0] (2) || RETURN",
          "displayLines": "2",
          "constants": [],
          "variables": [
            2
          ]
        },
        "MDF_FromUltraMark": 0
      }
    }
  ],
  "references": []
}