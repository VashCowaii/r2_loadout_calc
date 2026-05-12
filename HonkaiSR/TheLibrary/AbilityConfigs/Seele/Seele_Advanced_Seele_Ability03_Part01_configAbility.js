const configAbility = {
  "fileName": "Seele_Advanced_Seele_Ability03_Part01",
  "childAbilityList": [
    "Seele_Advanced_Seele_Ability03_Camera",
    "Seele_Advanced_Seele_Ability03_EnterReady",
    "Seele_Advanced_Seele_Ability03_Part01",
    "Seele_Advanced_Seele_Ability03_Part02"
  ],
  "skillTrigger": "Skill03",
  "abilityType": "Ultimate",
  "energy": 5,
  "toughnessList": [
    30,
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
      "ability": "Advanced_Seele_Ability03_Part02",
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