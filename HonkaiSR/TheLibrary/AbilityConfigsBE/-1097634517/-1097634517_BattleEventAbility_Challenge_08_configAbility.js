const configAbility = {
  "fileName": "-1097634517_BattleEventAbility_Challenge_08",
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
      "modifier": "<a class=\"gModGreen\" id=\"1616857692\">Modifier_BattleEventAbility_Challenge_08</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-286202766\">MLevel_BattleEventAbility_Challenge_08</a>[<span class=\"descriptionNumberColor\">Lightning Vulnerability</span>]",
      "stackType": "ReplaceByCaster",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">LightningVulnerability</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (#BattleEvent_P2_ADF) || RETURN",
                "displayLines": "#BattleEvent_P2_ADF",
                "constants": [],
                "variables": [
                  "#BattleEvent_P2_ADF"
                ]
              }
            }
          ]
        }
      ],
      "description": "Lightning DMG taken +<span class=\"descriptionNumberColor\">#BattleEvent_P2_ADF</span>.",
      "type": "Debuff",
      "effectName": "Lightning Vulnerability",
      "statusName": "Lightning Vulnerability"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1616857692\">Modifier_BattleEventAbility_Challenge_08</a>",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
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
                  "modifier": "<a class=\"gModGreen\" id=\"-286202766\">MLevel_BattleEventAbility_Challenge_08</a>[<span class=\"descriptionNumberColor\">Lightning Vulnerability</span>]",
                  "duration": {
                    "operator": "Variables[0] (#BattleEvent_P3_ADF) || RETURN",
                    "displayLines": "#BattleEvent_P3_ADF",
                    "constants": [],
                    "variables": [
                      "#BattleEvent_P3_ADF"
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