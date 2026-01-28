const configAbility = {
  "fileName": "Archer_Archer_Ability02_Part01",
  "childAbilityList": [
    "Archer_Archer_Ability02_Camera",
    "Archer_Archer_Ability02_Part01",
    "Archer_Archer_Ability02_Part02",
    "Archer_Archer_Ability02_End_Camera",
    "Archer_Archer_Ability02_C02_Camera",
    "Archer_Archer_Ability02_C01andC02_Camera"
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
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "Archer_BonusAbility02Ready",
        "invertCondition": true
      },
      "passed": [
        "Deleted bullshit"
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "Archer_BonusAbility02Ready",
        "invertCondition": true
      }
    },
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Archer_Ability02_Part02",
      "isTrigger": true
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "MDF_InBonus",
        "compareType": "=",
        "value2": 0
      },
      "passed": [
        "Deleted bullshit",
        "Deleted bullshit"
      ],
      "failed": [
        "Deleted bullshit",
        "Deleted bullshit"
      ]
    }
  ],
  "references": []
}