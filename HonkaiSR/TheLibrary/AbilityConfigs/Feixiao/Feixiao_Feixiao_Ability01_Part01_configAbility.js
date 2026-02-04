const configAbility = {
  "fileName": "Feixiao_Feixiao_Ability01_Part01",
  "childAbilityList": [
    "Feixiao_Feixiao_Ability01_Camera",
    "Feixiao_Feixiao_Ability01_Part01",
    "Feixiao_Feixiao_Ability01_Part02"
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
      "ability": "Feixiao_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}