const compositeAbilityObject = {
  "fullCharacterName": "Time Waits for No One",
  "trimCharacterName": "TimeWaitsforNoOne",
  "abilityList": [
    "TimeWaitsforNoOne_Ability23013"
  ],
  "fixedStats": {
    "1": {
      "HP%": 0.18,
      "HealingOutgoing": 0.12
    },
    "2": {
      "HP%": 0.21,
      "HealingOutgoing": 0.14
    },
    "3": {
      "HP%": 0.24,
      "HealingOutgoing": 0.16
    },
    "4": {
      "HP%": 0.27,
      "HealingOutgoing": 0.18
    },
    "5": {
      "HP%": 0.3,
      "HealingOutgoing": 0.2
    }
  },
  "abilityObject": {
    "TimeWaitsforNoOne_Ability23013": {
      "fileName": "TimeWaitsforNoOne_Ability23013",
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
          "modifier": "<a class=\"gModGreen\" id=\"-768874206\">LC_23013_Main</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1443016247\">LC_23013_Sub</a>",
          "modifierFlags": [
            "MuteDotCasterCallBack",
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Heal Target End [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable with Healing",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_HealAmount"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_TotalAmount",
                  "value": {
                    "operator": "Variables[0] (_TotalAmount) || Variables[1] (_HealAmount) || ADD || RETURN",
                    "displayLines": "(_TotalAmount + _HealAmount)",
                    "constants": [],
                    "variables": [
                      "_TotalAmount",
                      "_HealAmount"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-768874206\">LC_23013_Main</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Flag_23013",
                  "value": 1
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1443016247\">LC_23013_Sub</a>"
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "Flag_23013",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Player Team"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "_TotalAmount",
                        "compareType": ">",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Parameter Target's Attack Targets}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "canPhase": true,
                          "AttackScaling": {
                            "DamageType": {
                              "name": "Custom Damage Type",
                              "initialTypePreRead": "Physical",
                              "sourceType": "ReadTargetType",
                              "readTarget": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              }
                            },
                            "DamageFlat": {
                              "operator": "Variables[0] (_TotalAmount) || Variables[1] (0.36) || MUL || RETURN",
                              "displayLines": "(_TotalAmount * 0.36)",
                              "constants": [],
                              "variables": [
                                "_TotalAmount",
                                0.36
                              ]
                            },
                            "indirectDMG": true,
                            "dmgFormulaFinal": "Pure (No DMG%)",
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_TotalAmount",
                      "value": 0
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Flag_23013",
                      "value": 0
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Snapshot(Calculation Instance Completed)",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1443016247\">LC_23013_Sub</a>"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "isLightcone": true,
      "desc": "Increases the wearer's Max HP by #1[i]% and Outgoing Healing by #2[i]%. When the wearer heals allies, record the amount of Outgoing Healing. When any ally launches an attack, a random attacked enemy takes Additional DMG equal to #3[i]% of the recorded Outgoing Healing value. The type of this Additional DMG is of the same Type as the wearer's. This Additional DMG is not affected by other buffs, and can only occur 1 time per turn.",
      "params": [
        [
          0.18,
          0.12,
          0.36
        ],
        [
          0.21,
          0.14,
          0.42
        ],
        [
          0.24,
          0.16,
          0.48
        ],
        [
          0.27,
          0.18,
          0.54
        ],
        [
          0.3,
          0.2,
          0.6
        ]
      ]
    }
  },
  "isLightcone": true
}