const configAbility = {
  "fileName": "Serval_Serval_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Thunder",
        "Damage": {
          "operator": "Variables[0] (1.4) || RETURN",
          "displayLines": "1.4",
          "constants": [],
          "variables": [
            1.4
          ]
        },
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
      "target": {
        "name": "Target Name",
        "target": "{{Ability Targets Adjacent(Blast)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Thunder",
        "Damage": {
          "operator": "Variables[0] (0.6) || RETURN",
          "displayLines": "0.6",
          "constants": [],
          "variables": [
            0.6
          ]
        },
        "Toughness": {
          "operator": "Variables[0] (Blast Toughness Value) || RETURN",
          "displayLines": "Blast Toughness Value",
          "constants": [],
          "variables": [
            "Blast Toughness Value"
          ]
        },
        "Tags": null
      }
    },
    "Trigger: Attack End",
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Rock 'n' Roll"
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "SkillTree01_ThunderChanceAdd",
          "value": {
            "operator": "Variables[0] (0.2) || RETURN",
            "displayLines": "0.2",
            "constants": [],
            "variables": [
              0.2
            ]
          }
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "variableName": "SkillTree01_ThunderChanceAdd",
          "value": 0
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{ST and Blast}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1935319413\">Standard_DOT_Electric</a>[<span class=\"descriptionNumberColor\">Shock</span>]",
      "duration": {
        "operator": "Variables[0] (2) || RETURN",
        "displayLines": "2",
        "constants": [],
        "variables": [
          2
        ]
      },
      "baseChance": {
        "operator": "Variables[0] (0.8) || Variables[1] (SkillTree01_ThunderChanceAdd) || ADD || RETURN",
        "displayLines": "(0.8 + SkillTree01_ThunderChanceAdd)",
        "constants": [],
        "variables": [
          0.8,
          "SkillTree01_ThunderChanceAdd"
        ]
      },
      "valuePerStack": {
        "Modifier_Electric_DamagePercentage": {
          "operator": "Variables[0] (1.04) || RETURN",
          "displayLines": "1.04",
          "constants": [],
          "variables": [
            1.04
          ]
        }
      },
      "stackFlag": "CharacterSkill"
    },
    "Trigger: Ability End"
  ],
  "references": []
}