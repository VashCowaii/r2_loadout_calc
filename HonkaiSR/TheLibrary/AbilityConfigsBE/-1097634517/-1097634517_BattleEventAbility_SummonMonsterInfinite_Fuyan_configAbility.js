const configAbility = {
  "fileName": "-1097634517_BattleEventAbility_SummonMonsterInfinite_Fuyan",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"521512603\">BattleEventAbility_SummonMonsterInfinite_Fuyan_Modifier</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Level Entity}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1528480436\">Modifier_Infinite_Summon_Level</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1528480436\">Modifier_Infinite_Summon_Level</a>",
      "execute": [
        {
          "eventTrigger": "New Enemy Wave",
          "execute": [
            {
              "name": "UI Display Event (On Entity)",
              "target": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__521512603\">BattleEventAbility_SummonMonsterInfinite_Fuyan_Modifier</a>",
      "modifierFlags": [
        "CustomEvent_InfiniteDoSummon"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "Insert_Flag"
            },
            {
              "name": "Add Ability",
              "abilityName": "BattleEventAbility_SummonMonsterInfinite_Fuyan_Insert"
            },
            {
              "name": "Add Ability",
              "abilityName": "BattleEventAbility_SummonMonsterInfinite_Fuyan_Camera"
            }
          ]
        },
        {
          "eventTrigger": "Entity Death [Anyone]",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"269952436\">InfiniteWave_SummonMonster_Fuyan</a>",
              "isGlobal": true,
              "variables": {
                "ManuallySummon_Flag": 0
              }
            }
          ]
        },
        {
          "eventTrigger": "Entity Left Battle [Anyone]",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"269952436\">InfiniteWave_SummonMonster_Fuyan</a>",
              "isGlobal": true,
              "variables": {
                "ManuallySummon_Flag": 0
              }
            }
          ]
        },
        {
          "eventTrigger": "Custom Event",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"269952436\">InfiniteWave_SummonMonster_Fuyan</a>",
              "isGlobal": true,
              "variables": {
                "ManuallySummon_Flag": 1
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}