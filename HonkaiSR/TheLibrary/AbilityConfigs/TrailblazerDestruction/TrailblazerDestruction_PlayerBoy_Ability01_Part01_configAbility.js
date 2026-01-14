const configAbility = {
  "fileName": "TrailblazerDestruction_PlayerBoy_Ability01_Part01",
  "childAbilityList": [
    "TrailblazerDestruction_PlayerBoy_Ability01_Camera",
    "TrailblazerDestruction_PlayerBoy_Ability01_Part01",
    "TrailblazerDestruction_PlayerBoy_Ability01_Part02"
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
      "from": "Caster",
      "ability": "PlayerBoy_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}