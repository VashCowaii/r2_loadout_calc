const configAbility = {
  "fileName": "Tingyun_TingYun_Ability02_Part01",
  "childAbilityList": [
    "Tingyun_Tingyun_Ability02_Camera_Self",
    "Tingyun_TingYun_Ability02_Part01",
    "Tingyun_TingYun_Ability02_Part02",
    "Tingyun_Tingyun_Ability02_Camera_Others"
  ],
  "skillTrigger": "Skill02",
  "abilityType": "Skill",
  "energy": 30,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "TingYun_Ability02_Part02",
      "isTrigger": true
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Current Action Holder Is",
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        }
      },
      "passed": [
        "Deleted bullshit"
      ],
      "failed": [
        "Deleted bullshit"
      ]
    }
  ],
  "references": []
}