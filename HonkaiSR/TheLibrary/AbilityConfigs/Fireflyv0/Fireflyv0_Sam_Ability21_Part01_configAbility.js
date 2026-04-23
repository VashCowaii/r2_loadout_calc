const configAbility = {
  "fileName": "Fireflyv0_Sam_Ability21_Part01",
  "childAbilityList": [
    "Fireflyv0_Sam_Ability21_Camera",
    "Fireflyv0_Sam_Ability21_Part01",
    "Fireflyv0_Sam_Ability21_Part02"
  ],
  "skillTrigger": "Skill21",
  "abilityType": "Skill",
  "energy": null,
  "toughnessList": [
    30,
    0,
    15
  ],
  "parse": [
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Sam_Ability21_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "realTargetData": {
    "primaryTarget": "Select Hostile Target",
    "subTarget": "Blast Targets"
  }
}