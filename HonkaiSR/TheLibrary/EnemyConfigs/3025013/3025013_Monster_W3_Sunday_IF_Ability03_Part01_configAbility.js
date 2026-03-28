const configAbility = {
  "fileName": "3025013_Monster_W3_Sunday_IF_Ability03_Part01",
  "childAbilityList": [
    "3025013_Monster_W3_Sunday_IF_Ability03_Part01",
    "3025013_Monster_W3_Sunday_IF_Ability03_Part02",
    "3025013_Monster_W3_Sunday_Ability03_Camera"
  ],
  "skillTrigger": "Skill03",
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
      "ability": "Monster_W3_Sunday_IF_Ability03_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": []
}