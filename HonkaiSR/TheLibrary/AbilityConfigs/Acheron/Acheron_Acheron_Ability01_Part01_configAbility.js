const configAbility = {
  "fileName": "Acheron_Acheron_Ability01_Part01",
  "childAbilityList": [
    "Acheron_Acheron_Ability01_Camera",
    "Acheron_Acheron_Ability01_Part01",
    "Acheron_Acheron_Ability01_Part02"
  ],
  "skillTrigger": "Skill01",
  "abilityType": "Basic ATK",
  "energy": null,
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
      "ability": "Acheron_Ability01_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}