const configAbility = {
  "fileName": "2035012_Monster_W2_Feixiao_IF_Passive01",
  "skillTrigger": "PassiveSkill01",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Level Entity}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1393128044\">Monster_W2_Feixiao_IF_OnLevel</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"2029364550\">Monster_W2_Feixiao_IF_PartController</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-352783921\">Monster_W2_Feixiao_IF_BattleEventController</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1540195907\">Monster_W2_Feixiao_Part2Effect</a>"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{All Unselectable Targets, All Team Members(Exclude Self)}}"
      },
      "conditions": {
        "name": "Is Part Of Team",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "team": "Enemy Team"
      },
      "ifTargetFound": [
        {
          "name": "Create Shared HP Group",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "subTarget": {
            "name": "Target Name",
            "target": "{{Parameter Target List}}"
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
      "modifier": "<a class=\"gModGreen\" id=\"1680868349\">Monster_W2_Feixiao_IF_Status</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"246004318\">Monster_W2_Feixiao_IF_BreakController</a>"
    },
    {
      "name": "Set Enemy Phase"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "conditions": {
        "name": "OR",
        "conditionList": [
          {
            "name": "Enemy ID",
            "ID": 203204,
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": null,
            "isCompareUniqueID": true
          },
          {
            "name": "Enemy ID",
            "ID": 203205,
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": null,
            "isCompareUniqueID": true
          },
          {
            "name": "Enemy ID",
            "ID": 203206,
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": null,
            "isCompareUniqueID": true
          }
        ]
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1262406841\">Monster_W2_Feixiao_IF_SummonMinions</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "Enemy ID",
        "ID": 203204,
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "characterName": null,
        "isCompareUniqueID": true
      },
      "ifTargetFound": [
        {
          "name": "Action Advance/Delay",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "advanceType": "Set",
          "multiAdd": "({[PassiveSkill02[3]]} - 1)",
          "isStartingDelay": true
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "Enemy ID",
        "ID": 203205,
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "characterName": null,
        "isCompareUniqueID": true
      },
      "ifTargetFound": [
        {
          "name": "Action Advance/Delay",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "advanceType": "Set",
          "multiAdd": "({[PassiveSkill02[4]]} - 1)",
          "isStartingDelay": true
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "Enemy ID",
        "ID": 203206,
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "characterName": null,
        "isCompareUniqueID": true
      },
      "ifTargetFound": [
        {
          "name": "Action Advance/Delay",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "advanceType": "Set",
          "multiAdd": "{[PassiveSkill02[5]]}",
          "isStartingDelay": true
        }
      ]
    },
    {
      "name": "Add Battle Event",
      "teamName": "Neutral Team",
      "eventID": 20023,
      "variables": null,
      "whenCreated": [
        {
          "name": "Assign Unique Name",
          "uniqueName": "SelectTarget",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1757126586\">Monster_W2_Feixiao_IF_PickUpMessage</a>"
        },
        "Show BattleEvent Button"
      ]
    }
  ],
  "whenAdded": [
    {
      "name": "Set Hit-Class"
    },
    {
      "name": "Preload Battle Event(s)",
      "eventID": [
        20021
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "HardLevel",
        "compareType": "=",
        "value2": 1
      },
      "passed": [
        {
          "name": "Create Enemies",
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": 203302200,
              "locationType": "BeforeCaster"
            }
          ]
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "HardLevel",
        "compareType": "=",
        "value2": 2
      },
      "passed": [
        {
          "name": "Create Enemies",
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": 203302200,
              "locationType": "BeforeCaster"
            }
          ]
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "HardLevel",
        "compareType": "=",
        "value2": 3
      },
      "passed": [
        {
          "name": "Create Enemies",
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": 203302200,
              "locationType": "BeforeCaster"
            }
          ]
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "HardLevel",
        "compareType": "=",
        "value2": 4
      },
      "passed": [
        {
          "name": "Create Enemies",
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": 203302200,
              "locationType": "BeforeCaster"
            }
          ]
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Recently Summoned Enemies}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"72353298\">Standard_StrongChallengeEX_SuperArmorController_MultiNew</a>",
      "valuePerStack": {
        "MDF_IF_BOSS_BreakDelay_01": {
          "operator": "Variables[0] ({[SkillEX06[0]]}) || RETURN",
          "displayLines": "{[SkillEX06[0]]}",
          "constants": [],
          "variables": [
            "{[SkillEX06[0]]}"
          ]
        },
        "MDF_IF_BOSS_BreakDelay_02": {
          "operator": "Variables[0] ({[SkillEX06[1]]}) || RETURN",
          "displayLines": "{[SkillEX06[1]]}",
          "constants": [],
          "variables": [
            "{[SkillEX06[1]]}"
          ]
        },
        "MDF_IF_BOSS_BreakDelay_03": {
          "operator": "Variables[0] ({[SkillEX06[2]]}) || RETURN",
          "displayLines": "{[SkillEX06[2]]}",
          "constants": [],
          "variables": [
            "{[SkillEX06[2]]}"
          ]
        },
        "MDF_IF_BOSS_BreakDelay_04": {
          "operator": "Variables[0] ({[SkillEX06[3]]}) || RETURN",
          "displayLines": "{[SkillEX06[3]]}",
          "constants": [],
          "variables": [
            "{[SkillEX06[3]]}"
          ]
        },
        "MDF_IF_BOSS_WeaknessDMGUpRatio": {
          "operator": "Variables[0] ({[SkillEX01[1]]}) || RETURN",
          "displayLines": "{[SkillEX01[1]]}",
          "constants": [],
          "variables": [
            "{[SkillEX01[1]]}"
          ]
        },
        "MDF_IF_BOSS_Standard_Defence": {
          "operator": "Variables[0] ({[SkillEX01[0]]}) || RETURN",
          "displayLines": "{[SkillEX01[0]]}",
          "constants": [],
          "variables": [
            "{[SkillEX01[0]]}"
          ]
        }
      },
      "casterAssign": "TargetSelf"
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}