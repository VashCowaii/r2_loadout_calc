const configAbility = {
  "fileName": "8033011_Monster_W1_Mecha03_02_RLElite_Ability07_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Monster_W1_Mecha03_02_Effect"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Caster's Minions}}"
        },
        "value1": "TeamCharacterCount",
        "compareType": ">=",
        "value2": 1
      },
      "passed": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "Monster_Company_Coin[<span class=\"descriptionNumberColor\">Performance Points</span>]",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Enemy_W1_Mecha03_02_RLElite_ReFreshMark"
            },
            {
              "name": "Exit Broken-State",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            },
            {
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "silent": true
            }
          ]
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "searchRandom": true,
      "maxTargets": 1,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "Enemy_W1_Mecha03_02_RLElite_ReFreshMark"
      },
      "ifTargetFound": [
        {
          "name": "Remove from Team Target Grouping",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "stayInTeam": false
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "Enemy_W1_Mecha03_02_RLElite_CountingSoldier01"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "Enemy_W1_Mecha03_02_RLElite_CountingSoldier02"
        },
        {
          "name": "Force Entity Death",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Level Entity}}"
            },
            "value1": "SoldierCount02",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
                "displayLines": "{[Skill05[0]]}",
                "constants": [],
                "variables": [
                  "{[Skill05[0]]}"
                ]
              },
              "enemyList": [
                {
                  "name": "Create Enemy from Custom",
                  "value": "SummonID1",
                  "summonLocation": "FormationRecord"
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Recently Summoned Enemies}}"
              },
              "modifier": "Enemy_W1_Mecha03_02_RLElite_CountingSoldier02"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Level Entity}}"
            },
            "value1": "SoldierCount01",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                "displayLines": "{[Skill05[1]]}",
                "constants": [],
                "variables": [
                  "{[Skill05[1]]}"
                ]
              },
              "enemyList": [
                {
                  "name": "Create Enemy from Custom",
                  "value": "SummonID0",
                  "summonLocation": "FormationRecord"
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Recently Summoned Enemies}}"
              },
              "modifier": "Enemy_W1_Mecha03_02_RLElite_CountingSoldier01"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "Standard_Servant[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "isRefreshFlag",
          "value": 1
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Monster_W1_Mecha03_02_Effect"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "isRefreshFlag",
        "compareType": "=",
        "value2": 1
      },
      "passed": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "searchRandom": true,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value": "WMonster_W1_Mecha_02_PhaseFlag"
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Monster_Company_Coin[<span class=\"descriptionNumberColor\">Performance Points</span>]",
                "invertCondition": true
              },
              {
                "name": "Compare: Monster Rank",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "compareType": "<",
                "value2": 3
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
              "modifier": "Monster_Company_Coin[<span class=\"descriptionNumberColor\">Performance Points</span>]",
              "valuePerStack": {
                "MDF_DamageUpRatio": {
                  "operator": "Variables[0] ({[PassiveSkillInitiate[0]]}) || RETURN",
                  "displayLines": "{[PassiveSkillInitiate[0]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkillInitiate[0]]}"
                  ]
                }
              },
              "casterAssign": "TargetSelf"
            }
          ]
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "variableName": "isRefreshFlag",
      "value": 0
    },
    "Trigger: Ability End"
  ],
  "references": []
}