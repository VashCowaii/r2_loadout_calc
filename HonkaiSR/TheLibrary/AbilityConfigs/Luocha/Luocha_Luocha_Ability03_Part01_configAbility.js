const configAbility = {
  "fileName": "Luocha_Luocha_Ability03_Part01",
  "childAbilityList": [
    "Luocha_Luocha_Ability03_Camera",
    "Luocha_Luocha_Ability03_EnterReady",
    "Luocha_Luocha_Ability03_Part01",
    "Luocha_Luocha_Ability03_Part02"
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
      "ability": "Luocha_Ability03_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}