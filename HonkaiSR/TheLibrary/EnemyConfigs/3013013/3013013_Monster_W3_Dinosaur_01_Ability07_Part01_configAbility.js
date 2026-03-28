const configAbility = {
  "fileName": "3013013_Monster_W3_Dinosaur_01_Ability07_Part01",
  "childAbilityList": [
    "3013013_Monster_W3_Dinosaur_01_Ability07_Camera",
    "3013013_Monster_W3_Dinosaur_01_Ability07_Camera_Servant",
    "3013013_Monster_W3_Dinosaur_01_Ability07_Part01",
    "3013013_Monster_W3_Dinosaur_01_Ability07_Part02"
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
      "ability": "Monster_W3_Dinosaur_01_Ability07_Part02",
      "isTrigger": true
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Hostile Entities(AOE)}}"
        },
        "value1": "TeamCharacterCount",
        "compareType": "<=",
        "value2": 4
      },
      "passed": [
        "Deleted bullshit"
      ],
      "failed": [
        "Deleted bullshit"
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}",
    "targetIsVariable": true
  },
  "references": []
}