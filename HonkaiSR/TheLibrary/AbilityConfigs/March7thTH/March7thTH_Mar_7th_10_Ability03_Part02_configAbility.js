const configAbility = {
  "fileName": "March7thTH_Mar_7th_10_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] (2.4) || RETURN",
          "displayLines": "2.4",
          "constants": [],
          "variables": [
            2.4
          ]
        },
        "Toughness": {
          "operator": "Variables[0] (ST Toughness Value) || RETURN",
          "displayLines": "ST Toughness Value",
          "constants": [],
          "variables": [
            "ST Toughness Value"
          ]
        },
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1546960372\">Mar_7th_10_Ability03_Enhance_Normal</a>[<span class=\"descriptionNumberColor\">March 7th, the Apex Heroine</span>]",
      "valuePerStack": {
        "MDF_Value": {
          "operator": "Variables[0] (2) || RETURN",
          "displayLines": "2",
          "constants": [],
          "variables": [
            2
          ]
        },
        "MDF_Chance": {
          "operator": "Variables[0] (0.2) || RETURN",
          "displayLines": "0.2",
          "constants": [],
          "variables": [
            0.2
          ]
        },
        "MDF_PropertyRatio": {
          "operator": "Variables[0] (0.5) || RETURN",
          "displayLines": "0.5",
          "constants": [],
          "variables": [
            0.5
          ]
        }
      }
    },
    "Trigger: Skip Death Handling",
    "Trigger: Ability End"
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1546960372\">Mar_7th_10_Ability03_Enhance_Normal</a>[<span class=\"descriptionNumberColor\">March 7th, the Apex Heroine</span>]",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "scope": "ContextCaster",
              "variableName": "Skill11_BasicCount",
              "value": {
                "operator": "Variables[0] (3) || Variables[1] (MDF_Value) || ADD || RETURN",
                "displayLines": "(3 + MDF_Value)",
                "constants": [],
                "variables": [
                  3,
                  "MDF_Value"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "scope": "ContextCaster",
              "variableName": "Skill11_FixedChance",
              "value": {
                "operator": "Variables[0] (0.6) || Variables[1] (MDF_Chance) || ADD || RETURN",
                "displayLines": "(0.6 + MDF_Chance)",
                "constants": [],
                "variables": [
                  0.6,
                  "MDF_Chance"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Define Custom Variable",
              "scope": "ContextCaster",
              "variableName": "Skill11_BasicCount",
              "value": {
                "operator": "Variables[0] (3) || RETURN",
                "displayLines": "3",
                "constants": [],
                "variables": [
                  3
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "scope": "ContextCaster",
              "variableName": "Skill11_FixedChance",
              "value": {
                "operator": "Variables[0] (0.6) || RETURN",
                "displayLines": "0.6",
                "constants": [],
                "variables": [
                  0.6
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "scope": "ContextCaster",
              "variableName": "Skill11_DamagePercatage",
              "value": {
                "operator": "Variables[0] (0.8) || RETURN",
                "displayLines": "0.8",
                "constants": [],
                "variables": [
                  0.8
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Action Choice Window [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"2055743569\">Mar_7th_10_Enhance</a>"
              }
            }
          ]
        },
        {
          "eventTrigger": "Deal Damage Start [Owner]: Hit",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Eidolon Activated",
                    "eidolon": 6
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"2055743569\">Mar_7th_10_Enhance</a>"
                  },
                  {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Basic ATK"
                    ]
                  }
                ]
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageSUM</span>&nbsp;",
                      "value": "MDF_PropertyRatio"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 6
              },
              "passed": [
                {
                  "name": "Update Modifier Description",
                  "popUpText": "The next Enhanced Basic ATK's initial Hits Per Action increases by <span class=\"descriptionNumberColor\">MDF_Value</span>. The fixed chance of additionally dealing DMG increases by <span class=\"descriptionNumberColor\">MDF_Chance</span>, and CRIT DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span>."
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Owner]: End"
        },
        {
          "eventTrigger": "Ultimate Prep-Phase [Anyone]"
        }
      ],
      "stackData": [
        "MDF_Value",
        "MDF_Chance",
        "MDF_PropertyRatio"
      ],
      "latentQueue": [],
      "description": "Increases the next Enhanced Basic ATK's initial Hits Per Action by <span class=\"descriptionNumberColor\">MDF_Value</span>. The fixed chance of additionally dealing DMG increases by <span class=\"descriptionNumberColor\">MDF_Chance</span>.",
      "type": "Other",
      "effectName": "Enhanced Basic Attack Boost",
      "statusName": "March 7th, the Apex Heroine"
    }
  ]
}