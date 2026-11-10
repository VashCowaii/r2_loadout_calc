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
              "displayLines": "(7 - 1)"
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
              "displayLines": "Sparxie_Skill02_GrandPrizeChance"
            },
            {
              "displayLines": "Sparxie_Skill02_MinorPrizeChance"
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
      "value": {
        "displayLines": "(_SkillUseCount + 1)"
      },
      "variableName": "_SkillUseCount"
    },
    {
      "name": "Sparxie Test Data",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "value": {
        "displayLines": "_SkillUseCount"
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
      "targetRestrictionFor": "EnemySelect"
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}