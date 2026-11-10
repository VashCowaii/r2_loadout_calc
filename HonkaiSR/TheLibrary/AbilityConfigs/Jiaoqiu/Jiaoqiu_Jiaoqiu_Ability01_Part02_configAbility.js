const configAbility = {
  "fileName": "Jiaoqiu_Jiaoqiu_Ability01_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 1
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(1 + 1)"
          },
          "variableName": "Rank01_Stack_Layer"
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "1"
          },
          "variableName": "Rank01_Stack_Layer"
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-2104919447\">Jiaoqiu_Debuff_Flavor</a>[<span class=\"descriptionNumberColor\">Ashen Roast</span>]",
      "duration": {
        "displayLines": "2"
      },
      "baseChance": {
        "displayLines": "1"
      },
      "stackLimit": {
        "displayLines": "_MaxLayer"
      },
      "valuePerStack": {
        "DOT_Ratio": {
          "displayLines": "SkillP01_DotRatio"
        },
        "AbilityRank_Eidolon2_P1_Ratio": {
          "displayLines": "3"
        },
        "AbilityRank_Eidolon6_P3_DownRatio": {
          "displayLines": "0.03"
        },
        "MDF_PropertyValue": {
          "displayLines": "0.15"
        },
        "MDF_PropertyValue_2": {
          "displayLines": "0.05"
        }
      },
      "addStacksPerTrigger": {
        "displayLines": "Rank01_Stack_Layer"
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
        "DamageType": "Fire",
        "Damage": {
          "displayLines": "1"
        },
        "Toughness": {
          "displayLines": "ST Toughness Value"
        },
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}