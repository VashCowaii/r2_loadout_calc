const configAbility = {
  "fileName": "Xueyi_Xueyi_Ability03_StancePreCalc",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "value": 1,
      "variableName": "MDF_Skill03_StancePreCalc"
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
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  }
}