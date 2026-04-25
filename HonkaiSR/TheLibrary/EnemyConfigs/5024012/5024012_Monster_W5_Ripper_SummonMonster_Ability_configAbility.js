const configAbility = {
  "fileName": "5024012_Monster_W5_Ripper_SummonMonster_Ability",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "variableName": "SummonLayer",
      "value": 0
    },
    {
      "name": "Define Custom Variable",
      "variableName": "SummonCount",
      "value": 0
    },
    {
      "name": "Define Custom Variable",
      "variableName": "DelayRatio",
      "value": 0
    },
    {
      "name": "Define Custom Variable with Modifier Values",
      "valueType": "Layer",
      "variableName": "SummonLayer",
      "modifierName": "<a class=\"gModGreen\" id=\"-287768944\">Monster_W5_Ripper_Summon</a>",
      "multiplier": 1
    },
    {
      "name": "Looped Event",
      "maxLoops": {
        "operator": "Variables[0] (SummonLayer) || RETURN",
        "displayLines": "SummonLayer",
        "constants": [],
        "variables": [
          "SummonLayer"
        ]
      },
      "Event": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Enemy Team All}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": "<",
            "value2": 5
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "SummonCount",
              "value": {
                "operator": "Variables[0] (SummonCount) || Constants[0] (1) || ADD || RETURN",
                "displayLines": "(SummonCount + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "SummonCount"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "SummonCount",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "DelayRatio",
                  "value": 0.5
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "SummonCount",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "DelayRatio",
                  "value": 1
                }
              ]
            },
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] (DelayRatio) || RETURN",
                "displayLines": "DelayRatio",
                "constants": [],
                "variables": [
                  "DelayRatio"
                ]
              },
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": 5022010,
                  "locationType": "KeepOnEdge"
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Recently Summoned Enemies}}"
              },
              "variableName": "Buff_DamageUpRatio",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill01[3]]}) || RETURN",
                "displayLines": "{[PassiveSkill01[3]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill01[3]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Recently Summoned Enemies}}"
              },
              "variableName": "Buff_MaxLayer",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill01[4]]}) || RETURN",
                "displayLines": "{[PassiveSkill01[4]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill01[4]]}"
                ]
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-287768944\">Monster_W5_Ripper_Summon</a>",
              "addStacksPerTrigger": -1
            },
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "SummonLayer",
              "modifierName": "<a class=\"gModGreen\" id=\"-287768944\">Monster_W5_Ripper_Summon</a>",
              "multiplier": 1
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "SummonLayer",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-287768944\">Monster_W5_Ripper_Summon</a>"
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
  "references": []
}