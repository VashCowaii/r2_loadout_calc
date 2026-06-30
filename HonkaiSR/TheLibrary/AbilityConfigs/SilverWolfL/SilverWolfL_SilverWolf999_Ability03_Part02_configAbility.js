const configAbility = {
  "fileName": "SilverWolfL_SilverWolf999_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable with Stat",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "_tmp_OverflowSP",
      "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecialOverflow</span>&nbsp;"
    },
    {
      "name": "Define Custom Property",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecialOverflow</span>&nbsp;",
      "value": 0,
      "function": "="
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"2105895650\">SilverWolf999_ModifySP</a>",
      "variables": {
        "parameter[0]_AddValue": {
          "operator": "Variables[0] (_tmp_OverflowSP) || RETURN",
          "displayLines": "_tmp_OverflowSP",
          "constants": [],
          "variables": [
            "_tmp_OverflowSP"
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
      "modifier": "<a class=\"gModGreen\" id=\"1358748576\">SilverWolf999_Ultra</a>[<span class=\"descriptionNumberColor\">Godmode Player</span>]",
      "valuePerStack": {
        "MDF_Count": {
          "operator": "Variables[0] (3) || RETURN",
          "displayLines": "3",
          "constants": [],
          "variables": [
            3
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
      "modifier": "<a class=\"gModGreen\" id=\"1077186888\">_M_SilverWolf999_Ultimate_VisualManager</a>"
    },
    {
      "name": "Action Advance/Delay",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "advanceType": "Advance",
      "multiAdd": -1
    },
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  }
}