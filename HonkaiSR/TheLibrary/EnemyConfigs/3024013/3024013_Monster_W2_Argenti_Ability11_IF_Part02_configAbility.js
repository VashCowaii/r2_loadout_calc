const configAbility = {
  "fileName": "3024013_Monster_W2_Argenti_Ability11_IF_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
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
              "displayLines": "SummonID02"
            },
            "DelayRatio04": {
              "displayLines": "{[Skill11[0]]}"
            },
            "DelayRatio02": {
              "displayLines": "{[Skill11[3]]}"
            },
            "DelayRatio01": {
              "displayLines": "{[Skill11[2]]}"
            },
            "DelayRatio03": {
              "displayLines": "{[Skill11[1]]}"
            }
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1462831775\">Argenti_SummonAllMonsters</a>",
          "variables": {
            "SummonMonsterID": {
              "displayLines": "SummonID02"
            },
            "DelayRatio04": {
              "displayLines": "{[Skill11[1]]}"
            },
            "DelayRatio02": {
              "displayLines": "{[Skill11[2]]}"
            },
            "DelayRatio01": {
              "displayLines": "{[Skill11[3]]}"
            },
            "DelayRatio03": {
              "displayLines": "{[Skill11[0]]}"
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
      "modifier": "<a class=\"gModGreen\" id=\"-309668248\">Enemy_W2_Argenti_IF_Protect</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-169910900\">Enemy_W2_Argenti_IF_EX_PowerAdd</a>"
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}