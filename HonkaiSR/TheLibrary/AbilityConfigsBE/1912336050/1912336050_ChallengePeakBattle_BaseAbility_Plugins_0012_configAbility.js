const configAbility = {
  "fileName": "1912336050_ChallengePeakBattle_BaseAbility_Plugins_0012",
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
      "modifier": "<a class=\"gModGreen\" id=\"2127493856\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0012</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-160874884\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0012_03</a>[<span class=\"descriptionNumberColor\">Thrilling Delight</span>]",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (ChallengePeakBattle_Plugins_0012_ADF_2) || RETURN",
                "displayLines": "ChallengePeakBattle_Plugins_0012_ADF_2",
                "constants": [],
                "variables": [
                  "ChallengePeakBattle_Plugins_0012_ADF_2"
                ]
              }
            }
          ]
        }
      ],
      "description": "SPD increases by <span class=\"descriptionNumberColor\">ChallengePeakBattle_Plugins_0012_ADF_2</span>.",
      "type": "Other",
      "statusName": "Thrilling Delight"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-144097265\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0012_02</a>[<span class=\"descriptionNumberColor\">Thrilling Delight</span>]",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (ChallengePeakBattle_Plugins_0012_ADF_1) || RETURN",
                "displayLines": "ChallengePeakBattle_Plugins_0012_ADF_1",
                "constants": [],
                "variables": [
                  "ChallengePeakBattle_Plugins_0012_ADF_1"
                ]
              }
            }
          ]
        }
      ],
      "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">ChallengePeakBattle_Plugins_0012_ADF_1</span>.",
      "type": "Other",
      "statusName": "Thrilling Delight"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2127493856\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0012</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"-144097265\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0012_02</a>[<span class=\"descriptionNumberColor\">Thrilling Delight</span>]",
                  "valuePerStack": {
                    "ChallengePeakBattle_Plugins_0012_ADF_1": {
                      "operator": "Variables[0] (#ADF_1) || RETURN",
                      "displayLines": "#ADF_1",
                      "constants": [],
                      "variables": [
                        "#ADF_1"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Modifier is Added [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"1334912120\">Enemy_W5_Vtuber_OutField</a>"
                  },
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1334912120\">Enemy_W5_Vtuber_OutField</a>"
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
                  "modifier": "<a class=\"gModGreen\" id=\"-160874884\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0012_03</a>[<span class=\"descriptionNumberColor\">Thrilling Delight</span>]",
                  "valuePerStack": {
                    "ChallengePeakBattle_Plugins_0012_ADF_2": {
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
          "eventTrigger": "When Losing Modifier [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"1334912120\">Enemy_W5_Vtuber_OutField</a>"
                  },
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1334912120\">Enemy_W5_Vtuber_OutField</a>",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-160874884\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0012_03</a>[<span class=\"descriptionNumberColor\">Thrilling Delight</span>]"
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