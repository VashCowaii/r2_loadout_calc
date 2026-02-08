const compositeAbilityObject = {
  "fullCharacterName": "Victory In a Blink",
  "trimCharacterName": "VictoryInaBlink",
  "abilityList": [
    "VictoryInaBlink_Ability21050"
  ],
  "fixedStats": {
    "1": {
      "CritDamageBase": 0.12
    },
    "2": {
      "CritDamageBase": 0.15
    },
    "3": {
      "CritDamageBase": 0.18
    },
    "4": {
      "CritDamageBase": 0.21
    },
    "5": {
      "CritDamageBase": 0.24
    }
  },
  "abilityObject": {
    "VictoryInaBlink_Ability21050": {
      "fileName": "VictoryInaBlink_Ability21050",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1284950625\">LC_21050_Main</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-277720014\">LC_21050_Sub2</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (0.08) || RETURN",
                    "displayLines": "0.08",
                    "constants": [],
                    "variables": [
                      0.08
                    ]
                  }
                }
              ]
            }
          ],
          "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">#SkillEquip_P2_DamageAddedRatio</span>.",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "DMG Boost"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-294497633\">LC_21050_Sub1</a>",
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}.[[getAbilityTarget]]"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{All Team Members}}"
                    },
                    "mustBeAlive2": true
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{All Team Members}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-277720014\">LC_21050_Sub2</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                      "duration": {
                        "operator": "Variables[0] (3) || RETURN",
                        "displayLines": "3",
                        "constants": [],
                        "variables": [
                          3
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1284950625\">LC_21050_Main</a>",
          "execute": [
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "type": "Memosprite"
                      },
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}.[[getSummoner]]"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "mustBeAlive2": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster's Memosprite}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-294497633\">LC_21050_Sub1</a>"
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
      "desc": "Increases the wearer's CRIT DMG by #1[i]%. When the wearer's memosprite uses an ability on an ally target, increases the DMG dealt by all ally targets by #2[i]%, lasting for #3[i] turn(s).",
      "params": [
        [
          0.12,
          0.08,
          3
        ],
        [
          0.15,
          0.1,
          3
        ],
        [
          0.18,
          0.12,
          3
        ],
        [
          0.21,
          0.14,
          3
        ],
        [
          0.24,
          0.16,
          3
        ]
      ]
    }
  },
  "isLightcone": true
}