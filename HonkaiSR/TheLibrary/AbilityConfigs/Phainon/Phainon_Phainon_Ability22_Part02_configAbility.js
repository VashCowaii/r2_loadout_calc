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
      "variableName": "Count",
      "value": {
        "operator": "Variables[0] (MIN) || Variables[1] (Skill22_Energy) || Variables[2] (4) || PARAM_2 || FUNCTION || RETURN",
        "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(Skill22_Energy, 4)",
        "constants": [],
        "variables": [
          "MIN",
          "Skill22_Energy",
          4
        ]
      }
    },
    {
      "name": "Define Custom Variable",
      "scope": "ContextAbility",
      "variableName": "_count",
      "value": 0
    },
    {
      "name": "Define Custom Variable",
      "scope": "ContextAbility",
      "variableName": "_delta_frame",
      "value": {
        "operator": "Variables[0] (PHAINON_OBJECT_UNUSED_1) || Variables[1] (PHAINON_OBJECT_UNUSED_2) || SUB || Variables[2] (4) || Variables[3] (Count) || MUL || Constants[0] (1) || SUB || DIV || RETURN",
        "displayLines": "((PHAINON_OBJECT_UNUSED_1 - PHAINON_OBJECT_UNUSED_2) / ((4 * Count) - 1))",
        "constants": [
          1
        ],
        "variables": [
          "PHAINON_OBJECT_UNUSED_1",
          "PHAINON_OBJECT_UNUSED_2",
          4,
          "Count"
        ]
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "_prev_energy",
      "value": {
        "operator": "Variables[0] (Skill22_Energy) || RETURN",
        "displayLines": "Skill22_Energy",
        "constants": [],
        "variables": [
          "Skill22_Energy"
        ]
      }
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
        "operator": "Constants[0] (0) || Variables[0] (Count) || SUB || RETURN",
        "displayLines": "(0 - Count)",
        "constants": [
          0
        ],
        "variables": [
          "Count"
        ]
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
              "operator": "Variables[0] (Skill22_Energy) || Variables[1] (4) || ADD || RETURN",
              "displayLines": "(Skill22_Energy + 4)",
              "constants": [],
              "variables": [
                "Skill22_Energy",
                4
              ]
            }
          }
        ]
      },
      "passed": [
        {
          "name": "Inject Extra-Turn",
          "actionTag": "Phainon_Free_Ability22",
          "canInjectUltimates": true,
          "afterInjection": []
        }
      ]
    },
    {
      "name": "Looped Event",
      "maxLoops": {
        "operator": "Variables[0] (4) || Variables[1] (Count) || MUL || RETURN",
        "displayLines": "(4 * Count)",
        "constants": [],
        "variables": [
          4,
          "Count"
        ]
      },
      "Event": [
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
              "variableName": "_count",
              "value": {
                "operator": "Variables[0] (_count) || Constants[0] (1) || ADD || RETURN",
                "displayLines": "(_count + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "_count"
                ]
              }
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
                  "operator": "Variables[0] (0.45) || RETURN",
                  "displayLines": "0.45",
                  "constants": [],
                  "variables": [
                    0.45
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
      ],
      "stackData": [],
      "latentQueue": [
        "_delta_frame",
        "_prev_energy"
      ]
    }
  ]
}