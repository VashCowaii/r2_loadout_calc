const configAbility = {
  "fileName": "2024011_Monster_W2_Xuanlu_Ability01_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Create Enemies",
      "delayPercent": {
        "displayLines": "{[Skill01[0]]}"
      },
      "enemyList": [
        {
          "name": "Enemy Entry",
          "enemyID": {
            "displayLines": "SummonMinionID_1"
          },
          "locationType": "AroundCasterOnEdge"
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "searchRandom": true,
      "conditions": {
        "name": "Enemy ID",
        "ID": {
          "displayLines": "SummonMinionID_1"
        },
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "characterName": null
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1816294511\">Enemy_W2_Xuanlu_MinionMark_1</a>",
          "valuePerStack": {
            "MDF_MaxMinionCount": {
              "displayLines": "MaxMinionCount"
            }
          }
        }
      ]
    },
    "Ability Start",
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1816294511\">Enemy_W2_Xuanlu_MinionMark_1</a>",
      "stackData": [
        "MDF_MaxMinionCount"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Summoner of Modifier Holder}}"
              },
              "variableName": "MinionCount",
              "context": "TargetEntity",
              "value": -1,
              "max": {
                "displayLines": "MDF_MaxMinionCount"
              }
            },
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Summoner of Modifier Holder}}"
              },
              "variableName": "MinionState_1",
              "context": "TargetEntity",
              "value": -1,
              "max": 2
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Summoner of Modifier Holder}}"
              },
              "variableName": "MinionCount",
              "context": "TargetEntity",
              "value": 1,
              "max": {
                "displayLines": "MDF_MaxMinionCount"
              }
            },
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Summoner of Modifier Holder}}"
              },
              "variableName": "SummonMinionCount",
              "context": "TargetEntity",
              "value": 1,
              "max": {
                "displayLines": "MDF_MaxMinionCount"
              }
            },
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Summoner of Modifier Holder}}"
              },
              "variableName": "SummonMinionTime",
              "context": "TargetEntity",
              "value": 1,
              "max": 99999
            },
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Summoner of Modifier Holder}}"
              },
              "variableName": "MinionState_1",
              "context": "TargetEntity",
              "value": 1,
              "max": 2
            }
          ]
        }
      ]
    }
  ]
}