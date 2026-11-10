const configAbility = {
  "fileName": "1912336050_ChallengePeakBattle_EnhancedAbility_0012",
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
      "modifier": "<a class=\"gModGreen\" id=\"1682489410\">Modifier_ChallengePeakBattle_EnhancedAbility_0012</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1351261938\">Modifier_ChallengePeakBattle_EnhancedAbility_0012_03</a>[<span class=\"descriptionNumberColor\">Unending Refinement+</span>]",
      "stackType": "Replace",
      "description": "Each stack reduces DMG received by <span class=\"descriptionNumberColor\">ChallengePeakBattle_0012_ADF_1</span> and CRIT DMG taken by <span class=\"descriptionNumberColor\">ChallengePeakBattle_0012_ADF_3</span>, stackable up to <span class=\"descriptionNumberColor\">ChallengePeakBattle_0012_ADF_2</span> time(s). Stacks are cleared at the start of turn or when entering the Weakness Break state.",
      "type": "Other",
      "statusName": "Unending Refinement+",
      "addStacksPerTrigger": 1,
      "execute": [
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "Adjust Target Stats",
              "modifiedValuesArray": [
                {
                  "on": "Attacker",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageSUM</span>&nbsp;",
                  "value": "(-ChallengePeakBattle_0012_ADF_3 * MDF_Layer)"
                }
              ]
            }
          ]
        },
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
              "statValue": {
                "displayLines": "(ChallengePeakBattle_0012_ADF_1 * MDF_Layer)"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1368039557\">Modifier_ChallengePeakBattle_EnhancedAbility_0012_02</a>",
      "execute": [
        {
          "eventTrigger": "Turn [Owner]: Pre-action Phase",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1351261938\">Modifier_ChallengePeakBattle_EnhancedAbility_0012_03</a>[<span class=\"descriptionNumberColor\">Unending Refinement+</span>]"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1351261938\">Modifier_ChallengePeakBattle_EnhancedAbility_0012_03</a>[<span class=\"descriptionNumberColor\">Unending Refinement+</span>]",
              "stackLimit": {
                "displayLines": "ChallengePeakBattle_0012_ADF_2"
              },
              "valuePerStack": {
                "ChallengePeakBattle_0012_ADF_1": {
                  "displayLines": "#ADF_1"
                },
                "ChallengePeakBattle_0012_ADF_2": {
                  "displayLines": "#ADF_2"
                },
                "ChallengePeakBattle_0012_ADF_3": {
                  "displayLines": "#ADF_3"
                }
              },
              "addStacksPerTrigger": 0
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1351261938\">Modifier_ChallengePeakBattle_EnhancedAbility_0012_03</a>[<span class=\"descriptionNumberColor\">Unending Refinement+</span>]",
              "stackLimit": {
                "displayLines": "ChallengePeakBattle_0012_ADF_2"
              },
              "valuePerStack": {
                "ChallengePeakBattle_0012_ADF_1": {
                  "displayLines": "#ADF_1"
                },
                "ChallengePeakBattle_0012_ADF_2": {
                  "displayLines": "#ADF_2"
                },
                "ChallengePeakBattle_0012_ADF_3": {
                  "displayLines": "#ADF_3"
                }
              },
              "addStacksPerTrigger": 0
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked [Owner]: Completed",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "flagName": "Break",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1351261938\">Modifier_ChallengePeakBattle_EnhancedAbility_0012_03</a>[<span class=\"descriptionNumberColor\">Unending Refinement+</span>]",
                  "valuePerStack": {
                    "ChallengePeakBattle_0012_ADF_1": {
                      "displayLines": "#ADF_1"
                    },
                    "ChallengePeakBattle_0012_ADF_2": {
                      "displayLines": "#ADF_2"
                    },
                    "ChallengePeakBattle_0012_ADF_3": {
                      "displayLines": "#ADF_3"
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1351261938\">Modifier_ChallengePeakBattle_EnhancedAbility_0012_03</a>[<span class=\"descriptionNumberColor\">Unending Refinement+</span>]"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1351261938\">Modifier_ChallengePeakBattle_EnhancedAbility_0012_03</a>[<span class=\"descriptionNumberColor\">Unending Refinement+</span>]",
              "stackLimit": {
                "displayLines": "ChallengePeakBattle_0012_ADF_2"
              },
              "valuePerStack": {
                "ChallengePeakBattle_0012_ADF_1": {
                  "displayLines": "#ADF_1"
                },
                "ChallengePeakBattle_0012_ADF_2": {
                  "displayLines": "#ADF_2"
                },
                "ChallengePeakBattle_0012_ADF_3": {
                  "displayLines": "#ADF_3"
                }
              },
              "addStacksPerTrigger": 0
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1682489410\">Modifier_ChallengePeakBattle_EnhancedAbility_0012</a>",
      "execute": [
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
                  "modifier": "<a class=\"gModGreen\" id=\"1368039557\">Modifier_ChallengePeakBattle_EnhancedAbility_0012_02</a>",
                  "valuePerStack": {
                    "ChallengePeakBattle_0012_ADF_1": {
                      "displayLines": "#ADF_1"
                    },
                    "ChallengePeakBattle_0012_ADF_2": {
                      "displayLines": "#ADF_2"
                    },
                    "ChallengePeakBattle_0012_ADF_3": {
                      "displayLines": "#ADF_3"
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