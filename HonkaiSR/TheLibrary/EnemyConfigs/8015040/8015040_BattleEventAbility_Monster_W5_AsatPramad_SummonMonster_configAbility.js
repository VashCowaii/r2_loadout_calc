const configAbility = {
  "fileName": "8015040_BattleEventAbility_Monster_W5_AsatPramad_SummonMonster",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "UI Display Event",
      "popUpText": "Take the Stage"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"817654149\">Enemy_W5_AsatPramad_SummonMonster</a>",
      "casterAssign": "TargetSelf"
    }
  ],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  },
  "references": []
}