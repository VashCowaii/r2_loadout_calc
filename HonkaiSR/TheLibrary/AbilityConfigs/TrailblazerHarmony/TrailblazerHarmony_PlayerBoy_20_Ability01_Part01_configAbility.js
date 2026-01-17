const configAbility = {
  "fileName": "TrailblazerHarmony_PlayerBoy_20_Ability01_Part01",
  "childAbilityList": [
    "TrailblazerHarmony_PlayerBoy_20_Ability01_Camera",
    "TrailblazerHarmony_PlayerBoy_20_Ability01_Part01",
    "TrailblazerHarmony_PlayerBoy_20_Ability01_Part02"
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
      "ability": "PlayerBoy_20_Ability01_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}