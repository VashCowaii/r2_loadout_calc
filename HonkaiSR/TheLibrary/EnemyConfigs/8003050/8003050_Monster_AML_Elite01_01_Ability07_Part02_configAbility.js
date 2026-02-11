const configAbility = {
  "fileName": "8003050_Monster_AML_Elite01_01_Ability07_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Shot Fired"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "searchRandom": true,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-868837614\">Standard_DOT_Poison</a>[<span class=\"descriptionNumberColor\">Wind Shear</span>]"
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"60428755\">Monster_AML_Elite01_01_PoisonCount</a>",
          "valuePerStack": {
            "MDF_MaxLayer": {
              "operator": "Variables[0] ({[PassiveSkillInitiate[5]]}) || RETURN",
              "displayLines": "{[PassiveSkillInitiate[5]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkillInitiate[5]]}"
              ]
            },
            "MDF_LifeTime": {
              "operator": "Variables[0] ({[PassiveSkillInitiate[4]]}) || RETURN",
              "displayLines": "{[PassiveSkillInitiate[4]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkillInitiate[4]]}"
              ]
            },
            "MDF_DamagePercentage": {
              "operator": "Variables[0] ({[PassiveSkillInitiate[3]]}) || RETURN",
              "displayLines": "{[PassiveSkillInitiate[3]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkillInitiate[3]]}"
              ]
            }
          }
        }
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"60428755\">Monster_AML_Elite01_01_PoisonCount</a>"
    },
    "Trigger: Ability End"
  ],
  "references": []
}