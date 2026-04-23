const configAbility = {
  "fileName": "5014020_Monster_W5_Pam_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "variableName": "MDF_IsAngry",
      "value": 1
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1556520356\">Modifier_Monster_W5_Pam_Rage</a>[<span class=\"descriptionNumberColor\">Steam Wash</span>]",
      "valuePerStack": {
        "MDF_PropertyValue": {
          "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
          "displayLines": "{[Skill03[0]]}",
          "constants": [],
          "variables": [
            "{[Skill03[0]]}"
          ]
        }
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "HP_Bars_Remaining",
        "compareType": "=",
        "value2": 1
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-983171602\">Modifier_Monster_W5_Pam_DefenceUp</a>[<span class=\"descriptionNumberColor\">Lasting Antibac</span>]",
          "stackLimit": {
            "operator": "Variables[0] ({[Skill03[1]]}) || RETURN",
            "displayLines": "{[Skill03[1]]}",
            "constants": [],
            "variables": [
              "{[Skill03[1]]}"
            ]
          },
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] ({[Skill03[2]]}) || RETURN",
              "displayLines": "{[Skill03[2]]}",
              "constants": [],
              "variables": [
                "{[Skill03[2]]}"
              ]
            }
          },
          "addStacksPerTrigger": {
            "operator": "Variables[0] ({[Skill03[1]]}) || RETURN",
            "displayLines": "{[Skill03[1]]}",
            "constants": [],
            "variables": [
              "{[Skill03[1]]}"
            ]
          }
        }
      ],
      "failed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-983171602\">Modifier_Monster_W5_Pam_DefenceUp</a>[<span class=\"descriptionNumberColor\">Lasting Antibac</span>]",
          "stackLimit": {
            "operator": "Variables[0] ({[Skill03[4]]}) || RETURN",
            "displayLines": "{[Skill03[4]]}",
            "constants": [],
            "variables": [
              "{[Skill03[4]]}"
            ]
          },
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] ({[Skill03[5]]}) || RETURN",
              "displayLines": "{[Skill03[5]]}",
              "constants": [],
              "variables": [
                "{[Skill03[5]]}"
              ]
            }
          },
          "addStacksPerTrigger": {
            "operator": "Variables[0] ({[Skill03[4]]}) || RETURN",
            "displayLines": "{[Skill03[4]]}",
            "constants": [],
            "variables": [
              "{[Skill03[4]]}"
            ]
          }
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-458099336\">Monster_W5_Pam_zangshui_layer_display_02</a>"
    },
    {
      "name": "Change Character Transformation",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "phase": "PhaseRage"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "HP_Bars_Remaining",
        "compareType": "=",
        "value2": 1
      },
      "passed": [
        "Trigger: Ability End"
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 2
          },
          {
            "name": "Enemy ID",
            "ID": 5014021,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Alloy Mechatron: King Pom-Pom",
            "isBaseCompare": true
          }
        ]
      },
      "passed": [
        "Trigger: Ability End"
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}