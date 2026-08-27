const configAbility = {
  "fileName": "1912336050_ChallengePeakBattle_GluttonyAbility_LV2",
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
      "modifier": "<a class=\"gModGreen\" id=\"462263107\">Modifier_ChallengePeakBattle_GluttonyAbility_LV2</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__462263107\">Modifier_ChallengePeakBattle_GluttonyAbility_LV2</a>",
      "execute": [
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "TARGET IS: UNKNOWN CHECK 1",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Array Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "MDF_Param1",
                  "index": 0
                },
                {
                  "name": "Define Custom Variable with Array Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "MDF_Param2",
                  "index": 1
                },
                {
                  "name": "Define Custom Variable with Array Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "MDF_Param3",
                  "index": 2
                },
                {
                  "name": "Define Custom Variable with Array Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "MDF_Param4",
                  "index": 3
                },
                {
                  "name": "Define Custom Variable with Array Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "MDF_Param5",
                  "index": 4
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-256071845\">Standard_Gluttony_LV2</a>",
                  "valuePerStack": {
                    "MDF_Param1": {
                      "operator": "Variables[0] (MDF_Param1) || RETURN",
                      "displayLines": "MDF_Param1",
                      "constants": [],
                      "variables": [
                        "MDF_Param1"
                      ]
                    },
                    "MDF_Param2": {
                      "operator": "Variables[0] (MDF_Param2) || RETURN",
                      "displayLines": "MDF_Param2",
                      "constants": [],
                      "variables": [
                        "MDF_Param2"
                      ]
                    },
                    "MDF_Param3": {
                      "operator": "Variables[0] (MDF_Param3) || RETURN",
                      "displayLines": "MDF_Param3",
                      "constants": [],
                      "variables": [
                        "MDF_Param3"
                      ]
                    },
                    "MDF_Param4": {
                      "operator": "Variables[0] (MDF_Param4) || RETURN",
                      "displayLines": "MDF_Param4",
                      "constants": [],
                      "variables": [
                        "MDF_Param4"
                      ]
                    },
                    "MDF_Param5": {
                      "operator": "Variables[0] (MDF_Param5) || RETURN",
                      "displayLines": "MDF_Param5",
                      "constants": [],
                      "variables": [
                        "MDF_Param5"
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