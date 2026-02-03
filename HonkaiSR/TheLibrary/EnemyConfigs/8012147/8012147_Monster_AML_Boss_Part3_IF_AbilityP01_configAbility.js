const configAbility = {
  "fileName": "8012147_Monster_AML_Boss_Part3_IF_AbilityP01",
  "childAbilityList": [
    "8012147_Monster_AML_Boss_Part3_IF_AbilityP01",
    "8012147_Monster_AML_Boss_Part3_IF_AbilityP01_ReflexInsert",
    "8012147_Monster_AML_Boss_Part3_IF_AbilityP01_ReflexInsert_Camera",
    "8012147_Monster_AML_Boss_Part3_IF_AbilityP01_WeaknessChange",
    "8012147_Monster_AML_Boss_Part3_IF_AbilityP01_WeaknessChange_Camera"
  ],
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
      "modifier": "Enemy_AML_Boss_Part3_IF_AbilityP01_OneMoreController"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Enemy_AML_Boss_Part2_IF_AbilityP01_Weakness_Part3[<span class=\"descriptionNumberColor\">Imaginary Mark</span>]"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Enemy_AML_Boss_Part3_IF_AbilityP01_WeaknessControll"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Enemy_AML_Boss_Part3_IF_AbilityP01_WeaknessControll",
      "modifierFlags": [
        "Deathrattle",
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "Was Killed (Queued) [Owner]",
          "execute": [
            {
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "silent": true
            },
            {
              "name": "Mark Entity For Immediate Death",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              }
            },
            {
              "name": "Inject Ability Use",
              "conditionActive": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Target Part 0}}"
                    },
                    "value1": "_Part1_Alive",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Target Part 0}}"
                    },
                    "value1": "_Part2_Alive",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Target Part 0}}"
                    },
                    "value1": "_Part3_Alive",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  }
                ],
                "invertCondition": true
              },
              "checkOverride": {
                "name": "Condition Priority",
                "overridePriority": "MonsterForceKill",
                "condition": {
                  "name": "Compare: Ability Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                  "compareType": "<=",
                  "value2": 0
                }
              },
              "abilityName": "Monster_AML_Boss_Part3_IF_AbilityP01_WeaknessChange",
              "abilityTarget": {
                "name": "Target Name",
                "target": "{{Target Part 2}}"
              },
              "priorityTag": "MonsterDeathRattle",
              "ownerState": "Mask_AliveOrLimbo",
              "canHitNonTargets": true,
              "showInActionOrder": true,
              "allowAbilityTriggers": false
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_AML_Boss_Part3_IF_AbilityP01_ReflexController",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "ReflexInsertFlag"
            }
          ]
        },
        {
          "eventTrigger": "Action End [Anyone]",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "ReflexInsertFlag"
            }
          ]
        },
        {
          "eventTrigger": "Take Damage End [Owner]: Hit",
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
                    "value1": "ReflexInsertFlag",
                    "compareType": "=",
                    "value2": 0
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Enemy_AML_Boss_IF_Enhance_Quantum[<span class=\"descriptionNumberColor\">Quantum Infusion</span>]"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "ReflexInsertFlag",
                  "value": 1
                },
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "advanceType": "Advance",
                  "multiAdd": -0.3
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}