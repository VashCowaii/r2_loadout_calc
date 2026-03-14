const configAbility = {
  "fileName": "Sparxie_Sparxie_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Update Ability Binding",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "abilityName": "Skill21",
      "skillSlot": "Skill",
      "enableSecondaryType": "ControlSkill02"
    },
    {
      "name": "Update Ability Binding",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "abilityName": "Skill11",
      "skillSlot": "Basic ATK"
    },
    {
      "name": "Sparxie Test Data",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "value": 0
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-227453258\">Sparxie_Ability02_Taunt</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-236603905\">Sparxie_Ability02_Taunt_Sub</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Compare: Variable",
            "value1": "Sparxie_Skill02_MinorPrizeGetNum",
            "compareType": ">=",
            "value2": {
              "operator": "Variables[0] (7) || Constants[0] (1) || SUB || RETURN",
              "displayLines": "(7 - 1)",
              "constants": [
                1
              ],
              "variables": [
                7
              ]
            }
          },
          {
            "name": "Compare: Variable",
            "value1": "Sparxie_Skill02_GrandPrizeChance",
            "compareType": ">",
            "value2": 0
          }
        ]
      },
      "passed": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1163871467\">Sparxie_Ability02_GrandPrize</a>"
        }
      ],
      "failed": [
        {
          "name": "Random Event",
          "odds": [
            {
              "operator": "Variables[0] (Sparxie_Skill02_GrandPrizeChance) || RETURN",
              "displayLines": "Sparxie_Skill02_GrandPrizeChance",
              "constants": [],
              "variables": [
                "Sparxie_Skill02_GrandPrizeChance"
              ]
            },
            {
              "operator": "Variables[0] (Sparxie_Skill02_MinorPrizeChance) || RETURN",
              "displayLines": "Sparxie_Skill02_MinorPrizeChance",
              "constants": [],
              "variables": [
                "Sparxie_Skill02_MinorPrizeChance"
              ]
            }
          ],
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1163871467\">Sparxie_Ability02_GrandPrize</a>"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-758227528\">Sparxie_Ability02_MinorPrize</a>"
            }
          ]
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-673955819\">Sparxie_Ability02_MustGrandPrize</a>"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-673955819\">Sparxie_Ability02_MustGrandPrize</a>",
          "addStacksPerTrigger": -1
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "variableName": "_SkillUseCount",
      "value": {
        "operator": "Variables[0] (_SkillUseCount) || Constants[0] (1) || ADD || RETURN",
        "displayLines": "(_SkillUseCount + 1)",
        "constants": [
          1
        ],
        "variables": [
          "_SkillUseCount"
        ]
      }
    },
    {
      "name": "Sparxie Test Data",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "value": {
        "operator": "Variables[0] (_SkillUseCount) || RETURN",
        "displayLines": "_SkillUseCount",
        "constants": [],
        "variables": [
          "_SkillUseCount"
        ]
      }
    },
    {
      "name": "Update Energy",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "valuePercent": 1,
      "ofAbilitySplit": true,
      "isFixed": "* ERR"
    },
    {
      "name": "Define Custom Variable with Ability Property",
      "skillKey": "Skill21",
      "variableName": "_BPNeed",
      "propertyName": "Skill Point Cost"
    },
    {
      "name": "Trigger: Ability End",
      "skipAttackSettle": true
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-236603905\">Sparxie_Ability02_Taunt_Sub</a>",
      "stackType": "ReplaceByCaster",
      "stackData": [],
      "latentQueue": [],
      "removalDependencies": {
        "name": "Removal Dependency",
        "dependancyName": "<a class=\"gModGreen\" id=\"-227453258\">Sparxie_Ability02_Taunt</a>"
      }
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-227453258\">Sparxie_Ability02_Taunt</a>",
      "stackType": "ReplaceByCaster",
      "targetRestriction": {
        "name": "Target Name",
        "target": "{{Sparxie: EBA Target}}"
      },
      "targetRestrictionFor": "EnemySelect",
      "stackData": [],
      "latentQueue": []
    }
  ]
}