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
              "displayLines": "DV_FeverBESpeed"
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
      "value": 0,
      "variableName": "DV_FantasticStory_BaseAbility_TriggerFlag"
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
        "displayLines": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P4_LifeTime"
      },
      "stackLimit": {
        "displayLines": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P3_MaxLayer"
      },
      "valuePerStack": {
        "DV_FantasticStory_BaseAbility_2160_BeforeFever_P3_MaxLayer": {
          "displayLines": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P3_MaxLayer"
        },
        "Modifier_FantasticStory_BaseAbility_2160_BeforeFever_DOT_DmgPercentage": {
          "displayLines": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P5_DmgPercentage"
        }
      },
      "addStacksPerTrigger": {
        "displayLines": "DV_FantasticStory_BaseAbility_2160_EnterFever_P5_EnterFeverLayer"
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
        "displayLines": "DV_FantasticStory_BaseAbility_2160_EnterFever_P1_DotTriggerRatio"
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
          "displayLines": "DV_FantasticStory_BaseAbility_2160_EnterFever_P2_AllDamageTakenRatio"
        },
        "DV_FantasticStory_BaseAbility_2160_EnterFever_P3_DamageDownRatio": {
          "displayLines": "DV_FantasticStory_BaseAbility_2160_EnterFever_P3_DamageDownRatio"
        },
        "DV_FantasticStory_BaseAbility_2160_EnterFever_P4_SpeedUPRatio": {
          "displayLines": "DV_FantasticStory_BaseAbility_2160_EnterFever_P4_SpeedUPRatio"
        }
      }
    },
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "0"
      },
      "variableName": "DV_FantasticStory_BaseAbility_CountSum"
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  }
}