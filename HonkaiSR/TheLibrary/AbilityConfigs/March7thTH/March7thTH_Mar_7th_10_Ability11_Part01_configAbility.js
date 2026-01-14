const configAbility = {
  "fileName": "March7thTH_Mar_7th_10_Ability11_Part01",
  "childAbilityList": [
    "March7thTH_Mar_7th_10_Ability11_Part01",
    "March7thTH_Mar_7th_10_Ability11_Part02",
    "March7thTH_Mar_7th_10_Ability11_Camera",
    "March7thTH_Mar_7th_10_Ability11_Camera_Alt"
  ],
  "skillTrigger": "Skill11",
  "abilityType": "Basic ATK",
  "energy": 30,
  "toughnessList": [
    5,
    0,
    0
  ],
  "parse": [
    {
      "name": "Define Custom Variable",
      "scope": "ContextCaster",
      "variableName": "Skill11_HitCount",
      "value": 0
    },
    {
      "name": "Looped Event",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Random Chance",
            "chance": {
              "operator": "Variables[0] (Skill11_FixedChance) || Variables[1] (MAR7_HUNT_OBJECT_UNUSED_3) || ADD || RETURN",
              "displayLines": "(Skill11_FixedChance + MAR7_HUNT_OBJECT_UNUSED_3)",
              "constants": [],
              "variables": [
                "Skill11_FixedChance",
                "MAR7_HUNT_OBJECT_UNUSED_3"
              ]
            }
          },
          {
            "name": "Compare: Variable",
            "value1": "Skill11_HitCount",
            "compareType": "<",
            "value2": {
              "operator": "Variables[0] (3) || RETURN",
              "displayLines": "3",
              "constants": [],
              "variables": [
                3
              ]
            },
            "contextScope": "ContextCaster"
          }
        ]
      },
      "Event": [
        {
          "name": "Define Custom Variable",
          "scope": "ContextCaster",
          "variableName": "Skill11_HitCount",
          "value": {
            "operator": "Variables[0] (Skill11_HitCount) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "(Skill11_HitCount + 1)",
            "constants": [
              1
            ],
            "variables": [
              "Skill11_HitCount"
            ]
          }
        }
      ]
    },
    {
      "name": "Trigger Ability",
      "from": "Caster",
      "ability": "Mar_7th_10_Ability11_Part02",
      "isTrigger": true
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "Skill11_HitCount",
        "compareType": ">",
        "value2": {
          "operator": "Constants[0] (4) || Variables[0] (Skill11_BasicCount) || SUB || RETURN",
          "displayLines": "(4 - Skill11_BasicCount)",
          "constants": [
            4
          ],
          "variables": [
            "Skill11_BasicCount"
          ]
        },
        "contextScope": "ContextCaster"
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