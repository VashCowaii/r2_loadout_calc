const configAbility = {
  "fileName": "Gilgamesh_Gilgamesh_Insert_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1696185898\">Gilgamesh_InsertCheckSelf</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Gilgamesh: Saber}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1420871220\">Gilgamesh_SaberBonus</a>"
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "AttackScaling": {
        "DamageType": "Thunder",
        "Damage": {
          "operator": "Variables[0] (4) || RETURN",
          "displayLines": "4",
          "constants": [],
          "variables": [
            4
          ]
        },
        "HitSplit": 0.2,
        "Toughness": {
          "operator": "Variables[0] (AOE Toughness Value) || RETURN",
          "displayLines": "AOE Toughness Value",
          "constants": [],
          "variables": [
            "AOE Toughness Value"
          ]
        },
        "Tags": [
          "Joint-Attack"
        ],
        "attackType": "Follow-up",
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "AttackScaling": {
        "DamageType": "Thunder",
        "Damage": {
          "operator": "Variables[0] (4) || RETURN",
          "displayLines": "4",
          "constants": [],
          "variables": [
            4
          ]
        },
        "HitSplit": 0.2,
        "Toughness": {
          "operator": "Variables[0] (AOE Toughness Value) || RETURN",
          "displayLines": "AOE Toughness Value",
          "constants": [],
          "variables": [
            "AOE Toughness Value"
          ]
        },
        "Tags": [
          "Joint-Attack"
        ],
        "attackType": "Follow-up",
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "AttackScaling": {
        "DamageType": "Thunder",
        "Damage": {
          "operator": "Variables[0] (4) || RETURN",
          "displayLines": "4",
          "constants": [],
          "variables": [
            4
          ]
        },
        "HitSplit": 0.2,
        "Toughness": {
          "operator": "Variables[0] (AOE Toughness Value) || RETURN",
          "displayLines": "AOE Toughness Value",
          "constants": [],
          "variables": [
            "AOE Toughness Value"
          ]
        },
        "Tags": [
          "Joint-Attack"
        ],
        "attackType": "Follow-up",
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "AttackScaling": {
        "DamageType": "Thunder",
        "Damage": {
          "operator": "Variables[0] (4) || RETURN",
          "displayLines": "4",
          "constants": [],
          "variables": [
            4
          ]
        },
        "HitSplit": 0.4,
        "Toughness": {
          "operator": "Variables[0] (AOE Toughness Value) || RETURN",
          "displayLines": "AOE Toughness Value",
          "constants": [],
          "variables": [
            "AOE Toughness Value"
          ]
        },
        "Tags": [
          "Joint-Attack"
        ],
        "attackType": "Follow-up",
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Gilgamesh: Saber}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1481096050\">Gilgamesh_SaberBonus2</a>"
    },
    "Trigger: Attack End",
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"-1526947844\">function_Gilgamesh_KingCount</a>",
      "variables": {
        "KingCountAdd": {
          "operator": "Variables[0] (3) || RETURN",
          "displayLines": "3",
          "constants": [],
          "variables": [
            3
          ]
        }
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Saber_Chain",
      "value": {
        "operator": "Constants[0] (0) || RETURN",
        "displayLines": "0",
        "constants": [
          0
        ],
        "variables": []
      }
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  }
}