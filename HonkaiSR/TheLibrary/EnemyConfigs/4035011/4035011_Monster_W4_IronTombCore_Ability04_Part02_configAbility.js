const configAbility = {
  "fileName": "4035011_Monster_W4_IronTombCore_Ability04_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-699052579\">Enemy_W4_IronTombCorePart_Ability02_Charge</a>"
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
          "displayLines": "{[Skill04[0]]}",
          "constants": [],
          "variables": [
            "{[Skill04[0]]}"
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
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"1699523791\">W4_IronTombCore_CalWorldErosion</a>",
      "variables": {
        "_ErosionParam": {
          "operator": "Variables[0] ({[Skill04[1]]}) || RETURN",
          "displayLines": "{[Skill04[1]]}",
          "constants": [],
          "variables": [
            "{[Skill04[1]]}"
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
      "modifier": "<a class=\"gModGreen\" id=\"-1372521903\">MModifier_W4_IronTombCore_TimeLock</a>[<span class=\"descriptionNumberColor\">Action Lock</span>]",
      "valuePerStack": {
        "MDF_SPConvert": {
          "operator": "Variables[0] ({[Skill04[2]]}) || RETURN",
          "displayLines": "{[Skill04[2]]}",
          "constants": [],
          "variables": [
            "{[Skill04[2]]}"
          ]
        },
        "MDF_ActionDelayConvert": {
          "operator": "Variables[0] ({[Skill04[3]]}) || RETURN",
          "displayLines": "{[Skill04[3]]}",
          "constants": [],
          "variables": [
            "{[Skill04[3]]}"
          ]
        }
      }
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1656056004\">Enemy_W4_IronTombCorePart_Ability02_Mark</a>"
    },
    "Trigger: Ability End"
  ],
  "references": []
}