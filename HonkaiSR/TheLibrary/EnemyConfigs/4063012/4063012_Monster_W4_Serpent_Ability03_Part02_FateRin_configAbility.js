const configAbility = {
  "fileName": "4063012_Monster_W4_Serpent_Ability03_Part02_FateRin",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1176741350\">Enemy_W4_Serpent_Charge_Eff</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-951308134\">Enemy_W4_Serpent_Charge_FateRin</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Modifier Holder}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-142229785\">Enemy_W4_Serpent_FateRin_PowerUp</a>"
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-142229785\">Enemy_W4_Serpent_FateRin_PowerUp</a>",
      "stackType": "ReplaceByCaster",
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
                "operator": "Variables[0] ({[Skill03[1]]}) || Variables[1] (_Layer) || MUL || RETURN",
                "displayLines": "({[Skill03[1]]} * _Layer)",
                "constants": [],
                "variables": [
                  "{[Skill03[1]]}",
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