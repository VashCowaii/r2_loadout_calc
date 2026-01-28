const configAbility = {
  "fileName": "Mydei_Mydeimos_Ability01_Part01",
  "childAbilityList": [
    "Mydei_Mydeimos_Ability01_Camera",
    "Mydei_Mydeimos_Ability01_Part01",
    "Mydei_Mydeimos_Ability01_Part02"
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
      "ability": "Mydeimos_Ability01_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}