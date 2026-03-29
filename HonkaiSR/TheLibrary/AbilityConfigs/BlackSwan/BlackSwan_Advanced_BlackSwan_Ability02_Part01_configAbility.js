const configAbility = {
  "fileName": "BlackSwan_Advanced_BlackSwan_Ability02_Part01",
  "childAbilityList": [
    "BlackSwan_BlackSwan_Ability02_Camera",
    "BlackSwan_Advanced_BlackSwan_Ability02_Part01",
    "BlackSwan_Advanced_BlackSwan_Ability02_Part02"
  ],
  "skillTrigger": "Skill02",
  "abilityType": "Skill",
  "energy": 30,
  "toughnessList": [
    20,
    0,
    10
  ],
  "parse": [
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Advanced_BlackSwan_Ability02_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "realTargetData": {
    "primaryTarget": "Select Hostile Target",
    "subTarget": "Blast Targets"
  }
}