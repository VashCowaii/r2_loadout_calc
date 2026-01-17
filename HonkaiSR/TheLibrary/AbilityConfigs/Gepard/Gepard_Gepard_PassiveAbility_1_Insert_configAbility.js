const configAbility = {
  "fileName": "Gepard_Gepard_PassiveAbility_1_Insert",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "UI Display Event",
      "popUpText": "Unyielding Will"
    },
    {
      "name": "Define Custom Variable with Stat",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "Gepard_MaxHPValue",
      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
    },
    {
      "name": "Set HP Value",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "setValue": {
        "operator": "Variables[0] (Gepard_MaxHPValue) || Variables[1] (0.5) || Variables[2] (0.5) || ADD || MUL || RETURN",
        "displayLines": "(Gepard_MaxHPValue * (0.5 + 0.5))",
        "constants": [],
        "variables": [
          "Gepard_MaxHPValue",
          0.5,
          0.5
        ]
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
          "name": "IF",
          "conditions": {
            "name": "Current Turn Is",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            }
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Gepard_Eidolon6ActionDelay0",
              "duration": 1,
              "immediateEffect": true
            }
          ],
          "failed": [
            {
              "name": "Action Advance/Delay",
              "advanceType": "Set",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": 0
            }
          ]
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Commander"
      },
      "passed": [
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "MDF_MaxSP",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
        },
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": {
            "operator": "Variables[0] (MDF_MaxSP) || RETURN",
            "displayLines": "MDF_MaxSP",
            "constants": [],
            "variables": [
              "MDF_MaxSP"
            ]
          },
          "isFixed": "* ERR"
        }
      ]
    },
    {
      "name": "Define Modifier Variable",
      "modifierName": "Gepard_PassiveAbility_UnDead[<span class=\"descriptionNumberColor\">Unyielding Will</span>]",
      "function": "Add"
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": 0,
      "maximum": 1,
      "assignState": "True",
      "priorState": "Disable"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Modifier Holder}}"
      },
      "scope": "TargetEntity",
      "variableName": "_Gepard_00_PassiveSkill_InsertController"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Gepard_Eidolon6ActionDelay0",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "OneMore"
      ],
      "execute": [
        {
          "eventTrigger": "Ability Use [Owner]: Start",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}