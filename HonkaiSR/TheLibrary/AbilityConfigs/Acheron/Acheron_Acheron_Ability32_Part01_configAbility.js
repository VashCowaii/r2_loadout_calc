const configAbility = {
  "fileName": "Acheron_Acheron_Ability32_Part01",
  "childAbilityList": [
    "Acheron_Acheron_Ability32_Camera",
    "Acheron_Acheron_Ability32_Part01",
    "Acheron_Acheron_Ability32_Part02"
  ],
  "skillTrigger": "Skill32",
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
      "ability": "Acheron_Ability32_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}