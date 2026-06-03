const configAbility = {
  "fileName": "MortenaxBlade_MortenaxBlade_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1247337710\">G_MortenaxBlade_Debuff_ToEnemy</a>[<span class=\"descriptionNumberColor\">Balefire Bind</span>]",
      "duration": {
        "operator": "Variables[0] (2) || RETURN",
        "displayLines": "2",
        "constants": [],
        "variables": [
          2
        ]
      },
      "valuePerStack": {
        "MDF_PropertyValue": {
          "operator": "Variables[0] (0.3) || RETURN",
          "displayLines": "0.3",
          "constants": [],
          "variables": [
            0.3
          ]
        },
        "MDF_PropertyValue2": {
          "operator": "Variables[0] (0.5) || RETURN",
          "displayLines": "0.5",
          "constants": [],
          "variables": [
            0.5
          ]
        }
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "G_ExSkill21_Allowed",
      "value": 1
    },
    {
      "name": "Consume",
      "consumeFrom": "MaxHP",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "consumePercent": {
        "operator": "Variables[0] (0.2) || RETURN",
        "displayLines": "0.2",
        "constants": [],
        "variables": [
          0.2
        ]
      },
      "consumeFloor": 1,
      "attackType": "Ultra"
    },
    {
      "name": "Update Displayed Energy Bar",
      "priorState": "Normal"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-476778637\">G_MortenaxBlade_Super</a>[<span class=\"descriptionNumberColor\">Infinite Fury</span>]"
    },
    {
      "name": "Update Energy",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "valuePercent": 1,
      "ofAbilitySplit": true,
      "isFixed": "* ERR"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"349219986\">MortenaxBlade_TrytoPlayAutoBP</a>"
    },
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}