const configAbility = {
  "fileName": "3021021_Monster_W2_ArgentiTotem_01_AbilityP01_Part01",
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
        "name": "Compare: Variable",
        "value1": "PowerFlag",
        "compareType": "=",
        "value2": 1,
        "contextScope": "TargetEntity"
      },
      "passed": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "value": "PowerFlag"
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "W2_ArgentiTotem_01_BattleScore1"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "Enemy_Argenti_DamageUP[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
          "duration": {
            "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
            "displayLines": "{[SkillP01[3]]}",
            "constants": [],
            "variables": [
              "{[SkillP01[3]]}"
            ]
          },
          "valuePerStack": {
            "MDF_ShowValue1": {
              "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
              "displayLines": "{[SkillP01[0]]}",
              "constants": [],
              "variables": [
                "{[SkillP01[0]]}"
              ]
            }
          },
          "addStacksPerTrigger": {
            "operator": "Variables[0] ({[SkillP01[2]]}) || Constants[0] (1) || SUB || RETURN",
            "displayLines": "({[SkillP01[2]]} - 1)",
            "constants": [
              1
            ],
            "variables": [
              "{[SkillP01[2]]}"
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "Enemy_Argenti_DamageUP[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
          "duration": {
            "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
            "displayLines": "{[SkillP01[3]]}",
            "constants": [],
            "variables": [
              "{[SkillP01[3]]}"
            ]
          },
          "valuePerStack": {
            "MDF_ShowValue1": {
              "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
              "displayLines": "{[SkillP01[0]]}",
              "constants": [],
              "variables": [
                "{[SkillP01[0]]}"
              ]
            }
          },
          "addStacksPerTrigger": 1
        }
      ],
      "failed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "Enemy_Argenti_DamageUP[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
          "duration": {
            "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
            "displayLines": "{[SkillP01[3]]}",
            "constants": [],
            "variables": [
              "{[SkillP01[3]]}"
            ]
          },
          "valuePerStack": {
            "MDF_ShowValue1": {
              "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
              "displayLines": "{[SkillP01[0]]}",
              "constants": [],
              "variables": [
                "{[SkillP01[0]]}"
              ]
            }
          },
          "addStacksPerTrigger": {
            "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
            "displayLines": "{[SkillP01[1]]}",
            "constants": [],
            "variables": [
              "{[SkillP01[1]]}"
            ]
          }
        }
      ]
    }
  ],
  "references": []
}