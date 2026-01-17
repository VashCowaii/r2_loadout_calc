const configAbility = {
  "fileName": "Himeko_Himeko_Ability01_Part01",
  "childAbilityList": [
    "Himeko_Himeko_Ability01_Camera",
    "Himeko_Himeko_Ability01_Part01",
    "Himeko_Himeko_Ability01_Part02"
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
      "ability": "Himeko_Ability01_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}