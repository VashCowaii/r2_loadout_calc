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
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "variableName": "CasterStatusProbability",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": "&nbsp;<span class=\"descriptionNumberColor\">EffectHitRate</span>&nbsp;"
            }
          ]
        },
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of",
                "target1": {
                  "name": "Target Name",
                  "target": "{{All Team Members with Unselectables}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                }
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
                      "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(0.72, (CasterStatusProbability * 0.6))"
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
          "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">EffectHitRate</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "onChange": [
                {
                  "name": "Define Custom Variable with Stat",
                  "variableName": "CasterStatusProbability",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
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
                      "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(0.72, (CasterStatusProbability * 0.6))"
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
          "priorityLevel": -80,
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "variableName": "CasterStatusProbability",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
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
                  "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(0.72, (CasterStatusProbability * 0.6))"
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
          ]
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  }
}