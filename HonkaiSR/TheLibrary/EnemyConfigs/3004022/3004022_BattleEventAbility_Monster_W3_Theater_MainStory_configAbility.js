const configAbility = {
  "fileName": "3004022_BattleEventAbility_Monster_W3_Theater_MainStory",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "LoopCount",
        "compareType": ">=",
        "value2": 3
      },
      "passed": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "variableName": "MonsterType_W3_Dinosaur_00"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable",
              "value": {
                "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                "displayLines": "{[Skill04[0]]}",
                "constants": [],
                "variables": [
                  "{[Skill04[0]]}"
                ]
              },
              "variableName": "MainStoryDamage"
            }
          ]
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "LoopCount",
        "compareType": ">=",
        "value2": 4
      },
      "passed": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "variableName": "MonsterType_W3_Dinosaur_00"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable",
              "value": {
                "operator": "Variables[0] ({[Skill04[1]]}) || RETURN",
                "displayLines": "{[Skill04[1]]}",
                "constants": [],
                "variables": [
                  "{[Skill04[1]]}"
                ]
              },
              "variableName": "MainStoryDamage"
            }
          ]
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "LoopCount",
        "compareType": ">=",
        "value2": 7
      },
      "passed": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "variableName": "MonsterType_W3_Dinosaur_00"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable",
              "value": {
                "operator": "Variables[0] ({[Skill04[2]]}) || RETURN",
                "displayLines": "{[Skill04[2]]}",
                "constants": [],
                "variables": [
                  "{[Skill04[2]]}"
                ]
              },
              "variableName": "MainStoryDamage"
            }
          ]
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "searchRandom": true,
      "conditions": {
        "name": "Check Boolean Value",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "variableName": "ENEMIES_OBJECT_UNUSED__114"
      },
      "ifTargetFound": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "LoopCount",
            "compareType": ">=",
            "value2": 3
          },
          "passed": [
            {
              "name": "Looped Event",
              "maxLoops": 3,
              "execute": [
                {
                  "name": "Consume",
                  "consumeFrom": "MaxHP",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target List}}"
                  },
                  "consumePercent": {
                    "operator": "Variables[0] (MainStoryDamage) || Variables[1] (LoopCount) || DIV || RETURN",
                    "displayLines": "(MainStoryDamage / LoopCount)",
                    "constants": [],
                    "variables": [
                      "MainStoryDamage",
                      "LoopCount"
                    ]
                  },
                  "DamageType": "Imaginary"
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "LoopCount",
            "compareType": ">=",
            "value2": 4
          },
          "passed": [
            {
              "name": "Looped Event",
              "maxLoops": 1,
              "execute": [
                {
                  "name": "Consume",
                  "consumeFrom": "MaxHP",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target List}}"
                  },
                  "consumePercent": {
                    "operator": "Variables[0] (MainStoryDamage) || Variables[1] (LoopCount) || DIV || RETURN",
                    "displayLines": "(MainStoryDamage / LoopCount)",
                    "constants": [],
                    "variables": [
                      "MainStoryDamage",
                      "LoopCount"
                    ]
                  },
                  "DamageType": "Imaginary"
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "LoopCount",
            "compareType": ">=",
            "value2": 7
          },
          "passed": [
            {
              "name": "Looped Event",
              "maxLoops": 2,
              "execute": [
                {
                  "name": "Consume",
                  "consumeFrom": "MaxHP",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target List}}"
                  },
                  "consumePercent": {
                    "operator": "Variables[0] (MainStoryDamage) || Variables[1] (LoopCount) || DIV || RETURN",
                    "displayLines": "(MainStoryDamage / LoopCount)",
                    "constants": [],
                    "variables": [
                      "MainStoryDamage",
                      "LoopCount"
                    ]
                  },
                  "DamageType": "Imaginary"
                }
              ]
            },
            {
              "name": "Consume",
              "consumeFrom": "MaxHP",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target List}}"
              },
              "consumePercent": {
                "operator": "Variables[0] (MainStoryDamage) || Variables[1] (LoopCount) || DIV || RETURN",
                "displayLines": "(MainStoryDamage / LoopCount)",
                "constants": [],
                "variables": [
                  "MainStoryDamage",
                  "LoopCount"
                ]
              },
              "DamageType": "Imaginary"
            }
          ]
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "conditions": {
        "name": "Check Boolean Value",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "variableName": "ENEMIES_OBJECT_UNUSED__114"
      },
      "ifTargetFound": [
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "scope": "TargetEntity",
          "value": 0,
          "variableName": "AIFlag"
        },
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "scope": "TargetEntity",
          "value": 1,
          "variableName": "FlopSide"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"665202517\">MModifier_Monster_W3_TV_02_Side2</a>[<span class=\"descriptionNumberColor\">Classroom Channel</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"614869660\">MModifier_Monster_W3_TV_02_Side1</a>[<span class=\"descriptionNumberColor\">Off-Class Channel</span>]"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "LoopCount",
        "compareType": ">=",
        "value2": 7
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"824631784\">Enemy_W3_Theater_MainStoryMark</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1381458312\">Enemy_W3_Theater_MainStoryUltraMark</a>"
    }
  ],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  },
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1381458312\">Enemy_W3_Theater_MainStoryUltraMark</a>",
      "latentQueue": [
        "AIFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__824631784\">Enemy_W3_Theater_MainStoryMark</a>",
      "latentQueue": [
        "AIFlag"
      ]
    }
  ]
}