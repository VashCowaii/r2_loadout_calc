const configAbility = {
  "fileName": "8022020_Monster_SW_Minion01_01_PassiveAbility_Insert_Part01",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "UI Display Event",
      "popUpText": "Entomon Eulogy"
    },
    "Deleted bullshit",
    {
      "name": "Exit Broken-State",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    },
    {
      "name": "Animation Event",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "state": "PassiveSkill01",
      "passed": [
        {
          "name": "Animation Task",
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              "AttackScaling": {
                "DamageType": "Wind",
                "Damage": {
                  "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
                  "displayLines": "{[PassiveSkill01[0]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill01[0]]}"
                  ]
                },
                "dmgFormula": "Max HP Scaling",
                "Toughness": {
                  "operator": "Variables[0] ({[PassiveSkill01[5]]}) || RETURN",
                  "displayLines": "{[PassiveSkill01[5]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill01[5]]}"
                  ]
                },
                "ToughnessDMGType": {
                  "DamageType": "Wind"
                },
                "Tags": null,
                "attackType": "Basic ATK"
              }
            },
            "Trigger: Attack End",
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Level Entity}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"664236628\">StageAbility_RogueDLC_Floor03_02_Modifier</a>"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members(Exclude Self)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-658511969\">Monster_SW_Boss_DamageTakenUp</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
                  "duration": {
                    "operator": "Variables[0] ({[PassiveSkill01[3]]}) || RETURN",
                    "displayLines": "{[PassiveSkill01[3]]}",
                    "constants": [],
                    "variables": [
                      "{[PassiveSkill01[3]]}"
                    ]
                  },
                  "stackLimit": {
                    "operator": "Variables[0] ({[PassiveSkill01[4]]}) || RETURN",
                    "displayLines": "{[PassiveSkill01[4]]}",
                    "constants": [],
                    "variables": [
                      "{[PassiveSkill01[4]]}"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_DamageTakenUpRatio_PerLayer": {
                      "operator": "Variables[0] ({[PassiveSkill01[2]]}) || Variables[1] ({[Skill03[5]]}) || ADD || RETURN",
                      "displayLines": "({[PassiveSkill01[2]]} + {[Skill03[5]]})",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill01[2]]}",
                        "{[Skill03[5]]}"
                      ]
                    }
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                    "displayLines": "{[PassiveSkill01[1]]}",
                    "constants": [],
                    "variables": [
                      "{[PassiveSkill01[1]]}"
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members(Exclude Self)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-658511969\">Monster_SW_Boss_DamageTakenUp</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
                  "duration": {
                    "operator": "Variables[0] ({[PassiveSkill01[3]]}) || RETURN",
                    "displayLines": "{[PassiveSkill01[3]]}",
                    "constants": [],
                    "variables": [
                      "{[PassiveSkill01[3]]}"
                    ]
                  },
                  "stackLimit": {
                    "operator": "Variables[0] ({[PassiveSkill01[4]]}) || RETURN",
                    "displayLines": "{[PassiveSkill01[4]]}",
                    "constants": [],
                    "variables": [
                      "{[PassiveSkill01[4]]}"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_DamageTakenUpRatio_PerLayer": {
                      "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
                      "displayLines": "{[PassiveSkill01[2]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill01[2]]}"
                      ]
                    }
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                    "displayLines": "{[PassiveSkill01[1]]}",
                    "constants": [],
                    "variables": [
                      "{[PassiveSkill01[1]]}"
                    ]
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "references": []
}