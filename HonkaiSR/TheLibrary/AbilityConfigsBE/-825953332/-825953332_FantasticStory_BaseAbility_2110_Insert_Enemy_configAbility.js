const configAbility = {
  "fileName": "-825953332_FantasticStory_BaseAbility_2110_Insert_Enemy",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Exit Broken-State",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
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
        "DamageType": "Physical",
        "DamageFlat": {
          "displayLines": "Bomb_Damage_get"
        },
        "dmgFormulaFinal": "Converted DMG Base",
        "Toughness": null,
        "Tags": [
          "Bomb DMG"
        ],
        "attackType": "True DMG"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "value1": "Plus2_DamgeStance",
        "compareType": ">",
        "value2": 0
      },
      "passed": [
        {
          "name": "Deal Toughness DMG",
          "value": {
            "displayLines": "(Plus2_DamgeStance * 3)"
          },
          "defender": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "forceReduction": true,
          "canDelay": true,
          "ToughnessDMGType": "Physical"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "value1": "Bomb_Damage_Adjoin_get",
        "compareType": ">",
        "value2": 0
      },
      "passed": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Physical",
            "DamageFlat": {
              "displayLines": "Bomb_Damage_Adjoin_get"
            },
            "dmgFormulaFinal": "Converted DMG Base",
            "Toughness": null,
            "Tags": [
              "Bomb DMG"
            ],
            "attackType": "True DMG"
          }
        }
      ]
    },
    "Trigger: Attack End",
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "value1": "Plus3_DelayRatio",
        "compareType": ">",
        "value2": 0
      },
      "passed": [
        {
          "name": "Action Advance/Delay",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "advanceType": "Set",
          "multiAdd": "(0 - Plus3_DelayRatio)"
        }
      ]
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  }
}