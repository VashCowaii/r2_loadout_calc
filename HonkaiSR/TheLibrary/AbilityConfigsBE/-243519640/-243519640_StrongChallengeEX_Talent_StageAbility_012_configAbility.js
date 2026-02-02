const configAbility = {
  "fileName": "-243519640_StrongChallengeEX_Talent_StageAbility_012",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "MStrongChallengeEX_Talent_StageAbility_LE_012"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "MStrongChallengeEX_Talent_StageAbility_BOSS_012",
      "execute": [
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Attack Type",
                "attackTypes": [
                  "Follow-up"
                ],
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Damage Data",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "Damage_Hit"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "Damage_Total",
                  "value": {
                    "operator": "Variables[0] (Damage_Total) || Variables[1] (Damage_Hit) || ADD || RETURN",
                    "displayLines": "(Damage_Total + Damage_Hit)",
                    "constants": [],
                    "variables": [
                      "Damage_Total",
                      "Damage_Hit"
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "MStrongChallengeEX_StageAbility_EX_BeingBreakDMGShow",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (Damage_Total) || RETURN",
                      "displayLines": "Damage_Total",
                      "constants": [],
                      "variables": [
                        "Damage_Total"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "HP Change [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "CurrentHP%",
                "compareType": "<=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Damage_Total",
                  "value": 0
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "MStrongChallengeEX_StageAbility_EX_BeingBreakDMGShow"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Modifier is Added [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "MStrongChallengeEX_StageAbility_EX_BeingBreakDMGTrigger01"
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "BeingBreakDMGTrigger"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "MStrongChallengeEX_StageAbility_EX_BeingBreakDMGTrigger01"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "MStrongChallengeEX_StageAbility_EX_BeingBreakDMGTrigger02"
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "BeingBreakDMGTrigger"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "MStrongChallengeEX_StageAbility_EX_BeingBreakDMGTrigger02"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "MStrongChallengeEX_StageAbility_EX_BeingBreakDMGTrigger03"
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "BeingBreakDMGTrigger"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "MStrongChallengeEX_StageAbility_EX_BeingBreakDMGTrigger03"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "Damage_Total",
                  "value": 0
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "MStrongChallengeEX_StageAbility_EX_BeingBreakDMGShow"
                }
              ]
            }
          ]
        }
      ],
      "modifierFunctions": [
        {
          "name": "CharacterFunctions",
          "functionName": "BeingBreakDMGTrigger",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Damage_Total",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "Damage": {
                      "operator": "Variables[0] (Damage_Total) || Variables[1] (#ADF_1) || MUL || Constants[0] (3) || DIV || RETURN",
                      "displayLines": "((Damage_Total * #ADF_1) / 3)",
                      "constants": [
                        3
                      ],
                      "variables": [
                        "Damage_Total",
                        "#ADF_1"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Additional DMG"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "MStrongChallengeEX_Talent_StageAbility_LE_012",
      "execute": [
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team"
                  },
                  {
                    "name": "Compare: Monster Rank",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "compareType": ">=",
                    "value2": 4
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "MStrongChallengeEX_Talent_StageAbility_BOSS_012"
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