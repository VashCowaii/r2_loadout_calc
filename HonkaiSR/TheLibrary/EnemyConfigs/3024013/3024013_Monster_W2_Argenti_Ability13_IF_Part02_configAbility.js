const configAbility = {
  "fileName": "3024013_Monster_W2_Argenti_Ability13_IF_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "variableName": "Sword_FirstFlag",
      "value": 1
    },
    {
      "name": "Random Event",
      "odds": [
        0.5,
        0.5
      ],
      "execute": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1462831775\">Argenti_SummonAllMonsters</a>",
          "variables": {
            "SummonMonsterID": {
              "operator": "Variables[0] (SummonID01) || RETURN",
              "displayLines": "SummonID01",
              "constants": [],
              "variables": [
                "SummonID01"
              ]
            },
            "DelayRatio04": {
              "operator": "Variables[0] ({[Skill13[0]]}) || RETURN",
              "displayLines": "{[Skill13[0]]}",
              "constants": [],
              "variables": [
                "{[Skill13[0]]}"
              ]
            },
            "DelayRatio02": {
              "operator": "Variables[0] ({[Skill13[3]]}) || RETURN",
              "displayLines": "{[Skill13[3]]}",
              "constants": [],
              "variables": [
                "{[Skill13[3]]}"
              ]
            },
            "DelayRatio01": {
              "operator": "Variables[0] ({[Skill13[2]]}) || RETURN",
              "displayLines": "{[Skill13[2]]}",
              "constants": [],
              "variables": [
                "{[Skill13[2]]}"
              ]
            },
            "DelayRatio03": {
              "operator": "Variables[0] ({[Skill13[1]]}) || RETURN",
              "displayLines": "{[Skill13[1]]}",
              "constants": [],
              "variables": [
                "{[Skill13[1]]}"
              ]
            }
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1462831775\">Argenti_SummonAllMonsters</a>",
          "variables": {
            "SummonMonsterID": {
              "operator": "Variables[0] (SummonID01) || RETURN",
              "displayLines": "SummonID01",
              "constants": [],
              "variables": [
                "SummonID01"
              ]
            },
            "DelayRatio04": {
              "operator": "Variables[0] ({[Skill13[1]]}) || RETURN",
              "displayLines": "{[Skill13[1]]}",
              "constants": [],
              "variables": [
                "{[Skill13[1]]}"
              ]
            },
            "DelayRatio02": {
              "operator": "Variables[0] ({[Skill13[2]]}) || RETURN",
              "displayLines": "{[Skill13[2]]}",
              "constants": [],
              "variables": [
                "{[Skill13[2]]}"
              ]
            },
            "DelayRatio01": {
              "operator": "Variables[0] ({[Skill13[3]]}) || RETURN",
              "displayLines": "{[Skill13[3]]}",
              "constants": [],
              "variables": [
                "{[Skill13[3]]}"
              ]
            },
            "DelayRatio03": {
              "operator": "Variables[0] ({[Skill13[0]]}) || RETURN",
              "displayLines": "{[Skill13[0]]}",
              "constants": [],
              "variables": [
                "{[Skill13[0]]}"
              ]
            }
          }
        }
      ]
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"-1119292672\">Argenti_AddWeaknessToAllSummons</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1645398218\">Enemy_W2_Argenti_IF_EX_PowerAddMax</a>"
    },
    "Trigger: Ability End"
  ],
  "references": []
}