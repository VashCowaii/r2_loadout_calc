const configAbility = {
  "fileName": "3024023_Monster_W3_Sam_RLBoss_RogueSummonMonster",
  "skillTrigger": "PassiveSkill04",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1368487968\">Enemy_W3_Sam_RLBoss_SummonMonster</a>"
    },
    {
      "name": "Create Enemies",
      "delayPercent": 0.5,
      "refreshPositions": false,
      "enemyList": [
        {
          "name": "Enemy Entry",
          "enemyID": {
            "operator": "Variables[0] (SummonList_ADF_1) || RETURN",
            "displayLines": "SummonList_ADF_1",
            "constants": [],
            "variables": [
              "SummonList_ADF_1"
            ]
          },
          "locationType": "First"
        }
      ]
    },
    {
      "name": "Create Enemies",
      "delayPercent": 0.5,
      "refreshPositions": false,
      "enemyList": [
        {
          "name": "Enemy Entry",
          "enemyID": {
            "operator": "Variables[0] (SummonList_ADF_1) || RETURN",
            "displayLines": "SummonList_ADF_1",
            "constants": [],
            "variables": [
              "SummonList_ADF_1"
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
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1368487968\">Enemy_W3_Sam_RLBoss_SummonMonster</a>",
      "stackData": [],
      "latentQueue": []
    }
  ]
}