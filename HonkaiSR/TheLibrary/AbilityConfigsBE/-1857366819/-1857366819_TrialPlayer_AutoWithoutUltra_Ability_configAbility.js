const configAbility = {
  "fileName": "-1857366819_TrialPlayer_AutoWithoutUltra_Ability",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Switch to Action/Ability Context",
      "target": {
        "name": "Target Name",
        "target": "{{Modifier Holder}}"
      }
    },
    {
      "name": "Update Energy Value",
      "on": {
        "name": "Target Name",
        "target": "{{Modifier Holder}}"
      },
      "value": 0,
      "adjustment": "Set",
      "ignoreBlock": true
    },
    {
      "name": "Disable Abilities",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "abilityTypes": null,
      "controlTypes": [
        "ControlSkill03"
      ]
    }
  ],
  "references": []
}