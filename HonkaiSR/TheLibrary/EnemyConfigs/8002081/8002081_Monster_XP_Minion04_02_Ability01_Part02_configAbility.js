const configAbility = {
  "fileName": "8002081_Monster_XP_Minion04_02_Ability01_Part02",
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
      "modifier": "Enemy_XP_Minion04_02_EscapingCharge01"
    },
    "Trigger: Ability End"
  ],
  "references": []
}