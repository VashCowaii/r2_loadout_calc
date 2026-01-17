const configAbility = {
  "fileName": "Serval_Serval_Ability03_Part01",
  "childAbilityList": [
    "Serval_Serval_Ability03_Camera",
    "Serval_Serval_Ability03_EnterReady",
    "Serval_Serval_Ability03_Part01",
    "Serval_Serval_Ability03_Part02"
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
      "ability": "Serval_Ability03_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}