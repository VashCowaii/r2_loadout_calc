const configAbility = {
  "fileName": "1912336050_ChallengePeakBattle_GluttonyAbility_BUFF_LV3",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-279364236\">Modifier_ChallengePeakBattle_GluttonyAbility_BUFF_LV3</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-279364236\">Modifier_ChallengePeakBattle_GluttonyAbility_BUFF_LV3</a>",
      "execute": [
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Player Team"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"265691212\">Standard_Gluttony_BUFF_LV3</a>[<span class=\"descriptionNumberColor\">Aha's Big Help</span>]",
                  "valuePerStack": {
                    "MDF_Param1": {
                      "displayLines": "#ADF_1"
                    },
                    "MDF_Param2": {
                      "displayLines": "#ADF_2"
                    },
                    "MDF_Param3": {
                      "displayLines": "#ADF_3"
                    },
                    "MDF_Param4": {
                      "displayLines": "#ADF_4"
                    },
                    "MDF_Param5": {
                      "displayLines": "#ADF_5"
                    }
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}