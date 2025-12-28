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
      "for": "Serval_Tree03_AttackRatioUp[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
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
      "for": "Serval_Eidolon6_Check_Show",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "target": "Caster",
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
                  "to": "Caster",
                  "modifier": "Serval_Eidolon6_Check[<span class=\"descriptionNumberColor\">DMG Boost</span>]"
                }
              ],
              "whenLeavingRange": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Caster",
                  "modifier": "Serval_Eidolon6_Check[<span class=\"descriptionNumberColor\">DMG Boost</span>]"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Serval_Eidolon6_Check[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
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
                "target": "Caster"
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
                  "on": "Attacker",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MAvatar_Serval_00_Rank06_ShowRatio) || RETURN",
                    "displayLines": "MAvatar_Serval_00_Rank06_ShowRatio",
                    "constants": [],
                    "variables": [
                      "MAvatar_Serval_00_Rank06_ShowRatio"
                    ]
                  }
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