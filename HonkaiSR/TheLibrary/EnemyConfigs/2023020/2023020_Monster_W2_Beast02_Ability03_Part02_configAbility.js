const configAbility = {
  "fileName": "2023020_Monster_W2_Beast02_Ability03_Part02",
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
      "modifier": "<a class=\"gModGreen\" id=\"1692594642\">Monster_Standard_Layer_DamageUP</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
      "duration": {
        "displayLines": "{[Skill03[1]]}"
      },
      "stackLimit": {
        "displayLines": "{[Skill03[2]]}"
      },
      "valuePerStack": {
        "MDF_DamageAddedRatio": {
          "displayLines": "{[Skill03[0]]}"
        },
        "MDF_MaxLayer": {
          "displayLines": "{[Skill03[2]]}"
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