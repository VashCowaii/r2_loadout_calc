const configAbility = {
  "fileName": "-243519640_StrongChallengeEX_Talent_StageAbility_083",
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
      "modifier": "<a class=\"gModGreen\" id=\"-638143649\">MStrongChallengeEX_Talent_StageAbility_LE_083</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1359330519\">MStrongChallengeEX_Talent_StageAbility_PLY_083</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Attack Type",
                "attackTypes": [
                  "Elation DMG"
                ]
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAllPEN</span>&nbsp;",
                      "value": "MDF_ElationDamage_AllDamageTypePenetrate"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-638143649\">MStrongChallengeEX_Talent_StageAbility_LE_083</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"1359330519\">MStrongChallengeEX_Talent_StageAbility_PLY_083</a>",
                  "valuePerStack": {
                    "MDF_ElationDamage_AllDamageTypePenetrate": {
                      "operator": "Variables[0] (#ADF_1) || RETURN",
                      "displayLines": "#ADF_1",
                      "constants": [],
                      "variables": [
                        "#ADF_1"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking Modifier Instance [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Modifier Was",
                        "modifier": "<a class=\"gModGreen\" id=\"-698443266\">Enemy_W4_Nikadory_IF_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value1": "<a class=\"gModGreen\" id=\"-698443266\">Enemy_W4_Nikadory_IF_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                        "compareType": "<=",
                        "value2": 0,
                        "valueType": "Layer"
                      }
                    ]
                  },
                  {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Modifier Was",
                        "modifier": "<a class=\"gModGreen\" id=\"-1685699403\">Enemy_W4_Nikadory_IF_EnhanceShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value1": "<a class=\"gModGreen\" id=\"-1685699403\">Enemy_W4_Nikadory_IF_EnhanceShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                        "compareType": "<=",
                        "value2": 0,
                        "valueType": "Layer"
                      }
                    ]
                  },
                  {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Modifier Was",
                        "modifier": "<a class=\"gModGreen\" id=\"-1860338310\">Enemy_W4_Nikadory_IF_SuperShieldP2</a>[<span class=\"descriptionNumberColor\">Centirefined War Armor</span>]"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value1": "<a class=\"gModGreen\" id=\"-1860338310\">Enemy_W4_Nikadory_IF_SuperShieldP2</a>[<span class=\"descriptionNumberColor\">Centirefined War Armor</span>]",
                        "compareType": "<=",
                        "value2": 0,
                        "valueType": "Layer"
                      }
                    ]
                  }
                ]
              },
              "passed": [
                {
                  "name": "Adjust Team Punchline Value",
                  "value": {
                    "operator": "Variables[0] (#ADF_2) || RETURN",
                    "displayLines": "#ADF_2",
                    "constants": [],
                    "variables": [
                      "#ADF_2"
                    ]
                  },
                  "adjustment": "Add"
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