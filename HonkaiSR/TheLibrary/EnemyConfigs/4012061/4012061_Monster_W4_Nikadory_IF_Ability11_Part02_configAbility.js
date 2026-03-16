const configAbility = {
  "fileName": "4012061_Monster_W4_Nikadory_IF_Ability11_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Target Left of Ability Target(ST)}}"
      },
      "maxTargets": 1
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Target Right of Ability Target(ST)}}"
      },
      "maxTargets": 1
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Ability Targets Adjacent(Blast)}}"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-1781350564\">Monster_W4_Nikadory_Ability11Already</a>",
        "invertCondition": true
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1781350564\">Monster_W4_Nikadory_Ability11Already</a>"
        },
        {
          "name": "Shot Fired"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Ability Targets Adjacent(Blast)}}"
        },
        "value1": "TeamCharacterCount",
        "compareType": "=",
        "value2": 1,
        "conditions": {
          "name": "Has Modifier",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1781350564\">Monster_W4_Nikadory_Ability11Already</a>",
          "invertCondition": true
        }
      },
      "passed": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1781350564\">Monster_W4_Nikadory_Ability11Already</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1781350564\">Monster_W4_Nikadory_Ability11Already</a>"
            },
            {
              "name": "Shot Fired"
            }
          ]
        }
      ]
    },
    {
      "name": "Shot Fired",
      "execute": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] (UnusedUnderThisBase_33) || RETURN",
              "displayLines": "UnusedUnderThisBase_33",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_33"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] (UnusedUnderThisBase_34) || RETURN",
              "displayLines": "UnusedUnderThisBase_34",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_34"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Action Advance/Delay",
          "target": {
            "name": "Target Name",
            "target": "{{ST and Blast}}"
          },
          "advanceType": "Set",
          "multiAdd": "UnusedUnderThisBase_548"
        }
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1781350564\">Monster_W4_Nikadory_Ability11Already</a>"
    },
    "Trigger: Ability End"
  ],
  "references": []
}