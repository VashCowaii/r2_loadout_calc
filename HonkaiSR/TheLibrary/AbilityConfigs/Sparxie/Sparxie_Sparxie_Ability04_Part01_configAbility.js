const configAbility = {
  "fileName": "Sparxie_Sparxie_Ability04_Part01",
  "childAbilityList": [
    "Sparxie_Sparxie_Ability04_Camera",
    "Sparxie_Sparxie_Ability04_Part01",
    "Sparxie_Sparxie_Ability04_Part02"
  ],
  "skillTrigger": "Skill04",
  "abilityType": "Elation",
  "energy": 5,
  "toughnessList": [
    1.6666666666666667,
    6.666666666666667,
    0
  ],
  "parse": [
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Sparxie_Ability04_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  }
}