const configAbility = {
  "fileName": "Bronya_Bronya_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable with Stat",
      "target": "Caster",
      "variableName": "MDF_CriticalDamageBase",
      "value": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "MDF_CriticalDamageBase_change",
      "value": {
        "operator": "Variables[0] (MDF_CriticalDamageBase) || RETURN",
        "displayLines": "MDF_CriticalDamageBase",
        "constants": [],
        "variables": [
          "MDF_CriticalDamageBase"
        ]
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "MDF_CriticalDamageBase_change",
      "value": {
        "operator": "Variables[0] (MDF_CriticalDamageBase_change) || Variables[1] (0.16) || MUL || RETURN",
        "displayLines": "(MDF_CriticalDamageBase_change * 0.16)",
        "constants": [],
        "variables": [
          "MDF_CriticalDamageBase_change",
          0.16
        ]
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "MDF_CriticalDamageBase_Total",
      "value": {
        "operator": "Variables[0] (MDF_CriticalDamageBase_change) || Variables[1] (0.2) || ADD || RETURN",
        "displayLines": "(MDF_CriticalDamageBase_change + 0.2)",
        "constants": [],
        "variables": [
          "MDF_CriticalDamageBase_change",
          0.2
        ]
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": "All Team Members(In Context)",
      "modifier": "Bronya_Ultimate_PowerUp[<span class=\"descriptionNumberColor\">The Belobog March</span>]",
      "duration": {
        "operator": "Variables[0] (2) || RETURN",
        "displayLines": "2",
        "constants": [],
        "variables": [
          2
        ]
      },
      "immediateEffect": true,
      "valuePerStack": {
        "MDF_AttackAddedRatio": {
          "operator": "Variables[0] (0.55) || RETURN",
          "displayLines": "0.55",
          "constants": [],
          "variables": [
            0.55
          ]
        },
        "Bronya_CriticalDamage": {
          "operator": "Variables[0] (MDF_CriticalDamageBase_Total) || RETURN",
          "displayLines": "MDF_CriticalDamageBase_Total",
          "constants": [],
          "variables": [
            "MDF_CriticalDamageBase_Total"
          ]
        }
      }
    },
    {
      "name": "Update Energy",
      "on": "Caster",
      "valuePercent": 1,
      "ofAbilitySplit": true,
      "isFixed": "* ERR"
    },
    "Trigger: Ability End"
  ],
  "references": []
}