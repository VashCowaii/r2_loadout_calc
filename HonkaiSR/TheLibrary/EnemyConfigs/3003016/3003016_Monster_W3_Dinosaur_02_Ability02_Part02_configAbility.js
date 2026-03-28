const configAbility = {
  "fileName": "3003016_Monster_W3_Dinosaur_02_Ability02_Part02",
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
        "DamageType": "Fire",
        "Damage": {
          "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
          "displayLines": "{[Skill02[0]]}",
          "constants": [],
          "variables": [
            "{[Skill02[0]]}"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Targets Adjacent(Blast)}}"
      },
      "AttackScaling": {
        "DamageType": "Fire",
        "Damage": {
          "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
          "displayLines": "{[Skill02[1]]}",
          "constants": [],
          "variables": [
            "{[Skill02[1]]}"
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
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1809911628\">Enemy_W3_Dinosaur_02_Burn</a>[<span class=\"descriptionNumberColor\">Burn</span>]",
      "duration": {
        "operator": "Variables[0] ({[Skill04[4]]}) || RETURN",
        "displayLines": "{[Skill04[4]]}",
        "constants": [],
        "variables": [
          "{[Skill04[4]]}"
        ]
      },
      "baseChance": {
        "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
        "displayLines": "{[Skill02[2]]}",
        "constants": [],
        "variables": [
          "{[Skill02[2]]}"
        ]
      },
      "stackLimit": {
        "operator": "Variables[0] ({[Skill04[3]]}) || RETURN",
        "displayLines": "{[Skill04[3]]}",
        "constants": [],
        "variables": [
          "{[Skill04[3]]}"
        ]
      },
      "valuePerStack": {
        "Modifier_Burn_DamagePercentage": {
          "operator": "Variables[0] ({[Skill04[2]]}) || RETURN",
          "displayLines": "{[Skill04[2]]}",
          "constants": [],
          "variables": [
            "{[Skill04[2]]}"
          ]
        }
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Targets Adjacent(Blast)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1809911628\">Enemy_W3_Dinosaur_02_Burn</a>[<span class=\"descriptionNumberColor\">Burn</span>]",
      "duration": {
        "operator": "Variables[0] ({[Skill04[4]]}) || RETURN",
        "displayLines": "{[Skill04[4]]}",
        "constants": [],
        "variables": [
          "{[Skill04[4]]}"
        ]
      },
      "baseChance": {
        "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
        "displayLines": "{[Skill02[2]]}",
        "constants": [],
        "variables": [
          "{[Skill02[2]]}"
        ]
      },
      "stackLimit": {
        "operator": "Variables[0] ({[Skill04[3]]}) || RETURN",
        "displayLines": "{[Skill04[3]]}",
        "constants": [],
        "variables": [
          "{[Skill04[3]]}"
        ]
      },
      "valuePerStack": {
        "Modifier_Burn_DamagePercentage": {
          "operator": "Variables[0] ({[Skill04[2]]}) || RETURN",
          "displayLines": "{[Skill04[2]]}",
          "constants": [],
          "variables": [
            "{[Skill04[2]]}"
          ]
        }
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1761981801\">MModifier_Monster_W3_Dinosaur_SpeedDownRatio</a>[<span class=\"descriptionNumberColor\">Slow</span>]",
      "duration": {
        "operator": "Variables[0] ({[PassiveSkillInitiate[3]]}) || RETURN",
        "displayLines": "{[PassiveSkillInitiate[3]]}",
        "constants": [],
        "variables": [
          "{[PassiveSkillInitiate[3]]}"
        ]
      },
      "baseChance": {
        "operator": "Variables[0] ({[PassiveSkillInitiate[1]]}) || RETURN",
        "displayLines": "{[PassiveSkillInitiate[1]]}",
        "constants": [],
        "variables": [
          "{[PassiveSkillInitiate[1]]}"
        ]
      },
      "valuePerStack": {
        "MDF_PropertyValue": {
          "operator": "Variables[0] ({[PassiveSkillInitiate[2]]}) || RETURN",
          "displayLines": "{[PassiveSkillInitiate[2]]}",
          "constants": [],
          "variables": [
            "{[PassiveSkillInitiate[2]]}"
          ]
        }
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Targets Adjacent(Blast)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1761981801\">MModifier_Monster_W3_Dinosaur_SpeedDownRatio</a>[<span class=\"descriptionNumberColor\">Slow</span>]",
      "duration": {
        "operator": "Variables[0] ({[PassiveSkillInitiate[3]]}) || RETURN",
        "displayLines": "{[PassiveSkillInitiate[3]]}",
        "constants": [],
        "variables": [
          "{[PassiveSkillInitiate[3]]}"
        ]
      },
      "baseChance": {
        "operator": "Variables[0] ({[PassiveSkillInitiate[1]]}) || RETURN",
        "displayLines": "{[PassiveSkillInitiate[1]]}",
        "constants": [],
        "variables": [
          "{[PassiveSkillInitiate[1]]}"
        ]
      },
      "valuePerStack": {
        "MDF_PropertyValue": {
          "operator": "Variables[0] ({[PassiveSkillInitiate[2]]}) || RETURN",
          "displayLines": "{[PassiveSkillInitiate[2]]}",
          "constants": [],
          "variables": [
            "{[PassiveSkillInitiate[2]]}"
          ]
        }
      }
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": []
}