const configAbility = {
  "fileName": "Jingliuv0_Jingliu_Ability01_Part01",
  "childAbilityList": [
    "Jingliuv0_Jingliu_Ability01_Camera",
    "Jingliuv0_Jingliu_Ability01_Part01",
    "Jingliuv0_Jingliu_Ability01_Part02"
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
      "ability": "Jingliu_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit",
    "Deleted bullshit"
  ],
  "references": []
}