const configAbility = {
  "fileName": "1490374940_BattleEventAbility_Challenge_Month_23_RandomDebuff",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Random Event",
      "odds": [
        0.2,
        0.2,
        0.2,
        0.2,
        0.2
      ],
      "execute": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1504166155\">Modifier_BattleEventAbility_Challenge_Month_23_RandomDebuff1</a>[<span class=\"descriptionNumberColor\">ATK Reduction</span>]",
          "duration": {
            "operator": "Variables[0] (BattleEvent_P4_ADF) || RETURN",
            "displayLines": "BattleEvent_P4_ADF",
            "constants": [],
            "variables": [
              "BattleEvent_P4_ADF"
            ]
          },
          "stackLimit": {
            "operator": "Variables[0] (BattleEvent_P3_ADF) || RETURN",
            "displayLines": "BattleEvent_P3_ADF",
            "constants": [],
            "variables": [
              "BattleEvent_P3_ADF"
            ]
          },
          "valuePerStack": {
            "BattleEvent_P2_ADF_Get": {
              "operator": "Variables[0] (BattleEvent_P2_ADF) || RETURN",
              "displayLines": "BattleEvent_P2_ADF",
              "constants": [],
              "variables": [
                "BattleEvent_P2_ADF"
              ]
            }
          },
          "addStacksPerTrigger": 1
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1520943774\">Modifier_BattleEventAbility_Challenge_Month_23_RandomDebuff2</a>[<span class=\"descriptionNumberColor\">DEF Reduction</span>]",
          "duration": {
            "operator": "Variables[0] (BattleEvent_P4_ADF) || RETURN",
            "displayLines": "BattleEvent_P4_ADF",
            "constants": [],
            "variables": [
              "BattleEvent_P4_ADF"
            ]
          },
          "stackLimit": {
            "operator": "Variables[0] (BattleEvent_P3_ADF) || RETURN",
            "displayLines": "BattleEvent_P3_ADF",
            "constants": [],
            "variables": [
              "BattleEvent_P3_ADF"
            ]
          },
          "valuePerStack": {
            "BattleEvent_P2_ADF_Get": {
              "operator": "Variables[0] (BattleEvent_P2_ADF) || RETURN",
              "displayLines": "BattleEvent_P2_ADF",
              "constants": [],
              "variables": [
                "BattleEvent_P2_ADF"
              ]
            }
          },
          "addStacksPerTrigger": 1
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1537721393\">Modifier_BattleEventAbility_Challenge_Month_23_RandomDebuff3</a>[<span class=\"descriptionNumberColor\">SPD Reduction</span>]",
          "duration": {
            "operator": "Variables[0] (BattleEvent_P4_ADF) || RETURN",
            "displayLines": "BattleEvent_P4_ADF",
            "constants": [],
            "variables": [
              "BattleEvent_P4_ADF"
            ]
          },
          "stackLimit": {
            "operator": "Variables[0] (BattleEvent_P3_ADF) || RETURN",
            "displayLines": "BattleEvent_P3_ADF",
            "constants": [],
            "variables": [
              "BattleEvent_P3_ADF"
            ]
          },
          "valuePerStack": {
            "BattleEvent_P2_ADF_Get": {
              "operator": "Variables[0] (BattleEvent_P2_ADF) || RETURN",
              "displayLines": "BattleEvent_P2_ADF",
              "constants": [],
              "variables": [
                "BattleEvent_P2_ADF"
              ]
            }
          },
          "addStacksPerTrigger": 1
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1554499012\">Modifier_BattleEventAbility_Challenge_Month_23_RandomDebuff4</a>[<span class=\"descriptionNumberColor\">Effect RES Reduction</span>]",
          "duration": {
            "operator": "Variables[0] (BattleEvent_P4_ADF) || RETURN",
            "displayLines": "BattleEvent_P4_ADF",
            "constants": [],
            "variables": [
              "BattleEvent_P4_ADF"
            ]
          },
          "stackLimit": {
            "operator": "Variables[0] (BattleEvent_P3_ADF) || RETURN",
            "displayLines": "BattleEvent_P3_ADF",
            "constants": [],
            "variables": [
              "BattleEvent_P3_ADF"
            ]
          },
          "valuePerStack": {
            "BattleEvent_P2_ADF_Get": {
              "operator": "Variables[0] (BattleEvent_P2_ADF) || RETURN",
              "displayLines": "BattleEvent_P2_ADF",
              "constants": [],
              "variables": [
                "BattleEvent_P2_ADF"
              ]
            }
          },
          "addStacksPerTrigger": 1
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1571276631\">Modifier_BattleEventAbility_Challenge_Month_23_RandomDebuff5</a>[<span class=\"descriptionNumberColor\">Follow-Up ATK Vulnerability</span>]",
          "duration": {
            "operator": "Variables[0] (BattleEvent_P4_ADF) || RETURN",
            "displayLines": "BattleEvent_P4_ADF",
            "constants": [],
            "variables": [
              "BattleEvent_P4_ADF"
            ]
          },
          "stackLimit": {
            "operator": "Variables[0] (BattleEvent_P3_ADF) || RETURN",
            "displayLines": "BattleEvent_P3_ADF",
            "constants": [],
            "variables": [
              "BattleEvent_P3_ADF"
            ]
          },
          "valuePerStack": {
            "BattleEvent_P5_ADF_Get": {
              "operator": "Variables[0] (BattleEvent_P5_ADF) || RETURN",
              "displayLines": "BattleEvent_P5_ADF",
              "constants": [],
              "variables": [
                "BattleEvent_P5_ADF"
              ]
            }
          },
          "addStacksPerTrigger": 1
        }
      ]
    }
  ],
  "whenAdded": [
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "ContextCaster",
      "variableName": "BattleEvent_P2_ADF",
      "value": {
        "operator": "Variables[0] (#BattleEvent_P2_ADF) || RETURN",
        "displayLines": "#BattleEvent_P2_ADF",
        "constants": [],
        "variables": [
          "#BattleEvent_P2_ADF"
        ]
      }
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "ContextCaster",
      "variableName": "BattleEvent_P3_ADF",
      "value": {
        "operator": "Variables[0] (#BattleEvent_P3_ADF) || RETURN",
        "displayLines": "#BattleEvent_P3_ADF",
        "constants": [],
        "variables": [
          "#BattleEvent_P3_ADF"
        ]
      }
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "ContextCaster",
      "variableName": "BattleEvent_P4_ADF",
      "value": {
        "operator": "Variables[0] (#BattleEvent_P4_ADF) || RETURN",
        "displayLines": "#BattleEvent_P4_ADF",
        "constants": [],
        "variables": [
          "#BattleEvent_P4_ADF"
        ]
      }
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "ContextCaster",
      "variableName": "BattleEvent_P5_ADF",
      "value": {
        "operator": "Variables[0] (#BattleEvent_P5_ADF) || RETURN",
        "displayLines": "#BattleEvent_P5_ADF",
        "constants": [],
        "variables": [
          "#BattleEvent_P5_ADF"
        ]
      }
    }
  ],
  "references": []
}