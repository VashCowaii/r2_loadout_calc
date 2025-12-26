const configAbility = {
  "fileName": "SleepLiketheDead_Ability23012",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "LC_23012_Main"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "LC_23012_CD"
    },
    {
      "name": "Modifier Construction",
      "for": "LC_23012_Sub[<span class=\"descriptionNumberColor\">CRIT Rate Boost</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (0.36) || RETURN",
                "displayLines": "0.36",
                "constants": [],
                "variables": [
                  0.36
                ]
              }
            }
          ]
        }
      ],
      "description": "CRIT Rate +<span class=\"descriptionNumberColor\">#SkillEquip_P2_CriticalChance</span>.",
      "type": "Buff",
      "effectName": "CRIT Rate Boost",
      "statusName": "CRIT Rate Boost"
    },
    {
      "name": "Modifier Construction",
      "for": "LC_23012_Main",
      "execute": [
        {
          "eventTrigger": "Deal Damage End [Owner]: Hit",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "NOT",
                    "condition": {
                      "name": "Is a Crit"
                    }
                  },
                  {
                    "name": "NOT",
                    "condition": {
                      "name": "Has Modifier",
                      "target": "Owner of this Modifier",
                      "modifier": "LC_23012_CD"
                    }
                  },
                  {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Basic ATK",
                      "Skill"
                    ]
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "LC_23012_Sub[<span class=\"descriptionNumberColor\">CRIT Rate Boost</span>]",
                  "duration": {
                    "operator": "Variables[0] (1) || RETURN",
                    "displayLines": "1",
                    "constants": [],
                    "variables": [
                      1
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "LC_23012_CD",
                  "duration": {
                    "operator": "Variables[0] (3) || Constants[0] (1) || SUB || RETURN",
                    "displayLines": "(3 - 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      3
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
  "desc": "Increases the wearer's CRIT DMG by #1[i]%. When the wearer's Basic ATK or Skill DMG does not result in a CRIT Hit, increases their CRIT Rate by #2[i]%, lasting for #3[i] turn(s). This effect can only trigger once every #4[i] turn(s).",
  "params": [
    [
      0.3,
      0.36,
      1,
      3
    ],
    [
      0.35,
      0.42,
      1,
      3
    ],
    [
      0.4,
      0.48,
      1,
      3
    ],
    [
      0.45,
      0.54,
      1,
      3
    ],
    [
      0.5,
      0.6,
      1,
      3
    ]
  ]
}