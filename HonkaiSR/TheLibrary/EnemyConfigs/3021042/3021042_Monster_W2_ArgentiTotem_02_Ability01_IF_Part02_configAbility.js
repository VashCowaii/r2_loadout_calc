const configAbility = {
  "fileName": "3021042_Monster_W2_ArgentiTotem_02_Ability01_IF_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable with Stat",
      "variableName": "_MaxHP",
      "readTarget": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "OR",
        "conditionList": [
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1288212710\">Enemy_W2_Argenti_IF_Power</a>[<span class=\"descriptionNumberColor\">Soulfreed</span>]"
          }
        ]
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1104059334\">Monster_W2_ArgentiTotem_02_IF_Shield_Modifier</a>[<span class=\"descriptionNumberColor\">Shield</span>]",
          "duration": -1,
          "valuePerStack": {
            "MDF_ShowValue": {
              "displayLines": "({[Skill01[1]]} * _MaxHP)"
            }
          },
          "casterAssign": "TargetSelf"
        }
      ],
      "failed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1104059334\">Monster_W2_ArgentiTotem_02_IF_Shield_Modifier</a>[<span class=\"descriptionNumberColor\">Shield</span>]",
          "duration": -1,
          "valuePerStack": {
            "MDF_ShowValue": {
              "displayLines": "({[Skill01[0]]} * _MaxHP)"
            }
          },
          "casterAssign": "TargetSelf"
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": []
}