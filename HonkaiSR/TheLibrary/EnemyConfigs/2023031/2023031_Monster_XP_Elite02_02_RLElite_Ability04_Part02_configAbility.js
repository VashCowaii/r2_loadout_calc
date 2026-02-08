const configAbility = {
  "fileName": "2023031_Monster_XP_Elite02_02_RLElite_Ability04_Part02",
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
      "modifier": "<a class=\"gModGreen\" id=\"-773012193\">Monster_XP_Elite02_02_RLElite_ChargeEffect</a>[<span class=\"descriptionNumberColor\">Japa</span>]"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "SpecialFlag",
        "compareType": "=",
        "value2": 0,
        "contextScope": "TargetEntity"
      }
    },
    "Trigger: Ability End"
  ],
  "references": []
}