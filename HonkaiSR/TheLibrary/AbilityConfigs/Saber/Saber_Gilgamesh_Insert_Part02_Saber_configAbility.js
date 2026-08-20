const configAbility = {
  "fileName": "Saber_Gilgamesh_Insert_Part02_Saber",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable with Copy",
      "target": {
        "name": "Target Sequence",
        "Sequence": [
          {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
          },
          {
            "name": "Target Filter",
            "conditions": {
              "name": "Character ID",
              "ID": 1509,
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "characterName": "Gilgamesh"
            }
          },
          {
            "name": "Return Target",
            "value": 1
          }
        ]
      },
      "variable": "#SkillP02_P2_DamagePercentage",
      "target2": null,
      "variable2": "Saber_1509_DMG"
    },
    {
      "name": "Define Custom Variable with Copy",
      "target": {
        "name": "Target Sequence",
        "Sequence": [
          {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
          },
          {
            "name": "Target Filter",
            "conditions": {
              "name": "Character ID",
              "ID": 1509,
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "characterName": "Gilgamesh"
            }
          },
          {
            "name": "Return Target",
            "value": 1
          }
        ]
      },
      "variable": "#SkillP02_P6_ExtraDamagePercentage",
      "target2": null,
      "variable2": "Saber_1509_UltraPercentage"
    },
    {
      "name": "Define Custom Variable with Copy",
      "target": {
        "name": "Target Sequence",
        "Sequence": [
          {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
          },
          {
            "name": "Target Filter",
            "conditions": {
              "name": "Character ID",
              "ID": 1509,
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "characterName": "Gilgamesh"
            }
          },
          {
            "name": "Return Target",
            "value": 1
          }
        ]
      },
      "variable": "#SkillP02_P4_AddSpValue",
      "target2": null,
      "variable2": "Saber_1509_AddSp"
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "AttackScaling": {
        "DamageType": "Wind",
        "Damage": {
          "operator": "Variables[0] (Saber_1509_DMG) || RETURN",
          "displayLines": "Saber_1509_DMG",
          "constants": [],
          "variables": [
            "Saber_1509_DMG"
          ]
        },
        "Toughness": null,
        "Tags": [
          "Joint-Attack"
        ],
        "attackType": "Follow-up"
      }
    },
    "Trigger: Attack End",
    {
      "name": "Update Energy",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "value": {
        "operator": "Variables[0] (Saber_1509_AddSp) || RETURN",
        "displayLines": "Saber_1509_AddSp",
        "constants": [],
        "variables": [
          "Saber_1509_AddSp"
        ]
      },
      "isFixed": "(Fixed)",
      "tag": "ActiveSkillAdd"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Gilgamesh: Saber}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1274159292\">Gilgamesh_SaberUltraBonus</a>[<span class=\"descriptionNumberColor\">\"I Grant You Permission To Strike\"</span>]",
      "valuePerStack": {
        "MDF_DamagePercentage": {
          "operator": "Variables[0] (Saber_1509_UltraPercentage) || RETURN",
          "displayLines": "Saber_1509_UltraPercentage",
          "constants": [],
          "variables": [
            "Saber_1509_UltraPercentage"
          ]
        }
      }
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  }
}