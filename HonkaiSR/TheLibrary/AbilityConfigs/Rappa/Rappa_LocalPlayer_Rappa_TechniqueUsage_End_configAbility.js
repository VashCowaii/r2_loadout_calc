const configAbility = {
  "fileName": "Rappa_LocalPlayer_Rappa_TechniqueUsage_End",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Compare: Variable",
            "value1": "Rappa_00_Achievenment",
            "compareType": "<=",
            "value2": 0
          },
          {
            "name": "Has Modifier (OVERWORLD)",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1581434995\">ADV_StageAbility_Maze_Achievenment</a>",
            "invertCondition": true
          }
        ]
      }
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1581434995\">ADV_StageAbility_Maze_Achievenment</a>"
    },
    "Submit Technique Use",
    {
      "name": "Remove Overworld Entity",
      "summon": {
        "name": "Add Target by Summoned Units",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "summonID": 13171
      }
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1835153663\">ADV_Modifier_Maze_Rappa_HolyShield</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Move Input Active (Overworld)"
      }
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": null,
      "overworldID": 131702
    }
  ],
  "references": [],
  "triggerType": "Free",
  "targetObjectData": {
    "primaryTarget": "Skill Point User(Or NONE)"
  }
}