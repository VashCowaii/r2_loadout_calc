const configAbility = {
  "fileName": "4034018_Monster_W4_FireProwler_10_Main03_Ability06_Part01",
  "childAbilityList": [
    "4034018_Monster_W4_FireProwler_Ability06_Camera",
    "4034018_Monster_W4_FireProwler_10_Main03_Ability06_Part01",
    "4034018_Monster_W4_FireProwler_10_Main03_Ability06_Part02",
    "4034018_Monster_W4_FireProwler_10_Main03_Ability01_Assist",
    "4034018_Monster_W4_FireProwler_IF_Ability01_Assist_Camera",
    "4034018_Monster_W4_FireProwler_10_Main03_Ability02_Assist"
  ],
  "skillTrigger": "Skill06",
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
      "ability": "Monster_W4_FireProwler_10_Main03_Ability06_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}