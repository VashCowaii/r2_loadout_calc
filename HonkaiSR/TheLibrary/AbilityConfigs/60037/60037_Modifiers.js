const configAbility = {
  "fileName": "60037_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__1322601933\">MissionBattleEvent60024_MainStory4</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1205158600\">MissionBattleEvent60024_MainStory3</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1221936219\">MissionBattleEvent60024_MainStory2</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1238713838\">MissionBattleEvent60024_MainStory1</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Level Entity}}"
                },
                "value1": "WeatherBEFlag",
                "compareType": "=",
                "value2": 0,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "variableName": "WeatherBEFlag",
                  "scope": "TargetEntity"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Action Phase Start [Anyone][?]",
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
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Level Entity}}"
                    },
                    "value1": "WeatherBEFlag",
                    "compareType": "=",
                    "value2": 0
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "value": 1,
                  "variableName": "WeatherBEFlag"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        },
        {
          "eventTrigger": "Extra Action/Turn [Anyone]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Character ID",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterID": "1408 (Phainon)"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Level Entity}}"
                    },
                    "value1": "WeatherBEFlag",
                    "compareType": "=",
                    "value2": 0
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "value": 1,
                  "variableName": "WeatherBEFlag"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2075083378\">Modifier_Monster_W4_DawnsEye_01_MaxHPAddSub_PeakBattle</a>",
      "stackType": "Multiple",
      "modifierFlags": [
        "CanBeAddedToServant"
      ],
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPFlat</span>&nbsp;",
              "value": {
                "displayLines": "MDF_HPDelta"
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">HealingIncoming</span>&nbsp;",
              "value": {
                "displayLines": "MDF_HealAddRatio"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__245518476\">Modifier_Monster_W4_DawnsEye_01_MaxHPAdd_PeakBattle</a>[<span class=\"descriptionNumberColor\">Flame-Chase</span>]",
      "stackType": "Replace",
      "modifierFlags": [
        "CanBeAddedToServant"
      ],
      "description": "Max HP increases by <span class=\"descriptionNumberColor\">MDF_HPDelta</span>.",
      "type": "Buff",
      "effectName": "Flame-Chase",
      "statusName": "Flame-Chase",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Looped Event",
              "maxLoops": {
                "displayLines": "MDF_Layer"
              },
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2075083378\">Modifier_Monster_W4_DawnsEye_01_MaxHPAddSub_PeakBattle</a>",
                  "valuePerStack": {
                    "MDF_HPDelta": {
                      "displayLines": "MDF_HPDeltaPerLayer"
                    },
                    "MDF_HealAddRatio": {
                      "displayLines": "MDF_HealAddRatio"
                    }
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
              "value": {
                "displayLines": "(MDF_HPDeltaPerLayer * MDF_Layer)"
              },
              "variableName": "MDF_HPDelta"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "MDF_IsFirstStack",
                "compareType": ">=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2075083378\">Modifier_Monster_W4_DawnsEye_01_MaxHPAddSub_PeakBattle</a>",
                  "valuePerStack": {
                    "MDF_HPDelta": {
                      "displayLines": "MDF_HPDeltaPerLayer"
                    },
                    "MDF_HealAddRatio": {
                      "displayLines": "MDF_HealAddRatio"
                    }
                  }
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_IsFirstStack",
                  "value": 1,
                  "max": 100
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1743437362\">Modifier_Monster_W4_DawnsEye_01_MaxHPAddHalo_PeakBattle</a>",
      "modifierFlags": [],
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
                  "modifier": "<a class=\"gModGreen\" id=\"245518476\">Modifier_Monster_W4_DawnsEye_01_MaxHPAdd_PeakBattle</a>[<span class=\"descriptionNumberColor\">Flame-Chase</span>]",
                  "invertCondition": true
                }
              }
            ]
          },
          "modifier": "<a class=\"gModGreen\" id=\"245518476\">Modifier_Monster_W4_DawnsEye_01_MaxHPAdd_PeakBattle</a>[<span class=\"descriptionNumberColor\">Flame-Chase</span>]",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_HPDeltaPerLayer": {
              "displayLines": "(MDF_HPDelta * (1 + ENEMIES_OBJECT_UNUSED__295))"
            },
            "MDF_HealAddRatio": {
              "displayLines": "MDF_HealAddRatio"
            },
            "MDF_Layer": {
              "displayLines": "BattleEventHeal_HPDeltaLayer"
            }
          }
        }
      ]
    }
  ],
  "references": []
}