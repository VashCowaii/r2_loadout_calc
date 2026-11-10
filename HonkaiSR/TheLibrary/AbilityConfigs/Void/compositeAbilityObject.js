const entityPageType = "lc"
const compositeAbilityObject = {
  "fullCharacterName": "Void",
  "trimCharacterName": "Void",
  "abilityList": [
    "Void_Ability20004"
  ],
  "fixedStats": {},
  "abilityObject": {
    "Void_Ability20004": {
      "fileName": "Void_Ability20004",
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
          "modifier": "<a class=\"gModGreen\" id=\"-926441489\">LC_20004_Main</a>[<span class=\"descriptionNumberColor\">Effect Hit Rate Boost</span>]",
          "duration": {
            "displayLines": "3"
          }
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-926441489\">LC_20004_Main</a>[<span class=\"descriptionNumberColor\">Effect Hit Rate Boost</span>]",
          "description": "Effect Hit Rate +<span class=\"descriptionNumberColor\">#SkillEquip_P1_StatusProbability</span>.",
          "type": "Buff",
          "effectName": "Effect Hit Rate Boost",
          "statusName": "Effect Hit Rate Boost",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">EffectHitRate</span>&nbsp;",
                  "value": {
                    "displayLines": "0.2"
                  }
                }
              ]
            }
          ]
        }
      ],
      "isLightcone": true,
      "desc": "At the start of the battle, the wearer's Effect Hit Rate increases by #1[i]% for #2[i] turn(s).",
      "params": [
        [
          0.2,
          3
        ],
        [
          0.25,
          3
        ],
        [
          0.3,
          3
        ],
        [
          0.35,
          3
        ],
        [
          0.4,
          3
        ]
      ]
    }
  },
  "isLightcone": true
}