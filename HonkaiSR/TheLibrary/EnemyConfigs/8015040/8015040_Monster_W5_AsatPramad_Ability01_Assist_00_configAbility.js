const configAbility = {
  "fileName": "8015040_Monster_W5_AsatPramad_Ability01_Assist_00",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Quantum",
        "Damage": {
          "operator": "Variables[0] (UnusedUnderThisBase_13192) || RETURN",
          "displayLines": "UnusedUnderThisBase_13192",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_13192"
          ]
        },
        "HitSplit": {
          "operator": "Constants[0] (1) || Constants[1] (6) || DIV || RETURN",
          "displayLines": "(1 / 6)",
          "constants": [
            1,
            6
          ],
          "variables": []
        },
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Fire",
        "Damage": {
          "operator": "Variables[0] (UnusedUnderThisBase_13192) || RETURN",
          "displayLines": "UnusedUnderThisBase_13192",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_13192"
          ]
        },
        "HitSplit": {
          "operator": "Constants[0] (1) || Constants[1] (6) || DIV || RETURN",
          "displayLines": "(1 / 6)",
          "constants": [
            1,
            6
          ],
          "variables": []
        },
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] (UnusedUnderThisBase_13192) || RETURN",
          "displayLines": "UnusedUnderThisBase_13192",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_13192"
          ]
        },
        "HitSplit": {
          "operator": "Constants[0] (1) || Constants[1] (6) || DIV || RETURN",
          "displayLines": "(1 / 6)",
          "constants": [
            1,
            6
          ],
          "variables": []
        },
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Quantum",
        "Damage": {
          "operator": "Variables[0] (UnusedUnderThisBase_13192) || RETURN",
          "displayLines": "UnusedUnderThisBase_13192",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_13192"
          ]
        },
        "HitSplit": {
          "operator": "Constants[0] (1) || Constants[1] (6) || DIV || RETURN",
          "displayLines": "(1 / 6)",
          "constants": [
            1,
            6
          ],
          "variables": []
        },
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Fire",
        "Damage": {
          "operator": "Variables[0] (UnusedUnderThisBase_13192) || RETURN",
          "displayLines": "UnusedUnderThisBase_13192",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_13192"
          ]
        },
        "HitSplit": {
          "operator": "Constants[0] (1) || Constants[1] (6) || DIV || RETURN",
          "displayLines": "(1 / 6)",
          "constants": [
            1,
            6
          ],
          "variables": []
        },
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] (UnusedUnderThisBase_13192) || RETURN",
          "displayLines": "UnusedUnderThisBase_13192",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_13192"
          ]
        },
        "HitSplit": {
          "operator": "Constants[0] (1) || Constants[1] (6) || DIV || RETURN",
          "displayLines": "(1 / 6)",
          "constants": [
            1,
            6
          ],
          "variables": []
        },
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"-1545281796\">W5_AsatPramad_Part03PosResetAfterAbility</a>"
    }
  ],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  },
  "references": []
}