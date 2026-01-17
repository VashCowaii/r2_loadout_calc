const configAbility = {
  "fileName": "TrailblazerPreservation_PlayerBoy_10_Ability03_Part01",
  "childAbilityList": [
    "TrailblazerPreservation_PlayerBoy_10_Ability03_Camera",
    "TrailblazerPreservation_PlayerBoy_10_Ability03_EnterReady",
    "TrailblazerPreservation_PlayerBoy_10_Ability03_Part01",
    "TrailblazerPreservation_PlayerBoy_10_Ability03_Part02"
  ],
  "skillTrigger": "Skill03",
  "abilityType": "Ultimate",
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
      "ability": "PlayerBoy_10_Ability03_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}