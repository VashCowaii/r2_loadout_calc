const configAbility = {
  "fileName": "8015040_Monster_W5_AsatPramad_PassiveAbility_Part02toPhase03",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "includeDyingTargets": true,
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2070107442\">Enemy_W5_AsatPramad_AcrossPhaseController</a>"
        },
        {
          "name": "Force Entity Death",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          }
        },
        {
          "name": "Mark Entity For Immediate Death",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          }
        },
        {
          "name": "Remove from Team Target Grouping",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "stayInTeam": false
        }
      ]
    },
    {
      "name": "Dispel Debuffs",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "silent": true
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"175633574\">Enemy_W5_AsatPramad_MainStory02</a>",
        "invertCondition": true
      },
      "passed": [
        {
          "name": "Change Battle Arena",
          "status": "Inactive",
          "arenaID": 2054102
        },
        {
          "name": "Change Battle Arena",
          "arenaID": 2054103
        }
      ]
    },
    {
      "name": "Create Enemies",
      "delayPercent": 0.333,
      "refreshPositions": false,
      "enemyList": [
        {
          "name": "Enemy Entry",
          "enemyID": {
            "operator": "Variables[0] (AsatPramad01ID) || RETURN",
            "displayLines": "AsatPramad01ID",
            "constants": [],
            "variables": [
              "AsatPramad01ID"
            ]
          },
          "locationType": "BeforeCaster"
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Recently Summoned Enemies}}"
      },
      "variableName": "DebuffFirstTimeCount",
      "value": {
        "operator": "Variables[0] (DebuffFirstTimeCount) || RETURN",
        "displayLines": "DebuffFirstTimeCount",
        "constants": [],
        "variables": [
          "DebuffFirstTimeCount"
        ]
      }
    },
    {
      "name": "Define Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Recently Summoned Enemies}}"
      },
      "variableName": "AIFlag",
      "value": 12
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Recently Summoned Enemies}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1242962761\">Enemy_W5_AsatPramad_Part03Unselectable</a>"
    },
    {
      "name": "Create Enemies",
      "delayPercent": 0.667,
      "refreshPositions": false,
      "enemyList": [
        {
          "name": "Enemy Entry",
          "enemyID": {
            "operator": "Variables[0] (AsatPramad02ID) || RETURN",
            "displayLines": "AsatPramad02ID",
            "constants": [],
            "variables": [
              "AsatPramad02ID"
            ]
          },
          "locationType": "BeforeCaster"
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Recently Summoned Enemies}}"
      },
      "variableName": "AIFlag",
      "value": 1
    },
    {
      "name": "Define Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Recently Summoned Enemies}}"
      },
      "variableName": "DebuffFirstTimeCount",
      "value": {
        "operator": "Variables[0] (DebuffFirstTimeCount) || RETURN",
        "displayLines": "DebuffFirstTimeCount",
        "constants": [],
        "variables": [
          "DebuffFirstTimeCount"
        ]
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Recently Summoned Enemies}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
    },
    {
      "name": "Change Character UI",
      "characterName": "Lord of Saṃvartasthāyi, Asat Pramad: \"Formation\"",
      "icon": "Monster_8015030.png"
    },
    {
      "name": "Change Character Model"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-490130876\">Enemy_W5_AsatPramad_Effect01</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-473353257\">Enemy_W5_AsatPramad_Effect00</a>"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "CurrentFace",
      "value": 0
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"542143301\">Monster_ChangePhase</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1242962761\">Enemy_W5_AsatPramad_Part03Unselectable</a>"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "AIFlag",
      "value": 12
    },
    {
      "name": "Remove from Team Target Grouping",
      "target": {
        "name": "Target Name",
        "target": "{{Asat Pramad: 0}}"
      },
      "stayInTeam": false
    },
    {
      "name": "Remove from Team Target Grouping",
      "target": {
        "name": "Target Name",
        "target": "{{Asat Pramad: 1}}"
      },
      "stayInTeam": false
    },
    {
      "name": "Create Shared HP Group",
      "target": {
        "name": "Target Name",
        "target": "{{Asat Pramad: 2}}"
      },
      "subTarget": {
        "name": "Target Name",
        "target": "{{Asat Pramad: 0}} + {{Asat Pramad: 1}}"
      }
    },
    {
      "name": "Boss Bar Display",
      "target": {
        "name": "Target Name",
        "target": "{{Asat Pramad: 2}}"
      },
      "display": true
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"175633574\">Enemy_W5_AsatPramad_MainStory02</a>"
      }
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"294502655\">Enemy_W5_AsatPramad_Endurance</a>"
    },
    {
      "name": "Action Advance/Delay",
      "advanceType": "Set",
      "target": {
        "name": "Target Name",
        "target": "{{Asat Pramad: 2}}"
      },
      "multiBase": 0
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-534385253\">Enemy_W5_AsatPramad_Part02</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Asat Pramad: 0}} + {{Asat Pramad: 1}} + {{Asat Pramad: 2}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-551162872\">Enemy_W5_AsatPramad_Part03</a>",
      "valuePerStack": {
        "MDF_Part03SpeedAddRatio": {
          "operator": "Variables[0] ({[SkillP01[5]]}) || RETURN",
          "displayLines": "{[SkillP01[5]]}",
          "constants": [],
          "variables": [
            "{[SkillP01[5]]}"
          ]
        }
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Add Target by Unique Identifier",
        "identifier": "BossSummonMonster"
      },
      "modifier": "<a class=\"gModGreen\" id=\"975723655\">Enemy_W5_AsatPramad_BESpeedUp</a>",
      "valuePerStack": {
        "MDF_SpeedAddedRatio": {
          "operator": "Variables[0] ({[SkillP04[3]]}) || RETURN",
          "displayLines": "{[SkillP04[3]]}",
          "constants": [],
          "variables": [
            "{[SkillP04[3]]}"
          ]
        }
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Add Target by Unique Identifier",
        "identifier": "BossUltra"
      },
      "modifier": "<a class=\"gModGreen\" id=\"975723655\">Enemy_W5_AsatPramad_BESpeedUp</a>",
      "valuePerStack": {
        "MDF_SpeedAddedRatio": {
          "operator": "Variables[0] (UnusedUnderThisBase_13195) || RETURN",
          "displayLines": "UnusedUnderThisBase_13195",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_13195"
          ]
        }
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Current Turn Is",
        "target": {
          "name": "Add Target by Unique Identifier",
          "identifier": "BossUltra"
        }
      },
      "passed": [
        {
          "name": "Assign Advance/Delay to Current Ability Use",
          "adjustmentValue": 1,
          "adjustmentType": "="
        }
      ],
      "failed": [
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Add Target by Unique Identifier",
            "identifier": "BossUltra"
          },
          "multiBase": 1
        }
      ]
    },
    {
      "name": "Preload Battle Event(s)",
      "eventID": [
        20050,
        20051
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"175633574\">Enemy_W5_AsatPramad_MainStory02</a>",
        "invertCondition": true
      },
      "passed": [
        {
          "name": "Add Battle Event",
          "teamName": "Enemy Team",
          "eventID": 20050,
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
              "uniqueName": "BE_AsatPramad_00",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-660230935\">Enemy_W5_AsatPramad_Part03Mark</a>[<span class=\"descriptionNumberColor\">Three Faces as One</span>]"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2037385218\">Enemy_W5_AsatPramad_Part03UnselectableMark</a>[<span class=\"descriptionNumberColor\">Elation Depleted</span>]"
            }
          ]
        },
        {
          "name": "Add Battle Event",
          "teamName": "Enemy Team",
          "eventID": 20051,
          "variables": null,
          "whenCreated": [
            {
              "name": "Action Advance/Delay",
              "advanceType": "Set",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "multiBase": 0.5
            },
            {
              "name": "Assign Unique Name",
              "uniqueName": "BE_AsatPramad_01",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-660230935\">Enemy_W5_AsatPramad_Part03Mark</a>[<span class=\"descriptionNumberColor\">Three Faces as One</span>]"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2037385218\">Enemy_W5_AsatPramad_Part03UnselectableMark</a>[<span class=\"descriptionNumberColor\">Elation Depleted</span>]"
            }
          ]
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"175633574\">Enemy_W5_AsatPramad_MainStory02</a>"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Asat Pramad: 0}} + {{Asat Pramad: 1}} + {{Asat Pramad: 2}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1997389745\">Enemy_W5_AsatPramad_MainStory02LockHP</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{{{Cyrene}}'s All Player Characters}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1327533640\">Enemy_W5_AsatPramad_MainStory02AvatarLockHP</a>"
        }
      ],
      "failed": [
        {
          "name": "Preload Battle Event(s)",
          "eventID": [
            60044
          ]
        },
        {
          "name": "Add Battle Event",
          "teamName": "Player Team",
          "dmgCountsForTeam": "Player Team",
          "eventID": 60044,
          "variables": null,
          "whenCreated": [
            {
              "name": "Assign Unique Name",
              "uniqueName": "HimekoBE",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            },
            {
              "name": "Show BattleEvent Button",
              "show": true
            }
          ]
        }
      ]
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"-1545281796\">W5_AsatPramad_Part03PosResetAfterAbility</a>"
    },
    {
      "name": "Action Advance/Delay",
      "advanceType": "Set",
      "target": {
        "name": "Add Target by Unique Identifier",
        "identifier": "BossSummonMonster"
      },
      "set": 0
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1327533640\">Enemy_W5_AsatPramad_MainStory02AvatarLockHP</a>",
      "latentQueue": [
        "AIFlag",
        "CurrentFace"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Lock HP",
              "threshold": 0.01
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1997389745\">Enemy_W5_AsatPramad_MainStory02LockHP</a>",
      "latentQueue": [
        "AIFlag",
        "CurrentFace"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Lock HP",
              "threshold": 0.7
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
              "value": 0.99
            }
          ]
        }
      ]
    }
  ]
}