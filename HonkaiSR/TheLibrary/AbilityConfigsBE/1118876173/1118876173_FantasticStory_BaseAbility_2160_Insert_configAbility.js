const configAbility = {
  "fileName": "1118876173_FantasticStory_BaseAbility_2160_Insert",
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
              "modifier": "<a class=\"gModGreen\" id=\"-1851952501\">Modifier_FantasticStory_BaseAbility_2160_ListenBEDelay</a>"
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
        "target": "{{Enemy Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1010904189\">Modifier_FantasticStory_BaseAbility_2160_BeforeFever_DOT</a>[<span class=\"descriptionNumberColor\">Echo Enigma</span>]",
      "duration": {
        "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2160_BeforeFever_P4_LifeTime) || RETURN",
        "displayLines": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P4_LifeTime",
        "constants": [],
        "variables": [
          "DV_FantasticStory_BaseAbility_2160_BeforeFever_P4_LifeTime"
        ]
      },
      "stackLimit": {
        "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2160_BeforeFever_P3_MaxLayer) || RETURN",
        "displayLines": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P3_MaxLayer",
        "constants": [],
        "variables": [
          "DV_FantasticStory_BaseAbility_2160_BeforeFever_P3_MaxLayer"
        ]
      },
      "valuePerStack": {
        "DV_FantasticStory_BaseAbility_2160_BeforeFever_P3_MaxLayer": {
          "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2160_BeforeFever_P3_MaxLayer) || RETURN",
          "displayLines": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P3_MaxLayer",
          "constants": [],
          "variables": [
            "DV_FantasticStory_BaseAbility_2160_BeforeFever_P3_MaxLayer"
          ]
        },
        "Modifier_FantasticStory_BaseAbility_2160_BeforeFever_DOT_DmgPercentage": {
          "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2160_BeforeFever_P5_DmgPercentage) || RETURN",
          "displayLines": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P5_DmgPercentage",
          "constants": [],
          "variables": [
            "DV_FantasticStory_BaseAbility_2160_BeforeFever_P5_DmgPercentage"
          ]
        }
      },
      "addStacksPerTrigger": {
        "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2160_EnterFever_P5_EnterFeverLayer) || RETURN",
        "displayLines": "DV_FantasticStory_BaseAbility_2160_EnterFever_P5_EnterFeverLayer",
        "constants": [],
        "variables": [
          "DV_FantasticStory_BaseAbility_2160_EnterFever_P5_EnterFeverLayer"
        ]
      }
    },
    {
      "name": "Trigger Modifier Event",
      "target": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "variableName": "DOT_TriggerRatio",
      "eventType": "DOT",
      "value": {
        "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2160_EnterFever_P1_DotTriggerRatio) || RETURN",
        "displayLines": "DV_FantasticStory_BaseAbility_2160_EnterFever_P1_DotTriggerRatio",
        "constants": [],
        "variables": [
          "DV_FantasticStory_BaseAbility_2160_EnterFever_P1_DotTriggerRatio"
        ]
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Level Entity}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-898765267\">Modifier_FantasticStory_BaseAbility_2160_Aura</a>",
      "valuePerStack": {
        "DV_FantasticStory_BaseAbility_2160_EnterFever_P2_AllDamageTakenRatio": {
          "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2160_EnterFever_P2_AllDamageTakenRatio) || RETURN",
          "displayLines": "DV_FantasticStory_BaseAbility_2160_EnterFever_P2_AllDamageTakenRatio",
          "constants": [],
          "variables": [
            "DV_FantasticStory_BaseAbility_2160_EnterFever_P2_AllDamageTakenRatio"
          ]
        },
        "DV_FantasticStory_BaseAbility_2160_EnterFever_P3_DamageDownRatio": {
          "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2160_EnterFever_P3_DamageDownRatio) || RETURN",
          "displayLines": "DV_FantasticStory_BaseAbility_2160_EnterFever_P3_DamageDownRatio",
          "constants": [],
          "variables": [
            "DV_FantasticStory_BaseAbility_2160_EnterFever_P3_DamageDownRatio"
          ]
        },
        "DV_FantasticStory_BaseAbility_2160_EnterFever_P4_SpeedUPRatio": {
          "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2160_EnterFever_P4_SpeedUPRatio) || RETURN",
          "displayLines": "DV_FantasticStory_BaseAbility_2160_EnterFever_P4_SpeedUPRatio",
          "constants": [],
          "variables": [
            "DV_FantasticStory_BaseAbility_2160_EnterFever_P4_SpeedUPRatio"
          ]
        }
      }
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