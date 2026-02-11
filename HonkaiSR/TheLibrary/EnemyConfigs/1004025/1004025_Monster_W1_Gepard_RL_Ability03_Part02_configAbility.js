const configAbility = {
  "fileName": "1004025_Monster_W1_Gepard_RL_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "UsedShieldFlag",
      "value": 1
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-243818097\">SPRL_Flag</a>"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team Entity}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1557546288\">Gepard_SPRL_Shield</a>",
          "valuePerStack": {
            "MDF_ShieldPercentage": {
              "operator": "Variables[0] (UnusedUnderThisBase_149) || RETURN",
              "displayLines": "UnusedUnderThisBase_149",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_149"
              ]
            },
            "MDF_MaxHPHitPercentage1": {
              "operator": "Variables[0] (UnusedUnderThisBase_150) || RETURN",
              "displayLines": "UnusedUnderThisBase_150",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_150"
              ]
            },
            "MDF_MaxHPHitPercentage2": {
              "operator": "Variables[0] (UnusedUnderThisBase_151) || RETURN",
              "displayLines": "UnusedUnderThisBase_151",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_151"
              ]
            }
          }
        }
      ],
      "failed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team Entity}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"531781317\">Gepard_RL_Shield</a>",
          "valuePerStack": {
            "MDF_ShieldPercentage": {
              "operator": "Variables[0] (UnusedUnderThisBase_149) || RETURN",
              "displayLines": "UnusedUnderThisBase_149",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_149"
              ]
            },
            "MDF_MaxHPHitPercentage1": {
              "operator": "Variables[0] (UnusedUnderThisBase_150) || RETURN",
              "displayLines": "UnusedUnderThisBase_150",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_150"
              ]
            },
            "MDF_MaxHPHitPercentage2": {
              "operator": "Variables[0] (UnusedUnderThisBase_151) || RETURN",
              "displayLines": "UnusedUnderThisBase_151",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_151"
              ]
            }
          }
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{All Team Members}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1788931056\">Gepard_RL_ShieldIcon</a>[<span class=\"descriptionNumberColor\">Collective Shield</span>]"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{All Team Members}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1185722758\">Gepard_RL_ShieldIcon2</a>[<span class=\"descriptionNumberColor\">Weakness Protected</span>]"
    },
    "Trigger: Ability End"
  ],
  "references": []
}