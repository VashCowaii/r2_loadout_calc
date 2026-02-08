const configAbility = {
  "fileName": "8002071_Monster_XP_Minion04_02_AbilityP01_InsertAbility_Xuwu",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Deleted bullshit",
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "searchRandom": true,
      "ifTargetFound": [
        {
          "name": "Define Custom Variable",
          "variableName": "DispelSuccess",
          "value": 0
        },
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "typeOverride": "Buff",
          "dispelCount": 1,
          "dispelOrder": "LastAdded",
          "counterKey": "DispelSuccess"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "DispelSuccess",
            "compareType": ">",
            "value2": 0.5
          },
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-298752594\">Standard_CTRL_Frozen</a>[<span class=\"descriptionNumberColor\">Frozen</span>]",
              "duration": 1,
              "baseChance": {
                "operator": "Variables[0] (DispelSuccess) || RETURN",
                "displayLines": "DispelSuccess",
                "constants": [],
                "variables": [
                  "DispelSuccess"
                ]
              },
              "valuePerStack": {
                "Modifier_Frozen_DamagePercentage": {
                  "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__42) || RETURN",
                  "displayLines": "ENEMIES_OBJECT_UNUSED__42",
                  "constants": [],
                  "variables": [
                    "ENEMIES_OBJECT_UNUSED__42"
                  ]
                }
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "searchRandom": true,
      "ifTargetFound": [
        {
          "name": "Define Custom Variable",
          "variableName": "DispelSuccess",
          "value": 0
        },
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "typeOverride": "Buff",
          "dispelCount": 1,
          "dispelOrder": "LastAdded",
          "counterKey": "DispelSuccess"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "DispelSuccess",
            "compareType": ">",
            "value2": 0.5
          },
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1592948509\">Standard_AttackRatioDown</a>[<span class=\"descriptionNumberColor\">ATK Reduction</span>]",
              "duration": {
                "operator": "Constants[0] (1) || RETURN",
                "displayLines": "1",
                "constants": [
                  1
                ],
                "variables": []
              },
              "baseChance": {
                "operator": "Variables[0] (DispelSuccess) || RETURN",
                "displayLines": "DispelSuccess",
                "constants": [],
                "variables": [
                  "DispelSuccess"
                ]
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__44) || RETURN",
                  "displayLines": "ENEMIES_OBJECT_UNUSED__44",
                  "constants": [],
                  "variables": [
                    "ENEMIES_OBJECT_UNUSED__44"
                  ]
                }
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "searchRandom": true,
      "ifTargetFound": [
        {
          "name": "Define Custom Variable",
          "variableName": "DispelSuccess",
          "value": 0
        },
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "typeOverride": "Buff",
          "dispelCount": 1,
          "dispelOrder": "LastAdded",
          "counterKey": "DispelSuccess"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "DispelSuccess",
            "compareType": ">",
            "value2": 0.5
          },
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1990407757\">Standard_DOT_Burn</a>[<span class=\"descriptionNumberColor\">Burn</span>]",
              "duration": 1,
              "baseChance": {
                "operator": "Variables[0] (DispelSuccess) || RETURN",
                "displayLines": "DispelSuccess",
                "constants": [],
                "variables": [
                  "DispelSuccess"
                ]
              },
              "valuePerStack": {
                "Modifier_Burn_DamagePercentage": {
                  "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__46) || RETURN",
                  "displayLines": "ENEMIES_OBJECT_UNUSED__46",
                  "constants": [],
                  "variables": [
                    "ENEMIES_OBJECT_UNUSED__46"
                  ]
                }
              },
              "stackFlag": "CharacterSkill"
            }
          ]
        }
      ]
    },
    "Trigger: Attack End"
  ],
  "references": []
}