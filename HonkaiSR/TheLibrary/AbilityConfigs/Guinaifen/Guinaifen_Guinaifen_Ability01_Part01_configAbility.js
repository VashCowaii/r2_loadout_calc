const configAbility = {
  "fileName": "Guinaifen_Guinaifen_Ability01_Part01",
  "childAbilityList": [
    "Guinaifen_Guinaifen_Ability01_Camera",
    "Guinaifen_Guinaifen_Ability01_Part01",
    "Guinaifen_Guinaifen_Ability01_Part02"
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
      "ability": "Guinaifen_Ability01_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}