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
      "value": 0,
      "variableName": "Skill11_HitCount"
    },
    {
      "name": "Looped Event",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Random Chance",
            "chance": {
              "displayLines": "(Skill11_FixedChance + MAR7_HUNT_OBJECT_UNUSED_3)"
            }
          },
          {
            "name": "Compare: Variable",
            "value1": "Skill11_HitCount",
            "compareType": "<",
            "value2": {
              "displayLines": "3"
            },
            "contextScope": "ContextCaster"
          }
        ]
      },
      "execute": [
        {
          "name": "Define Custom Variable",
          "scope": "ContextCaster",
          "value": {
            "displayLines": "(Skill11_HitCount + 1)"
          },
          "variableName": "Skill11_HitCount"
        }
      ]
    },
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
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
          "displayLines": "(4 - Skill11_BasicCount)"
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
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "realTargetData": {
    "primaryTarget": "Select Hostile Target"
  }
}