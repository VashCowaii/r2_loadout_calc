const configAbility = {
  "fileName": "5013012_Monster_W4_Claymore_02_Ability04_Part01",
  "childAbilityList": [
    "5013012_Monster_W4_Claymore_Ability04_Camera",
    "5013012_Monster_W4_Claymore_02_Ability04_Part01",
    "5013012_Monster_W4_Claymore_02_Ability04_Part02",
    "5013012_Monster_W4_Claymore_02_Ability04_Camera",
    "5013012_Monster_W4_Claymore_02_Ability042_Part01",
    "5013012_Monster_W4_Claymore_02_Ability042_Part02",
    "5013012_Monster_W4_Claymore_02_Ability042_Camera"
  ],
  "skillTrigger": "Skill04",
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
      "ability": "Monster_W4_Claymore_02_Ability04_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}