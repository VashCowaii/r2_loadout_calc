const configAbility = {
  "fileName": "Phainon_Phainon_Ability22_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Dispel Debuffs",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    },
    {
      "name": "Define Custom Variable",
      "scope": "ContextAbility",
      "value": {
        "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(Skill22_Energy, 4)"
      },
      "variableName": "Count"
    },
    {
      "name": "Define Custom Variable",
      "scope": "ContextAbility",
      "value": 0,
      "variableName": "_count"
    },
    {
      "name": "Define Custom Variable",
      "scope": "ContextAbility",
      "value": {
        "displayLines": "((PHAINON_OBJECT_UNUSED_1 - PHAINON_OBJECT_UNUSED_2) / ((4 * Count) - 1))"
      },
      "variableName": "_delta_frame"
    },
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "Skill22_Energy"
      },
      "variableName": "_prev_energy"
    },
    {
      "name": "Adjust Variable Value",
      "adjustmentType": "Add to Value (Default)",
      "variableName": "Skill22_Energy",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "value": {
        "displayLines": "(0 - Count)"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Eidolon Activated",
            "eidolon": 2
          },
          {
            "name": "Compare: Variable",
            "value1": "_prev_energy",
            "compareType": ">=",
            "value2": {
              "displayLines": "(Skill22_Energy + 4)"
            }
          }
        ]
      },
      "passed": [
        {
          "name": "Inject Extra-Turn",
          "actionTag": [
            "Phainon_Free_Ability22"
          ],
          "canInjectUltimates": true,
          "afterInjection": []
        }
      ]
    },
    {
      "name": "Looped Event",
      "maxLoops": {
        "displayLines": "(4 * Count)"
      },
      "execute": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"247970287\">Bounce_SelectTarget</a>",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "paramSequence": [
            {
              "name": "Define Custom Variable",
              "scope": "ContextAbility",
              "value": {
                "displayLines": "(_count + 1)"
              },
              "variableName": "_count"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1753185453\">M_Phainon_Ability22_TargetTimeslow</a>",
              "silentAdd": true
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Physical",
                "Damage": {
                  "displayLines": "0.45"
                },
                "Toughness": {
                  "displayLines": "ST Toughness Value"
                },
                "instanceTag": "Phainon_Skill22",
                "Tags": null
              }
            }
          ]
        }
      ]
    },
    "Trigger: Attack End",
    "Trigger: Ability End"
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1753185453\">M_Phainon_Ability22_TargetTimeslow</a>",
      "stackType": "ReplaceByCaster",
      "latentQueue": [
        "_delta_frame",
        "_prev_energy"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        },
        {
          "eventTrigger": "Ability Use [Anyone]: End",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}