const configAbility = {
  "fileName": "61002_HeliobusActionAbilityBPRecover_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Deleted bullshit",
    {
      "name": "UI Display Event",
      "popUpText": "Amulet: Fiend Seal"
    },
    {
      "name": "Skill Points Modification",
      "adjustmentValue": {
        "operator": "Variables[0] (#BattleEvent_P1_ADF) || RETURN",
        "displayLines": "#BattleEvent_P1_ADF",
        "constants": [],
        "variables": [
          "#BattleEvent_P1_ADF"
        ]
      },
      "adjustmentType": "+"
    },
    {
      "name": "UI Display Event (On Entity)",
      "target": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "popUpText": "Skill Point Obtained"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-139066169\">Modifier_HeliobusActionAbilityBPRecover_Listener</a>[<span class=\"descriptionNumberColor\">Spiritual Command</span>]"
    },
    "Trigger: Ability End"
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1110720773\">Modifier_HeliobusActionAbilityBPRecover_DamageUp</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
      "stackType": "ReplaceByCaster",
      "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">#BattleEvent_P2_ADF</span>, lasting until the end of turn",
      "type": "Buff",
      "effectName": "DMG Boost",
      "statusName": "DMG Boost",
      "execute": [
        {
          "eventTrigger": "Turn End [Anyone]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1110720773\">Modifier_HeliobusActionAbilityBPRecover_DamageUp</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]"
            }
          ]
        },
        {
          "eventTrigger": "Deal Damage Start [Owner]: Hit",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Attack Type",
                "attackTypes": [
                  "Basic ATK",
                  "Skill"
                ]
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                      "value": "#BattleEvent_P2_ADF"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-139066169\">Modifier_HeliobusActionAbilityBPRecover_Listener</a>[<span class=\"descriptionNumberColor\">Spiritual Command</span>]",
      "description": "When consuming Skill Points, increases the character's Basic ATK and Skill DMG by <span class=\"descriptionNumberColor\">#BattleEvent_P2_ADF</span>, lasting until the end of their turn.",
      "type": "Buff",
      "effectName": "Spiritual Command",
      "statusName": "Spiritual Command",
      "execute": [
        {
          "eventTrigger": "Skill Point Changes",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "ParameterValue",
                    "compareType": "<",
                    "value2": 0
                  },
                  {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "mustBeAlive2": true
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1110720773\">Modifier_HeliobusActionAbilityBPRecover_DamageUp</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                  "duration": 1
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-139066169\">Modifier_HeliobusActionAbilityBPRecover_Listener</a>[<span class=\"descriptionNumberColor\">Spiritual Command</span>]"
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "All Player Team Members"
  }
}