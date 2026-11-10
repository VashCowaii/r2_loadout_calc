const configAbility = {
  "fileName": "3025016_Monster_W3_Sunday_Ability03_Part02",
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
      "modifier": "<a class=\"gModGreen\" id=\"2144716663\">Standard_CTRL_Sleep</a>[<span class=\"descriptionNumberColor\">Alien Dream</span>]",
      "duration": {
        "displayLines": "{[Skill03[1]]}"
      },
      "baseChance": {
        "displayLines": "{[Skill03[0]]}"
      },
      "valuePerStack": {
        "MDF_AllDamageAddedRatio": 0.5
      }
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": []
}