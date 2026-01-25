const configAbility = {
  "fileName": "Firefly_Sam_Ability02_Part01",
  "childAbilityList": [
    "Firefly_Sam_Ability02_Camera",
    "Firefly_Sam_Ability02_Part01",
    "Firefly_Sam_Ability02_Part02"
  ],
  "skillTrigger": "Skill02",
  "abilityType": "Skill",
  "energy": null,
  "toughnessList": [
    20,
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
      "ability": "Sam_Ability02_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}