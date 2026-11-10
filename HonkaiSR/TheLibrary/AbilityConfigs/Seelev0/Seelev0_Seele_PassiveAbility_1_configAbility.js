const configAbility = {
  "fileName": "Seelev0_Seele_PassiveAbility_1",
  "childAbilityList": [
    "Seelev0_Seele_Bonus_Camera",
    "Seelev0_Seele_PassiveAbility_1",
    "Seelev0_Seele_Bonus"
  ],
  "skillTrigger": "SkillP01",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Rippling Waves"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1743016793\">Ability01PreShowModifier_Fixed</a>",
          "valuePerStack": {
            "MDF_Ability01_Delay": {
              "displayLines": "0.2"
            }
          }
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-894890999\">Ability02PreShowModifier</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"959272575\">Local_Seele_ListenKill</a>",
      "valuePerStack": {
        "dmg_percent": {
          "displayLines": "0.8"
        }
      }
    },
    {
      "name": "Update Displayed Energy Bar",
      "assignState": "True",
      "priorState": "Normal",
      "bar#": 1,
      "cooldown": 0
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1311778178\">Local_Seele_PassiveActionModifier</a>[<span class=\"descriptionNumberColor\">Resurgence</span>]",
      "description": "Currently in the extra turn provided by \"Resurgence\".",
      "type": "Other",
      "statusName": "Resurgence"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__959272575\">Local_Seele_ListenKill</a>",
      "stackData": [
        "dmg_percent"
      ],
      "execute": [
        {
          "eventTrigger": "Turn [Owner]: Pre-action Phase",
          "execute": [
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "InsertAction"
            }
          ]
        },
        {
          "eventTrigger": "Turn [Anyone]: End",
          "execute": [
            {
              "name": "Update Displayed Energy Bar",
              "priorState": "Normal"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1311778178\">Local_Seele_PassiveActionModifier</a>[<span class=\"descriptionNumberColor\">Resurgence</span>]"
            }
          ]
        },
        {
          "eventTrigger": "Got a Kill [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "AND",
                    "conditionList": [
                      "Is Extra-Turn",
                      {
                        "name": "Compare: Variable",
                        "value1": "Seele_BonusInsertAction",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  {
                    "name": "Is Ability Ongoing",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "invertCondition": true
                  }
                ]
              },
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "value": 1,
                  "variableName": "InsertAction"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1401924350\">Seele_Passive_DamageUp</a>[<span class=\"descriptionNumberColor\">Amplification</span>]",
                  "duration": {
                    "displayLines": "1"
                  },
                  "valuePerStack": {
                    "seele_dmg_percent": {
                      "displayLines": "dmg_percent"
                    },
                    "MDF_Penetrate": {
                      "displayLines": "0.2"
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Got a Queued Kill [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "AND",
                    "conditionList": [
                      "Is Extra-Turn",
                      {
                        "name": "Compare: Variable",
                        "value1": "Seele_BonusInsertAction",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  {
                    "name": "Is Ability Ongoing",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "invertCondition": true
                  }
                ]
              },
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "value": 1,
                  "variableName": "InsertAction"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1401924350\">Seele_Passive_DamageUp</a>[<span class=\"descriptionNumberColor\">Amplification</span>]",
                  "duration": {
                    "displayLines": "1"
                  },
                  "valuePerStack": {
                    "seele_dmg_percent": {
                      "displayLines": "dmg_percent"
                    },
                    "MDF_Penetrate": {
                      "displayLines": "0.2"
                    }
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
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "Seele_Rank6_Listen",
                    "compareType": "=",
                    "value2": 0
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "InsertAction",
                    "compareType": ">",
                    "value2": 0
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "InsertAction"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemies Still Alive",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "includeUnselectable": true
                  },
                  "passed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "priorState": "Active"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1311778178\">Local_Seele_PassiveActionModifier</a>[<span class=\"descriptionNumberColor\">Resurgence</span>]"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "priorState": "Normal"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1311778178\">Local_Seele_PassiveActionModifier</a>[<span class=\"descriptionNumberColor\">Resurgence</span>]"
                    }
                  ]
                },
                {
                  "name": "Inject Extra-Turn",
                  "actionTag": [
                    "Seele_BonusInsertAction"
                  ],
                  "abilityName": "Seele_Bonus",
                  "afterInjection": [
                    {
                      "name": "Define Custom Variable",
                      "value": 0,
                      "variableName": "Seele_BonusInsertAction"
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  "Is Extra-Turn",
                  {
                    "name": "Compare: Variable",
                    "value1": "Seele_BonusInsertAction",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "Update Displayed Energy Bar",
                  "priorState": "Normal"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1311778178\">Local_Seele_PassiveActionModifier</a>[<span class=\"descriptionNumberColor\">Resurgence</span>]"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Extra Action/Turn [Owner]: Start ",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Parameter String",
                "value2": "Seele_BonusInsertAction"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": 1,
                  "variableName": "Seele_BonusInsertAction"
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "Seele_BonusInsertAction"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-894890999\">Ability02PreShowModifier</a>",
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "target": {
          "name": "Target Name",
          "target": "{{Modifier Holder}}"
        },
        "skillType": [
          "Skill"
        ],
        "conditions": {
          "name": "AND",
          "conditionList": [
            {
              "name": "NOT",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-456765622\">Seele_BPAbility_SpeedUp</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]"
              }
            },
            {
              "name": "OR",
              "conditionList": [
                {
                  "name": "NOT",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-426535006\">Seele_BPAbility_SpeedUpEidolon2</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]"
                  }
                },
                {
                  "name": "Compare: Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value1": "<a class=\"gModGreen\" id=\"-426535006\">Seele_BPAbility_SpeedUpEidolon2</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
                  "compareType": "<",
                  "value2": {
                    "displayLines": "2"
                  },
                  "valueType": "Layer"
                }
              ]
            }
          ]
        },
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": "0.25(SPD Change)"
        }
      }
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1743016793\">Ability01PreShowModifier_Fixed</a>",
      "stackData": [
        "MDF_Skill01_Delay"
      ],
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "target": {
          "name": "Target Name",
          "target": "{{Modifier Holder}}"
        },
        "skillType": [
          "Basic ATK"
        ],
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": {
            "displayLines": "-MDF_Skill01_Delay"
          }
        }
      }
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  }
}