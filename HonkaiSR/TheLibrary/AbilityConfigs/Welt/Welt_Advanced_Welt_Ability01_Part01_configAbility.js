const configAbility = {
  "fileName": "Welt_Advanced_Welt_Ability01_Part01",
  "childAbilityList": [
    "Welt_Advanced_Welt_Ability01_Camera",
    "Welt_Advanced_Welt_Ability01_Part01",
    "Welt_Advanced_Welt_Ability01_Part02"
  ],
  "skillTrigger": "Skill01",
  "abilityType": "Basic ATK",
  "energy": 20,
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
      "ability": "Advanced_Welt_Ability01_Part02",
      "isTrigger": true
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "realTargetData": {
    "primaryTarget": "Select Hostile Target"
  }
}