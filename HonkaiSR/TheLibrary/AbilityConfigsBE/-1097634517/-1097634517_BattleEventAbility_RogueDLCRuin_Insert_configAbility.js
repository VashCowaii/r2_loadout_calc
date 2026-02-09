const configAbility = {
  "fileName": "-1097634517_BattleEventAbility_RogueDLCRuin_Insert",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Deleted bullshit",
    {
      "name": "UI Display Event"
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "AttackScaling": {
        "DamageType": "Fire",
        "Damage": {
          "operator": "Variables[0] (DamagePercentage) || RETURN",
          "displayLines": "DamagePercentage",
          "constants": [],
          "variables": [
            "DamagePercentage"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Level"
      }
    },
    {
      "name": "Update Energy",
      "on": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "value": 5,
      "isFixed": "* ERR"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1139116212\">Modifier_BattleEventAbility_RogueDLCRuin_DamageUp</a>"
    },
    "Trigger: Attack End"
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1139116212\">Modifier_BattleEventAbility_RogueDLCRuin_DamageUp</a>",
      "stackType": "ReplaceByCaster",
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
              "variableName": "_Layer",
              "multiplier": 1
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (ExtraDamagePercentage) || Variables[1] (_Layer) || MUL || RETURN",
                "displayLines": "(ExtraDamagePercentage * _Layer)",
                "constants": [],
                "variables": [
                  "ExtraDamagePercentage",
                  "_Layer"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "addStacksPerTrigger": 1
    }
  ]
}