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
      "variableName": "_count",
      "value": 0,
      "scope": "ContextAbility"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "_delta_frame",
      "value": {
        "operator": "Variables[0] (PHAINON_OBJECT_UNUSED_1) || Variables[1] (PHAINON_OBJECT_UNUSED_2) || SUB || Variables[2] (Count) || Constants[0] (1) || SUB || DIV || RETURN",
        "displayLines": "((PHAINON_OBJECT_UNUSED_1 - PHAINON_OBJECT_UNUSED_2) / (Count - 1))",
        "constants": [
          1
        ],
        "variables": [
          "PHAINON_OBJECT_UNUSED_1",
          "PHAINON_OBJECT_UNUSED_2",
          "Count"
        ]
      },
      "scope": "ContextAbility"
    },
    {
      "name": "Looped Event",
      "maxLoops": {
        "operator": "Variables[0] (Count) || RETURN",
        "displayLines": "Count",
        "constants": [],
        "variables": [
          "Count"
        ]
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
              "variableName": "_count",
              "value": {
                "operator": "Variables[0] (_count) || Constants[0] (1) || ADD || RETURN",
                "displayLines": "(_count + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "_count"
                ]
              },
              "scope": "ContextAbility"
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
              "operator": "Variables[0] (_CurrentHp) || RETURN",
              "displayLines": "_CurrentHp",
              "constants": [],
              "variables": [
                "_CurrentHp"
              ]
            },
            "HitSplit": {
              "operator": "Constants[0] (1) || Variables[0] (ADF_TargetCount) || DIV || RETURN",
              "displayLines": "(1 / ADF_TargetCount)",
              "constants": [
                1
              ],
              "variables": [
                "ADF_TargetCount"
              ]
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