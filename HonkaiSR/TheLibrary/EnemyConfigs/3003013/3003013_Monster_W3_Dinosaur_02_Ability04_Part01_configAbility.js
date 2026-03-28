const configAbility = {
  "fileName": "3003013_Monster_W3_Dinosaur_02_Ability04_Part01",
  "childAbilityList": [
    "3003013_Monster_W3_Dinosaur_Ability04_Camera",
    "3003013_Monster_W3_Dinosaur_02_Ability04_Part01",
    "3003013_Monster_W3_Dinosaur_02_Ability04_Part02"
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
      "ability": "Monster_W3_Dinosaur_02_Ability04_Part02",
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