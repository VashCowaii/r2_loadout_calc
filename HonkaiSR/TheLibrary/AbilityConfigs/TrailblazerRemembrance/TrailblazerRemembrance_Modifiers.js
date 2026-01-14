const configAbility = {
  "fileName": "TrailblazerRemembrance_Modifiers",
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
      "for": "PlayerBoy_30_UltraState_Sub",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Update Ability Binding",
              "target": "Owner of this Modifier",
              "abilityName": "Skill01",
              "skillSlot": "Basic ATK"
            },
            {
              "name": "Update Ability Enhance Button",
              "target": "Owner of this Modifier",
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
              "target": "Owner of this Modifier",
              "abilityName": "Skill11",
              "skillSlot": "Basic ATK"
            },
            {
              "name": "Update Ability Enhance Button",
              "target": "Owner of this Modifier",
              "display": "Show",
              "abilityName": "Basic ATK"
            }
          ]
        }
      ],
      "removalDependencies": {
        "name": "Removal Dependency",
        "dependancyName": "PlayerBoy_30_UltraState[<span class=\"descriptionNumberColor\">Epic</span>]",
        "casterFilter": "Caster"
      }
    },
    {
      "name": "Modifier Construction",
      "for": "PlayerBoy_30_UltraState[<span class=\"descriptionNumberColor\">Epic</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": "Owner of this Modifier",
                "value1": null,
                "compareType": "<=",
                "value2": 0,
                "valueType": "Layer"
              },
              "passed": [
                "Modifier Deletes Itself"
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target Count",
                    "target": "Caster (Memosprite)",
                    "compareType": ">",
                    "value2": 0,
                    "livingTargets": true
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "PlayerBoy_30_UltraState_Sub"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "PlayerBoy_30_UltraState_Sub"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Entity Death [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target Count",
                "target": "Caster (Memosprite)",
                "compareType": ">",
                "value2": 0,
                "livingTargets": true
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "PlayerBoy_30_UltraState_Sub"
                }
              ],
              "failed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "PlayerBoy_30_UltraState_Sub"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target Count",
                "target": "Caster (Memosprite)",
                "compareType": ">",
                "value2": 0,
                "livingTargets": true
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "PlayerBoy_30_UltraState_Sub"
                }
              ],
              "failed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "PlayerBoy_30_UltraState_Sub"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Modifier is Added [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": "Caster",
                "flagName": "Charm"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "PlayerBoy_30_UltraState_Sub"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Losing Modifier [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Flag",
                    "target": "Caster",
                    "flagName": "Charm",
                    "invertCondition": true
                  },
                  {
                    "name": "Compare: Target Count",
                    "target": "Caster (Memosprite)",
                    "compareType": ">",
                    "value2": 0,
                    "livingTargets": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "PlayerBoy_30_UltraState_Sub"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "When Mem is on the field, Basic ATK is enhanced to \"Together, We Script Tomorrow!\"",
      "type": "Other",
      "effectName": "Epic",
      "statusName": "Epic",
      "stackLimit": 2,
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "M_PlayerBoy_30_CreateServantPreshow",
      "stackData": [
        "ServantID"
      ],
      "latentQueue": [],
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "entityType": "Servant",
        "skillType": [
          "Skill",
          "Ultimate"
        ],
        "conditions": {
          "name": "Compare: Target Count",
          "target": "Caster (Memosprite)",
          "compareType": "<=",
          "value2": 0,
          "livingTargets": true
        }
      }
    },
    {
      "name": "Modifier Construction",
      "for": "PlayerBoy_30_Halo_ListenSPChange",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "Energy Change",
          "execute": [
            {
              "name": "Define Custom Variable with Changes to Stats",
              "variableName": "_spDelta"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": "Owner of this Modifier",
                "value1": "_spDelta",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target Count",
                    "target": "Caster (Memosprite)",
                    "compareType": ">=",
                    "value2": 1,
                    "livingTargets": true
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_tmpTeamAddSP",
                      "value": {
                        "operator": "Variables[0] (TeamAddSP) || RETURN",
                        "displayLines": "TeamAddSP",
                        "constants": [],
                        "variables": [
                          "TeamAddSP"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": "Owner of this Modifier",
                      "variableName": "_tmpTeamAddSP",
                      "context": "ContextModifier",
                      "value": {
                        "operator": "Variables[0] (_spDelta) || RETURN",
                        "displayLines": "_spDelta",
                        "constants": [],
                        "variables": [
                          "_spDelta"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable with Clamp Configuration",
                      "context": "ContextModifier",
                      "ignoreBelow": 0.00010000006,
                      "variableName": "_tmpTeamAddSP"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "TeamAddSP",
                      "value": {
                        "operator": "Variables[0] (_tmpTeamAddSP) || RETURN",
                        "displayLines": "_tmpTeamAddSP",
                        "constants": [],
                        "variables": [
                          "_tmpTeamAddSP"
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ],
  "references": []
}