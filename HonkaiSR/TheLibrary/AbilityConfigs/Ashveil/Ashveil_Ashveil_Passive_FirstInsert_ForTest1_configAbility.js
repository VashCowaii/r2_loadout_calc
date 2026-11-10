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
      "conditions": {
        "name": "Compare: Variable",
        "value1": "Ashveil_NeedContinueInsert",
        "compareType": "=",
        "value2": 1
      },
      "maxLoops": 1,
      "execute": [
        {
          "name": "Define Custom Variable",
          "value": 0,
          "variableName": "Ashveil_NeedContinueInsert"
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
              "execute": [
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
                      "displayLines": "ST Toughness Value"
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
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "livingState": "Mask_AliveOnly",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": 1,
                  "variableName": "Ashveil_NeedContinueInsert"
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