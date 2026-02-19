const configAbility = {
  "fileName": "4013010_Monster_W4_Claymore_Ability04_Part01",
  "childAbilityList": [
    "4013010_Monster_W4_Claymore_Ability04_Camera",
    "4013010_Monster_W4_Claymore_Ability04_Part01",
    "4013010_Monster_W4_Claymore_Ability04_Part02"
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
      "ability": "Monster_W4_Claymore_Ability04_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}