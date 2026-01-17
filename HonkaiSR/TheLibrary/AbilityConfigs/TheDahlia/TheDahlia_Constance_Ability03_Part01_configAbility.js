const configAbility = {
  "fileName": "TheDahlia_Constance_Ability03_Part01",
  "childAbilityList": [
    "TheDahlia_Constance_Ability03_Camera",
    "TheDahlia_Constance_Ability03_EnterReady",
    "TheDahlia_Constance_Ability03_Part01",
    "TheDahlia_Constance_Ability03_Part02"
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
      "ability": "Constance_Ability03_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}