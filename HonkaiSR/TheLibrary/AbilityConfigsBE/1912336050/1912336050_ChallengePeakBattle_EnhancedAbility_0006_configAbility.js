const configAbility = {
  "fileName": "1912336050_ChallengePeakBattle_EnhancedAbility_0006",
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
      "modifier": "<a class=\"gModGreen\" id=\"1649081267\">Modifier_ChallengePeakBattle_EnhancedAbility_0006</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-342039619\">Modifier_ChallengePeakBattle_EnhancedAbility_0006_03</a>[<span class=\"descriptionNumberColor\">Anguish+</span>]",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (ChallengePeakBattle_0006_ADF_2) || Variables[1] (MDF_Layer) || MUL || RETURN",
                "displayLines": "(ChallengePeakBattle_0006_ADF_2 * MDF_Layer)",
                "constants": [],
                "variables": [
                  "ChallengePeakBattle_0006_ADF_2",
                  "MDF_Layer"
                ]
              }
            }
          ]
        }
      ],
      "description": "Each stack increases DMG taken by <span class=\"descriptionNumberColor\">ChallengePeakBattle_0006_ADF_2</span>.",
      "type": "Debuff",
      "effectName": "Vulnerability",
      "statusName": "Anguish+",
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-358817238\">Modifier_ChallengePeakBattle_EnhancedAbility_0006_02</a>",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-342039619\">Modifier_ChallengePeakBattle_EnhancedAbility_0006_03</a>[<span class=\"descriptionNumberColor\">Anguish+</span>]",
              "baseChance": {
                "operator": "Variables[0] (ChallengePeakBattle_0006_ADF_1) || RETURN",
                "displayLines": "ChallengePeakBattle_0006_ADF_1",
                "constants": [],
                "variables": [
                  "ChallengePeakBattle_0006_ADF_1"
                ]
              },
              "stackLimit": {
                "operator": "Variables[0] (ChallengePeakBattle_0006_ADF_3) || RETURN",
                "displayLines": "ChallengePeakBattle_0006_ADF_3",
                "constants": [],
                "variables": [
                  "ChallengePeakBattle_0006_ADF_3"
                ]
              },
              "valuePerStack": {
                "ChallengePeakBattle_0006_ADF_1": {
                  "operator": "Variables[0] (ChallengePeakBattle_0006_ADF_1) || RETURN",
                  "displayLines": "ChallengePeakBattle_0006_ADF_1",
                  "constants": [],
                  "variables": [
                    "ChallengePeakBattle_0006_ADF_1"
                  ]
                },
                "ChallengePeakBattle_0006_ADF_2": {
                  "operator": "Variables[0] (ChallengePeakBattle_0006_ADF_2) || RETURN",
                  "displayLines": "ChallengePeakBattle_0006_ADF_2",
                  "constants": [],
                  "variables": [
                    "ChallengePeakBattle_0006_ADF_2"
                  ]
                },
                "ChallengePeakBattle_0006_ADF_3": {
                  "operator": "Variables[0] (ChallengePeakBattle_0006_ADF_3) || RETURN",
                  "displayLines": "ChallengePeakBattle_0006_ADF_3",
                  "constants": [],
                  "variables": [
                    "ChallengePeakBattle_0006_ADF_3"
                  ]
                }
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1649081267\">Modifier_ChallengePeakBattle_EnhancedAbility_0006</a>",
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
                    "team": "Enemy Team"
                  },
                  {
                    "name": "Compare: Monster Rank",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "compareType": ">=",
                    "value2": 3
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
                  "modifier": "<a class=\"gModGreen\" id=\"-358817238\">Modifier_ChallengePeakBattle_EnhancedAbility_0006_02</a>",
                  "valuePerStack": {
                    "ChallengePeakBattle_0006_ADF_1": {
                      "operator": "Variables[0] (#ADF_1) || RETURN",
                      "displayLines": "#ADF_1",
                      "constants": [],
                      "variables": [
                        "#ADF_1"
                      ]
                    },
                    "ChallengePeakBattle_0006_ADF_2": {
                      "operator": "Variables[0] (#ADF_2) || RETURN",
                      "displayLines": "#ADF_2",
                      "constants": [],
                      "variables": [
                        "#ADF_2"
                      ]
                    },
                    "ChallengePeakBattle_0006_ADF_3": {
                      "operator": "Variables[0] (#ADF_3) || RETURN",
                      "displayLines": "#ADF_3",
                      "constants": [],
                      "variables": [
                        "#ADF_3"
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