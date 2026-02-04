const configAbility = {
  "fileName": "Rappa_Rappa_Ability02_Part01",
  "childAbilityList": [
    "Rappa_Rappa_Ability02_Camera",
    "Rappa_Rappa_Ability02_Part01",
    "Rappa_Rappa_Ability02_Part02"
  ],
  "skillTrigger": "Skill02",
  "abilityType": "Skill",
  "energy": 30,
  "toughnessList": [
    0,
    10,
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
      "ability": "Rappa_Ability02_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}