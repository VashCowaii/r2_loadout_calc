const configAbility = {
  "fileName": "8024011_Monster_SW_Boss_PassiveAbility_Insert_Part01",
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
                  "operator": "Variables[0] ({[PassiveSkill02[0]]}) || RETURN",
                  "displayLines": "{[PassiveSkill02[0]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill02[0]]}"
                  ]
                },
                "dmgFormula": "Max HP Scaling",
                "Toughness": {
                  "operator": "Variables[0] ({[PassiveSkill02[5]]}) || RETURN",
                  "displayLines": "{[PassiveSkill02[5]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill02[5]]}"
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
                    "operator": "Variables[0] ({[PassiveSkill02[3]]}) || RETURN",
                    "displayLines": "{[PassiveSkill02[3]]}",
                    "constants": [],
                    "variables": [
                      "{[PassiveSkill02[3]]}"
                    ]
                  },
                  "stackLimit": {
                    "operator": "Variables[0] ({[PassiveSkill02[4]]}) || RETURN",
                    "displayLines": "{[PassiveSkill02[4]]}",
                    "constants": [],
                    "variables": [
                      "{[PassiveSkill02[4]]}"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_DamageTakenUpRatio_PerLayer": {
                      "operator": "Variables[0] ({[PassiveSkill02[2]]}) || Variables[1] ({[PassiveSkill01[1]]}) || ADD || RETURN",
                      "displayLines": "({[PassiveSkill02[2]]} + {[PassiveSkill01[1]]})",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill02[2]]}",
                        "{[PassiveSkill01[1]]}"
                      ]
                    }
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] ({[PassiveSkill02[1]]}) || RETURN",
                    "displayLines": "{[PassiveSkill02[1]]}",
                    "constants": [],
                    "variables": [
                      "{[PassiveSkill02[1]]}"
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
                    "operator": "Variables[0] ({[PassiveSkill02[3]]}) || RETURN",
                    "displayLines": "{[PassiveSkill02[3]]}",
                    "constants": [],
                    "variables": [
                      "{[PassiveSkill02[3]]}"
                    ]
                  },
                  "stackLimit": {
                    "operator": "Variables[0] ({[PassiveSkill02[4]]}) || RETURN",
                    "displayLines": "{[PassiveSkill02[4]]}",
                    "constants": [],
                    "variables": [
                      "{[PassiveSkill02[4]]}"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_DamageTakenUpRatio_PerLayer": {
                      "operator": "Variables[0] ({[PassiveSkill02[2]]}) || RETURN",
                      "displayLines": "{[PassiveSkill02[2]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill02[2]]}"
                      ]
                    }
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] ({[PassiveSkill02[1]]}) || RETURN",
                    "displayLines": "{[PassiveSkill02[1]]}",
                    "constants": [],
                    "variables": [
                      "{[PassiveSkill02[1]]}"
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