const configAbility = {
  "fileName": "3013013_Monster_W3_Dinosaur_01_Ability01_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Quantum",
        "Damage": {
          "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
          "displayLines": "{[Skill01[0]]}",
          "constants": [],
          "variables": [
            "{[Skill01[0]]}"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "IF",
      "conditions": {
        "name": "Enemy ID",
        "ID": 3013013,
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "characterName": "Memory Zone Meme \"Shell of Faded Rage\" (Bug)",
        "isBaseCompare": true
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-340009422\">Enemy_W3_Dinosaur_01_Standard_Growth_Enhance</a>[<span class=\"descriptionNumberColor\">Scorchbone Inferno</span>]",
          "stackLimit": {
            "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
            "displayLines": "{[SkillP01[3]]}",
            "constants": [],
            "variables": [
              "{[SkillP01[3]]}"
            ]
          },
          "valuePerStack": {
            "MDF_MaxLayer": {
              "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
              "displayLines": "{[SkillP01[3]]}",
              "constants": [],
              "variables": [
                "{[SkillP01[3]]}"
              ]
            }
          },
          "addStacksPerTrigger": 1
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Modifier Holder}}"
            },
            "value1": "<a class=\"gModGreen\" id=\"-340009422\">Enemy_W3_Dinosaur_01_Standard_Growth_Enhance</a>[<span class=\"descriptionNumberColor\">Scorchbone Inferno</span>]",
            "compareType": "<",
            "value2": {
              "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
              "displayLines": "{[SkillP01[3]]}",
              "constants": [],
              "variables": [
                "{[SkillP01[3]]}"
              ]
            },
            "valueType": "Layer"
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
          "modifier": "<a class=\"gModGreen\" id=\"-1395319081\">Enemy_W3_Dinosaur_01_Standard_Growth</a>[<span class=\"descriptionNumberColor\">Obscure Blaze</span>]",
          "addStacksPerTrigger": 1
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Modifier Holder}}"
            },
            "value1": "<a class=\"gModGreen\" id=\"-1395319081\">Enemy_W3_Dinosaur_01_Standard_Growth</a>[<span class=\"descriptionNumberColor\">Obscure Blaze</span>]",
            "compareType": "<",
            "value2": 5,
            "valueType": "Layer"
          }
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