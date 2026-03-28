const configAbility = {
  "fileName": "2034012_Monster_W2_LycanKing_RLBoss_Ability07_Part01",
  "childAbilityList": [
    "2034012_Monster_W2_LycanKing_Ability07_Part01",
    "2034012_Monster_W2_LycanKing_Ability07_Part02",
    "2034012_Monster_W2_LycanKing_Ability07_Camera",
    "2034012_Monster_W2_LycanKing_RLBoss_Ability07_Part01",
    "2034012_Monster_W2_LycanKing_RLBoss_Ability07_Part02"
  ],
  "skillTrigger": "Skill07",
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
      "ability": "Monster_W2_LycanKing_RLBoss_Ability07_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}