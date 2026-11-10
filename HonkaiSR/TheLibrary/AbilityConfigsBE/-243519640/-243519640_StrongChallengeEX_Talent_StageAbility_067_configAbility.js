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
      "modifier": "<a class=\"gModGreen\" id=\"1443855225\">MStrongChallengeEX_Talent_StageAbility_LE_067</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2061183531\">MStrongChallengeEX_Talent_StageAbility_TGT_067</a>[<span class=\"descriptionNumberColor\">Unstoppable Momentum</span>]",
      "stackType": "ReplaceByCaster",
      "description": "Increases Weakness Break Efficiency by <span class=\"descriptionNumberColor\">MDF_DefaultStanceBreakRatio</span> and increases CRIT DMG by <span class=\"descriptionNumberColor\">MDF_CriticalDamage</span>.",
      "type": "Buff",
      "statusName": "Unstoppable Momentum",
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
                "displayLines": "MDF_CriticalDamage"
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
                "displayLines": "MDF_DefaultStanceBreakRatio"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1291234305\">MStrongChallengeEX_Talent_StageAbility_PLY_067</a>",
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "skillType": "Ultimate",
        "conditions": {
          "name": "AND",
          "conditionList": [
            {
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
            {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2061183531\">MStrongChallengeEX_Talent_StageAbility_TGT_067</a>[<span class=\"descriptionNumberColor\">Unstoppable Momentum</span>]",
              "invertCondition": true
            }
          ]
        },
        "toughnessReductionPreview": {
          "displayLines": "MDF_PropertyValue"
        }
      },
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
                  "modifier": "<a class=\"gModGreen\" id=\"-2061183531\">MStrongChallengeEX_Talent_StageAbility_TGT_067</a>[<span class=\"descriptionNumberColor\">Unstoppable Momentum</span>]",
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
      "for": "<a class=\"gModGreen\" id=\"mod__1443855225\">MStrongChallengeEX_Talent_StageAbility_LE_067</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"1291234305\">MStrongChallengeEX_Talent_StageAbility_PLY_067</a>",
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
  ]
}