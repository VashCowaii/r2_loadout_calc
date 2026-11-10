const configAbility = {
  "fileName": "2032040_Monster_W2_FeixiaoPart_01_PassiveAbilityInitiate",
  "skillTrigger": "Passive01",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "Define Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Enemy Feixiao: Self}}"
      },
      "scope": "TargetEntity",
      "value": {
        "displayLines": "{[Skill02[0]]}"
      },
      "variableName": "Skill04DamagePercentage"
    },
    {
      "name": "Define Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Nebula Devourer: Self Initial}}"
      },
      "scope": "TargetEntity",
      "value": {
        "displayLines": "{[Skill01[0]]}"
      },
      "variableName": "Skill04DamagePercentage"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1928525254\">Monster_W2_FeixiaoPart_SuperArmorController</a>",
      "valuePerStack": {
        "MDF_SuperArmorDamageResistance": {
          "displayLines": "{[Skill01[1]]}"
        },
        "MDF_BreakActionDelay": {
          "displayLines": "{[Skill01[2]]}"
        },
        "MDF_SuperArmorBreakDamageAddedRatio": {
          "displayLines": "{[Skill01[3]]}"
        }
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1429897457\">Monster_W2_FeixiaoPart_LockHP</a>"
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}