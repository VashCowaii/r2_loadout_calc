const configAbility = {
  "fileName": "4014016_Monster_W4_Nikadory_PassiveAbility_BGM",
  "childAbilityList": [
    "4014016_Monster_W4_Nikadory_PassiveAbility_BGM"
  ],
  "skillTrigger": "Passive_BGM",
  "abilityType": "Basic ATK",
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "IF",
      "conditions": {
        "name": "OR",
        "conditionList": [
          {
            "name": "Stage Type",
            "stageType": "Challenge"
          },
          {
            "name": "Stage Type",
            "stageType": "VerseSimulation"
          },
          {
            "name": "Stage Type",
            "stageType": "StrongChallengeActivity"
          },
          {
            "name": "Stage Type",
            "stageType": "RogueRelic"
          },
          {
            "name": "Stage Type",
            "stageType": "GridFightActivity"
          }
        ]
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Enemy Team All(with Unselectable)}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": ">=",
            "value2": 1,
            "conditions": {
              "name": "Enemy ID",
              "ID": 401402,
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "characterName": null,
              "isCompareUniqueID": true
            }
          },
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Enemy ID",
                "ID": 4014015,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Savage God, Mad King, Incarnation of Strife (Complete)",
                "isBaseCompare": true
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Level Entity}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1564473981\">Enemy_W4_Nikadory_ResetStageBGM</a>"
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1564473981\">Enemy_W4_Nikadory_ResetStageBGM</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Varying Data",
              "target": null,
              "variableName": "MDF_WaveIndex",
              "value": "CurWaveIndex"
            }
          ]
        },
        {
          "eventTrigger": "New Enemy Wave: Start",
          "execute": [
            {
              "name": "Define Custom Variable with Varying Data",
              "target": null,
              "variableName": "MDF_WaveIndex2",
              "value": "CurWaveIndex"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "MDF_WaveIndex",
                "compareType": "NOT=",
                "value2": {
                  "operator": "Variables[0] (MDF_WaveIndex2) || RETURN",
                  "displayLines": "MDF_WaveIndex2",
                  "constants": [],
                  "variables": [
                    "MDF_WaveIndex2"
                  ]
                }
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Enemy Team All(with Unselectable)}}"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": ">=",
                    "value2": 1,
                    "conditions": {
                      "name": "Enemy ID",
                      "ID": 401402,
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "characterName": null,
                      "isCompareUniqueID": true
                    }
                  },
                  "failed": [
                    "Modifier Deletes Itself"
                  ]
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