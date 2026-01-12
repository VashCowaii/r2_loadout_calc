const configAbility = {
  "fileName": "March7thTH_Mar_7th_10_Eidolon2_Insert_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Remove Events/Bonuses",
      "to": "Caster",
      "modifier": "M_Mar_7th_10_InsertCheck"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": "All Hostile Entities (AOE)(ALL)",
      "modifier": "M_Mar_7th_10_Eidolon2_Mark_Main"
    },
    {
      "name": "Define Custom Variable with Stat",
      "target": "Single Target (Primary)",
      "variableName": "_target_stance_before_attack",
      "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
    },
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "Mar_7th_10_Eidolon2_CD[<span class=\"descriptionNumberColor\">Blade Dances on Waves' Fight</span>]"
    },
    {
      "name": "ATK Scaling DMG",
      "target": "Single Target (Primary)",
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] (0.6) || RETURN",
          "displayLines": "0.6",
          "constants": [],
          "variables": [
            0.6
          ]
        },
        "HitSplit": 0.4,
        "Toughness": {
          "operator": "Variables[0] (15) || Variables[1] (Normal_StanceRatio) || MUL || RETURN",
          "displayLines": "(15 * Normal_StanceRatio)",
          "constants": [],
          "variables": [
            15,
            "Normal_StanceRatio"
          ]
        },
        "Tags": null,
        "attackType": "Follow-up"
      }
    },
    {
      "name": "Update Energy",
      "on": "Caster",
      "value": {
        "operator": "Constants[0] (0.4) || Variables[0] (5) || MUL || RETURN",
        "displayLines": "(0.4 * 5)",
        "constants": [
          0.4
        ],
        "variables": [
          5
        ]
      },
      "isFixed": "* ERR"
    },
    {
      "name": "ATK Scaling DMG",
      "target": "Single Target (Primary)",
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] (0.6) || RETURN",
          "displayLines": "0.6",
          "constants": [],
          "variables": [
            0.6
          ]
        },
        "HitSplit": 0.6,
        "Toughness": {
          "operator": "Variables[0] (15) || Variables[1] (Normal_StanceRatio) || MUL || RETURN",
          "displayLines": "(15 * Normal_StanceRatio)",
          "constants": [],
          "variables": [
            15,
            "Normal_StanceRatio"
          ]
        },
        "Tags": null,
        "attackType": "Follow-up"
      }
    },
    {
      "name": "Update Energy",
      "on": "Caster",
      "value": {
        "operator": "Constants[0] (0.6) || Variables[0] (5) || MUL || RETURN",
        "displayLines": "(0.6 * 5)",
        "constants": [
          0.6
        ],
        "variables": [
          5
        ]
      },
      "isFixed": "* ERR"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "Mar_7th_10_Jianshi",
      "variables": {
        "parameter[00]_IsAbility11": 0
      }
    },
    "Trigger: Attack End",
    {
      "name": "Use Custom Character Function",
      "functionName": "Mar_7th_10_GainEnergyWithCheck",
      "variables": {
        "parameter[0]_AddValue": {
          "operator": "Variables[0] (1) || RETURN",
          "displayLines": "1",
          "constants": [],
          "variables": [
            1
          ]
        }
      }
    }
  ],
  "references": []
}