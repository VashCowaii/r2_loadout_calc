const configAbility = {
  "fileName": "Archer_Archer_Insert_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "variableName": "MDF_RestEnergy",
      "value": {
        "operator": "Variables[0] (MDF_RestEnergy) || Constants[0] (1) || SUB || RETURN",
        "displayLines": "(MDF_RestEnergy - 1)",
        "constants": [
          1
        ],
        "variables": [
          "MDF_RestEnergy"
        ]
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": "Single Target (Primary)",
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Quantum",
        "Damage": {
          "operator": "Variables[0] (2) || RETURN",
          "displayLines": "2",
          "constants": [],
          "variables": [
            2
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
        "attackType": "Follow-up",
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "Skill Points Modification",
      "adjustmentValue": 1,
      "adjustmentType": "+"
    },
    "Trigger: Attack End",
    {
      "name": "Define Custom Variable",
      "variableName": "OnInsertAbort_Flg",
      "value": 0
    }
  ],
  "references": []
}