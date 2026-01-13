const configAbility = {
  "fileName": "Blade_AdvancedRen_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable with Stat",
      "target": "Caster",
      "variableName": "CasterCurrentHP",
      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
    },
    {
      "name": "Consume",
      "consumeFrom": "MaxHP",
      "target": "Caster",
      "consumePercent": {
        "operator": "Variables[0] (0.3) || RETURN",
        "displayLines": "0.3",
        "constants": [],
        "variables": [
          0.3
        ]
      },
      "consumeFloor": 1,
      "attackType": "BPSkill"
    },
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "Advanced_Ren_Attack_Transfer[<span class=\"descriptionNumberColor\">Hellscape</span>]",
      "duration": {
        "operator": "Variables[0] (3) || RETURN",
        "displayLines": "3",
        "constants": [],
        "variables": [
          3
        ]
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "Advanced_Ren_Attack[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
      "valuePerStack": {
        "MDF_PropertyValue": {
          "operator": "Variables[0] (0.4) || RETURN",
          "displayLines": "0.4",
          "constants": [],
          "variables": [
            0.4
          ]
        },
        "MDF_PropertyValue2": {
          "operator": "Variables[0] (10) || RETURN",
          "displayLines": "10",
          "constants": [],
          "variables": [
            10
          ]
        }
      }
    },
    {
      "name": "Inject Extra-Turn",
      "actionTag": null,
      "canInjectUltimates": true,
      "abilityName": "AdvancedRen_Bonus",
      "afterInjection": []
    },
    "Trigger: Ability End"
  ],
  "references": []
}