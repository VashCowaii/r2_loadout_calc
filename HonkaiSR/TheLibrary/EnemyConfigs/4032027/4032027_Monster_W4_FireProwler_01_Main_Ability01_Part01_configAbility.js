const configAbility = {
  "fileName": "4032027_Monster_W4_FireProwler_01_Main_Ability01_Part01",
  "childAbilityList": [
    "4032027_Monster_W4_FireProwler_01_Main_Ability01_Part01",
    "4032027_Monster_W4_FireProwler_01_Main_Ability01_Part02",
    "4032027_Monster_W4_FireProwler_01_Main_Ability01_Camera"
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
      "ability": "Monster_W4_FireProwler_01_Main_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": []
}