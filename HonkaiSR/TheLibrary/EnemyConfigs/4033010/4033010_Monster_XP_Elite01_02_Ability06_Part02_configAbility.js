const configAbility = {
  "fileName": "4033010_Monster_XP_Elite01_02_Ability06_Part02",
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
      "modifier": "<a class=\"gModGreen\" id=\"550129180\">Enemy_XP_Elite01_02_DefenceDown</a>[<span class=\"descriptionNumberColor\">DEF Reduction</span>]",
      "duration": {
        "operator": "Variables[0] ({[Skill06[1]]}) || RETURN",
        "displayLines": "{[Skill06[1]]}",
        "constants": [],
        "variables": [
          "{[Skill06[1]]}"
        ]
      }
    },
    {
      "name": "Achievement",
      "relatedAchievements": [
        {
          "title": "Immaculate Body",
          "desc": "In a single battle, ensure the Black Tide's Corroded Daemon does not absorb any \"corrosion\" when using \"Filth Eater\"",
          "rarity": "Low"
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__550129180\">Enemy_XP_Elite01_02_DefenceDown</a>[<span class=\"descriptionNumberColor\">DEF Reduction</span>]",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
              "value": {
                "operator": "Constants[0] (1) || INVERT || Variables[0] ({[Skill06[0]]}) || MUL || RETURN",
                "displayLines": "(-1 * {[Skill06[0]]})",
                "constants": [
                  1
                ],
                "variables": [
                  "{[Skill06[0]]}"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "DEF decreases by <span class=\"descriptionNumberColor\">#Skill06_P1_Ratio</span>.",
      "type": "Debuff",
      "effectName": "DEF Reduction",
      "statusName": "DEF Reduction"
    }
  ]
}