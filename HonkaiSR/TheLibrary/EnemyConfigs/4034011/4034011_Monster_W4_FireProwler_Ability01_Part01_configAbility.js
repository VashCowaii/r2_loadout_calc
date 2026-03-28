const configAbility = {
  "fileName": "4034011_Monster_W4_FireProwler_Ability01_Part01",
  "childAbilityList": [
    "4034011_Monster_W4_FireProwler_Ability01_Camera",
    "4034011_Monster_W4_FireProwler_Ability01_Part01",
    "4034011_Monster_W4_FireProwler_Ability01_Part02"
  ],
  "skillTrigger": "Skill01",
  "abilityType": "Skill",
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Deleted bullshit",
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Monster_W4_FireProwler_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": []
}