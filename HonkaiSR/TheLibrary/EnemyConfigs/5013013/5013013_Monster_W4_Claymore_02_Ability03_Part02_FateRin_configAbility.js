const configAbility = {
  "fileName": "5013013_Monster_W4_Claymore_02_Ability03_Part02_FateRin",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-40648707\">MModifier_Monster_W4_Claymore_02_Ability03_Eff</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1553959515\">MModifier_Monster_W4_Claymore_02_Ability03_Aim_FateRin</a>[<span class=\"descriptionNumberColor\">Charging</span>]"
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}