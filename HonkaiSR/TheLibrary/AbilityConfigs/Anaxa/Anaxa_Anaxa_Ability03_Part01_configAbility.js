const configAbility = {
  "fileName": "Anaxa_Anaxa_Ability03_Part01",
  "childAbilityList": [
    "Anaxa_Anaxa_Ability03_Camera",
    "Anaxa_Anaxa_Ability03_EnterReady",
    "Anaxa_Anaxa_Ability03_Part01",
    "Anaxa_Anaxa_Ability03_Part02"
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
      "ability": "Anaxa_Ability03_Part02",
      "isTrigger": true
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Target Count",
        "target": {
          "name": "Target Name",
          "target": "{{Anaxa's Ult Target List}}"
        },
        "compareType": ">=",
        "value2": 3,
        "isClientOnly": true
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Is Entity a Part/Body Extension",
            "target": {
              "name": "Target Name",
              "target": "{{Anaxa's Ult Target List}}.[[index2]]"
            },
            "invertCondition": true
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Target Count",
        "target": {
          "name": "Target Name",
          "target": "{{Anaxa's Ult Target List}}"
        },
        "compareType": ">=",
        "value2": 2,
        "isClientOnly": true
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Is Entity a Part/Body Extension",
            "target": {
              "name": "Target Name",
              "target": "{{Anaxa's Ult Target List}}.[[index1]]"
            },
            "invertCondition": true
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Target Count",
        "target": {
          "name": "Target Name",
          "target": "{{Anaxa's Ult Target List}}"
        },
        "compareType": ">=",
        "value2": 4,
        "isClientOnly": true
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Is Entity a Part/Body Extension",
            "target": {
              "name": "Target Name",
              "target": "{{Anaxa's Ult Target List}}.[[index3]]"
            },
            "invertCondition": true
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Target Count",
        "target": {
          "name": "Target Name",
          "target": "{{Anaxa's Ult Target List}}"
        },
        "compareType": ">=",
        "value2": 1,
        "isClientOnly": true
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Is Entity a Part/Body Extension",
            "target": {
              "name": "Target Name",
              "target": "{{Anaxa's Ult Target List}}.[[index0]]"
            },
            "invertCondition": true
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Target Count",
        "target": {
          "name": "Target Name",
          "target": "{{Anaxa's Ult Target List}}"
        },
        "compareType": ">=",
        "value2": 5,
        "isClientOnly": true
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Is Entity a Part/Body Extension",
            "target": {
              "name": "Target Name",
              "target": "{{Anaxa's Ult Target List}}.[[index4]]"
            },
            "invertCondition": true
          }
        }
      ]
    }
  ],
  "references": []
}