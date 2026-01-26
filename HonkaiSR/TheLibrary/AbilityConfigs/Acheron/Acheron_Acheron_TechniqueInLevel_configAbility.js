const configAbility = {
  "fileName": "Acheron_Acheron_TechniqueInLevel",
  "childAbilityList": [
    "Acheron_Acheron_TechniqueInLevel"
  ],
  "skillTrigger": "SkillMaze",
  "abilityType": "Technique",
  "energy": null,
  "toughnessList": [
    20,
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
      "modifier": "Technique_Acheron_Modifier"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Acheron_TechniqueWeakType_BUFF",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "ForceStanceDamage"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessReductionForced%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (ACHERON_OBJECT_UNUSED_1) || RETURN",
                "displayLines": "ACHERON_OBJECT_UNUSED_1",
                "constants": [],
                "variables": [
                  "ACHERON_OBJECT_UNUSED_1"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Technique_Acheron_Modifier",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        },
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Wave Count",
                "compareType": ">",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Acheron_TechniqueWeakType_BUFF"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Trace Activated",
                "conditionList": "Red Oni",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Acheron_UltraAbilitySpareCount[<span class=\"descriptionNumberColor\">Quadrivalent Ascendance</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (1) || RETURN",
                      "displayLines": "1",
                      "constants": [],
                      "variables": [
                        1
                      ]
                    }
                  }
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Acheron_UltraAbilitySpareCount_PointB1[<span class=\"descriptionNumberColor\">Quadrivalent Ascendance</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (3) || RETURN",
                    "displayLines": "3",
                    "constants": [],
                    "variables": [
                      3
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (3) || RETURN",
                      "displayLines": "3",
                      "constants": [],
                      "variables": [
                        3
                      ]
                    }
                  },
                  "addStacksPerTrigger": 1
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Wave Count",
                "compareType": ">",
                "value2": 1
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Thunder",
                    "Damage": {
                      "operator": "Variables[0] (2) || RETURN",
                      "displayLines": "2",
                      "constants": [],
                      "variables": [
                        2
                      ]
                    },
                    "Toughness": {
                      "operator": "Variables[0] (ST Toughness Value) || RETURN",
                      "displayLines": "ST Toughness Value",
                      "constants": [],
                      "variables": [
                        "ST Toughness Value"
                      ]
                    },
                    "Tags": null,
                    "attackType": "Technique",
                    "EnergyGainPercent": "100%"
                  }
                }
              ],
              "failed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Thunder",
                    "Damage": {
                      "operator": "Variables[0] (2) || RETURN",
                      "displayLines": "2",
                      "constants": [],
                      "variables": [
                        2
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Technique",
                    "EnergyGainPercent": "100%"
                  }
                }
              ]
            },
            "Trigger: Attack End",
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Acheron_TechniqueWeakType_BUFF"
            }
          ],
          "priorityLevel": -60
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}