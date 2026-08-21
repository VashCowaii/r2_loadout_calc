const configAbility = {
  "fileName": "5012092_Monster_W3_Clock_03_PassiveAbility01_Part01_FateRin",
  "childAbilityList": [
    "5012092_Monster_W3_Clock_03_PassiveAbility01_Part01_FateRin"
  ],
  "skillTrigger": "PassiveSkill01",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "IF",
      "conditions": {
        "name": "OR",
        "conditionList": [
          {
            "name": "Stage ID",
            "ID": 429205,
            "compareType": "=",
            "characterName": null
          },
          {
            "name": "Stage ID",
            "ID": 429215,
            "compareType": "=",
            "characterName": null
          }
        ]
      },
      "passed": [
        {
          "name": "UI Display Event",
          "popUpText": "Attack Circe's mechatron and redirect her fury toward the enemy!"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "#PassiveSkill01_P1_Mark",
        "compareType": "=",
        "value2": 0
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"756663200\">Enemy_W3_Clock_03_TargetSelect_ToFriend</a>"
        }
      ],
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "target2": {
              "name": "Target Name",
              "target": "{{Enemy Team All}}.[[index2]]"
            }
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"756663200\">Enemy_W3_Clock_03_TargetSelect_ToFriend</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-481047812\">Enemy_W3_Clock_03_TargetSelect</a>",
              "valuePerStack": {
                "TargetMark": 1
              }
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1241100156\">Enemy_W3_Clock_03_TargetSelect_ToEnemy</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-481047812\">Enemy_W3_Clock_03_TargetSelect</a>",
              "valuePerStack": {
                "TargetMark": 0
              }
            }
          ]
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}