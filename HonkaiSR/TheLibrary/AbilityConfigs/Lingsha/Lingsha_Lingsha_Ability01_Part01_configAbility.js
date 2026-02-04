const configAbility = {
  "fileName": "Lingsha_Lingsha_Ability01_Part01",
  "childAbilityList": [
    "Lingsha_Lingsha_Ability01_Camera",
    "Lingsha_Lingsha_Ability01_Part01",
    "Lingsha_Lingsha_Ability01_Part02"
  ],
  "skillTrigger": "Skill01",
  "abilityType": "Basic ATK",
  "energy": 20,
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
      "ability": "Lingsha_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}