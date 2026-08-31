const configAbility = {
  "fileName": "60044_MissionBattleEvent60044_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Asat Pramad: 0}} + {{Asat Pramad: 1}} + {{Asat Pramad: 2}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1762940048\">Enemy_W5_AsatPramad_BELockHP</a>"
    },
    {
      "name": "UI Display Event",
      "popUpText": "Mechatron Swordomain: Void Slash"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-2113551112\">MissionBattleEvent60044_ChangeMusic</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Asat Pramad: 0}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"192411193\">Enemy_W5_AsatPramad_MainStory03</a>"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Gender is",
        "gender": "GENDER_MAN"
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Level Entity}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"2070107442\">Enemy_W5_AsatPramad_AcrossPhaseController</a>"
    },
    {
      "name": "Define Custom Variable with Stat",
      "target": {
        "name": "Target Name",
        "target": "{{Asat Pramad: 2}}"
      },
      "variableName": "EnemyBoss_MaxHP",
      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Asat Pramad: 0}} + {{Asat Pramad: 1}} + {{Asat Pramad: 2}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Imaginary",
        "DamageFlat": {
          "operator": "Variables[0] (#BattleEvent_P1_ADF) || Variables[1] (EnemyBoss_MaxHP) || MUL || Constants[0] (3) || DIV || RETURN",
          "displayLines": "((#BattleEvent_P1_ADF * EnemyBoss_MaxHP) / 3)",
          "constants": [
            3
          ],
          "variables": [
            "#BattleEvent_P1_ADF",
            "EnemyBoss_MaxHP"
          ]
        },
        "cantKill": true,
        "dmgFormula": "Max HP Scaling",
        "dmgFormulaFinal": "Converted DMG Base",
        "Toughness": {
          "operator": "Variables[0] (AOE Toughness Value) || RETURN",
          "displayLines": "AOE Toughness Value",
          "constants": [],
          "variables": [
            "AOE Toughness Value"
          ]
        },
        "ToughnessDMGType": {
          "DamageType": "Imaginary"
        },
        "Tags": null,
        "attackType": "Ultimate"
      }
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All(with Unselectable)}}"
      },
      "conditions": {
        "name": "Check Boolean Value",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "value": "W5_Shell"
      },
      "ifTargetFound": [
        {
          "name": "Force Entity Death",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          }
        }
      ]
    },
    "Trigger: Attack End",
    {
      "name": "Change Entity Turn-State",
      "target": {
        "name": "Target Name",
        "target": "{{Asat Pramad: 0}} + {{Asat Pramad: 1}} + {{Asat Pramad: 2}}"
      },
      "phase": "Phase1"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Asat Pramad: 0}} + {{Asat Pramad: 1}} + {{Asat Pramad: 2}}"
      },
      "ifTargetFound": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "flagName": "Break"
          },
          "failed": [
            {
              "name": "Trigger 0-Toughness",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1161208794\">Enemy_W5_AsatPramad_AllDamageTypeTakenRatio</a>[<span class=\"descriptionNumberColor\">Knockdown</span>]",
          "duration": -1,
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (#BattleEvent_P2_ADF) || RETURN",
              "displayLines": "#BattleEvent_P2_ADF",
              "constants": [],
              "variables": [
                "#BattleEvent_P2_ADF"
              ]
            }
          },
          "casterAssign": "TargetSelf"
        }
      ]
    },
    {
      "name": "Action Advance/Delay",
      "advanceType": "Set",
      "target": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "set": 0
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"-1445036185\">AddMuteSpeedAndLockActionDelayChange</a>",
      "target": {
        "name": "Add Target by Unique Identifier",
        "identifier": "BossUltra"
      }
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"-1445036185\">AddMuteSpeedAndLockActionDelayChange</a>",
      "target": {
        "name": "Add Target by Unique Identifier",
        "identifier": "BossSummonMonster"
      }
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"-1445036185\">AddMuteSpeedAndLockActionDelayChange</a>",
      "target": {
        "name": "Add Target by Unique Identifier",
        "identifier": "BE_AsatPramad_00"
      }
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"-1445036185\">AddMuteSpeedAndLockActionDelayChange</a>",
      "target": {
        "name": "Add Target by Unique Identifier",
        "identifier": "BE_AsatPramad_01"
      }
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"-1445036185\">AddMuteSpeedAndLockActionDelayChange</a>",
      "target": {
        "name": "Add Target by Unique Identifier",
        "identifier": "W5_AsatPramad_02"
      }
    },
    {
      "name": "Set Action-State",
      "on": null,
      "stateName": "AsatPramadAfterBE",
      "state": false
    },
    {
      "name": "Set Action-State",
      "on": null,
      "stateName": "AsatPramadAfterBE",
      "state": false
    },
    {
      "name": "Set Action-State",
      "on": null,
      "stateName": "AsatPramadAfterBE",
      "state": false
    },
    {
      "name": "Set Action-State",
      "on": null,
      "stateName": "AsatPramadAfterBE",
      "state": false
    },
    {
      "name": "Set Action-State",
      "on": null,
      "stateName": "AsatPramadAfterBE",
      "state": false
    },
    {
      "name": "Preload Battle Event(s)",
      "eventID": [
        20052
      ]
    },
    {
      "name": "Add Battle Event",
      "teamName": "Enemy Team",
      "eventID": 20052,
      "variables": null,
      "whenCreated": [
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "multiBase": 1
        },
        {
          "name": "Assign Unique Name",
          "uniqueName": "BossAfterBE",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          }
        }
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"724771238\">Enemy_W5_AsatPramad_Bomb</a>[<span class=\"descriptionNumberColor\">Meme'd</span>]"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Asat Pramad: 0}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1505992097\">Enemy_W5_AsatPramad_BombCharging</a>[<span class=\"descriptionNumberColor\">Memes Incoming</span>]"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-607981901\">Enemy_W5_AsatPramad_MainStory02Talk02End</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Asat Pramad: 0}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-473353257\">Enemy_W5_AsatPramad_Effect00</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Asat Pramad: 1}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-490130876\">Enemy_W5_AsatPramad_Effect01</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Asat Pramad: 2}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-439798019\">Enemy_W5_AsatPramad_Effect02</a>"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"964206682\">W5_AsatPramad_Part03BEBreakSet</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Asat Pramad: 0}} + {{Asat Pramad: 1}} + {{Asat Pramad: 2}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1762940048\">Enemy_W5_AsatPramad_BELockHP</a>"
    },
    "Trigger: Ability End"
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1762940048\">Enemy_W5_AsatPramad_BELockHP</a>",
      "modifierFlags": [
        "Endurance"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Lock HP",
              "threshold": 0.00010000006
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-607981901\">Enemy_W5_AsatPramad_MainStory02Talk02End</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2113551112\">MissionBattleEvent60044_ChangeMusic</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Asat Pramad: 0}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"192411193\">Enemy_W5_AsatPramad_MainStory03</a>"
              }
            }
          ]
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  }
}