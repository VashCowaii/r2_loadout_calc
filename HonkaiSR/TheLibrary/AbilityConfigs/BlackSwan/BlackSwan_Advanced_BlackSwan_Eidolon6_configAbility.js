const configAbility = {
  "fileName": "BlackSwan_Advanced_BlackSwan_Eidolon6",
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
      "modifier": "<a class=\"gModGreen\" id=\"-1096424693\">Advanced_BlackSwan_Eidolon6</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1750541211\">Advanced_BlackSwan_Eidolon6_SubOnEnemy</a>",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "_count",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked Start [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{All Team Members(Exclude Self)}}.[[addBattleEvents]]"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "mustBeAlive2": true
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "_count",
                    "compareType": "<=",
                    "value2": 0,
                    "contextScope": "ContextModifier"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_count",
                  "value": 1
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1854270895\">M_Advanced_BlackSwan_Eidolon6_AddDOTFlag</a>",
                  "referenceModifier": "<a class=\"gModGreen\" id=\"1832901043\">MReference_Empty</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Attack Action Completed [Anyone]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "_count",
              "value": 0
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1096424693\">Advanced_BlackSwan_Eidolon6</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier is Added [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"-1854270895\">M_Advanced_BlackSwan_Eidolon6_AddDOTFlag</a>"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1854270895\">M_Advanced_BlackSwan_Eidolon6_AddDOTFlag</a>"
                },
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
                      "operator": "Variables[0] (0.65) || RETURN",
                      "displayLines": "0.65",
                      "constants": [],
                      "variables": [
                        0.65
                      ]
                    }
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE, with Unselectables)}}.[[removeBattleEvents]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1750541211\">Advanced_BlackSwan_Eidolon6_SubOnEnemy</a>",
          "haloStatus": true
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  }
}