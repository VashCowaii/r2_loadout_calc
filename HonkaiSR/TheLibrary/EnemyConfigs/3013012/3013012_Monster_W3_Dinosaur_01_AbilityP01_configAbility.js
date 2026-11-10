const configAbility = {
  "fileName": "3013012_Monster_W3_Dinosaur_01_AbilityP01",
  "childAbilityList": [
    "3013012_Monster_W3_Dinosaur_01_AbilityP01"
  ],
  "skillTrigger": "SkillP01",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"532367944\">Standard_SuperArmorController</a>",
      "valuePerStack": {
        "MDF_SuperArmorDamageResistance": {
          "displayLines": "{[SkillP01[0]]}"
        },
        "MDF_SuperArmorBreakActionDelay": {
          "displayLines": "{[SkillP01[1]]}"
        },
        "MDF_SuperArmorBreakDamageTakenRatio": {
          "displayLines": "{[SkillP01[2]]}"
        }
      }
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