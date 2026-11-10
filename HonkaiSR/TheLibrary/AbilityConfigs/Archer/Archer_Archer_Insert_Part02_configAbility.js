const configAbility = {
  "fileName": "Archer_Archer_Insert_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "(MDF_RestEnergy - 1)"
      },
      "variableName": "MDF_RestEnergy"
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Quantum",
        "Damage": {
          "displayLines": "2"
        },
        "Toughness": {
          "displayLines": "ST Toughness Value"
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
      "value": 0,
      "variableName": "OnInsertAbort_Flg"
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  }
}