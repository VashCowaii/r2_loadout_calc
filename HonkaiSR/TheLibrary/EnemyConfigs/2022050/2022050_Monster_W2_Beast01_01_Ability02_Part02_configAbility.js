const configAbility = {
  "fileName": "2022050_Monster_W2_Beast01_01_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{All Team Members}}"
        },
        "value1": "TeamCharacterCount",
        "compareType": "<=",
        "value2": 4
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "team": "Enemy Team",
            "location": "Left"
          },
          "passed": [
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                "displayLines": "{[Skill02[0]]}",
                "constants": [],
                "variables": [
                  "{[Skill02[0]]}"
                ]
              },
              "refreshPositions": false,
              "propertyListIherit": [
                "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
              ],
              "enemyList": [
                {
                  "name": "Create Enemy from Custom",
                  "value": "SummonID01",
                  "summonLocation": "First"
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                "displayLines": "{[Skill02[0]]}",
                "constants": [],
                "variables": [
                  "{[Skill02[0]]}"
                ]
              },
              "refreshPositions": false,
              "propertyListIherit": [
                "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
              ],
              "enemyList": [
                {
                  "name": "Create Enemy from Custom",
                  "value": "SummonID01",
                  "summonLocation": "Last"
                }
              ]
            }
          ]
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": []
}