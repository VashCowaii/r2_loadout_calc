const configAbility = {
  "fileName": "3025014_Monster_W3_Sunday_Ability042_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{All Team Members(Exclude Self)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1520970451\">Enemy_W3_Sunday_Ability042_PartCharacterChangePhase</a>"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{All Team Members(Exclude Self)}}"
      },
      "searchRandom": true,
      "conditions": {
        "name": "OR",
        "conditionList": [
          {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "flagName": "STAT_CTRL"
          },
          {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "flagName": "Break"
          },
          {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "flagName": "DisableAction"
          }
        ]
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"259206088\">Enemy_W3_Sunday_Ability042_PartSpecialAnimation</a>"
        }
      ]
    },
    {
      "name": "Exit Broken-State",
      "target": {
        "name": "Target Name",
        "target": "{{All Team Members(Exclude Self)}}"
      }
    },
    {
      "name": "Reset Toughness",
      "target": {
        "name": "Target Name",
        "target": "{{All Team Members(Exclude Self)}}"
      }
    },
    {
      "name": "Remove Modifier Behavior Flag(s)",
      "target": {
        "name": "Target Name",
        "target": "{{All Team Members(Exclude Self)}}"
      },
      "flagNames": []
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{All Team Members}}"
      },
      "searchRandom": true,
      "maxTargets": 1,
      "conditions": {
        "name": "Is Part Of Team Location",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "team": "Enemy Team"
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-103642110\">Enemy_W3_Sunday_Ability042_Part_ChargeEffect_Controller</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "STAT_CTRL"
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "Break"
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "DisableAction"
              }
            ],
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "ability": "Monster_W3_SundayPart_Ability04_Part01",
              "isTrigger": true
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-847238495\">Enemy_W3_Sunday_Ability042_Part_ChargeEffect</a>"
            }
          ]
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{All Team Members}}"
      },
      "searchRandom": true,
      "maxTargets": 1,
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Enemy Team",
            "location": "Left"
          },
          {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Enemy Team",
            "location": "Medium"
          },
          {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Enemy Team",
            "location": "Right",
            "invertCondition": true
          }
        ]
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-103642110\">Enemy_W3_Sunday_Ability042_Part_ChargeEffect_Controller</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "STAT_CTRL"
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "Break"
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "DisableAction"
              }
            ],
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "ability": "Monster_W3_SundayPart_Ability04_Part01",
              "isTrigger": true
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-847238495\">Enemy_W3_Sunday_Ability042_Part_ChargeEffect</a>"
            }
          ]
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{All Team Members}}"
      },
      "searchRandom": true,
      "maxTargets": 1,
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Enemy Team",
            "location": "Left",
            "invertCondition": true
          },
          {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Enemy Team",
            "location": "Medium"
          },
          {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Enemy Team",
            "location": "Right"
          }
        ]
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-103642110\">Enemy_W3_Sunday_Ability042_Part_ChargeEffect_Controller</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "STAT_CTRL"
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "Break"
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "DisableAction"
              }
            ],
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "ability": "Monster_W3_SundayPart_Ability04_Part01",
              "isTrigger": true
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-847238495\">Enemy_W3_Sunday_Ability042_Part_ChargeEffect</a>"
            }
          ]
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{All Team Members}}"
      },
      "searchRandom": true,
      "maxTargets": 1,
      "conditions": {
        "name": "Is Part Of Team Location",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "team": "Enemy Team",
        "location": "Max"
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-103642110\">Enemy_W3_Sunday_Ability042_Part_ChargeEffect_Controller</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "STAT_CTRL"
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "Break"
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "DisableAction"
              }
            ],
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "ability": "Monster_W3_SundayPart_Ability04_Part01",
              "isTrigger": true
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-847238495\">Enemy_W3_Sunday_Ability042_Part_ChargeEffect</a>"
            }
          ]
        }
      ]
    },
    "Ability Start",
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1395877089\">Enemy_W3_Sunday_Ability042_Charge_Body</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"54417858\">Enemy_W3_Sunday_Ability042_Charge</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{All Team Members(Exclude Self)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1520970451\">Enemy_W3_Sunday_Ability042_PartCharacterChangePhase</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{All Team Members(Exclude Self)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"259206088\">Enemy_W3_Sunday_Ability042_PartSpecialAnimation</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"2060454360\">Enemy_W3_Sunday_Ability042_DelayCost0</a>"
      },
      "passed": [
        {
          "name": "Assign Advance/Delay to Current Ability Use",
          "adjustmentValue": 0,
          "adjustmentType": "="
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2060454360\">Enemy_W3_Sunday_Ability042_DelayCost0</a>"
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
        "modifier": "<a class=\"gModGreen\" id=\"-2070195260\">Enemy_W3_Sunday_P2BELockHP</a>"
      },
      "passed": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2070195260\">Enemy_W3_Sunday_P2BELockHP</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1153660745\">Enemy_W3_Sunday_P2BELockHP_2</a>"
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}