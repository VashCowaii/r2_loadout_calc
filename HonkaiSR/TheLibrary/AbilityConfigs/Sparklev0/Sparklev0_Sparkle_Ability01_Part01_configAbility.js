const configAbility = {
  "fileName": "Sparklev0_Sparkle_Ability01_Part01",
  "childAbilityList": [
    "Sparklev0_Sparkle_Ability01_Camera",
    "Sparklev0_Sparkle_Ability01_Part01",
    "Sparklev0_Sparkle_Ability01_Part02"
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
      "ability": "Sparkle_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}