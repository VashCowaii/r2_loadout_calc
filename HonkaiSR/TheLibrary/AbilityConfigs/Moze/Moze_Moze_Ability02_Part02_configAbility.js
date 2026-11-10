const configAbility = {
  "fileName": "Moze_Moze_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1612096231\">Moze_Ability02_ShadowTargetModifier</a>[<span class=\"descriptionNumberColor\">Prey</span>]"
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Thunder",
        "Damage": {
          "displayLines": "1.5"
        },
        "HitSplit": 0.15,
        "Toughness": {
          "displayLines": "ST Toughness Value"
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
      "AttackScaling": {
        "DamageType": "Thunder",
        "Damage": {
          "displayLines": "1.5"
        },
        "HitSplit": 0.15,
        "Toughness": {
          "displayLines": "ST Toughness Value"
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
      "AttackScaling": {
        "DamageType": "Thunder",
        "Damage": {
          "displayLines": "1.5"
        },
        "HitSplit": 0.7,
        "Toughness": {
          "displayLines": "ST Toughness Value"
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
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "livingState": "Mask_AliveOrRevivable"
          },
          {
            "name": "Target is Unselectable",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "invertCondition": true
          }
        ]
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1726925121\">Moze_Ability02_InShadowModifier</a>"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Living State",
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "livingState": "Mask_AliveOnly",
        "invertCondition": true
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "value": 0,
          "variableName": "MDF_EnergyCost"
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}