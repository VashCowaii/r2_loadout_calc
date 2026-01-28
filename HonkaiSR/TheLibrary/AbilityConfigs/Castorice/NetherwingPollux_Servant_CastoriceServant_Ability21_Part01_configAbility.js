const configAbility = {
  "fileName": "NetherwingPollux_Servant_CastoriceServant_Ability21_Part01",
  "childAbilityList": [
    "NetherwingPollux_Servant_CastoriceServant_Ability21_Part01",
    "NetherwingPollux_Servant_CastoriceServant_Ability21_Part02",
    "NetherwingPollux_Servant_CastoriceServant_Ability21_Camera",
    "NetherwingPollux_Servant_CastoriceServant_Ability21_Skill01toSkill21_Camera"
  ],
  "skillTrigger": "Skill21",
  "abilityType": "Memosprite",
  "energy": null,
  "toughnessList": [
    0,
    20,
    0
  ],
  "parse": [
    {
      "name": "Set Netherwing Skill Phase",
      "level": 2
    },
    {
      "name": "Update Action Bar Display",
      "triggerName": "Level_2",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    },
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
        {
          "name": "Define Custom Variable",
          "variableName": "CastoriceServant_ReadyAnimStateFlag",
          "value": 0
        },
        "Deleted bullshit",
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
          "ability": "Servant_CastoriceServant_Ability21_Part02",
          "isTrigger": true
        }
      ],
      "failed": [
        "Deleted bullshit",
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
          "ability": "Servant_CastoriceServant_Ability21_Part02",
          "isTrigger": true
        }
      ]
    }
  ],
  "references": []
}