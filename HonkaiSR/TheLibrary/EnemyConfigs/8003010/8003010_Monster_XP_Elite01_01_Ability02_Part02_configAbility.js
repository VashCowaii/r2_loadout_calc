const configAbility = {
  "fileName": "8003010_Monster_XP_Elite01_01_Ability02_Part02",
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
      "modifier": "<a class=\"gModGreen\" id=\"-557071994\">XP_Ice_Elite_Powerful_Modifier</a>[<span class=\"descriptionNumberColor\">Freezing Point</span>]",
      "valuePerStack": {
        "Modifier_AllDamageTypeResistance": {
          "displayLines": "{[Skill02[0]]}"
        },
        "Modifier_StanceWeakAddedRatio": {
          "displayLines": "{[Skill02[1]]}"
        },
        "Modifier_Stance": {
          "displayLines": "{[Skill02[2]]}"
        }
      }
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "StanceBreak_Sign",
      "resetValue": 1,
      "scope": "TargetEntity"
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}