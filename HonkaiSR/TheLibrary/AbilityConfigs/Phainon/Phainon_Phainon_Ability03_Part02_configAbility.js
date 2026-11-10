const configAbility = {
  "fileName": "Phainon_Phainon_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "ADF_Index"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1136992241\">Phainon_Ultra</a>[<span class=\"descriptionNumberColor\">Divine Vessel</span>]",
      "valuePerStack": {
        "MDF_PropertyRatio": {
          "displayLines": "0.8"
        },
        "MDF_PropertyRatio2": {
          "displayLines": "2.7"
        }
      }
    },
    {
      "name": "Looped Event",
      "maxLoops": {
        "displayLines": "8"
      },
      "execute": [
        {
          "name": "Add Battle Event",
          "teamName": "Player Team",
          "eventID": 11408,
          "variables": {
            "BE_Index": {
              "displayLines": "ADF_Index"
            },
            "BE_Count": {
              "displayLines": "8"
            },
            "BE_Speed": {
              "displayLines": "(CDF_SpeedConvertRatio * Phainon_BaseSpeed)"
            }
          }
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(ADF_Index + 1)"
          },
          "variableName": "ADF_Index"
        }
      ]
    },
    {
      "name": "Redirect AV Changes",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "to": {
        "name": "Target Name",
        "target": "{{Khaslana(Battle Event Cluster)}}.[[sortByAV]].[[index0]]"
      }
    },
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  }
}