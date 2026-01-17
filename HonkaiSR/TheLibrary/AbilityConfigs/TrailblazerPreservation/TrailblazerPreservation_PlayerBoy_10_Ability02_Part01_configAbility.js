const configAbility = {
  "fileName": "TrailblazerPreservation_PlayerBoy_10_Ability02_Part01",
  "childAbilityList": [
    "TrailblazerPreservation_PlayerBoy_10_Ability02_Camera_Self",
    "TrailblazerPreservation_PlayerBoy_10_Ability02_Part01",
    "TrailblazerPreservation_PlayerBoy_10_Ability02_Part02"
  ],
  "skillTrigger": "Skill02",
  "abilityType": "Skill",
  "energy": 30,
  "toughnessList": [
    0,
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
      "ability": "PlayerBoy_10_Ability02_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}