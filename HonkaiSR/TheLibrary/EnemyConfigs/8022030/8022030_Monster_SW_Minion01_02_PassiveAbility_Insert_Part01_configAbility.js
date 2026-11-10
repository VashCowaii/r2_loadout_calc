const configAbility = {
  "fileName": "8022030_Monster_SW_Minion01_02_PassiveAbility_Insert_Part01",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "UI Display Event",
      "popUpText": "Decay Eulogy"
    },
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
                "DamageType": "Quantum",
                "Damage": {
                  "displayLines": "{[PassiveSkill01[0]]}"
                },
                "dmgFormula": "Max HP Scaling",
                "Toughness": {
                  "displayLines": "{[PassiveSkill01[5]]}"
                },
                "ToughnessDMGType": {
                  "DamageType": "Quantum"
                },
                "Tags": null,
                "attackType": "Basic ATK"
              }
            },
            "Trigger: Attack End",
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
  ],
  "targetObjectData": {
    "primaryTarget": "{{All Team Members}}"
  },
  "references": []
}