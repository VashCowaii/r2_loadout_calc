const configAbility = {
  "fileName": "Gallagher_Gallagher_Ability11_Part01",
  "childAbilityList": [
    "Gallagher_Gallagher_Ability11_Camera",
    "Gallagher_Gallagher_Ability11_Part01",
    "Gallagher_Gallagher_Ability11_Part02"
  ],
  "skillTrigger": "Skill11",
  "abilityType": "Basic ATK",
  "energy": 20,
  "toughnessList": [
    30,
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
      "ability": "Gallagher_Ability11_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}