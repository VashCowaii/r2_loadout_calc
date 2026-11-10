const configAbility = {
  "fileName": "BlackSwanv0_BlackSwan_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Wind",
        "Damage": {
          "displayLines": "0.9"
        },
        "Toughness": {
          "displayLines": "ST Toughness Value"
        },
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Targets Adjacent(Blast)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Wind",
        "Damage": {
          "displayLines": "0.9"
        },
        "Toughness": {
          "displayLines": "Blast Toughness Value"
        },
        "Tags": null
      }
    },
    "Trigger: Attack End",
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"1367341755\">AddDot</a>",
      "variables": {
        "Arg01": {
          "displayLines": "1"
        }
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Viscera's Disquiet"
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "flagName": "STAT_DOT_Poison"
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1367341755\">AddDot</a>",
              "variables": {
                "Arg01": {
                  "displayLines": "0.65"
                }
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "flagName": "STAT_DOT_Bleed"
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1367341755\">AddDot</a>",
              "variables": {
                "Arg01": {
                  "displayLines": "0.65"
                }
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "flagName": "STAT_DOT_Burn"
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1367341755\">AddDot</a>",
              "variables": {
                "Arg01": {
                  "displayLines": "0.65"
                }
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "flagName": "STAT_DOT_Electric"
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1367341755\">AddDot</a>",
              "variables": {
                "Arg01": {
                  "displayLines": "0.65"
                }
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Ability Targets Adjacent(Blast)}}"
      },
      "searchRandom": true,
      "maxTargets": 2,
      "ifTargetFound": [
        {
          "name": "IF",
          "conditions": {
            "name": "Random Chance",
            "chance": {
              "displayLines": "Rank06_Chance"
            }
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(1 + Rank06_Extra_Layer)"
              },
              "variableName": "Rank06_Weighted_Stack_Layer"
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "1"
              },
              "variableName": "Rank06_Weighted_Stack_Layer"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2037361233\">BlackSwan_DOT</a>[<span class=\"descriptionNumberColor\">Arcana</span>]",
          "baseChance": {
            "displayLines": "1"
          },
          "stackLimit": {
            "displayLines": "Max_DOT_Layer"
          },
          "valuePerStack": {
            "Basic_DamagePercentage": {
              "displayLines": "2.4"
            },
            "ExtraLayer_DamagePercentage": {
              "displayLines": "0.12"
            },
            "SecondLayer": {
              "displayLines": "3"
            },
            "Spread_DamagePercentage": {
              "displayLines": "1.8"
            },
            "ThirdLayer": {
              "displayLines": "7"
            },
            "DefenceIgnore": {
              "displayLines": "0.2"
            },
            "Cast_By_Level": 0
          },
          "addStacksPerTrigger": {
            "displayLines": "Rank06_Weighted_Stack_Layer"
          }
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"2093125302\">BlackSwan_DefenceDown</a>[<span class=\"descriptionNumberColor\">Decadence, False Twilight</span>]",
      "duration": {
        "displayLines": "3"
      },
      "baseChance": {
        "displayLines": "1"
      },
      "valuePerStack": {
        "MDF_PropertyValue": {
          "displayLines": "0.208"
        }
      }
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Ability Targets Adjacent(Blast)}}"
      },
      "searchRandom": true,
      "maxTargets": 2,
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2093125302\">BlackSwan_DefenceDown</a>[<span class=\"descriptionNumberColor\">Decadence, False Twilight</span>]",
          "duration": {
            "displayLines": "3"
          },
          "baseChance": {
            "displayLines": "1"
          },
          "valuePerStack": {
            "MDF_PropertyValue": {
              "displayLines": "0.208"
            }
          }
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "functions": [
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__1367341755\">AddDot</a>",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Random Chance",
            "chance": {
              "displayLines": "Rank06_Chance"
            }
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(1 + Rank06_Extra_Layer)"
              },
              "variableName": "Rank06_Weighted_Stack_Layer"
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "1"
              },
              "variableName": "Rank06_Weighted_Stack_Layer"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2037361233\">BlackSwan_DOT</a>[<span class=\"descriptionNumberColor\">Arcana</span>]",
          "baseChance": {
            "displayLines": "Arg01"
          },
          "stackLimit": {
            "displayLines": "Max_DOT_Layer"
          },
          "valuePerStack": {
            "Basic_DamagePercentage": {
              "displayLines": "2.4"
            },
            "ExtraLayer_DamagePercentage": {
              "displayLines": "0.12"
            },
            "SecondLayer": {
              "displayLines": "3"
            },
            "Spread_DamagePercentage": {
              "displayLines": "1.8"
            },
            "ThirdLayer": {
              "displayLines": "7"
            },
            "DefenceIgnore": {
              "displayLines": "0.2"
            },
            "Cast_By_Level": 0
          },
          "addStacksPerTrigger": {
            "displayLines": "Rank06_Weighted_Stack_Layer"
          }
        }
      ]
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2093125302\">BlackSwan_DefenceDown</a>[<span class=\"descriptionNumberColor\">Decadence, False Twilight</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "DEF_DOWN"
      ],
      "stackData": [
        "MDF_PropertyValue"
      ],
      "description": "DEF -<span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Debuff",
      "effectName": "DEF Reduction",
      "statusName": "Decadence, False Twilight",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
              "statValue": {
                "displayLines": "(0 - MDF_PropertyValue)"
              }
            }
          ]
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}