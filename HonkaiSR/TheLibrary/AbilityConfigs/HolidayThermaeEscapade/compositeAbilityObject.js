const compositeAbilityObject = {
  "fullCharacterName": "Holiday Thermae Escapade",
  "trimCharacterName": "HolidayThermaeEscapade",
  "abilityList": [
    "HolidayThermaeEscapade_Ability21061"
  ],
  "fixedStats": {
    "1": {
      "DamageAll": 0.16
    },
    "2": {
      "DamageAll": 0.2
    },
    "3": {
      "DamageAll": 0.24
    },
    "4": {
      "DamageAll": 0.28
    },
    "5": {
      "DamageAll": 0.32
    }
  },
  "abilityObject": {
    "HolidayThermaeEscapade_Ability21061": {
      "fileName": "HolidayThermaeEscapade_Ability21061",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "LC_21061_Main"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "LC_21061_Sub[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (0.1) || RETURN",
                    "displayLines": "0.1",
                    "constants": [],
                    "variables": [
                      0.1
                    ]
                  }
                }
              ]
            }
          ],
          "description": "DMG taken increases by <span class=\"descriptionNumberColor\">#SkillEquip_P3_DamageTakenRatio</span>.",
          "type": "Debuff",
          "effectName": "Vulnerability",
          "statusName": "Vulnerability"
        },
        {
          "name": "Modifier Construction",
          "for": "LC_21061_Main",
          "execute": [
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": "Ability Target List",
                  "searchRandom": true,
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Use Prior Target(s) Defined",
                      "modifier": "LC_21061_Sub[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
                      "duration": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      },
                      "baseChance": {
                        "operator": "Variables[0] (1) || RETURN",
                        "displayLines": "1",
                        "constants": [],
                        "variables": [
                          1
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
      "desc": "Increases the wearer's DMG dealt by #1[i]%. After the wearer attacks, there is a #2[i]% base chance to inflict the attacked target with Vulnerability, increasing the DMG they receive by #3[i]% for #4[i] turn(s). Effects of the same type cannot stack.",
      "params": [
        [
          0.16,
          1,
          0.1,
          2
        ],
        [
          0.2,
          1,
          0.115,
          2
        ],
        [
          0.24,
          1,
          0.13,
          2
        ],
        [
          0.28,
          1,
          0.145,
          2
        ],
        [
          0.32,
          1,
          0.16,
          2
        ]
      ]
    }
  },
  "isLightcone": true
}