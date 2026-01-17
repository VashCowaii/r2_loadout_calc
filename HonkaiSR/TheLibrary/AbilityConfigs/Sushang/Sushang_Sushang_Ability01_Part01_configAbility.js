const configAbility = {
  "fileName": "Sushang_Sushang_Ability01_Part01",
  "childAbilityList": [
    "Sushang_Sushang_Ability01_Part01",
    "Sushang_Sushang_Ability01_Part02",
    "Sushang_Sushang_Ability01_Camera"
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
      "ability": "Sushang_Ability01_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}