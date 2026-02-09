const configAbility = {
  "fileName": "8003041_Monster_XP_Elite02_01_AbilityP01_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "variableName": "EnergyLayer",
      "value": 7
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-412122860\">Monster_XP_Elite02_01_Battle_02</a>"
    }
  ],
  "references": []
}