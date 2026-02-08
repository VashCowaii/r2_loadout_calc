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
          "operator": "Variables[0] (1.2) || RETURN",
          "displayLines": "1.2",
          "constants": [],
          "variables": [
            1.2
          ]
        },
        "Toughness": {
          "operator": "Variables[0] (AOE Toughness Value) || Constants[0] (2) || DIV || RETURN",
          "displayLines": "(AOE Toughness Value / 2)",
          "constants": [
            2
          ],
          "variables": [
            "AOE Toughness Value"
          ]
        },
        "Tags": null,
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
        "operator": "Variables[0] (0.1) || Constants[0] (100) || MUL || RETURN",
        "displayLines": "(0.1 * 100)",
        "constants": [
          100
        ],
        "variables": [
          0.1
        ]
      }
    }
  ],
  "references": []
}