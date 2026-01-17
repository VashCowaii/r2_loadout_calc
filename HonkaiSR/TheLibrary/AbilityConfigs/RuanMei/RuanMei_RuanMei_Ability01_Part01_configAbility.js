const configAbility = {
  "fileName": "RuanMei_RuanMei_Ability01_Part01",
  "childAbilityList": [
    "RuanMei_RuanMei_Ability01_Camera",
    "RuanMei_RuanMei_Ability01_Part01",
    "RuanMei_RuanMei_Ability01_Part02"
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
      "ability": "RuanMei_Ability01_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}