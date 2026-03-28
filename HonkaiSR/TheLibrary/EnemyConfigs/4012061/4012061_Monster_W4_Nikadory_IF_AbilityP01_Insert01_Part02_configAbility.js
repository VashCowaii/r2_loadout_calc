const configAbility = {
  "fileName": "4012061_Monster_W4_Nikadory_IF_AbilityP01_Insert01_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] (UnusedUnderThisBase_156) || RETURN",
          "displayLines": "UnusedUnderThisBase_156",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_156"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"615854836\">Enemy_W4_Nikadory_IF_Brave</a>[<span class=\"descriptionNumberColor\">Glory</span>]",
      "valuePerStack": {
        "MDF_DamageUpRatio_PerLayer": {
          "operator": "Variables[0] (UnusedUnderThisBase_542) || RETURN",
          "displayLines": "UnusedUnderThisBase_542",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_542"
          ]
        }
      },
      "casterAssign": "TargetSelf"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}.[[getMemosprite]]"
      },
      "ifTargetFound": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"615854836\">Enemy_W4_Nikadory_IF_Brave</a>[<span class=\"descriptionNumberColor\">Glory</span>]",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"615854836\">Enemy_W4_Nikadory_IF_Brave</a>[<span class=\"descriptionNumberColor\">Glory</span>]",
              "valuePerStack": {
                "MDF_DamageUpRatio_PerLayer": {
                  "operator": "Variables[0] (UnusedUnderThisBase_542) || RETURN",
                  "displayLines": "UnusedUnderThisBase_542",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_542"
                  ]
                }
              },
              "casterAssign": "TargetSelf"
            }
          ]
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}