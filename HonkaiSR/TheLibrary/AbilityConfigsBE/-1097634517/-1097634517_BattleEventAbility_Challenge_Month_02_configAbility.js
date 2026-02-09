const configAbility = {
  "fileName": "-1097634517_BattleEventAbility_Challenge_Month_02",
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
      "modifier": "<a class=\"gModGreen\" id=\"-892941395\">Modifier_BattleEventAbility_Challenge_Month_02</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1670469819\">MLevel_BattleEventAbility_Challenge_Month_02</a>[<span class=\"descriptionNumberColor\">CRIT Rate, CRIT DMG Boost</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (ADF_1) || Variables[1] (MDF_Layer) || MUL || RETURN",
                "displayLines": "(ADF_1 * MDF_Layer)",
                "constants": [],
                "variables": [
                  "ADF_1",
                  "MDF_Layer"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (ADF_2) || Variables[1] (MDF_Layer) || MUL || RETURN",
                "displayLines": "(ADF_2 * MDF_Layer)",
                "constants": [],
                "variables": [
                  "ADF_2",
                  "MDF_Layer"
                ]
              }
            }
          ]
        }
      ],
      "description": "Increases CRIT Rate by <span class=\"descriptionNumberColor\">ADF_2</span> and CRIT DMG by <span class=\"descriptionNumberColor\">ADF_1</span>. Can stack up to 3 times.",
      "type": "Buff",
      "effectName": "CRIT Rate, CRIT DMG Boost",
      "statusName": "CRIT Rate, CRIT DMG Boost",
      "stackLimit": 3,
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-892941395\">Modifier_BattleEventAbility_Challenge_Month_02</a>",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "inherentTarget": {
                "name": "Target Name",
                "target": "{{Player Team Entity}}"
              },
              "ability": "BattleEventAbility_Camear_AllLightTeam",
              "isTrigger": true
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 4,
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "Shield"
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1670469819\">MLevel_BattleEventAbility_Challenge_Month_02</a>[<span class=\"descriptionNumberColor\">CRIT Rate, CRIT DMG Boost</span>]",
                  "duration": {
                    "operator": "Variables[0] (#BattleEvent_P3_ADF) || RETURN",
                    "displayLines": "#BattleEvent_P3_ADF",
                    "constants": [],
                    "variables": [
                      "#BattleEvent_P3_ADF"
                    ]
                  },
                  "stackLimit": {
                    "operator": "Variables[0] (#BattleEvent_P4_ADF) || RETURN",
                    "displayLines": "#BattleEvent_P4_ADF",
                    "constants": [],
                    "variables": [
                      "#BattleEvent_P4_ADF"
                    ]
                  },
                  "valuePerStack": {
                    "ADF_1": {
                      "operator": "Variables[0] (#BattleEvent_P2_ADF) || RETURN",
                      "displayLines": "#BattleEvent_P2_ADF",
                      "constants": [],
                      "variables": [
                        "#BattleEvent_P2_ADF"
                      ]
                    },
                    "ADF_2": {
                      "operator": "Variables[0] (#BattleEvent_P1_ADF) || RETURN",
                      "displayLines": "#BattleEvent_P1_ADF",
                      "constants": [],
                      "variables": [
                        "#BattleEvent_P1_ADF"
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