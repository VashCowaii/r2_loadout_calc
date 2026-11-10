const configAbility = {
  "fileName": "20_BattleEventAbility_Challenge_07",
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
      "modifier": "<a class=\"gModGreen\" id=\"1734301025\">Modifier_BattleEventAbility_Challenge_07</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-235869909\">MLevel_BattleEventAbility_Challenge_07</a>[<span class=\"descriptionNumberColor\">Quantum Vulnerability</span>]",
      "stackType": "ReplaceByCaster",
      "description": "Quantum DMG taken +<span class=\"descriptionNumberColor\">#BattleEvent_P2_ADF</span>.",
      "type": "Debuff",
      "effectName": "Quantum Vulnerability",
      "statusName": "Quantum Vulnerability",
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">QuantumVulnerability</span>&nbsp;",
              "statValue": {
                "displayLines": "#BattleEvent_P2_ADF"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1734301025\">Modifier_BattleEventAbility_Challenge_07</a>",
      "execute": [
        {
          "eventTrigger": "Turn [Owner]: Pre-action Phase",
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
                  "modifier": "<a class=\"gModGreen\" id=\"-235869909\">MLevel_BattleEventAbility_Challenge_07</a>[<span class=\"descriptionNumberColor\">Quantum Vulnerability</span>]",
                  "duration": {
                    "displayLines": "#BattleEvent_P3_ADF"
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}