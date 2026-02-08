const configAbility = {
  "fileName": "Jade_Jade_Passive_Part02_02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 1
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1701847025\">Jade_Eidolon1_InsertDamageRatio</a>",
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (0.32) || RETURN",
              "displayLines": "0.32",
              "constants": [],
              "variables": [
                0.32
              ]
            }
          }
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "variableName": "_RateLayer",
      "value": {
        "operator": "Variables[0] (_RateLayer) || Variables[1] (_InsertTriggerCount) || SUB || RETURN",
        "displayLines": "(_RateLayer - _InsertTriggerCount)",
        "constants": [],
        "variables": [
          "_RateLayer",
          "_InsertTriggerCount"
        ]
      }
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": {
        "operator": "Variables[0] (_RateLayer) || RETURN",
        "displayLines": "_RateLayer",
        "constants": [],
        "variables": [
          "_RateLayer"
        ]
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-2143808418\">Jade_Passive_Rate</a>[<span class=\"descriptionNumberColor\">Pawned Asset</span>]",
      "stackLimit": {
        "operator": "Variables[0] (50) || RETURN",
        "displayLines": "50",
        "constants": [],
        "variables": [
          50
        ]
      },
      "valuePerStack": {
        "MDF_PropertyValue": {
          "operator": "Variables[0] (0.024) || RETURN",
          "displayLines": "0.024",
          "constants": [],
          "variables": [
            0.024
          ]
        }
      },
      "addStacksPerTrigger": {
        "operator": "Variables[0] (5) || RETURN",
        "displayLines": "5",
        "constants": [],
        "variables": [
          5
        ]
      }
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
          "operator": "Variables[0] (1.2) || Variables[1] (0.8) || ADD || RETURN",
          "displayLines": "(1.2 + 0.8)",
          "constants": [],
          "variables": [
            1.2,
            0.8
          ]
        },
        "HitSplit": 0.1,
        "Toughness": {
          "operator": "Variables[0] (AOE Toughness Value) || RETURN",
          "displayLines": "AOE Toughness Value",
          "constants": [],
          "variables": [
            "AOE Toughness Value"
          ]
        },
        "Tags": null,
        "attackType": "Follow-up",
        "EnergyGainPercent": "100%"
      }
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
          "operator": "Variables[0] (1.2) || Variables[1] (0.8) || ADD || RETURN",
          "displayLines": "(1.2 + 0.8)",
          "constants": [],
          "variables": [
            1.2,
            0.8
          ]
        },
        "HitSplit": 0.1,
        "Toughness": {
          "operator": "Variables[0] (AOE Toughness Value) || RETURN",
          "displayLines": "AOE Toughness Value",
          "constants": [],
          "variables": [
            "AOE Toughness Value"
          ]
        },
        "Tags": null,
        "attackType": "Follow-up",
        "EnergyGainPercent": "100%"
      }
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
          "operator": "Variables[0] (1.2) || Variables[1] (0.8) || ADD || RETURN",
          "displayLines": "(1.2 + 0.8)",
          "constants": [],
          "variables": [
            1.2,
            0.8
          ]
        },
        "HitSplit": 0.1,
        "Toughness": {
          "operator": "Variables[0] (AOE Toughness Value) || RETURN",
          "displayLines": "AOE Toughness Value",
          "constants": [],
          "variables": [
            "AOE Toughness Value"
          ]
        },
        "Tags": null,
        "attackType": "Follow-up",
        "EnergyGainPercent": "100%"
      }
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
          "operator": "Variables[0] (1.2) || Variables[1] (0.8) || ADD || RETURN",
          "displayLines": "(1.2 + 0.8)",
          "constants": [],
          "variables": [
            1.2,
            0.8
          ]
        },
        "HitSplit": 0.1,
        "Toughness": {
          "operator": "Variables[0] (AOE Toughness Value) || RETURN",
          "displayLines": "AOE Toughness Value",
          "constants": [],
          "variables": [
            "AOE Toughness Value"
          ]
        },
        "Tags": null,
        "attackType": "Follow-up",
        "EnergyGainPercent": "100%"
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
          "operator": "Variables[0] (1.2) || Variables[1] (0.8) || ADD || RETURN",
          "displayLines": "(1.2 + 0.8)",
          "constants": [],
          "variables": [
            1.2,
            0.8
          ]
        },
        "HitSplit": 0.6,
        "Toughness": {
          "operator": "Variables[0] (AOE Toughness Value) || RETURN",
          "displayLines": "AOE Toughness Value",
          "constants": [],
          "variables": [
            "AOE Toughness Value"
          ]
        },
        "Tags": null,
        "attackType": "Follow-up",
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
      "passed": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1701847025\">Jade_Eidolon1_InsertDamageRatio</a>"
        }
      ]
    },
    {
      "name": "Define Modifier Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifierName": "<a class=\"gModGreen\" id=\"-1732030848\">Jade_Ultimate_Insert</a>[<span class=\"descriptionNumberColor\">Follow-Up ATK Boost</span>]",
      "function": "Add"
    }
  ],
  "references": []
}