const configAbility = {
  "fileName": "TheWondrousBananAmusementPark_Ability53181",
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
      "modifier": "Relic_318_Main"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Relic_318_Sub[<span class=\"descriptionNumberColor\">The Wondrous BananAmusement Park</span>]",
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
                "operator": "Variables[0] (0.32) || RETURN",
                "displayLines": "0.32",
                "constants": [],
                "variables": [
                  0.32
                ]
              }
            }
          ]
        }
      ],
      "description": "CRIT DMG increases by <span class=\"descriptionNumberColor\">#SkillRelic_318_2_P2_CriticalDamageBase</span>.",
      "type": "Buff",
      "effectName": "CRIT DMG Boost",
      "statusName": "The Wondrous BananAmusement Park"
    },
    {
      "name": "Modifier Construction",
      "for": "Relic_318_Main",
      "execute": [
        {
          "eventTrigger": "Turn End [Anyone]",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Relic_318_Main_Template"
            }
          ]
        },
        {
          "eventTrigger": "Entity Death [Anyone]",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Relic_318_Main_Template"
            }
          ]
        },
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Relic_318_Main_Template"
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Anyone]: Start",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Relic_318_Main_Template"
            }
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Relic_318_Main_Template"
            }
          ]
        },
        {
          "eventTrigger": "Battle Event/Summon Created [Anyone]",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Relic_318_Main_Template"
            }
          ]
        }
      ],
      "modifierFunctions": [
        {
          "name": "CharacterFunctions",
          "functionName": "Relic_318_Main_Template",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target Count",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}.[[getMemoAndSummon]]"
                },
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Relic_318_Sub[<span class=\"descriptionNumberColor\">The Wondrous BananAmusement Park</span>]"
                }
              ],
              "failed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Relic_318_Sub[<span class=\"descriptionNumberColor\">The Wondrous BananAmusement Park</span>]"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ],
  "isLightcone": true,
  "isRelic": true,
  "desc": [
    "Increases the wearer's CRIT DMG by 16%. When a target summoned by the wearer is on the field, CRIT DMG additionally increases by 32%."
  ],
  "params": [
    [
      0.16,
      0.32
    ],
    []
  ]
}