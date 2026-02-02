const configAbility = {
  "fileName": "-243519640_StrongChallengeEX_Talent_StageAbility_067",
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
      "modifier": "MStrongChallengeEX_Talent_StageAbility_LE_067"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "MStrongChallengeEX_Talent_StageAbility_TGT_067[<span class=\"descriptionNumberColor\">Unstoppable Momentum</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_CriticalDamage) || RETURN",
                "displayLines": "MDF_CriticalDamage",
                "constants": [],
                "variables": [
                  "MDF_CriticalDamage"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakEfficiency</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_DefaultStanceBreakRatio) || RETURN",
                "displayLines": "MDF_DefaultStanceBreakRatio",
                "constants": [],
                "variables": [
                  "MDF_DefaultStanceBreakRatio"
                ]
              }
            }
          ]
        }
      ],
      "description": "Increases Weakness Break Efficiency by <span class=\"descriptionNumberColor\">MDF_DefaultStanceBreakRatio</span> and increases CRIT DMG by <span class=\"descriptionNumberColor\">MDF_CriticalDamage</span>.",
      "type": "Buff",
      "statusName": "Unstoppable Momentum"
    },
    {
      "name": "Modifier Construction",
      "for": "MStrongChallengeEX_Talent_StageAbility_PLY_067",
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
                  "modifier": "MStrongChallengeEX_Talent_StageAbility_TGT_067[<span class=\"descriptionNumberColor\">Unstoppable Momentum</span>]",
                  "duration": {
                    "operator": "Variables[0] (MDF_PropertyValue3) || RETURN",
                    "displayLines": "MDF_PropertyValue3",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue3"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_DefaultStanceBreakRatio": {
                      "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                      "displayLines": "MDF_PropertyValue",
                      "constants": [],
                      "variables": [
                        "MDF_PropertyValue"
                      ]
                    },
                    "MDF_CriticalDamage": {
                      "operator": "Variables[0] (MDF_PropertyValue2) || RETURN",
                      "displayLines": "MDF_PropertyValue2",
                      "constants": [],
                      "variables": [
                        "MDF_PropertyValue2"
                      ]
                    }
                  },
                  "casterAssign": "CasterSelf"
                }
              ]
            }
          ]
        }
      ],
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "skillType": "Ultimate",
        "conditions": {
          "name": "AND",
          "conditionList": [
            {
              "name": "Is Weak to Attacker",
              "weakTo": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            },
            {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "MStrongChallengeEX_Talent_StageAbility_TGT_067[<span class=\"descriptionNumberColor\">Unstoppable Momentum</span>]",
              "invertCondition": true
            }
          ]
        },
        "toughnessReductionPreview": {
          "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
          "displayLines": "MDF_PropertyValue",
          "constants": [],
          "variables": [
            "MDF_PropertyValue"
          ]
        }
      }
    },
    {
      "name": "Modifier Construction",
      "for": "MStrongChallengeEX_Talent_StageAbility_LE_067",
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
                    "team": "Player Team"
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
                  "modifier": "MStrongChallengeEX_Talent_StageAbility_PLY_067",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (#ADF_1) || RETURN",
                      "displayLines": "#ADF_1",
                      "constants": [],
                      "variables": [
                        "#ADF_1"
                      ]
                    },
                    "MDF_PropertyValue2": {
                      "operator": "Variables[0] (#ADF_2) || RETURN",
                      "displayLines": "#ADF_2",
                      "constants": [],
                      "variables": [
                        "#ADF_2"
                      ]
                    },
                    "MDF_PropertyValue3": {
                      "operator": "Variables[0] (#ADF_3) || RETURN",
                      "displayLines": "#ADF_3",
                      "constants": [],
                      "variables": [
                        "#ADF_3"
                      ]
                    }
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
  ]
}