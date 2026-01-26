const configAbility = {
  "fileName": "Acheron_Acheron_Ability33_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Acheron_AbilityChange03"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Acheron_AbilityChange04"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Thunder Core"
      },
      "passed": [
        {
          "name": "Use Custom Character Function",
          "functionName": "Acheron_HitFlower"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "The Abyss"
      },
      "passed": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] (0.24) || Variables[1] (Acheron_PointB2_DamageRatio) || MUL || RETURN",
              "displayLines": "(0.24 * Acheron_PointB2_DamageRatio)",
              "constants": [],
              "variables": [
                0.24,
                "Acheron_PointB2_DamageRatio"
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "attackType": "Ultimate"
          }
        }
      ],
      "failed": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] (0.24) || RETURN",
              "displayLines": "0.24",
              "constants": [],
              "variables": [
                0.24
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "attackType": "Ultimate"
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "modifier": "Acheron_PassiveFlag01[<span class=\"descriptionNumberColor\">Crimson Knot</span>]"
      },
      "passed": [
        {
          "name": "Use Custom Character Function",
          "functionName": "Acheron_TiggerFlower"
        }
      ]
    },
    {
      "name": "Automatically use Ultimate",
      "target": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      }
    },
    {
      "name": "Force-Trigger Ability Next-Phase",
      "ability": "MISSING NAME OBJECT(Or implicit from Context)"
    },
    {
      "name": "Trigger: Ability End",
      "skipAttackSettle": true
    }
  ],
  "references": []
}