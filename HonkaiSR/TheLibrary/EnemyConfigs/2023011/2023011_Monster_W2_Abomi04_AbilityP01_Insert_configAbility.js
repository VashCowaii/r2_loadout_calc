const configAbility = {
  "fileName": "2023011_Monster_W2_Abomi04_AbilityP01_Insert",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Modifier Holder}}"
      },
      "modifier": "Enemy_W2_Abomi04_HitToHeal[<span class=\"descriptionNumberColor\">Draining Hit</span>]"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Modifier Holder}}"
      },
      "scope": "TargetEntity",
      "variableName": "W2_Abomi04_00_InsertFlag"
    }
  ],
  "references": []
}