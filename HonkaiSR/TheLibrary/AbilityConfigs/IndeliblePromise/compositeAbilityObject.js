const compositeAbilityObject = {
  "fullCharacterName": "Indelible Promise",
  "trimCharacterName": "IndeliblePromise",
  "abilityList": [
    "IndeliblePromise_Ability21042"
  ],
  "fixedStats": {
    "1": {
      "DamageBreak": 0.28
    },
    "2": {
      "DamageBreak": 0.35
    },
    "3": {
      "DamageBreak": 0.42
    },
    "4": {
      "DamageBreak": 0.49
    },
    "5": {
      "DamageBreak": 0.56
    }
  },
  "abilityObject": {
    "IndeliblePromise_Ability21042": {
      "fileName": "IndeliblePromise_Ability21042",
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
          "modifier": "LC_21042_Main"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "LC_21042_Sub[<span class=\"descriptionNumberColor\">CRIT Rate Boost</span>]",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (0.15) || RETURN",
                    "displayLines": "0.15",
                    "constants": [],
                    "variables": [
                      0.15
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Increase CRIT Rate by <span class=\"descriptionNumberColor\">#SkillEquip_P2_CriticalChance</span>.",
          "type": "Buff",
          "effectName": "CRIT Rate Boost",
          "statusName": "CRIT Rate Boost"
        },
        {
          "name": "Modifier Construction",
          "for": "LC_21042_Main",
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "LC_21042_Sub[<span class=\"descriptionNumberColor\">CRIT Rate Boost</span>]",
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
          "latentQueue": []
        }
      ],
      "isLightcone": true,
      "desc": "Increases the wearer's Break Effect by #1[i]%. When the wearer uses their Ultimate, increases CRIT Rate by #2[i]%, lasting for #3[i] turn(s).",
      "params": [
        [
          0.28,
          0.15,
          2
        ],
        [
          0.35,
          0.1875,
          2
        ],
        [
          0.42,
          0.225,
          2
        ],
        [
          0.49,
          0.2625,
          2
        ],
        [
          0.56,
          0.3,
          2
        ]
      ]
    }
  },
  "isLightcone": true
}