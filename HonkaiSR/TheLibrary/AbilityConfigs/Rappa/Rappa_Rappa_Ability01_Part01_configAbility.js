const configAbility = {
  "fileName": "Rappa_Rappa_Ability01_Part01",
  "childAbilityList": [
    "Rappa_Rappa_Ability01_Camera",
    "Rappa_Rappa_Ability01_Part01",
    "Rappa_Rappa_Ability01_Part02"
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
    "Deleted bullshit",
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Rappa_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}