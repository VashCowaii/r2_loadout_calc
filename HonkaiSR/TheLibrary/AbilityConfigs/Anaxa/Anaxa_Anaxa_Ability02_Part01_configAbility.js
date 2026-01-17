const configAbility = {
  "fileName": "Anaxa_Anaxa_Ability02_Part01",
  "childAbilityList": [
    "Anaxa_Anaxa_Ability02_Camera",
    "Anaxa_Anaxa_Ability02_Part01",
    "Anaxa_Anaxa_Ability02_Part02"
  ],
  "skillTrigger": "Skill02",
  "abilityType": "Skill",
  "energy": 6,
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
      "ability": "Anaxa_Ability02_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}