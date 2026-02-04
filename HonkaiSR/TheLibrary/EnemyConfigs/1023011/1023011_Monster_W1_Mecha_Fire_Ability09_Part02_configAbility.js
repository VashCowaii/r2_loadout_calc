const configAbility = {
  "fileName": "1023011_Monster_W1_Mecha_Fire_Ability09_Part02",
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
      "modifier": "Monster_W1_Mecha04_01_HeadEffect"
    },
    "Trigger: Ability End"
  ],
  "references": []
}