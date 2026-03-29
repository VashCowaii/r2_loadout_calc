const configAbility = {
  "fileName": "3025014_Monster_W3_Sunday_PassiveAbilityInitiate_Insert_Part03",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 3
          },
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1283356455\">Enemy_W3_Sunday_FinalPhase</a>"
          }
        ],
        "invertCondition": true
      },
      "passed": [
        "Deleted bullshit"
      ],
      "failed": [
        "Deleted bullshit"
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Player Team Entity}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"897199579\">Enemy_W3_Sunday_LightTeam_Shield</a>"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team Entity}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1594566188\">Enemy_W3_Sunday_LightTeam_Shield_Stack</a>",
          "valuePerStack": {
            "MDF_ShieldPercentage_Add": {
              "operator": "Variables[0] ({[SkillP02[3]]}) || Variables[1] (W3_Sunday_00_StanceCountDown_Counter) || MUL || RETURN",
              "displayLines": "({[SkillP02[3]]} * W3_Sunday_00_StanceCountDown_Counter)",
              "constants": [],
              "variables": [
                "{[SkillP02[3]]}",
                "W3_Sunday_00_StanceCountDown_Counter"
              ]
            }
          }
        }
      ],
      "failed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team Entity}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"897199579\">Enemy_W3_Sunday_LightTeam_Shield</a>",
          "valuePerStack": {
            "MDF_ShieldPercentage": {
              "operator": "Variables[0] ({[SkillP02[3]]}) || Variables[1] (W3_Sunday_00_StanceCountDown_Counter) || MUL || RETURN",
              "displayLines": "({[SkillP02[3]]} * W3_Sunday_00_StanceCountDown_Counter)",
              "constants": [],
              "variables": [
                "{[SkillP02[3]]}",
                "W3_Sunday_00_StanceCountDown_Counter"
              ]
            }
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "HP_Bars_Remaining",
        "compareType": "=",
        "value2": 3,
        "invertCondition": true
      }
    },
    {
      "name": "Define Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Modifier Holder}}"
      },
      "variableName": "W3_Sunday_00_StanceCountDown_Counter",
      "value": 0
    },
    {
      "name": "Define Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Modifier Holder}}"
      },
      "variableName": "W3_Sunday_00_StanceCountDown_Flag",
      "value": 0
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}