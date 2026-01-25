const configAbility = {
  "fileName": "Boothill_Boothill_Ability11_Part01",
  "childAbilityList": [
    "Boothill_Boothill_Ability11_Camera",
    "Boothill_Boothill_Ability11_End_Camera",
    "Boothill_Boothill_Ability11_Bonus_Camera",
    "Boothill_Boothill_Ability11_Part01",
    "Boothill_Boothill_Ability11_Part02"
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
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Boothill_Ability11_Part02",
      "isTrigger": true
    },
    "Deleted bullshit",
    {
      "name": "WAIT FOR",
      "condition": {
        "name": "Compare: Variable",
        "value1": "Skill11_Bonus_Check",
        "compareType": "NOT=",
        "value2": 0
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "Skill11_Bonus_Check",
        "compareType": ">",
        "value2": 0
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Active: Fast-Forward Animations"
          }
        },
        "Deleted bullshit",
        {
          "name": "Clear DMG Numbers(UI)",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Active: Fast-Forward Animations"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Living State",
            "state": "Mask_AliveOrLimbo",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "invertCondition": true
          }
        }
      ],
      "failed": [
        "Deleted bullshit"
      ]
    }
  ],
  "references": []
}