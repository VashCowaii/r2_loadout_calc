const configAbility = {
  "fileName": "4033012_Monster_XP_Elite01_02_LocalLegend_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Define Custom Variable",
      "scope": "ContextAbility",
      "variableName": "FireBallNum",
      "value": 1
    },
    {
      "name": "Trigger Multiple Functions",
      "functionList": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1380139364\">Monster_XP_Elite01_02_Ability02_Ball_ParallelTargetFinding</a>",
          "delayInterval": 0.2537,
          "parallelCount": 5
        }
      ]
    },
    "Trigger: Attack End",
    "Trigger: Ability End"
  ],
  "functions": [
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1380139364\">Monster_XP_Elite01_02_Ability02_Ball_ParallelTargetFinding</a>",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "FireBallNum",
            "compareType": "=",
            "value2": 1,
            "contextScope": "ContextAbility"
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemies by Aggro OR Random}}"
              },
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "Trigger Multiple Functions",
                  "functionList": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1983891597\">Monster_XP_Elite01_02_Ability02_Ball_Fire</a>"
                    }
                  ]
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "Trigger Multiple Functions",
                  "functionList": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1983891597\">Monster_XP_Elite01_02_Ability02_Ball_Fire</a>"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__1983891597\">Monster_XP_Elite01_02_Ability02_Ball_Fire</a>",
      "parse": [
        {
          "name": "SWITCH",
          "switchValue": {
            "operator": "Variables[0] (SummonType) || RETURN",
            "displayLines": "SummonType",
            "constants": [],
            "variables": [
              "SummonType"
            ]
          },
          "caseEvents": [
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 1
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 2
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 3
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 4
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 5
            }
          ],
          "defaultEvents": []
        },
        {
          "name": "Shot Fired"
        },
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "FireBallNum",
          "context": "ContextAbility",
          "value": 1,
          "max": 100
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "value1": "CurrentHP%",
            "compareType": ">",
            "value2": 0
          },
          "passed": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_TargetMaxHp",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_TargetCurrentHp",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Physical",
                "Damage": {
                  "operator": "Variables[0] ({[Skill02[0]]}) || Constants[0] (1) || Variables[1] (_TargetCurrentHp) || Variables[2] (_TargetMaxHp) || DIV || Variables[3] ({[Skill02[1]]}) || MUL || ADD || MUL || RETURN",
                  "displayLines": "({[Skill02[0]]} * (1 + ((_TargetCurrentHp / _TargetMaxHp) * {[Skill02[1]]})))",
                  "constants": [
                    1
                  ],
                  "variables": [
                    "{[Skill02[0]]}",
                    "_TargetCurrentHp",
                    "_TargetMaxHp",
                    "{[Skill02[1]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "EnergyGainPercent": "100%"
              }
            }
          ]
        }
      ]
    }
  ],
  "references": []
}