const configAbility = {
  "fileName": "Feixiao_Feixiao_Insert_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"248447225\">M_Feixiao_InsertCheck</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1503840637\">M_Feixiao_InsertCheckSelf</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE, with Unselectables)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-349901882\">M_Feixiao_Friend_Mark_Main</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "IsUnCountedInsert",
        "compareType": "<=",
        "value2": 0
      },
      "passed": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-909564099\">Feixiao_InsertIsReady</a>[<span class=\"descriptionNumberColor\">Thunderhunt</span>]"
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "variableName": "IsUnCountedInsert",
          "value": 0
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1116070545\">Feixiao_DamageProperty</a>[<span class=\"descriptionNumberColor\">Thunderhunt</span>]",
      "duration": {
        "operator": "Variables[0] (2) || RETURN",
        "displayLines": "2",
        "constants": [],
        "variables": [
          2
        ]
      },
      "valuePerStack": {
        "MDF_PropertyRatio": {
          "operator": "Variables[0] (0.6) || RETURN",
          "displayLines": "0.6",
          "constants": [],
          "variables": [
            0.6
          ]
        }
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 4
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1006222027\">Feixiao_Eidolon4_Property</a>[<span class=\"descriptionNumberColor\">Stormward I Hear</span>]",
          "duration": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          },
          "valuePerStack": {
            "MDF_PropertyRatio": {
              "operator": "Variables[0] (0.08) || RETURN",
              "displayLines": "0.08",
              "constants": [],
              "variables": [
                0.08
              ]
            }
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 6
      },
      "passed": [
        {
          "name": "Attack-Type Extension",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "typeToExtend": "Follow-up",
          "extendTypeTo": "Ultimate",
          "instanceIdentifier": "Feixiao_00_Rank06"
        }
      ]
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Wind",
        "Damage": {
          "operator": "Variables[0] (Insert_DamagePercentage) || RETURN",
          "displayLines": "Insert_DamagePercentage",
          "constants": [],
          "variables": [
            "Insert_DamagePercentage"
          ]
        },
        "Toughness": {
          "operator": "Variables[0] (ST Toughness Value) || Variables[1] (Insert_StanceRatio) || MUL || RETURN",
          "displayLines": "(ST Toughness Value * Insert_StanceRatio)",
          "constants": [],
          "variables": [
            "ST Toughness Value",
            "Insert_StanceRatio"
          ]
        },
        "instanceTag": "Feixiao_00_InsertAttack",
        "Tags": null,
        "attackType": "Follow-up"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 6
      },
      "passed": [
        {
          "name": "Attack-Type Extension",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "typeToExtend": "Follow-up",
          "isRemove": true,
          "instanceIdentifier": "Feixiao_00_Rank06"
        }
      ]
    },
    "Trigger: Attack End"
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1116070545\">Feixiao_DamageProperty</a>[<span class=\"descriptionNumberColor\">Thunderhunt</span>]",
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
                "operator": "Variables[0] (MDF_PropertyRatio) || RETURN",
                "displayLines": "MDF_PropertyRatio",
                "constants": [],
                "variables": [
                  "MDF_PropertyRatio"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_PropertyRatio"
      ],
      "latentQueue": [
        "IsUnCountedInsert"
      ],
      "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span>.",
      "type": "Buff",
      "effectName": "DMG Boost",
      "statusName": "Thunderhunt"
    }
  ]
}