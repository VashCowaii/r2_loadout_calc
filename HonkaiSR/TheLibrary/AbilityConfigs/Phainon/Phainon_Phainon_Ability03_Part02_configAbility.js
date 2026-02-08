const configAbility = {
  "fileName": "Phainon_Phainon_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "variableName": "ADF_Index",
      "value": 0
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
          "operator": "Variables[0] (0.8) || RETURN",
          "displayLines": "0.8",
          "constants": [],
          "variables": [
            0.8
          ]
        },
        "MDF_PropertyRatio2": {
          "operator": "Variables[0] (2.7) || RETURN",
          "displayLines": "2.7",
          "constants": [],
          "variables": [
            2.7
          ]
        }
      }
    },
    {
      "name": "Looped Event",
      "maxLoops": {
        "operator": "Variables[0] (8) || RETURN",
        "displayLines": "8",
        "constants": [],
        "variables": [
          8
        ]
      },
      "Event": [
        {
          "name": "Add Battle Event",
          "teamName": "Player Team",
          "eventID": 11408,
          "variables": {
            "BE_Index": {
              "operator": "Variables[0] (ADF_Index) || RETURN",
              "displayLines": "ADF_Index",
              "constants": [],
              "variables": [
                "ADF_Index"
              ]
            },
            "BE_Count": {
              "operator": "Variables[0] (8) || RETURN",
              "displayLines": "8",
              "constants": [],
              "variables": [
                8
              ]
            },
            "BE_Speed": {
              "operator": "Variables[0] (CDF_SpeedConvertRatio) || Variables[1] (Phainon_BaseSpeed) || MUL || RETURN",
              "displayLines": "(CDF_SpeedConvertRatio * Phainon_BaseSpeed)",
              "constants": [],
              "variables": [
                "CDF_SpeedConvertRatio",
                "Phainon_BaseSpeed"
              ]
            }
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "ADF_Index",
          "value": {
            "operator": "Variables[0] (ADF_Index) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "(ADF_Index + 1)",
            "constants": [
              1
            ],
            "variables": [
              "ADF_Index"
            ]
          }
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
  "references": []
}