const configAbility = {
  "fileName": "8015010_Modifiers",
  "abilityType": "Char. Modifiers",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1881731748\">Enemy_AML_Boss_DamageTakenUp</a>",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">EnemyVulnerability</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                "displayLines": "MDF_PropertyValue",
                "constants": [],
                "variables": [
                  "MDF_PropertyValue"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_PropertyValue"
      ],
      "latentQueue": [
        "_IsWeeklyBoss"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1032870546\">Enemy_WMonster_W0_Boss_Sign_Part3</a>",
      "modifierFlags": [],
      "execute": [
        {
          "eventTrigger": "When Put in Deathstate Limbo",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "_Part3_Alive"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "_Part3_Alive",
              "value": 1
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1049648165\">Enemy_WMonster_W0_Boss_Sign_Part2</a>",
      "modifierFlags": [],
      "execute": [
        {
          "eventTrigger": "When Put in Deathstate Limbo",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "_Part2_Alive"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "_Part2_Alive",
              "value": 1
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__999315308\">Enemy_WMonster_W0_Boss_Sign_Part1</a>",
      "modifierFlags": [],
      "execute": [
        {
          "eventTrigger": "When Put in Deathstate Limbo",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "_Part1_Alive"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "_Part1_Alive",
              "value": 1
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1032417957\">Enemy_Monster_AML_Boss_Passive_WeakPhysical</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Modify Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "valueList": [
                "Physical"
              ]
            },
            {
              "name": "Stack Element Resistance",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "resistArray": [
                {
                  "element": "Physical",
                  "value": 0
                },
                {
                  "element": "Fire",
                  "value": 0
                },
                {
                  "element": "Ice",
                  "value": 0
                },
                {
                  "element": "Thunder",
                  "value": 0
                },
                {
                  "element": "Wind",
                  "value": 0
                },
                {
                  "element": "Quantum",
                  "value": 0
                },
                {
                  "element": "Imaginary",
                  "value": 0
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1376978052\">Enemy_Monster_AML_Boss_Passive_WeakWind</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Modify Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "valueList": [
                "Wind"
              ]
            },
            {
              "name": "Stack Element Resistance",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "resistArray": [
                {
                  "element": "Physical",
                  "value": 0
                },
                {
                  "element": "Fire",
                  "value": 0
                },
                {
                  "element": "Ice",
                  "value": 0
                },
                {
                  "element": "Thunder",
                  "value": 0
                },
                {
                  "element": "Wind",
                  "value": 0
                },
                {
                  "element": "Quantum",
                  "value": 0
                },
                {
                  "element": "Imaginary",
                  "value": 0
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1305712230\">Enemy_Monster_AML_Boss_Passive_WeakFire</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Modify Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "valueList": [
                "Fire"
              ]
            },
            {
              "name": "Stack Element Resistance",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "resistArray": [
                {
                  "element": "Physical",
                  "value": 0
                },
                {
                  "element": "Fire",
                  "value": 0
                },
                {
                  "element": "Ice",
                  "value": 0
                },
                {
                  "element": "Thunder",
                  "value": 0
                },
                {
                  "element": "Wind",
                  "value": 0
                },
                {
                  "element": "Quantum",
                  "value": 0
                },
                {
                  "element": "Imaginary",
                  "value": 0
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1597601869\">Enemy_Monster_AML_Boss_Passive_WeakIce</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Modify Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "valueList": [
                "Ice"
              ]
            },
            {
              "name": "Stack Element Resistance",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "resistArray": [
                {
                  "element": "Physical",
                  "value": 0
                },
                {
                  "element": "Fire",
                  "value": 0
                },
                {
                  "element": "Ice",
                  "value": 0
                },
                {
                  "element": "Thunder",
                  "value": 0
                },
                {
                  "element": "Wind",
                  "value": 0
                },
                {
                  "element": "Quantum",
                  "value": 0
                },
                {
                  "element": "Imaginary",
                  "value": 0
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__489144285\">Enemy_WMonster_W0_Boss_ListenAllPartDie</a>",
      "execute": [
        {
          "eventTrigger": "Entity Death [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{All Team Members(Exclude Self)}}"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": "=",
                    "value2": 0
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "ListenAllDieController",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "ListenAllDieController",
                  "value": 1
                },
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_AML_Boss_Insert02_Part01",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "priorityTag": "MonsterChangePhase",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "allowAbilityTriggers": false
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "_IsWeeklyBoss"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1741877307\">Enemy_WMonster_W0_Boss_LockHP_1</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        },
        {
          "eventTrigger": "Waiting for Healing in Limbo",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "LockHP_1_InsertController",
                "compareType": "=",
                "value2": 0,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Set Enemy Phase",
                  "mode": "Inc"
                },
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_AML_Boss_Insert_Part01",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "priorityTag": "MonsterChangePhase",
                  "ownerState": "Mask_AliveOrLimbo",
                  "targetState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "allowAbilityTriggers": false
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "LockHP_1_InsertController",
                  "value": 1
                }
              ]
            }
          ],
          "priorityLevel": -90
        }
      ],
      "stackData": [],
      "latentQueue": [
        "_IsWeeklyBoss"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1691894969\">Enemy_WMonster_W0_Boss_Unselectable</a>[<span class=\"descriptionNumberColor\">Vestige Valor</span>]",
      "modifierFlags": [
        "Stealth",
        "BlockDamage",
        "Endurance"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            "Mark Entity as Non-Target(Unselectable)"
          ]
        }
      ],
      "useEntitySnapshot": true,
      "stackData": [],
      "latentQueue": [],
      "description": "Cannot be targeted until Disaster's Right Hand, Dawn's Left Hand, and Antimatter Engine have all been destroyed.",
      "type": "Buff",
      "statusName": "Vestige Valor"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1605741417\">Enemy_AML_Boss_HitEffect</a>",
      "execute": [
        {
          "eventTrigger": "Take Damage End [Owner]: Hit"
        }
      ],
      "stackData": [],
      "latentQueue": [
        "ListenAllDieController"
      ]
    }
  ],
  "references": []
}