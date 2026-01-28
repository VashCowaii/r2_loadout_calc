const configAbility = {
  "fileName": "Cyrene_Cyrene_Ability02_Part01",
  "childAbilityList": [
    "Cyrene_Cyrene_Ability02_Camera",
    "Cyrene_Cyrene_Ability02_Part01",
    "Cyrene_Cyrene_Ability02_Part02"
  ],
  "skillTrigger": "Skill02",
  "abilityType": "Skill",
  "energy": null,
  "toughnessList": [
    0,
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
      "ability": "Cyrene_Ability02_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}