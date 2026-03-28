const configAbility = {
  "fileName": "5012010_Monster_W3_TV_03_PassiveAbilityInitiate",
  "skillTrigger": "SkillP01",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1125178298\">Enemy_W3_TV_03_PowerUnlockListener</a>[<span class=\"descriptionNumberColor\">Happy Smiles</span>]"
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1125178298\">Enemy_W3_TV_03_PowerUnlockListener</a>[<span class=\"descriptionNumberColor\">Happy Smiles</span>]",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        },
        {
          "eventTrigger": "Being Attacked End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_isChange",
                    "compareType": "=",
                    "value2": 0
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "flagName": "STAT_CTRL",
                    "invertCondition": true
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "flagName": "Break",
                    "invertCondition": true
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "flagName": "DisableAction",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_isChange",
                  "value": 1
                },
                {
                  "name": "Adjust Team Punchline Value",
                  "value": {
                    "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
                    "displayLines": "{[SkillP01[0]]}",
                    "constants": [],
                    "variables": [
                      "{[SkillP01[0]]}"
                    ]
                  },
                  "adjustment": "Add"
                },
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W3_TV_03_Ability02_Part01",
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "priorityTag": "MonsterBuffSelf",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "abortFlags": [
                    "STAT_CTRL",
                    "Break",
                    "DisableAction"
                  ],
                  "allowAbilityTriggers": false
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Owner]: Aborted",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Parameter String",
                "compareType": "=",
                "value2": "Monster_W3_TV_03_Ability02_Part01"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_isChange",
                  "value": 0
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "When this unit is attacked for the first time, the target team gains Punchline, and this unit uses \"Happiness Charm.\"",
      "type": "Other",
      "statusName": "Happy Smiles"
    }
  ]
}