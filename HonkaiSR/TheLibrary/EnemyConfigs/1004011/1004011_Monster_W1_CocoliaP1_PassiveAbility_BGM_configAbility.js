const configAbility = {
  "fileName": "1004011_Monster_W1_CocoliaP1_PassiveAbility_BGM",
  "childAbilityList": [
    "1004011_Monster_W1_CocoliaP1_PassiveAbility_BGM"
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
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Level Entity}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"818085954\">Enemy_W1_CocoliaP1_ResetStageBGM</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__818085954\">Enemy_W1_CocoliaP1_ResetStageBGM</a>",
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
          "eventTrigger": "New Enemy Wave",
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
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}