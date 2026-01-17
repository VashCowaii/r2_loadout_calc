const configAbility = {
  "fileName": "DanHengIL_DanHengIL_Ability12_Part01",
  "childAbilityList": [
    "DanHengIL_DanHengIL_Ability12_Camera",
    "DanHengIL_DanHengIL_Ability12_Part01",
    "DanHengIL_DanHengIL_Ability12_Part02"
  ],
  "skillTrigger": "Skill12",
  "abilityType": "Basic ATK",
  "energy": 35,
  "toughnessList": [
    30,
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
      "ability": "DanHengIL_Ability12_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}