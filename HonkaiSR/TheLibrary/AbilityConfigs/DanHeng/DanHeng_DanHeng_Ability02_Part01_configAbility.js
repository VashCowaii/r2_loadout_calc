const configAbility = {
  "fileName": "DanHeng_DanHeng_Ability02_Part01",
  "childAbilityList": [
    "DanHeng_DanHeng_Ability02_Camera",
    "DanHeng_DanHeng_Ability02_Part01",
    "DanHeng_DanHeng_Ability02_Part02"
  ],
  "skillTrigger": "Skill02",
  "abilityType": "Skill",
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
      "ability": "DanHeng_Ability02_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}