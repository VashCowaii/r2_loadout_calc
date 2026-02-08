const configAbility = {
  "fileName": "Bladev0_Ren_Ability02_Part02",
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
      "variableName": "CasterCurrentHP",
      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
    },
    {
      "name": "Consume",
      "consumeFrom": "MaxHP",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
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
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-922781705\">MWRen_Attack_Transfer</a>[<span class=\"descriptionNumberColor\">Hellscape</span>]",
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
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1915467315\">MWRen_Attack</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
      "valuePerStack": {
        "MDF_PropertyValue": {
          "operator": "Variables[0] (0.4) || RETURN",
          "displayLines": "0.4",
          "constants": [],
          "variables": [
            0.4
          ]
        }
      }
    },
    {
      "name": "Inject Extra-Turn",
      "actionTag": null,
      "canInjectUltimates": true,
      "abilityName": "Ren_Bonus",
      "afterInjection": []
    },
    "Trigger: Ability End"
  ],
  "references": []
}