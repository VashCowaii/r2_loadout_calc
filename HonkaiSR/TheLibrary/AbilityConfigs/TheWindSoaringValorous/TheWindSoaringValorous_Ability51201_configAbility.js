const configAbility = {
  "fileName": "TheWindSoaringValorous_Ability51201",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "Relic_120_Main"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Relic_120_Sub[<span class=\"descriptionNumberColor\">The Wind-Soaring Valorous</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Attack Type",
                "attackTypes": [
                  "Ultimate"
                ]
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                      "value": "0.36"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "description": "Ultimate deals <span class=\"descriptionNumberColor\">#SkillRelic_120_4_P2_DamageAddedRatio</span> more DMG.",
      "type": "Buff",
      "effectName": "DMG Boost",
      "statusName": "The Wind-Soaring Valorous"
    },
    {
      "name": "Modifier Construction",
      "for": "Relic_120_Main",
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
                  "to": "Owner of this Modifier",
                  "modifier": "Relic_120_Sub[<span class=\"descriptionNumberColor\">The Wind-Soaring Valorous</span>]",
                  "duration": {
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
  "isRelic": true,
  "desc": [
    "Increases ATK by 12%.",
    "Increases the wearer's CRIT Rate by 6%. After the wearer uses a Follow-Up ATK, increases DMG dealt by Ultimate by 36%, lasting for 1 turn(s)."
  ],
  "params": [
    [
      0.12
    ],
    [
      0.06,
      0.36,
      1
    ]
  ]
}