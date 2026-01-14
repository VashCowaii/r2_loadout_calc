const configAbility = {
  "fileName": "IncessantRain_Ability23007",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "LC_23007_Main"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "LC_23007_DamageTakenUp[<span class=\"descriptionNumberColor\">Aether Code</span>]",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (0.12) || RETURN",
                "displayLines": "0.12",
                "constants": [],
                "variables": [
                  0.12
                ]
              }
            }
          ]
        }
      ],
      "description": "Increases DMG taken by <span class=\"descriptionNumberColor\">#SkillEquip_P3_DamageTakenRatio</span>.",
      "type": "Debuff",
      "effectName": "Vulnerability",
      "statusName": "Aether Code"
    },
    {
      "name": "Modifier Construction",
      "for": "LC_23007_Target"
    },
    {
      "name": "Modifier Construction",
      "for": "LC_23007_Main",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": "Target Receiving DMG",
                "value1": "StatusCount",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (3) || RETURN",
                  "displayLines": "3",
                  "constants": [],
                  "variables": [
                    3
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
                      "value": "0.12"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "Find New Target",
              "from": "Ability Target List",
              "searchRandom": true,
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Flag_23007_1",
                "compareType": "=",
                "value2": 1
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Use Prior Target(s) Defined",
                  "modifier": "LC_23007_Target"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Owner]: Start",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "Flag_23007_1",
              "value": 1
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "Find New Target",
              "from": "All Hostile Entities (AOE)",
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": "Use Prior Target(s) Defined",
                    "modifier": "LC_23007_Target"
                  },
                  {
                    "name": "NOT",
                    "condition": {
                      "name": "Has Modifier",
                      "target": "Use Prior Target(s) Defined",
                      "modifier": "LC_23007_DamageTakenUp[<span class=\"descriptionNumberColor\">Aether Code</span>]"
                    }
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Use Prior Target(s) Defined",
                  "modifier": "LC_23007_DamageTakenUp[<span class=\"descriptionNumberColor\">Aether Code</span>]",
                  "duration": 1,
                  "baseChance": {
                    "operator": "Variables[0] (1) || RETURN",
                    "displayLines": "1",
                    "constants": [],
                    "variables": [
                      1
                    ]
                  }
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "variableName": "Flag_23007_1",
              "value": 0
            },
            {
              "name": "Remove Events/Bonuses",
              "to": "All Hostile Entities (AOE)",
              "modifier": "LC_23007_Target"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ],
  "isLightcone": true,
  "desc": "Increases the wearer's Effect Hit Rate by #1[i]%. When the wearer deals DMG to an enemy that currently has #4[i] or more debuffs, increases the wearer's CRIT Rate by #5[i]%. After the wearer uses their Basic ATK, Skill, or Ultimate, there is a #2[i]% base chance to implant Aether Code on a random hit target that does not yet have it. Targets with Aether Code receive #3[i]% increased DMG for 1 turn.",
  "params": [
    [
      0.24,
      1,
      0.12,
      3,
      0.12
    ],
    [
      0.28,
      1,
      0.14,
      3,
      0.14
    ],
    [
      0.32,
      1,
      0.16,
      3,
      0.16
    ],
    [
      0.36,
      1,
      0.18,
      3,
      0.18
    ],
    [
      0.4,
      1,
      0.2,
      3,
      0.2
    ]
  ]
}