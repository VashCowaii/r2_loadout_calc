const configAbility = {
  "fileName": "NetherwingPollux_Servant_CastoriceServant_BattleCry",
  "childAbilityList": [
    "NetherwingPollux_Servant_CastoriceServant_BattleCry"
  ],
  "skillTrigger": "SkillP03",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"53613592\">Memosprite_CastoriceServant_BattleCry</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__53613592\">Memosprite_CastoriceServant_BattleCry</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-509656395\">Memosprite_CastoriceServant_AllDamageTypeAddedRatio</a>[<span class=\"descriptionNumberColor\">Roar Rumbles the Realm</span>]",
              "duration": {
                "displayLines": "3"
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "displayLines": "0.1"
                }
              }
            }
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "priorityLevel": -80,
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
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-509656395\">Memosprite_CastoriceServant_AllDamageTypeAddedRatio</a>[<span class=\"descriptionNumberColor\">Roar Rumbles the Realm</span>]",
                  "duration": {
                    "displayLines": "3"
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "displayLines": "0.1"
                    }
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  }
}