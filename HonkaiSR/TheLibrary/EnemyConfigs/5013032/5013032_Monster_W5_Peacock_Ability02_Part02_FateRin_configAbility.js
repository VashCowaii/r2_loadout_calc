const configAbility = {
  "fileName": "5013032_Monster_W5_Peacock_Ability02_Part02_FateRin",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Modifier Holder}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"34068683\">Modifier_Monster_W5_Peacock_Ability02_FateRin_PowerUp</a>[<span class=\"descriptionNumberColor\">Permanent Enhancement</span>]"
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__34068683\">Modifier_Monster_W5_Peacock_Ability02_FateRin_PowerUp</a>[<span class=\"descriptionNumberColor\">Permanent Enhancement</span>]",
      "stackType": "ReplaceByCaster",
      "description": "Each stack increases the DMG dealt by <span class=\"descriptionNumberColor\">#Skill02_P1_BuffRatio</span>.",
      "type": "Buff",
      "effectName": "Permanent Enhancement",
      "statusName": "Permanent Enhancement",
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
                "operator": "Variables[0] ({[Skill02[0]]}) || Variables[1] (_Layer) || MUL || RETURN",
                "displayLines": "({[Skill02[0]]} * _Layer)",
                "constants": [],
                "variables": [
                  "{[Skill02[0]]}",
                  "_Layer"
                ]
              }
            }
          ]
        }
      ]
    }
  ]
}