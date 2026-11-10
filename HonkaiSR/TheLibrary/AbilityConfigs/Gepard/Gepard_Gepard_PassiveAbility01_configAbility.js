const configAbility = {
  "fileName": "Gepard_Gepard_PassiveAbility01",
  "childAbilityList": [
    "Gepard_Gepard_PassiveAbility01",
    "Gepard_Gepard_PassiveAbility_1_Insert"
  ],
  "skillTrigger": "SkillP01",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-179604795\">Gepard_PassiveAbility_UnDead</a>[<span class=\"descriptionNumberColor\">Unyielding Will</span>]"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 1
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "0.35"
          },
          "variableName": "MDF_Rank01_P1_Chance"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 4
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-507520261\">Gepard_Eidolon4</a>"
        }
      ]
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-179604795\">Gepard_PassiveAbility_UnDead</a>[<span class=\"descriptionNumberColor\">Unyielding Will</span>]",
      "counter": 1,
      "description": "When struck with a killing blow, instead of becoming downed, Gepard immediately restores HP equal to <span class=\"descriptionNumberColor\">Modifier_Gepard_00_Ratio</span> of his Max HP.",
      "type": "Buff",
      "statusName": "Unyielding Will",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Update Displayed Energy Bar",
              "value": 1,
              "maximum": 1,
              "assignState": "True",
              "priorState": "Active",
              "bar#": 3
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "_Gepard_00_PassiveSkill_InsertController",
              "scope": "TargetEntity"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "Gepard_00_PassiveSkillSuccess",
              "scope": "TargetEntity"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "0.5"
              },
              "variableName": "Modifier_Gepard_00_Ratio"
            }
          ]
        },
        {
          "eventTrigger": "Waiting in Limbo [Owner]",
          "priorityLevel": -80,
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "_Gepard_00_PassiveSkill_InsertController",
                "compareType": "=",
                "value2": 0,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentHP",
                    "compareType": "<=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "Gepard_00_PassiveSkillSuccess",
                      "resetValue": 1,
                      "scope": "TargetEntity"
                    },
                    {
                      "name": "Dispel Debuffs",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      }
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Gepard_PassiveAbility_1_Insert",
                      "priorityTag": "CharacterReviveSelf",
                      "ownerState": "Mask_AliveOrLimbo",
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
                      "variableName": "_Gepard_00_PassiveSkill_InsertController",
                      "resetValue": 1,
                      "scope": "TargetEntity"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-507520261\">Gepard_Eidolon4</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1307422316\">Gepard_Eidolon4_AddStatusResistance</a>[<span class=\"descriptionNumberColor\">Effect RES Boost</span>]",
              "valuePerStack": {
                "MDF_AddStatusResistance": {
                  "displayLines": "0.2"
                }
              }
            }
          ]
        },
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Teammate",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                }
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1307422316\">Gepard_Eidolon4_AddStatusResistance</a>[<span class=\"descriptionNumberColor\">Effect RES Boost</span>]",
                  "valuePerStack": {
                    "MDF_AddStatusResistance": {
                      "displayLines": "0.2"
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Pre-Death [Owner]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Join Targets",
                "TargetList": [
                  {
                    "name": "Target Name",
                    "target": "{{All Team Members}}"
                  },
                  {
                    "name": "Target Name",
                    "target": "{{All Unselectable Targets}}"
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"1307422316\">Gepard_Eidolon4_AddStatusResistance</a>[<span class=\"descriptionNumberColor\">Effect RES Boost</span>]",
              "onlyRemoveOwnersInstance": true
            }
          ]
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  }
}