const configAbility = {
  "fileName": "FuXuan_FuXuan_Ability02_Part01",
  "childAbilityList": [
    "FuXuan_FuXuan_Ability02_Part01",
    "FuXuan_FuXuan_Ability02_Part02",
    "FuXuan_FuXuan_Ability02_Camera"
  ],
  "skillTrigger": "Skill02",
  "abilityType": "Skill",
  "energy": 30,
  "toughnessList": [
    0,
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
      "ability": "FuXuan_Ability02_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}