const configAbility = {
  "fileName": "Luocha_Luocha_Ability01_Part01",
  "childAbilityList": [
    "Luocha_Luocha_Ability01_Camera",
    "Luocha_Luocha_Ability01_Part01",
    "Luocha_Luocha_Ability01_Part02"
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
      "ability": "Luocha_Ability01_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}