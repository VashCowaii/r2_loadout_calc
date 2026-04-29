const configAbility = {
  "fileName": "Welt_Advanced_Welt_Ability03_Part01",
  "childAbilityList": [
    "Welt_Advanced_Welt_Ability03_Camera",
    "Welt_Advanced_Welt_Ability03_EnterReady",
    "Welt_Advanced_Welt_Ability03_Part01",
    "Welt_Advanced_Welt_Ability03_Part02"
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
      "ability": "Advanced_Welt_Ability03_Part02",
      "isTrigger": true
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  }
}