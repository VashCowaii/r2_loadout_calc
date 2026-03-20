const configAbility = {
  "fileName": "Sparkle_Advanced_Sparkle_Ability01_Part01",
  "childAbilityList": [
    "Sparkle_Sparkle_Ability01_Camera",
    "Sparkle_Advanced_Sparkle_Ability01_Part01",
    "Sparkle_Advanced_Sparkle_Ability01_Part02"
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
      "ability": "Advanced_Sparkle_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}