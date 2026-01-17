const compositeAbilityObject = {
  "fullCharacterName": "Into the Unreachable Veil",
  "trimCharacterName": "IntotheUnreachableVeil",
  "abilityList": [
    "IntotheUnreachableVeil_Ability23037"
  ],
  "fixedStats": {
    "1": {
      "CritRateBase": 0.12
    },
    "2": {
      "CritRateBase": 0.14
    },
    "3": {
      "CritRateBase": 0.16
    },
    "4": {
      "CritRateBase": 0.18
    },
    "5": {
      "CritRateBase": 0.2
    }
  },
  "abilityObject": {
    "IntotheUnreachableVeil_Ability23037": {
      "fileName": "IntotheUnreachableVeil_Ability23037",
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
          "modifier": "LC_23037_Main"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "LC_23037_Sub2[<span class=\"descriptionNumberColor\">Increases Skill DMG and Ultimate DMG</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Skill",
                      "Ultimate"
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                          "value": "0.6"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "description": "Increases Skill DMG and Ultimate DMG dealt by <span class=\"descriptionNumberColor\">#SkillEquip_P4_Ratio</span>.",
          "type": "Buff",
          "effectName": "Increases Skill DMG and Ultimate DMG",
          "statusName": "Increases Skill DMG and Ultimate DMG"
        },
        {
          "name": "Modifier Construction",
          "for": "LC_23037_Main",
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "LC_23037_Sub2[<span class=\"descriptionNumberColor\">Increases Skill DMG and Ultimate DMG</span>]",
                      "duration": {
                        "operator": "Variables[0] (3) || RETURN",
                        "displayLines": "3",
                        "constants": [],
                        "variables": [
                          3
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "LC_23037_Main_CheckSP"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Skill Type",
                        "skillType": "Ultimate"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "_Tot_SP_Used",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (140) || RETURN",
                          "displayLines": "140",
                          "constants": [],
                          "variables": [
                            140
                          ]
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Skill Points Modification",
                      "adjustmentValue": 1,
                      "adjustmentType": "+"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ultimate Prep-Phase [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_Cur_SP_Used",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_Tot_SP_Used",
                  "value": 0
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "LC_23037_Main_CheckSP"
                }
              ]
            },
            {
              "eventTrigger": "Energy Change",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "ParameterValue",
                        "compareType": "<",
                        "value2": 0
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "LC_23037_Main_CheckSP"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Varying Data",
                      "target": null,
                      "variableName": "_Cur_SP_Used",
                      "value": "ParamValue"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_Tot_SP_Used",
                      "value": {
                        "operator": "Variables[0] (_Tot_SP_Used) || Variables[1] (_Cur_SP_Used) || SUB || RETURN",
                        "displayLines": "(_Tot_SP_Used - _Cur_SP_Used)",
                        "constants": [],
                        "variables": [
                          "_Tot_SP_Used",
                          "_Cur_SP_Used"
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
        },
        {
          "name": "Modifier Construction",
          "for": "LC_23037_Main_CheckSP",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "LC_23037_BP_CD",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End"
        }
      ],
      "isLightcone": true,
      "desc": "Increases the wearer's CRIT Rate by #1[i]%. When the wearer uses their Ultimate, increases the wearer's Skill DMG and Ultimate DMG dealt by #4[i]%, lasting for #5[i] turn(s). After the wearer uses their Ultimate, if this Ultimate consumed #3[i] or more Energy, recovers 1 Skill Point.",
      "params": [
        [
          0.12,
          2,
          140,
          0.6,
          3
        ],
        [
          0.14,
          2,
          140,
          0.7,
          3
        ],
        [
          0.16,
          2,
          140,
          0.8,
          3
        ],
        [
          0.18,
          2,
          140,
          0.9,
          3
        ],
        [
          0.2,
          2,
          140,
          1,
          3
        ]
      ]
    }
  },
  "isLightcone": true
}