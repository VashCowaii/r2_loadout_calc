const configAbility = {
  "fileName": "8002101_Monster_XP_Minion04_06_Passive01",
  "skillTrigger": "PassiveSkill",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Enemy_XP_Minion04_01_EscapingCharge01"
    }
  ],
  "references": []
}