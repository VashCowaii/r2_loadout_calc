const configAbility = {
  "fileName": "Welt_Welt_PassiveAbility01",
  "childAbilityList": [
    "Welt_Welt_PassiveAbility01"
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
      "to": "Caster",
      "modifier": "Welt_Passive01Modifier"
    },
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "AbilityPreShowModifier"
    },
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "AbilityPreShowModifier2"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 6
      },
      "passed": [
        {
          "name": "Update Ability Description",
          "popUpText": "Deals minor Imaginary DMG to one enemy. This attack can Bounce 4 times, with a chance of Slowing hit enemies.",
          "skillTrigger": "Skill02"
        }
      ]
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Welt_Passive01Modifier",
      "execute": [
        {
          "eventTrigger": "Deal Damage End [Owner]: Hit",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": "Target Receiving DMG",
                "flagName": "STAT_SpeedDown"
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": "Target Receiving DMG",
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Imaginary",
                    "Damage": {
                      "operator": "Variables[0] (0.6) || RETURN",
                      "displayLines": "0.6",
                      "constants": [],
                      "variables": [
                        0.6
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Additional DMG"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 2
                  },
                  "passed": [
                    {
                      "name": "Update Energy",
                      "on": "Caster",
                      "value": {
                        "operator": "Variables[0] (3) || RETURN",
                        "displayLines": "3",
                        "constants": [],
                        "variables": [
                          3
                        ]
                      },
                      "isFixed": "* ERR"
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
    },
    {
      "name": "Modifier Construction",
      "for": "AbilityPreShowModifier2",
      "stackData": [],
      "latentQueue": [],
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "target": [
          {
            "name": "Target List",
            "target": "All Hostile Entities (AOE)"
          },
          {
            "name": "Target Filter",
            "conditions": {
              "name": "Has Modifier",
              "target": "Use Prior Target(s) Defined",
              "modifier": "Standard_Confine[<span class=\"descriptionNumberColor\">Imprisonment</span>]",
              "casterFilter": "Caster"
            }
          }
        ],
        "skillType": [
          "Ultimate"
        ],
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": {
            "operator": "Variables[0] (0.4) || RETURN",
            "displayLines": "0.4",
            "constants": [],
            "variables": [
              0.4
            ]
          }
        }
      }
    },
    {
      "name": "Modifier Construction",
      "for": "AbilityPreShowModifier",
      "stackData": [],
      "latentQueue": [],
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "target": [
          {
            "name": "Target List",
            "target": "All Hostile Entities (AOE)"
          },
          {
            "name": "Target Filter",
            "conditions": {
              "name": "NOT",
              "condition": {
                "name": "Has Modifier",
                "target": "Use Prior Target(s) Defined",
                "modifier": "Standard_Confine[<span class=\"descriptionNumberColor\">Imprisonment</span>]",
                "casterFilter": "Caster"
              }
            }
          }
        ],
        "skillType": [
          "Ultimate"
        ],
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": {
            "operator": "Variables[0] (0.4) || RETURN",
            "displayLines": "0.4",
            "constants": [],
            "variables": [
              0.4
            ]
          }
        }
      }
    }
  ]
}