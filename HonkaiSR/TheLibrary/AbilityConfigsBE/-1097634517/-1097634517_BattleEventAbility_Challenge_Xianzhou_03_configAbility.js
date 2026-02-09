const configAbility = {
  "fileName": "-1097634517_BattleEventAbility_Challenge_Xianzhou_03",
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
      "modifier": "<a class=\"gModGreen\" id=\"384863834\">Modifier_BattleEventAbility_Challenge_Xianzhou_03</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1838584749\">Modifier_BattleEventAbility_Challenge_Xianzhou_03_Sub2</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]",
      "description": "When entering \"Sanction Mode,\" summon \"Disciples of Sanctus Medicus: Internal Alchemist\" instead.",
      "type": "Other",
      "effectName": "Memory Imprint",
      "statusName": "Memory Imprint"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-668032397\">Modifier_BattleEventAbility_Challenge_Xianzhou_03_Sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]",
      "stackType": "Replace",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (#BattleEvent_P1_ADF) || RETURN",
                "displayLines": "#BattleEvent_P1_ADF",
                "constants": [],
                "variables": [
                  "#BattleEvent_P1_ADF"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (#BattleEvent_P3_ADF) || RETURN",
                "displayLines": "#BattleEvent_P3_ADF",
                "constants": [],
                "variables": [
                  "#BattleEvent_P3_ADF"
                ]
              }
            }
          ]
        }
      ],
      "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">#BattleEvent_P3_ADF</span> and reduces DMG received by <span class=\"descriptionNumberColor\">#BattleEvent_P1_ADF</span>.",
      "type": "Buff",
      "effectName": "Memory Imprint",
      "statusName": "Memory Imprint"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__384863834\">Modifier_BattleEventAbility_Challenge_Xianzhou_03</a>",
      "modifierFlags": [
        "ListenBattleEventSkill"
      ],
      "execute": [
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Character ID",
                "ID": 201301010,
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": null
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1838584749\">Modifier_BattleEventAbility_Challenge_Xianzhou_03_Sub2</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Anyone]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Skill Type",
                    "skillType": "Basic ATK"
                  },
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
                  "modifier": "<a class=\"gModGreen\" id=\"-668032397\">Modifier_BattleEventAbility_Challenge_Xianzhou_03_Sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]",
                  "duration": {
                    "operator": "Variables[0] (#BattleEvent_P2_ADF) || RETURN",
                    "displayLines": "#BattleEvent_P2_ADF",
                    "constants": [],
                    "variables": [
                      "#BattleEvent_P2_ADF"
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Targets Adjacent to Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-668032397\">Modifier_BattleEventAbility_Challenge_Xianzhou_03_Sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]",
                  "duration": {
                    "operator": "Variables[0] (#BattleEvent_P2_ADF) || RETURN",
                    "displayLines": "#BattleEvent_P2_ADF",
                    "constants": [],
                    "variables": [
                      "#BattleEvent_P2_ADF"
                    ]
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