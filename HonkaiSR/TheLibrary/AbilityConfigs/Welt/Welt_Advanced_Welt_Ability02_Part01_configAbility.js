const configAbility = {
  "fileName": "Welt_Advanced_Welt_Ability02_Part01",
  "childAbilityList": [
    "Welt_Advanced_Welt_Ability02_Camera",
    "Welt_Advanced_Welt_Ability02_Part01",
    "Welt_Advanced_Welt_Ability02_Part02"
  ],
  "skillTrigger": "Skill02",
  "abilityType": "Skill",
  "energy": 6,
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
      "ability": "Advanced_Welt_Ability02_Part02",
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