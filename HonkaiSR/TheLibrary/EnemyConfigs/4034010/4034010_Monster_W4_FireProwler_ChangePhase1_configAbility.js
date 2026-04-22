const configAbility = {
  "fileName": "4034010_Monster_W4_FireProwler_ChangePhase1",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Dispel Debuffs",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "silent": true
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "ChangePhase_Layer"
    },
    {
      "name": "Define Custom Variable with Modifier Values",
      "valueType": "Layer",
      "variableName": "ChangePhase_Layer",
      "modifierName": "<a class=\"gModGreen\" id=\"33624492\">Enemy_W4_FireProwler_TimePower</a>[<span class=\"descriptionNumberColor\">Calamity Power</span>]",
      "multiplier": 1
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"33624492\">Enemy_W4_FireProwler_TimePower</a>[<span class=\"descriptionNumberColor\">Calamity Power</span>]",
      "addStacksPerTrigger": {
        "operator": "Variables[0] (ChangePhase_Layer) || INVERT || RETURN",
        "displayLines": "-ChangePhase_Layer",
        "constants": [],
        "variables": [
          "ChangePhase_Layer"
        ]
      }
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": 0,
      "entityClass": "Enemy",
      "maximum": 0,
      "assignState": "True",
      "barType": "FireProwler",
      "trigger": "Step_01"
    },
    {
      "name": "Action Advance/Delay",
      "advanceType": "Set",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "multiBase": 0
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"542143301\">Monster_ChangePhase</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"742116058\">Enemy_W4_FireProwler_AllDamageReduce</a>[<span class=\"descriptionNumberColor\">DMG Reduction</span>]",
      "stackLimit": {
        "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
        "displayLines": "{[Skill01[3]]}",
        "constants": [],
        "variables": [
          "{[Skill01[3]]}"
        ]
      },
      "valuePerStack": {
        "MDF_PropertyValue": {
          "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
          "displayLines": "{[Skill01[2]]}",
          "constants": [],
          "variables": [
            "{[Skill01[2]]}"
          ]
        }
      },
      "addStacksPerTrigger": {
        "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
        "displayLines": "{[Skill01[3]]}",
        "constants": [],
        "variables": [
          "{[Skill01[3]]}"
        ]
      }
    },
    {
      "name": "UI Display Event (On Entity)",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "popUpText": "DMG Reduction"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1404590263\">Standard_Endurance</a>"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "ChangePhase",
      "value": 1
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "AIFlag",
      "value": 1
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "SkillFlag",
      "value": 2
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "Deathrattle"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-415724336\">Monster_W4_FireProwler_MainStory_04</a>"
      },
      "passed": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "AIFlag",
          "value": 4
        }
      ]
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "Phase_Flag",
      "value": 2
    },
    {
      "name": "IF",
      "conditions": {
        "name": "OR",
        "conditionList": [
          {
            "name": "Stage Type",
            "stageType": "Challenge"
          },
          {
            "name": "Stage Type",
            "stageType": "VerseSimulation"
          },
          {
            "name": "Stage Type",
            "stageType": "StrongChallengeActivity"
          },
          {
            "name": "Stage Type",
            "stageType": "RogueRelic"
          },
          {
            "name": "Stage Type",
            "stageType": "GridFightActivity"
          },
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-29397814\">Monster_W4_FireProwler_MainStory_33</a>"
          }
        ]
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1484368126\">Enemy_W4_FireProwler_10_NoMask</a>"
          }
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}