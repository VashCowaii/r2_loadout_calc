const configAbility = {
  "fileName": "-243519640_StrongChallengeEX_Talent_StageAbility_064",
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
      "modifier": "<a class=\"gModGreen\" id=\"1393522368\">MStrongChallengeEX_Talent_StageAbility_LE_064</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2111516388\">MStrongChallengeEX_Talent_StageAbility_TGT_064</a>",
      "stackType": "ReplaceByCaster",
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "conditions": {
          "name": "Is Weak to Attacker",
          "targetAttacker": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          }
        },
        "toughnessReductionPreview": {
          "displayLines": "MDF_DefaultStanceBreakRatio"
        }
      },
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
                "displayLines": "MDF_CriticalDamage"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1240901448\">MStrongChallengeEX_Talent_StageAbility_PLY_064</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"-2111516388\">MStrongChallengeEX_Talent_StageAbility_TGT_064</a>",
                  "duration": {
                    "displayLines": "MDF_PropertyValue3"
                  },
                  "valuePerStack": {
                    "MDF_DefaultStanceBreakRatio": {
                      "displayLines": "MDF_PropertyValue"
                    },
                    "MDF_CriticalDamage": {
                      "displayLines": "MDF_PropertyValue2"
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
      "for": "<a class=\"gModGreen\" id=\"mod__1393522368\">MStrongChallengeEX_Talent_StageAbility_LE_064</a>",
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
              "modifier": "<a class=\"gModGreen\" id=\"1240901448\">MStrongChallengeEX_Talent_StageAbility_PLY_064</a>",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "displayLines": "#ADF_1"
                },
                "MDF_PropertyValue2": {
                  "displayLines": "#ADF_2"
                },
                "MDF_PropertyValue3": {
                  "displayLines": "#ADF_3"
                }
              }
            }
          ]
        }
      ]
    }
  ]
}