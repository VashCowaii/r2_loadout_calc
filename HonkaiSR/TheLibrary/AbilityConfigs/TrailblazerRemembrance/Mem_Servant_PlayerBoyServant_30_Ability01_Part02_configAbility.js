const configAbility = {
  "fileName": "Mem_Servant_PlayerBoyServant_30_Ability01_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "PointB2"
      },
      "passed": [
        {
          "name": "Define Custom Variable with Added Value",
          "target": "Caster",
          "variableName": "CurEnergy",
          "value": {
            "operator": "Variables[0] (0.05) || Constants[0] (100) || MUL || RETURN",
            "displayLines": "(0.05 * 100)",
            "constants": [
              100
            ],
            "variables": [
              0.05
            ]
          }
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "variableName": "_index",
      "value": 0
    },
    {
      "name": "Looped Event",
      "maxLoops": 4,
      "Event": [
        {
          "name": "Define Custom Variable",
          "variableName": "_index",
          "value": {
            "operator": "Variables[0] (_index) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "(_index + 1)",
            "constants": [
              1
            ],
            "variables": [
              "_index"
            ]
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Bounce_SelectTarget",
          "target": "Target Group",
          "paramSequence": []
        }
      ]
    },
    {
      "name": "ATK Scaling DMG",
      "target": "Target Group",
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Ice",
        "Damage": {
          "operator": "Variables[0] (0.9) || RETURN",
          "displayLines": "0.9",
          "constants": [],
          "variables": [
            0.9
          ]
        },
        "Toughness": {
          "operator": "Variables[0] (AOE Toughness Value) || RETURN",
          "displayLines": "AOE Toughness Value",
          "constants": [],
          "variables": [
            "AOE Toughness Value"
          ]
        },
        "Tags": null,
        "attackType": "Memosprite"
      },
      "attackType": "Memosprite"
    },
    "Trigger: Attack End",
    "Trigger: Ability End"
  ],
  "references": []
}