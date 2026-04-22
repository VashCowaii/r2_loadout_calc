const configAbility = {
  "fileName": "-731110892_BattleEventAbility_Elation_Ability03_Entry",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "variableName": "ElationTime_CanStartElationTime",
      "value": 0
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Elation: Currency Wars Full Activated OffFieldList}} + {{Elation: All Battle Events}} + {{Elation: Currency Wars Gear2012}}"
      },
      "maxTargets": 1,
      "ifTargetFound": [
        {
          "name": "Define Custom Variable",
          "variableName": "ElationTime_CanStartElationTime",
          "value": 1
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Elation: Player Team with Unselectables with Elation Skills}}"
      },
      "conditions": {
        "name": "Living State",
        "state": "Mask_AliveOnly",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        }
      },
      "ifTargetFound": [
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "STAT_CTRL",
                "invertCondition": true
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "DisableAction",
                "invertCondition": true
              }
            ]
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "ElationTime_CanStartElationTime",
              "value": 1
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "ElationTime_CanStartElationTimeTemp",
              "value": 1
            },
            {
              "name": "Reconstruct Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "conditions": {
                "name": "AND",
                "conditionList": [
                  "Unknown CONDITION3 (Not always an error)[1: true]"
                ]
              },
              "flagFilter": [
                "STAT_CTRL",
                "DisableAction"
              ],
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "ElationTime_CanStartElationTimeTemp",
                  "value": 0
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "ElationTime_CanStartElationTimeTemp",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "ElationTime_CanStartElationTime",
                  "value": 1
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "ElationTime_CanStartElationTime",
        "compareType": "=",
        "value2": 1
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-2114512619\">MGridFight_Origin_2012_LE_ElationBE_Bonus</a>"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target",
                "target": {
                  "name": "Target Name",
                  "target": "{{Current Turn Owner}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                }
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "StageAbility_GridFight_Origin_2012_ElationBE_Insert",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "priorityTag": "CharacterAttackFromSelf",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": false
                }
              ]
            }
          ]
        },
        {
          "name": "Inject Extra-Turn",
          "actionTag": null,
          "skillIndex": 1,
          "valuePerStack": {
            "ElationTime_OverrideElationPoint": {
              "operator": "Variables[0] (ElationTime_OverrideElationPointTemp) || RETURN",
              "displayLines": "ElationTime_OverrideElationPointTemp",
              "constants": [],
              "variables": [
                "ElationTime_OverrideElationPointTemp"
              ]
            },
            "ElationTime_IsNoConsumeTemp2": {
              "operator": "Variables[0] (ElationTime_IsNoConsumeTemp) || RETURN",
              "displayLines": "ElationTime_IsNoConsumeTemp",
              "constants": [],
              "variables": [
                "ElationTime_IsNoConsumeTemp"
              ]
            }
          },
          "sourceOverride": "Add Target by Current Extra-Turn Source",
          "dynamicStringsArray": [
            {
              "name": "ElationTime_CustomTag",
              "value": {
                "Custom": true,
                "Key": "ElationTime_CustomTagTemp"
              }
            }
          ],
          "afterInjection": [],
          "priorityTag": "AhaInstantStart",
          "priorityTagPending": "Highest"
        }
      ],
      "failed": [
        {
          "name": "Inject Extra-Turn",
          "actionTag": "ElationTime_CustomTagTemp",
          "forcedPunchline": {
            "operator": "Variables[0] (ElationTime_OverrideElationPointTemp) || RETURN",
            "displayLines": "ElationTime_OverrideElationPointTemp",
            "constants": [],
            "variables": [
              "ElationTime_OverrideElationPointTemp"
            ]
          },
          "skillIndex": 2,
          "afterInjection": []
        },
        {
          "name": "Define Custom Variable",
          "scope": "ContextCaster",
          "variableName": "ElationTime_IsNoConsume",
          "value": {
            "operator": "Variables[0] (ElationTime_IsNoConsumeTemp) || RETURN",
            "displayLines": "ElationTime_IsNoConsumeTemp",
            "constants": [],
            "variables": [
              "ElationTime_IsNoConsumeTemp"
            ]
          }
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "scope": "ContextAbility",
      "variableName": "ElationTime_IsNoConsumeTemp",
      "value": 0
    },
    {
      "name": "Define Custom Variable",
      "scope": "ContextAbility",
      "variableName": "ElationTime_OverrideElationPointTemp",
      "value": -1
    },
    {
      "name": "Define Custom String with Value",
      "value": {},
      "scope": "ContextAbility",
      "variableName": "ElationTime_CustomTagTemp"
    },
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "dynamicStringsArray": [
    {
      "name": "ElationTime_CustomTagTemp",
      "value": "-1"
    }
  ]
}