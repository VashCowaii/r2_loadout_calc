const configAbility = {
  "fileName": "8034010_Monster_W3_Aventurine_Ability08_Part02",
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
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-1404098919\">Monster_W3_Aventurine_LuckyBonus</a>"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-403740223\">Monster_W3_Aventurine_LuckyResult</a>"
        }
      ],
      "failed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"949876985\">Monster_W3_Aventurine_Result</a>"
        }
      ]
    },
    {
      "name": "Create Enemies",
      "enemyList": [
        {
          "name": "Enemy Entry",
          "enemyID": 9002231,
          "locationType": "BeforeCaster"
        },
        {
          "name": "Enemy Entry",
          "enemyID": 9002231,
          "locationType": "BeforeCaster"
        },
        {
          "name": "Enemy Entry",
          "enemyID": 9002231,
          "locationType": "AfterCaster"
        },
        {
          "name": "Enemy Entry",
          "enemyID": 9002231,
          "locationType": "AfterCaster"
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1454354819\">Monster_W3_Aventurine_Gambling</a>[<span class=\"descriptionNumberColor\">Gamble</span>]"
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": []
}