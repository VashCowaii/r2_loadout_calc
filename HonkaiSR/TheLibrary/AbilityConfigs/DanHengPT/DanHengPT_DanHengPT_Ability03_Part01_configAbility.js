const configAbility = {
  "fileName": "DanHengPT_DanHengPT_Ability03_Part01",
  "childAbilityList": [
    "DanHengPT_DanHengPT_Ability03_Camera",
    "DanHengPT_DanHengPT_Ability03_EnterReady",
    "DanHengPT_DanHengPT_Ability03_Part01",
    "DanHengPT_DanHengPT_Ability03_Part02"
  ],
  "skillTrigger": "Skill03",
  "abilityType": "Ultimate",
  "energy": 5,
  "toughnessList": [
    0,
    20,
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
      "ability": "DanHengPT_Ability03_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}