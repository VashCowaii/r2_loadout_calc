const configAbility = {
  "fileName": "TrailblazerRemembrance_PlayerBoy_30_Ability11_Part02",
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
      "modifier": "<a class=\"gModGreen\" id=\"-1976946957\">PlayerBoy_30_UltraState</a>[<span class=\"descriptionNumberColor\">Epic</span>]",
      "addStacksPerTrigger": -1,
      "silentAdd": true
    },
    {
      "name": "Dispel Debuffs",
      "target": {
        "name": "Target Name",
        "target": "{{Caster's Memosprite}}"
      },
      "toRemove": [
        "STAT_CTRL"
      ]
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Ice",
        "Damage": {
          "displayLines": "1.2"
        },
        "Toughness": {
          "displayLines": "(AOE Toughness Value / 2)"
        },
        "Tags": [
          "Joint-Attack"
        ],
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "Trigger: Attack End",
      "skipDeathSettle": true
    },
    {
      "name": "Define Custom Variable with Added Value",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}.[[getMemosprite]]"
      },
      "variableName": "CurEnergy",
      "context": "TargetEntity",
      "value": {
        "displayLines": "(0.1 * 100)"
      }
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}