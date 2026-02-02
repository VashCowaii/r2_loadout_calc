const configAbility = {
  "fileName": "1912336050_ChallengePeakBattle_BaseAbility_Plugins_0008",
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
      "modifier": "Modifier_ChallengePeakBattle_BaseAbility_Plugins_0008"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Modifier_ChallengePeakBattle_BaseAbility_Plugins_0008_Halo",
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Sequence",
            "Sequence": [
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
                  "modifier": "Modifier_ChallengePeakBattle_BaseAbility_Plugins_0008_03[<span class=\"descriptionNumberColor\">Impassioned Spirits</span>]",
                  "invertCondition": true
                }
              }
            ]
          },
          "modifier": "Modifier_ChallengePeakBattle_BaseAbility_Plugins_0008_04",
          "haloStatus": true,
          "valuePerStack": {
            "ChallengePeakBattle_Plugins_0008_ADF_1": {
              "operator": "Variables[0] (#ADF_1) || RETURN",
              "displayLines": "#ADF_1",
              "constants": [],
              "variables": [
                "#ADF_1"
              ]
            },
            "ChallengePeakBattle_Plugins_0008_ADF_2": {
              "operator": "Variables[0] (#ADF_2) || RETURN",
              "displayLines": "#ADF_2",
              "constants": [],
              "variables": [
                "#ADF_2"
              ]
            },
            "ChallengePeakBattle_Plugins_0008_ADF_3": {
              "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED_21) || RETURN",
              "displayLines": "ENEMIES_OBJECT_UNUSED_21",
              "constants": [],
              "variables": [
                "ENEMIES_OBJECT_UNUSED_21"
              ]
            }
          }
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_ChallengePeakBattle_BaseAbility_Plugins_0008_04",
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
              "modifier": "Modifier_ChallengePeakBattle_BaseAbility_Plugins_0008_03[<span class=\"descriptionNumberColor\">Impassioned Spirits</span>]",
              "stackLimit": 999,
              "valuePerStack": {
                "ChallengePeakBattle_Plugins_0008_ADF_1": {
                  "operator": "Variables[0] (ChallengePeakBattle_Plugins_0008_ADF_1) || RETURN",
                  "displayLines": "ChallengePeakBattle_Plugins_0008_ADF_1",
                  "constants": [],
                  "variables": [
                    "ChallengePeakBattle_Plugins_0008_ADF_1"
                  ]
                },
                "ChallengePeakBattle_Plugins_0008_ADF_2": {
                  "operator": "Variables[0] (ChallengePeakBattle_Plugins_0008_ADF_2) || RETURN",
                  "displayLines": "ChallengePeakBattle_Plugins_0008_ADF_2",
                  "constants": [],
                  "variables": [
                    "ChallengePeakBattle_Plugins_0008_ADF_2"
                  ]
                }
              },
              "addStacksPerTrigger": {
                "operator": "Variables[0] (ChallengePeakBattle_Plugins_0008_ADF_3) || RETURN",
                "displayLines": "ChallengePeakBattle_Plugins_0008_ADF_3",
                "constants": [],
                "variables": [
                  "ChallengePeakBattle_Plugins_0008_ADF_3"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "ChallengePeakBattle_Plugins_0008_ADF_1",
        "ChallengePeakBattle_Plugins_0008_ADF_2",
        "ChallengePeakBattle_Plugins_0008_ADF_3"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_ChallengePeakBattle_BaseAbility_Plugins_0008_03[<span class=\"descriptionNumberColor\">Impassioned Spirits</span>]",
      "stackType": "Replace",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (ChallengePeakBattle_Plugins_0008_ADF_2) || Variables[1] (MDF_Layer) || MUL || RETURN",
                "displayLines": "(ChallengePeakBattle_Plugins_0008_ADF_2 * MDF_Layer)",
                "constants": [],
                "variables": [
                  "ChallengePeakBattle_Plugins_0008_ADF_2",
                  "MDF_Layer"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "ChallengePeakBattle_Plugins_0008_ADF_1",
        "ChallengePeakBattle_Plugins_0008_ADF_2"
      ],
      "latentQueue": [],
      "description": "Each stack increases ATK by <span class=\"descriptionNumberColor\">ChallengePeakBattle_Plugins_0008_ADF_2</span>.",
      "type": "Other",
      "effectName": "ATK Boost",
      "statusName": "Impassioned Spirits",
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_ChallengePeakBattle_BaseAbility_Plugins_0008_02[<span class=\"descriptionNumberColor\">Impassioned Spirits</span>]",
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
                "operator": "Variables[0] (ChallengePeakBattle_Plugins_0008_ADF_1) || RETURN",
                "displayLines": "ChallengePeakBattle_Plugins_0008_ADF_1",
                "constants": [],
                "variables": [
                  "ChallengePeakBattle_Plugins_0008_ADF_1"
                ]
              }
            }
          ]
        }
      ],
      "description": "Increases ATK by <span class=\"descriptionNumberColor\">ChallengePeakBattle_Plugins_0008_ADF_1</span>.",
      "type": "Other",
      "statusName": "Impassioned Spirits"
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_ChallengePeakBattle_BaseAbility_Plugins_0008",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "scope": "TargetEntity",
              "variableName": "BattleEventAttack_Layer"
            }
          ]
        },
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
                  "modifier": "Modifier_ChallengePeakBattle_BaseAbility_Plugins_0008_02[<span class=\"descriptionNumberColor\">Impassioned Spirits</span>]",
                  "valuePerStack": {
                    "ChallengePeakBattle_Plugins_0008_ADF_1": {
                      "operator": "Variables[0] (#ADF_1) || RETURN",
                      "displayLines": "#ADF_1",
                      "constants": [],
                      "variables": [
                        "#ADF_1"
                      ]
                    },
                    "ChallengePeakBattle_Plugins_0008_ADF_2": {
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
                    "modifier": "MissionBattleEvent60038_BE_Trigger"
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
                  "modifier": "Modifier_ChallengePeakBattle_BaseAbility_Plugins_0008_03[<span class=\"descriptionNumberColor\">Impassioned Spirits</span>]",
                  "stackLimit": 999,
                  "valuePerStack": {
                    "ChallengePeakBattle_Plugins_0008_ADF_1": {
                      "operator": "Variables[0] (#ADF_1) || RETURN",
                      "displayLines": "#ADF_1",
                      "constants": [],
                      "variables": [
                        "#ADF_1"
                      ]
                    },
                    "ChallengePeakBattle_Plugins_0008_ADF_2": {
                      "operator": "Variables[0] (#ADF_2) || RETURN",
                      "displayLines": "#ADF_2",
                      "constants": [],
                      "variables": [
                        "#ADF_2"
                      ]
                    }
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Modifier_ChallengePeakBattle_BaseAbility_Plugins_0008_Halo",
                  "valuePerStack": {
                    "ChallengePeakBattle_Plugins_0008_ADF_1": {
                      "operator": "Variables[0] (#ADF_1) || RETURN",
                      "displayLines": "#ADF_1",
                      "constants": [],
                      "variables": [
                        "#ADF_1"
                      ]
                    },
                    "ChallengePeakBattle_Plugins_0008_ADF_2": {
                      "operator": "Variables[0] (#ADF_2) || RETURN",
                      "displayLines": "#ADF_2",
                      "constants": [],
                      "variables": [
                        "#ADF_2"
                      ]
                    }
                  }
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "BattleEventAttack_Layer",
                  "value": 1,
                  "max": 999
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