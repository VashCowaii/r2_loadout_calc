const configAbility = {
  "fileName": "LushakatheSunkenSeas_Ability53171",
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
      "modifier": "<a class=\"gModGreen\" id=\"-481512901\">Relic_317_Main</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__550683344\">Relic_317_Sub</a>[<span class=\"descriptionNumberColor\">Lushaka, the Sunken Seas</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
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
      "description": "ATK increases by <span class=\"descriptionNumberColor\">#SkillRelic_317_2_P2_AttackAddedRatio</span>.",
      "type": "Buff",
      "effectName": "ATK Boost",
      "statusName": "Lushaka, the Sunken Seas"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-481512901\">Relic_317_Main</a>",
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Wave Count",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Far Left Player Entity(no Memosprite)}}"
                    },
                    "mustBeAlive2": true
                  },
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Far Left Player Entity(no Memosprite)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"550683344\">Relic_317_Sub</a>[<span class=\"descriptionNumberColor\">Lushaka, the Sunken Seas</span>]"
                    }
                  ]
                }
              ]
            }
          ],
          "priorityLevel": -80
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ],
  "isLightcone": true,
  "isRelic": true,
  "desc": [
    "Increases the wearer's Energy Regeneration Rate by 5%. If the wearer is not the first character in the team lineup, then increases the ATK of the first character in the team lineup by 12%."
  ],
  "params": [
    [
      0.05,
      0.12
    ],
    []
  ]
}