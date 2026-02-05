const configAbility = {
  "fileName": "8002100_Monster_XP_Minion04_05_Passive01",
  "skillTrigger": "PassiveSkill",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Enemy_XP_Minion04_01_EscapingCharge01"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Enemy_XP_Minion04_01_EscapingCharge02"
    }
  ],
  "references": []
}