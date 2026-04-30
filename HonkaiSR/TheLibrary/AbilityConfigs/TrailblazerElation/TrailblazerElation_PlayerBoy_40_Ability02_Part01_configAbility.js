const configAbility = {
  "fileName": "TrailblazerElation_PlayerBoy_40_Ability02_Part01",
  "childAbilityList": [
    "TrailblazerElation_PlayerBoy_40_Ability02_Camera",
    "TrailblazerElation_PlayerBoy_40_Ability02_Part01",
    "TrailblazerElation_PlayerBoy_40_Ability02_Part02"
  ],
  "skillTrigger": "Skill02",
  "abilityType": "Skill",
  "energy": 30,
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
      "ability": "PlayerBoy_40_Ability02_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  }
}