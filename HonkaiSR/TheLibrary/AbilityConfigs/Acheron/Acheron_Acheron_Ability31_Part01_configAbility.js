const configAbility = {
  "fileName": "Acheron_Acheron_Ability31_Part01",
  "childAbilityList": [
    "Acheron_Acheron_Ability31_Camera",
    "Acheron_Acheron_Ability31_Part01",
    "Acheron_Acheron_Ability31_Part02"
  ],
  "skillTrigger": "Skill31",
  "abilityType": "Ultimate",
  "energy": null,
  "toughnessList": [
    5,
    5,
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
      "ability": "Acheron_Ability31_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}