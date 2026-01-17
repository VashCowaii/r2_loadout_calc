const configAbility = {
  "fileName": "TrailblazerDestruction_PlayerBoy_Ability02_Part01",
  "childAbilityList": [
    "TrailblazerDestruction_PlayerBoy_Ability02_Camera",
    "TrailblazerDestruction_PlayerBoy_Ability02_Part01",
    "TrailblazerDestruction_PlayerBoy_Ability02_Part02"
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
      "ability": "PlayerBoy_Ability02_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}