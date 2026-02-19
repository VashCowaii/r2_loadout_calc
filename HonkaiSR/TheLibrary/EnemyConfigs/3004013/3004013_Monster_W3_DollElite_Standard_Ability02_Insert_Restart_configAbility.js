const configAbility = {
  "fileName": "3004013_Monster_W3_DollElite_Standard_Ability02_Insert_Restart",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-607059020\">Enemy_W3_DollElite_Commnon_TheChosenOne</a>[<span class=\"descriptionNumberColor\">Impresario</span>]",
      "valuePerStack": {
        "MDF_BreakDelayRatio": {
          "operator": "Variables[0] (P1_BreakDelayRatio) || RETURN",
          "displayLines": "P1_BreakDelayRatio",
          "constants": [],
          "variables": [
            "P1_BreakDelayRatio"
          ]
        },
        "MDF_ChosenOneSpeedUp": {
          "operator": "Variables[0] (P2_ChosenOneSpeedUp) || RETURN",
          "displayLines": "P2_ChosenOneSpeedUp",
          "constants": [],
          "variables": [
            "P2_ChosenOneSpeedUp"
          ]
        },
        "MDF_ExploreDamagePercentage": {
          "operator": "Variables[0] (P3_ExploreDamagePercentage) || RETURN",
          "displayLines": "P3_ExploreDamagePercentage",
          "constants": [],
          "variables": [
            "P3_ExploreDamagePercentage"
          ]
        },
        "MDF_ExploreDelayRatio": {
          "operator": "Variables[0] (P4_ExploreDelayRatio) || RETURN",
          "displayLines": "P4_ExploreDelayRatio",
          "constants": [],
          "variables": [
            "P4_ExploreDelayRatio"
          ]
        },
        "MDF_ExploreDamageUpRatio": {
          "operator": "Variables[0] (P5_ExploreDamageUpRatio) || RETURN",
          "displayLines": "P5_ExploreDamageUpRatio",
          "constants": [],
          "variables": [
            "P5_ExploreDamageUpRatio"
          ]
        }
      }
    }
  ],
  "references": []
}