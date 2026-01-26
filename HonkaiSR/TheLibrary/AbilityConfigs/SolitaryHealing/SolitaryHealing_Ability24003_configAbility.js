const configAbility = {
  "fileName": "SolitaryHealing_Ability24003",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "LC_24003_Main"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "LC_24003_DotDamageAddedRatio[<span class=\"descriptionNumberColor\">DoT Boost</span>]",
      "stackType": "ReplaceByCaster",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageDOT</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (0.24) || RETURN",
                "displayLines": "0.24",
                "constants": [],
                "variables": [
                  0.24
                ]
              }
            }
          ]
        }
      ],
      "description": "Increases DoT dealt by <span class=\"descriptionNumberColor\">#SkillEquip_P2_DotDamageAddedRatio</span>",
      "type": "Buff",
      "effectName": "DoT Boost",
      "statusName": "DoT Boost"
    },
    {
      "name": "Modifier Construction",
      "for": "LC_24003_Main",
      "execute": [
        {
          "eventTrigger": "Entity Death [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team"
                  },
                  {
                    "name": "Target Exists",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target 2}}"
                    }
                  },
                  {
                    "name": "NOT",
                    "condition": {
                      "name": "Is Part Of Team",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target 2}}"
                      },
                      "team": "Enemy Team"
                    }
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "STAT_DOT",
                    "casterFilter": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    }
                  }
                ]
              },
              "passed": [
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": {
                    "operator": "Variables[0] (4) || RETURN",
                    "displayLines": "4",
                    "constants": [],
                    "variables": [
                      4
                    ]
                  },
                  "isFixed": "* ERR"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Owner]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Type",
                "skillType": "Ultimate"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "LC_24003_DotDamageAddedRatio[<span class=\"descriptionNumberColor\">DoT Boost</span>]",
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
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ],
  "isLightcone": true,
  "desc": "Increases the wearer's Break Effect by #1[i]%. When the wearer uses their Ultimate, increases DoT dealt by the wearer by #2[i]%, lasting for #3[i] turn(s). When a target enemy suffering from DoT imposed by the wearer is defeated, regenerates #4[f1] Energy for the wearer.",
  "params": [
    [
      0.2,
      0.24,
      2,
      4
    ],
    [
      0.25,
      0.3,
      2,
      4.5
    ],
    [
      0.3,
      0.36,
      2,
      5
    ],
    [
      0.35,
      0.42,
      2,
      5.5
    ],
    [
      0.4,
      0.48,
      2,
      6
    ]
  ]
}