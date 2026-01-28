const configAbility = {
  "fileName": "DanHengPT_DanHengPT_Ability02_Part01",
  "childAbilityList": [
    "DanHengPT_DanHengPT_Ability02_Camera",
    "DanHengPT_DanHengPT_Ability02_Camera_End",
    "DanHengPT_DanHengPT_Ability02_Part01",
    "DanHengPT_DanHengPT_Ability02_Part02",
    "DanHengPT_DanHengPT_BE_AddShield"
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
      "ability": "DanHengPT_Ability02_Part02",
      "isTrigger": true
    },
    "Deleted bullshit",
    "Deleted bullshit"
  ],
  "references": []
}