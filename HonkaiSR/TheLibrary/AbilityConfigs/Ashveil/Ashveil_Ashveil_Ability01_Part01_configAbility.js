const configAbility = {
  "fileName": "Ashveil_Ashveil_Ability01_Part01",
  "childAbilityList": [
    "Ashveil_Ashveil_Ability01_Camera",
    "Ashveil_Ashveil_Ability01_Part01",
    "Ashveil_Ashveil_Ability01_Part02"
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
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Ashveil_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit",
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