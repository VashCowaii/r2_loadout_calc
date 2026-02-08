const configAbility = {
  "fileName": "EpochEtchedinGoldenBlood_Ability23048",
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
      "modifier": "<a class=\"gModGreen\" id=\"635815778\">LC_23048_Main</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__361999223\">LC_23048_Sub</a>[<span class=\"descriptionNumberColor\">Skill DMG Boost</span>]",
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
                  "Skill"
                ]
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                      "value": "0.54"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "description": "Increases Skill DMG dealt by <span class=\"descriptionNumberColor\">#SkillEquip_P4_Skill02DamageAddedRatio</span>.",
      "type": "Buff",
      "effectName": "Skill DMG Boost",
      "statusName": "Skill DMG Boost"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__635815778\">LC_23048_Main</a>",
      "execute": [
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Type",
                "skillType": "Ultimate"
              },
              "passed": [
                {
                  "name": "Skill Points Modification",
                  "adjustmentValue": {
                    "operator": "Variables[0] (1) || RETURN",
                    "displayLines": "1",
                    "constants": [],
                    "variables": [
                      1
                    ]
                  },
                  "adjustmentType": "+"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Skill Type",
                    "skillType": "Skill"
                  },
                  {
                    "name": "Compare: Target Count",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Ability Target List}}"
                    },
                    "compareType": "=",
                    "value2": 1,
                    "livingTargets": true
                  },
                  {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Ability Target List}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Player Team All}}"
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
                    "target": "{{Ability Target List}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"361999223\">LC_23048_Sub</a>[<span class=\"descriptionNumberColor\">Skill DMG Boost</span>]",
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
      ],
      "stackData": [],
      "latentQueue": []
    }
  ],
  "isLightcone": true,
  "desc": "Increases the wearer's ATK by #1[i]%. After using Ultimate to attack, recovers #3[i] Skill Point(s). After the wearer uses their Skill on one ally character, increases the Skill DMG dealt by the target by #4[f1]% for #5[i] turn(s).",
  "params": [
    [
      0.64,
      1,
      1,
      0.54,
      3
    ],
    [
      0.8,
      1,
      1,
      0.675,
      3
    ],
    [
      0.96,
      1,
      1,
      0.81,
      3
    ],
    [
      1.12,
      1,
      1,
      0.945,
      3
    ],
    [
      1.28,
      1,
      1,
      1.08,
      3
    ]
  ]
}