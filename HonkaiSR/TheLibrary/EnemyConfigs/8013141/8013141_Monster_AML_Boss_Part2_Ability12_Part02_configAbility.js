const configAbility = {
  "fileName": "8013141_Monster_AML_Boss_Part2_Ability12_Part02",
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
      "variableName": "AML_Boss_00_BattleScore2_Flag"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-842741041\">Enemy_AML_Boss_Part2_Ability11_ListenSelfDieModifier</a>"
    },
    "Ability Start",
    {
      "name": "Looped Event",
      "maxLoops": 4,
      "Event": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill12[0]]}) || Constants[0] (0.125) || MUL || RETURN",
              "displayLines": "({[Skill12[0]]} * 0.125)",
              "constants": [
                0.125
              ],
              "variables": [
                "{[Skill12[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "12.5%"
          }
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
              "operator": "Variables[0] ({[Skill12[0]]}) || Constants[0] (0.125) || MUL || RETURN",
              "displayLines": "({[Skill12[0]]} * 0.125)",
              "constants": [
                0.125
              ],
              "variables": [
                "{[Skill12[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "12.5%"
          }
        }
      ]
    },
    {
      "name": "Change Character Transformation",
      "target": {
        "name": "Target Name",
        "target": "{{Target Part 0}}"
      },
      "phase": "Phase0"
    },
    {
      "name": "Change Character Transformation",
      "target": {
        "name": "Target Name",
        "target": "{{Target Part 1}}"
      },
      "phase": "Phase0"
    },
    {
      "name": "Change Character Transformation",
      "target": {
        "name": "Target Name",
        "target": "{{Target Part 2}}"
      },
      "phase": "Phase0"
    },
    {
      "name": "Change Character Transformation",
      "target": {
        "name": "Target Name",
        "target": "{{Target Part 3}}"
      },
      "phase": "Phase0"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"596990185\">Enemy_W0_Boss_Part2_Ability11_Modifier</a>"
    },
    "Trigger: Attack End",
    "Trigger: Ability End"
  ],
  "references": []
}