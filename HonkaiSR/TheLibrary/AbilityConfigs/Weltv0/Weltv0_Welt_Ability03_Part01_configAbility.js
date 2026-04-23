const configAbility = {
  "fileName": "Weltv0_Welt_Ability03_Part01",
  "childAbilityList": [
    "Weltv0_Welt_Ability03_Camera",
    "Weltv0_Welt_Ability03_EnterReady",
    "Weltv0_Welt_Ability03_Part01",
    "Weltv0_Welt_Ability03_Part02"
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
      "ability": "Welt_Ability03_Part02",
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