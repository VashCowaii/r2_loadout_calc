const configAbility = {
  "fileName": "YaoGuang_YaoGuang_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{All Team Members}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-2059745464\">G_YaoGuang_Ability03_AllDamageTypePenetrate</a>[<span class=\"descriptionNumberColor\">Hexagram of Feathered Fortune</span>]",
      "duration": {
        "operator": "Variables[0] (3) || RETURN",
        "displayLines": "3",
        "constants": [],
        "variables": [
          3
        ]
      },
      "valuePerStack": {
        "MDF_PropertyValue": {
          "operator": "Variables[0] (0.2) || RETURN",
          "displayLines": "0.2",
          "constants": [],
          "variables": [
            0.2
          ]
        }
      }
    },
    {
      "name": "Adjust Team Punchline Value",
      "value": {
        "operator": "Variables[0] (5) || RETURN",
        "displayLines": "5",
        "constants": [],
        "variables": [
          5
        ]
      },
      "adjustment": "Add"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 1
      },
      "passed": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"101547145\">Elation_StartElationTime</a>",
          "variables": {
            "TryStartElationTime_OverrideElationPoint": {
              "operator": "Variables[0] (20) || Variables[1] (G_Rank01_AddedElationPoint) || ADD || RETURN",
              "displayLines": "(20 + G_Rank01_AddedElationPoint)",
              "constants": [],
              "variables": [
                20,
                "G_Rank01_AddedElationPoint"
              ]
            },
            "TryStartElationTime_ElationTimeIsNoConsume": 1
          },
          "dynamicStringsArray": [
            {
              "name": "TryStartElationTime_CustomTag",
              "value": "Avatar_YaoGuang_00_Skill03_Phase02"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Aha Instant: Aha Battle Event}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1884075672\">YaoGuang_BE_ModifyDam_ToBE</a>"
        }
      ],
      "failed": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"101547145\">Elation_StartElationTime</a>",
          "variables": {
            "TryStartElationTime_OverrideElationPoint": {
              "operator": "Variables[0] (20) || RETURN",
              "displayLines": "20",
              "constants": [],
              "variables": [
                20
              ]
            },
            "TryStartElationTime_ElationTimeIsNoConsume": 1
          },
          "dynamicStringsArray": [
            {
              "name": "TryStartElationTime_CustomTag",
              "value": "Avatar_YaoGuang_00_Skill03_Phase02"
            }
          ]
        }
      ]
    },
    {
      "name": "Update Energy",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "valuePercent": 1,
      "ofAbilitySplit": true,
      "isFixed": "* ERR"
    },
    "Trigger: Skip Death Handling",
    "Trigger: Ability End"
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1884075672\">YaoGuang_BE_ModifyDam_ToBE</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Anyone]: Hit",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Skill Type",
                    "skillType": "Elation"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "MDF_CanTrigger",
                    "compareType": "=",
                    "value2": 1
                  },
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 4
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">BaseDMGMultiplier</span>&nbsp;",
                          "value": "1.5"
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
          "eventTrigger": "Extra Action/Turn [Anyone]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Parameter String",
                "compareType": "=",
                "value2": "YaoGuang_Ability03_Part02"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_CanTrigger",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Extra Action/Turn [Anyone]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Parameter String",
                "compareType": "=",
                "value2": "YaoGuang_Ability03_Part02"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_CanTrigger",
                  "value": 0
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "eventTrigger": "Aha Instant: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Parameter String",
                "compareType": "=",
                "value2": "YaoGuang_Ability03_Part02"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_CanTrigger",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Aha Instant: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Parameter String",
                "compareType": "=",
                "value2": "YaoGuang_Ability03_Part02"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_CanTrigger",
                  "value": 0
                },
                "Modifier Deletes Itself"
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