const configAbility = {
  "fileName": "60031_MissionBattleEvent60031_Ability03_Insert",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Irontomb: Phantom}}"
        },
        "value1": "_PhaseLock",
        "compareType": "=",
        "value2": 1
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Battle Event ID",
        "ID": 60033,
        "target": {
          "name": "Target Name",
          "target": "{{BattleEvent60033}}"
        }
      }
    },
    "Deleted bullshit",
    {
      "name": "Define Custom Variable",
      "variableName": "_MissionTalkType",
      "value": 0
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Irontomb: Core}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1163429243\">Enemy_W4_IronTombCore_Main_InfinityHPEnd</a>",
      "casterAssign": "TargetSelf"
    },
    {
      "name": "Define Custom Variable with Added Value",
      "target": {
        "name": "Target Name",
        "target": "{{Irontomb: Core}}"
      },
      "variableName": "_WorldErosion02",
      "value": {
        "operator": "Variables[0] ({[Skill03[1]]}) || INVERT || Constants[0] (70) || MUL || RETURN",
        "displayLines": "(-{[Skill03[1]]} * 70)",
        "constants": [
          70
        ],
        "variables": [
          "{[Skill03[1]]}"
        ]
      },
      "min": 1,
      "max": 99
    },
    {
      "name": "Define Custom Variable with Added Value",
      "target": {
        "name": "Target Name",
        "target": "{{Irontomb: Core}}"
      },
      "variableName": "_WorldErosion",
      "value": {
        "operator": "Variables[0] ({[Skill03[1]]}) || INVERT || Constants[0] (100) || MUL || RETURN",
        "displayLines": "(-{[Skill03[1]]} * 100)",
        "constants": [
          100
        ],
        "variables": [
          "{[Skill03[1]]}"
        ]
      },
      "max": 100
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Irontomb: Phantom}}"
      },
      "AttackScaling": {
        "DamageType": {
          "name": "Damage Type Source",
          "sourceType": {}
        },
        "DamageFlat": {
          "displayLines": 1
        },
        "dmgFormulaFinal": "Converted DMG Base",
        "Toughness": null,
        "Tags": null,
        "attackType": "True DMG"
      }
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"-1221521032\">BattleEvent_60031_Damage</a>"
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Irontomb: Phantom}}"
      },
      "AttackScaling": {
        "DamageType": {
          "name": "Damage Type Source",
          "sourceType": {}
        },
        "DamageFlat": {
          "displayLines": 6
        },
        "dmgFormulaFinal": "Converted DMG Base",
        "Toughness": null,
        "Tags": null,
        "attackType": "True DMG"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Irontomb: Phantom}}"
      },
      "AttackScaling": {
        "DamageType": {
          "name": "Damage Type Source",
          "sourceType": {}
        },
        "DamageFlat": {
          "displayLines": 28
        },
        "dmgFormulaFinal": "Converted DMG Base",
        "Toughness": null,
        "Tags": null,
        "attackType": "True DMG"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Irontomb: Phantom}}"
      },
      "AttackScaling": {
        "DamageType": {
          "name": "Damage Type Source",
          "sourceType": {}
        },
        "DamageFlat": {
          "displayLines": 134
        },
        "dmgFormulaFinal": "Converted DMG Base",
        "Toughness": null,
        "Tags": null,
        "attackType": "True DMG"
      }
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"-1221521032\">BattleEvent_60031_Damage</a>"
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Irontomb: Phantom}}"
      },
      "AttackScaling": {
        "DamageType": {
          "name": "Damage Type Source",
          "sourceType": {}
        },
        "DamageFlat": {
          "displayLines": 496
        },
        "dmgFormulaFinal": "Converted DMG Base",
        "Toughness": null,
        "Tags": null,
        "attackType": "True DMG"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Irontomb: Phantom}}"
      },
      "AttackScaling": {
        "DamageType": {
          "name": "Damage Type Source",
          "sourceType": {}
        },
        "DamageFlat": {
          "displayLines": 8128
        },
        "dmgFormulaFinal": "Converted DMG Base",
        "Toughness": null,
        "Tags": null,
        "attackType": "True DMG"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Irontomb: Phantom}}"
      },
      "AttackScaling": {
        "DamageType": {
          "name": "Damage Type Source",
          "sourceType": {}
        },
        "DamageFlat": {
          "displayLines": 108642
        },
        "dmgFormulaFinal": "Converted DMG Base",
        "Toughness": null,
        "Tags": null,
        "attackType": "True DMG"
      }
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"-1221521032\">BattleEvent_60031_Damage</a>"
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Irontomb: Phantom}}"
      },
      "AttackScaling": {
        "DamageType": {
          "name": "Damage Type Source",
          "sourceType": {}
        },
        "DamageFlat": {
          "displayLines": 2003432
        },
        "dmgFormulaFinal": "Converted DMG Base",
        "Toughness": null,
        "Tags": null,
        "attackType": "True DMG"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Irontomb: Phantom}}"
      },
      "AttackScaling": {
        "DamageType": {
          "name": "Damage Type Source",
          "sourceType": {}
        },
        "DamageFlat": {
          "displayLines": 4000001
        },
        "dmgFormulaFinal": "Converted DMG Base",
        "Toughness": null,
        "Tags": null,
        "attackType": "True DMG"
      }
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"-1221521032\">BattleEvent_60031_Damage</a>"
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Irontomb: Phantom}}"
      },
      "AttackScaling": {
        "DamageType": {
          "name": "Damage Type Source",
          "sourceType": {}
        },
        "DamageFlat": {
          "displayLines": 23570000
        },
        "dmgFormulaFinal": "Converted DMG Base",
        "Toughness": null,
        "Tags": null,
        "attackType": "True DMG"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Irontomb: Phantom}}"
      },
      "AttackScaling": {
        "DamageType": {
          "name": "Damage Type Source",
          "sourceType": {}
        },
        "DamageFlat": {
          "displayLines": 33550336
        },
        "dmgFormulaFinal": "Converted DMG Base",
        "Toughness": null,
        "Tags": null,
        "attackType": "True DMG"
      }
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"-1221521032\">BattleEvent_60031_Damage</a>"
    },
    "Trigger: Attack End",
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Irontomb: Phantom}}"
        },
        "value1": "_PhaseLock",
        "compareType": "=",
        "value2": 1
      }
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "All Enemy Team Members"
  }
}