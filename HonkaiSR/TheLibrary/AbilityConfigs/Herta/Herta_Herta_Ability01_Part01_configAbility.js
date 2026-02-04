const configAbility = {
  "fileName": "Herta_Herta_Ability01_Part01",
  "childAbilityList": [
    "Herta_Herta_Ability01_Camera",
    "Herta_Herta_Ability01_Part01",
    "Herta_Herta_Ability01_Part02"
  ],
  "skillTrigger": "Skill01",
  "abilityType": "Basic ATK",
  "energy": 20,
  "toughnessList": [
    10,
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
      "ability": "Herta_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit",
    "Deleted bullshit"
  ],
  "references": []
}