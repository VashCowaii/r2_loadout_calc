const entityPageType = "misc"
const compositeAbilityObject = {
  "fullCharacterName": 16007,
  "trimCharacterName": 16007,
  "abilityList": [
    "16007_Modifiers",
    "16007_BattleEventAbility_AetherDivide_W2_Beast01_01_Passive",
    "16007_AetherDivide_W2_Beast01_01_Passive_Insert"
  ],
  "abilityObject": {
    "16007_Modifiers": {
      "fileName": "16007_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1501720216\">AetherDivide_W2_Beast01_01_Electric</a>[<span class=\"descriptionNumberColor\">Shock</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "STAT_DOT",
            "STAT_DOT_Electric"
          ],
          "useEntitySnapshot": true,
          "description": "For a set number of turns, takes DoT at the start of each turn",
          "type": "Debuff",
          "effectName": "Shock",
          "statusName": "Shock",
          "addStacksPerTrigger": 1,
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is NOT in Auto-Battle State"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "Modifier_Electric_ElectricLayer",
                  "multiplier": 1
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Thunder",
                    "Damage": {
                      "operator": "Variables[0] (Modifier_Electric_DamagePercentage) || Variables[1] (Modifier_Electric_ElectricLayer) || MUL || RETURN",
                      "displayLines": "(Modifier_Electric_DamagePercentage * Modifier_Electric_ElectricLayer)",
                      "constants": [],
                      "variables": [
                        "Modifier_Electric_DamagePercentage",
                        "Modifier_Electric_ElectricLayer"
                      ]
                    },
                    "DamageFlat": {
                      "operator": "Variables[0] (Modifier_Electric_DamageValue) || RETURN",
                      "displayLines": "Modifier_Electric_DamageValue",
                      "constants": [],
                      "variables": [
                        "Modifier_Electric_DamageValue"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "Modifier_Electric_ElectricLayer",
                  "multiplier": 1
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Thunder",
                    "Damage": {
                      "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (Modifier_Electric_DamagePercentage) || MUL || Variables[2] (Modifier_Electric_ElectricLayer) || MUL || RETURN",
                      "displayLines": "((DOT_TriggerRatio * Modifier_Electric_DamagePercentage) * Modifier_Electric_ElectricLayer)",
                      "constants": [],
                      "variables": [
                        "DOT_TriggerRatio",
                        "Modifier_Electric_DamagePercentage",
                        "Modifier_Electric_ElectricLayer"
                      ]
                    },
                    "DamageFlat": {
                      "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (Modifier_Electric_DamageValue) || MUL || RETURN",
                      "displayLines": "(DOT_TriggerRatio * Modifier_Electric_DamageValue)",
                      "constants": [],
                      "variables": [
                        "DOT_TriggerRatio",
                        "Modifier_Electric_DamageValue"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-219601494\">AetherDivide_W2_Beast01_01_Critical</a>",
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
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1122824575\">AetherDivide_Standard_B</a>"
                  }
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ],
      "references": []
    },
    "16007_BattleEventAbility_AetherDivide_W2_Beast01_01_Passive": {
      "fileName": "16007_BattleEventAbility_AetherDivide_W2_Beast01_01_Passive",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1424821717\">AetherDivide_Standard_P</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-35249873\">AetherDivide_W2_Beast01_01_BattleEvent</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-274213515\">Beast01_01_BattleEvent_ForceKill</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-274213515\">Beast01_01_BattleEvent_ForceKill</a>",
          "execute": [
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1729613140\">AetherDivide_W2_Beast01_01_MDF</a>"
                  },
                  "passed": [
                    {
                      "name": "Force Entity Death",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-35249873\">AetherDivide_W2_Beast01_01_BattleEvent</a>",
          "modifierFlags": [
            "BlockDamage",
            "Stealth"
          ],
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "AetherDivide_W2_Beast01_01_Passive_Insert",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "priorityTag": "CharacterAttackFromSelf",
                      "canHitNonTargets": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "16007_AetherDivide_W2_Beast01_01_Passive_Insert": {
      "fileName": "16007_AetherDivide_W2_Beast01_01_Passive_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "UI Display Event",
          "popUpText": "Wolf Predation"
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Battle Event's Caster}}"
          },
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "ability": "AetherDivide_W2_Beast01_01_NormalAttackDamage",
          "isTrigger": true
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    }
  },
  "enemyData": {},
  "isBattleEvent": true
}