const configAbility = {
  "fileName": "8032034_Monster_W3_AventurinePart_01_IF_AbilityP01_ForceKill_Insert_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-43533344\">Enemy_W3_Aventurine_IF_Double</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"499818287\">Enemy_W3_AventurinePart_01_IF_DeathRattle</a>"
    },
    {
      "name": "Mark Entity For Immediate Death"
    },
    {
      "name": "Force Entity Death",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Caster's Summoner}}"
        },
        "value1": "HP_Bars_Remaining",
        "compareType": "=",
        "value2": 1
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Summoner}}"
            },
            "value1": "SummonCountNumber",
            "compareType": ">=",
            "value2": 7
          },
          "failed": [
            {
              "name": "Inject Ability Use",
              "abilityName": "Monster_W3_Aventurine_IF_AbilityP01_InsertAbility02_Part01",
              "abilitySource": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "abilityTarget": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "priorityTag": "MonsterReviveOthers",
              "canHitNonTargets": true,
              "allowAbilityTriggers": false
            }
          ]
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Caster's Summoner}}"
        },
        "value1": "HP_Bars_Remaining",
        "compareType": "=",
        "value2": 2
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Summoner}}"
            },
            "value1": "SummonCountNumber",
            "compareType": ">=",
            "value2": 10
          },
          "failed": [
            {
              "name": "Inject Ability Use",
              "abilityName": "Monster_W3_Aventurine_IF_AbilityP01_InsertAbility02_Part01",
              "abilitySource": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "abilityTarget": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "priorityTag": "MonsterReviveOthers",
              "canHitNonTargets": true,
              "allowAbilityTriggers": false
            }
          ]
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": []
}