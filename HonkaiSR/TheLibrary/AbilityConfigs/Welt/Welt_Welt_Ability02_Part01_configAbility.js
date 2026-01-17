const configAbility = {
  "fileName": "Welt_Welt_Ability02_Part01",
  "childAbilityList": [
    "Welt_Welt_Ability02_Camera",
    "Welt_Welt_Ability02_Part01",
    "Welt_Welt_Ability02_Part02"
  ],
  "skillTrigger": "Skill02",
  "abilityType": "Skill",
  "energy": 10,
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
      "ability": "Welt_Ability02_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}