const configAbility = {
  "fileName": "Sampo_Sampo_PassiveAbility01",
  "childAbilityList": [
    "Sampo_Sampo_PassiveAbility01"
  ],
  "skillTrigger": "SkillP01",
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
      "modifier": "<a class=\"gModGreen\" id=\"670903354\">Sampo_Passive</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__670903354\">Sampo_Passive</a>",
      "execute": [
        {
          "eventTrigger": "Deal Damage End [Owner]: Hit",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Trace Activated",
                "conditionList": "Trap"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_Tree01_LifeTimeAdd",
                  "value": {
                    "operator": "Variables[0] (1) || RETURN",
                    "displayLines": "1",
                    "constants": [],
                    "variables": [
                      1
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_Tree01_LifeTimeAdd",
                  "value": 0
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 6
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_Rank06_DamagePercentageAdd",
                  "value": {
                    "operator": "Variables[0] (0.15) || RETURN",
                    "displayLines": "0.15",
                    "constants": [],
                    "variables": [
                      0.15
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_Rank06_DamagePercentageAdd",
                  "value": 0
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target TAKING DMG}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-868837614\">Standard_DOT_Poison</a>[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
              "duration": {
                "operator": "Variables[0] (3) || Variables[1] (_Tree01_LifeTimeAdd) || ADD || RETURN",
                "displayLines": "(3 + _Tree01_LifeTimeAdd)",
                "constants": [],
                "variables": [
                  3,
                  "_Tree01_LifeTimeAdd"
                ]
              },
              "baseChance": {
                "operator": "Variables[0] (0.65) || RETURN",
                "displayLines": "0.65",
                "constants": [],
                "variables": [
                  0.65
                ]
              },
              "stackLimit": {
                "operator": "Variables[0] (5) || RETURN",
                "displayLines": "5",
                "constants": [],
                "variables": [
                  5
                ]
              },
              "valuePerStack": {
                "Modifier_Poison_DamagePercentage": {
                  "operator": "Variables[0] (0.52) || Variables[1] (_Rank06_DamagePercentageAdd) || ADD || RETURN",
                  "displayLines": "(0.52 + _Rank06_DamagePercentageAdd)",
                  "constants": [],
                  "variables": [
                    0.52,
                    "_Rank06_DamagePercentageAdd"
                  ]
                }
              },
              "stackFlag": "CharacterSkill"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 1
              },
              "passed": [
                {
                  "name": "Update Ability Description",
                  "popUpText": "Deals minor Wind DMG to single enemy targets with 6 Bounces in total.",
                  "skillTrigger": "Skill02"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}