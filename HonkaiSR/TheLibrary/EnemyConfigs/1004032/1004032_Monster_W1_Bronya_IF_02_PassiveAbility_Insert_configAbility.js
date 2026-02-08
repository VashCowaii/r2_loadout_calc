const configAbility = {
  "fileName": "1004032_Monster_W1_Bronya_IF_02_PassiveAbility_Insert",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All(with Unselectable)}}"
      },
      "searchRandom": true,
      "includeDyingTargets": true,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"2141633429\">Monster_W1_Gepard_IF_03_PartController</a>"
      },
      "ifTargetFound": [
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "variableName": "Gepard_LimboFlag",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "variableName": "Bronya_LimboFlag",
          "value": 0
        },
        {
          "name": "Lock HP",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-59384693\">Enemy_W1_Gepard_IF_03_EnhancePerTurn</a>[<span class=\"descriptionNumberColor\">Will of Steel</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"946500704\">Enemy_W1_Bronya_IF_02_MainHaloEffect</a>[<span class=\"descriptionNumberColor\">Charge</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1695607247\">Enemy_W1_Bronya_IF_02_AssistantSpeed</a>[<span class=\"descriptionNumberColor\">Defense</span>]"
        },
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "variableName": "isMainAttack",
          "value": -1
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1241486816\">Enemy_W1_Gepard_IF_03_ListenBeingAttacked</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1981216123\">Enemy_IF_LimboMark</a>[<span class=\"descriptionNumberColor\">Valor Via Setbacks</span>]",
          "removeAllInstances": true
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"979801477\">Monster_Standard_Endurance</a>"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "scope": "TargetEntity",
          "variableName": "AIFlag",
          "value": -1
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "AIFlag",
          "value": 2
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "PhaseFlag",
          "value": 2
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "scope": "TargetEntity",
          "variableName": "PhaseFlag",
          "value": 2
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>",
          "removeToBeAdded": true
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-129923965\">MoreOneMorePerTurn</a>",
          "removeToBeAdded": true
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>",
          "removeToBeAdded": true
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-929204023\">Enemy_W1_Soldier04_AbilityP01_Supported</a>[<span class=\"descriptionNumberColor\">Reinforced</span>]"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"542143301\">Monster_ChangePhase</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1902031976\">Monster_ChangePhase_ParamEntity</a>"
        },
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
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1559306113\">Enemy_W1_Gepard_IF_03_WeaknessProtect</a>"
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "multiBase": 0.5
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
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"479955832\">Enemy_W1_Bronya_IF_02_WeaknessProtect</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Battle Event List}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Battle Event ID",
            "ID": 20006,
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            }
          },
          "ifTargetFound": [
            {
              "name": "Action Advance/Delay",
              "advanceType": "Set",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "multiBase": 1
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"514811508\">Enemy_W1_Gepard_IF_03_Part2EnhanceInti</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1421957792\">Enemy_W1_Bronya_IF_02_EnhancePerTurn</a>[<span class=\"descriptionNumberColor\">Carried By Inertia</span>]",
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
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"979801477\">Monster_Standard_Endurance</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1430608043\">Enemy_W1_Gepard_IF_03_Enhance</a>[<span class=\"descriptionNumberColor\">Thick and Thin</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1364188900\">Enemy_W1_Bronya_IF_02_Enhance</a>[<span class=\"descriptionNumberColor\">Shared Hatred</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"946500704\">Enemy_W1_Bronya_IF_02_MainHaloEffect</a>[<span class=\"descriptionNumberColor\">Charge</span>]"
        }
      ]
    }
  ],
  "references": []
}