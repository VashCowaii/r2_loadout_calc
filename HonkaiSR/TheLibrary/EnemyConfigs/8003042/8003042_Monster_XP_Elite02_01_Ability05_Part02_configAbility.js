const configAbility = {
  "fileName": "8003042_Monster_XP_Elite02_01_Ability05_Part02",
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
      "modifier": "<a class=\"gModGreen\" id=\"1400625126\">Monster_XP_Elite02_01_Effect</a>"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "EnergyLayer",
      "value": 9
    },
    "Trigger: Ability End"
  ],
  "references": []
}