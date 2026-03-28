const configAbility = {
  "fileName": "4013016_Monster_W4_Claymore_LocalLegend_PassiveAbilityInitiate",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Level Entity}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"983561949\">W4_Claymore_LocalLegend_BattleScore1</a>",
      "casterAssign": "TargetSelf"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
    },
    {
      "name": "Boss Bar Display",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "display": true
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1166907060\">Enemy_Standard_MuteHitFly</a>"
    },
    {
      "name": "Set Enemy Phase"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Stage ID",
        "ID": 426005,
        "compareType": "=",
        "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "_Strongman_LifeCount",
          "value": {
            "operator": "Variables[0] (UnusedUnderThisBase_435) || RETURN",
            "displayLines": "UnusedUnderThisBase_435",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_435"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Scholar_LifeCount",
          "value": {
            "operator": "Variables[0] (UnusedUnderThisBase_436) || RETURN",
            "displayLines": "UnusedUnderThisBase_436",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_436"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Minion03_LifeCount",
          "value": {
            "operator": "Variables[0] (UnusedUnderThisBase_437) || RETURN",
            "displayLines": "UnusedUnderThisBase_437",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_437"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_SelfP1_LifeCount",
          "value": {
            "operator": "Variables[0] (UnusedUnderThisBase_438) || RETURN",
            "displayLines": "UnusedUnderThisBase_438",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_438"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_SelfP2_LifeCount",
          "value": {
            "operator": "Variables[0] (UnusedUnderThisBase_439) || RETURN",
            "displayLines": "UnusedUnderThisBase_439",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_439"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Shooter_LifeCount",
          "value": {
            "operator": "Variables[0] (UnusedUnderThisBase_440) || RETURN",
            "displayLines": "UnusedUnderThisBase_440",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_440"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Avatar_LifeCount",
          "value": {
            "operator": "Variables[0] (UnusedUnderThisBase_441) || RETURN",
            "displayLines": "UnusedUnderThisBase_441",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_441"
            ]
          }
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "variableName": "_Avatar_LifeCount",
          "value": {
            "operator": "Variables[0] (UnusedUnderThisBase_442) || RETURN",
            "displayLines": "UnusedUnderThisBase_442",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_442"
            ]
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "OR",
        "conditionList": [
          {
            "name": "Stage ID",
            "ID": 4260010,
            "compareType": "=",
            "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
          },
          {
            "name": "Stage ID",
            "ID": 4260011,
            "compareType": "=",
            "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
          },
          {
            "name": "Stage ID",
            "ID": 4260040,
            "compareType": "=",
            "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
          },
          {
            "name": "Stage ID",
            "ID": 4260041,
            "compareType": "=",
            "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
          }
        ]
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "_Strongman_LifeCount",
          "value": {
            "operator": "Variables[0] (UnusedUnderThisBase_443) || RETURN",
            "displayLines": "UnusedUnderThisBase_443",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_443"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Scholar_LifeCount",
          "value": {
            "operator": "Variables[0] (UnusedUnderThisBase_444) || RETURN",
            "displayLines": "UnusedUnderThisBase_444",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_444"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Minion03_LifeCount",
          "value": {
            "operator": "Variables[0] (UnusedUnderThisBase_445) || RETURN",
            "displayLines": "UnusedUnderThisBase_445",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_445"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_SelfP1_LifeCount",
          "value": {
            "operator": "Variables[0] (UnusedUnderThisBase_446) || RETURN",
            "displayLines": "UnusedUnderThisBase_446",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_446"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_SelfP2_LifeCount",
          "value": {
            "operator": "Variables[0] (UnusedUnderThisBase_447) || RETURN",
            "displayLines": "UnusedUnderThisBase_447",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_447"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Shooter_LifeCount",
          "value": {
            "operator": "Variables[0] (UnusedUnderThisBase_448) || RETURN",
            "displayLines": "UnusedUnderThisBase_448",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_448"
            ]
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "OR",
        "conditionList": [
          {
            "name": "Stage ID",
            "ID": 4260012,
            "compareType": "=",
            "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
          },
          {
            "name": "Stage ID",
            "ID": 4260042,
            "compareType": "=",
            "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
          }
        ]
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "_Strongman_LifeCount",
          "value": {
            "operator": "Variables[0] (UnusedUnderThisBase_449) || RETURN",
            "displayLines": "UnusedUnderThisBase_449",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_449"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Scholar_LifeCount",
          "value": {
            "operator": "Variables[0] (UnusedUnderThisBase_450) || RETURN",
            "displayLines": "UnusedUnderThisBase_450",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_450"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Minion03_LifeCount",
          "value": {
            "operator": "Variables[0] (UnusedUnderThisBase_451) || RETURN",
            "displayLines": "UnusedUnderThisBase_451",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_451"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_SelfP1_LifeCount",
          "value": {
            "operator": "Variables[0] (UnusedUnderThisBase_452) || RETURN",
            "displayLines": "UnusedUnderThisBase_452",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_452"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_SelfP2_LifeCount",
          "value": {
            "operator": "Variables[0] (UnusedUnderThisBase_453) || RETURN",
            "displayLines": "UnusedUnderThisBase_453",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_453"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Shooter_LifeCount",
          "value": {
            "operator": "Variables[0] (UnusedUnderThisBase_454) || RETURN",
            "displayLines": "UnusedUnderThisBase_454",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_454"
            ]
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "OR",
        "conditionList": [
          {
            "name": "Stage ID",
            "ID": 4260013,
            "compareType": "=",
            "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
          },
          {
            "name": "Stage ID",
            "ID": 4260043,
            "compareType": "=",
            "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
          }
        ]
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "_Strongman_LifeCount",
          "value": {
            "operator": "Variables[0] (UnusedUnderThisBase_455) || RETURN",
            "displayLines": "UnusedUnderThisBase_455",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_455"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Scholar_LifeCount",
          "value": {
            "operator": "Variables[0] (UnusedUnderThisBase_456) || RETURN",
            "displayLines": "UnusedUnderThisBase_456",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_456"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Minion03_LifeCount",
          "value": {
            "operator": "Variables[0] (UnusedUnderThisBase_457) || RETURN",
            "displayLines": "UnusedUnderThisBase_457",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_457"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_SelfP1_LifeCount",
          "value": {
            "operator": "Variables[0] (UnusedUnderThisBase_458) || RETURN",
            "displayLines": "UnusedUnderThisBase_458",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_458"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_SelfP2_LifeCount",
          "value": {
            "operator": "Variables[0] (UnusedUnderThisBase_459) || RETURN",
            "displayLines": "UnusedUnderThisBase_459",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_459"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Shooter_LifeCount",
          "value": {
            "operator": "Variables[0] (UnusedUnderThisBase_460) || RETURN",
            "displayLines": "UnusedUnderThisBase_460",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_460"
            ]
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "OR",
        "conditionList": [
          {
            "name": "Stage ID",
            "ID": 4260014,
            "compareType": "=",
            "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
          },
          {
            "name": "Stage ID",
            "ID": 4260044,
            "compareType": "=",
            "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
          }
        ]
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "_Strongman_LifeCount",
          "value": {
            "operator": "Variables[0] (UnusedUnderThisBase_461) || RETURN",
            "displayLines": "UnusedUnderThisBase_461",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_461"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Scholar_LifeCount",
          "value": {
            "operator": "Variables[0] (UnusedUnderThisBase_462) || RETURN",
            "displayLines": "UnusedUnderThisBase_462",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_462"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Minion03_LifeCount",
          "value": {
            "operator": "Variables[0] (UnusedUnderThisBase_463) || RETURN",
            "displayLines": "UnusedUnderThisBase_463",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_463"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_SelfP1_LifeCount",
          "value": {
            "operator": "Variables[0] (UnusedUnderThisBase_464) || RETURN",
            "displayLines": "UnusedUnderThisBase_464",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_464"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_SelfP2_LifeCount",
          "value": {
            "operator": "Variables[0] (UnusedUnderThisBase_465) || RETURN",
            "displayLines": "UnusedUnderThisBase_465",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_465"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Shooter_LifeCount",
          "value": {
            "operator": "Variables[0] (UnusedUnderThisBase_466) || RETURN",
            "displayLines": "UnusedUnderThisBase_466",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_466"
            ]
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "OR",
        "conditionList": [
          {
            "name": "Stage ID",
            "ID": 4260015,
            "compareType": "=",
            "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
          },
          {
            "name": "Stage ID",
            "ID": 4260045,
            "compareType": "=",
            "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
          }
        ]
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "_Strongman_LifeCount",
          "value": {
            "operator": "Variables[0] (UnusedUnderThisBase_467) || RETURN",
            "displayLines": "UnusedUnderThisBase_467",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_467"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Scholar_LifeCount",
          "value": {
            "operator": "Variables[0] (UnusedUnderThisBase_468) || RETURN",
            "displayLines": "UnusedUnderThisBase_468",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_468"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Minion03_LifeCount",
          "value": {
            "operator": "Variables[0] (UnusedUnderThisBase_469) || RETURN",
            "displayLines": "UnusedUnderThisBase_469",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_469"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_SelfP1_LifeCount",
          "value": {
            "operator": "Variables[0] (UnusedUnderThisBase_470) || RETURN",
            "displayLines": "UnusedUnderThisBase_470",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_470"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_SelfP2_LifeCount",
          "value": {
            "operator": "Variables[0] (UnusedUnderThisBase_471) || RETURN",
            "displayLines": "UnusedUnderThisBase_471",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_471"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Shooter_LifeCount",
          "value": {
            "operator": "Variables[0] (UnusedUnderThisBase_472) || RETURN",
            "displayLines": "UnusedUnderThisBase_472",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_472"
            ]
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "OR",
        "conditionList": [
          {
            "name": "Stage ID",
            "ID": 4260016,
            "compareType": "=",
            "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
          },
          {
            "name": "Stage ID",
            "ID": 4260046,
            "compareType": "=",
            "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
          }
        ]
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "_Strongman_LifeCount",
          "value": {
            "operator": "Variables[0] (UnusedUnderThisBase_473) || RETURN",
            "displayLines": "UnusedUnderThisBase_473",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_473"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Scholar_LifeCount",
          "value": {
            "operator": "Variables[0] (UnusedUnderThisBase_474) || RETURN",
            "displayLines": "UnusedUnderThisBase_474",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_474"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Minion03_LifeCount",
          "value": {
            "operator": "Variables[0] (UnusedUnderThisBase_475) || RETURN",
            "displayLines": "UnusedUnderThisBase_475",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_475"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_SelfP1_LifeCount",
          "value": {
            "operator": "Variables[0] (UnusedUnderThisBase_476) || RETURN",
            "displayLines": "UnusedUnderThisBase_476",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_476"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_SelfP2_LifeCount",
          "value": {
            "operator": "Variables[0] (UnusedUnderThisBase_477) || RETURN",
            "displayLines": "UnusedUnderThisBase_477",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_477"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Shooter_LifeCount",
          "value": {
            "operator": "Variables[0] (UnusedUnderThisBase_478) || RETURN",
            "displayLines": "UnusedUnderThisBase_478",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_478"
            ]
          }
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-468473895\">Monster_W4_Claymore_LocalLegend_Status</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "OR",
        "conditionList": [
          {
            "name": "Enemy ID",
            "ID": 4013014,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
          },
          {
            "name": "Enemy ID",
            "ID": 401301400,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": null
          }
        ]
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-479922792\">Monster_W4_Claymore_LocalLegend_PartController_LockHP</a>"
        }
      ]
    },
    {
      "name": "Create Enemies",
      "delayPercent": {
        "operator": "Variables[0] (UnusedUnderThisBase_481) || RETURN",
        "displayLines": "UnusedUnderThisBase_481",
        "constants": [],
        "variables": [
          "UnusedUnderThisBase_481"
        ]
      },
      "enemyList": [
        {
          "name": "Enemy Entry",
          "enemyID": {
            "operator": "Variables[0] (SummonID03) || RETURN",
            "displayLines": "SummonID03",
            "constants": [],
            "variables": [
              "SummonID03"
            ]
          },
          "locationType": "AfterCaster"
        }
      ]
    },
    {
      "name": "Create Enemies",
      "delayPercent": {
        "operator": "Variables[0] (UnusedUnderThisBase_479) || RETURN",
        "displayLines": "UnusedUnderThisBase_479",
        "constants": [],
        "variables": [
          "UnusedUnderThisBase_479"
        ]
      },
      "enemyList": [
        {
          "name": "Enemy Entry",
          "enemyID": {
            "operator": "Variables[0] (SummonID03) || RETURN",
            "displayLines": "SummonID03",
            "constants": [],
            "variables": [
              "SummonID03"
            ]
          },
          "locationType": "BeforeCaster"
        }
      ]
    },
    {
      "name": "Create Enemies",
      "delayPercent": {
        "operator": "Variables[0] (UnusedUnderThisBase_100) || RETURN",
        "displayLines": "UnusedUnderThisBase_100",
        "constants": [],
        "variables": [
          "UnusedUnderThisBase_100"
        ]
      },
      "enemyList": [
        {
          "name": "Enemy Entry",
          "enemyID": {
            "operator": "Variables[0] (SummonID01) || RETURN",
            "displayLines": "SummonID01",
            "constants": [],
            "variables": [
              "SummonID01"
            ]
          },
          "locationType": "AroundCasterOnEdge"
        }
      ]
    },
    {
      "name": "Create Enemies",
      "delayPercent": {
        "operator": "Variables[0] (UnusedUnderThisBase_480) || RETURN",
        "displayLines": "UnusedUnderThisBase_480",
        "constants": [],
        "variables": [
          "UnusedUnderThisBase_480"
        ]
      },
      "enemyList": [
        {
          "name": "Enemy Entry",
          "enemyID": {
            "operator": "Variables[0] (SummonID01) || RETURN",
            "displayLines": "SummonID01",
            "constants": [],
            "variables": [
              "SummonID01"
            ]
          },
          "locationType": "AroundCasterOnEdge"
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"530468008\">Enemy_W4_Claymore_LocalLegend_Init_LockHp</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"449361701\">Enemy_Standard_LocalLegend_Init_MuteBreak</a>"
    }
  ],
  "whenAdded": [],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}