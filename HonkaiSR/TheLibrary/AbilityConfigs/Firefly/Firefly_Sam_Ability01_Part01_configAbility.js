const configAbility = {
  "fileName": "Firefly_Sam_Ability01_Part01",
  "childAbilityList": [
    "Firefly_Sam_Ability01_Camera",
    "Firefly_Sam_Ability01_Part01",
    "Firefly_Sam_Ability01_Part02"
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
      "ability": "Sam_Ability01_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}