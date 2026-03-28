const configAbility = {
  "fileName": "3002020_Monster_W1_Mecha01_02_Ability03_Insert_Part01",
  "skillTrigger": "Skill03",
  "abilityType": "Basic ATK",
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Deleted bullshit",
    {
      "name": "Animation Event",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "state": "Skill02",
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
              "modifier": "<a class=\"gModGreen\" id=\"-590056738\">W1_Mecha01_02_BattleScore1</a>"
            }
          ]
        },
        {
          "name": "Animation Task"
        },
        {
          "name": "Animation Task",
          "passed": [
            {
              "name": "Skill Points Modification",
              "adjustmentValue": {
                "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
                "displayLines": "{[Skill03[0]]}",
                "constants": [],
                "variables": [
                  "{[Skill03[0]]}"
                ]
              },
              "adjustmentType": "+"
            },
            {
              "name": "Update Energy",
              "on": {
                "name": "Target Name",
                "target": "{{Player Team(Exclude Memosprites)v2}}"
              },
              "value": {
                "operator": "Variables[0] ({[Skill03[1]]}) || RETURN",
                "displayLines": "{[Skill03[1]]}",
                "constants": [],
                "variables": [
                  "{[Skill03[1]]}"
                ]
              },
              "isFixed": "* ERR"
            }
          ]
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}