const configAbility = {
  "fileName": "1004028_Monster_W1_Gepard_RL_Ability14_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Create Enemies",
      "delayPercent": 0.5,
      "refreshPositions": false,
      "enemyList": [
        {
          "name": "Enemy Entry",
          "enemyID": {
            "operator": "Variables[0] (Soldier01) || RETURN",
            "displayLines": "Soldier01",
            "constants": [],
            "variables": [
              "Soldier01"
            ]
          },
          "locationType": "First"
        },
        {
          "name": "Enemy Entry",
          "enemyID": {
            "operator": "Variables[0] (Soldier04) || RETURN",
            "displayLines": "Soldier04",
            "constants": [],
            "variables": [
              "Soldier04"
            ]
          },
          "locationType": "Last"
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
      "name": "UI Display Event",
      "popUpText": "Support"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "UsedEnterBattleFlag",
      "value": 1
    },
    "Trigger: Ability End"
  ],
  "references": []
}