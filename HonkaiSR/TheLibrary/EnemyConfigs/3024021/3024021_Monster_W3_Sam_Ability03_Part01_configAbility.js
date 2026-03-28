const configAbility = {
  "fileName": "3024021_Monster_W3_Sam_Ability03_Part01",
  "childAbilityList": [
    "3024021_Monster_W3_Sam_Ability03_Camera",
    "3024021_Monster_W3_Sam_Ability03_Part01",
    "3024021_Monster_W3_Sam_Ability03_Part02"
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
      "ability": "Monster_W3_Sam_Ability03_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}