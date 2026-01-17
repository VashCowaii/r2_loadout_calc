const configAbility = {
  "fileName": "JingYuan_JingYuan_Ability03_Part01",
  "childAbilityList": [
    "JingYuan_JingYuan_Ability03_Camera",
    "JingYuan_JingYuan_Ability03_EnterReady",
    "JingYuan_JingYuan_Ability03_Part01",
    "JingYuan_JingYuan_Ability03_Part02"
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
      "ability": "JingYuan_Ability03_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}