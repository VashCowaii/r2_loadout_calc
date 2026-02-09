const configAbility = {
  "fileName": "-1097634517_BattleEventAbility_Challenge_Month_03",
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
      "modifier": "<a class=\"gModGreen\" id=\"-909719014\">Modifier_BattleEventAbility_Challenge_Month_03</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1653692200\">MLevel_BattleEventAbility_Challenge_Month_03</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Attack Type",
                "attackTypes": [
                  "Follow-up",
                  "Ultimate"
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
                      "value": "ADF_1"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "description": "In the current Cycle, receives <span class=\"descriptionNumberColor\">ADF_1</span> more DMG from Follow-Up ATKs and Ultimates.",
      "type": "Debuff",
      "effectName": "Vulnerability",
      "statusName": "Vulnerability"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-909719014\">Modifier_BattleEventAbility_Challenge_Month_03</a>",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1653692200\">MLevel_BattleEventAbility_Challenge_Month_03</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]"
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "inherentTarget": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "ability": "BattleEventAbility_Camear_SelectDarkTeamEntity",
                  "isTrigger": true
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1653692200\">MLevel_BattleEventAbility_Challenge_Month_03</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
                  "valuePerStack": {
                    "ADF_1": {
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