const configAbility = {
  "fileName": "TrailblazerRemembrance_PlayerBoy_30_Ability21_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Heal",
      "target": "Caster (Memosprite)",
      "healPercent": {
        "operator": "Variables[0] (0.6) || RETURN",
        "displayLines": "0.6",
        "constants": [],
        "variables": [
          0.6
        ]
      },
      "EnergyGainPercent": "100%",
      "formula": "Heal from Target MaxHP"
    },
    {
      "name": "Define Custom Variable with Added Value",
      "target": "Caster's Memosprite",
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
    },
    {
      "name": "Clear DMG Numbers(UI)",
      "target": "Caster (Memosprite)"
    },
    "Trigger: Ability End"
  ],
  "references": []
}