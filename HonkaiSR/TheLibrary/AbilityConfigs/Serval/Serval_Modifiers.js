const configAbility = {
  "fileName": "Serval_Modifiers",
  "abilityType": "Char. Modifiers",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2005029779\">Serval_Tree03_AttackRatioUp</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                "displayLines": "MDF_PropertyValue",
                "constants": [],
                "variables": [
                  "MDF_PropertyValue"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_PropertyValue"
      ],
      "latentQueue": [],
      "description": "ATK +<span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "ATK Boost",
      "statusName": "ATK Boost"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-766476870\">Serval_Eidolon6_Check_Show</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "Serval_Ran06_Judge_MaxSP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
            }
          ]
        }
      ],
      "abilityValueChange": [
        {
          "name": "Ability Value Changes",
          "variableName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrent</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": {
                "operator": "Variables[0] (Serval_Ran06_Judge_MaxSP) || Variables[1] (SERVAL_OBJECT_UNUSED_1) || MUL || RETURN",
                "displayLines": "(Serval_Ran06_Judge_MaxSP * SERVAL_OBJECT_UNUSED_1)",
                "constants": [],
                "variables": [
                  "Serval_Ran06_Judge_MaxSP",
                  "SERVAL_OBJECT_UNUSED_1"
                ]
              },
              "maxValue": {
                "operator": "Variables[0] (Serval_Ran06_Judge_MaxSP) || Constants[0] (1) || ADD || RETURN",
                "displayLines": "(Serval_Ran06_Judge_MaxSP + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "Serval_Ran06_Judge_MaxSP"
                ]
              },
              "whenEnteringRange": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"731548834\">Serval_Eidolon6_Check</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]"
                }
              ],
              "whenLeavingRange": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"731548834\">Serval_Eidolon6_Check</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__731548834\">Serval_Eidolon6_Check</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Hit",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Attack Type",
                "attackTypes": [
                  "Skill",
                  "Basic ATK"
                ],
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MAvatar_Serval_00_Rank06_ShowRatio",
                  "value": {
                    "operator": "Variables[0] (SERVAL_OBJECT_UNUSED_2) || RETURN",
                    "displayLines": "SERVAL_OBJECT_UNUSED_2",
                    "constants": [],
                    "variables": [
                      "SERVAL_OBJECT_UNUSED_2"
                    ]
                  }
                },
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                      "value": "MAvatar_Serval_00_Rank06_ShowRatio"
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
              "name": "Define Custom Variable",
              "variableName": "MAvatar_Serval_00_Rank06_ShowRatio",
              "value": {
                "operator": "Variables[0] (SERVAL_OBJECT_UNUSED_2) || RETURN",
                "displayLines": "SERVAL_OBJECT_UNUSED_2",
                "constants": [],
                "variables": [
                  "SERVAL_OBJECT_UNUSED_2"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "Roaring Thunderclap and Lightning Flash deal <span class=\"descriptionNumberColor\">MAvatar_Serval_00_Rank06_ShowRatio</span> more DMG.",
      "type": "Buff",
      "effectName": "DMG Boost",
      "statusName": "DMG Boost"
    }
  ],
  "references": []
}