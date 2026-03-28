const configAbility = {
  "fileName": "3024033_Monster_W3_Sam_01_Ability07_Part01",
  "childAbilityList": [
    "3024033_Monster_W3_Sam_01_Ability07_Camera",
    "3024033_Monster_W3_Sam_01_Ability07_Part01",
    "3024033_Monster_W3_Sam_01_Ability07_Part02"
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
      "inherentTarget": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "ability": "Monster_W3_Sam_01_Ability07_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  },
  "references": []
}