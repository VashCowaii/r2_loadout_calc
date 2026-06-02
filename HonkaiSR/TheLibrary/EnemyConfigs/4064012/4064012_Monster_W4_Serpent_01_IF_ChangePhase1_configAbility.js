const configAbility = {
  "fileName": "4064012_Monster_W4_Serpent_01_IF_ChangePhase1",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Dispel Debuffs",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "silent": true
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
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"542143301\">Monster_ChangePhase</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1404590263\">Standard_Endurance</a>"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "ChangePhase",
      "value": 1
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "AIFlag",
      "value": 1
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "Phase_Flag",
      "value": 2
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1006714510\">Enemy_W4_Serpent_01_IF_OffTeamFormation</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1424767145\">Enemy_W4_Serpent_01_IF_OffTeamController</a>"
    },
    {
      "name": "Create Enemies",
      "delayPercent": {
        "operator": "Variables[0] ({[SkillP03[0]]}) || RETURN",
        "displayLines": "{[SkillP03[0]]}",
        "constants": [],
        "variables": [
          "{[SkillP03[0]]}"
        ]
      },
      "enemyList": [
        {
          "name": "Enemy Entry",
          "enemyID": {
            "operator": "Variables[0] (SummonList_ADF_4) || RETURN",
            "displayLines": "SummonList_ADF_4",
            "constants": [],
            "variables": [
              "SummonList_ADF_4"
            ]
          },
          "locationType": "BeforeCaster"
        }
      ]
    },
    {
      "name": "Create Enemies",
      "delayPercent": {
        "operator": "Variables[0] ({[SkillP03[1]]}) || RETURN",
        "displayLines": "{[SkillP03[1]]}",
        "constants": [],
        "variables": [
          "{[SkillP03[1]]}"
        ]
      },
      "enemyList": [
        {
          "name": "Enemy Entry",
          "enemyID": {
            "operator": "Variables[0] (SummonList_ADF_3) || RETURN",
            "displayLines": "SummonList_ADF_3",
            "constants": [],
            "variables": [
              "SummonList_ADF_3"
            ]
          },
          "locationType": "First"
        }
      ]
    },
    {
      "name": "Create Enemies",
      "delayPercent": {
        "operator": "Variables[0] ({[SkillP03[2]]}) || RETURN",
        "displayLines": "{[SkillP03[2]]}",
        "constants": [],
        "variables": [
          "{[SkillP03[2]]}"
        ]
      },
      "enemyList": [
        {
          "name": "Enemy Entry",
          "enemyID": {
            "operator": "Variables[0] (SummonList_ADF_3) || RETURN",
            "displayLines": "SummonList_ADF_3",
            "constants": [],
            "variables": [
              "SummonList_ADF_3"
            ]
          },
          "locationType": "Last"
        }
      ]
    },
    {
      "name": "Create Enemies",
      "delayPercent": {
        "operator": "Variables[0] ({[SkillP03[3]]}) || RETURN",
        "displayLines": "{[SkillP03[3]]}",
        "constants": [],
        "variables": [
          "{[SkillP03[3]]}"
        ]
      },
      "enemyList": [
        {
          "name": "Enemy Entry",
          "enemyID": {
            "operator": "Variables[0] (SummonList_ADF_2) || RETURN",
            "displayLines": "SummonList_ADF_2",
            "constants": [],
            "variables": [
              "SummonList_ADF_2"
            ]
          },
          "locationType": "First"
        }
      ]
    },
    {
      "name": "Create Enemies",
      "delayPercent": {
        "operator": "Variables[0] ({[SkillP03[4]]}) || RETURN",
        "displayLines": "{[SkillP03[4]]}",
        "constants": [],
        "variables": [
          "{[SkillP03[4]]}"
        ]
      },
      "enemyList": [
        {
          "name": "Enemy Entry",
          "enemyID": {
            "operator": "Variables[0] (SummonList_ADF_2) || RETURN",
            "displayLines": "SummonList_ADF_2",
            "constants": [],
            "variables": [
              "SummonList_ADF_2"
            ]
          },
          "locationType": "Last"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"833279006\">Enemy_W4_Serpent_01_IF_AbilityEX03</a>"
      },
      "passed": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Compare: Monster Rank",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "compareType": "=",
            "value2": 3
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1759595362\">Enemy_W4_Serpent_01_IF_AbilityEX03_ShareHP</a>",
              "valuePerStack": {
                "MDF_MaxHPAddRatio": {
                  "operator": "Variables[0] ({[SkillEX03[0]]}) || RETURN",
                  "displayLines": "{[SkillEX03[0]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillEX03[0]]}"
                  ]
                }
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
        "target": "{{Caster's Minions}}"
      },
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]",
        "invertCondition": true
      }
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "conditions": {
        "name": "Enemy ID",
        "ID": {
          "operator": "Variables[0] (SummonList_ADF_3) || RETURN",
          "displayLines": "SummonList_ADF_3",
          "constants": [],
          "variables": [
            "SummonList_ADF_3"
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"312693527\">Enemy_W4_Serpent_01_IF_ServantHideAbilityDisplayInfo</a>"
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]",
        "invertCondition": true
      }
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]",
        "invertCondition": true
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-874509273\">Enemy_W4_Serpent_01_IF_Summon_SpecialLimboController</a>[<span class=\"descriptionNumberColor\">Monoform Merger</span>]"
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}