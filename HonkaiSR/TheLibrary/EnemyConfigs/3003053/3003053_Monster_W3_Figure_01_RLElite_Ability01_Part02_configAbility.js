const configAbility = {
  "fileName": "3003053_Monster_W3_Figure_01_RLElite_Ability01_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"914391189\">Standard_DefenceRatioDown</a>[<span class=\"descriptionNumberColor\">DEF Reduction</span>]",
      "duration": {
        "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
        "displayLines": "{[Skill01[1]]}",
        "constants": [],
        "variables": [
          "{[Skill01[1]]}"
        ]
      },
      "valuePerStack": {
        "MDF_PropertyValue": {
          "operator": "Variables[0] ({[Skill01[5]]}) || RETURN",
          "displayLines": "{[Skill01[5]]}",
          "constants": [],
          "variables": [
            "{[Skill01[5]]}"
          ]
        }
      }
    },
    {
      "name": "Random Event",
      "odds": [
        0.5,
        0.5
      ],
      "execute": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-578587123\">Enemy_W3_Figure_01_Poison</a>[<span class=\"descriptionNumberColor\">Carousal of Wantonness</span>]",
          "duration": {
            "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
            "displayLines": "{[Skill01[1]]}",
            "constants": [],
            "variables": [
              "{[Skill01[1]]}"
            ]
          },
          "baseChance": {
            "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
            "displayLines": "{[Skill01[0]]}",
            "constants": [],
            "variables": [
              "{[Skill01[0]]}"
            ]
          },
          "stackLimit": {
            "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
            "displayLines": "{[Skill01[3]]}",
            "constants": [],
            "variables": [
              "{[Skill01[3]]}"
            ]
          },
          "valuePerStack": {
            "Modifier_Poison_DamagePercentage": {
              "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
              "displayLines": "{[Skill01[2]]}",
              "constants": [],
              "variables": [
                "{[Skill01[2]]}"
              ]
            }
          },
          "success": []
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"723419042\">Enemy_W3_Figure_01_Electric</a>[<span class=\"descriptionNumberColor\">Carousal of Revelry</span>]",
          "duration": {
            "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
            "displayLines": "{[Skill01[1]]}",
            "constants": [],
            "variables": [
              "{[Skill01[1]]}"
            ]
          },
          "baseChance": {
            "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
            "displayLines": "{[Skill01[0]]}",
            "constants": [],
            "variables": [
              "{[Skill01[0]]}"
            ]
          },
          "stackLimit": {
            "operator": "Variables[0] ({[Skill01[4]]}) || RETURN",
            "displayLines": "{[Skill01[4]]}",
            "constants": [],
            "variables": [
              "{[Skill01[4]]}"
            ]
          },
          "valuePerStack": {
            "Modifier_Electric_DamagePercentage": {
              "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
              "displayLines": "{[Skill01[2]]}",
              "constants": [],
              "variables": [
                "{[Skill01[2]]}"
              ]
            }
          },
          "success": []
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": []
}