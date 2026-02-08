const configAbility = {
  "fileName": "Feixiao_Feixiao_Ability21_Anim1_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"69209893\">Feixiao_Combo1_CostSPBeforeDamage</a>"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"-1999111375\">Feixiao_Combo2_DealDamage</a>"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"1389767451\">Feixiao_Combo2_AfterDamageCheck</a>"
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
          "functionName": "<a class=\"gTempYellow\" id=\"-1982785786\">Feixiao_TriggerBreak</a>"
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
              "functionName": "<a class=\"gTempYellow\" id=\"293207912\">Feixiao_FrameHaltRealTime</a>",
              "variables": {
                "parameter[0]_Realtime": 0.1,
                "parameter[1]_TimeScale": 0.025
              }
            }
          ],
          "failed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"293207912\">Feixiao_FrameHaltRealTime</a>",
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
      "functionName": "<a class=\"gTempYellow\" id=\"342687242\">Feixiao_ComboPerformFinish</a>"
    }
  ],
  "references": []
}