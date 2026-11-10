const configAbility = {
  "fileName": "DanHeng_DanHeng_Trace01",
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
      "modifier": "<a class=\"gModGreen\" id=\"1715636734\">DanHeng_LowHP_AggroDown</a>",
      "valuePerStack": {
        "MDF_HPRatio": {
          "displayLines": "0.5"
        },
        "MDF_AggroDown": {
          "displayLines": "0.5"
        }
      }
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1338494483\">DanHeng_Trace_AggroDown</a>[<span class=\"descriptionNumberColor\">Hidden Dragon</span>]",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "description": "Lowers the chances of being attacked by enemies.",
      "type": "Buff",
      "effectName": "Aggro Chance Reduction",
      "statusName": "Hidden Dragon",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">Aggro%</span>&nbsp;",
              "statValue": {
                "displayLines": "(0 - MDF_PropertyValue)"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1715636734\">DanHeng_LowHP_AggroDown</a>",
      "stackType": "ReplaceByCaster",
      "stackData": [
        "MDF_HPRatio",
        "MDF_AggroDown"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "CurrentHP%",
                "compareType": "<=",
                "value2": {
                  "displayLines": "MDF_HPRatio"
                }
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1338494483\">DanHeng_Trace_AggroDown</a>[<span class=\"descriptionNumberColor\">Hidden Dragon</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "displayLines": "MDF_AggroDown"
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "HP Change [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "CurrentHP%",
                "compareType": "<=",
                "value2": {
                  "displayLines": "MDF_HPRatio"
                }
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1338494483\">DanHeng_Trace_AggroDown</a>[<span class=\"descriptionNumberColor\">Hidden Dragon</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "displayLines": "MDF_AggroDown"
                    }
                  }
                }
              ],
              "failed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1338494483\">DanHeng_Trace_AggroDown</a>[<span class=\"descriptionNumberColor\">Hidden Dragon</span>]",
                  "onlyRemoveOwnersInstance": true
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