const configAbility = {
  "fileName": "1912336050_ChallengePeakBattle_EnhancedAbility_0005",
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
      "modifier": "Modifier_ChallengePeakBattle_EnhancedAbility_0005"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Modifier_ChallengePeakBattle_EnhancedAbility_0005_02[<span class=\"descriptionNumberColor\">Energy Absorption+</span>]",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "Pre-Death [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Player Team"
              },
              "passed": [
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "value": {
                    "operator": "Variables[0] (ChallengePeakBattle_0005_ADF_1) || RETURN",
                    "displayLines": "ChallengePeakBattle_0005_ADF_1",
                    "constants": [],
                    "variables": [
                      "ChallengePeakBattle_0005_ADF_1"
                    ]
                  },
                  "isFixed": "(Fixed)"
                },
                {
                  "name": "UI Display Event (On Entity)",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "living": true
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "Energy%",
                    "compareType": "=",
                    "value2": 1
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "Energy%",
                    "compareType": "=",
                    "value2": 0
                  }
                ]
              },
              "failed": [
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "value": {
                    "operator": "Variables[0] (ChallengePeakBattle_0005_ADF_2) || INVERT || RETURN",
                    "displayLines": "-ChallengePeakBattle_0005_ADF_2",
                    "constants": [],
                    "variables": [
                      "ChallengePeakBattle_0005_ADF_2"
                    ]
                  },
                  "isFixed": "(Fixed)"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Living State",
                    "state": "Mask_AliveOnly",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "UI Display Event (On Entity)",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "living": true
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "description": "After each time an attack is received, reduces the attacker's Energy by <span class=\"descriptionNumberColor\">ChallengePeakBattle_0005_ADF_1</span> points. The attacker's Energy will not be reduced if it is maxed. When defeated, regenerates <span class=\"descriptionNumberColor\">ChallengePeakBattle_0005_ADF_2</span> Energy for the attacker.",
      "type": "Other",
      "statusName": "Energy Absorption+"
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_ChallengePeakBattle_EnhancedAbility_0005",
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
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Modifier_ChallengePeakBattle_EnhancedAbility_0005_02[<span class=\"descriptionNumberColor\">Energy Absorption+</span>]",
                  "valuePerStack": {
                    "ChallengePeakBattle_0005_ADF_1": {
                      "operator": "Variables[0] (#ADF_1) || RETURN",
                      "displayLines": "#ADF_1",
                      "constants": [],
                      "variables": [
                        "#ADF_1"
                      ]
                    },
                    "ChallengePeakBattle_0005_ADF_2": {
                      "operator": "Variables[0] (#ADF_2) || RETURN",
                      "displayLines": "#ADF_2",
                      "constants": [],
                      "variables": [
                        "#ADF_2"
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
      "latentQueue": []
    }
  ]
}