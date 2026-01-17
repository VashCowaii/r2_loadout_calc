const configAbility = {
  "fileName": "Luocha_Luocha_Ability02_Part01",
  "childAbilityList": [
    "Luocha_Luocha_Ability02_Camera",
    "Luocha_Luocha_Ability02_Part01",
    "Luocha_Luocha_Ability02_Part02"
  ],
  "skillTrigger": "Skill02",
  "abilityType": "Skill",
  "energy": 30,
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
      "inherentTarget": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "ability": "Luocha_Ability02_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}