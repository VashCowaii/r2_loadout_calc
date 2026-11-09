const configAbility = {
  "fileName": "Archer_TohsakaRin_Insert_Part02_Archer",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable with Copy",
      "target": {
        "name": "Target Sequence",
        "TargetList": [
          {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}"
          },
          {
            "name": "Target Filter",
            "conditions": {
              "name": "Character ID",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "characterID": "1508 (Rin Tohsaka)"
            }
          },
          {
            "name": "Return Target",
            "count": 1
          }
        ]
      },
      "variable": "#SkillP02_P4_DamagePercentage",
      "target2": null,
      "variable2": "Archer_1508_DMG"
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "AttackScaling": {
        "DamageType": "Quantum",
        "Damage": {
          "operator": "Variables[0] (Archer_1508_DMG) || RETURN",
          "displayLines": "Archer_1508_DMG",
          "constants": [],
          "variables": [
            "Archer_1508_DMG"
          ]
        },
        "HitSplit": 0.25,
        "Toughness": null,
        "Tags": [
          "Joint-Attack"
        ],
        "attackType": "Follow-up"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "AttackScaling": {
        "DamageType": "Quantum",
        "Damage": {
          "operator": "Variables[0] (Archer_1508_DMG) || RETURN",
          "displayLines": "Archer_1508_DMG",
          "constants": [],
          "variables": [
            "Archer_1508_DMG"
          ]
        },
        "HitSplit": 0.25,
        "Toughness": null,
        "Tags": [
          "Joint-Attack"
        ],
        "attackType": "Follow-up"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "AttackScaling": {
        "DamageType": "Quantum",
        "Damage": {
          "operator": "Variables[0] (Archer_1508_DMG) || RETURN",
          "displayLines": "Archer_1508_DMG",
          "constants": [],
          "variables": [
            "Archer_1508_DMG"
          ]
        },
        "HitSplit": 0.25,
        "Toughness": null,
        "Tags": [
          "Joint-Attack"
        ],
        "attackType": "Follow-up"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "AttackScaling": {
        "DamageType": "Quantum",
        "Damage": {
          "operator": "Variables[0] (Archer_1508_DMG) || RETURN",
          "displayLines": "Archer_1508_DMG",
          "constants": [],
          "variables": [
            "Archer_1508_DMG"
          ]
        },
        "HitSplit": 0.25,
        "Toughness": null,
        "Tags": [
          "Joint-Attack"
        ],
        "attackType": "Follow-up"
      }
    },
    "Trigger: Attack End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  }
}