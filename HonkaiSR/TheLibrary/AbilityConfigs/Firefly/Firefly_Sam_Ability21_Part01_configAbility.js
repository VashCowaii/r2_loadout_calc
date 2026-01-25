const configAbility = {
  "fileName": "Firefly_Sam_Ability21_Part01",
  "childAbilityList": [
    "Firefly_Sam_Ability21_Camera",
    "Firefly_Sam_Ability21_Part01",
    "Firefly_Sam_Ability21_Part02"
  ],
  "skillTrigger": "Skill21",
  "abilityType": "Skill",
  "energy": null,
  "toughnessList": [
    30,
    0,
    15
  ],
  "parse": [
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Sam_Ability21_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}