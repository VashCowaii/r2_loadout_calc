const configAbility = {
  "fileName": "2024016_Monster_W2_Xuanlu_IF_AbilityP01_EnterBattleSummon_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Create Enemies",
      "delayPercent": {
        "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
        "displayLines": "{[SkillP01[0]]}",
        "constants": [],
        "variables": [
          "{[SkillP01[0]]}"
        ]
      },
      "enemyList": [
        {
          "name": "Enemy Entry",
          "enemyID": {
            "operator": "Variables[0] (SummonList_ADF_6) || RETURN",
            "displayLines": "SummonList_ADF_6",
            "constants": [],
            "variables": [
              "SummonList_ADF_6"
            ]
          },
          "locationType": "BeforeCaster"
        }
      ]
    },
    {
      "name": "Create Enemies",
      "delayPercent": {
        "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
        "displayLines": "{[SkillP01[1]]}",
        "constants": [],
        "variables": [
          "{[SkillP01[1]]}"
        ]
      },
      "enemyList": [
        {
          "name": "Enemy Entry",
          "enemyID": {
            "operator": "Variables[0] (SummonList_ADF_6) || RETURN",
            "displayLines": "SummonList_ADF_6",
            "constants": [],
            "variables": [
              "SummonList_ADF_6"
            ]
          },
          "locationType": "AfterCaster"
        }
      ]
    },
    {
      "name": "Create Enemies",
      "delayPercent": {
        "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
        "displayLines": "{[SkillP01[2]]}",
        "constants": [],
        "variables": [
          "{[SkillP01[2]]}"
        ]
      },
      "enemyList": [
        {
          "name": "Enemy Entry",
          "enemyID": {
            "operator": "Variables[0] (SummonList_ADF_5) || RETURN",
            "displayLines": "SummonList_ADF_5",
            "constants": [],
            "variables": [
              "SummonList_ADF_5"
            ]
          },
          "locationType": "Last"
        }
      ]
    },
    {
      "name": "Create Enemies",
      "delayPercent": {
        "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
        "displayLines": "{[SkillP01[3]]}",
        "constants": [],
        "variables": [
          "{[SkillP01[3]]}"
        ]
      },
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
  "references": []
}