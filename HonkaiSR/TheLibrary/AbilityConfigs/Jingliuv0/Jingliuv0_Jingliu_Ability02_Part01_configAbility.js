const configAbility = {
  "fileName": "Jingliuv0_Jingliu_Ability02_Part01",
  "childAbilityList": [
    "Jingliuv0_Jingliu_Ability02_Camera",
    "Jingliuv0_Jingliu_Ability02_Part01",
    "Jingliuv0_Jingliu_Ability02_Part02"
  ],
  "skillTrigger": "Skill02",
  "abilityType": "Skill",
  "energy": 20,
  "toughnessList": [
    20,
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
      "ability": "Jingliu_Ability02_Part02",
      "isTrigger": true
    },
    "Deleted bullshit",
    "Deleted bullshit"
  ],
  "references": []
}