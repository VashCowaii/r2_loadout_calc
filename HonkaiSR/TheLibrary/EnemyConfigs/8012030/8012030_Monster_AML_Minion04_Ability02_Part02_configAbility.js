const configAbility = {
  "fileName": "8012030_Monster_AML_Minion04_Ability02_Part02",
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
      "modifier": "Enemy_AML_Minion04_Overheat[<span class=\"descriptionNumberColor\">Overloaded</span>]"
    },
    "Trigger: Ability End"
  ],
  "references": []
}