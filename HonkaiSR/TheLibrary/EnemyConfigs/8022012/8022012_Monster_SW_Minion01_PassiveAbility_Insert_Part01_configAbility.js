const configAbility = {
  "fileName": "8022012_Monster_SW_Minion01_PassiveAbility_Insert_Part01",
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
                  "displayLines": "{[PassiveSkill01[0]]}"
                },
                "dmgFormula": "Max HP Scaling",
                "Toughness": {
                  "displayLines": "{[PassiveSkill01[5]]}"
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
                    "displayLines": "{[PassiveSkill01[3]]}"
                  },
                  "stackLimit": {
                    "displayLines": "{[PassiveSkill01[4]]}"
                  },
                  "valuePerStack": {
                    "MDF_DamageTakenUpRatio_PerLayer": {
                      "displayLines": "({[PassiveSkill01[2]]} + {[Skill03[2]]})"
                    }
                  },
                  "addStacksPerTrigger": {
                    "displayLines": "{[PassiveSkill01[1]]}"
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
                    "displayLines": "{[PassiveSkill01[3]]}"
                  },
                  "stackLimit": {
                    "displayLines": "{[PassiveSkill01[4]]}"
                  },
                  "valuePerStack": {
                    "MDF_DamageTakenUpRatio_PerLayer": {
                      "displayLines": "{[PassiveSkill01[2]]}"
                    }
                  },
                  "addStacksPerTrigger": {
                    "displayLines": "{[PassiveSkill01[1]]}"
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{All Team Members}}"
  },
  "references": []
}