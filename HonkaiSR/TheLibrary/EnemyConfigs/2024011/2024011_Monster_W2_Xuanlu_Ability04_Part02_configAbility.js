const configAbility = {
  "fileName": "2024011_Monster_W2_Xuanlu_Ability04_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Create Enemies",
      "delayPercent": {
        "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
        "displayLines": "{[Skill04[0]]}",
        "constants": [],
        "variables": [
          "{[Skill04[0]]}"
        ]
      },
      "enemyList": [
        {
          "name": "Enemy Entry",
          "enemyID": {
            "operator": "Variables[0] (SummonMinionID_4) || RETURN",
            "displayLines": "SummonMinionID_4",
            "constants": [],
            "variables": [
              "SummonMinionID_4"
            ]
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
          "operator": "Variables[0] (SummonMinionID_4) || RETURN",
          "displayLines": "SummonMinionID_4",
          "constants": [],
          "variables": [
            "SummonMinionID_4"
          ]
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
          "modifier": "<a class=\"gModGreen\" id=\"-1765961654\">Enemy_W2_Xuanlu_MinionMark_4</a>",
          "valuePerStack": {
            "MDF_MaxMinionCount": {
              "operator": "Variables[0] (MaxMinionCount) || RETURN",
              "displayLines": "MaxMinionCount",
              "constants": [],
              "variables": [
                "MaxMinionCount"
              ]
            }
          }
        }
      ]
    },
    "Ability Start",
    "Trigger: Ability End"
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1765961654\">Enemy_W2_Xuanlu_MinionMark_4</a>",
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
                "operator": "Variables[0] (MDF_MaxMinionCount) || RETURN",
                "displayLines": "MDF_MaxMinionCount",
                "constants": [],
                "variables": [
                  "MDF_MaxMinionCount"
                ]
              }
            },
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Summoner of Modifier Holder}}"
              },
              "variableName": "MinionState_4",
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
                "operator": "Variables[0] (MDF_MaxMinionCount) || RETURN",
                "displayLines": "MDF_MaxMinionCount",
                "constants": [],
                "variables": [
                  "MDF_MaxMinionCount"
                ]
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
                "operator": "Variables[0] (MDF_MaxMinionCount) || RETURN",
                "displayLines": "MDF_MaxMinionCount",
                "constants": [],
                "variables": [
                  "MDF_MaxMinionCount"
                ]
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
              "variableName": "MinionState_4",
              "context": "TargetEntity",
              "value": 1,
              "max": 2
            }
          ]
        }
      ],
      "stackData": [
        "MDF_MaxMinionCount"
      ],
      "latentQueue": []
    }
  ]
}