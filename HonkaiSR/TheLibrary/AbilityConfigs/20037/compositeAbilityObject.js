const entityPageType = "misc"
const compositeAbilityObject = {
  "fullCharacterName": 20037,
  "trimCharacterName": 20037,
  "abilityList": [
    "20037_Modifiers",
    "20037_LocalLegend_ChallengeTurnLimit"
  ],
  "abilityObject": {
    "20037_Modifiers": {
      "fileName": "20037_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1808493640\">Enemy_Standard_LocalLegend_Init_LockHp</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": 0.9
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__449361701\">Enemy_Standard_LocalLegend_Init_MuteBreak</a>",
          "modifierFlags": [
            "MuteBreak"
          ]
        }
      ],
      "references": []
    },
    "20037_LocalLegend_ChallengeTurnLimit": {
      "fileName": "20037_LocalLegend_ChallengeTurnLimit",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "scope": "TargetEntity",
          "variableName": "_MonsterChangeCnt"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "scope": "TargetEntity",
          "variableName": "_MonsterChangeCnt02"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1170521213\">LocalLegend_LevelEntity_Modifier</a>",
          "casterAssign": "TargetSelf"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1183129629\">LocalLegend_ChallengeTurnLimit_Modifier</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1170521213\">LocalLegend_LevelEntity_Modifier</a>",
          "execute": [
            {
              "eventTrigger": "Leave Battle"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1183129629\">LocalLegend_ChallengeTurnLimit_Modifier</a>",
          "execute": [
            {
              "eventTrigger": "Enter Battle"
            }
          ]
        }
      ]
    }
  },
  "enemyData": {},
  "isBattleEvent": true
}