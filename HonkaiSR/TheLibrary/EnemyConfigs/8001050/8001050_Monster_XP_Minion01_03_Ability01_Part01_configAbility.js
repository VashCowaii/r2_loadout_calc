const configAbility = {
  "fileName": "8001050_Monster_XP_Minion01_03_Ability01_Part01",
  "childAbilityList": [
    "8001050_Monster_XP_Minion01_03_Ability01_Part01",
    "8001050_Monster_XP_Minion01_03_Ability01_Part02",
    "8001050_Monster_XP_Minion01_03_Ability01_Camera"
  ],
  "skillTrigger": "Skill01",
  "abilityType": "Basic ATK",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Monster_XP_Minion01_03_Ability01_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}