const configAbility = {
  "fileName": "Feixiao_Feixiao_Ability21_Anim1_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Use Custom Character Function",
      "functionName": "Feixiao_Combo1_CostSPBeforeDamage"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "Feixiao_Combo2_DealDamage"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "Feixiao_Combo2_AfterDamageCheck"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "flagName": "Break"
          },
          {
            "name": "Compare: Variable",
            "value1": "First_Break_Effect",
            "compareType": ">=",
            "value2": 1
          }
        ]
      },
      "passed": [
        {
          "name": "Use Custom Character Function",
          "functionName": "Feixiao_TriggerBreak"
        }
      ],
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Active: Fast-Forward Animations"
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Feixiao_FrameHaltRealTime",
              "variables": {
                "parameter[0]_Realtime": 0.1,
                "parameter[1]_TimeScale": 0.025
              }
            }
          ],
          "failed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Feixiao_FrameHaltRealTime",
              "variables": {
                "parameter[0]_Realtime": 0.1,
                "parameter[1]_TimeScale": 0.05
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "Feixiao_ComboPerformFinish"
    }
  ],
  "references": []
}