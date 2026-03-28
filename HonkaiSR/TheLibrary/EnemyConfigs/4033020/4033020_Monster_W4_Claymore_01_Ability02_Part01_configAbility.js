const configAbility = {
  "fileName": "4033020_Monster_W4_Claymore_01_Ability02_Part01",
  "childAbilityList": [
    "4033020_Monster_W4_Claymore_01_Ability02_Camera",
    "4033020_Monster_W4_Claymore_01_Ability02_Part01",
    "4033020_Monster_W4_Claymore_01_Ability02_Part02",
    "4033020_Monster_W4_Claymore_01_Ability02_InsertAbility_Part01",
    "4033020_Monster_W4_Claymore_01_Ability02_InsertAbility_Part02",
    "4033020_Monster_W4_Claymore_01_Ability02_InsertAbility_Camera"
  ],
  "skillTrigger": "Skill02",
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
      "ability": "Monster_W4_Claymore_01_Ability02_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": []
}