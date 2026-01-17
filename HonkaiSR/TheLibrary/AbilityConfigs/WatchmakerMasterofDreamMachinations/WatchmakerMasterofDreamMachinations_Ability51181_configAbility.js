const configAbility = {
  "fileName": "WatchmakerMasterofDreamMachinations_Ability51181",
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
      "modifier": "Relic_118_Main"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Relic_118_Sub[<span class=\"descriptionNumberColor\">Watchmaker, Master of Dream Machinations</span>]",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (0.3) || RETURN",
                "displayLines": "0.3",
                "constants": [],
                "variables": [
                  0.3
                ]
              }
            }
          ]
        }
      ],
      "description": "Increases Break Effect by <span class=\"descriptionNumberColor\">#SkillRelic_118_4_P1_BreakDamageAddedRatio</span>.",
      "type": "Buff",
      "effectName": "Break Effect Boost",
      "statusName": "Watchmaker, Master of Dream Machinations"
    },
    {
      "name": "Modifier Construction",
      "for": "Relic_118_Main",
      "execute": [
        {
          "eventTrigger": "Ability Use [Owner]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Type",
                "skillType": "Ultimate"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Ability Target List}}"
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
                      "modifier": "Relic_118_Sub[<span class=\"descriptionNumberColor\">Watchmaker, Master of Dream Machinations</span>]",
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
    "Increases Break Effect by 16%.",
    "When the wearer uses their Ultimate on an ally, all allies' Break Effect increases by 30% for 2 turn(s). This effect cannot be stacked."
  ],
  "params": [
    [
      0.16
    ],
    [
      0.3,
      2
    ]
  ]
}