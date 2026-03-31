const configAbility = {
  "fileName": "60008_MissionBattleEvent60008_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Heal",
      "target": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "healPercent": {
        "operator": "Variables[0] (#BattleEvent_P1_ADF) || RETURN",
        "displayLines": "#BattleEvent_P1_ADF",
        "constants": [],
        "variables": [
          "#BattleEvent_P1_ADF"
        ]
      },
      "formula": "Heal from Target MaxHP"
    },
    {
      "name": "Update Energy",
      "on": {
        "name": "Target Name",
        "target": "{{Player Team(Exclude Memosprites)v2}}"
      },
      "valuePercent": {
        "operator": "Variables[0] (#BattleEvent_P2_ADF) || RETURN",
        "displayLines": "#BattleEvent_P2_ADF",
        "constants": [],
        "variables": [
          "#BattleEvent_P2_ADF"
        ]
      },
      "isFixed": "(Fixed)"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Level Entity}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"936193653\">Modifier_MissionBattleEvent60008_Summon</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__936193653\">Modifier_MissionBattleEvent60008_Summon</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Add Battle Event",
              "teamName": "Neutral Team",
              "dmgCountsForTeam": "Player Team",
              "eventID": 60011,
              "variables": null
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2060460208\">Modifier_MissionBattleEvent60008_Tutorial</a>"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2060460208\">Modifier_MissionBattleEvent60008_Tutorial</a>",
      "execute": [
        {
          "eventTrigger": "Action Choice Window [Anyone]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2060460208\">Modifier_MissionBattleEvent60008_Tutorial</a>"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ],
  "targetObjectData": {
    "primaryTarget": "All Player Team Members"
  }
}