const configAbility = {
  "fileName": "4032070_Monster_W4_IronTombCorePart_01_PassiveAbilityInitiate",
  "skillTrigger": "PassiveSkill01",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-566453718\">Enemy_W4_IronTombCorePart_01_Status</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-566453718\">Enemy_W4_IronTombCorePart_01_Status</a>",
      "modifierFlags": [
        "MuteBreak",
        "STAT_AITargetKeepActionDelay"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Lock HP",
              "threshold": 0.0000010000076
            },
            {
              "name": "Block Advance/Delay Effects",
              "on": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "whitelistTag": 30
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Modify Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "action": "Protected",
              "valueList": [
                "Physical",
                "Fire",
                "Ice",
                "Thunder",
                "Wind",
                "Quantum",
                "Imaginary"
              ]
            },
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "phase": "Phase0"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-304646724\">Enemy_W4_IronTombCorePart_STATSuperArmor</a>"
            }
          ]
        },
        {
          "eventTrigger": "HP Change [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable with Changes to Stats",
              "variableName": "MDF_HPChange"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_HPChange",
                "compareType": "<",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Consume",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Irontomb: Core}}"
                  },
                  "flatConsume": {
                    "operator": "Variables[0] (MDF_HPChange) || INVERT || RETURN",
                    "displayLines": "-MDF_HPChange",
                    "constants": [],
                    "variables": [
                      "MDF_HPChange"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Was Overhealed [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable with Changes to Stats",
              "variableName": "MDF_HPOverflow"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_HPOverflow",
                "compareType": "<",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Consume",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Irontomb: Core}}"
                  },
                  "flatConsume": {
                    "operator": "Variables[0] (MDF_HPOverflow) || INVERT || RETURN",
                    "displayLines": "-MDF_HPOverflow",
                    "constants": [],
                    "variables": [
                      "MDF_HPOverflow"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Locked HP Floor Reached [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-2078801645\">Enemy_W4_IronTombCorePart_Break</a>[<span class=\"descriptionNumberColor\">Grave Wound</span>]",
                "invertCondition": true,
                "justAddedOrActive": true
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "AIFlag",
                  "value": 99
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2078801645\">Enemy_W4_IronTombCorePart_Break</a>[<span class=\"descriptionNumberColor\">Grave Wound</span>]"
                },
                {
                  "name": "Inject Ability Use",
                  "checkOverride": {
                    "name": "Condition Priority",
                    "overridePriority": "MonsterForceKill",
                    "condition": {
                      "name": "Compare: Ability Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Irontomb: Core}}"
                      },
                      "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                      "compareType": "<=",
                      "value2": 0
                    }
                  },
                  "abilityName": "Monster_W4_IronTombCorePart_01_PassiveAbility02_Insert",
                  "priorityTag": "MonsterBuffSelf_Elation",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "allowAbilityTriggers": false
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}