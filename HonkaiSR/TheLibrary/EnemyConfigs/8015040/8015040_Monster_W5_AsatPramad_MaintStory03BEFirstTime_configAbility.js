const configAbility = {
  "fileName": "8015040_Monster_W5_AsatPramad_MaintStory03BEFirstTime",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Asat Pramad: 2}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1041197693\">Enemy_W5_AsatPramad_MainStory03LockHPFirstTime</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Asat Pramad: 2}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"766895631\">Standard_Monster_Floating_DamageReduceController</a>"
    },
    {
      "name": "Inject Extra-Turn",
      "actionTag": null,
      "skillType": "ControlSkill03",
      "target": {
        "name": "Add Target by Unique Identifier",
        "identifier": "HimekoBE"
      },
      "afterInjection": []
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}