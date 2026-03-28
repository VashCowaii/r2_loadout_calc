const configAbility = {
  "fileName": "3002020_Monster_W1_Mecha01_02_Ability02_Insert_Part01",
  "skillTrigger": "Skill02",
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
          "name": "Animation Task"
        },
        {
          "name": "Animation Task"
        },
        {
          "name": "Animation Task",
          "passed": [
            {
              "name": "Update Energy",
              "on": {
                "name": "Target Name",
                "target": "{{Player Team(Exclude Memosprites)v2}}"
              },
              "value": {
                "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                "displayLines": "{[Skill02[0]]}",
                "constants": [],
                "variables": [
                  "{[Skill02[0]]}"
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