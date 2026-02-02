const configAbility = {
  "fileName": "-243519640_StrongChallengeEX_Talent_StageAbility_073",
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
      "modifier": "MStrongChallengeEX_Talent_StageAbility_LE_073"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "MStrongChallengeEX_Talent_StageAbility_TGT_073",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "Adjust Target Stats",
              "modifiedValuesArray": [
                {
                  "on": "Attacker",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakEfficiency</span>&nbsp;",
                  "value": "MDF_DefaultStanceBreakRatio"
                }
              ]
            }
          ]
        },
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
            }
          ]
        }
      ],
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "conditions": {
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
        "toughnessReductionPreview": {
          "operator": "Variables[0] (MDF_DefaultStanceBreakRatio) || RETURN",
          "displayLines": "MDF_DefaultStanceBreakRatio",
          "constants": [],
          "variables": [
            "MDF_DefaultStanceBreakRatio"
          ]
        }
      }
    },
    {
      "name": "Modifier Construction",
      "for": "MStrongChallengeEX_Talent_StageAbility_PLY_073",
      "execute": [
        {
          "eventTrigger": "Ability Use [Owner]: End",
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
                  "modifier": "MStrongChallengeEX_Talent_StageAbility_TGT_073",
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
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "MStrongChallengeEX_Talent_StageAbility_LE_073",
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Far Left Player Entity(no Memosprite)}}"
              },
              "modifier": "MStrongChallengeEX_Talent_StageAbility_PLY_073",
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
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}