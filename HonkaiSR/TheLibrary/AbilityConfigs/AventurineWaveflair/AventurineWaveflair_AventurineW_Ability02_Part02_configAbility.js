const configAbility = {
  "fileName": "AventurineWaveflair_AventurineW_Ability02_Part02",
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1302810990\">AventurineW_Eidolon4</a>[<span class=\"descriptionNumberColor\">Sunlight Runs No Tab</span>]",
          "duration": {
            "operator": "Variables[0] (3) || RETURN",
            "displayLines": "3",
            "constants": [],
            "variables": [
              3
            ]
          },
          "valuePerStack": {
            "MDF_PropertyRatio": {
              "operator": "Variables[0] (0.18) || RETURN",
              "displayLines": "0.18",
              "constants": [],
              "variables": [
                0.18
              ]
            }
          }
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "scope": "ContextCaster",
      "variableName": "_SpecialAttackEnergyPointTriggerCount",
      "value": 0
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Quantum",
        "Damage": {
          "operator": "Variables[0] (2.4) || RETURN",
          "displayLines": "2.4",
          "constants": [],
          "variables": [
            2.4
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
    {
      "name": "IF",
      "conditions": {
        "name": "Has Flag",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "flagName": [
          "ElationEchoPoint"
        ]
      },
      "passed": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "DamageElation": {
              "operator": "Variables[0] (0.4) || RETURN",
              "displayLines": "0.4",
              "constants": [],
              "variables": [
                0.4
              ]
            },
            "dmgFormula": "Elation Scaling",
            "Toughness": null,
            "Tags": null,
            "attackType": "Elation DMG"
          }
        }
      ]
    },
    "Trigger: Attack End",
    {
      "name": "Adjust Team Punchline Value",
      "value": {
        "operator": "Variables[0] (4) || RETURN",
        "displayLines": "4",
        "constants": [],
        "variables": [
          4
        ]
      },
      "adjustment": "Add"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1333939602\">AventurineW_Passive_Energy</a>",
      "stackLimit": {
        "operator": "Variables[0] (_MaxEnergyPoint) || RETURN",
        "displayLines": "_MaxEnergyPoint",
        "constants": [],
        "variables": [
          "_MaxEnergyPoint"
        ]
      },
      "addStacksPerTrigger": {
        "operator": "Variables[0] (4) || RETURN",
        "displayLines": "4",
        "constants": [],
        "variables": [
          4
        ]
      }
    },
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  }
}