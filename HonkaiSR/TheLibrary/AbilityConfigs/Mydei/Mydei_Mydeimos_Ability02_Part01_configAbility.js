const configAbility = {
  "fileName": "Mydei_Mydeimos_Ability02_Part01",
  "childAbilityList": [
    "Mydei_Mydeimos_Ability02_Camera",
    "Mydei_Mydeimos_Ability02_Part01",
    "Mydei_Mydeimos_Ability02_Part02"
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
      "ability": "Mydeimos_Ability02_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}