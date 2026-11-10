const configAbility = {
  "fileName": "3003041_Monster_W3_Figure_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Shot Fired"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"2144716663\">Standard_CTRL_Sleep</a>[<span class=\"descriptionNumberColor\">Alien Dream</span>]",
      "duration": {
        "displayLines": "{[Skill02[1]]}"
      },
      "baseChance": {
        "displayLines": "{[Skill02[0]]}"
      },
      "valuePerStack": {
        "MDF_HealPercentage": {
          "displayLines": "{[Skill02[3]]}"
        },
        "MDF_AllDamageAddedRatio": {
          "displayLines": "{[Skill02[2]]}"
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