const configAbility = {
  "fileName": "1912336050_ChallengePeakBattle_BaseAbility_0022",
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
      "modifier": "<a class=\"gModGreen\" id=\"1657970918\">Modifier_ChallengePeakBattle_BaseAbility_0022</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1607834073\">Modifier_ChallengePeakBattle_BaseAbility_0022_02</a>[<span class=\"descriptionNumberColor\">Lockdown</span>]",
      "stackType": "Replace",
      "description": "Upon reaching <span class=\"descriptionNumberColor\">ChallengePeakBattle_0022_ADF_1</span> stack(s), causes this unit to enter the \"Imprisonment\" state for 1 turn and reduces their Energy by a fixed amount of <span class=\"descriptionNumberColor\">ChallengePeakBattle_0022_ADF_2</span>. All stacks of this effect are cleared at the start of this unit's turn or after a debuff is triggered.",
      "type": "Other",
      "statusName": "Lockdown",
      "addStacksPerTrigger": 1,
      "execute": [
        {
          "eventTrigger": "Turn [Owner]: Pre-action Phase",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "MDF_Layer",
              "multiplier": 1
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "MDF_Layer",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1607834073\">Modifier_ChallengePeakBattle_BaseAbility_0022_02</a>[<span class=\"descriptionNumberColor\">Lockdown</span>]",
                  "valuePerStack": {
                    "ChallengePeakBattle_0022_ADF_1": {
                      "displayLines": "ChallengePeakBattle_0022_ADF_1"
                    },
                    "ChallengePeakBattle_0022_ADF_2": {
                      "displayLines": "ChallengePeakBattle_0022_ADF_2"
                    },
                    "ChallengePeakBattle_0022_ADF_3": {
                      "displayLines": "ChallengePeakBattle_0022_ADF_3"
                    },
                    "ChallengePeakBattle_0022_ADF_4": {
                      "displayLines": "ChallengePeakBattle_0022_ADF_4"
                    }
                  },
                  "addStacksPerTrigger": {
                    "displayLines": "-MDF_Layer"
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
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "MDF_Layer",
              "multiplier": 1
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_Layer",
                    "compareType": ">",
                    "value2": 0
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_Layer",
                    "compareType": ">=",
                    "value2": {
                      "displayLines": "ChallengePeakBattle_0022_ADF_1"
                    }
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1997760414\">Standard_Confine</a>[<span class=\"descriptionNumberColor\">Imprisonment</span>]",
                  "duration": 1,
                  "immediateEffect": true,
                  "valuePerStack": {
                    "MDF_SpeedDownRatio": {
                      "displayLines": "ChallengePeakBattle_0022_ADF_3"
                    },
                    "MDF_ActionDelayRatio": {
                      "displayLines": "ChallengePeakBattle_0022_ADF_4"
                    }
                  }
                },
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valuePercent": {
                    "displayLines": "-ChallengePeakBattle_0022_ADF_2"
                  },
                  "isFixed": "(Fixed)"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1607834073\">Modifier_ChallengePeakBattle_BaseAbility_0022_02</a>[<span class=\"descriptionNumberColor\">Lockdown</span>]",
                  "valuePerStack": {
                    "ChallengePeakBattle_0022_ADF_1": {
                      "displayLines": "ChallengePeakBattle_0022_ADF_1"
                    },
                    "ChallengePeakBattle_0022_ADF_2": {
                      "displayLines": "ChallengePeakBattle_0022_ADF_2"
                    },
                    "ChallengePeakBattle_0022_ADF_3": {
                      "displayLines": "ChallengePeakBattle_0022_ADF_3"
                    },
                    "ChallengePeakBattle_0022_ADF_4": {
                      "displayLines": "ChallengePeakBattle_0022_ADF_4"
                    }
                  },
                  "addStacksPerTrigger": {
                    "displayLines": "-MDF_Layer"
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "<a class=\"gModGreen\" id=\"1607834073\">Modifier_ChallengePeakBattle_BaseAbility_0022_02</a>[<span class=\"descriptionNumberColor\">Lockdown</span>]",
                "compareType": "<",
                "value2": {
                  "displayLines": "ChallengePeakBattle_0022_ADF_1"
                },
                "valueType": "Layer"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1607834073\">Modifier_ChallengePeakBattle_BaseAbility_0022_02</a>[<span class=\"descriptionNumberColor\">Lockdown</span>]",
                  "valuePerStack": {
                    "ChallengePeakBattle_0022_ADF_1": {
                      "displayLines": "ChallengePeakBattle_0022_ADF_1"
                    },
                    "ChallengePeakBattle_0022_ADF_2": {
                      "displayLines": "ChallengePeakBattle_0022_ADF_2"
                    },
                    "ChallengePeakBattle_0022_ADF_3": {
                      "displayLines": "ChallengePeakBattle_0022_ADF_3"
                    },
                    "ChallengePeakBattle_0022_ADF_4": {
                      "displayLines": "ChallengePeakBattle_0022_ADF_4"
                    }
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1657970918\">Modifier_ChallengePeakBattle_BaseAbility_0022</a>",
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
                "team": "Player Team"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1607834073\">Modifier_ChallengePeakBattle_BaseAbility_0022_02</a>[<span class=\"descriptionNumberColor\">Lockdown</span>]",
                  "valuePerStack": {
                    "ChallengePeakBattle_0022_ADF_1": {
                      "displayLines": "#ADF_1"
                    },
                    "ChallengePeakBattle_0022_ADF_2": {
                      "displayLines": "#ADF_2"
                    },
                    "ChallengePeakBattle_0022_ADF_3": {
                      "displayLines": "#ADF_3"
                    },
                    "ChallengePeakBattle_0022_ADF_4": {
                      "displayLines": "#ADF_4"
                    }
                  },
                  "addStacksPerTrigger": 0
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}