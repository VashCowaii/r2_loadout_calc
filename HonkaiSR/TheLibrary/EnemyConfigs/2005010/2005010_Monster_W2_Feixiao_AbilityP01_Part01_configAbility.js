const configAbility = {
  "fileName": "2005010_Monster_W2_Feixiao_AbilityP01_Part01",
  "childAbilityList": [
    "2005010_Monster_W2_Feixiao_AbilityP01_Camera",
    "2005010_Monster_W2_Feixiao_AbilityP01_Part1_Camera",
    "2005010_Monster_W2_Feixiao_AbilityP01_Part01",
    "2005010_Monster_W2_Feixiao_AbilityP01_Part02"
  ],
  "skillTrigger": "SkillP01",
  "abilityType": "Skill",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "inherentTarget": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "ability": "Monster_W2_Feixiao_AbilityP01_Part02",
      "isTrigger": true
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "HP_Bars_Remaining",
        "compareType": "=",
        "value2": 1
      },
      "passed": [
        "Deleted bullshit"
      ],
      "failed": [
        "Deleted bullshit"
      ]
    },
    "Deleted bullshit"
  ],
  "references": []
}