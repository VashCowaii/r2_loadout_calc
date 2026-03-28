const configAbility = {
  "fileName": "4032021_Monster_W4_FireProwler_01_IF_Ability03_Part01",
  "childAbilityList": [
    "4032021_Monster_W4_FireProwler_01_IF_Ability03_Part01",
    "4032021_Monster_W4_FireProwler_01_IF_Ability03_Part02",
    "4032021_Monster_W4_FireProwler_01_IF_Ability03_Camera"
  ],
  "skillTrigger": "Skill03",
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
      "ability": "Monster_W4_FireProwler_01_IF_Ability03_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "realTargetData": {
    "primaryTarget": "Select Hostile Target"
  },
  "references": []
}