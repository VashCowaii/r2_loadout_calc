const configAbility = {
  "fileName": "TheHerta_TheHerta_Ability02_Part01",
  "childAbilityList": [
    "TheHerta_TheHerta_Ability02_Camera",
    "TheHerta_TheHerta_Ability02_Part01",
    "TheHerta_TheHerta_Ability02_Part02"
  ],
  "skillTrigger": "Skill02",
  "abilityType": "Skill",
  "energy": 30,
  "toughnessList": [
    15,
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
      "ability": "TheHerta_Ability02_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}