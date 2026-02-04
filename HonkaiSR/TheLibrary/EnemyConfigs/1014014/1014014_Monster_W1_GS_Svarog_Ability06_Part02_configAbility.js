const configAbility = {
  "fileName": "1014014_Monster_W1_GS_Svarog_Ability06_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Svarog_Ability06_Bonus",
      "duration": 1
    },
    "Trigger: Ability End"
  ],
  "references": []
}