const configAbility = {
  "fileName": "1004015_BattleEventAbility_CocoliaP1_VS_Insert",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "UI Display Event",
      "popUpText": "Doomsday Ice Cascade"
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Ice",
        "Damage": {
          "operator": "Variables[0] (MDF_CocoliaP1_00_RL_BattleEvent_DamagePercentage) || Constants[0] (0.2) || MUL || RETURN",
          "displayLines": "(MDF_CocoliaP1_00_RL_BattleEvent_DamagePercentage * 0.2)",
          "constants": [
            0.2
          ],
          "variables": [
            "MDF_CocoliaP1_00_RL_BattleEvent_DamagePercentage"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Additional DMG",
        "hitOwner": {
          "name": "Target Name",
          "target": "{{Enemy Teams}}"
        },
        "EnergyGainPercent": "33%"
      }
    },
    {
      "name": "Update Energy",
      "on": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "value": {
        "operator": "Variables[0] (MDF_CocoliaP1_00_RL_BattleEvent_SPAdd) || Constants[0] (0.2) || MUL || RETURN",
        "displayLines": "(MDF_CocoliaP1_00_RL_BattleEvent_SPAdd * 0.2)",
        "constants": [
          0.2
        ],
        "variables": [
          "MDF_CocoliaP1_00_RL_BattleEvent_SPAdd"
        ]
      },
      "isFixed": "* ERR"
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Ice",
        "Damage": {
          "operator": "Variables[0] (MDF_CocoliaP1_00_RL_BattleEvent_DamagePercentage) || Constants[0] (0.2) || MUL || RETURN",
          "displayLines": "(MDF_CocoliaP1_00_RL_BattleEvent_DamagePercentage * 0.2)",
          "constants": [
            0.2
          ],
          "variables": [
            "MDF_CocoliaP1_00_RL_BattleEvent_DamagePercentage"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Additional DMG",
        "hitOwner": {
          "name": "Target Name",
          "target": "{{Enemy Teams}}"
        },
        "EnergyGainPercent": "33%"
      }
    },
    {
      "name": "Update Energy",
      "on": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "value": {
        "operator": "Variables[0] (MDF_CocoliaP1_00_RL_BattleEvent_SPAdd) || Constants[0] (0.2) || MUL || RETURN",
        "displayLines": "(MDF_CocoliaP1_00_RL_BattleEvent_SPAdd * 0.2)",
        "constants": [
          0.2
        ],
        "variables": [
          "MDF_CocoliaP1_00_RL_BattleEvent_SPAdd"
        ]
      },
      "isFixed": "* ERR"
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Ice",
        "Damage": {
          "operator": "Variables[0] (MDF_CocoliaP1_00_RL_BattleEvent_DamagePercentage) || Constants[0] (0.2) || MUL || RETURN",
          "displayLines": "(MDF_CocoliaP1_00_RL_BattleEvent_DamagePercentage * 0.2)",
          "constants": [
            0.2
          ],
          "variables": [
            "MDF_CocoliaP1_00_RL_BattleEvent_DamagePercentage"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Additional DMG",
        "hitOwner": {
          "name": "Target Name",
          "target": "{{Enemy Teams}}"
        },
        "EnergyGainPercent": "34%"
      }
    },
    {
      "name": "Update Energy",
      "on": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "value": {
        "operator": "Variables[0] (MDF_CocoliaP1_00_RL_BattleEvent_SPAdd) || Constants[0] (0.2) || MUL || RETURN",
        "displayLines": "(MDF_CocoliaP1_00_RL_BattleEvent_SPAdd * 0.2)",
        "constants": [
          0.2
        ],
        "variables": [
          "MDF_CocoliaP1_00_RL_BattleEvent_SPAdd"
        ]
      },
      "isFixed": "* ERR"
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Ice",
        "Damage": {
          "operator": "Variables[0] (MDF_CocoliaP1_00_RL_BattleEvent_DamagePercentage) || Constants[0] (0.2) || MUL || RETURN",
          "displayLines": "(MDF_CocoliaP1_00_RL_BattleEvent_DamagePercentage * 0.2)",
          "constants": [
            0.2
          ],
          "variables": [
            "MDF_CocoliaP1_00_RL_BattleEvent_DamagePercentage"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Additional DMG",
        "hitOwner": {
          "name": "Target Name",
          "target": "{{Enemy Teams}}"
        },
        "EnergyGainPercent": "33%"
      }
    },
    {
      "name": "Update Energy",
      "on": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "value": {
        "operator": "Variables[0] (MDF_CocoliaP1_00_RL_BattleEvent_SPAdd) || Constants[0] (0.2) || MUL || RETURN",
        "displayLines": "(MDF_CocoliaP1_00_RL_BattleEvent_SPAdd * 0.2)",
        "constants": [
          0.2
        ],
        "variables": [
          "MDF_CocoliaP1_00_RL_BattleEvent_SPAdd"
        ]
      },
      "isFixed": "* ERR"
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Ice",
        "Damage": {
          "operator": "Variables[0] (MDF_CocoliaP1_00_RL_BattleEvent_DamagePercentage) || Constants[0] (0.2) || MUL || RETURN",
          "displayLines": "(MDF_CocoliaP1_00_RL_BattleEvent_DamagePercentage * 0.2)",
          "constants": [
            0.2
          ],
          "variables": [
            "MDF_CocoliaP1_00_RL_BattleEvent_DamagePercentage"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Additional DMG",
        "hitOwner": {
          "name": "Target Name",
          "target": "{{Enemy Teams}}"
        },
        "EnergyGainPercent": "33%"
      }
    },
    {
      "name": "Update Energy",
      "on": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "value": {
        "operator": "Variables[0] (MDF_CocoliaP1_00_RL_BattleEvent_SPAdd) || Constants[0] (0.2) || MUL || RETURN",
        "displayLines": "(MDF_CocoliaP1_00_RL_BattleEvent_SPAdd * 0.2)",
        "constants": [
          0.2
        ],
        "variables": [
          "MDF_CocoliaP1_00_RL_BattleEvent_SPAdd"
        ]
      },
      "isFixed": "* ERR"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"543576054\">StageAbility_3999913_Modifier_AlwaysSuccess</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-298752594\">Standard_CTRL_Frozen</a>[<span class=\"descriptionNumberColor\">Frozen</span>]",
      "duration": 2,
      "valuePerStack": {
        "Modifier_Frozen_DamagePercentage": {
          "operator": "Variables[0] (MDF_CocoliaP1_00_RL_BattleEvent_FrozenDamagePerTurn) || RETURN",
          "displayLines": "MDF_CocoliaP1_00_RL_BattleEvent_FrozenDamagePerTurn",
          "constants": [],
          "variables": [
            "MDF_CocoliaP1_00_RL_BattleEvent_FrozenDamagePerTurn"
          ]
        }
      }
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"543576054\">StageAbility_3999913_Modifier_AlwaysSuccess</a>"
    },
    "Trigger: Attack End",
    {
      "name": "Action Advance/Delay",
      "target": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "advanceType": "Advance",
      "multiAdd": -1
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__543576054\">StageAbility_3999913_Modifier_AlwaysSuccess</a>",
      "modifierFlags": [
        "AlwaysSuccess"
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}