const configAbility = {
  "fileName": "60026_Phainon_Ability22_v2_Part02_MainStory",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Dispel Debuffs",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    },
    {
      "name": "Define Custom Variable",
      "scope": "ContextAbility",
      "value": 0,
      "variableName": "_count"
    },
    {
      "name": "Define Custom Variable",
      "scope": "ContextAbility",
      "value": {
        "displayLines": "((PHAINON_OBJECT_UNUSED_1 - PHAINON_OBJECT_UNUSED_2) / (Count - 1))"
      },
      "variableName": "_delta_frame"
    },
    {
      "name": "Looped Event",
      "maxLoops": {
        "displayLines": "Count"
      },
      "execute": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"247970287\">Bounce_SelectTarget</a>",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "paramSequence": [
            {
              "name": "Define Custom Variable",
              "scope": "ContextAbility",
              "value": {
                "displayLines": "(_count + 1)"
              },
              "variableName": "_count"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Physical",
                "Damage": {
                  "displayLines": 1
                },
                "Toughness": {
                  "displayLines": 15
                },
                "instanceTag": "Phainon_Skill22",
                "Tags": null
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Define Custom Variable with Team Count",
      "variableName": "ADF_TargetCount",
      "scope": "ContextAbility",
      "readTarget": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      }
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "includeDyingTargets": true,
      "ifTargetFound": [
        {
          "name": "Define Custom Variable with Stat",
          "variableName": "_CurrentHp",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "displayLines": 1
            },
            "DamageFlat": {
              "displayLines": "_CurrentHp"
            },
            "HitSplit": {
              "displayLines": "(1 / ADF_TargetCount)"
            },
            "Toughness": {
              "displayLines": 30
            },
            "instanceTag": "Phainon_Skill22",
            "Tags": null,
            "behaviorTag": "DirectlyLoseHpHit"
          }
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