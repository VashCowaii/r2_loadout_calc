const configAbility = {
  "fileName": "Sparklev0_Sparkle_Eidolon6_BP",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Current Action Holder Is",
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        }
      },
      "passed": [
        "Deleted bullshit"
      ],
      "failed": [
        "Deleted bullshit"
      ]
    },
    {
      "name": "Define Custom Variable with Stat",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "MDF_Sparkle_CritDmgValue",
      "value": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "MDF_CriticalDamageBase_change",
      "value": {
        "operator": "Variables[0] (MDF_Sparkle_CritDmgValue) || RETURN",
        "displayLines": "MDF_Sparkle_CritDmgValue",
        "constants": [],
        "variables": [
          "MDF_Sparkle_CritDmgValue"
        ]
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "MDF_CriticalDamageBase_change",
      "value": {
        "operator": "Variables[0] (MDF_CriticalDamageBase_change) || Variables[1] (0.24) || MUL || RETURN",
        "displayLines": "(MDF_CriticalDamageBase_change * 0.24)",
        "constants": [],
        "variables": [
          "MDF_CriticalDamageBase_change",
          0.24
        ]
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1817279389\">Sparkle_Ability02_CritDmgAddedRatio01</a>[<span class=\"descriptionNumberColor\">Dreamdiver</span>]",
      "duration": {
        "operator": "Variables[0] (1) || RETURN",
        "displayLines": "1",
        "constants": [],
        "variables": [
          1
        ]
      },
      "valuePerStack": {
        "MDF_PropertyValueConvert": {
          "operator": "Variables[0] (MDF_CriticalDamageBase_change) || RETURN",
          "displayLines": "MDF_CriticalDamageBase_change",
          "constants": [],
          "variables": [
            "MDF_CriticalDamageBase_change"
          ]
        },
        "MDF_PropertyValueBase": {
          "operator": "Variables[0] (0.45) || RETURN",
          "displayLines": "0.45",
          "constants": [],
          "variables": [
            0.45
          ]
        }
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Is Part Of",
        "of": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "mustBeAlive2": true,
        "invertCondition": true
      },
      "passed": [
        {
          "name": "Action Advance/Delay",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "advanceType": "Advance",
          "multiAdd": "-0.5"
        }
      ]
    }
  ],
  "references": []
}