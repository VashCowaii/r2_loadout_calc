const configAbility = {
  "fileName": "4013018_Monster_W4_Claymore_Ability05_Part02_FateRin",
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
      "modifier": "<a class=\"gModGreen\" id=\"-1011760406\">MModifier_Monster_W4_Claymore_Ability05_PowerUp</a>",
      "valuePerStack": {
        "BonusRatio": {
          "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
          "displayLines": "{[Skill05[0]]}",
          "constants": [],
          "variables": [
            "{[Skill05[0]]}"
          ]
        }
      }
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1011760406\">MModifier_Monster_W4_Claymore_Ability05_PowerUp</a>",
      "stackType": "ReplaceByCaster",
      "stackData": [
        "BuffRatio"
      ],
      "addStacksPerTrigger": 1,
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (BonusRatio) || Variables[1] (_Layer) || MUL || RETURN",
                "displayLines": "(BonusRatio * _Layer)",
                "constants": [],
                "variables": [
                  "BonusRatio",
                  "_Layer"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                }
              }
            }
          ]
        },
        {
          "eventTrigger": "Pre-Death [Owner]"
        }
      ]
    }
  ]
}