const configAbility = {
  "fileName": "Weltv0_Welt_Ability02_Part01",
  "childAbilityList": [
    "Weltv0_Welt_Ability02_Camera",
    "Weltv0_Welt_Ability02_Part01",
    "Weltv0_Welt_Ability02_Part02"
  ],
  "skillTrigger": "Skill02",
  "abilityType": "Skill",
  "energy": 10,
  "toughnessList": [
    10,
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
      "ability": "Welt_Ability02_Part02",
      "isTrigger": true
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "realTargetData": {
    "primaryTarget": "Select Hostile Target",
    "subTarget": "All Other Team Members"
  }
}