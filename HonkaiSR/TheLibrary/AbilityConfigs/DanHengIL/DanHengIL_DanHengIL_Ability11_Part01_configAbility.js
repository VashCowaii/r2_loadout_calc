const configAbility = {
  "fileName": "DanHengIL_DanHengIL_Ability11_Part01",
  "childAbilityList": [
    "DanHengIL_DanHengIL_Ability11_Camera",
    "DanHengIL_DanHengIL_Ability11_Part01",
    "DanHengIL_DanHengIL_Ability11_Part02"
  ],
  "skillTrigger": "Skill11",
  "abilityType": "Basic ATK",
  "energy": 30,
  "toughnessList": [
    20,
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
      "ability": "DanHengIL_Ability11_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}