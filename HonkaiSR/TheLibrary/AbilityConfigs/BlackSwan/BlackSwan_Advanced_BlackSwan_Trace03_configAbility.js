const configAbility = {
  "fileName": "BlackSwan_Advanced_BlackSwan_Trace03",
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
      "modifier": "<a class=\"gModGreen\" id=\"-2025048276\">M_Advanced_BlackSwan_Trace03</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-465998500\">Advanced_BlackSwan_Trace03_SubListener</a>",
      "execute": [
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of",
                "of": {
                  "name": "Target Name",
                  "target": "{{All Team Members with Unselectables}}"
                },
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "mustBeAlive2": true
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-909282596\">Advanced_BlackSwan_Trace03_Sub</a>[<span class=\"descriptionNumberColor\">Candleflame's Portent</span>]",
                  "referenceModifier": "<a class=\"gModGreen\" id=\"1337385649\">MReference_AllDamageTypeAddedRatio</a>",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (MIN) || Variables[1] (0.72) || Variables[2] (CasterStatusProbability) || Variables[3] (0.6) || MUL || PARAM_2 || FUNCTION || RETURN",
                      "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(0.72, (CasterStatusProbability * 0.6))",
                      "constants": [],
                      "variables": [
                        "MIN",
                        0.72,
                        "CasterStatusProbability",
                        0.6
                      ]
                    }
                  }
                }
              ]
            }
          ]
        }
      ],
      "abilityValueChange": [
        {
          "name": "Ability Value Changes",
          "variableName": "&nbsp;<span class=\"descriptionNumberColor\">EffectHitRate</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "whenValueChanges": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "CasterStatusProbability",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">EffectHitRate</span>&nbsp;"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members with Unselectables}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-909282596\">Advanced_BlackSwan_Trace03_Sub</a>[<span class=\"descriptionNumberColor\">Candleflame's Portent</span>]",
                  "referenceModifier": "<a class=\"gModGreen\" id=\"1337385649\">MReference_AllDamageTypeAddedRatio</a>",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (MIN) || Variables[1] (0.72) || Variables[2] (CasterStatusProbability) || Variables[3] (0.6) || MUL || PARAM_2 || FUNCTION || RETURN",
                      "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(0.72, (CasterStatusProbability * 0.6))",
                      "constants": [],
                      "variables": [
                        "MIN",
                        0.72,
                        "CasterStatusProbability",
                        0.6
                      ]
                    }
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2025048276\">M_Advanced_BlackSwan_Trace03</a>",
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "CasterStatusProbability",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">EffectHitRate</span>&nbsp;"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members with Unselectables}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-909282596\">Advanced_BlackSwan_Trace03_Sub</a>[<span class=\"descriptionNumberColor\">Candleflame's Portent</span>]",
              "referenceModifier": "<a class=\"gModGreen\" id=\"1337385649\">MReference_AllDamageTypeAddedRatio</a>",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (MIN) || Variables[1] (0.72) || Variables[2] (CasterStatusProbability) || Variables[3] (0.6) || MUL || PARAM_2 || FUNCTION || RETURN",
                  "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(0.72, (CasterStatusProbability * 0.6))",
                  "constants": [],
                  "variables": [
                    "MIN",
                    0.72,
                    "CasterStatusProbability",
                    0.6
                  ]
                }
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-465998500\">Advanced_BlackSwan_Trace03_SubListener</a>"
            },
            "Modifier Deletes Itself"
          ],
          "priorityLevel": -80
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}