const configAbility = {
  "fileName": "3014023_Monster_W3_Death_RLBoss_Ability03_Part02",
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
        "displayLines": "{[Skill03[1]]}"
      },
      "valuePerStack": {
        "MDF_ShowValue1": {
          "displayLines": "{[Skill03[0]]}"
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
          "value": {
            "displayLines": "(DeathPartMaxHPCount + {[Skill03[4]]})"
          },
          "variableName": "DeathPartMaxHPCount"
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
          "displayLines": "{[Skill03[2]]}"
        },
        "MDF_DeathPartMaxHPCount": {
          "displayLines": "DeathPartMaxHPCount"
        },
        "MDF_DeathPartAddHPCount": {
          "displayLines": "{[Skill03[4]]}"
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