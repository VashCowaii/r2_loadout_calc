const configAbility = {
  "fileName": "1023021_Monster_W1_Mecha03_01_Ability09_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Looped Event",
      "maxLoops": 10,
      "execute": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "displayLines": "({[Skill09[0]]} * 0.1)"
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "10%"
          }
        }
      ]
    },
    "Trigger: Attack End",
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target List}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1137901449\">Monster_W1_Mecha03_01_Frozen</a>[<span class=\"descriptionNumberColor\">Deep Freeze</span>]",
      "baseChance": 1,
      "stackLimit": {
        "displayLines": "{[Skill06[3]]}"
      },
      "valuePerStack": {
        "MDF_IceResistanceRatio_PerLayer": {
          "displayLines": "{[Skill06[1]]}"
        },
        "MDF_SpeedAddedDelta_PerLayer": {
          "displayLines": "{[Skill06[0]]}"
        },
        "MDF_MaxLayer": {
          "displayLines": "{[Skill06[3]]}"
        }
      }
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1705391722\">Monster_W1_Mecha03_01_Rage</a>[<span class=\"descriptionNumberColor\">Surpass</span>]"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1421560478\">Monster_W1_Mecha03_01_Sign</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
      "onlyRemoveOwnersInstance": true
    },
    {
      "name": "Change Entity Turn-State",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "phase": "Phase1"
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": []
}