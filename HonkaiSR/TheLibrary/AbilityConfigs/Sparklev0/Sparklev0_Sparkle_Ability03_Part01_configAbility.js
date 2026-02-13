const configAbility = {
  "fileName": "Sparklev0_Sparkle_Ability03_Part01",
  "childAbilityList": [
    "Sparklev0_Sparkle_Ability03_Camera",
    "Sparklev0_Sparkle_Ability03_EnterReady",
    "Sparklev0_Sparkle_Ability03_Part01",
    "Sparklev0_Sparkle_Ability03_Part02"
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