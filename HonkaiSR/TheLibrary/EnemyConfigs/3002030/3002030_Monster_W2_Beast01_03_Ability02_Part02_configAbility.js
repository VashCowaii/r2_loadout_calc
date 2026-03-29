const configAbility = {
  "fileName": "3002030_Monster_W2_Beast01_03_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Target Left of Caster}}"
      },
      "AttackScaling": {
        "DamageType": "Physical",
        "Damage": {
          "operator": "Variables[0] ({[Skill02[5]]}) || RETURN",
          "displayLines": "{[Skill02[5]]}",
          "constants": [],
          "variables": [
            "{[Skill02[5]]}"
          ]
        },
        "dmgFormula": "Max HP Scaling",
        "Toughness": {
          "displayLines": 30
        },
        "ToughnessDMGType": {
          "DamageType": "Physical"
        },
        "Tags": null,
        "attackType": "Basic ATK"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Target Right of Caster}}"
      },
      "AttackScaling": {
        "DamageType": "Physical",
        "Damage": {
          "operator": "Variables[0] ({[Skill02[5]]}) || RETURN",
          "displayLines": "{[Skill02[5]]}",
          "constants": [],
          "variables": [
            "{[Skill02[5]]}"
          ]
        },
        "dmgFormula": "Max HP Scaling",
        "Toughness": {
          "displayLines": 30
        },
        "ToughnessDMGType": {
          "DamageType": "Physical"
        },
        "Tags": null,
        "attackType": "Basic ATK"
      }
    },
    "Trigger: Attack End",
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Targets Adjacent to Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1551178382\">Monster_Standard_SpeedAddedRatio</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
      "duration": {
        "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
        "displayLines": "{[Skill02[0]]}",
        "constants": [],
        "variables": [
          "{[Skill02[0]]}"
        ]
      },
      "valuePerStack": {
        "MDF_PropertyValue": {
          "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
          "displayLines": "{[Skill02[1]]}",
          "constants": [],
          "variables": [
            "{[Skill02[1]]}"
          ]
        }
      }
    },
    {
      "name": "Define Custom Variable with Modifier Values",
      "valueType": "Layer",
      "variableName": "Current_Layer",
      "modifierName": "<a class=\"gModGreen\" id=\"-210849987\">Monster_W2_Beast01_03_LayerCount</a>[<span class=\"descriptionNumberColor\">SoulGlad Revel</span>]",
      "multiplier": 1
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Targets Adjacent to Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1066196333\">Monster_W2_Beast01_03_Bleed</a>[<span class=\"descriptionNumberColor\">Bleed</span>]",
      "duration": {
        "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
        "displayLines": "{[Skill02[2]]}",
        "constants": [],
        "variables": [
          "{[Skill02[2]]}"
        ]
      },
      "valuePerStack": {
        "MDF_MaxLayer": {
          "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
          "displayLines": "{[SkillP01[0]]}",
          "constants": [],
          "variables": [
            "{[SkillP01[0]]}"
          ]
        },
        "Modifier_Bleed_DamagePercentage": {
          "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
          "displayLines": "{[Skill02[3]]}",
          "constants": [],
          "variables": [
            "{[Skill02[3]]}"
          ]
        },
        "Modifier_Bleed_MaxDamagePercentage": {
          "operator": "Variables[0] ({[Skill02[4]]}) || RETURN",
          "displayLines": "{[Skill02[4]]}",
          "constants": [],
          "variables": [
            "{[Skill02[4]]}"
          ]
        }
      },
      "addStacksPerTrigger": {
        "operator": "Variables[0] (Current_Layer) || RETURN",
        "displayLines": "Current_Layer",
        "constants": [],
        "variables": [
          "Current_Layer"
        ]
      }
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}