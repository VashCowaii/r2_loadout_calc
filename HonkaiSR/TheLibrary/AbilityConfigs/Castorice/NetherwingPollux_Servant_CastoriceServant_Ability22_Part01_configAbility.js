const configAbility = {
  "fileName": "NetherwingPollux_Servant_CastoriceServant_Ability22_Part01",
  "childAbilityList": [
    "NetherwingPollux_Servant_CastoriceServant_Ability22_Part01",
    "NetherwingPollux_Servant_CastoriceServant_Ability22_Part02",
    "NetherwingPollux_Servant_CastoriceServant_Ability22_Camera",
    "NetherwingPollux_Servant_CastoriceServant_Ability22_Skill01toSkill22_Camera"
  ],
  "skillTrigger": "Skill22",
  "abilityType": "Memosprite",
  "energy": null,
  "toughnessList": [
    0,
    10,
    0
  ],
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "CastoriceServant_BPSkill_Level3_Loop",
        "compareType": ">=",
        "value2": 1
      },
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "CastoriceServant_BPSkill_Level",
                "compareType": ">=",
                "value2": 1
              },
              {
                "name": "Compare: Variable",
                "value1": "CastoriceServant_ReadyAnimStateFlag",
                "compareType": ">=",
                "value2": 1
              }
            ]
          },
          "passed": [
            "Deleted bullshit"
          ],
          "failed": [
            "Deleted bullshit"
          ]
        }
      ]
    },
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "inherentTarget": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "ability": "Servant_CastoriceServant_Ability22_Part02",
      "isTrigger": true
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "CastoriceServant_BPSkill_Level3_Loop",
        "compareType": ">=",
        "value2": 1
      },
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "Memosprite_CastoriceServant_BPCost_3"
              },
              {
                "name": "Compare: Variable",
                "value1": "CastoriceServant_BPSkill_Level",
                "compareType": "=",
                "value2": 1
              }
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "CastoriceServant_BPSkill_Level3_Loop",
          "value": 1
        }
      ]
    }
  ],
  "references": []
}