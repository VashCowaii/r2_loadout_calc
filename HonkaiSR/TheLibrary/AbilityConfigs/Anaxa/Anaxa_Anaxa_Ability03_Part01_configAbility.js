const configAbility = {
  "fileName": "Anaxa_Anaxa_Ability03_Part01",
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
      "from": "Caster",
      "ability": "Anaxa_Ability03_Part02",
      "isTrigger": true
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Target Count",
        "target": "Anaxa Ultimate Targets",
        "compareType": ">=",
        "value2": 3,
        "isClientOnly": true
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Is Entity a Part/Body Extension",
            "target": "Anaxa Ultimate Targets (3 MAX)",
            "invertCondition": true
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Target Count",
        "target": "Anaxa Ultimate Targets",
        "compareType": ">=",
        "value2": 2,
        "isClientOnly": true
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Is Entity a Part/Body Extension",
            "target": "Anaxa Ultimate Targets (2 MAX)",
            "invertCondition": true
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Target Count",
        "target": "Anaxa Ultimate Targets",
        "compareType": ">=",
        "value2": 4,
        "isClientOnly": true
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Is Entity a Part/Body Extension",
            "target": "Anaxa Ultimate Targets (4 MAX)",
            "invertCondition": true
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Target Count",
        "target": "Anaxa Ultimate Targets",
        "compareType": ">=",
        "value2": 1,
        "isClientOnly": true
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Is Entity a Part/Body Extension",
            "target": "Anaxa Ultimate Targets (1 MAX)",
            "invertCondition": true
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Target Count",
        "target": "Anaxa Ultimate Targets",
        "compareType": ">=",
        "value2": 5,
        "isClientOnly": true
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Is Entity a Part/Body Extension",
            "target": "Anaxa Ultimate Targets (5 MAX)",
            "invertCondition": true
          }
        }
      ]
    }
  ],
  "references": []
}