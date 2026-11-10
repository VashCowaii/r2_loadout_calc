const configAbility = {
  "fileName": "Seele_Advanced_Seele_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "AddUltraDamage"
    },
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "FinalUltraDamage"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-472499117\">Advanced_Seele_Passive_DamageUp</a>[<span class=\"descriptionNumberColor\">Amplification</span>]",
      "duration": {
        "displayLines": "3"
      },
      "valuePerStack": {
        "seele_dmg_percent": {
          "displayLines": "0.8"
        },
        "MDF_Penetrate": {
          "displayLines": "0.25"
        }
      }
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
          "displayLines": "7.2"
        },
        "Toughness": {
          "displayLines": "ST Toughness Value"
        },
        "instanceTag": "SeeleUltraDamage",
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    "Trigger: Skip Death Handling",
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}