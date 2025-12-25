const configAbility = {
  "fileName": "SigoniatheUnclaimedDesolation_Ability53131",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "Relic_313_Main"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Relic_313_CriticalDamage[<span class=\"descriptionNumberColor\">Sigonia, the Unclaimed Desolation</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": "Owner of this Modifier",
              "valueType": "Layer",
              "variableName": "MDF_Layer",
              "multiplier": 1
            },
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (0.04) || Variables[1] (MDF_Layer) || MUL || RETURN",
                "displayLines": "(0.04 * MDF_Layer)",
                "constants": [],
                "variables": [
                  0.04,
                  "MDF_Layer"
                ]
              }
            }
          ]
        }
      ],
      "description": "Each stack increases CRIT DMG dealt by <span class=\"descriptionNumberColor\">#SkillRelic_313_2_P1_CriticalDamage</span>, up to <span class=\"descriptionNumberColor\">#SkillRelic_313_2_P2_MaxLayer</span> stack(s).",
      "type": "Buff",
      "effectName": "CRIT DMG Boost",
      "statusName": "Sigonia, the Unclaimed Desolation",
      "stackLimit": 20,
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "Relic_313_Sub",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "Got a Kill [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": "Caster",
                "modifier": "Relic_313_CriticalDamage[<span class=\"descriptionNumberColor\">Sigonia, the Unclaimed Desolation</span>]"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Relic_313_CriticalDamage[<span class=\"descriptionNumberColor\">Sigonia, the Unclaimed Desolation</span>]",
                    "compareType": "<",
                    "value2": {
                      "operator": "Variables[0] (10) || RETURN",
                      "displayLines": "10",
                      "constants": [],
                      "variables": [
                        10
                      ]
                    },
                    "valueType": "Layer"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Caster",
                      "modifier": "Relic_313_CriticalDamage[<span class=\"descriptionNumberColor\">Sigonia, the Unclaimed Desolation</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (10) || RETURN",
                        "displayLines": "10",
                        "constants": [],
                        "variables": [
                          10
                        ]
                      }
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster",
                  "modifier": "Relic_313_CriticalDamage[<span class=\"descriptionNumberColor\">Sigonia, the Unclaimed Desolation</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (10) || RETURN",
                    "displayLines": "10",
                    "constants": [],
                    "variables": [
                      10
                    ]
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
      "for": "Relic_313_Main",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team",
                "target": "Use Prior Target(s) Defined",
                "team": "TeamLight"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Use Prior Target(s) Defined",
                  "modifier": "Relic_313_Sub"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": "All Team Members(In Context)",
              "modifier": "Relic_313_Sub"
            }
          ],
          "priorityLevel": -80
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ],
  "isLightcone": true,
  "isRelic": true,
  "desc": [
    "Increases the wearer's CRIT Rate by 4%. When an enemy target gets defeated, the wearer's CRIT DMG increases by 4%, stacking up to 10 time(s)."
  ],
  "params": [
    [
      0.04,
      10,
      0.04
    ],
    []
  ]
}