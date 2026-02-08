const configAbility = {
  "fileName": "1912336050_ChallengePeakBattle_BaseAbility_Plugins_0002",
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
      "modifier": "<a class=\"gModGreen\" id=\"-1999550155\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0002</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1575097166\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0002_IgnoreDEF_2</a>",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Hit",
          "execute": [
            {
              "name": "Adjust Target Stats",
              "modifiedValuesArray": [
                {
                  "on": "Defender",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                  "value": "-ChallengePeakBattle_Plugins_0002_ADF_2"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-565240697\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0002_IgnoreDEF</a>",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Hit",
          "execute": [
            {
              "name": "Adjust Target Stats",
              "modifiedValuesArray": [
                {
                  "on": "Defender",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                  "value": "-ChallengePeakBattle_Plugins_0002_ADF_1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1527327304\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0002_02</a>[<span class=\"descriptionNumberColor\">Infantry and Cavalry</span>]",
      "execute": [
        {
          "eventTrigger": "Deal Damage End [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "MDF_InUltra",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_SkillEnhanced",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Owner]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Type",
                "skillType": "Ultimate"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-565240697\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0002_IgnoreDEF</a>",
                  "valuePerStack": {
                    "ChallengePeakBattle_Plugins_0002_ADF_1": {
                      "operator": "Variables[0] (ChallengePeakBattle_Plugins_0002_ADF_1) || RETURN",
                      "displayLines": "ChallengePeakBattle_Plugins_0002_ADF_1",
                      "constants": [],
                      "variables": [
                        "ChallengePeakBattle_Plugins_0002_ADF_1"
                      ]
                    }
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_InUltra",
                  "value": 1
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "MDF_SkillEnhanced",
                    "compareType": "=",
                    "value2": 1
                  },
                  {
                    "name": "Skill Type",
                    "skillType": "Skill"
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
                  "modifier": "<a class=\"gModGreen\" id=\"1575097166\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0002_IgnoreDEF_2</a>",
                  "valuePerStack": {
                    "ChallengePeakBattle_Plugins_0002_ADF_2": {
                      "operator": "Variables[0] (ChallengePeakBattle_Plugins_0002_ADF_2) || RETURN",
                      "displayLines": "ChallengePeakBattle_Plugins_0002_ADF_2",
                      "constants": [],
                      "variables": [
                        "ChallengePeakBattle_Plugins_0002_ADF_2"
                      ]
                    }
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_SkillEnhanced",
                  "value": 0
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Type",
                "skillType": "Ultimate"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-565240697\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0002_IgnoreDEF</a>"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_InUltra",
                  "value": 0
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Type",
                "skillType": "Skill"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1575097166\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0002_IgnoreDEF_2</a>"
                }
              ]
            }
          ]
        }
      ],
      "description": "Ignores <span class=\"descriptionNumberColor\">ChallengePeakBattle_Plugins_0002_ADF_1</span> of the target's DEF when using Ultimate. After Ultimate deals DMG, the next Skill ignores <span class=\"descriptionNumberColor\">ChallengePeakBattle_Plugins_0002_ADF_2</span> of the target's DEF.",
      "type": "Other",
      "statusName": "Infantry and Cavalry"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1999550155\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0002</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"1527327304\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0002_02</a>[<span class=\"descriptionNumberColor\">Infantry and Cavalry</span>]",
                  "valuePerStack": {
                    "ChallengePeakBattle_Plugins_0002_ADF_1": {
                      "operator": "Variables[0] (#ADF_1) || RETURN",
                      "displayLines": "#ADF_1",
                      "constants": [],
                      "variables": [
                        "#ADF_1"
                      ]
                    },
                    "ChallengePeakBattle_Plugins_0002_ADF_2": {
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
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}