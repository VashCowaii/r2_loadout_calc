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
          "value": {
            "displayLines": "1"
          },
          "variableName": "Rank04_AddLifeTime"
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "value": 0,
          "variableName": "Rank04_AddLifeTime"
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-606062756\">MWGallagher_Ability03_DeBonusModifier</a>[<span class=\"descriptionNumberColor\">Besotted</span>]",
      "duration": {
        "displayLines": "(2 + Rank04_AddLifeTime)"
      },
      "valuePerStack": {
        "PointB3_Active": {
          "displayLines": "PointB3_Active"
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
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1869340095\">Gallagher_NormalAttckAlter_Enable</a>"
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
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "advanceType": "Advance",
          "multiAdd": -1
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