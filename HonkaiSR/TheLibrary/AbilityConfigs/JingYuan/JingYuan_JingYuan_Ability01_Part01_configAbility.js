const configAbility = {
  "fileName": "JingYuan_JingYuan_Ability01_Part01",
  "childAbilityList": [
    "JingYuan_JingYuan_Ability01_Camera",
    "JingYuan_JingYuan_Ability01_Part01",
    "JingYuan_JingYuan_Ability01_Part02"
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
      "ability": "JingYuan_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}