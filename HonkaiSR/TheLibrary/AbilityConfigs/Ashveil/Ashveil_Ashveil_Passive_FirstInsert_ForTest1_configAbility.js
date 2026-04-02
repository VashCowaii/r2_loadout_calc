const configAbility = {
  "fileName": "Ashveil_Ashveil_Passive_FirstInsert_ForTest1",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Deleted bullshit",
    "Deleted bullshit",
    {
      "name": "Looped Event",
      "maxLoops": 1,
      "conditions": {
        "name": "Compare: Variable",
        "value1": "Ashveil_NeedContinueInsert",
        "compareType": "=",
        "value2": 1
      },
      "Event": [
        {
          "name": "Define Custom Variable",
          "variableName": "Ashveil_NeedContinueInsert",
          "value": 0
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1185293706\">Ashveil_Ability02_Debuff</a>[<span class=\"descriptionNumberColor\">Bait</span>]"
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1569458515\">Ashveil_InsertAbility_LastTarget</a>"
            },
            {
              "name": "Looped Event",
              "maxLoops": 10,
              "Event": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Thunder",
                    "Damage": {
                      "displayLines": 1
                    },
                    "HitSplit": 0.1,
                    "Toughness": {
                      "operator": "Variables[0] (ST Toughness Value) || RETURN",
                      "displayLines": "ST Toughness Value",
                      "constants": [],
                      "variables": [
                        "ST Toughness Value"
                      ]
                    },
                    "Tags": null,
                    "attackType": "Follow-up"
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Living State",
                "state": "Mask_AliveOnly",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Ashveil_NeedContinueInsert",
                  "value": 1
                }
              ]
            }
          ]
        }
      ]
    },
    "Trigger: Attack End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  }
}