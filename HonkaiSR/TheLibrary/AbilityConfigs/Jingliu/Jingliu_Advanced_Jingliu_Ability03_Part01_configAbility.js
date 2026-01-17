const configAbility = {
  "fileName": "Jingliu_Advanced_Jingliu_Ability03_Part01",
  "childAbilityList": [
    "Jingliu_Jingliu_Ability03_Camera",
    "Jingliu_Advanced_Jingliu_Ability03_Part01",
    "Jingliu_Advanced_Jingliu_Ability03_Part02",
    "Jingliu_Advanced_Jingliu_Ability03_EnterReady"
  ],
  "skillTrigger": "Skill03",
  "abilityType": "Ultimate",
  "energy": 5,
  "toughnessList": [
    20,
    0,
    20
  ],
  "parse": [
    "Deleted bullshit",
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Advanced_Jingliu_Ability03_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}