const configAbility = {
  "fileName": "TrailblazerRemembrance_PlayerBoy_30_Ability21_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Heal",
      "target": {
        "name": "Target Name",
        "target": "{{Caster's Memosprite}}"
      },
      "healPercent": {
        "displayLines": "0.6"
      },
      "EnergyGainPercent": "100%",
      "formula": "Heal from Target MaxHP"
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
    },
    {
      "name": "Clear DMG Numbers(UI)",
      "target": {
        "name": "Target Name",
        "target": "{{Caster's Memosprite}}"
      }
    },
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}