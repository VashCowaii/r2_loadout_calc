const configAbility = {
  "fileName": "Acheron_Acheron_Ability02_Part01",
  "childAbilityList": [
    "Acheron_Acheron_Ability02_Camera",
    "Acheron_Acheron_Ability02_Part01",
    "Acheron_Acheron_Ability02_Part02"
  ],
  "skillTrigger": "Skill02",
  "abilityType": "Skill",
  "energy": null,
  "toughnessList": [
    20,
    0,
    10
  ],
  "parse": [
    "Deleted bullshit",
    "Deleted bullshit",
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Acheron_Ability02_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}