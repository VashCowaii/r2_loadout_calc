const configAbility = {
  "fileName": "4014021_Monster_W4_Nikadory_IF_AbilityEX04",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "HardLevel",
        "compareType": ">=",
        "value2": 4
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1178138918\">Enemy_W4_Nikadory_IF_AbilityEX04</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"264648512\">Enemy_W4_Nikadory_IF_AbilityEX04_EMY</a>",
          "valuePerStack": {
            "MDF_AllDamageReduce": {
              "operator": "Variables[0] (UnusedUnderThisBase_544) || RETURN",
              "displayLines": "UnusedUnderThisBase_544",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_544"
              ]
            },
            "MDF_AllDamageTypeAddedRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_543) || RETURN",
              "displayLines": "UnusedUnderThisBase_543",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_543"
              ]
            }
          }
        }
      ]
    }
  ],
  "references": []
}