const configAbility = {
  "fileName": "Qingque_Qingque_Bonus",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Winning Hand"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "QingQue_Ability11PreShowModifier"
        }
      ]
    },
    {
      "name": "UI Display Event",
      "popUpText": "Celestial Jade"
    },
    "Deleted bullshit",
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "QingQue_Passive_Hu_Flag_Tong"
      },
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "QingQue_Passive_Hu_Flag_Tiao"
          },
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "QingQue_Passive_Hu_Flag_Wan"
              },
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "QingQue_Passive_Hu_Flag_Yu"
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "references": []
}