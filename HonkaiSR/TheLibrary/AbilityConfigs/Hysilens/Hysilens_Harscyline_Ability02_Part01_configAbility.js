const configAbility = {
  "fileName": "Hysilens_Harscyline_Ability02_Part01",
  "childAbilityList": [
    "Hysilens_Harscyline_Ability02_Camera",
    "Hysilens_Harscyline_Ability02_Part01",
    "Hysilens_Harscyline_Ability02_Part02"
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
      "ability": "Harscyline_Ability02_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}