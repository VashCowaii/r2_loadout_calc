const configAbility = {
  "fileName": "-2041992577_BattleEvent_SilverWolf_DamageAbility",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"968049931\">MBattleEvent_SilverWolf_DamageAbility</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1604650808\">MBattleEvent_SilverWolf_ActionFirstModifier</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__968049931\">MBattleEvent_SilverWolf_DamageAbility</a>",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Enemies Still Alive",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "includeNonTargets": true
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "searchRandom": true,
                  "ifTargetFound": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Quantum",
                        "DamageFlat": {
                          "operator": "Constants[0] (130) || Variables[0] (_DamageRatioByWorldLevel) || MUL || RETURN",
                          "displayLines": "(130 * _DamageRatioByWorldLevel)",
                          "constants": [
                            130
                          ],
                          "variables": [
                            "_DamageRatioByWorldLevel"
                          ]
                        },
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Additional DMG"
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value1": "Target__Toughness",
                        "compareType": ">",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Deal Toughness DMG",
                          "value": 60,
                          "forceReduction": true,
                          "ToughnessDMGType": {
                            "name": "Damage Type Source",
                            "sourceType": {}
                          }
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "value1": "Target__Toughness",
                            "compareType": "<=",
                            "value2": 0
                          },
                          "passed": [
                            {
                              "name": "Use Custom Character Function",
                              "functionName": "<a class=\"gTempYellow\" id=\"789833122\">StanceBreak_Quantum</a>",
                              "variables": {}
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                "Trigger: Attack End"
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "_DamageRatioByWorldLevel"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "_WorldLevel"
            },
            {
              "name": "Define Custom Variable with WorldLevel",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "_WorldLevel"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_WorldLevel",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_DamageRatioByWorldLevel",
                  "value": 4.8
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_WorldLevel",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_DamageRatioByWorldLevel",
                  "value": 8.67
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_WorldLevel",
                "compareType": "=",
                "value2": 2
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_DamageRatioByWorldLevel",
                  "value": 19.62
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_WorldLevel",
                "compareType": "=",
                "value2": 3
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_DamageRatioByWorldLevel",
                  "value": 46.61
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_WorldLevel",
                "compareType": "=",
                "value2": 4
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_DamageRatioByWorldLevel",
                  "value": 86.53
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_WorldLevel",
                "compareType": "=",
                "value2": 5
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_DamageRatioByWorldLevel",
                  "value": 137.41
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_WorldLevel",
                "compareType": "=",
                "value2": 6
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_DamageRatioByWorldLevel",
                  "value": 188.26
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
      "for": "<a class=\"gModGreen\" id=\"mod__1604650808\">MBattleEvent_SilverWolf_ActionFirstModifier</a>",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1604650808\">MBattleEvent_SilverWolf_ActionFirstModifier</a>"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDFlat</span>&nbsp;",
              "value": 150
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}