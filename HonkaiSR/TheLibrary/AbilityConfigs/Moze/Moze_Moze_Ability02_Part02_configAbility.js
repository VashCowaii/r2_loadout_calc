const configAbility = {
  "fileName": "Moze_Moze_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Single Target (Primary)",
      "modifier": "Moze_Ability02_ShadowTargetModifier[<span class=\"descriptionNumberColor\">Prey</span>]"
    },
    {
      "name": "ATK Scaling DMG",
      "target": "Single Target (Primary)",
      "AttackScaling": {
        "DamageType": "Thunder",
        "Damage": {
          "operator": "Variables[0] (1.5) || RETURN",
          "displayLines": "1.5",
          "constants": [],
          "variables": [
            1.5
          ]
        },
        "HitSplit": 0.15,
        "Toughness": {
          "operator": "Variables[0] (ST Toughness Value) || RETURN",
          "displayLines": "ST Toughness Value",
          "constants": [],
          "variables": [
            "ST Toughness Value"
          ]
        },
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": "Single Target (Primary)",
      "AttackScaling": {
        "DamageType": "Thunder",
        "Damage": {
          "operator": "Variables[0] (1.5) || RETURN",
          "displayLines": "1.5",
          "constants": [],
          "variables": [
            1.5
          ]
        },
        "HitSplit": 0.15,
        "Toughness": {
          "operator": "Variables[0] (ST Toughness Value) || RETURN",
          "displayLines": "ST Toughness Value",
          "constants": [],
          "variables": [
            "ST Toughness Value"
          ]
        },
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": "Single Target (Primary)",
      "AttackScaling": {
        "DamageType": "Thunder",
        "Damage": {
          "operator": "Variables[0] (1.5) || RETURN",
          "displayLines": "1.5",
          "constants": [],
          "variables": [
            1.5
          ]
        },
        "HitSplit": 0.7,
        "Toughness": {
          "operator": "Variables[0] (ST Toughness Value) || RETURN",
          "displayLines": "ST Toughness Value",
          "constants": [],
          "variables": [
            "ST Toughness Value"
          ]
        },
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Living State",
            "state": "Mask_AliveOrRevivable",
            "target": "Single Target (Primary)"
          },
          {
            "name": "Target is Unselectable",
            "target": "Single Target (Primary)",
            "invertCondition": true
          }
        ]
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Moze_Ability02_InShadowModifier"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Living State",
        "state": "Mask_AliveOnly",
        "target": "Single Target (Primary)",
        "invertCondition": true
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "MDF_EnergyCost",
          "value": 0
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": []
}