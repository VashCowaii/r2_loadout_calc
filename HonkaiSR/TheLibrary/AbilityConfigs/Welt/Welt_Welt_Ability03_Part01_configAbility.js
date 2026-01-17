const configAbility = {
  "fileName": "Welt_Welt_Ability03_Part01",
  "childAbilityList": [
    "Welt_Welt_Ability03_Camera",
    "Welt_Welt_Ability03_EnterReady",
    "Welt_Welt_Ability03_Part01",
    "Welt_Welt_Ability03_Part02"
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
      "ability": "Welt_Ability03_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}