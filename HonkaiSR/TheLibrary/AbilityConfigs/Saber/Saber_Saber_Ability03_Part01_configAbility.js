const configAbility = {
  "fileName": "Saber_Saber_Ability03_Part01",
  "childAbilityList": [
    "Saber_Saber_Ability03_Camera",
    "Saber_Saber_Ability03_Part01",
    "Saber_Saber_Ability03_Part02",
    "Saber_Saber_Ability03_EnterReady"
  ],
  "skillTrigger": "Skill03",
  "abilityType": "Ultimate",
  "energy": 5,
  "toughnessList": [
    20,
    40,
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
      "ability": "Saber_Ability03_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}