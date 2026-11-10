const configAbility = {
  "fileName": "Jingliuv0_Jingliu_PassiveAtkReady_Part01",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "UI Display Event",
      "popUpText": "Crescent Transmigration"
    },
    {
      "name": "Adjust Variable Value",
      "adjustmentType": "Overwrite Value",
      "variableName": "Jingliu_MoonFlag",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "value": 0
    },
    "Deleted bullshit",
    {
      "name": "Update Displayed Energy Bar",
      "value": {
        "displayLines": "Jingliu_FullMoonFlag"
      },
      "maximum": {
        "displayLines": "Jingliu_FullMoonFlagMax"
      },
      "assignState": "True",
      "priorState": "Active",
      "bar#": 3,
      "cooldown": 0
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1566484434\">MWJingliu_Attack_Transfer</a>",
      "valuePerStack": {
        "AbilityP01_P1_HpConsumption": {
          "displayLines": "0.3"
        },
        "AbilityP01_P3_ATKRatioUp": {
          "displayLines": "5.4"
        },
        "AbilityP01_P2_HpConsumption": {
          "displayLines": "0.04"
        },
        "AbilityP01_P4_JingliuAttackBase": {
          "displayLines": "1.8"
        },
        "AbilityRank_Eidolon4_P1_DamageUpRatio": {
          "displayLines": "0.9"
        },
        "AbilityRank_Eidolon4_P2_DamageUpLimit": {
          "displayLines": "0.3"
        }
      }
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"-537679168\">ReduceActionDelay</a>",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variables": {
        "parameter[0]_NormalizedValue": {
          "displayLines": "1"
        }
      }
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  }
}