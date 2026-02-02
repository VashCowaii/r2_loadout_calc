const configAbility = {
  "fileName": "1912336050_ChallengePeakBattle_BaseAbility_0001",
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
      "modifier": "Modifier_ChallengePeakBattle_BaseAbility_0001"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Modifier_ChallengePeakBattle_BaseAbility_0001_02[<span class=\"descriptionNumberColor\">Resilient Armor</span>]",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "Being Weakness Break Delayed [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": null,
                "compareType": ">",
                "value2": 0,
                "valueType": "Layer"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Modifier_ChallengePeakBattle_BaseAbility_0001_02[<span class=\"descriptionNumberColor\">Resilient Armor</span>]"
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (ChallengePeakBattle_0001_ADF_2) || Variables[1] (MDF_Layer) || MUL || RETURN",
                "displayLines": "(ChallengePeakBattle_0001_ADF_2 * MDF_Layer)",
                "constants": [],
                "variables": [
                  "ChallengePeakBattle_0001_ADF_2",
                  "MDF_Layer"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": null,
                "compareType": "<=",
                "value2": 0,
                "valueType": "Layer"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Modifier_ChallengePeakBattle_BaseAbility_0001_02[<span class=\"descriptionNumberColor\">Resilient Armor</span>]"
                }
              ]
            }
          ]
        }
      ],
      "description": "Each stack reduces DMG taken by <span class=\"descriptionNumberColor\">ChallengePeakBattle_0001_ADF_2</span>. Loses 1 stack of \"Resilient Armor\" each time Toughness is reduced to 0.",
      "type": "Other",
      "statusName": "Resilient Armor",
      "addStacksPerTrigger": -1
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_ChallengePeakBattle_BaseAbility_0001",
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
                  "modifier": "Modifier_ChallengePeakBattle_BaseAbility_0001_02[<span class=\"descriptionNumberColor\">Resilient Armor</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (#ADF_1) || RETURN",
                    "displayLines": "#ADF_1",
                    "constants": [],
                    "variables": [
                      "#ADF_1"
                    ]
                  },
                  "valuePerStack": {
                    "ChallengePeakBattle_0001_ADF_1": {
                      "operator": "Variables[0] (#ADF_1) || RETURN",
                      "displayLines": "#ADF_1",
                      "constants": [],
                      "variables": [
                        "#ADF_1"
                      ]
                    },
                    "ChallengePeakBattle_0001_ADF_2": {
                      "operator": "Variables[0] (#ADF_2) || RETURN",
                      "displayLines": "#ADF_2",
                      "constants": [],
                      "variables": [
                        "#ADF_2"
                      ]
                    }
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (#ADF_1) || RETURN",
                    "displayLines": "#ADF_1",
                    "constants": [],
                    "variables": [
                      "#ADF_1"
                    ]
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