const configAbility = {
  "fileName": "Clara_Klara_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable with Team Count",
      "target": "All Hostile Entities (AOE)",
      "variableName": "Skill02_TargetNumber",
      "conditions": {
        "name": "Has Modifier",
        "target": "Use Prior Target(s) Defined",
        "modifier": "Klara_BPAbility_Revenge[<span class=\"descriptionNumberColor\">Mark of Counter</span>]"
      }
    },
    {
      "name": "Shot Fired",
      "caster": "Psuedo Partners",
      "projectileCountTotal": 4
    },
    {
      "name": "Shot Fired",
      "caster": "Psuedo Partners",
      "projectileCountTotal": 4,
      "projectileDMG": {
        "name": "ATK Scaling DMG",
        "target": "Clara's Counter Target",
        "AttackScaling": {
          "DamageType": "Physical",
          "Damage": {
            "operator": "Variables[0] (1.2) || Constants[0] (0.25) || MUL || RETURN",
            "displayLines": "(1.2 * 0.25)",
            "constants": [
              0.25
            ],
            "variables": [
              1.2
            ]
          },
          "Toughness": null,
          "Tags": null,
          "attackType": "Skill"
        }
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": "All Hostile Entities (AOE)",
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Physical",
        "Damage": {
          "operator": "Variables[0] (1.2) || RETURN",
          "displayLines": "1.2",
          "constants": [],
          "variables": [
            1.2
          ]
        },
        "Toughness": {
          "operator": "Variables[0] (AOE Toughness Value) || RETURN",
          "displayLines": "AOE Toughness Value",
          "constants": [],
          "variables": [
            "AOE Toughness Value"
          ]
        },
        "Tags": null,
        "attackType": "Skill",
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 1
      },
      "failed": [
        {
          "name": "Remove Events/Bonuses",
          "to": "Clara's Counter Target",
          "modifier": "Klara_BPAbility_Revenge[<span class=\"descriptionNumberColor\">Mark of Counter</span>]"
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": []
}