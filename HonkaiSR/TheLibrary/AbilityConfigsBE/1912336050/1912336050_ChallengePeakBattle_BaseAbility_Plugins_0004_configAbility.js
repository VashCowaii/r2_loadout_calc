const configAbility = {
  "fileName": "1912336050_ChallengePeakBattle_BaseAbility_Plugins_0004",
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
      "modifier": "<a class=\"gModGreen\" id=\"-2100215869\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0004</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-468236083\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0004_03</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "value": {
                "displayLines": "ChallengePeakBattle_Plugins_0004_ADF_2"
              },
              "variableName": "BattleEvent_P1_ADF_ExtraRadio"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-485013702\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0004_02</a>[<span class=\"descriptionNumberColor\">Sanguine Vitality</span>]",
      "description": "CRIT DMG increases by <span class=\"descriptionNumberColor\">ChallengePeakBattle_Plugins_0004_ADF_1</span>.",
      "type": "Other",
      "statusName": "Sanguine Vitality",
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
              "statValue": {
                "displayLines": "ChallengePeakBattle_Plugins_0004_ADF_1"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2100215869\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0004</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"-485013702\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0004_02</a>[<span class=\"descriptionNumberColor\">Sanguine Vitality</span>]",
                  "valuePerStack": {
                    "ChallengePeakBattle_Plugins_0004_ADF_1": {
                      "displayLines": "#ADF_1"
                    },
                    "ChallengePeakBattle_Plugins_0004_ADF_2": {
                      "displayLines": "#ADF_2"
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Battle Event/Summon Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Battle Event ID",
                    "ID": 60037,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
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
                  "modifier": "<a class=\"gModGreen\" id=\"-468236083\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0004_03</a>",
                  "valuePerStack": {
                    "ChallengePeakBattle_Plugins_0004_ADF_1": {
                      "displayLines": "#ADF_1"
                    },
                    "ChallengePeakBattle_Plugins_0004_ADF_2": {
                      "displayLines": "#ADF_2"
                    }
                  },
                  "casterAssign": "TargetSelf"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}