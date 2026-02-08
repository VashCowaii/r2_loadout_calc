const configAbility = {
  "fileName": "Xueyi_Xueyi_Ability03_StancePreCalc",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "variableName": "MDF_Skill03_StancePreCalc",
      "value": 1
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1101528365\">Xueyi_Ability03_WeakType_BUFF</a>"
    }
  ],
  "references": []
}