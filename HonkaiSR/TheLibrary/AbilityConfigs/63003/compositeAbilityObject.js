const entityPageType = "misc"
const compositeAbilityObject = {
  "fullCharacterName": 63003,
  "trimCharacterName": 63003,
  "abilityList": [
    "63003_Modifiers",
    "63003_Activity_FinalityBattle_1_CountDown63003"
  ],
  "abilityObject": {
    "63003_Modifiers": {
      "fileName": "63003_Modifiers",
      "abilityType": "Char. Modifiers",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1280138072\">Modifier_Activity_FinalityBattle_Stand</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1208481141\">Modifier_Activity_FinalityBattle_SetPosition</a>"
        }
      ],
      "references": []
    },
    "63003_Activity_FinalityBattle_1_CountDown63003": {
      "fileName": "63003_Activity_FinalityBattle_1_CountDown63003",
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
          "modifier": "<a class=\"gModGreen\" id=\"42032737\">Modifier_Activity_FinalityBattle_1_CountDown63003</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__42032737\">Modifier_Activity_FinalityBattle_1_CountDown63003</a>",
          "modifierFlags": [
            "MuteResetActionDelay"
          ],
          "execute": [
            {
              "eventTrigger": "Turn [Owner]: Pre-action Phase",
              "execute": [
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  },
  "enemyData": {},
  "isBattleEvent": true,
  "finalData": {
    "name": "Battle Event Construction",
    "beID": 63003,
    "team": "Player Team",
    "eventType": "Assist",
    "icon": "BattleEvent_FinalityBattle.png",
    "abilityList": [
      "Activity_FinalityBattle_1_CountDown63003"
    ],
    "statOverrides": [
      {
        "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;",
        "value": 90
      }
    ],
    "spd": 100,
    "hardLevel": true,
    "params": [
      0.4,
      0.2
    ]
  }
}