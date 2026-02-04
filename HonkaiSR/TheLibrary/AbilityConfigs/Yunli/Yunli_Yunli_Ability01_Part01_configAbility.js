const configAbility = {
  "fileName": "Yunli_Yunli_Ability01_Part01",
  "childAbilityList": [
    "Yunli_Yunli_Ability01_Camera",
    "Yunli_Yunli_Ability01_Part01",
    "Yunli_Yunli_Ability01_Part02"
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
      "ability": "Yunli_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}