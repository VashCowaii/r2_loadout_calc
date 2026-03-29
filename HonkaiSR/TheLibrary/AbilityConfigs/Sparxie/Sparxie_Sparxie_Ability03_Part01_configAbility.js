const configAbility = {
  "fileName": "Sparxie_Sparxie_Ability03_Part01",
  "childAbilityList": [
    "Sparxie_Sparxie_Ability03_Camera",
    "Sparxie_Sparxie_Ability03_EnterReady",
    "Sparxie_Sparxie_Ability03_Part01",
    "Sparxie_Sparxie_Ability03_Part02"
  ],
  "skillTrigger": "Skill03",
  "abilityType": "Ultimate",
  "energy": 5,
  "toughnessList": [
    0,
    20,
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
      "ability": "Sparxie_Ability03_Part02",
      "isTrigger": true
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  }
}