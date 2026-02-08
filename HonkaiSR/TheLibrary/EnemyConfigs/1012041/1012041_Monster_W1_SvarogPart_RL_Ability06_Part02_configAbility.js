const configAbility = {
  "fileName": "1012041_Monster_W1_SvarogPart_RL_Ability06_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Modifier Holder}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"1762407654\">Monster_W1_Svarog_RL_Control_OnPart_Modifier</a>"
      },
      "passed": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Svarog's Confinement Target v2}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "ifTargetFound": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1293195213\">Monster_W1_Svarog_RL_Control_Modifier</a>[<span class=\"descriptionNumberColor\">Restrain</span>]"
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1762407654\">Monster_W1_Svarog_RL_Control_OnPart_Modifier</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1863384114\">Svarog_ListenBreak_RemoveControl_Modifier</a>"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Summoner of Modifier Holder}}"
          },
          "scope": "TargetEntity",
          "variableName": "CanUseSkill03",
          "value": 1
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "scope": "TargetEntity",
          "variableName": "PartCanUseSkill03",
          "value": 1
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Summoner of Modifier Holder}}"
          },
          "scope": "TargetEntity",
          "variableName": "SelfDestroy_Controller",
          "value": 1
        },
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "phase": "Phase0"
        }
      ]
    },
    "Ability Start",
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"419784878\">Monster_W1_SvarogPart_Overload</a>[<span class=\"descriptionNumberColor\">Overload</span>]"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Caster's Summoner}}"
        },
        "value1": "CurrentHP%",
        "compareType": "<=",
        "value2": {
          "operator": "Variables[0] (LowHPRatio) || RETURN",
          "displayLines": "LowHPRatio",
          "constants": [],
          "variables": [
            "LowHPRatio"
          ]
        }
      },
      "failed": [
        {
          "name": "Action Advance/Delay",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "advanceType": "Advance",
          "multiAdd": -1
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": []
}