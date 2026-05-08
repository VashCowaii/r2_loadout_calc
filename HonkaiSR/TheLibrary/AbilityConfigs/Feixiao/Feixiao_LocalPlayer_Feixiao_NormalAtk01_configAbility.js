const configAbility = {
  "fileName": "Feixiao_LocalPlayer_Feixiao_NormalAtk01",
  "skillTrigger": "NormalAtk",
  "abilityType": "Basic ATK",
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier (OVERWORLD)",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"769308695\">ADV_StageAbility_Maze_Feixiao</a>"
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "CDF_IsEnterBattle",
          "value": 0
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1609663662\">ADV_StageAbility_Maze_Feixiao_Attack_HolyShield</a>",
          "counter": 1,
          "duration": 1
        },
        {
          "name": "IF",
          "conditions": "Ability Has a Target"
        },
        {
          "name": "Create Overworld Entity",
          "summonID": 12202
        },
        "Deleted bullshit",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-147386284\">ADV_StageAbility_Maze_Feixiao_Visual</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": null,
          "overworldID": 122004
        },
        {
          "name": "Remove Overworld Entity",
          "summon": {
            "name": "Add Target by Summoned Units",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "summonID": 12201
          }
        },
        {
          "name": "IF",
          "conditions": "Ability Has a Target"
        },
        {
          "name": "Overworld Attack Instance",
          "onBattle": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": null,
              "ID": "122002(SkillMaze)"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "CDF_IsEnterBattle",
              "value": 1
            }
          ],
          "entryTargetType": "AllHitTarget"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "CDF_IsEnterBattle",
            "compareType": "<=",
            "value2": 0
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": null,
          "overworldID": 122001
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1609663662\">ADV_StageAbility_Maze_Feixiao_Attack_HolyShield</a>"
        }
      ],
      "failed": [
        {
          "name": "IF",
          "conditions": "Ability Has a Target",
          "passed": [
            "Deleted bullshit",
            {
              "name": "Overworld Attack Instance"
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "In Motion (Overworld)",
                "flag": "FastRun"
              },
              "passed": [
                "Deleted bullshit"
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "In Motion (Overworld)",
                    "flag": "Run"
                  },
                  "passed": [
                    "Deleted bullshit"
                  ],
                  "failed": [
                    "Deleted bullshit"
                  ]
                }
              ]
            },
            {
              "name": "Overworld Attack Instance"
            }
          ]
        }
      ]
    }
  ],
  "onAbortReg": [
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1609663662\">ADV_StageAbility_Maze_Feixiao_Attack_HolyShield</a>"
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "Skill Point User(Or NONE)"
  },
  "realTargetData": {
    "primaryTarget": "Select Hostile Target"
  }
}