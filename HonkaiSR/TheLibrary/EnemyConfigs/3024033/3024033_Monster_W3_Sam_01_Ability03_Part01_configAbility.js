const configAbility = {
  "fileName": "3024033_Monster_W3_Sam_01_Ability03_Part01",
  "childAbilityList": [
    "3024033_Monster_W3_Sam_01_Ability03_Camera",
    "3024033_Monster_W3_Sam_01_Ability03_Part01",
    "3024033_Monster_W3_Sam_01_Ability03_Part02"
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
      "ability": "Monster_W3_Sam_01_Ability03_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": []
}