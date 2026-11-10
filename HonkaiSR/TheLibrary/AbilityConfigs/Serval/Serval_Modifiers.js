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
      "for": "<a class=\"gModGreen\" id=\"mod__-1630324399\">ADV_StageAbility_Maze_Serval</a>",
      "counter": 1,
      "stackType": "Merge"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2005029779\">Serval_Tree03_AttackRatioUp</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
      "stackType": "ReplaceByCaster",
      "description": "ATK +<span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "ATK Boost",
      "statusName": "ATK Boost",
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
              "statValue": {
                "displayLines": "MDF_PropertyValue"
              }
            }
          ]
        }
      ]
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
              "variableName": "Serval_Ran06_Judge_MaxSP",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
            }
          ]
        }
      ],
      "abilityValueChange": [
        {
          "name": "Ability Value Changes",
          "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrent</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": {
                "displayLines": "(Serval_Ran06_Judge_MaxSP * SERVAL_OBJECT_UNUSED_1)"
              },
              "maxValue": {
                "displayLines": "(Serval_Ran06_Judge_MaxSP + 1)"
              },
              "enteringRange": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"731548834\">Serval_Eidolon6_Check</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]"
                }
              ],
              "leavingRange": [
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
      "description": "Roaring Thunderclap and Lightning Flash deal <span class=\"descriptionNumberColor\">MAvatar_Serval_00_Rank06_ShowRatio</span> more DMG.",
      "type": "Buff",
      "effectName": "DMG Boost",
      "statusName": "DMG Boost",
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
                  "value": {
                    "displayLines": "SERVAL_OBJECT_UNUSED_2"
                  },
                  "variableName": "MAvatar_Serval_00_Rank06_ShowRatio"
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
              "value": {
                "displayLines": "SERVAL_OBJECT_UNUSED_2"
              },
              "variableName": "MAvatar_Serval_00_Rank06_ShowRatio"
            }
          ]
        }
      ]
    }
  ],
  "references": []
}