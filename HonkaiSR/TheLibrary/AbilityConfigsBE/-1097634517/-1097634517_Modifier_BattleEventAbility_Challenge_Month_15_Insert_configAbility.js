const configAbility = {
  "fileName": "-1097634517_Modifier_BattleEventAbility_Challenge_Month_15_Insert",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Exit Broken-State",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    },
    "Deleted bullshit",
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"2070937890\">Modifier_BattleEventAbility_Challenge_Month_15_Sub2</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
      "duration": {
        "operator": "Variables[0] (_LifeTime) || RETURN",
        "displayLines": "_LifeTime",
        "constants": [],
        "variables": [
          "_LifeTime"
        ]
      },
      "stackLimit": {
        "operator": "Variables[0] (_MaxLayer) || RETURN",
        "displayLines": "_MaxLayer",
        "constants": [],
        "variables": [
          "_MaxLayer"
        ]
      },
      "valuePerStack": {
        "DamageTakenRatio": {
          "operator": "Variables[0] (_DamageTakenRatio) || RETURN",
          "displayLines": "_DamageTakenRatio",
          "constants": [],
          "variables": [
            "_DamageTakenRatio"
          ]
        }
      }
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2070937890\">Modifier_BattleEventAbility_Challenge_Month_15_Sub2</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "valueType": "Layer",
              "variableName": "MDF_Layer",
              "multiplier": 1
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (DamageTakenRatio) || Variables[1] (MDF_Layer) || MUL || RETURN",
                "displayLines": "(DamageTakenRatio * MDF_Layer)",
                "constants": [],
                "variables": [
                  "DamageTakenRatio",
                  "MDF_Layer"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "DamageTakenRatio"
      ],
      "latentQueue": [],
      "description": "Each stack increases the received DMG by <span class=\"descriptionNumberColor\">DamageTakenRatio</span>, up to 2 stacks.",
      "type": "Debuff",
      "effectName": "Vulnerability",
      "statusName": "Vulnerability",
      "stackLimit": 2,
      "addStacksPerTrigger": 1
    }
  ]
}