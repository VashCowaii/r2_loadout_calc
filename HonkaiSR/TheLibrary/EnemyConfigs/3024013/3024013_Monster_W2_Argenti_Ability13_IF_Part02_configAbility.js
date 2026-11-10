const configAbility = {
  "fileName": "3024013_Monster_W2_Argenti_Ability13_IF_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "value": 1,
      "variableName": "Sword_FirstFlag"
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
              "displayLines": "SummonID01"
            },
            "DelayRatio04": {
              "displayLines": "{[Skill13[0]]}"
            },
            "DelayRatio02": {
              "displayLines": "{[Skill13[3]]}"
            },
            "DelayRatio01": {
              "displayLines": "{[Skill13[2]]}"
            },
            "DelayRatio03": {
              "displayLines": "{[Skill13[1]]}"
            }
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1462831775\">Argenti_SummonAllMonsters</a>",
          "variables": {
            "SummonMonsterID": {
              "displayLines": "SummonID01"
            },
            "DelayRatio04": {
              "displayLines": "{[Skill13[1]]}"
            },
            "DelayRatio02": {
              "displayLines": "{[Skill13[2]]}"
            },
            "DelayRatio01": {
              "displayLines": "{[Skill13[3]]}"
            },
            "DelayRatio03": {
              "displayLines": "{[Skill13[0]]}"
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
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}