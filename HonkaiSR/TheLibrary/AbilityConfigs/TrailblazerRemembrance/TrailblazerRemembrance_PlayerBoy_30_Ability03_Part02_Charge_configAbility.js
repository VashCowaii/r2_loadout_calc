const configAbility = {
  "fileName": "TrailblazerRemembrance_PlayerBoy_30_Ability03_Part02_Charge",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable with Added Value",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}.[[getMemosprite]]"
      },
      "variableName": "CurEnergy",
      "context": "TargetEntity",
      "value": {
        "displayLines": "(0.4 * 100)"
      }
    },
    {
      "name": "Update Energy",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "valuePercent": 1,
      "ofAbilitySplit": true,
      "isFixed": "* ERR"
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  }
}