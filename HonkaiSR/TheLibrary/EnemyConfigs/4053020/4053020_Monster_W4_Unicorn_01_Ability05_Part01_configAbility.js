const configAbility = {
  "fileName": "4053020_Monster_W4_Unicorn_01_Ability05_Part01",
  "childAbilityList": [
    "4053020_Monster_W4_Unicorn_01_Ability05_Part01",
    "4053020_Monster_W4_Unicorn_01_Ability05_Part02",
    "4053020_Monster_W4_Unicorn_01_Ability05_Insert_Part01",
    "4053020_Monster_W4_Unicorn_01_Ability05_Insert_Part02"
  ],
  "skillTrigger": "Skill05",
  "abilityType": "Skill",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Monster_W4_Unicorn_01_Ability05_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}