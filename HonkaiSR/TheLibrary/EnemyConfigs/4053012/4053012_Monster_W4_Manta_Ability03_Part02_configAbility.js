const configAbility = {
  "fileName": "4053012_Monster_W4_Manta_Ability03_Part02",
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
        "modifier": "<a class=\"gModGreen\" id=\"-1670308834\">Enemy_W4_Manta_TimeSlow</a>"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{All Team Members}}"
        },
        "value1": "TeamCharacterCount",
        "compareType": "<",
        "value2": 5
      },
      "passed": [
        {
          "name": "Create Enemies",
          "delayPercent": {
            "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
            "displayLines": "{[Skill03[0]]}",
            "constants": [],
            "variables": [
              "{[Skill03[0]]}"
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
              "locationType": "BeforeCaster"
            },
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
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}