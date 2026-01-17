const configAbility = {
  "fileName": "Huohuo_Huohuo_Ability02_Part01",
  "childAbilityList": [
    "Huohuo_Huohuo_Ability02_Camera",
    "Huohuo_Huohuo_Ability02_Part01",
    "Huohuo_Huohuo_Ability02_Part02"
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
      "ability": "Huohuo_Ability02_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}