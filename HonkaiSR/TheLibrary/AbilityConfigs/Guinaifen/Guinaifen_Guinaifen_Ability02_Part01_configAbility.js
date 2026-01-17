const configAbility = {
  "fileName": "Guinaifen_Guinaifen_Ability02_Part01",
  "childAbilityList": [
    "Guinaifen_Guinaifen_Ability02_Camera",
    "Guinaifen_Guinaifen_Ability02_Part01",
    "Guinaifen_Guinaifen_Ability02_Part02"
  ],
  "skillTrigger": "Skill02",
  "abilityType": "Skill",
  "energy": 30,
  "toughnessList": [
    20,
    0,
    10
  ],
  "parse": [
    "Deleted bullshit",
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Guinaifen_Ability02_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}