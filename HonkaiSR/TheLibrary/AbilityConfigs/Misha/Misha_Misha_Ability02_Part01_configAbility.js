const configAbility = {
  "fileName": "Misha_Misha_Ability02_Part01",
  "childAbilityList": [
    "Misha_Misha_Ability02_Camera",
    "Misha_Misha_Ability02_Part01",
    "Misha_Misha_Ability02_Part02"
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
      "ability": "Misha_Ability02_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}