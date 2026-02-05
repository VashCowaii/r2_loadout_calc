const configAbility = {
  "fileName": "8002079_Monster_XP_Minion04_02_AbilityP01_InsertAbility_EnterBattle_Cunhu",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Exit Broken-State",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "OR",
        "conditionList": [
          {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "flagName": "STAT_CTRL",
            "invertCondition": true
          },
          {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "flagName": "DisableAction",
            "invertCondition": true
          },
          {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "flagName": "Break",
            "invertCondition": true
          }
        ]
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_XP_Minion04_02_Cunhu_Caster"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "Enemy_XP_Minion04_02_Cunhu_Bonus[<span class=\"descriptionNumberColor\">P—Protect You</span>]",
          "counter": {
            "operator": "Variables[0] (UnusedUnderThisBase_135) || RETURN",
            "displayLines": "UnusedUnderThisBase_135",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_135"
            ]
          }
        }
      ],
      "failed": [
        {
          "name": "Animation Event",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "state": "Skill04",
          "passed": [
            {
              "name": "Animation Task"
            },
            {
              "name": "Animation Task",
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Enemy_XP_Minion04_02_Cunhu_Caster"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "Enemy_XP_Minion04_02_Cunhu_Bonus[<span class=\"descriptionNumberColor\">P—Protect You</span>]",
                  "counter": {
                    "operator": "Variables[0] (UnusedUnderThisBase_135) || RETURN",
                    "displayLines": "UnusedUnderThisBase_135",
                    "constants": [],
                    "variables": [
                      "UnusedUnderThisBase_135"
                    ]
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "references": []
}