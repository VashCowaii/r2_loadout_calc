const configAbility = {
  "fileName": "20085023_FarmRelicAbility_104313",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "MFarmRelic_104313"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "MFarmRelic_104313_DamageAddedRatio[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
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
              "variableName": "ModifierLayers",
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
                "operator": "Variables[0] (ModifierLayers) || Variables[1] (DamageAddedRatio) || MUL || RETURN",
                "displayLines": "(ModifierLayers * DamageAddedRatio)",
                "constants": [],
                "variables": [
                  "ModifierLayers",
                  "DamageAddedRatio"
                ]
              }
            }
          ]
        }
      ],
      "description": "Each stack increases DMG dealt by <span class=\"descriptionNumberColor\">DamageAddedRatio</span>, up to <span class=\"descriptionNumberColor\">MaxLayer</span> stack(s).",
      "type": "Buff",
      "effectName": "DMG Boost",
      "statusName": "DMG Boost",
      "stackLimit": 10,
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "MFarmRelic_104313_HealTakenRatio",
      "execute": [
        {
          "eventTrigger": "Receiving Heal End [Owner]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "MFarmRelic_104313_DamageAddedRatio[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
              "valuePerStack": {
                "DamageAddedRatio": 0.06,
                "MaxLayer": 10
              }
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">HealingIncoming</span>&nbsp;",
              "value": 0.3
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "MFarmRelic_104313",
      "execute": [
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Player Team"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "MFarmRelic_104313_HealTakenRatio"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}