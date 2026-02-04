const configAbility = {
  "fileName": "1004030_Monster_W1_Bronya_PassiveAbilityInsert",
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
      "modifier": "Enemy_W1_Bronya_WeakPointProtected[<span class=\"descriptionNumberColor\">Weakness Protected</span>]"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Modifier Holder}}"
      },
      "scope": "TargetEntity",
      "variableName": "W1_Bronya_00_InsertFlag"
    }
  ],
  "references": []
}