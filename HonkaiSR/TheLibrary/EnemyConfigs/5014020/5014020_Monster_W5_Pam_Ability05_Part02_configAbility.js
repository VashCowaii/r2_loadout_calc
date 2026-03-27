const configAbility = {
  "fileName": "5014020_Monster_W5_Pam_Ability05_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Check Boolean Value",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "value": "Monster_W5_Pam_00_MainStory"
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "MDF_FirstUltraSkill",
            "compareType": "=",
            "value2": 0
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_FirstUltraSkill",
              "value": 1
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-983171602\">Modifier_Monster_W5_Pam_DefenceUp</a>[<span class=\"descriptionNumberColor\">Lasting Antibac</span>]"
              }
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-94545998\">Monster_W5_Pam_MainStory_ActionImmediately</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-94545998\">Monster_W5_Pam_MainStory_ActionImmediately</a>",
              "valuePerStack": {
                "MDF_Lock_Radio": 0.3
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Define Modifier-Specific Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifierName": "<a class=\"gModGreen\" id=\"-983171602\">Modifier_Monster_W5_Pam_DefenceUp</a>[<span class=\"descriptionNumberColor\">Lasting Antibac</span>]",
      "variableName": "UltraSkillTimelineStart",
      "value": 1
    },
    "Ability Start",
    {
      "name": "Change Character Transformation",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "phase": "PhaseCharge"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1493708935\">Modifier_Monster_W5_Pam_Charge</a>[<span class=\"descriptionNumberColor\">Raring to Go</span>]"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-3818542\">Monster_W5_Pam_Protect_Weakness</a>[<span class=\"descriptionNumberColor\">Weakness Protected</span>]"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Modifier Holder}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
    },
    "Trigger: Ability End"
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1493708935\">Modifier_Monster_W5_Pam_Charge</a>[<span class=\"descriptionNumberColor\">Raring to Go</span>]",
      "stackType": "Replace",
      "stackData": [],
      "latentQueue": [
        "MDF_FirstUltraSkill"
      ],
      "description": "Uses \"Saturation Cleaning!\" in the next action.",
      "type": "Other",
      "effectName": "Charging",
      "statusName": "Raring to Go"
    }
  ]
}