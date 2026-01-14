const configAbility = {
  "fileName": "TrailblazerRemembrance_PlayerBoy_30_Ability03_Part02_Charge",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable with Added Value",
      "target": "Caster's Memosprite",
      "variableName": "CurEnergy",
      "context": "TargetEntity",
      "value": {
        "operator": "Variables[0] (0.4) || Constants[0] (100) || MUL || RETURN",
        "displayLines": "(0.4 * 100)",
        "constants": [
          100
        ],
        "variables": [
          0.4
        ]
      }
    },
    {
      "name": "Update Energy",
      "on": "Caster",
      "valuePercent": 1,
      "ofAbilitySplit": true,
      "isFixed": "* ERR"
    }
  ],
  "references": []
}