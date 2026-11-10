const configAbility = {
  "fileName": "8025011_Monster_SW_Boss_01_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Define Custom Variable",
      "scope": "ContextAbility",
      "value": 0,
      "variableName": "AbilityFlag"
    },
    {
      "name": "Looped Event",
      "maxLoops": 7,
      "execute": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "displayLines": "{[Skill02[0]]}"
            },
            "HitSplit": 0.05,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        }
      ]
    },
    {
      "name": "Looped Event",
      "maxLoops": 1,
      "execute": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "displayLines": "{[Skill02[0]]}"
            },
            "HitSplit": 0.05,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        }
      ]
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Quantum",
        "Damage": {
          "displayLines": "{[Skill02[0]]}"
        },
        "HitSplit": 0.6,
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"2065489118\">Standard_Entangle</a>[<span class=\"descriptionNumberColor\">Entanglement</span>]",
      "duration": 1,
      "baseChance": {
        "displayLines": "{[Skill02[3]]}"
      },
      "valuePerStack": {
        "MDF_ActionDelayRatio": {
          "displayLines": "{[Skill02[1]]}"
        },
        "Modifier_Entangle_DamagePercentage": {
          "displayLines": "{[Skill02[2]]}"
        },
        "Modifier_Entangle_DamageValue": 0
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1730193233\">Enemy_SW_Boss_01_SummonMinion</a>",
      "valuePerStack": {
        "MDF_SummonID": {
          "displayLines": "SummonList_ADF_1"
        },
        "MDF_SummonDelay": {
          "displayLines": "{[Skill02[4]]}"
        }
      }
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": []
}