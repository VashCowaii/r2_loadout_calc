const configAbility = {
  "fileName": "8013141_Monster_AML_Boss_Part2_Ability11_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "AML_Boss_00_BattleScore2_Flag",
      "value": 1
    },
    "Ability Start",
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-842741041\">Enemy_AML_Boss_Part2_Ability11_ListenSelfDieModifier</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"596990185\">Enemy_W0_Boss_Part2_Ability11_Modifier</a>",
      "valuePerStack": {
        "MDF_AttackAddedRatio": {
          "operator": "Variables[0] ({[Skill11[0]]}) || RETURN",
          "displayLines": "{[Skill11[0]]}",
          "constants": [],
          "variables": [
            "{[Skill11[0]]}"
          ]
        }
      }
    },
    {
      "name": "Change Character Transformation",
      "target": {
        "name": "Target Name",
        "target": "{{Target Part 0}}"
      },
      "phase": "Phase1"
    },
    {
      "name": "Change Character Transformation",
      "target": {
        "name": "Target Name",
        "target": "{{Target Part 1}}"
      },
      "phase": "Phase1"
    },
    {
      "name": "Change Character Transformation",
      "target": {
        "name": "Target Name",
        "target": "{{Target Part 2}}"
      },
      "phase": "Phase1"
    },
    {
      "name": "Change Character Transformation",
      "target": {
        "name": "Target Name",
        "target": "{{Target Part 3}}"
      },
      "phase": "Phase1"
    },
    "Trigger: Ability End"
  ],
  "references": []
}