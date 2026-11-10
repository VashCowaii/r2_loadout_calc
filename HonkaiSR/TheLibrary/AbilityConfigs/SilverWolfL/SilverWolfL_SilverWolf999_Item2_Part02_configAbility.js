const configAbility = {
  "fileName": "SilverWolfL_SilverWolf999_Item2_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "scope": "ContextCaster",
      "value": 1,
      "variableName": "_Item2_AchievementFlag"
    },
    {
      "name": "UI Display Event",
      "popUpText": "Kaboom Eggsplosion"
    },
    {
      "name": "Skill Points Modification",
      "adjustmentValue": {
        "operator": "Variables[0] (2) || RETURN",
        "displayLines": "2",
        "constants": [],
        "variables": [
          2
        ]
      },
      "adjustmentType": "+"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Enemies Still Alive",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        }
      },
      "passed": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}.[[living]]"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Imaginary",
            "DamageElation": {
              "operator": "Variables[0] (0.9) || RETURN",
              "displayLines": "0.9",
              "constants": [],
              "variables": [
                0.9
              ]
            },
            "dmgFormula": "Elation Scaling",
            "Toughness": {
              "operator": "Variables[0] (AOE Toughness Value) || RETURN",
              "displayLines": "AOE Toughness Value",
              "constants": [],
              "variables": [
                "AOE Toughness Value"
              ]
            },
            "ToughnessDMGType": {
              "DamageType": "Imaginary"
            },
            "instanceTag": "SilverWolf999_00_Item_Damage",
            "Tags": null,
            "attackType": "Elation DMG"
          },
          "distributeEqually": true
        }
      ],
      "failed": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Imaginary",
            "DamageElation": {
              "operator": "Variables[0] (0.9) || RETURN",
              "displayLines": "0.9",
              "constants": [],
              "variables": [
                0.9
              ]
            },
            "dmgFormula": "Elation Scaling",
            "Toughness": {
              "operator": "Variables[0] (AOE Toughness Value) || RETURN",
              "displayLines": "AOE Toughness Value",
              "constants": [],
              "variables": [
                "AOE Toughness Value"
              ]
            },
            "ToughnessDMGType": {
              "DamageType": "Imaginary"
            },
            "instanceTag": "SilverWolf999_00_Item_Damage",
            "Tags": null,
            "attackType": "Elation DMG"
          },
          "distributeEqually": true
        }
      ]
    },
    "Trigger: Attack End",
    {
      "name": "IF",
      "conditions": "Active: Fast-Forward Animations"
    },
    {
      "name": "WAIT FOR",
      "conditions": {
        "name": "Death Animation Completed",
        "team": "Enemy Team",
        "entityType": "Team Characters"
      }
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  }
}