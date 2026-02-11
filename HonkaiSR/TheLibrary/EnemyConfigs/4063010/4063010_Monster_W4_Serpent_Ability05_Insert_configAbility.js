const configAbility = {
  "fileName": "4063010_Monster_W4_Serpent_Ability05_Insert",
  "childAbilityList": [
    "4063010_Monster_W4_Serpent_Ability05_Insert_Camera",
    "4063010_Monster_W4_Serpent_Ability05ToStb_Insert_Camera",
    "4063010_Monster_W4_Serpent_Ability05_Insert",
    "4063010_Monster_W4_Serpent_Ability05ToStb_Insert"
  ],
  "skillTrigger": "Skill05",
  "abilityType": "Skill",
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Deleted bullshit",
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-919299430\">Enemy_W4_Serpent_Charge</a>[<span class=\"descriptionNumberColor\">Whirl</span>]"
    },
    {
      "name": "Update Displayed Energy Bar",
      "entityClass": "Enemy",
      "trigger": "SpEff_Trigger"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1028185089\">Enemy_AML_Minion02_01_RallyHP_Controller_V2</a>",
      "valuePerStack": {
        "MDF_RallyTransferRatio": {
          "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
          "displayLines": "{[Skill05[1]]}",
          "constants": [],
          "variables": [
            "{[Skill05[1]]}"
          ]
        },
        "MDF_Rally_HealPercentage": {
          "operator": "Variables[0] ({[Skill05[2]]}) || RETURN",
          "displayLines": "{[Skill05[2]]}",
          "constants": [],
          "variables": [
            "{[Skill05[2]]}"
          ]
        },
        "MDF_Rally_Strongth_AllDamageTypeAddedRatio": {
          "operator": "Variables[0] ({[Skill05[3]]}) || RETURN",
          "displayLines": "{[Skill05[3]]}",
          "constants": [],
          "variables": [
            "{[Skill05[3]]}"
          ]
        }
      }
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-969691416\">Enemy_W4_Serpent_Charge_TriggerEff</a>"
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
          "displayLines": "{[Skill05[0]]}",
          "constants": [],
          "variables": [
            "{[Skill05[0]]}"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "Define Modifier-Specific Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifierName": "<a class=\"gModGreen\" id=\"-919299430\">Enemy_W4_Serpent_Charge</a>[<span class=\"descriptionNumberColor\">Whirl</span>]",
      "variableName": "MDF_Trigger",
      "value": 0
    }
  ],
  "references": []
}