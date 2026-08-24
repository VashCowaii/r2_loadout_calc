const configAbility = {
  "fileName": "8015040_Monster_W5_AsatPramad_Ability31_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "UI Display Event",
      "popUpText": "Meme'd"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "AsatPramad_Skill3_isInsert",
      "value": 1
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "flagName": "Shield",
            "invertCondition": true
          },
          {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "flagName": "BlockDamageExcludeDot",
            "invertCondition": true
          },
          {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "flagName": "BlockDamage",
            "invertCondition": true
          }
        ]
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target List}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-78128030\">Enemy_W5_AsatPramad_DirtyBlood</a>[<span class=\"descriptionNumberColor\">Prana-Siphon</span>]",
          "stackLimit": {
            "operator": "Variables[0] (AsatPramad_Skill3_isInsert) || RETURN",
            "displayLines": "AsatPramad_Skill3_isInsert",
            "constants": [],
            "variables": [
              "AsatPramad_Skill3_isInsert"
            ]
          },
          "valuePerStack": {
            "MDF_DirtyBloodRatioPerLayer": {
              "operator": "Variables[0] ([object Object]) || RETURN",
              "displayLines": "[object Object]",
              "constants": [],
              "variables": [
                {}
              ]
            }
          }
        }
      ]
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "AttackScaling": {
        "DamageType": "Quantum",
        "DamageFlat": {
          "operator": "Variables[0] ([object Object]) || Variables[1] ([object Object]) || MUL || RETURN",
          "displayLines": "([object Object] * [object Object])",
          "constants": [],
          "variables": [
            {},
            {}
          ]
        },
        "Toughness": null,
        "instanceTag": "W5_AsatPramad_Bomb",
        "Tags": null,
        "attackType": "Additional DMG"
      },
      "overrideDamageOwner": {
        "name": "Target Name",
        "target": "{{Asat Pramad: 0}}"
      }
    },
    "Trigger: Attack End",
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-659133671\">Enemy_W5_AsatPramad_AddShake</a>",
      "valuePerStack": {
        "MDF_Chance": {
          "operator": "Variables[0] ([object Object]) || RETURN",
          "displayLines": "[object Object]",
          "constants": [],
          "variables": [
            {}
          ]
        }
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "<a class=\"gModGreen\" id=\"724771238\">Enemy_W5_AsatPramad_Bomb</a>[<span class=\"descriptionNumberColor\">Meme'd</span>]",
        "compareType": "=",
        "value2": 1,
        "valueType": "Layer"
      },
      "passed": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"724771238\">Enemy_W5_AsatPramad_Bomb</a>[<span class=\"descriptionNumberColor\">Meme'd</span>]"
        }
      ],
      "failed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"724771238\">Enemy_W5_AsatPramad_Bomb</a>[<span class=\"descriptionNumberColor\">Meme'd</span>]",
          "addStacksPerTrigger": -1
        },
        {
          "name": "Define Custom Variable",
          "variableName": "AsatPramad_Skill3_isInsert",
          "value": 0
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