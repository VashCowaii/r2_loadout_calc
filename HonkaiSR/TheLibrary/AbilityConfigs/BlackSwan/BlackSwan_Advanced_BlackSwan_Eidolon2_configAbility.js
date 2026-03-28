const configAbility = {
  "fileName": "BlackSwan_Advanced_BlackSwan_Eidolon2",
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
      "modifier": "<a class=\"gModGreen\" id=\"-1029314217\">Advanced_BlackSwan_Eidolon2</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1069012711\">Advanced_BlackSwan_Eidolon2_AddDotOnCreate</a>",
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
                    "parameter[0]_AddLayer": {
                      "operator": "Variables[0] (30) || RETURN",
                      "displayLines": "30",
                      "constants": [],
                      "variables": [
                        30
                      ]
                    },
                    "parameter[1]_Chance": {
                      "operator": "Variables[0] (1) || RETURN",
                      "displayLines": "1",
                      "constants": [],
                      "variables": [
                        1
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1029314217\">Advanced_BlackSwan_Eidolon2</a>",
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"632471047\">function_Advanced_BlackSwan_AddDOT</a>",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE, with Unselectables)}}"
              },
              "variables": {
                "parameter[0]_AddLayer": {
                  "operator": "Variables[0] (30) || RETURN",
                  "displayLines": "30",
                  "constants": [],
                  "variables": [
                    30
                  ]
                },
                "parameter[1]_Chance": {
                  "operator": "Variables[0] (1) || RETURN",
                  "displayLines": "1",
                  "constants": [],
                  "variables": [
                    1
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
              "modifier": "<a class=\"gModGreen\" id=\"1069012711\">Advanced_BlackSwan_Eidolon2_AddDotOnCreate</a>"
            },
            "Modifier Deletes Itself"
          ],
          "priorityLevel": -80
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  }
}