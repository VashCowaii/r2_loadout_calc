const configAbility = {
  "fileName": "Pela_Pela_PassiveAbility01",
  "childAbilityList": [
    "Pela_Pela_PassiveAbility01"
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
      "modifier": "Pela_PassiveAbility01_Modifier"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 6
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Pela_AbilityEidolon6"
        }
      ]
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Pela_AbilityEidolon6",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Ability Attack Targets}}"
              },
              "searchRandom": true,
              "ifTargetFound": [
                {
                  "name": "Define Custom Variable with Status Counter",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "DebuffNumber"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DebuffNumber",
                    "compareType": ">=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Ice",
                        "Damage": {
                          "operator": "Variables[0] (0.4) || RETURN",
                          "displayLines": "0.4",
                          "constants": [],
                          "variables": [
                            0.4
                          ]
                        },
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Additional DMG"
                      }
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
      "for": "Pela_AbilityEidolon1",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Got a Kill [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "TeamDark"
              },
              "passed": [
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": {
                    "operator": "Variables[0] (MDF_SPValue) || RETURN",
                    "displayLines": "MDF_SPValue",
                    "constants": [],
                    "variables": [
                      "MDF_SPValue"
                    ]
                  },
                  "isFixed": "* ERR"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Pela_PassiveAbility01_Modifier",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 1
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "Pela_AbilityEidolon1",
                  "valuePerStack": {
                    "MDF_SPValue": {
                      "operator": "Variables[0] (5) || RETURN",
                      "displayLines": "5",
                      "constants": [],
                      "variables": [
                        5
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Entity Death [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                }
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Join Targets",
                    "TargetList": [
                      {
                        "name": "Target Name",
                        "target": "{{All Team Members}}"
                      },
                      {
                        "name": "Target Name",
                        "target": "{{All Unselectable Targets}}"
                      }
                    ]
                  },
                  "modifier": "Pela_AbilityEidolon1"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Eidolon Activated",
                    "eidolon": 1
                  },
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "TeamLight"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Pela_AbilityEidolon1",
                  "valuePerStack": {
                    "MDF_SPValue": {
                      "operator": "Variables[0] (5) || RETURN",
                      "displayLines": "5",
                      "constants": [],
                      "variables": [
                        5
                      ]
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
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Attack Targets of Modifier Holder}}"
              },
              "searchRandom": true,
              "ifTargetFound": [
                {
                  "name": "Define Custom Variable with Status Counter",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "DebuffNumber_SingleTarget"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "DebuffNumber",
                  "value": {
                    "operator": "Variables[0] (DebuffNumber_SingleTarget) || Variables[1] (DebuffNumber) || ADD || RETURN",
                    "displayLines": "(DebuffNumber_SingleTarget + DebuffNumber)",
                    "constants": [],
                    "variables": [
                      "DebuffNumber_SingleTarget",
                      "DebuffNumber"
                    ]
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DebuffNumber",
                "compareType": ">=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": {
                    "operator": "Variables[0] (10) || RETURN",
                    "displayLines": "10",
                    "constants": [],
                    "variables": [
                      10
                    ]
                  },
                  "isFixed": "* ERR"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "DebuffNumber",
                  "value": 0
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