const configAbility = {
  "fileName": "BlackSwan_Advanced_BlackSwan_PassiveAbility01",
  "childAbilityList": [
    "BlackSwan_Advanced_BlackSwan_PassiveAbility01"
  ],
  "skillTrigger": "SkillP01",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"969774839\">M_Advanced_BlackSwan_P01_ListenAddPoison</a>"
    },
    {
      "name": "Define Custom Variable",
      "scope": "ContextCaster",
      "variableName": "Max_DOT_Layer",
      "value": 999
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 4
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "Have_Rank04",
          "value": 1
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-201907162\">M_Advanced_BlackSwan_Eidolon4_Listener</a>"
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "variableName": "Have_Rank04",
          "value": 0
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "variableName": "DOT_Layer_Threshold",
      "value": {
        "operator": "Variables[0] (50) || RETURN",
        "displayLines": "50",
        "constants": [],
        "variables": [
          50
        ]
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 6
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "DOT_Layer_Threshold",
          "value": {
            "operator": "Variables[0] (DOT_Layer_Threshold) || Variables[1] (30) || ADD || RETURN",
            "displayLines": "(DOT_Layer_Threshold + 30)",
            "constants": [],
            "variables": [
              "DOT_Layer_Threshold",
              30
            ]
          }
        }
      ]
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-201907162\">M_Advanced_BlackSwan_Eidolon4_Listener</a>",
      "execute": [
        {
          "eventTrigger": "Entity Death [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Target Exists",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target 2}}"
                }
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team"
                      },
                      {
                        "name": "NOT",
                        "condition": {
                          "name": "Is Part Of Team",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target 2}}"
                          },
                          "team": "Enemy Team"
                        }
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"803699563\">Advanced_BlackSwan_DOT_Enhance</a>[<span class=\"descriptionNumberColor\">Epiphany</span>]",
                        "justAddedOrActive": true,
                        "includePreDeath": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": {
                        "operator": "Variables[0] (8) || RETURN",
                        "displayLines": "8",
                        "constants": [],
                        "variables": [
                          8
                        ]
                      },
                      "isFixed": "* ERR"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1015025143\">M_Advanced_BlackSwan_P01_ListenAddPoison_SubOnEnemy</a>",
      "modifierFlags": [
        "RemoveWhenCasterDead",
        "ListenBattleEventSkill"
      ],
      "execute": [
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Attack Type",
                "attackTypes": [
                  "DOT"
                ],
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                }
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1745362459\">M_Advanced_BlackSwan_P01_AddDOTFlag</a>"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__969774839\">M_Advanced_BlackSwan_P01_ListenAddPoison</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking Modifier Instance [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"1745362459\">M_Advanced_BlackSwan_P01_AddDOTFlag</a>"
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
            "target": "{{Hostile Entities(AOE, with Unselectables)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1015025143\">M_Advanced_BlackSwan_P01_ListenAddPoison_SubOnEnemy</a>",
          "aliveOnly": "False",
          "haloStatus": true
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  }
}