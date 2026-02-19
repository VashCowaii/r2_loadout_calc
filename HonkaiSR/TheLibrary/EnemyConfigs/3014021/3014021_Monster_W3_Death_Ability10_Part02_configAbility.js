const configAbility = {
  "fileName": "3014021_Monster_W3_Death_Ability10_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "variableName": "BonusAttackCounter",
      "value": {
        "operator": "Variables[0] (BonusAttackCounter) || Constants[0] (1) || ADD || RETURN",
        "displayLines": "(BonusAttackCounter + 1)",
        "constants": [
          1
        ],
        "variables": [
          "BonusAttackCounter"
        ]
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "BonusAttackCounter",
        "compareType": "=",
        "value2": 1
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"656665951\">Modifier_W3_Death_HuntingMode1</a>[<span class=\"descriptionNumberColor\">Sunset</span>]"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "BonusAttackCounter",
        "compareType": "=",
        "value2": 2
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"673443570\">Modifier_W3_Death_HuntingMode2</a>[<span class=\"descriptionNumberColor\">Sunset</span>]"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "BonusAttackCounter",
        "compareType": "=",
        "value2": 1,
        "contextScope": "TargetEntity"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "BonusAttackCounter",
        "compareType": "=",
        "value2": 2,
        "contextScope": "TargetEntity"
      }
    }
  ],
  "references": []
}