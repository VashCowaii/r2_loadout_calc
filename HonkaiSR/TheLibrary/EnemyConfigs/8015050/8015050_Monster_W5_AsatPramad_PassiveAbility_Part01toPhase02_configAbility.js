const configAbility = {
  "fileName": "8015050_Monster_W5_AsatPramad_PassiveAbility_Part01toPhase02",
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
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"175633574\">Enemy_W5_AsatPramad_MainStory02</a>",
        "invertCondition": true
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"175633574\">Enemy_W5_AsatPramad_MainStory02</a>"
      },
      "passed": [
        {
          "name": "Change Character UI",
          "characterName": "Lord of Saṃvartasthāyi, Asat Pramad: \"Existence\"",
          "icon": "Monster_8015040.png"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-490130876\">Enemy_W5_AsatPramad_Effect01</a>"
        }
      ],
      "failed": [
        {
          "name": "Change Character UI",
          "characterName": "Lord of Saṃvartasthāyi, Asat Pramad: \"Existence\"",
          "icon": "Monster_8015040.png"
        },
        {
          "name": "Change Character Model"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-473353257\">Enemy_W5_AsatPramad_Effect00</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-490130876\">Enemy_W5_AsatPramad_Effect01</a>"
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "variableName": "CurrentFace",
      "value": 1
    },
    {
      "name": "Inject Ability Use",
      "condition": {
        "name": "Insert Ability Condition",
        "type": "AbilityOwnerInsertUnusedCount",
        "typeValue": 1
      },
      "abilityName": "Monster_W5_AsatPramad_Ability05_Insert_Part01",
      "abilitySource": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "abilityTarget": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "priorityTag": "EnemyBuffSelf",
      "allowAbilityTriggers": false
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"542143301\">Monster_ChangePhase</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"294502655\">Enemy_W5_AsatPramad_Endurance</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-534385253\">Enemy_W5_AsatPramad_Part02</a>",
      "valuePerStack": {
        "MDF_SpeedAddedRatio": {
          "operator": "Variables[0] ({[SkillP01[4]]}) || RETURN",
          "displayLines": "{[SkillP01[4]]}",
          "constants": [],
          "variables": [
            "{[SkillP01[4]]}"
          ]
        }
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Add Target by Unique Identifier",
        "identifier": "BossSummonMonster"
      },
      "modifier": "<a class=\"gModGreen\" id=\"975723655\">Enemy_W5_AsatPramad_BESpeedUp</a>",
      "valuePerStack": {
        "MDF_SpeedAddedRatio": {
          "operator": "Variables[0] ({[SkillP04[2]]}) || RETURN",
          "displayLines": "{[SkillP04[2]]}",
          "constants": [],
          "variables": [
            "{[SkillP04[2]]}"
          ]
        }
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "InsertCheck",
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
          "name": "Assign Advance/Delay to Current Ability Use",
          "adjustmentValue": 0,
          "adjustmentType": "="
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
          "multiBase": 0
        }
      ]
    },
    {
      "name": "Define Custom Variable with Stat",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "BaseSpeed",
      "value": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;"
    },
    {
      "name": "Preload Battle Event(s)",
      "eventID": [
        20046
      ]
    },
    {
      "name": "Add Battle Event",
      "teamName": "Enemy Team",
      "eventID": 20046,
      "variables": null,
      "whenCreated": [
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "multiBase": 1
        },
        {
          "name": "Assign Unique Name",
          "uniqueName": "BossUltra",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
        }
      ]
    },
    {
      "name": "Action Advance/Delay",
      "advanceType": "Set",
      "target": {
        "name": "Add Target by Unique Identifier",
        "identifier": "BossSummonMonster"
      },
      "set": 0
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}