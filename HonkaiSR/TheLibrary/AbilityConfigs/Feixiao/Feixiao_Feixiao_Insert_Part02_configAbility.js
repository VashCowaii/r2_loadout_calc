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
          "value": 0,
          "variableName": "IsUnCountedInsert"
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
        "displayLines": "2"
      },
      "valuePerStack": {
        "MDF_PropertyRatio": {
          "displayLines": "0.6"
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
            "displayLines": "2"
          },
          "valuePerStack": {
            "MDF_PropertyRatio": {
              "displayLines": "0.08"
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
          "name": "Add Attack-Type Extension",
          "identifier": "Feixiao_00_Rank06",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "typeToExtend": "Follow-up",
          "extendTypeTo": "Ultimate"
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
          "displayLines": "Insert_DamagePercentage"
        },
        "Toughness": {
          "displayLines": "(ST Toughness Value * Insert_StanceRatio)"
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
          "name": "Remove Attack-Type Extension",
          "identifier": "Feixiao_00_Rank06",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "typeToExtend": "Follow-up"
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
      "stackData": [
        "MDF_PropertyRatio"
      ],
      "latentQueue": [
        "IsUnCountedInsert"
      ],
      "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span>.",
      "type": "Buff",
      "effectName": "DMG Boost",
      "statusName": "Thunderhunt",
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "statValue": {
                "displayLines": "MDF_PropertyRatio"
              }
            }
          ]
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  }
}