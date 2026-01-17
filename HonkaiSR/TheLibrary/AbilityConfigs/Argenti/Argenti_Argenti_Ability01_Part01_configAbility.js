const configAbility = {
  "fileName": "Argenti_Argenti_Ability01_Part01",
  "childAbilityList": [
    "Argenti_Argenti_Ability01_Camera",
    "Argenti_Argenti_Ability01_Part01",
    "Argenti_Argenti_Ability01_Part02"
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
      "ability": "Argenti_Ability01_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}