const configAbility = {
  "fileName": "3025013_Monster_W3_Sunday_IF_Ability09_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Compare: Variable",
            "value1": "HardLevel",
            "compareType": ">=",
            "value2": 3
          },
          {
            "name": "Compare: Variable",
            "value1": "W3_Sunday_00_TimePause_ActionCounter",
            "compareType": "NOT=",
            "value2": 3,
            "contextScope": "TargetEntity"
          }
        ]
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-121792370\">Enemy_W3_Sunday_IF_Ability08_TheWorld_V4</a>",
        "invertCondition": true
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-121792370\">Enemy_W3_Sunday_IF_Ability08_TheWorld_V4</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-64196124\">Enemy_W3_Sunday_IF_Ability09_ChargeEffect_01</a>"
        }
      ]
    },
    {
      "name": "SWITCH",
      "switchValue": {
        "operator": "Variables[0] (MDF_Skill10_TurnCount) || RETURN",
        "displayLines": "MDF_Skill10_TurnCount",
        "constants": [],
        "variables": [
          "MDF_Skill10_TurnCount"
        ]
      },
      "caseEvents": [
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 7
        },
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 6
        },
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 5
        },
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 4,
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1898432741\">Enemy_W3_Sunday_IF_Ability09_ChargeEffect_TearOutline</a>"
            }
          ]
        },
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 3
        },
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 2
        },
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 1
        }
      ],
      "defaultEvents": []
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "W3_Sunday_00_TimePause_ActionCounter",
        "compareType": "=",
        "value2": 5,
        "contextScope": "TargetEntity"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-13863267\">Enemy_W3_Sunday_IF_Ability09_ChargeEffect_02</a>"
        }
      ],
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "W3_Sunday_00_TimePause_ActionCounter",
            "compareType": "=",
            "value2": 3,
            "contextScope": "TargetEntity"
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              }
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"922383342\">Enemy_W3_Sunday_IF_CharacterChangePhase_P3_1</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"888828104\">Enemy_W3_Sunday_IF_CharacterChangePhase_P3_3</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-30640886\">Enemy_W3_Sunday_IF_Ability09_ChargeEffect_03</a>"
            }
          ]
        }
      ]
    },
    {
      "name": "SWITCH",
      "switchValue": {
        "operator": "Variables[0] (MDF_Skill10_TurnCount) || RETURN",
        "displayLines": "MDF_Skill10_TurnCount",
        "constants": [],
        "variables": [
          "MDF_Skill10_TurnCount"
        ]
      },
      "caseEvents": [
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 7
        },
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 6
        },
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 5
        },
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 4
        },
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 3
        },
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 2
        },
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 1
        }
      ],
      "defaultEvents": []
    },
    {
      "name": "SWITCH",
      "switchValue": {
        "operator": "Variables[0] (MDF_Skill10_TurnCount) || RETURN",
        "displayLines": "MDF_Skill10_TurnCount",
        "constants": [],
        "variables": [
          "MDF_Skill10_TurnCount"
        ]
      },
      "caseEvents": [
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 7,
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-983902167\">Enemy_W3_Sunday_Ability09_DelayToast</a>"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "Weakness_CountDown",
              "value": 7
            }
          ]
        },
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 6,
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "Weakness_CountDown",
              "value": 6
            }
          ]
        },
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 5,
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "Weakness_CountDown",
              "value": 5
            }
          ]
        },
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 4,
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "Weakness_CountDown",
              "value": 4
            }
          ]
        },
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 3,
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "Weakness_CountDown",
              "value": 3
            }
          ]
        },
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 2,
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "Weakness_CountDown",
              "value": 2
            }
          ]
        },
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 1,
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "Weakness_CountDown",
              "value": 1
            }
          ]
        }
      ],
      "defaultEvents": []
    },
    {
      "name": "Define Custom Variable with Added Value",
      "target": {
        "name": "Target Name",
        "target": "{{Modifier Holder}}"
      },
      "variableName": "W3_Sunday_00_TimePause_ActionCounter",
      "context": "TargetEntity",
      "value": -1,
      "min": -1,
      "max": 7
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": {
        "operator": "Constants[0] (7) || Variables[0] (MDF_Skill10_TurnCount) || SUB || RETURN",
        "displayLines": "(7 - MDF_Skill10_TurnCount)",
        "constants": [
          7
        ],
        "variables": [
          "MDF_Skill10_TurnCount"
        ]
      },
      "entityClass": "Enemy",
      "target": {
        "name": "Target Name",
        "target": "{{Modifier Holder}}"
      },
      "maximum": 7,
      "assignState": "True",
      "state": "Active"
    },
    {
      "name": "Assign Advance/Delay to Current Ability Use",
      "adjustmentValue": 1.728,
      "adjustmentType": "="
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-985522063\">Enemy_W3_Sunday_Ability09_ReactionModel</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "W3_Sunday_00_TimePause_ActionCounter",
        "compareType": "=",
        "value2": 2,
        "contextScope": "TargetEntity"
      },
      "passed": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Enemy Team"
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Enemy Team",
            "location": "Max"
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team",
                "location": "Left"
              },
              {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team",
                "location": "Medium"
              },
              {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team",
                "location": "Right",
                "invertCondition": true
              }
            ]
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team",
                "location": "Left",
                "invertCondition": true
              },
              {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team",
                "location": "Medium"
              },
              {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team",
                "location": "Right"
              }
            ]
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "HardLevel",
        "compareType": ">=",
        "value2": 3
      }
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-983902167\">Enemy_W3_Sunday_Ability09_DelayToast</a>",
      "execute": [
        {
          "eventTrigger": "Action Choice Window [Anyone]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "W3_Sunday_00_TimePause_ActionCounter"
      ]
    }
  ]
}