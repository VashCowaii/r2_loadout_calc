const configAbility = {
  "fileName": "Misha_Misha_Eidolon6",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "M_Misha_Eidolon6"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Misha_Eidolon6_RecoverBP[<span class=\"descriptionNumberColor\">Estrangement of Dream</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Type",
                "skillType": "Skill"
              },
              "passed": [
                {
                  "name": "Skill Points Modification",
                  "adjustmentValue": {
                    "operator": "Variables[0] (MDF_Value) || RETURN",
                    "displayLines": "MDF_Value",
                    "constants": [],
                    "variables": [
                      "MDF_Value"
                    ]
                  },
                  "adjustmentType": "+"
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ],
      "description": "Allies recover <span class=\"descriptionNumberColor\">MDF_Value</span> Skill Point(s) after the next time they use a Skill.",
      "type": "Buff",
      "statusName": "Estrangement of Dream"
    },
    {
      "name": "Modifier Construction",
      "for": "Misha_Eidolon6_DamageUp[<span class=\"descriptionNumberColor\">Estrangement of Dream</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Turn [Action-End Phase]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyRatio) || RETURN",
                "displayLines": "MDF_PropertyRatio",
                "constants": [],
                "variables": [
                  "MDF_PropertyRatio"
                ]
              }
            }
          ]
        }
      ],
      "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span>.",
      "type": "Buff",
      "effectName": "DMG Boost",
      "statusName": "Estrangement of Dream",
      "duration": 1
    },
    {
      "name": "Modifier Construction",
      "for": "M_Misha_Eidolon6",
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
                  "to": "Caster",
                  "modifier": "Misha_Eidolon6_DamageUp[<span class=\"descriptionNumberColor\">Estrangement of Dream</span>]",
                  "duration": 1,
                  "valuePerStack": {
                    "MDF_PropertyRatio": {
                      "operator": "Variables[0] (0.3) || RETURN",
                      "displayLines": "0.3",
                      "constants": [],
                      "variables": [
                        0.3
                      ]
                    }
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster",
                  "modifier": "Misha_Eidolon6_RecoverBP[<span class=\"descriptionNumberColor\">Estrangement of Dream</span>]",
                  "valuePerStack": {
                    "MDF_Value": {
                      "operator": "Variables[0] (1) || RETURN",
                      "displayLines": "1",
                      "constants": [],
                      "variables": [
                        1
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