const configAbility = {
  "fileName": "3003040_Monster_W3_Figure_Ability05_Part02",
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
      "modifier": "<a class=\"gModGreen\" id=\"-25601954\">Monster_W3_Figure_ChargeEffect</a>[<span class=\"descriptionNumberColor\">Holy Night</span>]"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "searchRandom": true,
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2144716663\">Standard_CTRL_Sleep</a>[<span class=\"descriptionNumberColor\">Alien Dream</span>]",
          "duration": {
            "displayLines": "{[Skill05[2]]}"
          },
          "baseChance": {
            "displayLines": "{[Skill05[1]]}"
          },
          "valuePerStack": {
            "MDF_HealPercentage": {
              "displayLines": "{[Skill02[3]]}"
            },
            "MDF_AllDamageAddedRatio": {
              "displayLines": "{[Skill02[2]]}"
            }
          }
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}