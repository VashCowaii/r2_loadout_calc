const configAbility = {
  "fileName": "Lingsha_Lingsha_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 2
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-962483629\">Lingsha_Eidolon2_BreakDamageAttackRatio</a>[<span class=\"descriptionNumberColor\">Leisure in Carmine Smokeveil</span>]",
          "duration": {
            "displayLines": "3"
          },
          "valuePerStack": {
            "MDF_PropertyValue": {
              "displayLines": "0.4"
            }
          }
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-637709984\">Lingsha_BreakDamageUp</a>[<span class=\"descriptionNumberColor\">Befog</span>]",
      "duration": {
        "displayLines": "2"
      },
      "valuePerStack": {
        "MDF_PropertyValue": {
          "displayLines": "0.25"
        }
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
        "DamageType": "Fire",
        "Damage": {
          "displayLines": "1.5"
        },
        "Toughness": {
          "displayLines": "AOE Toughness Value"
        },
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "Heal",
      "target": {
        "name": "Target Name",
        "target": "{{All Team Members}}"
      },
      "healPercent": {
        "displayLines": "0.12"
      },
      "healFlat": {
        "displayLines": "360"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "Lingsha_BENum",
        "compareType": ">=",
        "value2": 1
      },
      "passed": [
        {
          "name": "Action Advance/Delay",
          "target": {
            "name": "Target Name",
            "target": "{{Fuyuan}}"
          },
          "advanceType": "Advance",
          "multiAdd": "-1"
        }
      ]
    },
    "Trigger: Skip Death Handling",
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  }
}