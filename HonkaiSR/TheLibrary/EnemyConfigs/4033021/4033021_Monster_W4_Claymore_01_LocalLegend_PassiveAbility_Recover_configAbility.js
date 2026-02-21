const configAbility = {
  "fileName": "4033021_Monster_W4_Claymore_01_LocalLegend_PassiveAbility_Recover",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Deleted bullshit",
    {
      "name": "IF",
      "conditions": {
        "name": "Has Flag",
        "target": {
          "name": "Target Name",
          "target": "{{Modifier Holder}}"
        },
        "flagName": "Break"
      },
      "passed": [
        {
          "name": "Exit Broken-State",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Reset Toughness",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        }
      ]
    },
    {
      "name": "Heal",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "healPercent": {
        "operator": "Variables[0] (_HealHPRatio) || RETURN",
        "displayLines": "_HealHPRatio",
        "constants": [],
        "variables": [
          "_HealHPRatio"
        ]
      },
      "formula": "Heal from Target MaxHP"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Stage ID",
            "ID": 4260100,
            "compareType": ">=",
            "characterName": "Synergy Duo: Bloodbound Dark Duelist"
          },
          {
            "name": "Stage ID",
            "ID": 4260106,
            "compareType": "<=",
            "characterName": "Synergy Duo: Bloodbound Dark Duelist"
          }
        ]
      },
      "passed": [
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "variableName": "_BattleTarget_LocalLegend_S4_2_Check",
          "context": "TargetEntity",
          "value": 1
        },
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "variableName": "_BattleTarget_LocalLegend_S4_3_Check",
          "context": "TargetEntity",
          "value": 1
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Stage ID",
        "ID": 426011,
        "compareType": "=",
        "characterName": "Synergy Duo: Bloodbound Dark Duelist"
      },
      "passed": [
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "variableName": "_BattleTarget_LocalLegend_S4_6_Check",
          "context": "TargetEntity",
          "value": 1
        },
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "variableName": "_BattleTarget_LocalLegend_S4_7_Check",
          "context": "TargetEntity",
          "value": 1
        }
      ]
    },
    {
      "name": "Define Custom Variable with Added Value",
      "target": {
        "name": "Target Name",
        "target": "{{Level Entity}}"
      },
      "variableName": "_MonsterChangeCnt",
      "context": "TargetEntity",
      "value": 1
    }
  ],
  "references": []
}