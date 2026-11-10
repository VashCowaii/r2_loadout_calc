const configAbility = {
  "fileName": "-731110892_BattleEventAbility_Elation_Ability04_01",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Dispel Debuffs",
      "target": {
        "name": "Target Name",
        "target": "{{Elation: Player Team with Unselectables}}"
      },
      "toRemove": [
        "STAT_CTRL"
      ]
    },
    {
      "name": "Inject Extra-Turn",
      "actionTag": [
        "ElationTime_CustomTag"
      ],
      "forcedPunchline": {
        "displayLines": "ElationTime_OverrideElationPoint"
      },
      "sourceOverride": "Add Target by Current Extra-Turn Source",
      "target": {
        "name": "Target Name",
        "target": "{{Elation: Elation Entities}}"
      },
      "afterInjection": [],
      "abortFlags": [
        "STAT_CTRL"
      ],
      "priorityTag": "AhaInstant",
      "priorityTagPending": "AhaInstant_ElationSkill"
    },
    {
      "name": "Define Custom Variable",
      "scope": "ContextCaster",
      "value": {
        "displayLines": "ElationTime_OverrideElationPoint"
      },
      "variableName": "ElationTime_OverrideElationPointForEcho"
    },
    {
      "name": "Define Custom Variable",
      "scope": "ContextAbility",
      "value": -1,
      "variableName": "ElationTime_OverrideElationPoint"
    },
    {
      "name": "Define Custom String with Value",
      "value": {},
      "scope": "ContextAbility",
      "variableName": "ElationTime_CustomTag"
    },
    {
      "name": "Define Custom Variable",
      "scope": "ContextCaster",
      "value": {
        "displayLines": "ElationTime_IsNoConsume"
      },
      "variableName": "ElationTime_IsNoConsume"
    },
    {
      "name": "Define Custom Variable",
      "scope": "ContextAbility",
      "value": 0,
      "variableName": "ElationTime_IsNoConsumeTemp2"
    },
    {
      "name": "Lock Battle Actions"
    },
    {
      "name": "Lock Battle Actions",
      "isLock": false
    },
    {
      "name": "Define Variable with Elation Skill Count",
      "variableName": "ElationTime_SkillCount"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "ElationTime_SkillCount",
        "compareType": ">",
        "value2": 4
      }
    },
    "Deleted bullshit",
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "BattleEventAbility_Elation_Ability04_02",
      "isTrigger": true
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "ElationTime_SkillCount",
        "compareType": ">",
        "value2": 4
      }
    },
    "Unknown EventType2 (Not always an error)",
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "ElationTime_SkillCount",
        "compareType": ">",
        "value2": 4
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          "Unknown CONDITON2 [inverse: true]",
          {
            "name": "Is Entity a Battle Event/Summon",
            "target": {
              "name": "Target Name",
              "target": "{{Aha Instant: All Targets}}.[[index0]]"
            }
          }
        ]
      }
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "dynamicStringsArray": [
    {
      "name": "ElationTime_CustomTag",
      "value": "-1"
    }
  ]
}