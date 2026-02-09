const configAbility = {
  "fileName": "1004025_Monster_W1_Gepard_IF_03_PassiveAbility_Switch",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Deleted bullshit",
    {
      "name": "Define Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Level Entity}}"
      },
      "scope": "TargetEntity",
      "variableName": "isMainAttack",
      "value": 1
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All(with Unselectable)}}"
      },
      "searchRandom": true,
      "includeDyingTargets": true,
      "maxTargets": 1,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-1546214500\">Monster_W1_Bronya_IF_02_PartController</a>"
      },
      "ifTargetFound": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-129923965\">MoreOneMorePerTurn</a>"
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
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"479955832\">Enemy_W1_Bronya_IF_02_WeaknessProtect</a>"
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "variableName": "AIFlag",
          "value": 0
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "PhaseFlag",
        "compareType": "=",
        "value2": 1
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
        }
      ],
      "failed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-129923965\">MoreOneMorePerTurn</a>"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "OR",
        "conditionList": [
          {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Modifier Holder}}"
            },
            "flagName": "Break"
          },
          {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Modifier Holder}}"
            },
            "flagName": "STAT_CTRL"
          },
          {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Modifier Holder}}"
            },
            "flagName": "DisableAction"
          }
        ]
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "PhaseFlag",
        "compareType": "=",
        "value2": 1
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-59384693\">Enemy_W1_Gepard_IF_03_EnhancePerTurn</a>[<span class=\"descriptionNumberColor\">Will of Steel</span>]",
          "valuePerStack": {
            "MDF_SpeedUpPerLayer": {
              "operator": "Variables[0] ({[SkillP04[0]]}) || RETURN",
              "displayLines": "{[SkillP04[0]]}",
              "constants": [],
              "variables": [
                "{[SkillP04[0]]}"
              ]
            },
            "MDF_AttackUpPerLayer": {
              "operator": "Variables[0] ({[SkillP04[1]]}) || RETURN",
              "displayLines": "{[SkillP04[1]]}",
              "constants": [],
              "variables": [
                "{[SkillP04[1]]}"
              ]
            }
          }
        }
      ],
      "failed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-59384693\">Enemy_W1_Gepard_IF_03_EnhancePerTurn</a>[<span class=\"descriptionNumberColor\">Will of Steel</span>]",
          "valuePerStack": {
            "MDF_SpeedUpPerLayer": {
              "operator": "Variables[0] ({[SkillP04[2]]}) || RETURN",
              "displayLines": "{[SkillP04[2]]}",
              "constants": [],
              "variables": [
                "{[SkillP04[2]]}"
              ]
            },
            "MDF_AttackUpPerLayer": {
              "operator": "Variables[0] ({[SkillP04[3]]}) || RETURN",
              "displayLines": "{[SkillP04[3]]}",
              "constants": [],
              "variables": [
                "{[SkillP04[3]]}"
              ]
            }
          }
        }
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1695607247\">Enemy_W1_Bronya_IF_02_AssistantSpeed</a>[<span class=\"descriptionNumberColor\">Defense</span>]"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "AIFlag",
      "value": 1
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1559306113\">Enemy_W1_Gepard_IF_03_WeaknessProtect</a>"
    },
    {
      "name": "Action Advance/Delay",
      "advanceType": "Set",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "multiBase": 0.5
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{All Team Members(Exclude Self)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"946500704\">Enemy_W1_Bronya_IF_02_MainHaloEffect</a>[<span class=\"descriptionNumberColor\">Charge</span>]"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"946500704\">Enemy_W1_Bronya_IF_02_MainHaloEffect</a>[<span class=\"descriptionNumberColor\">Charge</span>]"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "searchRandom": true,
      "maxTargets": 1,
      "conditions": {
        "name": "Enemy ID",
        "ID": 1004032,
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "characterName": "Bronya (Illusion)"
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1695607247\">Enemy_W1_Bronya_IF_02_AssistantSpeed</a>[<span class=\"descriptionNumberColor\">Defense</span>]",
          "valuePerStack": {
            "MDF_SpeedDownRatio": {
              "operator": "Variables[0] ({[SkillP03[4]]}) || RETURN",
              "displayLines": "{[SkillP03[4]]}",
              "constants": [],
              "variables": [
                "{[SkillP03[4]]}"
              ]
            }
          }
        }
      ]
    }
  ],
  "references": []
}