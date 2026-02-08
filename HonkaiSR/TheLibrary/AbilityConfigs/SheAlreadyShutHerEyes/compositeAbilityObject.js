const compositeAbilityObject = {
  "fullCharacterName": "She Already Shut Her Eyes",
  "trimCharacterName": "SheAlreadyShutHerEyes",
  "abilityList": [
    "SheAlreadyShutHerEyes_Ability23011"
  ],
  "fixedStats": {
    "1": {
      "HP%": 0.24,
      "EnergyRegenRate": 0.12
    },
    "2": {
      "HP%": 0.28,
      "EnergyRegenRate": 0.14
    },
    "3": {
      "HP%": 0.32,
      "EnergyRegenRate": 0.16
    },
    "4": {
      "HP%": 0.36,
      "EnergyRegenRate": 0.18
    },
    "5": {
      "HP%": 0.4,
      "EnergyRegenRate": 0.2
    }
  },
  "abilityObject": {
    "SheAlreadyShutHerEyes_Ability23011": {
      "fileName": "SheAlreadyShutHerEyes_Ability23011",
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
          "modifier": "<a class=\"gModGreen\" id=\"80805896\">LC_23011_Main</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__274994789\">LC_23011_Sub2</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                    "displayLines": "MDF_PropertyValue",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">#SkillEquip_P2_DamageAddedRatio</span>.",
          "type": "Buff",
          "statusName": "DMG Boost"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__80805896\">LC_23011_Main</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Turn End [Anyone]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "EquipFlag",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "HP Change [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "ParameterValue",
                        "compareType": "<",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "EquipFlag",
                        "compareType": "=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{All Team Members}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"274994789\">LC_23011_Sub2</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                      "duration": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.09) || RETURN",
                          "displayLines": "0.09",
                          "constants": [],
                          "variables": [
                            0.09
                          ]
                        }
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "EquipFlag",
                      "value": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{All Team Members}}"
                  },
                  "searchRandom": true,
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": "<",
                    "value2": 1
                  },
                  "ifTargetFound": [
                    {
                      "name": "Heal",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "healPercent": {
                        "operator": "Variables[0] (0.8) || RETURN",
                        "displayLines": "0.8",
                        "constants": [],
                        "variables": [
                          0.8
                        ]
                      },
                      "formula": "Heal from Target's MissingHP"
                    }
                  ]
                }
              ],
              "priorityLevel": -80
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "isLightcone": true,
      "desc": "Increases the wearer's Max HP by #1[i]% and Energy Regeneration Rate by #4[i]%. When the wearer's HP is reduced, all allies' DMG dealt increases by #2[f1]%, lasting for #5[i] turn(s).\\nAt the start of every wave, restores HP to all allies by an amount equal to #3[i]% of their respective lost HP.",
      "params": [
        [
          0.24,
          0.09,
          0.8,
          0.12,
          2
        ],
        [
          0.28,
          0.105,
          0.85,
          0.14,
          2
        ],
        [
          0.32,
          0.12,
          0.9,
          0.16,
          2
        ],
        [
          0.36,
          0.135,
          0.95,
          0.18,
          2
        ],
        [
          0.4,
          0.15,
          1,
          0.2,
          2
        ]
      ]
    }
  },
  "isLightcone": true
}