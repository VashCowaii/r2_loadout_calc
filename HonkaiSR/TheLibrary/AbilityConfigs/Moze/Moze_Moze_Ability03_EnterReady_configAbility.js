const configAbility = {
  "fileName": "Moze_Moze_Ability03_EnterReady",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "Moze_Ability02_InShadowModifier"
      }
    }
  ],
  "references": []
}