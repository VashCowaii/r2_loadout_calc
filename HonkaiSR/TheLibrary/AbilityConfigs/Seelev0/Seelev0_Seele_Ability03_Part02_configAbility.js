const configAbility = {
  "fileName": "Seelev0_Seele_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1401924350\">Seele_Passive_DamageUp</a>[<span class=\"descriptionNumberColor\">Amplification</span>]",
      "duration": {
        "displayLines": "1"
      },
      "valuePerStack": {
        "seele_dmg_percent": {
          "displayLines": "0.8"
        },
        "MDF_Penetrate": {
          "displayLines": "0.2"
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
        "DamageType": "Quantum",
        "Damage": {
          "displayLines": "4.25"
        },
        "Toughness": {
          "displayLines": "ST Toughness Value"
        },
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 6
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"995458646\">Seele_Eidolon6_Flag</a>[<span class=\"descriptionNumberColor\">Butterfly Flurry</span>]",
          "duration": {
            "displayLines": "1"
          },
          "valuePerStack": {
            "MDF_Eidolon6_Damage": {
              "displayLines": "(4.25 * 0.15)"
            }
          }
        }
      ]
    },
    "Trigger: Skip Death Handling",
    "Trigger: Ability End"
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__995458646\">Seele_Eidolon6_Flag</a>[<span class=\"descriptionNumberColor\">Butterfly Flurry</span>]",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "stackData": [
        "MDF_Rank06_Damage"
      ],
      "description": "On a hit, receives an extra Quantum DMG from Seele.",
      "type": "Debuff",
      "effectName": "Butterfly Flurry",
      "statusName": "Butterfly Flurry",
      "execute": [
        {
          "eventTrigger": "Being Attacked [Owner]: End",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "displayLines": "MDF_Rank06_Damage"
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Additional DMG"
              }
            }
          ]
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}