const configAbility = {
  "fileName": "2023030_Monster_XP_Elite02_02_Ability05_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1633463751\">Monster_XP_Elite02_02_ChargeEffect</a>[<span class=\"descriptionNumberColor\">Japa</span>]"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-228419305\">Standard_BlackBlood</a>[<span class=\"descriptionNumberColor\">Prana-Siphoned</span>]",
      "duration": {
        "displayLines": "{[Skill05[1]]}"
      },
      "baseChance": {
        "displayLines": "{[Skill05[2]]}"
      },
      "valuePerStack": {
        "MDF_DirtyHPRatio": {
          "displayLines": "{[Skill05[0]]}"
        }
      },
      "success": []
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}