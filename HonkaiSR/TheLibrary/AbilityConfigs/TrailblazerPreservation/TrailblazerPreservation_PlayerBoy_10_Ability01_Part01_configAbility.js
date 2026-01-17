const configAbility = {
  "fileName": "TrailblazerPreservation_PlayerBoy_10_Ability01_Part01",
  "childAbilityList": [
    "TrailblazerPreservation_PlayerBoy_10_Ability01_Camera",
    "TrailblazerPreservation_PlayerBoy_10_Ability01_Part01",
    "TrailblazerPreservation_PlayerBoy_10_Ability01_Part02"
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
      "ability": "PlayerBoy_10_Ability01_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}