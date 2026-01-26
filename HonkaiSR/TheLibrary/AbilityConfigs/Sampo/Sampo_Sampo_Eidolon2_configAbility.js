const configAbility = {
  "fileName": "Sampo_Sampo_Eidolon2",
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
      "modifier": "Sampo_Eidolon2"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Sampo_Eidolon2",
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
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "STAT_DOT_Poison"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Trace Activated",
                        "conditionList": "Trap"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_Tree01_LifeTimeAdd",
                          "value": {
                            "operator": "Variables[0] (1) || RETURN",
                            "displayLines": "1",
                            "constants": [],
                            "variables": [
                              1
                            ]
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_Tree01_LifeTimeAdd",
                          "value": 0
                        }
                      ]
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
                          "variableName": "_Rank06_DamagePercentageAdd",
                          "value": {
                            "operator": "Variables[0] (0.15) || RETURN",
                            "displayLines": "0.15",
                            "constants": [],
                            "variables": [
                              0.15
                            ]
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_Rank06_DamagePercentageAdd",
                          "value": 0
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "modifier": "Standard_DOT_Poison[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
                      "duration": {
                        "operator": "Variables[0] (3) || Variables[1] (_Tree01_LifeTimeAdd) || ADD || RETURN",
                        "displayLines": "(3 + _Tree01_LifeTimeAdd)",
                        "constants": [],
                        "variables": [
                          3,
                          "_Tree01_LifeTimeAdd"
                        ]
                      },
                      "baseChance": {
                        "operator": "Variables[0] (1) || RETURN",
                        "displayLines": "1",
                        "constants": [],
                        "variables": [
                          1
                        ]
                      },
                      "stackLimit": {
                        "operator": "Variables[0] (5) || RETURN",
                        "displayLines": "5",
                        "constants": [],
                        "variables": [
                          5
                        ]
                      },
                      "valuePerStack": {
                        "Modifier_Poison_DamagePercentage": {
                          "operator": "Variables[0] (0.52) || Variables[1] (_Rank06_DamagePercentageAdd) || ADD || RETURN",
                          "displayLines": "(0.52 + _Rank06_DamagePercentageAdd)",
                          "constants": [],
                          "variables": [
                            0.52,
                            "_Rank06_DamagePercentageAdd"
                          ]
                        }
                      },
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (1) || RETURN",
                        "displayLines": "1",
                        "constants": [],
                        "variables": [
                          1
                        ]
                      },
                      "stackFlag": "CharacterSkill"
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
    }
  ]
}