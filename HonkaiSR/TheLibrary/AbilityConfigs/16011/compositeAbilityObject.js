const entityPageType = "misc"
const compositeAbilityObject = {
  "fullCharacterName": 16011,
  "trimCharacterName": 16011,
  "abilityList": [
    "16011_AetherDivide_W2_Mecha03_BE_PassiveAbility01",
    "16011_AetherDivide_W2_Mecha03_BE_PassiveAbility01_Insert",
    "16011_Modifiers"
  ],
  "abilityObject": {
    "16011_AetherDivide_W2_Mecha03_BE_PassiveAbility01": {
      "fileName": "16011_AetherDivide_W2_Mecha03_BE_PassiveAbility01",
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
          "modifier": "<a class=\"gModGreen\" id=\"1206712670\">AetherDivide_Standard_M</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1783331867\">AetherDivide_W2_Mecha03_BE</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1131911524\">AetherDivide_W2_Mecha03_BE_BaseSpeed</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1655995249\">AetherDivide_W2_Mecha03_BE_ForceKill</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1655995249\">AetherDivide_W2_Mecha03_BE_ForceKill</a>",
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
                    "modifier": "<a class=\"gModGreen\" id=\"-1934698696\">AetherDivide_W2_Mecha03_Ultra</a>"
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
            },
            {
              "eventTrigger": "Injected Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"428385014\">AetherDivide_W2_Mecha03_BE_Life</a>"
                  },
                  "failed": [
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
          "for": "<a class=\"gModGreen\" id=\"mod__1131911524\">AetherDivide_W2_Mecha03_BE_BaseSpeed</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (BE_AetherDivide_W2_Mecha03_00_BaseSpeed) || RETURN",
                    "displayLines": "BE_AetherDivide_W2_Mecha03_00_BaseSpeed",
                    "constants": [],
                    "variables": [
                      "BE_AetherDivide_W2_Mecha03_00_BaseSpeed"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1783331867\">AetherDivide_W2_Mecha03_BE</a>",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "AetherDivide_W2_Mecha03_BE_PassiveAbility01_Insert",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "priorityTag": "CharacterAttackFromSelf",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": false
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
    "16011_AetherDivide_W2_Mecha03_BE_PassiveAbility01_Insert": {
      "fileName": "16011_AetherDivide_W2_Mecha03_BE_PassiveAbility01_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "UI Display Event",
          "popUpText": "Scorch"
        },
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Battle Event's Caster}}"
          },
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "ability": "AetherDivide_W2_Mecha03_BE_Damage"
        }
      ],
      "onAbort": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Modifier Holder}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"428385014\">AetherDivide_W2_Mecha03_BE_Life</a>"
          },
          "failed": [
            {
              "name": "Force Entity Death",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              }
            }
          ]
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "16011_Modifiers": {
      "fileName": "16011_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-363487326\">AetherDivide_W2_Mecha03_Ultimate_Block</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_LightCharge",
                  "value": 99
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__428385014\">AetherDivide_W2_Mecha03_BE_Life</a>",
          "lifeCyclePhaseAllowed": "ModifierPhase1End"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-726225254\">AetherDivide_W2_Mecha03_BE_2</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-743002873\">AetherDivide_W2_Mecha03_BE_1</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__415943659\">AetherDivide_W2_Mecha03_UltraMode</a>[<span class=\"descriptionNumberColor\">Sanction Mode</span>]",
          "stackType": "ReplaceByCaster",
          "description": "Massively buffs Basic ATK and reduces the DMG taken by <span class=\"descriptionNumberColor\">MDF_DMGReduceRatio</span>.",
          "type": "Other",
          "effectName": "Sanction Mode",
          "statusName": "Sanction Mode",
          "duration": 2,
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityName": "Skill01",
                  "skillSlot": "Basic ATK"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_LightCharge",
                  "value": {
                    "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__254) || RETURN",
                    "displayLines": "ENEMIES_OBJECT_UNUSED__254",
                    "constants": [],
                    "variables": [
                      "ENEMIES_OBJECT_UNUSED__254"
                    ]
                  }
                },
                {
                  "name": "Update Ability Enhance Button",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "display": "Hide",
                  "abilityName": "Basic ATK"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityName": "Skill11",
                  "skillSlot": "Basic ATK"
                },
                {
                  "name": "Update Ability Enhance Button",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "display": "Show",
                  "abilityName": "Basic ATK"
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_DMGReduceRatio) || RETURN",
                    "displayLines": "MDF_DMGReduceRatio",
                    "constants": [],
                    "variables": [
                      "MDF_DMGReduceRatio"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1112709997\">AetherDivide_W2_Mecha03_Critical</a>",
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
                    "modifier": "<a class=\"gModGreen\" id=\"1241749540\">MWAetherDivide_Standard_P</a>"
                  }
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ],
      "references": []
    }
  },
  "enemyData": {},
  "isBattleEvent": true
}