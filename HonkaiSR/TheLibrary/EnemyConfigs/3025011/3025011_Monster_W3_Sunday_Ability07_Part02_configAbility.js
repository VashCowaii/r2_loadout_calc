const configAbility = {
  "fileName": "3025011_Monster_W3_Sunday_Ability07_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-2045350392\">Enemy_W3_Sunday_Ability07_Shield_Modifier</a>[<span class=\"descriptionNumberColor\">If We Live In the Light</span>]",
      "valuePerStack": {
        "MDF_Ability07_P2_DamageRatio": {
          "operator": "Variables[0] (UnusedUnderThisBase_288) || RETURN",
          "displayLines": "UnusedUnderThisBase_288",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_288"
          ]
        }
      }
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}