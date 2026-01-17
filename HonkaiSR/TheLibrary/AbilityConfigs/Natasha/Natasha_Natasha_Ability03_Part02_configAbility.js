const configAbility = {
  "fileName": "Natasha_Natasha_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 2
      },
      "passed": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "searchRandom": true,
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "value1": "CurrentHP%",
            "compareType": "<=",
            "value2": {
              "operator": "Variables[0] (0.3) || RETURN",
              "displayLines": "0.3",
              "constants": [],
              "variables": [
                0.3
              ]
            }
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Natasha_Eidolon2_HOT_HPByMaxHP[<span class=\"descriptionNumberColor\">Healing Over Time</span>]",
              "duration": {
                "operator": "Variables[0] (1) || RETURN",
                "displayLines": "1",
                "constants": [],
                "variables": [
                  1
                ]
              },
              "immediateEffect": true,
              "valuePerStack": {
                "MDF_ShowValue1": {
                  "operator": "Variables[0] (0.06) || RETURN",
                  "displayLines": "0.06",
                  "constants": [],
                  "variables": [
                    0.06
                  ]
                },
                "MDF_ShowValue2": {
                  "operator": "Variables[0] (160) || RETURN",
                  "displayLines": "160",
                  "constants": [],
                  "variables": [
                    160
                  ]
                }
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Heal",
      "target": {
        "name": "Target Name",
        "target": "{{All Team Members}}"
      },
      "healPercent": {
        "operator": "Variables[0] (0.138) || RETURN",
        "displayLines": "0.138",
        "constants": [],
        "variables": [
          0.138
        ]
      },
      "healFlat": {
        "operator": "Variables[0] (368) || RETURN",
        "displayLines": "368",
        "constants": [],
        "variables": [
          368
        ]
      },
      "formula": "Heal from Healer's MaxHP"
    },
    {
      "name": "Update Energy",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "valuePercent": 1,
      "ofAbilitySplit": true,
      "isFixed": "* ERR"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Ability Target List}}"
      },
      "searchRandom": true,
      "maxTargets": 1,
      "conditions": {
        "name": "Compare: Target",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "target2": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "invertCondition": true
      }
    },
    "Trigger: Ability End"
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Natasha_Eidolon2_HOT_HPByMaxHP[<span class=\"descriptionNumberColor\">Healing Over Time</span>]",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "CurrentHP",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Heal",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "healPercent": {
                    "operator": "Variables[0] (MDF_ShowValue1) || RETURN",
                    "displayLines": "MDF_ShowValue1",
                    "constants": [],
                    "variables": [
                      "MDF_ShowValue1"
                    ]
                  },
                  "healFlat": {
                    "operator": "Variables[0] (MDF_ShowValue2) || RETURN",
                    "displayLines": "MDF_ShowValue2",
                    "constants": [],
                    "variables": [
                      "MDF_ShowValue2"
                    ]
                  },
                  "formula": "Heal from Healer's MaxHP"
                }
              ]
            }
          ]
        }
      ],
      "useEntitySnapshot": true,
      "stackData": [
        "MDF_ShowValue1",
        "MDF_ShowValue2"
      ],
      "latentQueue": [],
      "description": "Restores a certain amount of HP at the start of each turn.",
      "type": "Buff",
      "effectName": "Healing Over Time",
      "statusName": "Healing Over Time"
    }
  ]
}