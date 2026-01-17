const configAbility = {
  "fileName": "Sparkle_Sparkle_Ability03_Part01",
  "childAbilityList": [
    "Sparkle_Sparkle_Ability03_Camera",
    "Sparkle_Sparkle_Ability03_EnterReady",
    "Sparkle_Sparkle_Ability03_Part01",
    "Sparkle_Sparkle_Ability03_Part02"
  ],
  "skillTrigger": "Skill03",
  "abilityType": "Ultimate",
  "energy": 5,
  "toughnessList": [
    0,
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
      "ability": "Sparkle_Ability03_Part02"
    }
  ],
  "references": []
}