const configAbility = {
  "fileName": "Yunli_Yunli_Ability02_Part01",
  "childAbilityList": [
    "Yunli_Yunli_Ability02_Camera",
    "Yunli_Yunli_Ability02_Part01",
    "Yunli_Yunli_Ability02_Part02"
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
      "ability": "Yunli_Ability02_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}