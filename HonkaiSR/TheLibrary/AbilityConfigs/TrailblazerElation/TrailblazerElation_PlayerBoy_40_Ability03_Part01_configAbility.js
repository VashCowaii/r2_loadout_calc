const configAbility = {
  "fileName": "TrailblazerElation_PlayerBoy_40_Ability03_Part01",
  "childAbilityList": [
    "TrailblazerElation_PlayerBoy_40_Ability03_Camera",
    "TrailblazerElation_PlayerBoy_40_Ability03_EnterReady",
    "TrailblazerElation_PlayerBoy_40_Ability03_Part01",
    "TrailblazerElation_PlayerBoy_40_Ability03_Part02"
  ],
  "skillTrigger": "Skill03",
  "abilityType": "Ultimate",
  "energy": 5,
  "toughnessList": [
    0,
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
      "ability": "PlayerBoy_40_Ability03_Part02"
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "realTargetData": {
    "primaryTarget": "Select Ally Target"
  }
}