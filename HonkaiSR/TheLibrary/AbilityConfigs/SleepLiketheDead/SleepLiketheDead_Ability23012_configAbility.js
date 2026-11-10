const configAbility = {
  "fileName": "SleepLiketheDead_Ability23012",
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
      "modifier": "<a class=\"gModGreen\" id=\"310397379\">LC_23012_Main</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__107824413\">LC_23012_CD</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1089873720\">LC_23012_Sub</a>[<span class=\"descriptionNumberColor\">CRIT Rate Boost</span>]",
      "stackType": "ReplaceByCaster",
      "description": "CRIT Rate +<span class=\"descriptionNumberColor\">#SkillEquip_P2_CriticalChance</span>.",
      "type": "Buff",
      "effectName": "CRIT Rate Boost",
      "statusName": "CRIT Rate Boost",
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
              "statValue": {
                "displayLines": "0.36"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__310397379\">LC_23012_Main</a>",
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
                    "conditions": "Is a Crit"
                  },
                  {
                    "name": "NOT",
                    "conditions": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"107824413\">LC_23012_CD</a>"
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
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1089873720\">LC_23012_Sub</a>[<span class=\"descriptionNumberColor\">CRIT Rate Boost</span>]",
                  "duration": {
                    "displayLines": "1"
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"107824413\">LC_23012_CD</a>",
                  "duration": {
                    "displayLines": "(3 - 1)"
                  }
                }
              ]
            }
          ]
        }
      ]
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