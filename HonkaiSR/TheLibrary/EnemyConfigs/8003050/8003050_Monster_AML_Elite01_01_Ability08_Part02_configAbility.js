const configAbility = {
  "fileName": "8003050_Monster_AML_Elite01_01_Ability08_Part02",
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
        "DamageType": "Wind",
        "Damage": {
          "operator": "Variables[0] (UnusedUnderThisBase_31) || RETURN",
          "displayLines": "UnusedUnderThisBase_31",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_31"
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
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-868837614\">Standard_DOT_Poison</a>[<span class=\"descriptionNumberColor\">Wind Shear</span>]"
      },
      "passed": [
        {
          "name": "Trigger Modifier Event",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "variableName": "DOT_TriggerRatio",
          "eventType": "DOT_Poison",
          "value": 1
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-868837614\">Standard_DOT_Poison</a>[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
      "duration": {
        "operator": "Variables[0] ({[PassiveSkillInitiate[4]]}) || RETURN",
        "displayLines": "{[PassiveSkillInitiate[4]]}",
        "constants": [],
        "variables": [
          "{[PassiveSkillInitiate[4]]}"
        ]
      },
      "baseChance": 1,
      "stackLimit": {
        "operator": "Variables[0] ({[PassiveSkillInitiate[5]]}) || RETURN",
        "displayLines": "{[PassiveSkillInitiate[5]]}",
        "constants": [],
        "variables": [
          "{[PassiveSkillInitiate[5]]}"
        ]
      },
      "valuePerStack": {
        "Modifier_Poison_DamagePercentage": {
          "operator": "Variables[0] ({[PassiveSkillInitiate[3]]}) || RETURN",
          "displayLines": "{[PassiveSkillInitiate[3]]}",
          "constants": [],
          "variables": [
            "{[PassiveSkillInitiate[3]]}"
          ]
        }
      },
      "stackFlag": "CharacterSkill"
    },
    {
      "name": "Change Character Transformation",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "phase": "Phase1"
    },
    "Trigger: Ability End"
  ],
  "references": []
}