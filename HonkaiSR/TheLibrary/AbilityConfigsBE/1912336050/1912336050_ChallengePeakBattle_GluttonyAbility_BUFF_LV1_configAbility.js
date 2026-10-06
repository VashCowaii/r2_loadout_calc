const configAbility = {
  "fileName": "1912336050_ChallengePeakBattle_GluttonyAbility_BUFF_LV1",
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
      "modifier": "<a class=\"gModGreen\" id=\"-245808998\">Modifier_ChallengePeakBattle_GluttonyAbility_BUFF_LV1</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-245808998\">Modifier_ChallengePeakBattle_GluttonyAbility_BUFF_LV1</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"299246450\">Standard_Gluttony_BUFF_LV1</a>[<span class=\"descriptionNumberColor\">Aha Be Useful</span>]",
                  "valuePerStack": {
                    "MDF_Param1": {
                      "operator": "Variables[0] (#ADF_1) || RETURN",
                      "displayLines": "#ADF_1",
                      "constants": [],
                      "variables": [
                        "#ADF_1"
                      ]
                    },
                    "MDF_Param2": {
                      "operator": "Variables[0] (#ADF_2) || RETURN",
                      "displayLines": "#ADF_2",
                      "constants": [],
                      "variables": [
                        "#ADF_2"
                      ]
                    },
                    "MDF_Param3": {
                      "operator": "Variables[0] (#ADF_3) || RETURN",
                      "displayLines": "#ADF_3",
                      "constants": [],
                      "variables": [
                        "#ADF_3"
                      ]
                    },
                    "MDF_Param4": {
                      "operator": "Variables[0] (#ADF_4) || RETURN",
                      "displayLines": "#ADF_4",
                      "constants": [],
                      "variables": [
                        "#ADF_4"
                      ]
                    },
                    "MDF_Param5": {
                      "operator": "Variables[0] (#ADF_5) || RETURN",
                      "displayLines": "#ADF_5",
                      "constants": [],
                      "variables": [
                        "#ADF_5"
                      ]
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