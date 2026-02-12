const configAbility = {
  "fileName": "4012052_Monster_W4_Mascot_Ability04_LocalLegend_Insert_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "UI Display Event",
      "popUpText": "Looping Explanation"
    },
    {
      "name": "Abort Ability Use",
      "abilityName": "Monster_W4_Mascot_Ability03_Insert_Part01",
      "abilitySource": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    },
    {
      "name": "Abort Ability Use",
      "abilityName": "Monster_W4_Mascot_Ability02_Insert_Part01",
      "abilitySource": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1102283112\">Enemy_W4_Mascot_EscapingCharge00</a>[<span class=\"descriptionNumberColor\">Brainteaser</span>]"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1085505493\">Enemy_W4_Mascot_EscapingCharge01</a>[<span class=\"descriptionNumberColor\">Brainteaser</span>]"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1068727874\">Enemy_W4_Mascot_EscapingCharge02</a>[<span class=\"descriptionNumberColor\">Brainteaser</span>]"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team(Exclude Memosprites)}}"
      },
      "ifTargetFound": [
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "variableName": "_TargetMaxSP",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
        },
        {
          "name": "UI Display Event (On Entity)",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "popUpText": "Energy Regeneration",
          "living": true
        },
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "value": {
            "operator": "Variables[0] ({[SkillP01[1]]}) || Variables[1] (_TargetMaxSP) || MUL || RETURN",
            "displayLines": "({[SkillP01[1]]} * _TargetMaxSP)",
            "constants": [],
            "variables": [
              "{[SkillP01[1]]}",
              "_TargetMaxSP"
            ]
          },
          "isFixed": "(Fixed)"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Stage ID",
            "ID": 4260020,
            "compareType": ">=",
            "characterName": "Earthshaker Leo: Solblaze Winged Beast"
          },
          {
            "name": "Stage ID",
            "ID": 4260026,
            "compareType": "<=",
            "characterName": "Earthshaker Leo: Solblaze Winged Beast"
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
          "variableName": "_BattleTarget_LocalLegend_S2_2_Check",
          "value": 1
        },
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "variableName": "_BattleTarget_LocalLegend_S2_3_Check",
          "value": 1
        },
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "variableName": "_BattleTarget_LocalLegend_S2_1_ProgressInfo",
          "value": 1
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Stage ID",
        "ID": 426007,
        "compareType": "=",
        "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
      },
      "passed": [
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "variableName": "_BattleTarget_LocalLegend_S2_6_Check",
          "value": 1
        },
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "variableName": "_BattleTarget_LocalLegend_S2_7_Check",
          "value": 1
        },
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "variableName": "_BattleTarget_LocalLegend_S2_5_ProgressInfo",
          "value": 1
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "variableName": "DieWithBonus",
      "value": 1
    },
    {
      "name": "Define Custom Variable with Added Value",
      "target": {
        "name": "Target Name",
        "target": "Monster_W4_Griffin_00_LocalLegend"
      },
      "variableName": "_BonusCheck02",
      "value": 1
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
    },
    {
      "name": "Dispel Debuffs",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "silent": true
    }
  ],
  "references": []
}