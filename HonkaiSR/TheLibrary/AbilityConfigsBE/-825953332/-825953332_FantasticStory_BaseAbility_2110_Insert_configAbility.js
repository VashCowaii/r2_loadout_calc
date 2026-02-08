const configAbility = {
  "fileName": "-825953332_FantasticStory_BaseAbility_2110_Insert",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Battle Event List}}"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "Battle Event ID",
        "ID": 30501,
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        }
      },
      "noTargetFound": [
        {
          "name": "Add Battle Event",
          "teamName": "Player Team",
          "eventID": 30501,
          "variables": {
            "DV_BE_BaseSpeed": {
              "operator": "Variables[0] (DV_FeverBESpeed) || RETURN",
              "displayLines": "DV_FeverBESpeed",
              "constants": [],
              "variables": [
                "DV_FeverBESpeed"
              ]
            }
          },
          "whenCreated": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1391985236\">Modifier_FantasticStory_BaseAbility_2110_ListenBEDelay</a>"
            }
          ]
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "variableName": "DV_FantasticStory_BaseAbility_TriggerFlag",
      "value": 0
    },
    "Deleted bullshit",
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]].[[removeMemosprite]]"
      },
      "modifier": "<a class=\"gModGreen\" id=\"773567825\">Modifier_FantasticStory_BaseAbility_2110_AddSP</a>",
      "valuePerStack": {
        "BattleEvent_P1_ADF_Get": {
          "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2110_EnterFever_P1_Ratio) || RETURN",
          "displayLines": "DV_FantasticStory_BaseAbility_2110_EnterFever_P1_Ratio",
          "constants": [],
          "variables": [
            "DV_FantasticStory_BaseAbility_2110_EnterFever_P1_Ratio"
          ]
        }
      },
      "casterAssign": "TargetSelf"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]].[[removeMemosprite]]"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-384544290\">Modifier_FantasticStory_BaseAbility_2110_ReturnSP</a>",
      "casterAssign": "TargetSelf"
    },
    "Trigger: Attack End",
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1923363748\">Modifier_FantasticStory_BaseAbility_2110_aura</a>"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "DV_FantasticStory_BaseAbility_CountSum",
      "value": {
        "operator": "Constants[0] (0) || RETURN",
        "displayLines": "0",
        "constants": [
          0
        ],
        "variables": []
      }
    }
  ],
  "references": []
}