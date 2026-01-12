const configAbility = {
  "fileName": "SilverWolf_Advanced_Silwolf_Eidolon2",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "M_Silwolf_Eidolon2_Bonus"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Advanced_Silwolf_Eidolon2",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "Defender Finalizes DMG Data",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of",
                "of": "Allied Team(ALL) [Exclude battle mechanics]",
                "target": "Use Prior Target(s) Defined",
                "mustBeAlive2": true
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Silwolf_00_AddModifier_Chance",
                  "value": {
                    "operator": "Variables[0] (1) || RETURN",
                    "displayLines": "1",
                    "constants": [],
                    "variables": [
                      1
                    ]
                  }
                },
                {
                  "name": "Trigger Ability",
                  "from": "Caster",
                  "inherentTarget": "Owner of this Modifier",
                  "ability": "Advanced_Silwolf_PassiveAbility_RandomBug"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "M_Silwolf_Eidolon2_Bonus_OnCharacterCreate",
      "execute": [
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team",
                "target": "Use Prior Target(s) Defined",
                "team": "TeamDark"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Use Prior Target(s) Defined",
                  "modifier": "Advanced_Silwolf_Eidolon2_AllDamageTypeTakenRatio[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (0.2) || RETURN",
                      "displayLines": "0.2",
                      "constants": [],
                      "variables": [
                        0.2
                      ]
                    }
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
      "for": "M_Silwolf_Eidolon2_Bonus",
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": "All Hostile Entities (AOE)(ALL)",
              "modifier": "Advanced_Silwolf_Eidolon2_AllDamageTypeTakenRatio[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (0.2) || RETURN",
                  "displayLines": "0.2",
                  "constants": [],
                  "variables": [
                    0.2
                  ]
                }
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "M_Silwolf_Eidolon2_Bonus_OnCharacterCreate"
            }
          ],
          "priorityLevel": -80
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": "All Hostile Entities (AOE)(ALL)",
          "modifier": "Advanced_Silwolf_Eidolon2",
          "haloStatus": true
        }
      ]
    }
  ]
}