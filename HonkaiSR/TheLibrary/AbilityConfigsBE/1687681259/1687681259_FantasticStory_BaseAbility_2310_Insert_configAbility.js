const configAbility = {
  "fileName": "1687681259_FantasticStory_BaseAbility_2310_Insert",
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
              "modifier": "<a class=\"gModGreen\" id=\"1588401810\">Modifier_FantasticStory_BaseAbility_2310_ListenBEDelay</a>"
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
      "name": "Update Energy",
      "on": {
        "name": "Target Name",
        "target": "{{Player Team(Exclude Memosprites)v2}}"
      },
      "valuePercent": {
        "displayLines": "DV_FantasticStory_PlusAbility_2312_ADF_2"
      },
      "isFixed": "(Fixed)"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-728983354\">Modifier_FantasticStory_BaseAbility_2310_aura</a>"
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