const configAbility = {
  "fileName": "5014011_Monster_W5_Vtuber_Ability04_Part02",
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
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"1141771649\">Enemy_W5_Vtuber_InField</a>[<span class=\"descriptionNumberColor\">Epic showdown in progress!</span>]"
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target List}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1255636057\">Enemy_W5_Vtuber_Ability04_Bonus</a>[<span class=\"descriptionNumberColor\">Flooding Viewers</span>]",
          "duration": {
            "operator": "Variables[0] (UnusedUnderThisBase_505) || RETURN",
            "displayLines": "UnusedUnderThisBase_505",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_505"
            ]
          },
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (UnusedUnderThisBase_508) || RETURN",
              "displayLines": "UnusedUnderThisBase_508",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_508"
              ]
            }
          },
          "casterAssign": "TargetSelf"
        },
        {
          "name": "Action Advance/Delay",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target List}}"
          },
          "advanceType": "Set",
          "multiAdd": "-UnusedUnderThisBase_406"
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1255636057\">Enemy_W5_Vtuber_Ability04_Bonus</a>[<span class=\"descriptionNumberColor\">Flooding Viewers</span>]",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                "displayLines": "MDF_PropertyValue",
                "constants": [],
                "variables": [
                  "MDF_PropertyValue"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_PropertyValue"
      ],
      "latentQueue": [],
      "description": "Increases action advances and CRIT Rate by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "statusName": "Flooding Viewers"
    }
  ]
}