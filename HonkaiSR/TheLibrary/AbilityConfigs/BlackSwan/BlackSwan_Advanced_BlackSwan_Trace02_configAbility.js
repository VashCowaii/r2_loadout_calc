const configAbility = {
  "fileName": "BlackSwan_Advanced_BlackSwan_Trace02",
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
      "modifier": "<a class=\"gModGreen\" id=\"-2008270657\">M_Advanced_BlackSwan_Trace02</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1372749734\">M_Advanced_BlackSwan_Trace02_AfterEnterBattleListener</a>",
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
                "team": "Enemy Team"
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"632471047\">function_Advanced_BlackSwan_AddDOT</a>",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variables": {
                    "parameter[0]_AddLayer": 1,
                    "parameter[1]_Chance": {
                      "displayLines": "0.65"
                    }
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1783045717\">Advanced_BlackSwan_DefenceDown</a>[<span class=\"descriptionNumberColor\">Decadence, False Twilight</span>]",
                  "duration": {
                    "displayLines": "3"
                  },
                  "baseChance": {
                    "displayLines": "1"
                  },
                  "referenceModifier": "<a class=\"gModGreen\" id=\"779501689\">MReference_DefenceRatioDown</a>",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "displayLines": "0.208"
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Name",
                "skillName": [
                  "Skill01",
                  "Skill03"
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Attack Targets of Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1783045717\">Advanced_BlackSwan_DefenceDown</a>[<span class=\"descriptionNumberColor\">Decadence, False Twilight</span>]",
                  "duration": {
                    "displayLines": "3"
                  },
                  "baseChance": {
                    "displayLines": "1"
                  },
                  "referenceModifier": "<a class=\"gModGreen\" id=\"779501689\">MReference_DefenceRatioDown</a>",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "displayLines": "0.208"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-2008270657\">M_Advanced_BlackSwan_Trace02</a>",
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "priorityLevel": -80,
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"632471047\">function_Advanced_BlackSwan_AddDOT</a>",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE, with Unselectables)}}"
              },
              "variables": {
                "parameter[0]_AddLayer": 1,
                "parameter[1]_Chance": {
                  "displayLines": "0.65"
                }
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE, with Unselectables)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1783045717\">Advanced_BlackSwan_DefenceDown</a>[<span class=\"descriptionNumberColor\">Decadence, False Twilight</span>]",
              "duration": {
                "displayLines": "3"
              },
              "baseChance": {
                "displayLines": "1"
              },
              "referenceModifier": "<a class=\"gModGreen\" id=\"779501689\">MReference_DefenceRatioDown</a>",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "displayLines": "0.208"
                }
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1372749734\">M_Advanced_BlackSwan_Trace02_AfterEnterBattleListener</a>"
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