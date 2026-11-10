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
          "priorityLevel": -80,
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
                  "value": {
                    "displayLines": "3"
                  },
                  "variableName": "MaxEnhance"
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "displayLines": "CurEnhance"
                  },
                  "maximum": {
                    "displayLines": "MaxEnhance"
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
                    "displayLines": "3"
                  },
                  "valuePerStack": {
                    "MDF_MaxLayer": {
                      "displayLines": "3"
                    },
                    "MDF_StanceAdded": {
                      "displayLines": "0.5"
                    },
                    "MDF_GainFromPassive": 0
                  },
                  "addStacksPerTrigger": {
                    "displayLines": "#ADF_1"
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  }
}