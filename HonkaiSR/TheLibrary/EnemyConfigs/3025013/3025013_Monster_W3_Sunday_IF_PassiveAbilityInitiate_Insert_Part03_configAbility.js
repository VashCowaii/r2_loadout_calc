const configAbility = {
  "fileName": "3025013_Monster_W3_Sunday_IF_PassiveAbilityInitiate_Insert_Part03",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Deleted bullshit",
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
          "modifier": "<a class=\"gModGreen\" id=\"-424634148\">Enemy_W3_Sunday_IF_LightTeam_Shield_Stack</a>",
          "valuePerStack": {
            "MDF_ShieldPercentage_Add": {
              "displayLines": "{[SkillP02[0]]}"
            },
            "MDF_ShieldPercentage_Add_Value2": {
              "displayLines": "{[SkillP02[1]]}"
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
              "displayLines": "{[SkillP02[0]]}"
            }
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "W3_Sunday_00_StanceCountDown_Counter",
        "compareType": ">",
        "value2": 1
      },
      "passed": [
        {
          "name": "Looped Event",
          "maxLoops": {
            "displayLines": "(W3_Sunday_00_StanceCountDown_Counter - 1)"
          },
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team Entity}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-424634148\">Enemy_W3_Sunday_IF_LightTeam_Shield_Stack</a>",
              "valuePerStack": {
                "MDF_ShieldPercentage_Add": {
                  "displayLines": "{[SkillP02[0]]}"
                },
                "MDF_ShieldPercentage_Add_Value2": {
                  "displayLines": "{[SkillP02[1]]}"
                }
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Modifier Holder}}"
      },
      "value": 0,
      "variableName": "W3_Sunday_00_StanceCountDown_Counter"
    },
    {
      "name": "Define Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Modifier Holder}}"
      },
      "value": 0,
      "variableName": "W3_Sunday_00_StanceCountDown_Flag"
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}