const configAbility = {
  "fileName": "Sushang_Sushang_Ability02_Part01",
  "childAbilityList": [
    "Sushang_Sushang_Ability02_Part01",
    "Sushang_Sushang_Ability02_Part02",
    "Sushang_Sushang_Ability02_Camera"
  ],
  "skillTrigger": "Skill02",
  "abilityType": "Skill",
  "energy": 30,
  "toughnessList": [
    20,
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
      "ability": "Sushang_Ability02_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}