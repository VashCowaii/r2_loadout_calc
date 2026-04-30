const configAbility = {
  "fileName": "TrailblazerElation_PlayerBoy_40_ElationAbility_Part01",
  "childAbilityList": [
    "TrailblazerElation_PlayerBoy_40_ElationAbility_Part01",
    "TrailblazerElation_PlayerBoy_40_ElationAbility_Part02",
    "TrailblazerElation_PlayerBoy_40_ElationAbility_Camera"
  ],
  "skillTrigger": "Skill04",
  "tag": "InfiniteRefresh",
  "abilityType": "Elation",
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
      "ability": "PlayerBoy_40_ElationAbility_Part02",
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