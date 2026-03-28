const configAbility = {
  "fileName": "3024023_Monster_W3_Sam_RLBoss_Ability07_Part01",
  "childAbilityList": [
    "3024023_Monster_W3_Sam_RLBoss_Ability07_Part01",
    "3024023_Monster_W3_Sam_RLBoss_Ability07_Part02",
    "3024023_Monster_W3_Sam_RLBoss_Ability07_Camera"
  ],
  "skillTrigger": "Skill07",
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
      "ability": "Monster_W3_Sam_RLBoss_Ability07_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": []
}