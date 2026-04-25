const configAbility = {
  "fileName": "5022010_Monster_W5_RipperPart_Ability01_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1271467699\">Monster_W5_RipperPart_Bonus</a>[<span class=\"descriptionNumberColor\">Wicked Grin</span>]",
      "stackLimit": {
        "operator": "Variables[0] (Buff_MaxLayer) || RETURN",
        "displayLines": "Buff_MaxLayer",
        "constants": [],
        "variables": [
          "Buff_MaxLayer"
        ]
      },
      "valuePerStack": {
        "MDF_DamageUpRatio_PerLayer": {
          "operator": "Variables[0] (Buff_DamageUpRatio) || RETURN",
          "displayLines": "Buff_DamageUpRatio",
          "constants": [],
          "variables": [
            "Buff_DamageUpRatio"
          ]
        }
      }
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": []
}