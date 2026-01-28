const configAbility = {
  "fileName": "Mydei_Mydeimos_Ability03_Part01",
  "childAbilityList": [
    "Mydei_Mydeimos_Ability03_Camera",
    "Mydei_Mydeimos_Ability03_EnterReady",
    "Mydei_Mydeimos_Ability03_Part01",
    "Mydei_Mydeimos_Ability03_Part02"
  ],
  "skillTrigger": "Skill03",
  "abilityType": "Ultimate",
  "energy": 5,
  "toughnessList": [
    20,
    0,
    20
  ],
  "parse": [
    "Deleted bullshit",
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Mydeimos_Ability03_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}