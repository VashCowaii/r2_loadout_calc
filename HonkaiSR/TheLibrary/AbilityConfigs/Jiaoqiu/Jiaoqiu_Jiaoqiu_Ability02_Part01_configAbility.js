const configAbility = {
  "fileName": "Jiaoqiu_Jiaoqiu_Ability02_Part01",
  "childAbilityList": [
    "Jiaoqiu_Jiaoqiu_Ability02_Camera",
    "Jiaoqiu_Jiaoqiu_Ability02_Part01",
    "Jiaoqiu_Jiaoqiu_Ability02_Part02"
  ],
  "skillTrigger": "Skill02",
  "abilityType": "Skill",
  "energy": 30,
  "toughnessList": [
    20,
    0,
    10
  ],
  "parse": [
    "Deleted bullshit",
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Jiaoqiu_Ability02_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}