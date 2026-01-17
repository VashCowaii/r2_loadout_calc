const configAbility = {
  "fileName": "Himeko_Himeko_Ability03_Part01",
  "childAbilityList": [
    "Himeko_Himeko_Ability03_Camera",
    "Himeko_Himeko_Ability03_EnterReady",
    "Himeko_Himeko_Ability03_Part01",
    "Himeko_Himeko_Ability03_Part02"
  ],
  "skillTrigger": "Skill03",
  "abilityType": "Ultimate",
  "energy": 5,
  "toughnessList": [
    0,
    20,
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
      "ability": "Himeko_Ability03_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}