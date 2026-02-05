const configAbility = {
  "fileName": "8032020_Monster_W1_Soldier01_04_Passive01",
  "skillTrigger": "PassiveSkill02",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Monster_W1_Soldier01_04_CoinPassive"
    }
  ],
  "references": []
}