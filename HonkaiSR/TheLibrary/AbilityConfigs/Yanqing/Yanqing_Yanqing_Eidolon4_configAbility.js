const configAbility = {
  "fileName": "Yanqing_Yanqing_Eidolon4",
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
      "modifier": "<a class=\"gModGreen\" id=\"1544718418\">Yanqing_Eidolon4</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1096242682\">Yanqing_Eidolon4_IcePenetrate</a>[<span class=\"descriptionNumberColor\">Searing Sting</span>]",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceIcePEN</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_IcePenetrate) || RETURN",
                "displayLines": "MDF_IcePenetrate",
                "constants": [],
                "variables": [
                  "MDF_IcePenetrate"
                ]
              }
            }
          ]
        }
      ],
      "description": "Ice RES PEN +<span class=\"descriptionNumberColor\">MDF_IcePenetrate</span>.",
      "type": "Buff",
      "effectName": "Ice RES PEN",
      "statusName": "Searing Sting"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1544718418\">Yanqing_Eidolon4</a>",
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
                  "target": "{{Caster}}"
                },
                "value1": "CurrentHP%",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (0.8) || RETURN",
                  "displayLines": "0.8",
                  "constants": [],
                  "variables": [
                    0.8
                  ]
                }
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1096242682\">Yanqing_Eidolon4_IcePenetrate</a>[<span class=\"descriptionNumberColor\">Searing Sting</span>]",
                  "valuePerStack": {
                    "MDF_IcePenetrate": {
                      "operator": "Variables[0] (0.12) || RETURN",
                      "displayLines": "0.12",
                      "constants": [],
                      "variables": [
                        0.12
                      ]
                    }
                  }
                }
              ],
              "failed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1096242682\">Yanqing_Eidolon4_IcePenetrate</a>[<span class=\"descriptionNumberColor\">Searing Sting</span>]"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "HP Change [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "value1": "CurrentHP%",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (0.8) || RETURN",
                  "displayLines": "0.8",
                  "constants": [],
                  "variables": [
                    0.8
                  ]
                }
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1096242682\">Yanqing_Eidolon4_IcePenetrate</a>[<span class=\"descriptionNumberColor\">Searing Sting</span>]",
                  "valuePerStack": {
                    "MDF_IcePenetrate": {
                      "operator": "Variables[0] (0.12) || RETURN",
                      "displayLines": "0.12",
                      "constants": [],
                      "variables": [
                        0.12
                      ]
                    }
                  }
                }
              ],
              "failed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1096242682\">Yanqing_Eidolon4_IcePenetrate</a>[<span class=\"descriptionNumberColor\">Searing Sting</span>]"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}