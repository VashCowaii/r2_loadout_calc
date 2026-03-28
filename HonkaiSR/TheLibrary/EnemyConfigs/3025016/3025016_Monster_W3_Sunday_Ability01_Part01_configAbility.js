const configAbility = {
  "fileName": "3025016_Monster_W3_Sunday_Ability01_Part01",
  "childAbilityList": [
    "3025016_Monster_W3_Sunday_Ability01_Part01",
    "3025016_Monster_W3_Sunday_Ability01_Part02",
    "3025016_Monster_W3_Sunday_Ability01_Camera"
  ],
  "skillTrigger": "Skill01",
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
      "ability": "Monster_W3_Sunday_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": []
}