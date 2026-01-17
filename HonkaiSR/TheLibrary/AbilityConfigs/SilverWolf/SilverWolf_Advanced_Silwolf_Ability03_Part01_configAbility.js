const configAbility = {
  "fileName": "SilverWolf_Advanced_Silwolf_Ability03_Part01",
  "childAbilityList": [
    "SilverWolf_Advanced_Silwolf_Ability03_Camera",
    "SilverWolf_Advanced_Silwolf_Ability03_EnterReady",
    "SilverWolf_Advanced_Silwolf_Ability03_Part01",
    "SilverWolf_Advanced_Silwolf_Ability03_Part02"
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
      "ability": "Advanced_Silwolf_Ability03_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}