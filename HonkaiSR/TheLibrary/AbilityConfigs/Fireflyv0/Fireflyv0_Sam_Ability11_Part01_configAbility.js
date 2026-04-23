const configAbility = {
  "fileName": "Fireflyv0_Sam_Ability11_Part01",
  "childAbilityList": [
    "Fireflyv0_Sam_Ability11_Camera",
    "Fireflyv0_Sam_Ability11_Part01",
    "Fireflyv0_Sam_Ability11_Part02"
  ],
  "skillTrigger": "Skill11",
  "abilityType": "Basic ATK",
  "energy": null,
  "toughnessList": [
    15,
    0,
    0
  ],
  "parse": [
    "Deleted bullshit",
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Sam_Ability11_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "realTargetData": {
    "primaryTarget": "Select Hostile Target"
  }
}