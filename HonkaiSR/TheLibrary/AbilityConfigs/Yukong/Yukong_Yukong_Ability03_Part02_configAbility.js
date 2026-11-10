const configAbility = {
  "fileName": "Yukong_Yukong_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 6
      },
      "passed": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Yukong_Ability03_AddFlower"
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Yukong's Flower Target}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1097783562\">Yukong_Flower_ATK_Crit</a>[<span class=\"descriptionNumberColor\">Roaring Bowstrings</span>]",
      "valuePerStack": {
        "MDF_RealAttack": {
          "displayLines": "0.8"
        },
        "MDF_CritChanceUp": {
          "displayLines": "0.28"
        },
        "MDF_CritDamageUpRatio": {
          "displayLines": "0.65"
        }
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
        "DamageType": "Imaginary",
        "Damage": {
          "displayLines": "3.8"
        },
        "Toughness": {
          "displayLines": "ST Toughness Value"
        },
        "Tags": null,
        "attackType": "Ultimate",
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    "Trigger: Skip Death Handling",
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{All Team Members with Unselectables}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-476851750\">Yukong_Eidolon2_BonusCD</a>"
    },
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}