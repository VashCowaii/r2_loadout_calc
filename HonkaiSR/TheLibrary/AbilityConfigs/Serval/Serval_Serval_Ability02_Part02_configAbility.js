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
          "displayLines": "1.4"
        },
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
        "target": "{{Ability Targets Adjacent(Blast)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Thunder",
        "Damage": {
          "displayLines": "0.6"
        },
        "Toughness": {
          "displayLines": "Blast Toughness Value"
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
          "value": {
            "displayLines": "0.2"
          },
          "variableName": "SkillTree01_ThunderChanceAdd"
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "value": 0,
          "variableName": "SkillTree01_ThunderChanceAdd"
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
        "displayLines": "2"
      },
      "baseChance": {
        "displayLines": "(0.8 + SkillTree01_ThunderChanceAdd)"
      },
      "valuePerStack": {
        "Modifier_Electric_DamagePercentage": {
          "displayLines": "1.04"
        }
      },
      "stackFlag": "CharacterSkill"
    },
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}