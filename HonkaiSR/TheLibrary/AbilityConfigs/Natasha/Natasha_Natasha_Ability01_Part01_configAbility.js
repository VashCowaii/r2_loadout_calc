const configAbility = {
  "fileName": "Natasha_Natasha_Ability01_Part01",
  "childAbilityList": [
    "Natasha_Natasha_Ability01_Camera",
    "Natasha_Natasha_Ability01_Part01",
    "Natasha_Natasha_Ability01_Part02"
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
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Natasha_Ability01_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}