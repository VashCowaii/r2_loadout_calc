const configAbility = {
  "fileName": "Lingsha_Lingsha_Ability03_Part01",
  "childAbilityList": [
    "Lingsha_Lingsha_Ability03_Camera",
    "Lingsha_Lingsha_Ability03_EnterReady",
    "Lingsha_Lingsha_Ability03_Part01",
    "Lingsha_Lingsha_Ability03_Part02"
  ],
  "skillTrigger": "Skill03",
  "abilityType": "Ultimate",
  "energy": 5,
  "toughnessList": [
    0,
    20,
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
      "ability": "Lingsha_Ability03_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}