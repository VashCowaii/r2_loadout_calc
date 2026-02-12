const configAbility = {
  "fileName": "4044012_BattleEventAbility_Monster_W4_Theoroi_SummonMonster",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Zandar: Self}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"534638248\">Monster_W4_Theoroi_Part1</a>[<span class=\"descriptionNumberColor\">To Logos</span>]"
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Enemy Team All}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": "<",
            "value2": 5
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1719897551\">Monster_W4_Theoroi_Ability16_Self</a>",
                "invertCondition": true
              }
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1719897551\">Monster_W4_Theoroi_Ability16_Self</a>"
            }
          ]
        },
        {
          "name": "Create Enemies",
          "enemyList": [
            {
              "name": "Create Enemy from Custom",
              "value": "ENEMIES_OBJECT_UNUSED__95",
              "summonLocation": "KeepOnEdge"
            },
            {
              "name": "Create Enemy from Custom",
              "value": "ENEMIES_OBJECT_UNUSED__95",
              "summonLocation": "KeepOnEdge"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1860207563\">Monster_W4_Theoroi_LastSummon</a>",
            "invertCondition": true
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1860207563\">Monster_W4_Theoroi_LastSummon</a>"
        }
      ]
    }
  ],
  "references": []
}