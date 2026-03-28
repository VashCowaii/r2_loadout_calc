const configAbility = {
  "fileName": "3025016_Monster_W3_Sunday_Ability08_Part01",
  "childAbilityList": [
    "3025016_Monster_W3_Sunday_Ability08_Part01",
    "3025016_Monster_W3_Sunday_Ability08_Part02",
    "3025016_Monster_W3_Sunday_Ability08_Camera",
    "3025016_Monster_W3_Sunday_Ability08_InsertAbility"
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
      "ability": "Monster_W3_Sunday_Ability08_Part02",
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