const configAbility = {
  "fileName": "3014025_Monster_W3_Death_RLBoss_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"606573810\">Monster_W3_Death_AllDamageUp</a>[<span class=\"descriptionNumberColor\">Biting Obituary</span>]",
      "duration": {
        "operator": "Variables[0] ({[Skill03[1]]}) || RETURN",
        "displayLines": "{[Skill03[1]]}",
        "constants": [],
        "variables": [
          "{[Skill03[1]]}"
        ]
      },
      "valuePerStack": {
        "MDF_ShowValue1": {
          "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
          "displayLines": "{[Skill03[0]]}",
          "constants": [],
          "variables": [
            "{[Skill03[0]]}"
          ]
        }
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "DeathPartMaxHPCount",
        "compareType": "<",
        "value2": 10
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "DeathPartMaxHPCount",
          "value": {
            "operator": "Variables[0] (DeathPartMaxHPCount) || Variables[1] ({[Skill03[4]]}) || ADD || RETURN",
            "displayLines": "(DeathPartMaxHPCount + {[Skill03[4]]})",
            "constants": [],
            "variables": [
              "DeathPartMaxHPCount",
              "{[Skill03[4]]}"
            ]
          }
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"2051878613\">Monster_W3_Death_RLBoss_DamageUp</a>[<span class=\"descriptionNumberColor\">Elegy</span>]",
      "valuePerStack": {
        "MDF_DamageUpRatio_PerLayer": {
          "operator": "Variables[0] ({[Skill03[2]]}) || RETURN",
          "displayLines": "{[Skill03[2]]}",
          "constants": [],
          "variables": [
            "{[Skill03[2]]}"
          ]
        },
        "MDF_DeathPartMaxHPCount": {
          "operator": "Variables[0] (DeathPartMaxHPCount) || RETURN",
          "displayLines": "DeathPartMaxHPCount",
          "constants": [],
          "variables": [
            "DeathPartMaxHPCount"
          ]
        },
        "MDF_DeathPartAddHPCount": {
          "operator": "Variables[0] ({[Skill03[4]]}) || RETURN",
          "displayLines": "{[Skill03[4]]}",
          "constants": [],
          "variables": [
            "{[Skill03[4]]}"
          ]
        }
      }
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}