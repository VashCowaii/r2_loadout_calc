const configAbility = {
  "fileName": "Jingliuv0_Jingliu_Ability03_Part01",
  "childAbilityList": [
    "Jingliuv0_Jingliu_Ability03_Camera",
    "Jingliuv0_Jingliu_Ability03_Part01",
    "Jingliuv0_Jingliu_Ability03_Part02",
    "Jingliuv0_Jingliu_Ability03_EnterReady"
  ],
  "skillTrigger": "Skill03",
  "abilityType": "Ultimate",
  "energy": 5,
  "toughnessList": [
    20,
    0,
    20
  ],
  "parse": [
    "Deleted bullshit",
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Jingliu_Ability03_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}