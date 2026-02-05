const configAbility = {
  "fileName": "8032010_Monster_W1_Soldier02_01_Passive01",
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
      "modifier": "Monster_W1_Soldier02_01_CoinPassive"
    }
  ],
  "references": []
}