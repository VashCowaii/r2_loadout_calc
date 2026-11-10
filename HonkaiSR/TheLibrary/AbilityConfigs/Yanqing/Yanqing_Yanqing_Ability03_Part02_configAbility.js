const configAbility = {
  "fileName": "Yanqing_Yanqing_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-348622200\">Yanqing_BonusTargetMark</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"294496269\">Yanqing_Ability03_Bonus</a>[<span class=\"descriptionNumberColor\">Amidst the Raining Bliss</span>]",
      "duration": 1,
      "immediateEffect": true,
      "valuePerStack": {
        "MDF_CriticalBoost": {
          "displayLines": "0.6"
        }
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"1361979350\">Yanqing_FrozenMark</a>[<span class=\"descriptionNumberColor\">Soulsteel Sync</span>]"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1361979350\">Yanqing_FrozenMark</a>[<span class=\"descriptionNumberColor\">Soulsteel Sync</span>]",
          "duration": 1,
          "immediateEffect": true,
          "valuePerStack": {
            "MDF_CriticalBoost": {
              "displayLines": "0.2"
            },
            "MDF_CriticaDamage": {
              "displayLines": "0.3"
            },
            "MDF_AddCriticalDamage": {
              "displayLines": "0.5"
            }
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
        "DamageType": "Ice",
        "Damage": {
          "displayLines": "3.5"
        },
        "Toughness": {
          "displayLines": "ST Toughness Value"
        },
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    "Trigger: Skip Death Handling",
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}