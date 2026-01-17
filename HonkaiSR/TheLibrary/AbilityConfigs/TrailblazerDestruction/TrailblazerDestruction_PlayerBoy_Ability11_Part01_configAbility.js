const configAbility = {
  "fileName": "TrailblazerDestruction_PlayerBoy_Ability11_Part01",
  "childAbilityList": [
    "TrailblazerDestruction_PlayerBoy_Ability11_Camera",
    "TrailblazerDestruction_PlayerBoy_Ability11_Part01",
    "TrailblazerDestruction_PlayerBoy_Ability11_Part02"
  ],
  "skillTrigger": "Skill11",
  "abilityType": "Ultimate",
  "energy": 5,
  "toughnessList": [
    30,
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
      "ability": "PlayerBoy_Ability11_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}