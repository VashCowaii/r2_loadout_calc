const configAbility = {
  "fileName": "4033023_Monster_W4_Claymore_01_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1028185089\">Enemy_AML_Minion02_01_RallyHP_Controller_V2</a>",
      "valuePerStack": {
        "MDF_RallyTransferRatio": {
          "operator": "Variables[0] (UnusedUnderThisBase_391) || RETURN",
          "displayLines": "UnusedUnderThisBase_391",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_391"
          ]
        },
        "MDF_Rally_HealPercentage": {
          "operator": "Variables[0] (UnusedUnderThisBase_392) || RETURN",
          "displayLines": "UnusedUnderThisBase_392",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_392"
          ]
        },
        "MDF_Rally_HealUpRatio": {
          "operator": "Variables[0] (UnusedUnderThisBase_393) || RETURN",
          "displayLines": "UnusedUnderThisBase_393",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_393"
          ]
        },
        "MDF_Rally_Strongth_AllDamageTypeAddedRatio": {
          "operator": "Variables[0] (UnusedUnderThisBase_394) || RETURN",
          "displayLines": "UnusedUnderThisBase_394",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_394"
          ]
        }
      }
    },
    "Ability Start",
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Physical",
        "Damage": {
          "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
          "displayLines": "{[Skill03[0]]}",
          "constants": [],
          "variables": [
            "{[Skill03[0]]}"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "SWITCH",
      "switchValue": {
        "operator": "Variables[0] (_ReadyToCharge) || RETURN",
        "displayLines": "_ReadyToCharge",
        "constants": [],
        "variables": [
          "_ReadyToCharge"
        ]
      },
      "caseEvents": [
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 4
        },
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 5
        },
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 6,
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2144224307\">Enemy_W4_Claymore_01_Ability04_Ready</a>"
            }
          ]
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": []
}