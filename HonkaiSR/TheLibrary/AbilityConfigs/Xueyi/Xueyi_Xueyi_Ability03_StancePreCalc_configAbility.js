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
      "modifier": "Xueyi_Ability03_WeakType_BUFF"
    }
  ],
  "references": []
}