const configAbility = {
  "fileName": "Aventurine_Aventurine_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "modifier": "Aventurine_Ability02_ShieldEffect"
    },
    {
      "name": "Define Custom Variable with Stat",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "MDF_CurrentDefence2",
      "value": "&nbsp;<span class=\"descriptionNumberColor\">DEFSUM</span>&nbsp;"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "Aventurine_RecordCurrentShield"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "modifier": "Aventurine_StackableShield",
      "duration": {
        "operator": "Variables[0] (3) || RETURN",
        "displayLines": "3",
        "constants": [],
        "variables": [
          3
        ]
      },
      "valuePerStack": {
        "MDF_InitShieldValue": {
          "operator": "Variables[0] (MDF_CurrentDefence2) || Variables[1] (0.24) || MUL || Variables[2] (320) || ADD || RETURN",
          "displayLines": "((MDF_CurrentDefence2 * 0.24) + 320)",
          "constants": [],
          "variables": [
            "MDF_CurrentDefence2",
            0.24,
            320
          ]
        },
        "MDF_MaxShieldRatio": {
          "operator": "Variables[0] (2) || RETURN",
          "displayLines": "2",
          "constants": [],
          "variables": [
            2
          ]
        },
        "MDF_ForceShield": {
          "operator": "Variables[0] (MDF_CurrentDefence2) || Variables[1] (0.24) || MUL || Variables[2] (320) || ADD || RETURN",
          "displayLines": "((MDF_CurrentDefence2 * 0.24) + 320)",
          "constants": [],
          "variables": [
            "MDF_CurrentDefence2",
            0.24,
            320
          ]
        }
      }
    },
    {
      "name": "Looped Event",
      "Event": [
        "Move to Next Listed Target",
        {
          "name": "IF",
          "conditions": {
            "name": "Is Part Of",
            "of": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "mustBeAlive2": true
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_TeammateCount1",
              "value": 1
            }
          ],
          "failed": [
            {
              "name": "Random Event",
              "odds": [
                0.2,
                0.2,
                0.2
              ],
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_TeammateCount1",
                  "value": 2
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_TeammateCount1",
                  "value": 3
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_TeammateCount1",
                  "value": 4
                }
              ]
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "Aventurine_Ability02_ShieldEffect",
          "valuePerStack": {
            "MDF_CanTriggerShieldEffect": 1,
            "MDF_ResistanceRatio": {
              "operator": "Variables[0] (0.5) || RETURN",
              "displayLines": "0.5",
              "constants": [],
              "variables": [
                0.5
              ]
            },
            "MDF_TeammateCount": {
              "operator": "Variables[0] (MDF_TeammateCount1) || RETURN",
              "displayLines": "MDF_TeammateCount1",
              "constants": [],
              "variables": [
                "MDF_TeammateCount1"
              ]
            },
            "MDF_CritDmg1": {
              "operator": "Variables[0] (0.2) || RETURN",
              "displayLines": "0.2",
              "constants": [],
              "variables": [
                0.2
              ]
            }
          }
        }
      ]
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
      "name": "Define Custom Variable",
      "variableName": "MDF_TeammateCount1",
      "value": {
        "operator": "Constants[0] (0) || RETURN",
        "displayLines": "0",
        "constants": [
          0
        ],
        "variables": []
      }
    },
    "Trigger: Ability End"
  ],
  "references": []
}