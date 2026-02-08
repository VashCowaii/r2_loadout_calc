const configAbility = {
  "fileName": "Boothill_Boothill_TechniqueInLevel_GainEnhance",
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
      "modifier": "<a class=\"gModGreen\" id=\"-951211001\">M_Boothill_GainEnhance</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-951211001\">M_Boothill_GainEnhance</a>",
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Wave Count",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MaxEnhance",
                  "value": {
                    "operator": "Variables[0] (3) || RETURN",
                    "displayLines": "3",
                    "constants": [],
                    "variables": [
                      3
                    ]
                  }
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (CurEnhance) || RETURN",
                    "displayLines": "CurEnhance",
                    "constants": [],
                    "variables": [
                      "CurEnhance"
                    ]
                  },
                  "maximum": {
                    "operator": "Variables[0] (MaxEnhance) || RETURN",
                    "displayLines": "MaxEnhance",
                    "constants": [],
                    "variables": [
                      "MaxEnhance"
                    ]
                  },
                  "assignState": "False",
                  "bar#": 6,
                  "cooldown": 0
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1894494257\">Boothill_SelfModification</a>[<span class=\"descriptionNumberColor\">Pocket Trickshot</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (3) || RETURN",
                    "displayLines": "3",
                    "constants": [],
                    "variables": [
                      3
                    ]
                  },
                  "valuePerStack": {
                    "MDF_MaxLayer": {
                      "operator": "Variables[0] (3) || RETURN",
                      "displayLines": "3",
                      "constants": [],
                      "variables": [
                        3
                      ]
                    },
                    "MDF_StanceAdded": {
                      "operator": "Variables[0] (0.5) || RETURN",
                      "displayLines": "0.5",
                      "constants": [],
                      "variables": [
                        0.5
                      ]
                    },
                    "MDF_GainFromPassive": 0
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (#ADF_1) || RETURN",
                    "displayLines": "#ADF_1",
                    "constants": [],
                    "variables": [
                      "#ADF_1"
                    ]
                  }
                }
              ]
            }
          ],
          "priorityLevel": -80
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}