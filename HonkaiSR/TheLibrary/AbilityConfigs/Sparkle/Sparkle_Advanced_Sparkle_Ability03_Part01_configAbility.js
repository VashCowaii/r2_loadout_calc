const configAbility = {
  "fileName": "Sparkle_Advanced_Sparkle_Ability03_Part01",
  "childAbilityList": [
    "Sparkle_Sparkle_Ability03_Camera",
    "Sparkle_Advanced_Sparkle_Ability03_EnterReady",
    "Sparkle_Advanced_Sparkle_Ability03_Part01",
    "Sparkle_Advanced_Sparkle_Ability03_Part02"
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
      "ability": "Advanced_Sparkle_Ability03_Part02"
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{All Team Members}}"
  },
  "realTargetData": {
    "primaryTarget": "{{All Team Members}}"
  }
}