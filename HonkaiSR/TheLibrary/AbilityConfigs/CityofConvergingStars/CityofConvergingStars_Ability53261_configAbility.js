const configAbility = {
  "fileName": "CityofConvergingStars_Ability53261",
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
      "modifier": "<a class=\"gModGreen\" id=\"-480070573\">Relic_326_Main</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__164381588\">Relic_326_Sub4</a>[<span class=\"descriptionNumberColor\">City of Converging Stars</span>]",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (0.12) || RETURN",
                "displayLines": "0.12",
                "constants": [],
                "variables": [
                  0.12
                ]
              }
            }
          ]
        }
      ],
      "description": "CRIT DMG increases by <span class=\"descriptionNumberColor\">#SkillRelic_326_2_P3_CriticalDamage</span>.",
      "type": "Buff",
      "effectName": "CRIT DMG Boost",
      "statusName": "City of Converging Stars"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__147603969\">Relic_326_Sub3</a>",
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"164381588\">Relic_326_Sub4</a>[<span class=\"descriptionNumberColor\">City of Converging Stars</span>]",
          "haloStatus": true
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__130826350\">Relic_326_Sub2</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Got a Kill [Owner]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"147603969\">Relic_326_Sub3</a>"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__47200936\">Relic_326_Sub</a>[<span class=\"descriptionNumberColor\">City of Converging Stars</span>]",
      "stackType": "ReplaceByCaster",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (0.24) || RETURN",
                "displayLines": "0.24",
                "constants": [],
                "variables": [
                  0.24
                ]
              }
            }
          ]
        }
      ],
      "description": "ATK increases by <span class=\"descriptionNumberColor\">#SkillRelic_326_2_P1_AttackAddedRatio</span>.",
      "type": "Buff",
      "effectName": "ATK Boost",
      "statusName": "City of Converging Stars"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-480070573\">Relic_326_Main</a>",
      "execute": [
        {
          "eventTrigger": "Attack Start [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Attack Type",
                "attackTypes": [
                  "Follow-up"
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"47200936\">Relic_326_Sub</a>[<span class=\"descriptionNumberColor\">City of Converging Stars</span>]",
                  "duration": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"130826350\">Relic_326_Sub2</a>",
          "haloStatus": true
        }
      ]
    }
  ],
  "isLightcone": true,
  "isRelic": true,
  "desc": [
    "When the wearer uses Follow-Up ATK, increases ATK by 24% for 2 turn(s). When an enemy target gets defeated, increases CRIT DMG for all allies by 12% in the current battle. This effect cannot stack."
  ],
  "params": [
    [
      0.24,
      2,
      0.12
    ],
    []
  ]
}