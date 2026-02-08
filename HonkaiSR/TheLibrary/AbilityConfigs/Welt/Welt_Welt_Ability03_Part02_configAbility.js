const configAbility = {
  "fileName": "Welt_Welt_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Retribution"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1040154561\">Welt_Trace01_AllDamageTypeTakenRatio</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
          "duration": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          },
          "baseChance": {
            "operator": "Variables[0] (1) || RETURN",
            "displayLines": "1",
            "constants": [],
            "variables": [
              1
            ]
          },
          "valuePerStack": {
            "MDF_PropertyRatio": {
              "operator": "Variables[0] (0.12) || RETURN",
              "displayLines": "0.12",
              "constants": [],
              "variables": [
                0.12
              ]
            }
          }
        }
      ]
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] (1.5) || RETURN",
          "displayLines": "1.5",
          "constants": [],
          "variables": [
            1.5
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
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] (1.5) || RETURN",
          "displayLines": "1.5",
          "constants": [],
          "variables": [
            1.5
          ]
        },
        "HitSplit": 0.9,
        "Toughness": {
          "operator": "Variables[0] (AOE Toughness Value) || RETURN",
          "displayLines": "AOE Toughness Value",
          "constants": [],
          "variables": [
            "AOE Toughness Value"
          ]
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
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1997760414\">Standard_Confine</a>[<span class=\"descriptionNumberColor\">Imprisonment</span>]",
      "duration": 1,
      "baseChance": {
        "operator": "Variables[0] (1) || RETURN",
        "displayLines": "1",
        "constants": [],
        "variables": [
          1
        ]
      },
      "immediateEffect": true,
      "valuePerStack": {
        "MDF_SpeedDownRatio": {
          "operator": "Variables[0] (0.1) || RETURN",
          "displayLines": "0.1",
          "constants": [],
          "variables": [
            0.1
          ]
        },
        "MDF_ActionDelayRatio": {
          "operator": "Variables[0] (0.4) || RETURN",
          "displayLines": "0.4",
          "constants": [],
          "variables": [
            0.4
          ]
        }
      }
    },
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
          "modifier": "<a class=\"gModGreen\" id=\"-374836920\">Welt_Eidolon1_Enhance</a>[<span class=\"descriptionNumberColor\">Legacy of Honor</span>]"
        },
        {
          "name": "Define Modifier Variable",
          "modifierName": "<a class=\"gModGreen\" id=\"-374836920\">Welt_Eidolon1_Enhance</a>[<span class=\"descriptionNumberColor\">Legacy of Honor</span>]",
          "value": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          }
        }
      ]
    },
    "Trigger: Skip Death Handling",
    "Trigger: Ability End"
  ],
  "references": []
}