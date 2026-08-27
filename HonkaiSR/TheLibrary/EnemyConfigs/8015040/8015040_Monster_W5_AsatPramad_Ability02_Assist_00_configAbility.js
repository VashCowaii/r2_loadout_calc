const configAbility = {
  "fileName": "8015040_Monster_W5_AsatPramad_Ability02_Assist_00",
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
      "AttackScaling": {
        "DamageType": "Quantum",
        "Damage": {
          "operator": "Variables[0] (UnusedUnderThisBase_13353) || Constants[0] (3) || DIV || RETURN",
          "displayLines": "(UnusedUnderThisBase_13353 / 3)",
          "constants": [
            3
          ],
          "variables": [
            "UnusedUnderThisBase_13353"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "(1 / 3)* 100%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "AttackScaling": {
        "DamageType": "Fire",
        "Damage": {
          "operator": "Variables[0] (UnusedUnderThisBase_13353) || Constants[0] (3) || DIV || RETURN",
          "displayLines": "(UnusedUnderThisBase_13353 / 3)",
          "constants": [
            3
          ],
          "variables": [
            "UnusedUnderThisBase_13353"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "(1 / 3)* 100%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] (UnusedUnderThisBase_13353) || Constants[0] (3) || DIV || RETURN",
          "displayLines": "(UnusedUnderThisBase_13353 / 3)",
          "constants": [
            3
          ],
          "variables": [
            "UnusedUnderThisBase_13353"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "(1 / 3)* 100%"
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