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
              "displayLines": "0.3"
            }
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-251008638\">Natasha_Eidolon2_HOT_HPByMaxHP</a>[<span class=\"descriptionNumberColor\">Healing Over Time</span>]",
              "duration": {
                "displayLines": "1"
              },
              "immediateEffect": true,
              "valuePerStack": {
                "MDF_ShowValue1": {
                  "displayLines": "0.06"
                },
                "MDF_ShowValue2": {
                  "displayLines": "160"
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
        "displayLines": "0.138"
      },
      "healFlat": {
        "displayLines": "368"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-251008638\">Natasha_Eidolon2_HOT_HPByMaxHP</a>[<span class=\"descriptionNumberColor\">Healing Over Time</span>]",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "useEntitySnapshot": true,
      "stackData": [
        "MDF_ShowValue1",
        "MDF_ShowValue2"
      ],
      "description": "Restores a certain amount of HP at the start of each turn.",
      "type": "Buff",
      "effectName": "Healing Over Time",
      "statusName": "Healing Over Time",
      "execute": [
        {
          "eventTrigger": "Turn [Owner]: Pre-action Phase",
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
                    "displayLines": "MDF_ShowValue1"
                  },
                  "healFlat": {
                    "displayLines": "MDF_ShowValue2"
                  },
                  "formula": "Heal from Healer's MaxHP"
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{All Team Members}}"
  }
}