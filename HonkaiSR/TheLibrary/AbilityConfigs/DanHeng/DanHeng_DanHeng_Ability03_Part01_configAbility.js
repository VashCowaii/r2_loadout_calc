const configAbility = {
  "fileName": "DanHeng_DanHeng_Ability03_Part01",
  "childAbilityList": [
    "DanHeng_DanHeng_Ability03_Camera",
    "DanHeng_DanHeng_Ability03_EnterReady",
    "DanHeng_DanHeng_Ability03_Part01",
    "DanHeng_DanHeng_Ability03_Part02"
  ],
  "skillTrigger": "Skill03",
  "abilityType": "Ultimate",
  "energy": 5,
  "toughnessList": [
    30,
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
      "ability": "DanHeng_Ability03_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}