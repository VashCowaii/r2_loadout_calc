const configAbility = {
  "fileName": "3024030_Monster_W3_Sam_01_Ability01Pre_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "UI Display Event",
      "popUpText": "Malignform Elytra"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-810385516\">Enemy_W3_Sam_01_EnhanceEffectPart</a>"
    },
    "Ability Start",
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Fire",
        "Damage": {
          "displayLines": "{[Skill01[0]]}"
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
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
        "modifier": "<a class=\"gModGreen\" id=\"-1922120036\">Enemy_W3_Sam_01_Enhance</a>[<span class=\"descriptionNumberColor\">Gene Duplication</span>]"
      },
      "passed": [
        {
          "name": "Define Custom Variable with Team Count",
          "variableName": "SummonMonsterCount",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "living": true
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "displayLines": "SummonMonsterCount"
          },
          "execute": [
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
                  "displayLines": "{[Skill01[1]]}"
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK"
              }
            }
          ]
        }
      ]
    },
    "Trigger: Attack End",
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-1922120036\">Enemy_W3_Sam_01_Enhance</a>[<span class=\"descriptionNumberColor\">Gene Duplication</span>]"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-810385516\">Enemy_W3_Sam_01_EnhanceEffectPart</a>"
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": []
}