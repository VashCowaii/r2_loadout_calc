const configAbility = {
  "fileName": "Jiaoqiu_Jiaoqiu_Ability03_Part01",
  "childAbilityList": [
    "Jiaoqiu_Jiaoqiu_Ability03_Camera",
    "Jiaoqiu_Jiaoqiu_Ability03_EnterReady",
    "Jiaoqiu_Jiaoqiu_Ability03_Part01",
    "Jiaoqiu_Jiaoqiu_Ability03_Part02"
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
      "ability": "Jiaoqiu_Ability03_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}