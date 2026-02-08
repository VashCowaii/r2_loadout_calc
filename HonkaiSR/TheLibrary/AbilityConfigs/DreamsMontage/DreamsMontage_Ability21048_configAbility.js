const configAbility = {
  "fileName": "DreamsMontage_Ability21048",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"458962844\">LC_21048_Main</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__458962844\">LC_21048_Main</a>",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "Flag_21048_SPAddCount",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Attack Targets of Modifier Holder}}"
              },
              "includeDyingTargets": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "Break"
              },
              "ifTargetFound": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Flag_21048_AttackBreak",
                  "value": 1
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "Flag_21048_AttackBreak",
                    "compareType": "=",
                    "value2": 1
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "Flag_21048_SPAddCount",
                    "compareType": "<",
                    "value2": {
                      "operator": "Variables[0] (2) || RETURN",
                      "displayLines": "2",
                      "constants": [],
                      "variables": [
                        2
                      ]
                    }
                  }
                ]
              },
              "passed": [
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": {
                    "operator": "Variables[0] (3) || RETURN",
                    "displayLines": "3",
                    "constants": [],
                    "variables": [
                      3
                    ]
                  },
                  "isFixed": "* ERR"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "Flag_21048_AttackBreak",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "Flag_21048_SPAddCount",
                  "value": {
                    "operator": "Variables[0] ([object Object]) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "([object Object] + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      {}
                    ]
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ],
  "isLightcone": true,
  "desc": "Increases the wearer's SPD by #1[i]%. After attacking enemy targets that are Weakness Broken, regenerates #2[f1] Energy. This effect can trigger up to #3[i] time(s) per turn.",
  "params": [
    [
      0.08,
      3,
      2
    ],
    [
      0.09,
      3.5,
      2
    ],
    [
      0.1,
      4,
      2
    ],
    [
      0.11,
      4.5,
      2
    ],
    [
      0.12,
      5,
      2
    ]
  ]
}