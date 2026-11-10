const configAbility = {
  "fileName": "-1097634517_BattleEventAbility_Challenge_Xianzhou_02",
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
      "modifier": "<a class=\"gModGreen\" id=\"401641453\">Modifier_BattleEventAbility_Challenge_Xianzhou_02</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1747419348\">Modifier_BattleEventAbility_Challenge_Xianzhou_02_Sub</a>",
      "execute": [
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Attack Type",
                "attackTypes": [
                  "DOT"
                ],
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                }
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Defender",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                      "value": "#BattleEvent_P1_ADF"
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
      "for": "<a class=\"gModGreen\" id=\"mod__401641453\">Modifier_BattleEventAbility_Challenge_Xianzhou_02</a>",
      "execute": [
        {
          "eventTrigger": "Turn [Owner]: Pre-action Phase",
          "execute": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "inherentTarget": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "ability": "BattleEventAbility_Camear_AllDarkTeam",
              "isTrigger": true
            },
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "inherentTarget": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "ability": "BattleEventAbility_Camear_AllDarkTeam_RemoveModifier",
              "isTrigger": true
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 5,
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1935319413\">Standard_DOT_Electric</a>[<span class=\"descriptionNumberColor\">Shock</span>]",
                  "duration": {
                    "displayLines": "#BattleEvent_P3_ADF"
                  },
                  "baseChance": {
                    "displayLines": "#BattleEvent_P2_ADF"
                  },
                  "valuePerStack": {
                    "Modifier_Electric_DamagePercentage": {
                      "displayLines": "(#BattleEvent_P4_ADF * 1.5)"
                    }
                  },
                  "stackFlag": "Level"
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 5,
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-868837614\">Standard_DOT_Poison</a>[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
                  "duration": {
                    "displayLines": "#BattleEvent_P3_ADF"
                  },
                  "baseChance": {
                    "displayLines": "#BattleEvent_P2_ADF"
                  },
                  "valuePerStack": {
                    "Modifier_Poison_DamagePercentage": {
                      "displayLines": "(#BattleEvent_P4_ADF * 1)"
                    }
                  },
                  "stackFlag": "Level"
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 5,
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-868837614\">Standard_DOT_Poison</a>[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
                  "duration": {
                    "displayLines": "#BattleEvent_P3_ADF"
                  },
                  "baseChance": {
                    "displayLines": "#BattleEvent_P2_ADF"
                  },
                  "valuePerStack": {
                    "Modifier_Poison_DamagePercentage": {
                      "displayLines": "(#BattleEvent_P4_ADF * 1)"
                    }
                  },
                  "stackFlag": "Level"
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 5,
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1990407757\">Standard_DOT_Burn</a>[<span class=\"descriptionNumberColor\">Burn</span>]",
                  "duration": {
                    "displayLines": "#BattleEvent_P3_ADF"
                  },
                  "baseChance": {
                    "displayLines": "#BattleEvent_P2_ADF"
                  },
                  "valuePerStack": {
                    "Modifier_Burn_DamagePercentage": {
                      "displayLines": "(#BattleEvent_P4_ADF * 1)"
                    }
                  },
                  "stackFlag": "Level"
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 5,
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"227784370\">Standard_DOT_Tear</a>[<span class=\"descriptionNumberColor\">Bleed</span>]",
                  "duration": {
                    "displayLines": "#BattleEvent_P3_ADF"
                  },
                  "baseChance": {
                    "displayLines": "#BattleEvent_P2_ADF"
                  },
                  "valuePerStack": {
                    "Modifier_Tear_DamageRatio": 0.1,
                    "Modifier_Tear_MaxPercentage": {
                      "displayLines": "(#BattleEvent_P4_ADF * 2.5)"
                    }
                  },
                  "stackFlag": "Level"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "variableName": "TempHP",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable with Stat",
              "variableName": "TempAttack",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "value": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;"
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">ATKFlat</span>&nbsp;",
              "statValue": {
                "displayLines": "(TempHP - Hardlevel_HP)"
              }
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">EffectRESSUM</span>&nbsp;",
              "variableName": "Hardlevel_StatusResistance"
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">EffectHitRate</span>&nbsp;",
              "statValue": {
                "displayLines": "((1 / (1 - (Hardlevel_StatusResistance + 0.1))) - 1)"
              }
            }
          ]
        },
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1747419348\">Modifier_BattleEventAbility_Challenge_Xianzhou_02_Sub</a>"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}