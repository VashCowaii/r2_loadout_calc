const configAbility = {
  "fileName": "60012_MissionBattleEvent60012_AbilityP01",
  "childAbilityList": [
    "60012_MissionBattleEvent60012_AbilityP01"
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
      "modifier": "<a class=\"gModGreen\" id=\"60612445\">MissionBattleEvent60012_ShowButton</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-2045928367\">MissionBattleEvent60012_PassiveAbility</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"871810204\">MissionBattleEvent60012_Charge</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"2112275517\">MissionBattleEvent60012_AutoUseUltraAbility</a>"
    },
    {
      "name": "Update Energy",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "value": {
        "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
        "displayLines": "{[SkillP01[1]]}",
        "constants": [],
        "variables": [
          "{[SkillP01[1]]}"
        ]
      },
      "isFixed": "(Fixed)"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-2097606411\">MissionBattleEvent60012_AttackIgnoreDEF</a>"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "searchRandom": true,
      "maxTargets": 1,
      "conditions": {
        "name": "OR",
        "conditionList": [
          {
            "name": "Character ID",
            "ID": 8005,
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": "Trailblazer - Harmony[M]"
          },
          {
            "name": "Character ID",
            "ID": 8006,
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": "Trailblazer - Harmony[F]"
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
          "modifier": "<a class=\"gModGreen\" id=\"284318066\">MissionBattleEvent60012_PlayerAddAbility</a>"
        }
      ]
    }
  ],
  "whenAdded": [],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__284318066\">MissionBattleEvent60012_PlayerAddAbility</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Add Ability",
              "abilityName": "MissionBattleEvent60012_Player_Ability03_Part01"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-37152948\">MissionBattleEvent60012_LightTeamBonus</a>",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakEfficiency</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_StanceBreakAddedRatio) || RETURN",
                "displayLines": "MDF_StanceBreakAddedRatio",
                "constants": [],
                "variables": [
                  "MDF_StanceBreakAddedRatio"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2097606411\">MissionBattleEvent60012_AttackIgnoreDEF</a>",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Hit",
          "execute": [
            {
              "name": "Adjust Target Stats",
              "modifiedValuesArray": [
                {
                  "on": "Defender",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                  "value": -1
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2112275517\">MissionBattleEvent60012_AutoUseUltraAbility</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Automatically use Ultimate",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__871810204\">MissionBattleEvent60012_Charge</a>",
      "modifierFlags": [
        "ListenBattleEventSkill"
      ],
      "execute": [
        {
          "eventTrigger": "Ability Use [Anyone]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Current Action Holder's Team",
                    "team": "Player Team"
                  },
                  {
                    "name": "NOT",
                    "condition": {
                      "name": "Skill Type",
                      "skillType": "Ultimate"
                    }
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"2124259254\">MissionBattleEvent60012_Charge_permission</a>"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": {
                    "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
                    "displayLines": "{[SkillP01[0]]}",
                    "constants": [],
                    "variables": [
                      "{[SkillP01[0]]}"
                    ]
                  },
                  "isFixed": "(Fixed)"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2045928367\">MissionBattleEvent60012_PassiveAbility</a>",
      "modifierFlags": [
        "BlockDamage",
        "Stealth"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            "Mark Entity as Non-Target(Unselectable)"
          ]
        },
        {
          "eventTrigger": "When Modifier is Added [Owner]",
          "execute": [
            {
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "typeOverride": "Buff"
            },
            {
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              }
            },
            {
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "typeOverride": "Other"
            }
          ]
        },
        {
          "eventTrigger": "Energy Change"
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__60612445\">MissionBattleEvent60012_ShowButton</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            "Show BattleEvent Button"
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  }
}