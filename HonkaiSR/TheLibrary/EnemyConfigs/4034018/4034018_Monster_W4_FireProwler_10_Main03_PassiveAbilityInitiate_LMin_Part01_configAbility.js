const configAbility = {
  "fileName": "4034018_Monster_W4_FireProwler_10_Main03_PassiveAbilityInitiate_LMin_Part01",
  "childAbilityList": [
    "4034018_Monster_W4_FireProwler_10_Main03_PassiveAbilityInitiate_LMin_Part01",
    "4034018_Monster_W4_FireProwler_10_Main03_PassiveAbilityInitiate_LMin_Part02",
    "4034018_Monster_W4_FireProwler_IF_PassiveAbilityInitiate_LMin_Camera",
    "4034018_Monster_W4_FireProwler_10_Main03_PassiveAbilityInitiate_Insert_LMin_Part01",
    "4034018_Monster_W4_FireProwler_10_Main03_PassiveAbilityInitiate_Insert_LMin_Part02"
  ],
  "skillTrigger": "Skill08",
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
      "ability": "Monster_W4_FireProwler_10_Main03_PassiveAbilityInitiate_LMin_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}