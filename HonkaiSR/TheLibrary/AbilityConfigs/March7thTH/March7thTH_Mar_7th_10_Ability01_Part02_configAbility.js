const configAbility = {
  "fileName": "March7thTH_Mar_7th_10_Ability01_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable with Stat",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "variableName": "_target_stance_before_attack",
      "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] (1) || RETURN",
          "displayLines": "1",
          "constants": [],
          "variables": [
            1
          ]
        },
        "HitSplit": 0.4,
        "Toughness": {
          "operator": "Variables[0] (ST Toughness Value) || Variables[1] (Normal_StanceRatio) || MUL || RETURN",
          "displayLines": "(ST Toughness Value * Normal_StanceRatio)",
          "constants": [],
          "variables": [
            "ST Toughness Value",
            "Normal_StanceRatio"
          ]
        },
        "Tags": null,
        "EnergyGainPercent": "100%"
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
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] (1) || RETURN",
          "displayLines": "1",
          "constants": [],
          "variables": [
            1
          ]
        },
        "HitSplit": 0.6,
        "Toughness": {
          "operator": "Variables[0] (ST Toughness Value) || Variables[1] (Normal_StanceRatio) || MUL || RETURN",
          "displayLines": "(ST Toughness Value * Normal_StanceRatio)",
          "constants": [],
          "variables": [
            "ST Toughness Value",
            "Normal_StanceRatio"
          ]
        },
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "Mar_7th_10_Jianshi",
      "variables": {
        "parameter[00]_IsAbility11": 0
      }
    },
    "Trigger: Attack End",
    {
      "name": "Use Custom Character Function",
      "functionName": "Mar_7th_10_GainEnergyWithCheck",
      "variables": {
        "parameter[0]_AddValue": {
          "operator": "Variables[0] (1) || RETURN",
          "displayLines": "1",
          "constants": [],
          "variables": [
            1
          ]
        }
      }
    },
    "Trigger: Ability End"
  ],
  "whenAdded": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "M_Mar_7th_10_Ability01_Preshow"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "M_Mar_7th_10_Ability01_Preshow",
      "stackData": [],
      "latentQueue": [
        "_target_stance_before_attack"
      ],
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "skillType": "Basic ATK",
        "conditions": {
          "name": "Has Modifier",
          "target": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "modifier": "Mar_7th_10_Enhance",
          "invertCondition": true
        },
        "multiplier": {
          "operator": "Variables[0] (Normal_StanceRatio) || RETURN",
          "displayLines": "Normal_StanceRatio",
          "constants": [],
          "variables": [
            "Normal_StanceRatio"
          ]
        }
      }
    }
  ]
}