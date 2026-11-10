const configAbility = {
  "fileName": "3004013_Monster_W3_FigureBoss_Ability02_Insert_Restart",
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
      "modifier": "<a class=\"gModGreen\" id=\"941590351\">Monster_W3_FigureBoss_Standard_TheChosenOne</a>[<span class=\"descriptionNumberColor\">Impresario</span>]",
      "valuePerStack": {
        "MDF_BreakDelayRatio": {
          "displayLines": "P1_BreakDelayRatio"
        },
        "MDF_ChosenOneSpeedUp": {
          "displayLines": "P2_ChosenOneSpeedUp"
        },
        "MDF_ExploreDamagePercentage": {
          "displayLines": "P3_ExploreDamagePercentage"
        },
        "MDF_ExploreDelayRatio": {
          "displayLines": "P4_ExploreDelayRatio"
        },
        "MDF_ExploreDamageUpRatio": {
          "displayLines": "P5_ExploreDamageUpRatio"
        }
      }
    }
  ],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  },
  "references": []
}