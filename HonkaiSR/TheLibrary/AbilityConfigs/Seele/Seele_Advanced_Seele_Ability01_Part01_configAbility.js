const configAbility = {
  "fileName": "Seele_Advanced_Seele_Ability01_Part01",
  "childAbilityList": [
    "Seele_Advanced_Seele_Ability01_Camera",
    "Seele_Advanced_Seele_Ability01_Part01",
    "Seele_Advanced_Seele_Ability01_Part02"
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
      "ability": "Advanced_Seele_Ability01_Part02",
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