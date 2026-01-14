const compositeAbilityObject = {
  "fullCharacterName": "Cruising in the Stellar Sea",
  "trimCharacterName": "CruisingintheStellarSea",
  "abilityList": [
    "CruisingintheStellarSea_Ability24001"
  ],
  "fixedStats": {
    "1": {
      "CritRateBase": 0.08
    },
    "2": {
      "CritRateBase": 0.1
    },
    "3": {
      "CritRateBase": 0.12
    },
    "4": {
      "CritRateBase": 0.14
    },
    "5": {
      "CritRateBase": 0.16
    }
  },
  "abilityObject": {
    "CruisingintheStellarSea_Ability24001": {
      "fileName": "CruisingintheStellarSea_Ability24001",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "LC_24001_Main"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "LC_24001_AttackAddedRatio[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (0.2) || RETURN",
                    "displayLines": "0.2",
                    "constants": [],
                    "variables": [
                      0.2
                    ]
                  }
                }
              ]
            }
          ],
          "description": "ATK +<span class=\"descriptionNumberColor\">#SkillEquip_P4_AttackAddedRatio</span>.",
          "type": "Buff",
          "effectName": "ATK Boost",
          "statusName": "ATK Boost"
        },
        {
          "name": "Modifier Construction",
          "for": "LC_24001_Main",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": "Target Receiving DMG",
                    "value1": "CurrentHP%",
                    "compareType": "<=",
                    "value2": {
                      "operator": "Variables[0] (0.5) || RETURN",
                      "displayLines": "0.5",
                      "constants": [],
                      "variables": [
                        0.5
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateSUM</span>&nbsp;",
                          "value": "0.08"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Got a Kill [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "LC_24001_AttackAddedRatio[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
                  "duration": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "isLightcone": true,
      "desc": "Increases the wearer's CRIT Rate by #1[i]%, and increases their CRIT Rate against enemies with HP percentage #2[i]% or less by an extra #3[i]%. When the wearer defeats an enemy, their ATK is increased by #4[i]% for #5[i] turn(s).",
      "params": [
        [
          0.08,
          0.5,
          0.08,
          0.2,
          2
        ],
        [
          0.1,
          0.5,
          0.1,
          0.25,
          2
        ],
        [
          0.12,
          0.5,
          0.12,
          0.3,
          2
        ],
        [
          0.14,
          0.5,
          0.14,
          0.35,
          2
        ],
        [
          0.16,
          0.5,
          0.16,
          0.4,
          2
        ]
      ]
    }
  },
  "isLightcone": true
}