const configAbility = {
  "fileName": "4044010_Monster_W4_Theoroi_Ability05_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "OR",
        "conditionList": [
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-2031587797\">Monster_W4_Theoroi_Main</a>"
          },
          {
            "name": "Stage Type",
            "stageType": "Challenge"
          },
          {
            "name": "Stage Type",
            "stageType": "VerseSimulation"
          },
          {
            "name": "Stage Type",
            "stageType": "StrongChallengeActivity"
          },
          {
            "name": "Stage Type",
            "stageType": "RogueRelic"
          }
        ]
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-2031587797\">Monster_W4_Theoroi_Main</a>"
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "MainCount",
            "compareType": "=",
            "value2": 0
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "MainCount",
              "value": 1
            }
          ]
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Flag",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "flagName": "STAT_CTRL"
      },
      "passed": [
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "typeOverride": "Unknown",
          "toRemove": [
            "STAT_CTRL"
          ]
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Flag",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "flagName": "Break"
      },
      "passed": [
        {
          "name": "Exit Broken-State",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Reset Toughness",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "variableName": "InSkill05",
      "value": 1
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"534638248\">Monster_W4_Theoroi_Part1</a>[<span class=\"descriptionNumberColor\">To Logos</span>]"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "searchRandom": true,
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Compare: Monster Rank",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "compareType": "<=",
            "value2": 2
          },
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
          },
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Summoner of Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1225407383\">Monster_W4_Theoroi_Passive</a>"
          }
        ]
      },
      "ifTargetFound": [
        {
          "name": "Mark Entity For Immediate Death",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          }
        },
        {
          "name": "Force Entity Death",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          }
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"584971105\">Monster_W4_Theoroi_Part2</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Check Boolean Value",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "value": "InSkill05",
        "invertCondition": true
      },
      "passed": [
        {
          "name": "Create Enemies",
          "delayPercent": {
            "operator": "Variables[0] ({[PassiveSkill03[1]]}) || RETURN",
            "displayLines": "{[PassiveSkill03[1]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill03[1]]}"
            ]
          },
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__104) || RETURN",
                "displayLines": "ENEMIES_OBJECT_UNUSED__104",
                "constants": [],
                "variables": [
                  "ENEMIES_OBJECT_UNUSED__104"
                ]
              },
              "locationType": "BeforeCaster"
            }
          ]
        },
        {
          "name": "Create Enemies",
          "delayPercent": {
            "operator": "Variables[0] ({[PassiveSkill03[2]]}) || RETURN",
            "displayLines": "{[PassiveSkill03[2]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill03[2]]}"
            ]
          },
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__104) || RETURN",
                "displayLines": "ENEMIES_OBJECT_UNUSED__104",
                "constants": [],
                "variables": [
                  "ENEMIES_OBJECT_UNUSED__104"
                ]
              },
              "locationType": "First"
            }
          ]
        },
        {
          "name": "Create Enemies",
          "delayPercent": {
            "operator": "Variables[0] ({[PassiveSkill03[3]]}) || RETURN",
            "displayLines": "{[PassiveSkill03[3]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill03[3]]}"
            ]
          },
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__103) || RETURN",
                "displayLines": "ENEMIES_OBJECT_UNUSED__103",
                "constants": [],
                "variables": [
                  "ENEMIES_OBJECT_UNUSED__103"
                ]
              },
              "locationType": "AfterCaster"
            }
          ]
        },
        {
          "name": "Create Enemies",
          "delayPercent": {
            "operator": "Variables[0] ({[PassiveSkill03[4]]}) || RETURN",
            "displayLines": "{[PassiveSkill03[4]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill03[4]]}"
            ]
          },
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__104) || RETURN",
                "displayLines": "ENEMIES_OBJECT_UNUSED__104",
                "constants": [],
                "variables": [
                  "ENEMIES_OBJECT_UNUSED__104"
                ]
              },
              "locationType": "Last"
            }
          ]
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Battle Event List}}"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"746359205\">Modifier_BattleEventAbility_SummonMonster</a>"
      },
      "ifTargetFound": [
        {
          "name": "Force Entity Death",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          }
        }
      ]
    },
    {
      "name": "Action Advance/Delay",
      "advanceType": "Set",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "multiBase": 0
    },
    {
      "name": "Define Custom Variable",
      "variableName": "AIFlag",
      "value": 1
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1039726651\">Monster_W4_Theoroi_Destruction_Self</a>[<span class=\"descriptionNumberColor\">Loading: Mythos</span>]",
      "valuePerStack": {
        "MDF_MaxEntityCount": {
          "operator": "Variables[0] ({[PassiveSkill02[2]]}) || RETURN",
          "displayLines": "{[PassiveSkill02[2]]}",
          "constants": [],
          "variables": [
            "{[PassiveSkill02[2]]}"
          ]
        }
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"2001837227\">Monster_W4_Theoroi_DamageTakenUp</a>[<span class=\"descriptionNumberColor\">Corporeal</span>]",
      "valuePerStack": {
        "MDF_DamageTakenUpRatio_PerLayer": {
          "operator": "Variables[0] ({[Skill16[1]]}) || RETURN",
          "displayLines": "{[Skill16[1]]}",
          "constants": [],
          "variables": [
            "{[Skill16[1]]}"
          ]
        }
      },
      "addStacksPerTrigger": 1
    },
    {
      "name": "Define Custom Variable",
      "variableName": "InSkill05",
      "value": 0
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-86387576\">Monster_W4_Theoroi_ReloadControl</a>",
      "valuePerStack": {
        "MDF_DamageUpRatio": {
          "operator": "Variables[0] ({[PassiveSkill03[0]]}) || RETURN",
          "displayLines": "{[PassiveSkill03[0]]}",
          "constants": [],
          "variables": [
            "{[PassiveSkill03[0]]}"
          ]
        }
      }
    },
    {
      "name": "Add Battle Event",
      "teamName": "Enemy Team",
      "eventID": 20028,
      "variables": null
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-2031587797\">Monster_W4_Theoroi_Main</a>"
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "MainCount",
            "compareType": "=",
            "value2": 1
          }
        }
      ]
    }
  ],
  "references": []
}