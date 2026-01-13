const configAbility = {
  "fileName": "TopazNumby_Topaz_BE_PassiveAbility",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "Topaz_BETag"
    },
    {
      "name": "Set Action-State",
      "on": null,
      "stateName": "TopazBE",
      "state": false
    },
    {
      "name": "Set Action-State",
      "on": null,
      "stateName": "TopazBE"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Topaz_BETag",
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
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": "Caster",
                "modifier": "Topaz_BE_ReduceDelay"
              },
              "passed": [
                {
                  "name": "Trigger Ability",
                  "from": "Caster [of Battle Event]",
                  "ability": "Topaz_Eidolon4_ReduceDelay"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target Count SUM",
                "target": "All Enemies (AOE)(Living)",
                "conditions": {
                  "name": "Has Modifier",
                  "target": "Use Prior Target(s) Defined",
                  "modifier": "Topaz_BETargetTag[<span class=\"descriptionNumberColor\">Proof of Debt</span>]"
                }
              },
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster",
                  "modifier": "Topaz_BE_FindNoTargetFlag"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target Count SUM",
                "target": "All Enemies (AOE)(Living)",
                "conditions": {
                  "name": "Has Modifier",
                  "target": "Use Prior Target(s) Defined",
                  "modifier": "Topaz_BETargetTag[<span class=\"descriptionNumberColor\">Proof of Debt</span>]"
                }
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Topaz_BE_LaterAttack",
                  "abilitySource": "Caster",
                  "abilityTarget": [
                    {
                      "name": "Target List",
                      "target": "All Enemies (AOE)(Living)"
                    },
                    {
                      "name": "Target Filter",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": "Use Prior Target(s) Defined",
                        "modifier": "Topaz_BETargetTag[<span class=\"descriptionNumberColor\">Proof of Debt</span>]"
                      }
                    }
                  ],
                  "priorityTag": "LevelPerformAvatar",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": false
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Turn End [Anyone]"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        },
        {
          "eventTrigger": "Entity Death [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": "Use Prior Target(s) Defined",
                "modifier": "Topaz_Passive"
              }
            }
          ]
        },
        {
          "eventTrigger": "Entity Put Into Limbo [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": "Use Prior Target(s) Defined",
                "modifier": "Topaz_Passive"
              }
            }
          ]
        },
        {
          "eventTrigger": "When Modifier is Added [Owner]"
        },
        {
          "eventTrigger": "Injected Ability Use [Owner]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Has Flag",
                    "target": "Caster [of Battle Event]",
                    "flagName": "STAT_CTRL"
                  },
                  {
                    "name": "Has Flag",
                    "target": "Caster [of Battle Event]",
                    "flagName": "STAT_CTRL_Frozen"
                  }
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Get Revived [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": "Use Prior Target(s) Defined",
                "modifier": "Topaz_Passive"
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}