const configAbility = {
  "fileName": "Gallagher_Gallagher_Ability02_Part01",
  "childAbilityList": [
    "Gallagher_Gallagher_Ability02_Camera",
    "Gallagher_Gallagher_Ability02_Camera_End",
    "Gallagher_Gallagher_Ability02_Part01",
    "Gallagher_Gallagher_Ability02_Part02"
  ],
  "skillTrigger": "Skill02",
  "abilityType": "Skill",
  "energy": 30,
  "toughnessList": [
    0,
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
      "inherentTarget": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "ability": "Gallagher_Ability02_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}