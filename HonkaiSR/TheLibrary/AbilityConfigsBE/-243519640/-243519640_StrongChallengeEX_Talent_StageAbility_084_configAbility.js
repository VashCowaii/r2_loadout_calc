const configAbility = {
  "fileName": "-243519640_StrongChallengeEX_Talent_StageAbility_084",
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
      "modifier": "<a class=\"gModGreen\" id=\"-688476506\">MStrongChallengeEX_Talent_StageAbility_LE_084</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1773698342\">MStrongChallengeEX_Talent_StageAbility_TGT_084</a>[<span class=\"descriptionNumberColor\">Montane Gush</span>]",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Attack Type",
                "attackTypes": [
                  "Skill"
                ]
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageSUM</span>&nbsp;",
                      "value": "MDF_BPCrit_DamageAddedRatio"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "description": "CRIT DMG dealt by Skill increases by <span class=\"descriptionNumberColor\">MDF_BPCrit_DamageAddedRatio</span>.",
      "type": "Buff",
      "statusName": "Montane Gush"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1308997662\">MStrongChallengeEX_Talent_StageAbility_PLY_084</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1773698342\">MStrongChallengeEX_Talent_StageAbility_TGT_084</a>[<span class=\"descriptionNumberColor\">Montane Gush</span>]",
                  "duration": {
                    "operator": "Variables[0] (MDF_BPCrit_Lifetime) || RETURN",
                    "displayLines": "MDF_BPCrit_Lifetime",
                    "constants": [],
                    "variables": [
                      "MDF_BPCrit_Lifetime"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_BPCrit_DamageAddedRatio": {
                      "operator": "Variables[0] (MDF_BPCrit_DamageAddedRatio) || RETURN",
                      "displayLines": "MDF_BPCrit_DamageAddedRatio",
                      "constants": [],
                      "variables": [
                        "MDF_BPCrit_DamageAddedRatio"
                      ]
                    }
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
      "for": "<a class=\"gModGreen\" id=\"mod__-688476506\">MStrongChallengeEX_Talent_StageAbility_LE_084</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"1308997662\">MStrongChallengeEX_Talent_StageAbility_PLY_084</a>",
                  "valuePerStack": {
                    "MDF_BPCrit_DamageAddedRatio": {
                      "operator": "Variables[0] (#ADF_1) || RETURN",
                      "displayLines": "#ADF_1",
                      "constants": [],
                      "variables": [
                        "#ADF_1"
                      ]
                    },
                    "MDF_BPCrit_Lifetime": {
                      "operator": "Variables[0] (#ADF_2) || RETURN",
                      "displayLines": "#ADF_2",
                      "constants": [],
                      "variables": [
                        "#ADF_2"
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