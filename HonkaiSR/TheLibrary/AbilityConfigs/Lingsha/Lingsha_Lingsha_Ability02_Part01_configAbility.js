const configAbility = {
  "fileName": "Lingsha_Lingsha_Ability02_Part01",
  "childAbilityList": [
    "Lingsha_Lingsha_Ability02_Camera",
    "Lingsha_Lingsha_Ability02_Part01",
    "Lingsha_Lingsha_Ability02_Part02"
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
      "ability": "Lingsha_Ability02_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}