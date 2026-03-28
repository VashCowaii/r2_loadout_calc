const configAbility = {
  "fileName": "3024020_Monster_W3_Sam_Ability06_Part01",
  "childAbilityList": [
    "3024020_Monster_W3_Sam_Ability06_Camera",
    "3024020_Monster_W3_Sam_Ability06_Part01",
    "3024020_Monster_W3_Sam_Ability06_Part02"
  ],
  "skillTrigger": "Skill06",
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
      "ability": "Monster_W3_Sam_Ability06_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  },
  "references": []
}