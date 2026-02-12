const configAbility = {
  "fileName": "4012052_Monster_W4_Mascot_LocalLegend_PassiveAbilityInitiate",
  "skillTrigger": "SkillP01",
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
      "modifier": "<a class=\"gModGreen\" id=\"-1597331632\">Enemy_W4_Mascot_LocalLegend_ListenCorrectInteract</a>",
      "valuePerStack": {
        "MDF_SuccessDamageRatio": {
          "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
          "displayLines": "{[SkillP01[0]]}",
          "constants": [],
          "variables": [
            "{[SkillP01[0]]}"
          ]
        }
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Enemy ID",
        "ID": 402301100,
        "target": {
          "name": "Target Name",
          "target": "Monster_W4_Griffin_00_LocalLegend"
        },
        "characterName": null
      },
      "passed": [
        {
          "name": "Random Event",
          "isUnique": true,
          "odds": [
            1,
            1
          ],
          "execute": [
            {
              "name": "Sequence Event",
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W4_Mascot_Ability02_Insert_Part01",
                  "priorityTag": "MonsterBattleCry",
                  "allowAbilityTriggers": false
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "AISequence",
                  "value": 2
                }
              ]
            },
            {
              "name": "Sequence Event",
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W4_Mascot_Ability03_Insert_Part01",
                  "priorityTag": "MonsterBattleCry",
                  "allowAbilityTriggers": false
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "AISequence",
                  "value": 3
                }
              ]
            }
          ]
        }
      ],
      "failed": [
        {
          "name": "Inject Ability Use",
          "abilityName": "Monster_W4_Mascot_Ability02_Insert_Part01",
          "priorityTag": "MonsterBattleCry",
          "allowAbilityTriggers": false
        },
        {
          "name": "Define Custom Variable",
          "variableName": "AISequence",
          "value": 2
        }
      ]
    }
  ],
  "whenAdded": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "value1": "Team_Row_Count",
        "compareType": "=",
        "value2": 1,
        "invertCondition": true
      },
      "passed": [
        {
          "name": "Assign Target Battle-Location",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "row": 1
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-71309847\">Enemy_W4_Mascot_LocalLegend_DeathRattle</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1166907060\">Enemy_Standard_MuteHitFly</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1781853909\">Enemy_W4_Mascot_LocalLegend_MuteBreak</a>"
    }
  ],
  "references": []
}