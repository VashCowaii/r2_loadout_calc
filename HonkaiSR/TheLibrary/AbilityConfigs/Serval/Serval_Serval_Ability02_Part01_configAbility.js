const configAbility = {
  "fileName": "Serval_Serval_Ability02_Part01",
  "childAbilityList": [
    "Serval_Serval_Ability02_Camera",
    "Serval_Serval_Ability02_Part01",
    "Serval_Serval_Ability02_Part02"
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
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Serval_Ability02_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}