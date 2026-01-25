const configAbility = {
  "fileName": "Firefly_Sam_Ability03_Part01",
  "childAbilityList": [
    "Firefly_Sam_Ability03_Camera",
    "Firefly_Sam_Ability03_EnterReady",
    "Firefly_Sam_Ability03_Part01",
    "Firefly_Sam_Ability03_Part02"
  ],
  "skillTrigger": "Skill03",
  "abilityType": "Ultimate",
  "energy": 5,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Sam_Ability03_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}