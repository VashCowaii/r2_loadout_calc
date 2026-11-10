const configAbility = {
  "fileName": "1912336050_ChallengePeakBattle_BaseAbility_Plugins_0006",
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
      "modifier": "<a class=\"gModGreen\" id=\"-2066660631\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0006</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-754455660\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0006_Halo</a>",
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Sequence",
            "TargetList": [
              {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable, exclude Netherwing)}}.[[removeBattleEvents]]"
              },
              {
                "name": "Target Filter",
                "conditions": {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"770601951\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0006_03</a>[<span class=\"descriptionNumberColor\">Fluid Dash</span>]",
                  "invertCondition": true
                }
              }
            ]
          },
          "modifier": "<a class=\"gModGreen\" id=\"720269094\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0006_04</a>",
          "haloStatus": true,
          "valuePerStack": {
            "ChallengePeakBattle_Plugins_0006_ADF_1": {
              "displayLines": "#ADF_1"
            },
            "ChallengePeakBattle_Plugins_0006_ADF_2": {
              "displayLines": "#ADF_2"
            },
            "ChallengePeakBattle_Plugins_0006_ADF_3": {
              "displayLines": "BattleEventHeal_HPDeltaLayer"
            }
          }
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__720269094\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0006_04</a>",
      "stackData": [
        "ChallengePeakBattle_Plugins_0006_ADF_1",
        "ChallengePeakBattle_Plugins_0006_ADF_2",
        "ChallengePeakBattle_Plugins_0006_ADF_3"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"770601951\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0006_03</a>[<span class=\"descriptionNumberColor\">Fluid Dash</span>]",
              "stackLimit": 999,
              "valuePerStack": {
                "ChallengePeakBattle_Plugins_0006_ADF_1": {
                  "displayLines": "ChallengePeakBattle_Plugins_0006_ADF_1"
                },
                "ChallengePeakBattle_Plugins_0006_ADF_2": {
                  "displayLines": "ChallengePeakBattle_Plugins_0006_ADF_2"
                }
              },
              "addStacksPerTrigger": {
                "displayLines": "ChallengePeakBattle_Plugins_0006_ADF_3"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__770601951\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0006_03</a>[<span class=\"descriptionNumberColor\">Fluid Dash</span>]",
      "stackType": "Replace",
      "stackData": [
        "ChallengePeakBattle_Plugins_0006_ADF_1",
        "ChallengePeakBattle_Plugins_0006_ADF_2"
      ],
      "description": "Each stack increases SPD by <span class=\"descriptionNumberColor\">ChallengePeakBattle_Plugins_0006_ADF_2</span>.",
      "type": "Other",
      "effectName": "SPD Boost",
      "statusName": "Fluid Dash",
      "addStacksPerTrigger": 1,
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "MDF_Layer",
              "multiplier": 1
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
              "value": {
                "displayLines": "(ChallengePeakBattle_Plugins_0006_ADF_2 * MDF_Layer)"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__753824332\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0006_02</a>[<span class=\"descriptionNumberColor\">Fluid Dash</span>]",
      "description": "All-Type RES PEN for DoT dealt increases by <span class=\"descriptionNumberColor\">ChallengePeakBattle_Plugins_0006_ADF_1</span>.",
      "type": "Other",
      "statusName": "Fluid Dash",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Attack Type",
                "attackTypes": [
                  "DOT"
                ]
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAllPEN</span>&nbsp;",
                      "value": "ChallengePeakBattle_Plugins_0006_ADF_1"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-2066660631\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0006</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"753824332\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0006_02</a>[<span class=\"descriptionNumberColor\">Fluid Dash</span>]",
                  "valuePerStack": {
                    "ChallengePeakBattle_Plugins_0006_ADF_1": {
                      "displayLines": "#ADF_1"
                    },
                    "ChallengePeakBattle_Plugins_0006_ADF_2": {
                      "displayLines": "#ADF_2"
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking Modifier Instance [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"922752745\">MissionBattleEvent60037_BE_Trigger</a>"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable, exclude Netherwing)}}.[[removeBattleEvents]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"770601951\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0006_03</a>[<span class=\"descriptionNumberColor\">Fluid Dash</span>]",
                  "stackLimit": 999,
                  "valuePerStack": {
                    "ChallengePeakBattle_Plugins_0006_ADF_1": {
                      "displayLines": "#ADF_1"
                    },
                    "ChallengePeakBattle_Plugins_0006_ADF_2": {
                      "displayLines": "#ADF_2"
                    }
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-754455660\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0006_Halo</a>",
                  "valuePerStack": {
                    "ChallengePeakBattle_Plugins_0006_ADF_1": {
                      "displayLines": "#ADF_1"
                    },
                    "ChallengePeakBattle_Plugins_0006_ADF_2": {
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