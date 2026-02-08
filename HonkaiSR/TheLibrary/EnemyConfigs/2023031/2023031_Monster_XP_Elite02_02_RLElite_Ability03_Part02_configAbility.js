const configAbility = {
  "fileName": "2023031_Monster_XP_Elite02_02_RLElite_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-228419305\">Standard_BlackBlood</a>[<span class=\"descriptionNumberColor\">Prana-Siphoned</span>]"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-765841098\">Monster_XP_Elite02_02_RLElite_TryAddDirtyHP</a>"
        }
      ]
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Wind",
        "Damage": {
          "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
          "displayLines": "{[Skill03[0]]}",
          "constants": [],
          "variables": [
            "{[Skill03[0]]}"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-868837614\">Standard_DOT_Poison</a>[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
      "duration": {
        "operator": "Variables[0] ({[Skill03[2]]}) || RETURN",
        "displayLines": "{[Skill03[2]]}",
        "constants": [],
        "variables": [
          "{[Skill03[2]]}"
        ]
      },
      "baseChance": {
        "operator": "Variables[0] ({[Skill03[1]]}) || RETURN",
        "displayLines": "{[Skill03[1]]}",
        "constants": [],
        "variables": [
          "{[Skill03[1]]}"
        ]
      },
      "valuePerStack": {
        "Modifier_Poison_DamagePercentage": {
          "operator": "Variables[0] ({[Skill03[3]]}) || RETURN",
          "displayLines": "{[Skill03[3]]}",
          "constants": [],
          "variables": [
            "{[Skill03[3]]}"
          ]
        }
      },
      "stackFlag": "CharacterSkill"
    },
    "Trigger: Attack End",
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "AIFlag",
        "compareType": "=",
        "value2": 5
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-773012193\">Monster_XP_Elite02_02_RLElite_ChargeEffect</a>[<span class=\"descriptionNumberColor\">Japa</span>]"
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": []
}