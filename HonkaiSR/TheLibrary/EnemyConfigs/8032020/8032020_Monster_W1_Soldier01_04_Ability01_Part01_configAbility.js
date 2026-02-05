const configAbility = {
  "fileName": "8032020_Monster_W1_Soldier01_04_Ability01_Part01",
  "childAbilityList": [
    "8032020_Monster_W1_Soldier01_04_Ability01_Part01",
    "8032020_Monster_W1_Soldier01_04_Ability01_Part02",
    "8032020_Monster_W1_Soldier01_04_Ability01_Camera"
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
      "ability": "Monster_W1_Soldier01_04_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}