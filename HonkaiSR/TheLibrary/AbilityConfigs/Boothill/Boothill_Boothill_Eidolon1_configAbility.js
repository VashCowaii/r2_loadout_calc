const configAbility = {
  "fileName": "Boothill_Boothill_Eidolon1",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"925135298\">Boothill_Eidolon1</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__925135298\">Boothill_Eidolon1</a>",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team"
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Defender",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                      "value": "(0 - 0.16)"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "priorityLevel": -80,
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "Wave Count",
                    "compareType": "=",
                    "value2": 1
                  },
                  {
                    "name": "Eidolon Activated",
                    "eidolon": 1
                  }
                ]
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
                  "addStacksPerTrigger": 1
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