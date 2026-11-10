const configAbility = {
  "fileName": "March7thTH_Mar_7th_10_Eidolon2_Insert_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"126431759\">M_Mar_7th_10_InsertCheck</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE, with Unselectables)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-330303048\">M_Mar_7th_10_Eidolon2_Mark_Main</a>"
    },
    {
      "name": "Define Custom Variable with Stat",
      "variableName": "_target_stance_before_attack",
      "readTarget": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1941685711\">Mar_7th_10_Eidolon2_CD</a>[<span class=\"descriptionNumberColor\">Blade Dances on Waves' Fight</span>]"
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "displayLines": "0.6"
        },
        "HitSplit": 0.4,
        "Toughness": {
          "displayLines": "(15 * Normal_StanceRatio)"
        },
        "Tags": null,
        "attackType": "Follow-up"
      }
    },
    {
      "name": "Update Energy",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "value": {
        "displayLines": "(0.4 * 5)"
      },
      "isFixed": "* ERR"
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "displayLines": "0.6"
        },
        "HitSplit": 0.6,
        "Toughness": {
          "displayLines": "(15 * Normal_StanceRatio)"
        },
        "Tags": null,
        "attackType": "Follow-up"
      }
    },
    {
      "name": "Update Energy",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "value": {
        "displayLines": "(0.6 * 5)"
      },
      "isFixed": "* ERR"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"1835349740\">Mar_7th_10_Jianshi</a>",
      "isGlobal": true,
      "variables": {
        "parameter[00]_IsAbility11": 0
      }
    },
    "Trigger: Attack End",
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"-1762944127\">Mar_7th_10_GainEnergyWithCheck</a>",
      "variables": {
        "parameter[0]_AddValue": {
          "displayLines": "1"
        }
      }
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  }
}