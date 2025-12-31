const configAbility = {
  "fileName": "Huohuo_Huohuo_Eidolon2_Insert",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Find New Target",
      "from": "Allied Team(ALL) [Exclude battle mechanics]",
      "searchRandom": true,
      "includeDyingTargets": true,
      "maxTargets": 1,
      "conditions": {
        "name": "Has Modifier",
        "target": "Use Prior Target(s) Defined",
        "modifier": "Huohuo_Passive"
      },
      "ifTargetFound": [
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": "Use Prior Target(s) Defined",
                "modifier": "Huohuo_Passive_HealMark[<span class=\"descriptionNumberColor\">Divine Provision</span>]"
              },
              {
                "name": "Compare: Variable",
                "target": "Use Prior Target(s) Defined",
                "value1": "Huohuo_Rank02_ReviveCount",
                "compareType": ">",
                "value2": 0
              }
            ]
          },
          "passed": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": "Use Prior Target(s) Defined",
              "variableName": "Huohuo_Passive_HotCount",
              "value": -1,
              "max": 2
            },
            {
              "name": "Define Modifier Variable",
              "target": "Use Prior Target(s) Defined",
              "modifierName": "Huohuo_Passive_HealMark[<span class=\"descriptionNumberColor\">Divine Provision</span>]",
              "function": "Add",
              "valueType": "Duration"
            },
            {
              "name": "Define Custom Variable with Added Value",
              "target": "Use Prior Target(s) Defined",
              "variableName": "Huohuo_Rank02_ReviveCount",
              "value": -1,
              "max": 2
            },
            {
              "name": "Dispel Debuffs",
              "target": "Single Target (Primary)",
              "silent": true
            },
            {
              "name": "Heal",
              "target": "Single Target (Primary)",
              "healer": "Single Target (Primary)",
              "healPercent": {
                "operator": "Variables[0] (AADF_1) || RETURN",
                "displayLines": "AADF_1",
                "constants": [],
                "variables": [
                  "AADF_1"
                ]
              },
              "formula": "Heal from Target MaxHP"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": "Use Prior Target(s) Defined",
                    "modifier": "Huohuo_Passive_HealMark[<span class=\"descriptionNumberColor\">Divine Provision</span>]"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": "Use Prior Target(s) Defined",
                    "value1": "Huohuo_Rank02_ReviveCount",
                    "compareType": ">",
                    "value2": 0
                  }
                ]
              },
              "failed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": [
                    {
                      "name": "Target List",
                      "target": "All Team Members(In Context)"
                    },
                    {
                      "name": "Target List",
                      "target": "All Untargetable"
                    }
                  ],
                  "modifier": "Huohuo_Eidolon2"
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Remove Events/Bonuses",
              "to": [
                {
                  "name": "Target List",
                  "target": "All Team Members(In Context)"
                },
                {
                  "name": "Target List",
                  "target": "All Untargetable"
                }
              ],
              "modifier": "Huohuo_Eidolon2"
            }
          ]
        }
      ]
    }
  ],
  "references": []
}