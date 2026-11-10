const configAbility = {
  "fileName": "RinTohsaka_TohsakaRin_Insert_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1070852341\">TohsakaRin_Passive_Insert_CD</a>[<span class=\"descriptionNumberColor\">Freeform Tohsaka Style</span>]"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1693986363\">TohsakaRin_InsertCheckSelf</a>"
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "AttackScaling": {
        "DamageType": "Quantum",
        "Damage": {
          "displayLines": "3"
        },
        "HitSplit": 0.2,
        "Toughness": {
          "displayLines": "AOE Toughness Value"
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
        "DamageType": "Quantum",
        "Damage": {
          "displayLines": "3"
        },
        "HitSplit": 0.2,
        "Toughness": {
          "displayLines": "AOE Toughness Value"
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
        "DamageType": "Quantum",
        "Damage": {
          "displayLines": "3"
        },
        "HitSplit": 0.2,
        "Toughness": {
          "displayLines": "AOE Toughness Value"
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
        "DamageType": "Quantum",
        "Damage": {
          "displayLines": "3"
        },
        "HitSplit": 0.2,
        "Toughness": {
          "displayLines": "AOE Toughness Value"
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
        "DamageType": "Quantum",
        "Damage": {
          "displayLines": "3"
        },
        "HitSplit": 0.2,
        "Toughness": {
          "displayLines": "AOE Toughness Value"
        },
        "Tags": [
          "Joint-Attack"
        ],
        "attackType": "Follow-up",
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "Skill Points Modification",
      "adjustmentValue": {
        "displayLines": "4"
      },
      "adjustmentType": "+"
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  }
}