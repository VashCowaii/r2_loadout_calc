const configAbility = {
  "fileName": "Herta_Herta_Ability02_Part01",
  "childAbilityList": [
    "Herta_Herta_Ability02_Camera",
    "Herta_Herta_Ability02_Part01",
    "Herta_Herta_Ability02_Part02"
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
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Herta_Ability02_Part02",
      "isTrigger": true
    },
    "Deleted bullshit",
    "Deleted bullshit"
  ],
  "references": []
}