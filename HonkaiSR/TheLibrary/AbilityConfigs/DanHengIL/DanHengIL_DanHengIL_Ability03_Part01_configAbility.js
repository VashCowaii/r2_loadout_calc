const configAbility = {
  "fileName": "DanHengIL_DanHengIL_Ability03_Part01",
  "childAbilityList": [
    "DanHengIL_DanHengIL_Ability03_Camera",
    "DanHengIL_DanHengIL_Ability03_EnterReady",
    "DanHengIL_DanHengIL_Ability03_Part01",
    "DanHengIL_DanHengIL_Ability03_Part02"
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
      "ability": "DanHengIL_Ability03_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}