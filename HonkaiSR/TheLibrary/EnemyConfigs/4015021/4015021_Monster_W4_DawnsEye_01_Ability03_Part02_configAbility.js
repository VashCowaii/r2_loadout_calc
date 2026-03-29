const configAbility = {
  "fileName": "4015021_Monster_W4_DawnsEye_01_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-459185506\">Enemy_W4_DawnsEye_01_StandbyEffect</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-752624700\">Enemy_W4_DawnsEye_01_MainStory</a>"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1301130578\">Enemy_W4_DawnsEye_01_Ability03</a>"
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-439718905\">Enemy_W4_DawnsEye_01_Ability03_Charge</a>[<span class=\"descriptionNumberColor\">The Dark Tides Cometh</span>]"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All(with Unselectable)}}"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "Enemy ID",
        "ID": {
          "operator": "Variables[0] (PartEntity1_MonsterID) || RETURN",
          "displayLines": "PartEntity1_MonsterID",
          "constants": [],
          "variables": [
            "PartEntity1_MonsterID"
          ]
        },
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "characterName": null
      },
      "ifTargetFound": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1128353279\">Enemy_W4_DawnsEye_PartBlock</a>[<span class=\"descriptionNumberColor\">Marine Layer</span>]"
        },
        {
          "name": "Remove Modifier Behavior Flag(s)",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "flagNames": []
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "flagName": "Break"
          },
          "passed": [
            {
              "name": "Reset Toughness",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            },
            {
              "name": "Exit Broken-State",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All(with Unselectable)}}"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "Enemy ID",
        "ID": {
          "operator": "Variables[0] (PartEntity3_MonsterID) || RETURN",
          "displayLines": "PartEntity3_MonsterID",
          "constants": [],
          "variables": [
            "PartEntity3_MonsterID"
          ]
        },
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "characterName": null
      },
      "ifTargetFound": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1128353279\">Enemy_W4_DawnsEye_PartBlock</a>[<span class=\"descriptionNumberColor\">Marine Layer</span>]"
        },
        {
          "name": "Remove Modifier Behavior Flag(s)",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "flagNames": []
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "flagName": "Break"
          },
          "passed": [
            {
              "name": "Reset Toughness",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            },
            {
              "name": "Exit Broken-State",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
    },
    {
      "name": "Assign Advance/Delay to Current Ability Use",
      "adjustmentValue": {
        "operator": "Variables[0] ({[Skill03P3[0]]}) || RETURN",
        "displayLines": "{[Skill03P3[0]]}",
        "constants": [],
        "variables": [
          "{[Skill03P3[0]]}"
        ]
      },
      "adjustmentType": "Advance"
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1301130578\">Enemy_W4_DawnsEye_01_Ability03</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-439718905\">Enemy_W4_DawnsEye_01_Ability03_Charge</a>[<span class=\"descriptionNumberColor\">The Dark Tides Cometh</span>]",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "The next attack will inflict \"Unmaking Ashes: Godsfall\" on all allies.",
      "type": "Other",
      "statusName": "The Dark Tides Cometh"
    }
  ]
}