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
      "modifier": "<a class=\"gModGreen\" id=\"1566932811\">Aventurine_Ability02_ShieldEffect</a>"
    },
    {
      "name": "Define Custom Variable with Stat",
      "variableName": "MDF_CurrentDefence2",
      "readTarget": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "value": "&nbsp;<span class=\"descriptionNumberColor\">DEFSUM</span>&nbsp;"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"-969049614\">Aventurine_RecordCurrentShield</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1211629419\">Aventurine_StackableShield</a>",
      "duration": {
        "displayLines": "3"
      },
      "valuePerStack": {
        "MDF_InitShieldValue": {
          "displayLines": "((MDF_CurrentDefence2 * 0.24) + 320)"
        },
        "MDF_MaxShieldRatio": {
          "displayLines": "2"
        },
        "MDF_ForceShield": {
          "displayLines": "((MDF_CurrentDefence2 * 0.24) + 320)"
        }
      }
    },
    {
      "name": "Looped Event",
      "execute": [
        "Move to Next Listed Target",
        {
          "name": "IF",
          "conditions": {
            "name": "Is Part Of",
            "target1": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "target2": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            }
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "value": 1,
              "variableName": "MDF_TeammateCount1"
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
                  "value": 2,
                  "variableName": "MDF_TeammateCount1"
                },
                {
                  "name": "Define Custom Variable",
                  "value": 3,
                  "variableName": "MDF_TeammateCount1"
                },
                {
                  "name": "Define Custom Variable",
                  "value": 4,
                  "variableName": "MDF_TeammateCount1"
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
          "modifier": "<a class=\"gModGreen\" id=\"1566932811\">Aventurine_Ability02_ShieldEffect</a>",
          "valuePerStack": {
            "MDF_CanTriggerShieldEffect": 1,
            "MDF_ResistanceRatio": {
              "displayLines": "0.5"
            },
            "MDF_TeammateCount": {
              "displayLines": "MDF_TeammateCount1"
            },
            "MDF_CritDmg1": {
              "displayLines": "0.2"
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
      "value": {
        "displayLines": "0"
      },
      "variableName": "MDF_TeammateCount1"
    },
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}