const configAbility = {
  "fileName": "3003033_Monster_W3_Figure_02_RLElite_Ability07_Part00_BattleEvent",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "UI Display Event"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Enemy ID",
        "ID": 300401000,
        "target": {
          "name": "Add Target by Unique Identifier",
          "identifier": "DollBoss"
        },
        "characterName": null
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1648994175\">Enemy_W3_Figure_02_RLElite_Ability07_MainStory</a>"
        }
      ]
    },
    {
      "name": "Remove Modifier Behavior Flag(s)",
      "target": {
        "name": "Target Name",
        "target": "{{Modifier Holder}}"
      },
      "flagNames": []
    },
    {
      "name": "Exit Broken-State",
      "target": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      }
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
    },
    {
      "name": "Trigger Joint-Attack Ability",
      "abilityList": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "ability": "Monster_W3_Figure_02_RLElite_Ability07_Part02"
        },
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Add Target by Enemy ID",
            "ID": 3003043,
            "characterName": "\"Tomorrow in Harmonious Chords\" (Complete)"
          },
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "ability": "Monster_W3_Figure_RLElite_Ability07_Part02"
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Add Target by Enemy ID",
            "ID": 3003053,
            "characterName": "\"Present Inebriated in Revelry\" (Complete)"
          },
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "ability": "Monster_W3_Figure_01_RLElite_Ability07_Part02"
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1648994175\">Enemy_W3_Figure_02_RLElite_Ability07_MainStory</a>",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "MDF_FigureUltraCount",
                "compareType": "=",
                "value2": 0
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
                "value1": "MDF_FigureUltraCount",
                "compareType": "=",
                "value2": 1
              }
            },
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "MDF_FigureUltraCount",
              "value": 1,
              "max": 2
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}