const configAbility = {
  "fileName": "Jiaoqiu_Jiaoqiu_Ability01_Part01",
  "childAbilityList": [
    "Jiaoqiu_Jiaoqiu_Ability01_Camera",
    "Jiaoqiu_Jiaoqiu_Ability01_Part01",
    "Jiaoqiu_Jiaoqiu_Ability01_Part02"
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
    "Deleted bullshit",
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Jiaoqiu_Ability01_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}