const configAbility = {
  "fileName": "-243519640_StrongChallengeEX_Talent_StageAbility_055",
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
      "modifier": "<a class=\"gModGreen\" id=\"-468248888\">MStrongChallengeEX_Talent_StageAbility_LE_055</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1157753616\">MStrongChallengeEX_Talent_StageAbility_PLY_055</a>",
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DamagePhysical</span>&nbsp;",
              "statValue": {
                "displayLines": "MDF_PhysicalAddedRatio"
              }
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Owner]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Type",
                "skillType": "Skill"
              },
              "passed": [
                {
                  "name": "Heal",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "healPercent": {
                    "displayLines": "MDF_HealPercentage"
                  },
                  "formula": "Heal from Target MaxHP"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-468248888\">MStrongChallengeEX_Talent_StageAbility_LE_055</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1157753616\">MStrongChallengeEX_Talent_StageAbility_PLY_055</a>",
                  "valuePerStack": {
                    "MDF_PhysicalAddedRatio": {
                      "displayLines": "#ADF_1"
                    },
                    "MDF_HealPercentage": {
                      "displayLines": "#ADF_2"
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