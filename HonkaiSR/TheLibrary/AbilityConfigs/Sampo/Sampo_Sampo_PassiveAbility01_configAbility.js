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
                  "value": {
                    "displayLines": "1"
                  },
                  "variableName": "_Tree01_LifeTimeAdd"
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "_Tree01_LifeTimeAdd"
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
                  "value": {
                    "displayLines": "0.15"
                  },
                  "variableName": "_Rank06_DamagePercentageAdd"
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "_Rank06_DamagePercentageAdd"
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
                "displayLines": "(3 + _Tree01_LifeTimeAdd)"
              },
              "baseChance": {
                "displayLines": "0.65"
              },
              "stackLimit": {
                "displayLines": "5"
              },
              "valuePerStack": {
                "Modifier_Poison_DamagePercentage": {
                  "displayLines": "(0.52 + _Rank06_DamagePercentageAdd)"
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