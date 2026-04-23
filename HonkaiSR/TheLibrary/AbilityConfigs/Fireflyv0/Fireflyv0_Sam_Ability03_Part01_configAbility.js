const configAbility = {
  "fileName": "Fireflyv0_Sam_Ability03_Part01",
  "childAbilityList": [
    "Fireflyv0_Sam_Ability03_Camera",
    "Fireflyv0_Sam_Ability03_EnterReady",
    "Fireflyv0_Sam_Ability03_Part01",
    "Fireflyv0_Sam_Ability03_Part02"
  ],
  "skillTrigger": "Skill03",
  "abilityType": "Ultimate",
  "energy": 5,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Sam_Ability03_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  }
}