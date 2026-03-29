const configAbility = {
  "fileName": "4013014_Monster_W4_Claymore_LocalLegend03_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Change Character Transformation",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "phase": "Phase1"
    },
    {
      "name": "Define Custom Variable with Team Count",
      "target": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "variableName": "SummonCount",
      "livingTargets": true
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-662328641\">MModifier_Monster_W4_Claymore_Ability03_WeaponEff</a>"
    },
    {
      "name": "Define Custom Variable with Team Count",
      "target": {
        "name": "Target Name",
        "target": "{{EVENT[RoT] Light Praetor: Light Characters}}"
      },
      "variableName": "TargetCount",
      "livingTargets": true
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{EVENT[RoT] Light Praetor: Light Characters}}"
      },
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] (UnusedUnderThisBase_64) || Variables[1] (UnusedUnderThisBase_311) || Variables[2] (SummonCount) || MUL || ADD || Variables[3] (TargetCount) || DIV || RETURN",
          "displayLines": "((UnusedUnderThisBase_64 + (UnusedUnderThisBase_311 * SummonCount)) / TargetCount)",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_64",
            "UnusedUnderThisBase_311",
            "SummonCount",
            "TargetCount"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{EVENT[RoT] Light Praetor: Light Characters}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-351944820\">MModifier_Monster_W4_Claymore_Ability04_DamageTakenUp</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
      "duration": {
        "operator": "Variables[0] (UnusedUnderThisBase_404) || RETURN",
        "displayLines": "UnusedUnderThisBase_404",
        "constants": [],
        "variables": [
          "UnusedUnderThisBase_404"
        ]
      },
      "valuePerStack": {
        "MDF_DamageTakenUpRatio": {
          "operator": "Variables[0] (UnusedUnderThisBase_405) || Variables[1] (TargetCount) || DIV || RETURN",
          "displayLines": "(UnusedUnderThisBase_405 / TargetCount)",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_405",
            "TargetCount"
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
      "modifier": "<a class=\"gModGreen\" id=\"-1956673523\">MModifier_Monster_W4_Claymore_LocalLegend03_Ability03_Aim</a>[<span class=\"descriptionNumberColor\">Charging</span>]"
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}