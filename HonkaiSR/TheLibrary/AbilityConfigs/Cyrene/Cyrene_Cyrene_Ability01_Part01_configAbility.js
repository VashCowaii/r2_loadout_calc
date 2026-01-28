const configAbility = {
  "fileName": "Cyrene_Cyrene_Ability01_Part01",
  "childAbilityList": [
    "Cyrene_Cyrene_Ability01_Camera",
    "Cyrene_Cyrene_Ability01_Part01",
    "Cyrene_Cyrene_Ability01_Part02"
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
      "ability": "Cyrene_Ability01_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}