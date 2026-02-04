const configAbility = {
  "fileName": "Gepard_Gepard_Ability02_Part01",
  "childAbilityList": [
    "Gepard_Gepard_Ability02_Camera",
    "Gepard_Gepard_Ability02_Part01",
    "Gepard_Gepard_Ability02_Part02"
  ],
  "skillTrigger": "Skill02",
  "abilityType": "Skill",
  "energy": 30,
  "toughnessList": [
    20,
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
      "ability": "Gepard_Ability02_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}