const configAbility = {
  "fileName": "3024021_Monster_W3_Sam_Ability02_Part01",
  "childAbilityList": [
    "3024021_Monster_W3_Sam_Ability02_Camera",
    "3024021_Monster_W3_Sam_Ability02_Part01",
    "3024021_Monster_W3_Sam_Ability02_Part02"
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
      "ability": "Monster_W3_Sam_Ability02_Part02",
      "isTrigger": true
    },
    "Deleted bullshit",
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": []
}