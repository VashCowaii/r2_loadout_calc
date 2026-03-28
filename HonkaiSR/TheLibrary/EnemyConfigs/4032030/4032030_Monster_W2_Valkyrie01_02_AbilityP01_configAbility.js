const configAbility = {
  "fileName": "4032030_Monster_W2_Valkyrie01_02_AbilityP01",
  "childAbilityList": [
    "4032030_Monster_W2_Valkyrie01_02_AbilityP01"
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
      "modifier": "<a class=\"gModGreen\" id=\"1227649077\">Enemy_W2_Valkyrie01_02_AbilityP01</a>[<span class=\"descriptionNumberColor\">Bitter Fracture</span>]"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-855496844\">Enemy_W2_Valkyrie01_02_EffectController</a>"
    }
  ],
  "whenAdded": [],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}