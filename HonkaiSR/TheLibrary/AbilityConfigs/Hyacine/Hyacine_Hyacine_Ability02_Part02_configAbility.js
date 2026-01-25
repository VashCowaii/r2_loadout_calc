const configAbility = {
  "fileName": "Hyacine_Hyacine_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Target Count",
        "target": {
          "name": "Target Name",
          "target": "{{Caster's Memosprite}}"
        },
        "compareType": "<=",
        "value2": 0,
        "livingTargets": true
      },
      "passed": [
        {
          "name": "Summon Memosprite",
          "memoID": 11409,
          "valuePerStack": {
            "_SummonerHealValueTotal": {
              "operator": "Variables[0] (_HealValueTotal) || RETURN",
              "displayLines": "_HealValueTotal",
              "constants": [],
              "variables": [
                "_HealValueTotal"
              ]
            },
            "AbilityP01_P3_DamageIncrease": {
              "operator": "Variables[0] (0.8) || RETURN",
              "displayLines": "0.8",
              "constants": [],
              "variables": [
                0.8
              ]
            },
            "AbilityP01_P4_LifeTime": {
              "operator": "Variables[0] (2) || RETURN",
              "displayLines": "2",
              "constants": [],
              "variables": [
                2
              ]
            },
            "AbilityP01_P5_Layer": {
              "operator": "Variables[0] (3) || RETURN",
              "displayLines": "3",
              "constants": [],
              "variables": [
                3
              ]
            }
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_IsSummon",
          "value": 1
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "variableName": "_IsSummon",
          "value": 0
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Stormy Caress"
      },
      "passed": [
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "dispelCount": {
            "operator": "Variables[0] (1) || RETURN",
            "displayLines": "1",
            "constants": [],
            "variables": [
              1
            ]
          },
          "dispelOrder": "LastAdded"
        }
      ]
    },
    {
      "name": "Heal",
      "target": {
        "name": "Target Name",
        "target": "{{All Team Members}} - {{Caster}}.[[getMemosprite]]"
      },
      "healPercent": {
        "operator": "Variables[0] (0.08) || RETURN",
        "displayLines": "0.08",
        "constants": [],
        "variables": [
          0.08
        ]
      },
      "healFlat": {
        "operator": "Variables[0] (160) || RETURN",
        "displayLines": "160",
        "constants": [],
        "variables": [
          160
        ]
      },
      "formula": "Heal from Healer's MaxHP"
    },
    {
      "name": "Heal",
      "target": {
        "name": "Target Name",
        "target": "{{Caster's Memosprite}}"
      },
      "healPercent": {
        "operator": "Variables[0] (0.1) || RETURN",
        "displayLines": "0.1",
        "constants": [],
        "variables": [
          0.1
        ]
      },
      "healFlat": {
        "operator": "Variables[0] (200) || RETURN",
        "displayLines": "200",
        "constants": [],
        "variables": [
          200
        ]
      },
      "formula": "Heal from Healer's MaxHP"
    },
    {
      "name": "Update Energy",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "valuePercent": 1,
      "ofAbilitySplit": true,
      "isFixed": "* ERR"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Ability Target List}}"
      },
      "searchRandom": true,
      "maxTargets": 1,
      "conditions": {
        "name": "Compare: Target",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "target2": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "invertCondition": true
      }
    },
    "Trigger: Ability End"
  ],
  "references": []
}