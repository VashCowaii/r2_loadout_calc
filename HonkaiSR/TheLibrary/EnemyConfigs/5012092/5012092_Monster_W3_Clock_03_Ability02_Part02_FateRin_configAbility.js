const configAbility = {
  "fileName": "5012092_Monster_W3_Clock_03_Ability02_Part02_FateRin",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Trigger: Attack End",
    {
      "name": "Change Entity Turn-State",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "phase": "Phase_normal"
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": []
}