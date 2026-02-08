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
        "operator": "Variables[0] (Jingliu_FullMoonFlag) || RETURN",
        "displayLines": "Jingliu_FullMoonFlag",
        "constants": [],
        "variables": [
          "Jingliu_FullMoonFlag"
        ]
      },
      "maximum": {
        "operator": "Variables[0] (Jingliu_FullMoonFlagMax) || RETURN",
        "displayLines": "Jingliu_FullMoonFlagMax",
        "constants": [],
        "variables": [
          "Jingliu_FullMoonFlagMax"
        ]
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
          "operator": "Variables[0] (0.3) || RETURN",
          "displayLines": "0.3",
          "constants": [],
          "variables": [
            0.3
          ]
        },
        "AbilityP01_P3_ATKRatioUp": {
          "operator": "Variables[0] (5.4) || RETURN",
          "displayLines": "5.4",
          "constants": [],
          "variables": [
            5.4
          ]
        },
        "AbilityP01_P2_HpConsumption": {
          "operator": "Variables[0] (0.04) || RETURN",
          "displayLines": "0.04",
          "constants": [],
          "variables": [
            0.04
          ]
        },
        "AbilityP01_P4_JingliuAttackBase": {
          "operator": "Variables[0] (1.8) || RETURN",
          "displayLines": "1.8",
          "constants": [],
          "variables": [
            1.8
          ]
        },
        "AbilityRank_Eidolon4_P1_DamageUpRatio": {
          "operator": "Variables[0] (0.9) || RETURN",
          "displayLines": "0.9",
          "constants": [],
          "variables": [
            0.9
          ]
        },
        "AbilityRank_Eidolon4_P2_DamageUpLimit": {
          "operator": "Variables[0] (0.3) || RETURN",
          "displayLines": "0.3",
          "constants": [],
          "variables": [
            0.3
          ]
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