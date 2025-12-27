const configAbility = {
  "fileName": "Gallagher_Gallagher_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 4
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "Rank04_AddLifeTime",
          "value": {
            "operator": "Variables[0] (1) || RETURN",
            "displayLines": "1",
            "constants": [],
            "variables": [
              1
            ]
          }
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "variableName": "Rank04_AddLifeTime",
          "value": 0
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": "All Hostile Entities (AOE)",
      "modifier": "MWGallagher_Ability03_DeBonusModifier[<span class=\"descriptionNumberColor\">Besotted</span>]",
      "duration": {
        "operator": "Variables[0] (2) || Variables[1] (Rank04_AddLifeTime) || ADD || RETURN",
        "displayLines": "(2 + Rank04_AddLifeTime)",
        "constants": [],
        "variables": [
          2,
          "Rank04_AddLifeTime"
        ]
      },
      "valuePerStack": {
        "PointB3_Active": {
          "operator": "Variables[0] (PointB3_Active) || RETURN",
          "displayLines": "PointB3_Active",
          "constants": [],
          "variables": [
            "PointB3_Active"
          ]
        }
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": "All Hostile Entities (AOE)",
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Fire",
        "Damage": {
          "operator": "Variables[0] (1.5) || RETURN",
          "displayLines": "1.5",
          "constants": [],
          "variables": [
            1.5
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
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "Gallagher_NormalAttckAlter_Enable"
    },
    {
      "name": "Update Displayed Energy Bar",
      "assignState": "True",
      "priorState": "Active",
      "bar#": 1,
      "cooldown": 0
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Organic Yeast"
      },
      "passed": [
        {
          "name": "Action Advance/Delay",
          "target": "Caster",
          "advanceType": "Advance",
          "value": -1
        }
      ]
    },
    "Trigger: Skip Death Handling",
    "Trigger: Ability End"
  ],
  "references": []
}